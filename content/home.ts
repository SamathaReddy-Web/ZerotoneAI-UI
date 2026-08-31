// Home page (/construct) content. Source: zerotoneai-construct-content.md §5.
// Only §5.1 (Hero) is populated so far — the rest (§5.2–§5.12) come in
// later phases. DATA_FLOW below has no §5.x source — it's a new section,
// not in the original doc.

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
  // Floating callouts over the hero's 3D construction scene — each ties to
  // a real Zerotone module, not a generic label. `corner` picks a preset
  // anchor position (see CALLOUT_POSITIONS in HeroVisual.tsx).
  sceneCallouts: [
    { id: "blueprint", icon: "blueprint", label: "Blueprint AI", detail: "12 specs parsed", tone: "primary" as const, corner: "top-left" as const },
    { id: "po", icon: "purchaseOrder", label: "Purchase Orders", detail: "Auto-matched", tone: "primary" as const, corner: "top-right" as const },
    { id: "cost", icon: "costControl", label: "Cost Control", detail: "↓ 4.2% savings", tone: "success" as const, corner: "mid-right" as const },
    { id: "path", icon: "criticalPath", label: "AI Critical Path", detail: "Zero delays", tone: "primary" as const, corner: "bottom-right" as const },
    { id: "field", icon: "fieldLogs", label: "Field Logs", detail: "Synced in real-time", tone: "primary" as const, corner: "bottom-left" as const },
  ],
};

// New section, no §5.x source — a dark, scroll-driven counterpart to the
// hero: every document type Zerotone ingests converges on the Zerotone
// mark as the page scrolls through it. Items are deliberately construction
// documents (not the generic "invoice/email/spreadsheet" set a back-office
// SaaS would show) so this reads as our product, not a template.
export const DATA_FLOW = {
  eyebrow: "Every document, one system",
  heading: "Every RFI, invoice, and pay app finds its way home.",
  sub: "POs, submittals, lien waivers, daily logs, change orders, and bank feeds all land in Zerotone. We extract, reconcile, and route them to your team and accounting software in real time.",
  categories: [
    { id: "all", label: "All Operational Feeds", icon: "sparkles" },
    { id: "financials", label: "Financials & Pay Apps", icon: "receipt" },
    { id: "field", label: "Field & Execution", icon: "dailyLogs" },
    { id: "contracts", label: "Contracts & Procurement", icon: "document" },
    { id: "integrations", label: "Integrations & Sync", icon: "sync" },
  ],
  stats: [
    { label: "Avg Ingestion Speed", value: "0.4s", detail: "Real-time AI parsing" },
    { label: "Extraction Accuracy", value: "99.8%", detail: "3-way line item match" },
    { label: "Documents Processed", value: "100%", detail: "Zero manual data entry" },
    { label: "Two-Way Accounting Sync", value: "Live", detail: "QuickBooks & Procore" },
  ],
  items: [
    {
      id: "po",
      label: "Purchase Order",
      value: "PO 041 · $48,250",
      project: "River North Office",
      status: "Auto-Matched",
      category: "contracts",
      icon: "purchaseOrder",
      tone: "primary" as const,
      audit: "Matched with Eagle Supply invoice",
    },
    {
      id: "rfi",
      label: "RFI #23",
      value: "Wall opening dimension",
      project: "Pinehurst Medical",
      status: "AI Drafted",
      category: "field",
      icon: "rfi",
      tone: "warning" as const,
      audit: "Architect response summarized",
    },
    {
      id: "submittal",
      label: "Submittal #09",
      value: "Structural Steel Specs",
      project: "Oakwood Tower",
      status: "Approved",
      category: "field",
      icon: "document",
      tone: "primary" as const,
      audit: "Engineer stamp verified",
    },
    {
      id: "co",
      label: "Change Order #08",
      value: "MEP Scope Addition · $24,400",
      project: "River North Office",
      status: "Pending Owner",
      category: "contracts",
      icon: "changeOrders",
      tone: "warning" as const,
      audit: "Impact analysis calculated",
    },
    {
      id: "dailyLog",
      label: "Daily Field Log",
      value: "24 Workers · 72° Clear",
      project: "Cedar Retail Center",
      status: "Synced",
      category: "field",
      icon: "dailyLogs",
      tone: "primary" as const,
      audit: "GPS verified on site",
    },
    {
      id: "lienWaiver",
      label: "Lien Waiver",
      value: "Unconditional Progress",
      project: "Pinehurst Medical",
      status: "Executed",
      category: "financials",
      icon: "document",
      tone: "success" as const,
      audit: "Notarized & filed",
    },
    {
      id: "payApp",
      label: "AIA Pay App #05",
      value: "G702/G703 · $142,800",
      project: "River North Office",
      status: "G702 Ready",
      category: "financials",
      icon: "receipt",
      tone: "success" as const,
      audit: "Schedule of values verified",
    },
    {
      id: "invoice",
      label: "Subcontractor Invoice",
      value: "$18,450 · Ready for Pay",
      project: "Oakwood Tower",
      status: "Reconciled",
      category: "financials",
      icon: "receipt",
      tone: "success" as const,
      audit: "3-way matched with PO",
    },
    {
      id: "bank",
      label: "Bank Feed Activity",
      value: "+$124,500 Wire Received",
      project: "Company Treasury",
      status: "Reconciled",
      category: "financials",
      icon: "bank",
      tone: "success" as const,
      audit: "Cleared via Stripe/PNC",
    },
    {
      id: "contract",
      label: "Subcontract Agreement",
      value: "Executed MSA & COI",
      project: "Cedar Retail Center",
      status: "Active",
      category: "contracts",
      icon: "document",
      tone: "primary" as const,
      audit: "Insurance cert valid thru 2027",
    },
    {
      id: "quickbooks",
      label: "QuickBooks Online",
      value: "2-Way Live Ledger Sync",
      project: "Accounting Hub",
      status: "Connected",
      category: "integrations",
      icon: "sync",
      tone: "primary" as const,
      audit: "Auto-posted with zero delay",
    },
    {
      id: "punchlist",
      label: "Punchlist Resolution",
      value: "4 of 4 Items Cleared",
      project: "River North Office",
      status: "100% Closed",
      category: "field",
      icon: "checklist",
      tone: "success" as const,
      audit: "Field photo proof attached",
    },
  ],
};
