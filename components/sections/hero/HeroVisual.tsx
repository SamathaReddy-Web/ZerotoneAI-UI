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

// The R3F canvas touches window/WebGL on mount — keep it out of the SSR pass
const Scene3D = dynamic(() => import("./Scene3D").then((m) => m.Scene3D), { ssr: false });

const ICONS = {
  blueprint: BlueprintIcon,
  purchaseOrder: PurchaseOrderIcon,
  costControl: CostControlIcon,
  criticalPath: CriticalPathIcon,
  fieldLogs: FieldLogsIcon,
} as const;

// Precision positions matching the reference design layout
const CALLOUT_POSITIONS: Record<string, string> = {
  "top-left": "left-[2%] top-[8%]",
  "top-right": "right-[4%] top-[12%]",
  "mid-right": "right-[2%] top-[44%]",
  "bottom-right": "right-[6%] bottom-[16%]",
  "bottom-left": "left-[2%] bottom-[12%]",
};

const CALLOUT_BASE_DELAY_MS = 1200;
const CALLOUT_STAGGER_MS = 200;

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
    <div className={cn("relative aspect-[600/480] w-full select-none", className)}>
      {/* Ambient background glow behind the 3D scene */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_65%_65%_at_50%_46%,rgba(37,99,235,0.12),transparent_75%)] blur-2xl"
      />

      {/* Floating depth-of-field blur fragments */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-6 hidden h-16 w-16 rotate-12 rounded-2xl bg-neutral-300/60 shadow-lg blur-[2.5px] border border-white/50 sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -right-8 hidden h-24 w-24 -rotate-6 rounded-3xl bg-neutral-400/50 shadow-xl blur-[3.5px] border border-white/40 sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 -left-6 hidden h-12 w-12 -rotate-6 rounded-xl bg-primary-300/40 shadow-md blur-[2px] border border-white/40 sm:block"
      />

      {/* Real-time 3D WebGL Canvas with subtle radial edge blending */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          maskImage:
            "radial-gradient(ellipse 95% 90% at 50% 48%, black 65%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 90% at 50% 48%, black 65%, transparent 100%)",
        }}
      >
        <Scene3D reduceMotion={!!reduceMotion} />
      </div>

      {/* Interactive Floating Module Cards — absolute positioned */}
      {callouts.map((callout, i) => {
        const Icon = ICONS[callout.icon as keyof typeof ICONS];
        return (
          <div
            key={callout.id}
            className={cn("absolute z-30 transition-transform duration-300 hover:scale-105", CALLOUT_POSITIONS[callout.corner])}
          >
            <SceneCallout
              icon={<Icon />}
              label={callout.label}
              detail={callout.detail}
              tone={callout.tone}
              delayMs={CALLOUT_BASE_DELAY_MS + i * CALLOUT_STAGGER_MS}
              reduceMotion={reduceMotion}
            />
          </div>
        );
      })}
    </div>
  );
}
