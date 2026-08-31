import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

const TONE_STYLES: Record<"primary" | "success", string> = {
  primary: "bg-primary-100 text-primary-800",
  success: "bg-success-bg text-success",
};

/**
 * One floating module card over the hero's 3D construction scene — icon
 * badge + label + live-feeling detail line. Entrance is the project's
 * standard delayed fade-in-up; once settled it picks up a slow, staggered
 * float loop (separate inner element so the two animations don't collide
 * on the same transform timeline).
 */
export function SceneCallout({
  icon,
  label,
  detail,
  tone = "primary",
  delayMs,
  reduceMotion,
  className,
}: {
  icon: ReactNode;
  label: string;
  detail: string;
  tone?: "primary" | "success";
  delayMs: number;
  reduceMotion?: boolean | null;
  className?: string;
}) {
  return (
    <div
      className={cn(!reduceMotion && "animate-fade-in-up", className)}
      style={reduceMotion ? undefined : { animationDelay: `${delayMs}ms` }}
    >
      <div
        className={cn(!reduceMotion && "animate-callout-float")}
        style={reduceMotion ? undefined : { animationDelay: `${delayMs + 500}ms` }}
      >
        <div className="flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-border bg-surface/95 px-3 py-2.5 shadow-overlay backdrop-blur-sm">
          <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg", TONE_STYLES[tone])}>
            <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-body text-[12.5px] font-semibold text-text-primary">{label}</span>
            <span className="font-data text-[10.5px] text-text-muted">{detail}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

