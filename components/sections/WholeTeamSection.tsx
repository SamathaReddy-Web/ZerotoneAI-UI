"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { HardHat, Landmark, ClipboardCheck, Calculator } from "lucide-react";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

// 1. Data Structure for the cards
const teamItems = [
  {
    id: "project-ops",
    role: "Project Managers",
    title: "Own your budget, schedule, and scope in one place.",
    features: [
      "Dashboard showing budget status, open RFIs, and schedule risk",
      "Issue and track POs without leaving the platform",
      "Six-week schedule visibility aligned with vendor dates",
      "Change-order workflow connected from draft to billing integration",
    ],
    icon: HardHat,
    glowColor: "rgba(90, 120, 255, 0.15)",
  },
  {
    id: "finance",
    role: "Controllers & CFOs",
    title: "Real project financials: not estimates dressed as reports.",
    features: [
      "Approve budgets, POs, and bills with enforced permission gates",
      "GL auto posts from operational approvals: no manual entry",
      "Project P&L per job and rolled up to portfolio",
      "Bank reconciliation, WIP report, and 1099 tracking built in",
    ],
    icon: Landmark,
    glowColor: "rgba(110, 140, 255, 0.15)",
  },
  {
    id: "field",
    role: "Superintendents",
    title: "Everything you need in the field. Nothing you don't.",
    features: [
      "Daily log entry: crew, weather, work completed, incidents",
      "RFI submission and status from any device",
      "Submittal approval status before work starts",
      "No cost data visible: clean field view, no confusion",
    ],
    icon: ClipboardCheck,
    glowColor: "rgba(100, 130, 255, 0.15)",
  },
  {
    id: "precon",
    role: "Estimators",
    title: "Build better bids. Learn from every project.",
    features: [
      "Line item estimates with markup, versions, and baseline lock",
      "Bid pipeline tracking from intake to signed contract",
      "Bid accuracy analytics: compare estimate to actual P&L",
      "12 month pipeline forecast and estimator workload calendar",
    ],
    icon: Calculator,
    glowColor: "rgba(120, 150, 255, 0.15)",
  },
];

// 2. Custom Card Renderer
function CustomTeamCard(item: CardStackItem, state: { active: boolean; index: number }) {
  const Icon = item.icon as React.ElementType;
  const { active } = state;

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[2rem]",
        "border transition-all duration-500",
        active
          ? "bg-white border-border-subtle opacity-100"
          : "bg-neutral-50 border-neutral-200 opacity-80"
      )}
      style={{
        boxShadow: active
          ? `0 16px 40px -12px rgba(26,34,51,0.12), 0 4px 12px -4px rgba(26,34,51,0.04), 0 0 20px ${item.glowColor}`
          : "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      {/* Subtle background glow when active */}
      {active && (
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-[80px]"
          style={{ background: item.glowColor }}
        />
      )}

      {/* Top Section: Icon & Role */}
      <div className="relative z-10 flex flex-col p-8 sm:p-10 pb-0">
        <div className="flex flex-col gap-4 mb-6">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-[1rem] shadow-sm border transition-colors",
              active ? "bg-white border-primary-100 text-primary-600" : "bg-neutral-100 border-neutral-200 text-neutral-400"
            )}
            style={{
              boxShadow: active ? `inset 0 0 15px ${item.glowColor}` : "none",
            }}
          >
            <Icon strokeWidth={1.5} className="h-6 w-6" />
          </div>
          <span className="text-xl font-display font-bold text-text-primary">
            {item.role}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-primary-600 leading-tight max-w-[90%] mb-2">
          {item.title}
        </h3>
      </div>

      {/* Bottom Section: Features */}
      <div className="relative z-10 p-8 sm:p-10 pt-6 mt-auto">
        <ul className="flex flex-col gap-3 sm:gap-4">
          {item.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-1.5 h-3 w-4 text-primary-500 shrink-0 flex items-center justify-center font-bold text-sm">→</span>
              <span className="text-sm sm:text-[15px] text-text-secondary leading-relaxed font-body">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 3. Main Section Component
export function WholeTeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-background py-32"
    >
      {/* Background ambient light */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-100 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-800"
          >
            06 · BUILT FOR YOUR WHOLE TEAM
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl"
          >
            Your whole team. One platform. <br className="hidden md:block" />
            Each with the view they need.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-lg text-text-secondary"
          >
            Zerotone gives everyone exactly what they need, and nothing they don't. Role-based
            access means no cost data leaking to the field, no operational noise reaching the
            controller.
          </motion.p>
        </div>

        {/* Card Stack Interactive Area */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-5xl"
        >
          <CardStack
            items={teamItems}
            initialIndex={0}
            maxVisible={3}
            cardWidth={560}
            cardHeight={480}
            overlap={0.65}
            spreadDeg={18}
            perspectivePx={1200}
            depthPx={70}
            tiltXDeg={5}
            activeLiftPx={12}
            activeScale={1.02}
            inactiveScale={0.95}
            springStiffness={220}
            springDamping={30}
            loop={true}
            autoAdvance={false}
            pauseOnHover={true}
            showDots={false}
            renderCard={CustomTeamCard}
            renderNavigation={({ active, setActive }) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mx-auto mt-12 flex w-full max-w-3xl flex-wrap justify-center gap-4 sm:gap-8"
              >
                {teamItems.map((item, idx) => {
                  const isActive = idx === active;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActive(idx)}
                      className="group flex flex-col items-center gap-2 outline-none"
                    >
                      <div
                        className={cn(
                          "text-[10px] font-bold tracking-widest transition-colors duration-300",
                          isActive ? "text-primary-600" : "text-neutral-400 group-hover:text-neutral-600"
                        )}
                      >
                        0{idx + 1}
                      </div>
                      <div
                        className={cn(
                          "text-xs font-semibold tracking-wider transition-colors duration-300",
                          isActive ? "text-text-primary" : "text-neutral-500 group-hover:text-neutral-700"
                        )}
                      >
                        {item.role}
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            )}
          />
        </motion.div>
      </div>
    </section>
  );
}
