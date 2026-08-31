"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

const WORD_STAGGER = 0.045;

/**
 * Word-staggered heading reveal, for section titles — distinct from
 * RevealOnScroll (which fades/slides a whole block in one motion). Each
 * word clips up from behind its own baseline via an overflow-hidden
 * mask, so the reveal reads as typographic rather than a generic fade.
 */
export function RevealText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
}: {
  text: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="overflow-hidden py-[0.1em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: delay + i * WORD_STAGGER,
              ease: EASE_OUT,
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
