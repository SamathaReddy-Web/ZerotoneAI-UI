"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import {
  BankIcon,
  ChecklistIcon,
  ClipboardListIcon,
  ClipboardQuestionIcon,
  DocumentIcon,
  PurchaseOrderIcon,
  ReceiptIcon,
  SwapIcon,
  TrendingUpIcon,
} from "@/components/icons/Icons";
import { Eyebrow } from "@/components/ui";
import { DATA_FLOW } from "@/content/home";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const ICONS = {
  purchaseOrder: PurchaseOrderIcon,
  rfi: ClipboardQuestionIcon,
  document: DocumentIcon,
  changeOrders: SwapIcon,
  dailyLogs: ClipboardListIcon,
  receipt: ReceiptIcon,
  bank: BankIcon,
  bidPipeline: TrendingUpIcon,
  checklist: ChecklistIcon,
} as const;

// Colorful, varied badges (not one repeated tint) — the "realistic file
// type" read the reference gets from mixing real brand-colored icons.
// Reusing the shared design-system tones rather than inventing new ones.
const TONE = {
  purchaseOrder: "bg-primary-100 text-primary-800",
  rfi: "bg-warning-bg text-warning",
  document: "bg-neutral-100 text-text-secondary",
  changeOrders: "bg-warning-bg text-warning",
  dailyLogs: "bg-primary-100 text-primary-800",
  receipt: "bg-success-bg text-success",
  bank: "bg-success-bg text-success",
  bidPipeline: "bg-primary-100 text-primary-800",
  checklist: "bg-neutral-100 text-text-secondary",
} as const;

// Scattered ring around the reserved center (where the logo mark sits) —
// hand-placed, not a generated circle, so it reads as organic clutter
// the way the reference does rather than a perfect radial menu. Numeric
// (not Tailwind classes) because GSAP animates left/top directly, tweening
// each card back toward center (50/50) as the section scrolls.
const POSITIONS: Record<string, { left: number; top: number }> = {
  po: { left: 4, top: 30 },
  rfi: { left: 15, top: 6 },
  submittal: { left: 38, top: 2 },
  co: { left: 63, top: 5 },
  dailyLog: { left: 85, top: 16 },
  lienWaiver: { left: 92, top: 42 },
  payApp: { left: 87, top: 68 },
  invoice: { left: 68, top: 86 },
  bank: { left: 43, top: 92 },
  contract: { left: 19, top: 85 },
  bid: { left: 3, top: 66 },
  punchlist: { left: 8, top: 47 },
};

// Source logo.png is 341×73 (icon glyph + "ZEROTONE" wordmark). The icon
// occupies the left ~16% — cropped via a fixed-width overflow-hidden
// window rather than a separate asset, so it's always in sync with the
// real logo file.
const LOGO_NATURAL_WIDTH = 341;
const LOGO_NATURAL_HEIGHT = 73;
const ICON_CROP_FRACTION = 0.162;
const MARK_HEIGHT = 76;
const MARK_WIDTH = MARK_HEIGHT * (LOGO_NATURAL_WIDTH / LOGO_NATURAL_HEIGHT) * ICON_CROP_FRACTION;

/**
 * New section (no §5.x source) — the light counterpart to the hero: every
 * construction document Zerotone ingests, converging into the bare
 * Zerotone mark (icon only, no wordmark, no card chrome) as the page
 * scrolls. Cards animate their own position back toward center (not just
 * a uniform group scale) so they visibly get pulled into the mark, while
 * the mark itself grows — two tied animations on one scrub.
 */
