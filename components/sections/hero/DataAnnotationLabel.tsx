import { StatusChip, type StatusTone } from "@/components/ui";
import { toPercent, type LabelSide } from "./drawing-data";
import { cn } from "@/lib/utils";

export interface AnnotationData {
  label: string;
  detail: string;
  tone: StatusTone;
  status: string;
}

/**
 * The HTML half of a data annotation — positioned via the same viewBox
 * coordinates as the SVG leader line it continues from, so the tag reads
 * as attached to the drawing rather than floating near it. Styled as a
 * drafting tag (thin single-side rule, no card chrome) rather than a UI
 * card, per the "annotation, not floating card" requirement.
 */
export function DataAnnotationLabel({
  data,
  x,
  y,
  side,
  delayMs,
  depthPx = 0,
  className,
}: {
  data: AnnotationData;
  x: number;
  y: number;
  side: LabelSide;
  delayMs: number;
  /** Static Z-depth offset (perspective stage), combined with the
   * side-based X shift into one `translate` value — kept off Tailwind's
   * translate-x utility since both would target the same native CSS
   * `translate` property and silently override each other. */
  depthPx?: number;
  className?: string;
}) {
  const pos = toPercent(x, y);
  const xShift = side === "left" ? "-100%" : "0px";
  return (
    <div
      className={cn(
        "animate-fade-in-up absolute w-[13rem]",
        side === "left" ? "text-right" : "",
        className
      )}
      style={{
        left: pos.left,
        top: pos.top,
        translate: `${xShift} 0 ${depthPx}px`,
        animationDelay: `${delayMs}ms`,
      }}
    >
      <div
        className={cn(
          "flex flex-col gap-1 py-0.5",
          side === "left" ? "border-r-2 pr-3" : "border-l-2 pl-3",
          "border-primary-600"
        )}
      >
        <div className={cn("flex items-center gap-2", side === "left" ? "justify-end" : "")}>
          <span className="font-data text-[11px] font-medium uppercase tracking-wide text-primary-800">
            {data.label}
          </span>
          <StatusChip tone={data.tone}>{data.status}</StatusChip>
        </div>
        <span className="font-body text-[12.5px] text-text-secondary">{data.detail}</span>
      </div>
    </div>
  );
}
