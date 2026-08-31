"use client";

import dynamic from "next/dynamic";
import {
  BlueprintIcon,
  CostControlIcon,
  CriticalPathIcon,
  FieldLogsIcon,
  PurchaseOrderIcon,
} from "@/components/icons/Icons";
import { cn } from "@/lib/utils";
import { HERO } from "@/content/home";
import { SceneCallout } from "./SceneCallout";

// The R3F canvas touches window/WebGL on mount — keep it out of the SSR
// pass entirely rather than fighting hydration mismatches.
const Scene3D = dynamic(() => import("./Scene3D").then((m) => m.Scene3D), { ssr: false });

const ICONS = {
  blueprint: BlueprintIcon,
  purchaseOrder: PurchaseOrderIcon,
  costControl: CostControlIcon,
  criticalPath: CriticalPathIcon,
  fieldLogs: FieldLogsIcon,
} as const;

// Preset anchors for the five callouts, tuned against the building's
// actual silhouette in the 600×480 scene aspect so each card reads as
// attached to a real part of the structure (foundation, mid-rise, crane)
// rather than scattered at random.
const CALLOUT_POSITIONS: Record<string, string> = {
  "top-left": "left-[1%] top-[10%]",
  "top-right": "right-[2%] top-[4%]",
  "mid-right": "right-[-1%] top-[44%]",
  "bottom-right": "right-[4%] bottom-[20%]",
  "bottom-left": "left-[-1%] bottom-[8%]",
};

// Dashed leader lines from each card's inner edge to a point on the
// building/crane silhouette below — the detail that makes the callouts
// read as attached to the structure rather than a scattered UI overlay.
// Coordinates are percent-of-container, same space as CALLOUT_POSITIONS
// above. Rendered as a rotated div (see ConnectorLine), not an <svg>.
const CONNECTOR_LINES: Record<string, { x1: number; y1: number; x2: number; y2: number }> = {
  "top-left": { x1: 29, y1: 21, x2: 39, y2: 35 },
  "top-right": { x1: 70, y1: 15, x2: 63, y2: 24 },
  "mid-right": { x1: 71, y1: 49, x2: 60, y2: 50 },
  "bottom-right": { x1: 68, y1: 71, x2: 58, y2: 63 },
  "bottom-left": { x1: 27, y1: 82, x2: 35, y2: 76 },
};

// The scene's fixed aspect ratio (matches aspect-[600/480] below) — lets a
// straight line be derived purely from percent coordinates, without ever
// reading the container's actual rendered pixel size.
const SCENE_ASPECT = 480 / 600;

function ConnectorLine({
  x1,
  y1,
  x2,
  y2,
  delayMs,
  reduceMotion,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delayMs: number;
  reduceMotion?: boolean | null;
}) {
  const dxPct = x2 - x1;
  const dyPct = (y2 - y1) * SCENE_ASPECT;
  const lengthPct = Math.sqrt(dxPct * dxPct + dyPct * dyPct);
  const angleDeg = (Math.atan2(dyPct, dxPct) * 180) / Math.PI;
  const animStyle = reduceMotion ? undefined : { animationDelay: `${delayMs}ms` };

  return (
    <>
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute h-0 origin-top-left border-t border-dashed border-primary-300",
          !reduceMotion && "animate-connector-fade"
        )}
        style={{ left: `${x1}%`, top: `${y1}%`, width: `${lengthPct}%`, transform: `rotate(${angleDeg}deg)`, ...animStyle }}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600",
          !reduceMotion && "animate-connector-fade"
        )}
        style={{ left: `${x2}%`, top: `${y2}%`, ...animStyle }}
      />
    </>
  );
}

const CALLOUT_BASE_DELAY_MS = 1500;
const CALLOUT_STAGGER_MS = 220;

/**
 * The hero's visual anchor: a realistic 3D construction scene (half-built
 * concrete-and-steel frame + working tower crane, see scene/*) with
 * floating module callouts layered over it in HTML. Shared between the
 * desktop and mobile hero slots — `compact` just trims which callouts
 * render, since there isn't room for all five without overlap below
 * `lg`.
 */
export function HeroVisual({
  reduceMotion,
  compact = false,
  className,
}: {
  reduceMotion?: boolean | null;
  compact?: boolean;
  className?: string;
}) {
  const callouts = compact
    ? HERO.sceneCallouts.filter((c) => c.corner !== "mid-right" && c.corner !== "bottom-left")
    : HERO.sceneCallouts;

  return (
    <div className={cn("relative aspect-[600/480] w-full", className)}>
      {/* Soft ambient glow behind the render — plane 0 of this stage,
          gives the scene a light source to sit in rather than floating on
          flat page background. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_55%_55%_at_50%_42%,var(--primary-100),transparent_70%)] blur-2xl"
      />
      {/* Out-of-focus "bokeh" fragments — echoes the depth-of-field cubes
          in the reference render, cheap to fake in DOM rather than adding
          real postprocessing blur to the WebGL scene. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-5 right-6 hidden h-16 w-16 rotate-12 rounded-2xl bg-neutral-300/60 blur-md sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 -left-5 hidden h-11 w-11 -rotate-6 rounded-xl bg-primary-300/50 blur-md sm:block"
      />

      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <Scene3D reduceMotion={!!reduceMotion} />
      </div>

      {!compact &&
        callouts.map((callout, i) => (
          <ConnectorLine
            key={`line-${callout.id}`}
            {...CONNECTOR_LINES[callout.corner]}
            delayMs={CALLOUT_BASE_DELAY_MS + i * CALLOUT_STAGGER_MS + 250}
            reduceMotion={reduceMotion}
          />
        ))}

      {callouts.map((callout, i) => {
        const Icon = ICONS[callout.icon as keyof typeof ICONS];
        return (
          <SceneCallout
            key={callout.id}
            icon={<Icon />}
            label={callout.label}
            detail={callout.detail}
            tone={callout.tone}
            delayMs={CALLOUT_BASE_DELAY_MS + i * CALLOUT_STAGGER_MS}
            reduceMotion={reduceMotion}
            className={CALLOUT_POSITIONS[callout.corner]}
          />
        );
      })}
    </div>
  );
}
