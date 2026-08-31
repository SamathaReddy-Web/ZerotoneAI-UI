// Shared coordinate space for the architectural elevation drawing.
// All positions are in the SVG's own viewBox units (0 0 600 480) so the
// vector drawing (lines, pins, leader lines) and the HTML annotation
// labels overlaid on top can both derive their position from the exact
// same numbers — one conversion (viewBox → %), zero drift between them.
export const DRAWING_VIEWBOX = { width: 600, height: 480 };

export function toPercent(x: number, y: number) {
  return {
    left: `${(x / DRAWING_VIEWBOX.width) * 100}%`,
    top: `${(y / DRAWING_VIEWBOX.height) * 100}%`,
  };
}

export type LabelSide = "left" | "right";

// Attach points for the three dashboard rows (PO / CO / RFI), each tied to
// a specific, meaningful feature of the elevation rather than a free
// floating position — this is the "annotations belong to the drawing" part.
// `elbow`/`end` describe the two-segment leader line from the pin; `label`
// is where the HTML label tag anchors (offset further out from `end` so
// the tag itself never overlaps the linework).
export const ANNOTATION_POINTS: Array<{
  pin: { x: number; y: number };
  elbow: { x: number; y: number };
  end: { x: number; y: number };
  label: { x: number; y: number };
  side: LabelSide;
}> = [
  {
    // PO 041 — at the foundation/ground line
    pin: { x: 180, y: 420 },
    elbow: { x: 150, y: 405 },
    end: { x: 108, y: 405 },
    label: { x: 96, y: 405 },
    side: "left",
  },
  {
    // CO 008 — at a structural floor junction
    pin: { x: 380, y: 250 },
    elbow: { x: 412, y: 235 },
    end: { x: 452, y: 235 },
    label: { x: 464, y: 235 },
    side: "right",
  },
  {
    // RFI 023 — at the drawn wall-opening glyph
    pin: { x: 340, y: 207 },
    elbow: { x: 372, y: 188 },
    end: { x: 412, y: 178 },
    label: { x: 424, y: 178 },
    side: "right",
  },
];

export interface ZoneStat {
  label: string;
  value: string;
}

export interface ZoneHotspot {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  level: string;
  stats: ZoneStat[];
}

// Floor bands within the elevation's existing structural grid (bounded
// by the tier-1 horizontal lines at y=250/165/80 — see
// ArchitecturalDrawing.tsx). One array drives three things at once: the
// scroll-driven "material fill" rects, the hover/focus hotspots, and the
// ZoneTooltip content — so fill geometry and hover geometry can never
// drift apart. Ordered ground-up (Level 01 first) to match the fill
// animation's construction-sequence stagger. The 335–420 band (ground /
// foundation hatching) is left alone — it's already "built."
export const ZONE_HOTSPOTS: ZoneHotspot[] = [
  {
    id: "level-01",
    x: 140,
    y: 250,
    width: 320,
    height: 85,
    level: "LEVEL 01",
    stats: [
      { label: "Budget", value: "97%" },
      { label: "Schedule", value: "Complete" },
      { label: "RFIs", value: "0 open" },
    ],
  },
  {
    id: "level-02",
    x: 140,
    y: 165,
    width: 320,
    height: 85,
    level: "LEVEL 02",
    stats: [
      { label: "Budget", value: "91%" },
      { label: "Schedule", value: "On track" },
      { label: "RFIs", value: "1 open" },
    ],
  },
  {
    id: "level-03",
    x: 140,
    y: 80,
    width: 320,
    height: 85,
    level: "LEVEL 03",
    stats: [
      { label: "Budget", value: "82%" },
      { label: "Schedule", value: "On track" },
      { label: "RFIs", value: "3 open" },
    ],
  },
];

/** Tooltip anchor for a zone — just outside the elevation's right wall,
 * vertically centered on the zone's band. Same toPercent conversion as
 * every other label on this drawing. */
export function zoneAnchor(zone: ZoneHotspot) {
  return toPercent(zone.x + zone.width + 14, zone.y + zone.height / 2);
}
