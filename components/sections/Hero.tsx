"use client";

import { type PointerEvent, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { AnimatedMetric, MagneticButton } from "@/components/motion";
import { Button, Eyebrow } from "@/components/ui";
import { useFinePointer } from "@/lib/use-fine-pointer";
import { EASE_OUT } from "@/lib/motion";
import { HeroFragment } from "./HeroFragment";
import { ArchitecturalDrawing } from "./hero/ArchitecturalDrawing";
import { DataAnnotationLabel } from "./hero/DataAnnotationLabel";
import { RotatingWord } from "./hero/RotatingWord";
import { ZoneTooltip } from "./hero/ZoneTooltip";
import { ANNOTATION_POINTS } from "./hero/drawing-data";
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
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: TEXT_START + index * TEXT_STAGGER, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const finePointer = useFinePointer();
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  // Scroll-linked depth parallax — the drawing (further back) moves more
  // than the text (closer to camera) as the hero scrolls past.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const drawingScrollY = useTransform(scrollYProgress, [0, 1], [0, 46]);
  const textScrollY = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);

  // Perspective "camera": a one-time descend from a steeper angle to its
  // resting tilt on load, plus a continuous small pointer-driven offset —
  // both are plain motion values driving one element's style directly
  // (no initial/animate props, no variants), which is the pattern proven
  // reliable in this project; combined via useTransform.
  const baseTiltX = useMotionValue(9);
  const pointerTiltX = useMotionValue(0);
  const pointerTiltY = useMotionValue(0);
  const springPointerTiltX = useSpring(pointerTiltX, { stiffness: 60, damping: 20 });
  const springPointerTiltY = useSpring(pointerTiltY, { stiffness: 60, damping: 20 });
  const stageRotateX = useTransform(
    [baseTiltX, springPointerTiltX],
    ([base, pointer]: number[]) => base + pointer
  );

  useEffect(() => {
    if (reduceMotion) {
      baseTiltX.set(3);
      return;
    }
    const controls = animate(baseTiltX, 3, { duration: 1.1, ease: EASE_OUT });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion]);

  function handlePointerMove(e: PointerEvent<HTMLElement>) {
    if (!finePointer || reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    pointerTiltY.set(relX * 5);
    pointerTiltX.set(relY * -3);
  }

  const scrollDisabled = !!reduceMotion;

  return (
    <motion.section
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
              <h1 className="text-balance font-display text-[40px] font-bold leading-[1.05] tracking-tight text-text-primary sm:text-[52px] lg:text-[58px]">
                Every{" "}
                <RotatingWord phrases={HERO.headline} accentClassName="text-primary-800" />
              </h1>
            </TextItem>

            <TextItem index={2} reduceMotion={reduceMotion}>
              <p className="max-w-prose font-body text-[16px] leading-relaxed text-text-secondary sm:text-[17px]">
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
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface bg-primary-100 font-data text-[10px] font-medium text-primary-800"
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p className="font-body text-[13px] text-text-muted">{HERO.trustLine}</p>
            </TextItem>
          </motion.div>

          {/* Visual column — the architectural elevation, staged with real
              perspective. Desktop/laptop only; the mobile version further
              down is a separately-composed simplified band, not a hidden
              copy of this one. */}
          <div
            className="relative z-0 mt-14 hidden lg:mt-0 lg:block"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              style={{
                rotateX: scrollDisabled ? 3 : stageRotateX,
                rotateY: scrollDisabled ? 0 : springPointerTiltY,
                y: scrollDisabled ? 0 : drawingScrollY,
                transformStyle: "preserve-3d",
              }}
              onPointerMove={handlePointerMove}
              className="relative aspect-[600/480] w-full"
            >
              <ArchitecturalDrawing
                className="absolute inset-0 h-full w-full drop-shadow-[0_1px_1px_rgba(26,34,51,0.04)]"
                triggerRef={sectionRef}
                onZoneHover={setHoveredZone}
              />

              {HERO.dashboard.rows.map((row, i) => {
                const point = ANNOTATION_POINTS[i];
                const delayMs = reduceMotion ? 0 : (1.9 + i * 0.18) * 1000 + 150;
                return (
                  <DataAnnotationLabel
                    key={row.label}
                    data={row}
                    x={point.label.x}
                    y={point.label.y}
                    side={point.side}
                    delayMs={delayMs}
                    depthPx={28}
                  />
                );
              })}

              <ZoneTooltip hoveredZone={hoveredZone} />
            </motion.div>

            {/* Resolved summary strip — sits below the drawing as its data
                footer, single top rule rather than card chrome, so it
                reads as a continuation of the technical document. */}
            <div
              className={reduceMotion ? "mt-6" : "mt-6 animate-fade-in-up"}
              style={reduceMotion ? undefined : { animationDelay: "2.55s" }}
            >
              <div className="grid grid-cols-3 divide-x divide-border-subtle border-t-2 border-primary-800 pt-3">
                {HERO.dashboard.stats.map((stat) => (
                  <AnimatedMetric key={stat.label} value={stat.value} label={stat.label} className="px-4" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/tablet — the same drawing, recomposed as a simplified
            top band (grid/dimensions/title-block/leader-lines drop out
            via the drawing's own responsive classes), not removed. Data
            reads as a stacked list beneath it for legibility at this
            width, with each row keeping its fragment styling. */}
        <div className="mt-10 lg:hidden">
          <TextItem index={0} reduceMotion={reduceMotion} className="mb-6">
            <ArchitecturalDrawing className="h-56 w-full sm:h-64" />
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
                    valueClassName="font-display text-xl font-bold tabular-nums text-text-primary"
                    labelClassName="font-data text-[9.5px] uppercase tracking-wide text-text-muted"
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
