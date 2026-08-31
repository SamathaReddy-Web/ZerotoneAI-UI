import { cn } from "@/lib/utils";

/**
 * Reusable faint coordinate-grid background layer — the same
 * grid-via-CSS-gradient technique already used inline in NavMegaMenu,
 * generalized so any section can sit on top of the blueprint language
 * without redrawing it. Purely decorative (`aria-hidden`), absolutely
 * positioned to fill its nearest positioned ancestor.
 */
export function BlueprintGrid({
  className,
  cell = 32,
  fade = true,
}: {
  className?: string;
  /** Grid cell size in px. */
  cell?: number;
  /** Radial fade toward the edges so the grid reads as atmosphere, not wallpaper. */
  fade?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "linear-gradient(color-mix(in srgb, var(--border) 45%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--border) 45%, transparent) 1px, transparent 1px)",
        backgroundSize: `${cell}px ${cell}px`,
        backgroundPosition: "top left",
        maskImage: fade
          ? "radial-gradient(ellipse 80% 65% at 50% 40%, black 40%, transparent 90%)"
          : undefined,
        WebkitMaskImage: fade
          ? "radial-gradient(ellipse 80% 65% at 50% 40%, black 40%, transparent 90%)"
          : undefined,
      }}
    />
  );
}
