"use client";

import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import { ZONE_HOTSPOTS, zoneAnchor } from "./drawing-data";

/**
 * The HTML half of the hover zone hotspots drawn in ArchitecturalDrawing
 * — same "attached to the drawing" positioning pattern as
 * DataAnnotationLabel (percent coords from the same viewBox), rendered
 * as a sibling in Hero.tsx's perspective stage so it inherits the same
 * 3D transform as the drawing and pin labels around it.
 */
export function ZoneTooltip({ hoveredZone }: { hoveredZone: string | null }) {
  const zone = ZONE_HOTSPOTS.find((z) => z.id === hoveredZone) ?? null;

  return (
    <AnimatePresence>
      {zone && (
        <motion.div
          key={zone.id}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -6 }}
          transition={{ duration: 0.18, ease: EASE_OUT }}
          className="pointer-events-none absolute z-10 w-[10.5rem] rounded-md border border-border bg-surface/95 px-3 py-2.5 shadow-raised backdrop-blur-sm"
          style={zoneAnchor(zone)}
        >
          <p className="font-data text-[10.5px] font-medium uppercase tracking-wide text-primary-800">
            {zone.level}
          </p>
          <div className="mt-1.5 flex flex-col gap-1">
            {zone.stats.map((s) => (
              <div key={s.label} className="flex items-center justify-between gap-3">
                <span className="font-data text-[10px] uppercase tracking-wide text-text-muted">{s.label}</span>
                <span className="font-body text-[12px] font-medium text-text-primary">{s.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
