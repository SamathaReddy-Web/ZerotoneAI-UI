"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const TEXT_STAGGER = 0.09;
const TEXT_START = 0.05;
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

function TextItem({
  index,
  reduceMotion,
  className,
  children,
}: {
  index: number;
  reduceMotion: boolean | null;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : TEXT_START + index * TEXT_STAGGER, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ModuleHeroProps {
  badge: string;
  title: React.ReactNode;
  description: React.ReactNode;
  visual?: React.ReactNode;
}

export function ModuleHero({ badge, title, description, visual }: ModuleHeroProps) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <motion.section
      ref={sectionRef}
      className="relative isolate overflow-hidden border-b border-border-subtle bg-background"
    >
      {/* Atmospheric base wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 400px at 50% -10%, var(--primary-50), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl px-6 pb-12 pt-20 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32 text-center flex flex-col items-center">
        <TextItem index={0} reduceMotion={reduceMotion} className="mb-6">
          <Eyebrow>{badge}</Eyebrow>
        </TextItem>

        <TextItem index={1} reduceMotion={reduceMotion}>
          <h1 className="text-balance font-display text-[42px] font-bold leading-[1.08] tracking-tight text-text-primary sm:text-[54px] lg:text-[64px]">
            {title}
          </h1>
        </TextItem>

        <TextItem index={2} reduceMotion={reduceMotion} className="mt-6">
          <p className="max-w-2xl text-balance font-body text-[17px] leading-relaxed text-text-secondary sm:text-[19px]">
            {description}
          </p>
        </TextItem>

        {visual && (
          <TextItem index={3} reduceMotion={reduceMotion} className="mt-12 w-full">
            {visual}
          </TextItem>
        )}
      </div>
    </motion.section>
  );
}
