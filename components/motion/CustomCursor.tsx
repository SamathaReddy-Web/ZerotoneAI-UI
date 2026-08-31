"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useFinePointer } from "@/lib/use-fine-pointer";
import { EASE_OUT } from "@/lib/motion";

// Elements opt in via data-cursor="link" | "explore" — the label shown
// when hovering them. Extend this map only when a real target needs it.
const LABELS: Record<string, string> = {
  link: "OPEN →",
  explore: "EXPLORE",
};

/**
 * Desktop-only custom cursor: a small dot that expands into a text pill
 * over elements carrying `data-cursor`. Mounted once in the root layout.
 * Fully inert (returns null, no listeners attached) on touch/coarse
 * pointers and under reduced motion — the native cursor is left alone
 * in both cases.
 */
export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const finePointer = useFinePointer();
  const active = finePointer && !reduceMotion;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [label, setLabel] = useState<string | null>(null);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (!active) return;

    document.body.classList.add("has-custom-cursor");

    function handleMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      const key = target?.getAttribute("data-cursor") ?? "";
      setLabel(LABELS[key] ?? null);
    }
    function handleDown() {
      setPressed(true);
    }
    function handleUp() {
      setPressed(false);
    }

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [active, x, y]);

  if (!active) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x: springX, y: springY, translate: "-50% -50%" }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-primary-800 text-text-on-primary"
        animate={{
          width: label ? "auto" : pressed ? 10 : 14,
          height: label ? 28 : pressed ? 10 : 14,
          paddingLeft: label ? 10 : 0,
          paddingRight: label ? 10 : 0,
        }}
        transition={{ duration: 0.2, ease: EASE_OUT }}
      >
        {label && (
          <span className="whitespace-nowrap font-data text-[10px] font-medium tracking-wide">{label}</span>
        )}
      </motion.div>
    </motion.div>
  );
}