export function DataFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 640px)").matches;
    if (reduceMotion || !isDesktop || !stageRef.current || !sectionRef.current || !markRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          // Deliberately short (not "+=130%") — this has to finish
          // within whatever scroll room actually exists below the
          // section, and right now that's not much (this is one of the
          // first two sections on the page). A shorter pin still reads
          // fine once more sections follow later; a too-long one just
          // never reaches its end state on a short page.
          end: "+=40%",
          scrub: 0.6,
          pin: true,
        },
      });

      tl.to(markRef.current, { scale: 2.5, ease: "none" }, 0);

      DATA_FLOW.items.forEach((item) => {
        const el = cardRefs.current[item.id];
        if (!el) return;
        tl.to(
          el,
          { left: "50%", top: "50%", scale: 0.15, opacity: 0, ease: "none" },
          0
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-border-subtle bg-background py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 900px 500px at 50% 20%, var(--primary-50), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <Eyebrow>{DATA_FLOW.eyebrow}</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-[30px] font-bold leading-[1.2] tracking-tight text-text-primary sm:text-[38px]">
          {DATA_FLOW.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance font-body text-[15px] leading-relaxed text-text-secondary">
          {DATA_FLOW.sub}
        </p>
      </div>

      {/* Mobile — the scatter/convergence below is tuned for the wide
          desktop stage; a separate simple stack, not a hidden copy. No
          scroll-pin/zoom either — the effect needs room to breathe. */}
      <div className="relative mx-auto mt-12 flex max-w-md flex-col items-center gap-8 px-6 sm:hidden">
        <div className="relative overflow-hidden" style={{ width: MARK_WIDTH, height: MARK_HEIGHT }}>
          <Image
            src="/logo.png"
            alt="Zerotone"
            width={LOGO_NATURAL_WIDTH}
            height={LOGO_NATURAL_HEIGHT}
            // logo.png's background is opaque white, not transparent —
            // multiply blend drops the white against this section's light
            // background so only the icon strokes show, no visible tile.
            className="absolute left-0 top-0 h-full w-auto max-w-none mix-blend-multiply"
          />
        </div>
        <div className="grid w-full grid-cols-2 gap-2.5">
          {DATA_FLOW.items.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <div
                key={item.id}
                className="flex items-center gap-2 rounded-xl border border-border bg-surface/95 px-2.5 py-2.5 shadow-raised"
              >
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg [&>svg]:h-4 [&>svg]:w-4",
                    TONE[item.icon as keyof typeof TONE]
                  )}
                >
                  <Icon />
                </span>
                <span className="flex min-w-0 flex-col leading-tight">
                  <span className="truncate font-body text-[11.5px] font-semibold text-text-primary">
                    {item.label}
                  </span>
                  <span className="truncate font-data text-[10px] text-text-muted">{item.value}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div ref={stageRef} className="relative mx-auto mt-16 hidden h-[440px] w-full max-w-4xl px-6 sm:mt-20 sm:block sm:h-[500px]">
        {/* Bare icon mark — no card, no wordmark. GSAP's scrub tween
            writes an inline transform to markRef immediately on setup
            (even at progress 0, matrix identity) — that alone creates a
            new stacking context, which walls off mix-blend-multiply
            (below) from the real page background no matter how markRef
            is centered. So the fill below isn't decorative: it's a flat
            match for this section's actual background color (#f9fafb,
            sampled directly — the two happen to be identical, so the
            blend has nothing to hide), giving mix-blend-multiply a
            backdrop to multiply against that holds up regardless of the
            isolation boundary. No drop-shadow: logo.png has no real
            alpha channel (its background is opaque white, not
            transparent), so a drop-shadow filter casts a shadow around
            the image's full rectangular bounds no matter how well the
            blend hides the white — that rectangle, not a color
            mismatch, was what actually made this read as "boxed". */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={markRef}
            className="overflow-hidden bg-background"
            style={{ width: MARK_WIDTH, height: MARK_HEIGHT }}
          >
            <Image
              src="/logo.png"
              alt="Zerotone"
              width={LOGO_NATURAL_WIDTH}
              height={LOGO_NATURAL_HEIGHT}
              priority
              className="h-full w-auto max-w-none mix-blend-multiply"
            />
          </div>
        </div>

        {DATA_FLOW.items.map((item) => {
          const Icon = ICONS[item.icon as keyof typeof ICONS];
          const pos = POSITIONS[item.id];
          return (
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[item.id] = el;
              }}
              className="absolute w-[10.5rem] -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
            >
              <div className="flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-border bg-surface/95 px-3 py-2.5 shadow-overlay backdrop-blur-sm">
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg [&>svg]:h-4 [&>svg]:w-4",
                    TONE[item.icon as keyof typeof TONE]
                  )}
                >
                  <Icon />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-body text-[12.5px] font-semibold text-text-primary">{item.label}</span>
                  <span className="font-data text-[10.5px] text-text-muted">{item.value}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
