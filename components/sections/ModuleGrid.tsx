import Link from "next/link";
import {
  BankIcon,
  BarChartIcon,
  BoxesIcon,
  CalendarIcon,
  ChartLineIcon,
  ClipboardListIcon,
  ClipboardQuestionIcon,
  PeopleIcon,
  PurchaseOrderIcon,
  ReceiptIcon,
  SwapIcon,
  TableIcon,
  TrendingUpIcon,
} from "@/components/icons/Icons";
import { RevealOnScroll } from "@/components/motion";
import type { StatusTone } from "@/components/ui";
import { MODULE_GRID } from "@/content/home";
import { cn } from "@/lib/utils";

const ICONS = {
  bidPipeline: TrendingUpIcon,
  estimating: BarChartIcon,
  budgetControl: ReceiptIcon,
  purchaseOrder: PurchaseOrderIcon,
  scheduleControl: CalendarIcon,
  rfi: ClipboardQuestionIcon,
  changeOrders: SwapIcon,
  sovBilling: TableIcon,
  accounting: BankIcon,
  vendorManagement: PeopleIcon,
  dailyLogs: ClipboardListIcon,
  reports: ChartLineIcon,
  inventory: BoxesIcon,
} as const;

// Same tone→color mapping as StatusChip, applied to icon badges instead
// of status pills — one palette for the whole design system rather than
// a second color scale invented just for this grid.
const TONE_BADGE: Record<StatusTone, string> = {
  success: "bg-success-bg text-success",
  warning: "bg-warning-bg text-warning",
  error: "bg-error-bg text-error",
  info: "bg-primary-100 text-primary-800",
  neutral: "bg-neutral-100 text-text-secondary",
};

/** §5.6 Module Grid — `#features`. Thirteen module cards in a responsive
 * grid, each linking to its real module page. */
export function ModuleGrid() {
  return (
    <section id="features" className="border-b border-border-subtle bg-background py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <RevealOnScroll className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 font-data text-[11px] font-medium uppercase tracking-wider text-primary-600">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary-600" />
            {MODULE_GRID.eyebrow}
          </span>
          <h2 className="max-w-2xl text-balance font-display text-[32px] font-bold leading-[1.15] tracking-tight text-text-primary sm:text-[40px]">
            {MODULE_GRID.heading}
          </h2>
          <p className="max-w-xl text-balance font-body text-[15.5px] leading-relaxed text-text-secondary">
            {MODULE_GRID.sub}
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULE_GRID.cards.map((card, i) => {
            const Icon = ICONS[card.icon as keyof typeof ICONS];
            return (
              <RevealOnScroll key={card.label} delay={(i % 4) * 0.06}>
                <Link
                  href={card.href}
                  data-cursor="link"
                  className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary-300 hover:bg-primary-50/40"
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg [&>svg]:h-[18px] [&>svg]:w-[18px]",
                      TONE_BADGE[card.tone]
                    )}
                  >
                    <Icon />
                  </span>
                  <span className="font-body text-[15px] font-semibold text-text-primary">{card.label}</span>
                  <span className="font-body text-[13.5px] leading-relaxed text-text-secondary">{card.detail}</span>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
