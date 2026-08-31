"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useReducedMotion, type AnimationPlaybackControls } from "motion/react";
import { EASE_OUT } from "@/lib/motion";

/** Splits "78%" -> { prefix: "", number: 78, suffix: "%" }. Non-numeric
 * values ("ON") return null and render as static text. */
function parseValue(raw: string): { prefix: string; number: number; suffix: string } | null {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  return { prefix, number: parseFloat(num), suffix };
}

/**
 * Viewport-triggered metric: counts up from 0 to its parsed numeric
 * value on first entry, with a matching draw-in progress bar for
 * percentage values specifically (a bar only makes sense as a fraction
 * of 100). Non-numeric values ("ON") just fade in. Reduced-motion
 * renders the final value immediately, no animation.
 */
export function AnimatedMetric({
  value,
  label,
  className,
  valueClassName = "font-display text-2xl font-bold tabular-nums text-text-primary",
  labelClassName = "font-data text-[12px] uppercase tracking-wide text-text-muted font-medium",
}: {
  value: string;
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}) {
  const reduceMotion = useReducedMotion();
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(() => (reduceMotion ? value : (parsed ? `${parsed.prefix}0${parsed.suffix}` : value)));
  const [entered, setEntered] = useState(false);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => () => controlsRef.current?.stop(), []);

  function handleEnter() {
    if (entered) return;
    setEntered(true);
    if (reduceMotion || !parsed) {
      setDisplay(value);
      return;
    }
    const isInt = Number.isInteger(parsed.number);
    controlsRef.current = animate(0, parsed.number, {
      duration: 1.1,
      ease: EASE_OUT,
      onUpdate(v) {
        setDisplay(`${parsed.prefix}${isInt ? Math.round(v) : v.toFixed(1)}${parsed.suffix}`);
      },
    });
  }

  const showBar = !!parsed && parsed.suffix.includes("%");

  return (
    <motion.div className={className} onViewportEnter={handleEnter} viewport={{ once: true, margin: "-60px" }}>
      <div className={valueClassName}>{display}</div>
      <div className={labelClassName}>{label}</div>
      {showBar && (
        <div className="mt-1.5 h-[2px] w-full overflow-hidden rounded-full bg-border-subtle">
          <motion.div
            className="h-full bg-primary-600"
            style={{ originX: 0 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: entered ? Math.min(parsed!.number / 100, 1) : 0 }}
            transition={{ duration: reduceMotion ? 0 : 1.1, ease: EASE_OUT }}
          />
        </div>
      )}
    </motion.div>
  );
}
