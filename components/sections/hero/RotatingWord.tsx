"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";

const INTERVAL_MS = 2800;

/** Splits "project moves." into ["project", "moves."] — the last word
 * is the part rendered in the accent color. */
function splitLast(phrase: string): [string, string] {
  const idx = phrase.lastIndexOf(" ");
  if (idx === -1) return ["", phrase];
  return [phrase.slice(0, idx), phrase.slice(idx + 1)];
}

/**
 * Cycles through `phrases` on an interval, sliding the outgoing phrase
 * up and out while the incoming one slides up into place — physical,
 * not a cross-fade or flip gimmick. `mode="popLayout"` takes the exiting
 * phrase out of flow immediately so surrounding text (paragraph, CTAs)
 * never jumps while the two overlap mid-transition. Pauses on
 * hover/focus; reduced motion shows the final phrase, static.
 */
export function RotatingWord({
  phrases,
  accentClassName,
}: {
  phrases: string[];
  accentClassName?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % phrases.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduceMotion, paused, phrases.length]);

  const activePhrase = reduceMotion ? phrases[phrases.length - 1] : phrases[index];
  const [lead, accent] = splitLast(activePhrase);

  if (reduceMotion) {
    return (
      <span className="inline-block">
        {lead ? `${lead} ` : ""}
        <span className={accentClassName}>{accent}</span>
      </span>
    );
  }

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={activePhrase}
          className="inline-block"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
        >
          {lead ? `${lead} ` : ""}
          <span className={accentClassName}>{accent}</span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
