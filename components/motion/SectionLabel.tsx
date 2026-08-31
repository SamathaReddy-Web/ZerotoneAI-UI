import { cn } from "@/lib/utils";

/**
 * The small monospace numbered eyebrow used above section headings
 * going forward — e.g. `// 01 — OPERATING SYSTEM`. Distinct from the
 * existing `Eyebrow` (ui/Eyebrow.tsx, a plain label) in that it always
 * carries a section index, styled as a code comment / drafting note.
 */
export function SectionLabel({
  index,
  children,
  className,
}: {
  index: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("font-data text-[11px] font-medium uppercase tracking-wider text-primary-600", className)}>
      {"// "}
      {index} — {children}
    </p>
  );
}
