"use client";

import { type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

const STRENGTH = 0.35;

/**
 * Cursor-follow wrapper — composed around whatever's passed as children
 * (typically a `Button`) rather than forking it, so Button's own
 * variants/sizes stay untouched. Same spring-follow pattern as the
 * pointer-tilt rig in Hero.tsx. Ignores touch/pen pointer events (mouse
 * only) so it never fights a tap on touch devices.
 */
export function MagneticButton({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.3 });

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * STRENGTH);
    y.set((e.clientY - rect.top - rect.height / 2) * STRENGTH);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={className}
      style={{ x: reduceMotion ? 0 : springX, y: reduceMotion ? 0 : springY, display: "inline-block" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.div>
  );
}
