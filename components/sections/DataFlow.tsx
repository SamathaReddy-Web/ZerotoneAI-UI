"use client";

import { useEffect, useRef, useState } from "react";
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
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 640px)").matches;
    if (reduceMotion || !isDesktop || !sectionRef.current || !stageRef.current || !coreRef.current) return;

    const ctx = gsap.context(() => {
      // Smooth non-pinning scroll scrub that converges cards into the center
      // as the user scrolls past the section, without trapping or locking the page scroll.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top 65%",
          end: "bottom 20%",
          scrub: 0.8,
        },
      });

      // 1. Gently scale the central Zerotone core
      tl.to(
        coreRef.current,
        {
          scale: 1.45,
          filter: "drop-shadow(0 16px 32px rgba(13,71,161,0.22))",
          ease: "power1.inOut",
        },
        0
      );

      // 2. Move document cards smoothly inward towards the center
      DATA_FLOW.items.forEach((item) => {
        const el = cardRefs.current[item.id];
        if (!el) return;
        tl.to(
          el,
          {
            left: "50%",
            top: "50%",
            scale: 0.25,
            opacity: 0.15,
            ease: "power1.inOut",
          },
          0
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-border-subtle bg-background py-16 sm:py-24">
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

        {/* Interactive Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-surface/90 p-1.5 shadow-raised backdrop-blur-md">
          {DATA_FLOW.categories.map((cat) => {
            const Icon = ICONS[cat.icon as keyof typeof ICONS] || SparklesIcon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 font-body text-[14.5px] font-semibold transition-all duration-200",
                  isActive
                    ? "bg-primary-800 text-text-on-primary shadow-sm"
                    : "text-text-secondary hover:bg-neutral-100 hover:text-text-primary"
                )}
              >
                <span className={cn("flex h-4 w-4 items-center justify-center", isActive ? "text-primary-300" : "text-primary-600")}>
                  <Icon />
                </span>
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* The Central Command Operating Hub Stage */}
        <div ref={stageRef} className="relative mt-10 w-full max-w-5xl">
          <div className="relative h-[600px] w-full rounded-2xl border border-border/80 bg-gradient-to-b from-surface/95 via-surface/80 to-surface/95 p-6 shadow-overlay backdrop-blur-md overflow-hidden">
            {/* Central Zerotone Operating Engine Node */}
            <div
              ref={coreRef}
              className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center origin-center"
            >
              {/* Concentric Animated Radar Wave Rings */}
              <div className="relative flex h-36 w-36 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full border border-primary-300 opacity-25 duration-1000" />
                <span className="absolute -inset-4 animate-pulse rounded-full border border-primary-600/30 opacity-40" />
                <span className="absolute -inset-8 rounded-full border border-primary-600/15" />

                {/* Core Badge Container */}
                <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-2xl border-2 border-primary-600 bg-surface px-3 py-2 shadow-overlay">
                  <Image
                    src="/logo-mark.png"
                    alt="Zerotone"
                    width={48}
                    height={48}
                    priority
                    className="h-10 w-auto object-contain"
                  />
                  <span className="mt-1 font-data text-[10.5px] font-bold uppercase tracking-wider text-primary-800">
                    Zerotone AI
                  </span>
                </div>
              </div>

              {/* Status Pill */}
              <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-primary-300 bg-primary-50 px-3 py-1 text-center font-data text-[11px] font-semibold text-primary-800 shadow-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary-600" />
                Live Ingestion Active
              </div>
            </div>

            {/* Orbiting Live Document & Signal Cards */}
            {DATA_FLOW.items.map((item, idx) => {
              const Icon = ICONS[item.icon as keyof typeof ICONS] || DocumentIcon;
              const pos = POSITIONS[idx % POSITIONS.length];
              const isSelected = activeCategory === "all" || item.category === activeCategory;
              const isHovered = hoveredItem === item.id;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    cardRefs.current[item.id] = el;
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={cn(
                    "group absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity duration-300",
                    isSelected ? "opacity-100" : "opacity-35 hover:opacity-80"
                  )}
                  style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                >
                  <div
                    className={cn(
                      "flex items-center gap-3 rounded-xl border bg-surface/95 px-3.5 py-2.5 shadow-raised backdrop-blur-sm transition-all duration-200",
                      isHovered
                        ? "border-primary-600 shadow-overlay ring-2 ring-primary-100 -translate-y-1"
                        : "border-border hover:border-primary-300"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                        TONE_BADGES[item.tone]
                      )}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <div className="flex flex-col leading-tight">
                      <div className="flex items-center gap-1.5">
                        <span className="font-body text-[13.5px] font-bold text-text-primary">
                          {item.label}
                        </span>
                        <span className="rounded bg-neutral-100 px-1.5 py-0.2 font-data text-[9.5px] font-medium text-text-muted">
                          {item.status}
                        </span>
                      </div>
                      <span className="font-data text-[11.5px] font-medium text-text-secondary">
                        {item.value}
                      </span>
                    </div>
                  </div>

                  {/* Micro Hover Inspection Drawer */}
                  {isHovered && (
                    <div className="absolute left-1/2 top-full z-40 mt-1.5 w-48 -translate-x-1/2 rounded-lg border border-primary-300 bg-surface p-2 text-center shadow-overlay animate-fade-in-up">
                      <p className="font-data text-[10px] uppercase tracking-wider text-text-muted">
                        Project Context
                      </p>
                      <p className="font-body text-[12px] font-semibold text-primary-800">
                        {item.project}
                      </p>
                      <p className="mt-1 font-body text-[11px] text-text-secondary">
                        {item.audit}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Live System Telemetry Strip */}
        <div className="mt-10 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
          {DATA_FLOW.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-border-subtle bg-surface/90 px-4 py-4 text-center shadow-raised backdrop-blur-sm transition-all duration-150 hover:border-primary-300"
            >
              <span className="font-display text-[26px] font-bold text-primary-800 sm:text-[30px]">
                {stat.value}
              </span>
              <span className="mt-0.5 font-body text-[13.5px] font-semibold text-text-primary">
                {stat.label}
              </span>
              <span className="font-data text-[11px] text-text-muted">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
