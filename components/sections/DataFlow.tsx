"use client";

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
import { Logo } from "@/components/layout/Logo";
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

// Scattered ring around the reserved center (where the Zerotone mark
// sits) — hand-placed, not a generated circle, so it reads as organic
// clutter the way the reference does rather than a perfect radial menu.
const POSITIONS: Record<string, string> = {
  po: "left-[4%] top-[30%]",
  rfi: "left-[15%] top-[6%]",
  submittal: "left-[38%] top-[2%]",
  co: "left-[63%] top-[5%]",
  dailyLog: "left-[85%] top-[16%]",
  lienWaiver: "left-[92%] top-[42%]",
  payApp: "left-[87%] top-[68%]",
  invoice: "left-[68%] top-[86%]",
  bank: "left-[43%] top-[92%]",
  contract: "left-[19%] top-[85%]",
  bid: "left-[3%] top-[66%]",
  punchlist: "left-[8%] top-[47%]",
};

// One accent color per card, cycling — small variety against the dark
// field, the same way the reference's file-type icons carry their own
// color rather than everything sharing one tint.
const ACCENTS = ["text-primary-300", "text-success", "text-warning", "text-primary-300"];

/**
 * New section (no §5.x source) — the dark counterpart to the hero: every
 * construction document Zerotone ingests, converging on the Zerotone
 * mark. The whole constellation is one element (`zoomRef`) that GSAP
 * scales up as the section scrolls past, pinned — a "camera push-in"
 * rather than individual card animations, so cards drift toward/past the
 * frame edges exactly the way a zoom would, no per-card choreography.
 */
export function DataFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // The scattered/scroll-pinned stage only renders at sm and up (see
    // `hidden sm:block` below) — a mobile-width viewport gets the simpler
    // static layout instead, so skip wiring the pin/scrub against a
    // hidden element entirely rather than fighting ScrollTrigger over a
    // 0-size trigger.
    const isDesktop = window.matchMedia("(min-width: 640px)").matches;
    if (reduceMotion || !isDesktop || !zoomRef.current || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        zoomRef.current,
        { scale: 0.86 },
        {
          scale: 1.9,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=120%",
            scrub: 0.6,
            pin: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0a0b0d] py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(21,95,212,0.16), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-data text-[11px] font-medium uppercase tracking-wider text-primary-300">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary-300" />
          {DATA_FLOW.eyebrow}
        </span>
        <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-[30px] font-bold leading-[1.2] tracking-tight text-white sm:text-[38px]">
          {DATA_FLOW.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance font-body text-[15px] leading-relaxed text-white/55">
          {DATA_FLOW.sub}
        </p>
      </div>

      {/* Mobile — the scatter layout below is tuned for the wide desktop
          stage; percent-positioned cards would collide at narrow widths,
          so this is a separate simple stack, not a hidden copy. No
          scroll-pin/zoom either — the effect needs room to breathe. */}
      <div className="relative mx-auto mt-12 flex max-w-md flex-col items-center gap-8 px-6 sm:hidden">
        <div className="relative flex items-center justify-center rounded-2xl bg-surface px-6 py-5 shadow-overlay">
          <div aria-hidden="true" className="absolute inset-[-30%] -z-10 rounded-[2rem] bg-primary-500/25 blur-2xl" />
          <Logo className="h-6 w-auto" />
        </div>
        <div className="grid w-full grid-cols-2 gap-2.5">
          {DATA_FLOW.items.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <div
                key={item.id}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-2.5 py-2.5"
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 [&>svg]:h-3.5 [&>svg]:w-3.5",
                    ACCENTS[i % ACCENTS.length]
                  )}
                >
                  <Icon />
                </span>
                <span className="flex min-w-0 flex-col leading-tight">
                  <span className="truncate font-body text-[11.5px] font-semibold text-white">{item.label}</span>
                  <span className="truncate font-data text-[10px] text-white/45">{item.value}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto mt-16 hidden h-[420px] w-full max-w-4xl px-6 sm:mt-20 sm:block sm:h-[480px]">
        <div ref={zoomRef} className="absolute inset-6" style={{ transformOrigin: "50% 50%" }}>
          {/* Central mark — a light chip (not raw-on-dark) so the logo's
              own dark wordmark stays legible without any color inversion
              guesswork, matching every other light-card surface on the
              site. */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              aria-hidden="true"
              className="absolute inset-[-40%] rounded-[2rem] bg-primary-500/25 blur-2xl"
            />
            <div className="relative flex items-center justify-center rounded-2xl bg-surface px-7 py-6 shadow-overlay">
              <Logo className="h-7 w-auto" />
            </div>
          </div>

          {DATA_FLOW.items.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <div
                key={item.id}
                className={cn("absolute w-[10.5rem] -translate-x-1/2 -translate-y-1/2", POSITIONS[item.id])}
              >
                <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 backdrop-blur-sm">
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/10 [&>svg]:h-4 [&>svg]:w-4",
                      ACCENTS[i % ACCENTS.length]
                    )}
                  >
                    <Icon />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="font-body text-[12px] font-semibold text-white">{item.label}</span>
                    <span className="font-data text-[10.5px] text-white/45">{item.value}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
