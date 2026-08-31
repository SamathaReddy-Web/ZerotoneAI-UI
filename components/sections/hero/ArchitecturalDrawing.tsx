"use client";

import { type RefObject, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { DRAWING_VIEWBOX, ANNOTATION_POINTS, ZONE_HOTSPOTS } from "./drawing-data";

gsap.registerPlugin(ScrollTrigger);

const STRUCTURE = "var(--primary-800)";
const SECONDARY = "var(--primary-700, var(--primary-800))";
const REFERENCE = "var(--primary-300)";
const DIMENSION = "var(--primary-600)";
const EMPHASIS = "var(--neutral-900)";

/**
 * The hero's visual anchor: a believable technical elevation drawing of
 * "River North Office" — structural grid, floor levels, dimension lines,
 * a section marker, and a title block. Self-draws via stroke animation
 * (see .drawing-tier-* in globals.css) rather than a static illustration.
 * Data annotations (pins + leader lines) attach to specific points on
 * this same drawing — coordinates shared via drawing-data.ts so nothing
 * drifts between the vector art and the HTML label layer above it.
 *
 * Blueprint → structure: `triggerRef` (the hero section) scrubs the
 * three floor bands from transparent to filled as the hero scrolls past
 * — a GSAP ScrollTrigger scoped to that section, synced to the Lenis
 * smooth-scroll RAF loop wired up in SmoothScrollProvider. Without a
 * triggerRef (the mobile drawing) the bands sit at a static partial
 * opacity instead of animating. Those same bands are also the hover/
 * focus zone hotspots — `onZoneHover` reports the hovered id up to
 * Hero.tsx, which renders the ZoneTooltip HTML overlay.
 */
export function ArchitecturalDrawing({
  className,
  triggerRef,
  onZoneHover,
}: {
  className?: string;
  triggerRef?: RefObject<HTMLElement | null>;
  onZoneHover?: (id: string | null) => void;
}) {
  const reduceMotion = useReducedMotion();
  const fillRefs = useRef<Array<SVGRectElement | null>>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    if (reduceMotion || !triggerRef?.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      fillRefs.current.forEach((el, i) => {
        if (!el) return;
        tl.fromTo(el, { opacity: 0 }, { opacity: 0.5, ease: "none" }, i * 0.3);
      });
    });
    return () => ctx.revert();
  }, [reduceMotion, triggerRef]);

  function handleZoneEnter(id: string) {
    setHoveredId(id);
    onZoneHover?.(id);
  }
  function handleZoneLeave() {
    setHoveredId(null);
    onZoneHover?.(null);
  }

  return (
    <svg
      viewBox={`0 0 ${DRAWING_VIEWBOX.width} ${DRAWING_VIEWBOX.height}`}
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* Tier 3 — site grid, dimensions, section marker, title block (fade only) */}
      <g className="drawing-tier-3 hidden lg:block">
        {/* faint site reference grid */}
        <g stroke={REFERENCE} strokeWidth={1}>
          <line x1={80} y1={40} x2={80} y2={440} />
          <line x1={300} y1={40} x2={300} y2={440} />
          <line x1={520} y1={40} x2={520} y2={440} />
          <line x1={40} y1={80} x2={560} y2={80} />
          <line x1={40} y1={250} x2={560} y2={250} />
          <line x1={40} y1={420} x2={560} y2={420} />
        </g>
        <g fill={REFERENCE} fontFamily="var(--font-data)" fontSize={9} textAnchor="middle">
          <text x={80} y={30}>A</text>
          <text x={300} y={30}>B</text>
          <text x={520} y={30}>C</text>
          <text x={30} y={83}>1</text>
          <text x={30} y={253}>2</text>
          <text x={30} y={423}>3</text>
        </g>

        {/* vertical dimension — total height */}
        <g stroke={DIMENSION} strokeWidth={1}>
          <line x1={100} y1={80} x2={100} y2={420} />
          <line x1={94} y1={80} x2={106} y2={80} />
          <line x1={94} y1={420} x2={106} y2={420} />
          <line x1={100} y1={80} x2={140} y2={80} strokeDasharray="2 2" />
          <line x1={100} y1={420} x2={140} y2={420} strokeDasharray="2 2" />
        </g>
        <text
          x={86}
          y={250}
          fill={DIMENSION}
          fontFamily="var(--font-data)"
          fontSize={9}
          textAnchor="middle"
          transform="rotate(-90 86 250)"
        >
          40&apos;-0&quot;
        </text>

        {/* horizontal dimension — one bay width */}
        <g stroke={DIMENSION} strokeWidth={1}>
          <line x1={220} y1={445} x2={300} y2={445} />
          <line x1={220} y1={439} x2={220} y2={451} />
          <line x1={300} y1={439} x2={300} y2={451} />
          <line x1={220} y1={420} x2={220} y2={445} strokeDasharray="2 2" />
          <line x1={300} y1={420} x2={300} y2={445} strokeDasharray="2 2" />
        </g>
        <text x={260} y={462} fill={DIMENSION} fontFamily="var(--font-data)" fontSize={9} textAnchor="middle">
          20&apos;-0&quot;
        </text>

        {/* title block */}
        <g stroke={REFERENCE} strokeWidth={1}>
          <rect x={462} y={440} width={108} height={36} fill="var(--surface)" />
          <line x1={462} y1={452} x2={570} y2={452} />
          <line x1={462} y1={464} x2={570} y2={464} />
        </g>
        <g fill="var(--text-muted)" fontFamily="var(--font-data)" fontSize={8}>
          <text x={468} y={449}>DWG A-101 · RIVER NORTH OFFICE</text>
          <text x={468} y={461}>SCALE 1:200</text>
          <text x={468} y={473}>REV 03</text>
        </g>
      </g>

      {/* Section marker A-A — the single strongest authenticity cue, kept
          visible even on the simplified mobile drawing. */}
      <g className="drawing-tier-3">
        <line x1={300} y1={55} x2={300} y2={445} stroke={EMPHASIS} strokeWidth={1.25} strokeDasharray="6 3 1 3" />
        <circle cx={300} cy={55} r={9} fill="var(--surface)" stroke={EMPHASIS} strokeWidth={1.25} />
        <text x={300} y={58.5} fill={EMPHASIS} fontFamily="var(--font-data)" fontSize={9} textAnchor="middle">A</text>
        <circle cx={300} cy={445} r={9} fill="var(--surface)" stroke={EMPHASIS} strokeWidth={1.25} />
        <text x={300} y={448.5} fill={EMPHASIS} fontFamily="var(--font-data)" fontSize={9} textAnchor="middle">A</text>
      </g>

      {/* Material fill — floor bands, transparent until scroll-scrubbed
          (or a static partial opacity without a triggerRef). Painted
          before the structural tiers so tier-1/tier-2 linework stays on
          top of the fill, not obscured by it. */}
      <g>
        {ZONE_HOTSPOTS.map((zone, i) => (
          <rect
            key={zone.id}
            ref={(el) => {
              fillRefs.current[i] = el;
            }}
            x={zone.x}
            y={zone.y}
            width={zone.width}
            height={zone.height}
            fill="var(--primary-100)"
            opacity={reduceMotion || !triggerRef ? 0.22 : 0}
          />
        ))}
      </g>

      {/* Tier 1 — major structural lines (self-draw first) */}
      <g className="drawing-tier-1" stroke={STRUCTURE} strokeWidth={1.5} strokeLinecap="square">
        <line pathLength={1} x1={40} y1={420} x2={560} y2={420} />
        <line pathLength={1} x1={140} y1={420} x2={140} y2={80} />
        <line pathLength={1} x1={460} y1={420} x2={460} y2={80} />
        <line pathLength={1} x1={140} y1={80} x2={460} y2={80} />
        <line pathLength={1} x1={140} y1={335} x2={460} y2={335} />
        <line pathLength={1} x1={140} y1={250} x2={460} y2={250} />
        <line pathLength={1} x1={140} y1={165} x2={460} y2={165} />
        <line pathLength={1} x1={140} y1={80} x2={140} y2={72} />
        <line pathLength={1} x1={460} y1={80} x2={460} y2={72} />
        <line pathLength={1} x1={140} y1={72} x2={460} y2={72} />
      </g>

      {/* Tier 2 — secondary detail (draws second) */}
      <g className="drawing-tier-2" stroke={SECONDARY} strokeWidth={1} strokeLinecap="square">
        <line pathLength={1} x1={220} y1={420} x2={220} y2={80} />
        <line pathLength={1} x1={300} y1={420} x2={300} y2={80} />
        <line pathLength={1} x1={380} y1={420} x2={380} y2={80} />
        {Array.from({ length: 6 }, (_, i) => 50 + i * 15).map((x) => (
          <line key={`hatch-l-${x}`} pathLength={1} x1={x} y1={420} x2={x + 8} y2={432} />
        ))}
        {Array.from({ length: 6 }, (_, i) => 470 + i * 15).map((x) => (
          <line key={`hatch-r-${x}`} pathLength={1} x1={x} y1={420} x2={x + 8} y2={432} />
        ))}
        {/* wall-opening glyph (RFI 023 attaches here) */}
        <line pathLength={1} x1={320} y1={185} x2={360} y2={185} />
        <line pathLength={1} x1={360} y1={185} x2={360} y2={230} />
        <line pathLength={1} x1={360} y1={230} x2={320} y2={230} />
        <line pathLength={1} x1={320} y1={230} x2={320} y2={185} />
        <line pathLength={1} x1={320} y1={185} x2={360} y2={230} />
        <line pathLength={1} x1={360} y1={185} x2={320} y2={230} />
      </g>

      {/* Zone hover/focus hotspots — same bands as the fill tier above,
          transparent until hovered so they read as part of the drawing,
          not overlay chrome. Painted after tier-1/tier-2 so the
          highlight wash sits above the linework it's washing over. */}
      <g>
        {ZONE_HOTSPOTS.map((zone) => (
          <rect
            key={zone.id}
            x={zone.x}
            y={zone.y}
            width={zone.width}
            height={zone.height}
            fill={
              hoveredId === zone.id ? "color-mix(in srgb, var(--primary-600) 12%, transparent)" : "transparent"
            }
            stroke={hoveredId === zone.id ? "var(--primary-600)" : "transparent"}
            strokeWidth={1.5}
            className="cursor-pointer transition-[fill,stroke] duration-150"
            data-cursor="explore"
            tabIndex={0}
            role="button"
            aria-label={`${zone.level} — ${zone.stats.map((s) => `${s.label} ${s.value}`).join(", ")}`}
            onMouseEnter={() => handleZoneEnter(zone.id)}
            onMouseLeave={handleZoneLeave}
            onFocus={() => handleZoneEnter(zone.id)}
            onBlur={handleZoneLeave}
          />
        ))}
      </g>

      {/* Tier 4 — annotation pins + leader lines, staggered per annotation */}
      <g>
        {ANNOTATION_POINTS.map((p, i) => {
          const delay = 1.9 + i * 0.18;
          return (
            <g key={i}>
              <g className="drawing-tier-4-pin" style={{ animationDelay: `${delay}s` }}>
                <circle cx={p.pin.x} cy={p.pin.y} r={3.5} fill="var(--primary-600)" />
                <circle cx={p.pin.x} cy={p.pin.y} r={7} fill="none" stroke="var(--primary-600)" strokeWidth={1} />
              </g>
              <polyline
                className="drawing-tier-4-leader hidden lg:block"
                style={{ animationDelay: `${delay + 0.1}s` }}
                pathLength={1}
                points={`${p.pin.x},${p.pin.y} ${p.elbow.x},${p.elbow.y} ${p.end.x},${p.end.y}`}
                stroke="var(--primary-600)"
                strokeWidth={1}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
