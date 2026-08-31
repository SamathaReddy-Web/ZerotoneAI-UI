// Home page (/construct) content. Source: zerotoneai-construct-content.md §5.
// Only §5.1 (Hero) is populated so far — Phase 3 scope. The remaining home
// sections (§5.2–§5.12) come in later phases.

import { CONSTRUCT_BASE_PATH, GET_STARTED_HREF } from "./navigation";
import type { StatusTone } from "@/components/ui";

export const HERO = {
  eyebrow: "An AI-led team that stays, not software",
  // Cycled in the H1 (RotatingWord) — "Every " is the static prefix, the
  // last word of each phrase renders in the accent color. Order matters:
  // ends on "decision matters." so reduced-motion (which shows the final
  // phrase with no animation) still lands on a complete, sensible line.
  headline: ["project moves.", "budget changes.", "team connects.", "decision matters."],
  lede: "Zerotone isn't something you buy and set up alone. We studied how GCs actually run bid pipeline, field operations, cost controls, schedule, and accounting, redesigned what should change, and built the AI-enabled system around it, then stay on with your team to run it, for as long as you need us.",
  ctaPrimary: { label: "Talk to the Team →", href: GET_STARTED_HREF },
  ctaSecondary: { label: "See how it works", href: `${CONSTRUCT_BASE_PATH}#tour` },
  trustInitials: ["RM", "JT", "SK"],
  trustLine: "Working alongside builders across the Southeast, day to day",
  dashboard: {
    project: "Project Dashboard: River North Office",
    week: "Week 14",
    stats: [
      { value: "78%", label: "Budget used" },
      { value: "12", label: "Open POs" },
      { value: "ON", label: "Schedule" },
    ],
    rows: [
      { label: "PO 041", detail: "Eagle Supply: Concrete", tone: "success" as StatusTone, status: "Approved" },
      { label: "CO 008", detail: "MEP Scope Addition, $24,400", tone: "warning" as StatusTone, status: "Pending owner" },
      { label: "RFI 023", detail: "Wall opening dimension", tone: "warning" as StatusTone, status: "Open 2 days" },
    ],
  },
};
