"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * Generic scroll-into-view reveal, used across future sections (Pain,
 * Workflow, Module Grid, etc.) so each one doesn't hand-roll its own
 * IntersectionObserver logic. Fires once, respects reduced motion.
 */
export function RevealOnScroll({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
