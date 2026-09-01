"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { AnimatedMetric } from "@/components/motion";
import { cn } from "@/lib/utils";
import {
  TrendingUpIcon,
  PurchaseOrderIcon,
  BankIcon,
  ReceiptIcon,
  ClipboardListIcon,
  SwapIcon,
  DocumentIcon,
  ClipboardQuestionIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  CostControlIcon,
  CriticalPathIcon,
  FieldLogsIcon,
  ChecklistIcon,
} from "@/components/icons/Icons";

const ROW_1 = [
  { label: "BILLS", icon: ReceiptIcon, textClass: "text-blue-500", bgClass: "bg-blue-50" },
  { label: "ACCOUNTING & GL", icon: BankIcon, textClass: "text-green-500", bgClass: "bg-green-50" },
  { label: "CHANGE ORDERS", icon: SwapIcon, textClass: "text-orange-500", bgClass: "bg-orange-50" },
  { label: "PURCHASING", icon: PurchaseOrderIcon, textClass: "text-indigo-500", bgClass: "bg-indigo-50" },
  { label: "INVENTORY", icon: DocumentIcon, textClass: "text-purple-500", bgClass: "bg-purple-50" },
  { label: "DAILY LOGS", icon: FieldLogsIcon, textClass: "text-teal-500", bgClass: "bg-teal-50" },
  { label: "DELAYS", icon: ShieldCheckIcon, textClass: "text-red-500", bgClass: "bg-red-50" },
  { label: "PROJECT TRACKER", icon: CriticalPathIcon, textClass: "text-amber-500", bgClass: "bg-amber-50" },
  { label: "REPORTS", icon: TrendingUpIcon, textClass: "text-cyan-500", bgClass: "bg-cyan-50" },
  { label: "SOV", icon: ClipboardListIcon, textClass: "text-emerald-500", bgClass: "bg-emerald-50" },
];

const ROW_2 = [
  { label: "SUBMITTALS", icon: DocumentIcon, textClass: "text-fuchsia-500", bgClass: "bg-fuchsia-50" },
  { label: "RFI MANAGER", icon: ClipboardQuestionIcon, textClass: "text-rose-500", bgClass: "bg-rose-50" },
  { label: "USERS & ROLES", icon: ShieldCheckIcon, textClass: "text-sky-500", bgClass: "bg-sky-50" },
  { label: "VENDOR MASTER", icon: BuildingOfficeIcon, textClass: "text-violet-500", bgClass: "bg-violet-50" },
  { label: "SMART SCHEDULING", icon: ClipboardListIcon, textClass: "text-lime-500", bgClass: "bg-lime-50" },
  { label: "BIDDING & PRECON", icon: TrendingUpIcon, textClass: "text-pink-500", bgClass: "bg-pink-50" },
  { label: "CLOSEOUT", icon: ChecklistIcon, textClass: "text-orange-500", bgClass: "bg-orange-50" },
  { label: "BUILDINGS", icon: BuildingOfficeIcon, textClass: "text-blue-500", bgClass: "bg-blue-50" },
  { label: "COST CODES", icon: CostControlIcon, textClass: "text-indigo-500", bgClass: "bg-indigo-50" },
  { label: "ESTIMATE", icon: DocumentIcon, textClass: "text-teal-500", bgClass: "bg-teal-50" },
];

export function StatsStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-surface py-8 md:py-12 border-y border-border-subtle">
      <div className="mx-auto w-full max-w-6xl px-6 flex flex-col items-center">
        
        {/* Compact Metrics Row */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full grid grid-cols-2 md:flex md:flex-row md:justify-between items-start md:items-center gap-y-6 md:gap-y-0 relative z-10 pb-6 md:pb-8"
        >
          
          <div className="flex flex-col pr-4">
            <AnimatedMetric
              value="14+"
              label=""
              valueClassName="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary-900 mb-0.5"
              labelClassName="hidden"
            />
            <div className="text-xs md:text-sm font-medium text-text-secondary leading-snug">Connected modules</div>
          </div>
          
          <div className="hidden md:block w-px h-10 bg-border-subtle shrink-0" />

          <div className="flex flex-col pr-4">
            <AnimatedMetric
              value="6"
              label=""
              valueClassName="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary-900 mb-0.5"
              labelClassName="hidden"
            />
            <div className="text-xs md:text-sm font-medium text-text-secondary leading-snug">Tools replaced</div>
          </div>

          <div className="hidden md:block w-px h-10 bg-border-subtle shrink-0" />

          <div className="flex flex-col pr-4">
            <AnimatedMetric
              value="$0"
              label=""
              valueClassName="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary-900 mb-0.5"
              labelClassName="hidden"
            />
            <div className="text-xs md:text-sm font-medium text-text-secondary leading-snug">Reentry fees</div>
          </div>

          <div className="hidden md:block w-px h-10 bg-border-subtle shrink-0" />

          <div className="flex flex-col pr-4">
            <AnimatedMetric
              value="2-4"
              label=""
              valueClassName="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary-900 mb-0.5"
              labelClassName="hidden"
            />
            <div className="text-xs md:text-sm font-medium text-text-secondary leading-snug">Wks deployment time</div>
          </div>

        </motion.div>

        {/* Integrated divider spanning full width for visual rhythm */}
        <div className="w-screen h-[1px] bg-gradient-to-r from-transparent via-border-subtle to-transparent mb-5 md:mb-6 opacity-60" />
        
        {/* Module Marquee - unified background, no border-t here */}
        <div className="relative flex flex-col overflow-hidden group w-full gap-3 md:gap-4">
          
          {/* Fading edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-surface to-transparent z-10" />

          {/* Top Row: Scrolling Left */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-3">
            {[...ROW_1, ...ROW_1].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={`row1-${i}`} className="flex items-center space-x-2 bg-surface border border-border-subtle/60 rounded-full pr-3.5 p-1 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] shrink-0 cursor-default hover:border-primary-200 transition-colors">
                  <div className={cn("w-7 h-7 rounded-full flex items-center justify-center shrink-0", item.bgClass, item.textClass)}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-text-secondary uppercase tracking-wider">{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: Scrolling Right */}
          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] items-center gap-3 -ml-16">
            {[...ROW_2, ...ROW_2].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={`row2-${i}`} className="flex items-center space-x-2 bg-surface border border-border-subtle/60 rounded-full pr-3.5 p-1 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] shrink-0 cursor-default hover:border-primary-200 transition-colors">
                  <div className={cn("w-7 h-7 rounded-full flex items-center justify-center shrink-0", item.bgClass, item.textClass)}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-text-secondary uppercase tracking-wider">{item.label}</span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
