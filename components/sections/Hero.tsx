"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { AnimatedMetric, MagneticButton } from "@/components/motion";
import { Button, Eyebrow } from "@/components/ui";
import { EASE_OUT } from "@/lib/motion";
import { HeroFragment } from "./HeroFragment";
import { HeroVisual } from "./hero/HeroVisual";
import { RotatingWord } from "./hero/RotatingWord";
import { HERO } from "@/content/home";

const TEXT_STAGGER = 0.09;
const TEXT_START = 0.05;

/** One text block in the entrance sequence — explicit initial/animate,
 * no variant-propagation, so each element's motion is self-contained
 * and independently debuggable. */
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

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-linked depth parallax — the 3D scene (further back) moves more
  // than the text (closer to camera) as the hero scrolls past. Pointer
  // parallax for the scene itself now lives inside the WebGL canvas (see
  // CameraRig.tsx) — a real camera move, not a CSS tilt on top of an
  // already-3D render.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const sceneScrollY = useTransform(scrollYProgress, [0, 1], [0, 46]);
  const textScrollY = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);

  const scrollDisabled = !!reduceMotion;

  return (
    <motion.section
      id="hero"
      ref={sectionRef}
      style={{ opacity: scrollDisabled ? 1 : heroOpacity }}
      className="relative isolate overflow-hidden border-b border-border-subtle bg-background"
    >
      {/* Atmospheric base wash — plane 0, furthest back */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 78% 25%, var(--primary-50), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="lg:grid lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-8">
          {/* Text column */}
          <motion.div
            style={{ y: scrollDisabled ? 0 : textScrollY }}
            className="relative z-10 flex max-w-xl flex-col gap-5"
          >
            <TextItem index={0} reduceMotion={reduceMotion}>
              <Eyebrow>{HERO.eyebrow}</Eyebrow>
            </TextItem>

            <TextItem index={1} reduceMotion={reduceMotion}>
              <h1 className="text-balance font-display text-[46px] font-bold leading-[1.05] tracking-tight text-text-primary sm:text-[58px] lg:text-[66px]">
                Every{" "}
                <RotatingWord phrases={HERO.headline} accentClassName="text-primary-800" />
              </h1>
            </TextItem>

            <TextItem index={2} reduceMotion={reduceMotion}>
              <p className="max-w-prose font-body text-[18px] leading-relaxed text-text-secondary sm:text-[19.5px]">
                {HERO.lede}
              </p>
            </TextItem>

            <TextItem index={3} reduceMotion={reduceMotion} className="flex flex-wrap items-center gap-3 pt-1">
              <MagneticButton>
                <Button href={HERO.ctaPrimary.href} size="lg" data-cursor="link">
                  {HERO.ctaPrimary.label}
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href={HERO.ctaSecondary.href} variant="secondary" size="lg" data-cursor="link">
                  {HERO.ctaSecondary.label}
                </Button>
              </MagneticButton>
            </TextItem>

            <TextItem index={4} reduceMotion={reduceMotion} className="flex items-center gap-3 pt-3">
              <div className="flex -space-x-2">
                {HERO.trustInitials.map((initials) => (
                  <span
                    key={initials}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-surface bg-primary-100 font-data text-[12px] font-semibold text-primary-800"
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p className="font-body text-[15px] font-medium text-text-muted">{HERO.trustLine}</p>
            </TextItem>
          </motion.div>

          {/* Visual column — the realistic 3D construction scene (see
              HeroVisual.tsx). Desktop/laptop only; the mobile version
              further down is a separately-composed compact instance, not
              a hidden copy of this one. */}
          <div className="relative z-0 mt-14 hidden lg:mt-0 lg:block">
            <motion.div style={{ y: scrollDisabled ? 0 : sceneScrollY }}>
              <HeroVisual reduceMotion={reduceMotion} />
            </motion.div>

            {/* Resolved summary strip — sits below the scene as its data
                footer, single top rule rather than card chrome, so it
                reads as a continuation of the project dashboard. */}
            <div
              className={reduceMotion ? "mt-6" : "mt-6 animate-fade-in-up"}
              style={reduceMotion ? undefined : { animationDelay: "2.55s" }}
            >
              <div className="grid grid-cols-3 divide-x divide-border-subtle border-t-2 border-primary-800 pt-3">
                {HERO.dashboard.stats.map((stat) => (
                  <AnimatedMetric
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    className="px-4"
                    valueClassName="font-display text-2xl lg:text-3xl font-bold tabular-nums text-text-primary"
                    labelClassName="font-data text-[12px] uppercase tracking-wide text-text-muted font-medium"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/tablet — the same 3D scene, recomposed as a compact top
            band (fewer callouts, via HeroVisual's `compact` prop) rather
            than a hidden copy of the desktop one. Data reads as a stacked
            list beneath it for legibility at this width, with each row
            keeping its fragment styling. */}
        <div className="mt-10 lg:hidden">
          <TextItem index={0} reduceMotion={reduceMotion} className="mb-6">
            <HeroVisual reduceMotion={reduceMotion} compact className="h-56 sm:h-64" />
          </TextItem>

          <div className="flex flex-col gap-2.5">
            {HERO.dashboard.rows.map((row, i) => (
              <TextItem key={row.label} index={i + 1} reduceMotion={reduceMotion}>
                <HeroFragment data={row} className="w-full" />
              </TextItem>
            ))}

            <TextItem index={HERO.dashboard.rows.length + 1} reduceMotion={reduceMotion} className="mt-1">
              <div className="grid grid-cols-3 divide-x divide-border-subtle border-t-2 border-primary-800 pt-3">
                {HERO.dashboard.stats.map((stat) => (
                  <AnimatedMetric
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    className="px-3"
                    valueClassName="font-display text-2xl font-bold tabular-nums text-text-primary"
                    labelClassName="font-data text-[11px] uppercase tracking-wide text-text-muted"
                  />
                ))}
              </div>
            </TextItem>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
