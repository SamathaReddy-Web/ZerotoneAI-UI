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
        className="pointer-events-none absolute -inset-16 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_58%_58%_at_50%_44%,var(--primary-100),transparent_72%)] blur-2xl"
      />
      {/* Out-of-focus fragments that read as the construction world
          continuing past the frame edge — neutral/warm concrete tones
          (not brand blue, which is reserved for the data layer), sized
          and placed so they bleed past the canvas boundary rather than
          sitting neatly inside it. Cheap DOM blur, not a WebGL pass. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-4 hidden h-20 w-20 rotate-12 rounded-2xl bg-neutral-300/55 blur-md sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -right-10 hidden h-28 w-32 -rotate-6 rounded-3xl bg-[#b7ac97]/45 blur-lg sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 -left-8 hidden h-14 w-14 -rotate-6 rounded-xl bg-primary-300/45 blur-md sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-1/3 hidden h-10 w-10 rotate-3 rounded-lg bg-neutral-300/50 blur-sm sm:block"
      />

      {/* No card chrome on this wrapper — a CSS mask fades the canvas
          itself toward its edges (on top of the transparent WebGL
          background set in Scene3D.tsx) so the render blends into the
          page rather than reading as a framed rectangle with a visible
          boundary. */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          maskImage:
            "radial-gradient(ellipse 94% 88% at 50% 46%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 94% 88% at 50% 46%, black 60%, transparent 100%)",
        }}
      >
        <Scene3D reduceMotion={!!reduceMotion} />
        {/* Foreground depth-of-field cue, low in the frame where the
            robot sits — a compositor-level backdrop blur, not a WebGL
            postprocessing pass, so it can't reintroduce the per-frame
            GPU cost that caused the earlier context-loss bug. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[20%] backdrop-blur-[2.5px]"
          style={{
            maskImage: "linear-gradient(to top, black, transparent)",
            WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          }}
        />
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
