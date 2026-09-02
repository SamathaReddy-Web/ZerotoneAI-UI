"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import {
  BankIcon,
  BuildingOfficeIcon,
  ChecklistIcon,
  ClipboardListIcon,
  ClipboardQuestionIcon,
  DocumentIcon,
  PurchaseOrderIcon,
  ReceiptIcon,
  ShieldCheckIcon,
  SparklesIcon,
  SwapIcon,
  SyncIcon,
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
  sync: SyncIcon,
  sparkles: SparklesIcon,
  building: BuildingOfficeIcon,
  shield: ShieldCheckIcon,
} as const;

const TONE_BADGES = {
  primary: "bg-primary-50 text-primary-800 border-primary-300",
  success: "bg-success-bg text-success border-success/30",
  warning: "bg-warning-bg text-warning border-warning/30",
} as const;

const POSITIONS = [
  // Top quadrant
  { left: 16, top: 12 },
  { left: 50, top: 8 },
  { left: 84, top: 12 },
  // Mid upper
  { left: 8, top: 36 },
  { left: 92, top: 36 },
  // Mid lower
  { left: 8, top: 66 },
  { left: 92, top: 66 },
  // Bottom quadrant
  { left: 18, top: 90 },
  { left: 50, top: 92 },
  { left: 82, top: 90 },
  // Inner flanks
  { left: 24, top: 50 },
  { left: 76, top: 50 },
];

export function DataFlow() {


  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 640px)").matches;
    if (reduceMotion || !isDesktop || !sectionRef.current || !stageRef.current || !coreRef.current) return;

    const ctx = gsap.context(() => {
      // Initialize logo to be hidden
      gsap.set(coreRef.current, { scale: 0, opacity: 0 });

      // Smooth scrub that converges cards into the center
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: "+=150vh", // Extended pin for the scale-up transition
          scrub: 1,
          pin: true,
        },
      });

      // 1. Move document cards smoothly inward towards the center
      DATA_FLOW.items.forEach((item, idx) => {
        const el = cardRefs.current[item.id];
        const pos = POSITIONS[idx % POSITIONS.length];
        if (!el) return;
        tl.fromTo(
          el,
          {
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            scale: 1,
            opacity: 1,
          },
          {
            left: "50%",
            top: "50%",
            scale: 0,
            opacity: 0,
            ease: "none",
            duration: 1,
          },
          0
        );
      });

      // 2. Gently scale the central Zerotone core up as cards disappear
      tl.fromTo(
        coreRef.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          filter: "drop-shadow(0 16px 32px rgba(13,71,161,0.25))",
          ease: "none",
          duration: 0.5,
        },
        0.2 // Start this animation slightly after the cards begin moving
      );

      // 3. Scale-Up Transition
      tl.to(
        coreRef.current,
        {
          scale: 3.5, // Decreased maximum scale
          ease: "power1.inOut",
          duration: 1,
        },
        1.0 // Starts after cards vanish
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section className="bg-background">
      <div ref={sectionRef} className="relative overflow-hidden border-b border-border-subtle py-16 sm:py-24">
        {/* Background Architectural Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 900px 520px at 50% 30%, rgba(227, 242, 254, 0.7), transparent 75%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow>{DATA_FLOW.eyebrow}</Eyebrow>
          <h2 className="mt-3.5 text-balance font-display text-[32px] font-bold leading-[1.15] tracking-tight text-text-primary sm:text-[44px]">
            {DATA_FLOW.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-balance font-body text-[17px] leading-relaxed text-text-secondary">
            {DATA_FLOW.sub}
          </p>
        </div>

        {/* The Central Command Operating Hub Stage */}
        <div ref={stageRef} className="relative mt-12 w-full max-w-5xl">
          <div className="relative h-[600px] w-full">
            {/* Central Zerotone Operating Engine Node */}
            <div
              ref={coreRef}
              className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center origin-center pointer-events-auto"
            >
              <div className="relative flex items-center justify-center">
                {/* Core Badge Container */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-surface shadow-[0_16px_40px_-10px_rgba(13,71,161,0.2)]">
                  <div className="relative h-14 w-14 overflow-hidden">
                    <Image
                      src="/logo-mark.jpg"
                      alt="Zerotone"
                      fill
                      priority
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting Live Document & Signal Cards (z-20 / z-30, below the central logo) */}
            {DATA_FLOW.items.map((item, idx) => {
              const Icon = ICONS[item.icon as keyof typeof ICONS] || DocumentIcon;
              const pos = POSITIONS[idx % POSITIONS.length];
              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    cardRefs.current[item.id] = el;
                  }}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-100"
                  style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                >
                  <div
                    className="flex items-center gap-4 rounded-xl border border-border bg-surface/95 px-5 py-3.5 shadow-raised backdrop-blur-sm transition-all duration-200 z-10"
                  >
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border",
                        TONE_BADGES[item.tone]
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="flex flex-col leading-tight">
                      <div className="flex items-center gap-2.5">
                        <span className="font-body text-base font-bold text-text-primary whitespace-nowrap">
                          {item.label}
                        </span>
                        <span className="rounded bg-neutral-100 px-2 py-0.5 font-data text-[11px] font-medium text-text-muted whitespace-nowrap">
                          {item.status}
                        </span>
                      </div>
                      <span className="font-data text-[13.5px] font-medium text-text-secondary whitespace-nowrap mt-1">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
