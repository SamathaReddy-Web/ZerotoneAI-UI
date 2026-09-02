"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Quote } from "lucide-react";

export interface ModuleTestimonialProps {
  quote: React.ReactNode;
  authorName: string;
  authorTitle: string;
}

export function ModuleTestimonial({ quote, authorName, authorTitle }: ModuleTestimonialProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section ref={containerRef} className="relative w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 sm:p-16 md:p-20 text-center shadow-raised"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-100 rounded-full blur-[80px] pointer-events-none opacity-50" />
          
          <motion.div variants={itemVariants} className="flex justify-center mb-8 relative z-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-md">
              <Quote className="h-6 w-6" fill="currentColor" strokeWidth={0} />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative z-10 font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-text-primary text-balance mx-auto max-w-3xl mb-12"
          >
            {quote}
          </motion.div>

          <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center gap-1">
            <span className="font-body text-[17px] font-bold text-text-primary">
              {authorName}
            </span>
            <span className="font-body text-[15px] text-text-secondary">
              {authorTitle}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
