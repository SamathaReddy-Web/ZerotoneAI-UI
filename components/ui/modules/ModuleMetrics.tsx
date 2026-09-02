"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export interface ModuleMetric {
  value: string;
  label: string;
  description: string;
}

export interface ModuleMetricsProps {
  badge?: string;
  headline: React.ReactNode;
  metrics: ModuleMetric[];
}

export function ModuleMetrics({ badge = "REAL OUTCOMES", headline, metrics }: ModuleMetricsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section ref={containerRef} className="relative w-full bg-surface py-24 md:py-32 border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Eyebrow>{badge}</Eyebrow>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-balance font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl"
          >
            {headline}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {metrics.map((outcome, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative flex flex-col items-center text-center p-8 sm:p-10 rounded-3xl border border-border bg-white shadow-sm hover:border-primary-200 hover:shadow-overlay transition-all duration-300 overflow-hidden"
            >
              {/* Subtle animated abstract background on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-primary-100/50 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-150 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-2 font-display text-5xl font-bold tracking-tight text-primary-600 sm:text-6xl transition-transform duration-500 group-hover:scale-105 group-hover:text-primary-700">
                  {outcome.value}
                </div>
                <h3 className="mb-6 font-body text-lg font-semibold text-text-primary">
                  {outcome.label}
                </h3>
                <p className="font-body text-[15.5px] leading-relaxed text-text-secondary max-w-sm">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
