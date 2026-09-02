"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export interface ModuleFeature {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

export interface ModuleFeaturesGridProps {
  headline: React.ReactNode;
  description: React.ReactNode;
  features: ModuleFeature[];
}

export function ModuleFeaturesGrid({ headline, description, features }: ModuleFeaturesGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section ref={containerRef} className="relative w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-4 text-balance font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl"
          >
            {headline}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg text-text-secondary"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => {
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative flex flex-col rounded-3xl border border-border-subtle bg-surface p-8 transition-all duration-300 hover:border-primary-200 hover:shadow-raised hover:-translate-y-1 overflow-hidden"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 border border-primary-100 text-primary-600 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white shadow-sm group-hover:shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold text-text-primary transition-colors group-hover:text-primary-900">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[15.5px] leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
