import { StatusChip, type StatusTone } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface HeroFragmentData {
  label: string;
  detail: string;
  tone: StatusTone;
  status: string;
}

/**
 * One "signal" card in the hero's scattered-to-resolved cluster — a
 * bracket-cornered fragment styled like a drafting annotation, not a
 * generic floating dashboard tile.
 */
export function HeroFragment({ data, className }: { data: HeroFragmentData; className?: string }) {
  return (
    <div
      className={cn(
        "relative w-[15.5rem] rounded-md border border-border bg-surface/95 px-4 py-3 shadow-raised backdrop-blur-sm",
        className
      )}
    >
      <span aria-hidden="true" className="absolute -top-px -left-px h-3 w-3 border-t-[1.5px] border-l-[1.5px] border-primary-600" />
      <span aria-hidden="true" className="absolute -bottom-px -right-px h-3 w-3 border-b-[1.5px] border-r-[1.5px] border-primary-600" />
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <span className="font-data text-[13px] font-semibold uppercase tracking-wide text-primary-600">
            {data.label}
          </span>
          <span className="font-body text-[15px] font-medium text-text-secondary">{data.detail}</span>
        </div>
        <StatusChip tone={data.tone} className="shrink-0">
          {data.status}
        </StatusChip>
      </div>
    </div>
  );
}
