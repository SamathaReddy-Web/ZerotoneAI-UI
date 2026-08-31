// Home page (/construct) content. Source: zerotoneai-construct-content.md §5.
// §5.1 (Hero) and §5.6 (Module Grid) are populated. §5.2–§5.5, §5.7–§5.12
// come in later phases. DATA_FLOW below has no §5.x source — it's a new
// section, not in the original doc.

import { CONSTRUCT_BASE_PATH, GET_STARTED_HREF, constructHref } from "./navigation";
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

// §5.6 Module Grid — eyebrow/H2/sub and the 13-card list are per-spec.
// Card icon keys map to components in components/icons/Icons.tsx via the
// ICON map in ModuleGrid.tsx; `tone` reuses the shared StatusTone badge
// palette (see components/ui/StatusChip.tsx) rather than inventing a
// separate color system for this one grid.
export const MODULE_GRID = {
  eyebrow: "Everything we run with you",
  heading: "Everything your team needs. Nothing bolted on.",
  sub: "Fourteen purpose built modules, all connected, built and supported by the same team that stays on to run it with you. No separate subscriptions. No integration fees.",
  cards: [
    {
      label: "Bid Pipeline",
      detail: "Track every opportunity from intake to signed contract. One click convert to project.",
      icon: "bidPipeline",
      tone: "success" as StatusTone,
      href: constructHref("construction-bidding-software"),
    },
    {
      label: "Estimating",
      detail: "Line item estimates with version history, markup control, and baseline locking.",
      icon: "estimating",
      tone: "warning" as StatusTone,
      href: constructHref("construction-estimating-software"),
    },
    {
      label: "Budget Control",
      detail: "Baseline vs actuals by cost code. See committed costs before the invoice arrives.",
      icon: "budgetControl",
      tone: "success" as StatusTone,
      href: constructHref("construction-budget-software"),
    },
    {
      label: "Purchase Orders",
      detail: "Approval workflow, vendor tracking, committed cost control, and short close for savings.",
      icon: "purchaseOrder",
      tone: "info" as StatusTone,
      href: constructHref("construction-purchasing-software"),
    },
    {
      label: "Schedule Control",
      detail: "Six lens scheduling with CPM analysis, slippage detection, and progress tracking.",
      icon: "scheduleControl",
      tone: "neutral" as StatusTone,
      href: constructHref("construction-scheduling-software"),
    },
    {
      label: "RFIs & Submittals",
      detail: "Every question answered, every approval documented. Full audit trail per RFI.",
      icon: "rfi",
      tone: "success" as StatusTone,
      href: constructHref("rfi-software"),
    },
    {
      label: "Change Orders",
      detail: "Draft to owner approval to billing: with cost impact, schedule impact, and linked POs.",
      icon: "changeOrders",
      tone: "warning" as StatusTone,
      href: constructHref("change-order-management"),
    },
    {
      label: "SOV & Billing",
      detail: "Pay applications from approved scope. Retainage tracked, managed, and released.",
      icon: "sovBilling",
      tone: "info" as StatusTone,
      href: constructHref("schedule-of-values-software"),
    },
    {
      label: "Accounting & GL",
      detail: "Full double entry GL. AP, AR, bank reconciliation, and financial reports built in.",
      icon: "accounting",
      tone: "success" as StatusTone,
      href: constructHref("construction-accounting-software"),
    },
    {
      label: "Vendor Management",
      detail: "Compliance docs, payment profiles, 1099 tracking, and performance history per vendor.",
      icon: "vendorManagement",
      tone: "info" as StatusTone,
      href: constructHref("construction-vendor-management"),
    },
    {
      label: "Daily Logs & Delays",
      detail: "Field reports, crew counts, weather incidents, and documented delay logs.",
      icon: "dailyLogs",
      tone: "warning" as StatusTone,
      href: constructHref("construction-daily-logs"),
    },
    {
      label: "Reports",
      detail: "20+ live reports across cost, schedule, cash flow, and vendor performance.",
      icon: "reports",
      tone: "info" as StatusTone,
      href: constructHref("construction-reporting-software"),
    },
    {
      label: "Inventory & Materials",
      detail: "Material masters, warehouse stock, deliveries, and equipment tracking tied to every job.",
      icon: "inventory",
      tone: "neutral" as StatusTone,
      href: constructHref("construction-inventory-software"),
    },
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
  sub: "POs, submittals, lien waivers, daily logs, change orders, and bank activity all land in Zerotone. We read them, file them, and tell your team what needs attention next.",
  items: [
    { id: "po", label: "Purchase Order", value: "PO 041", icon: "purchaseOrder" },
    { id: "rfi", label: "RFI", value: "RFI #23", icon: "rfi" },
    { id: "submittal", label: "Submittal", value: "Approved", icon: "document" },
    { id: "co", label: "Change Order", value: "CO-08", icon: "changeOrders" },
    { id: "dailyLog", label: "Daily Log", value: "Crew: 14", icon: "dailyLogs" },
    { id: "lienWaiver", label: "Lien Waiver", value: "Conditional", icon: "document" },
    { id: "payApp", label: "Pay App", value: "App #5", icon: "receipt" },
    { id: "invoice", label: "Invoice", value: "$4,280", icon: "receipt" },
    { id: "bank", label: "Bank Activity", value: "+$22,750", icon: "bank" },
    { id: "contract", label: "Contract", value: "Executed", icon: "document" },
    { id: "bid", label: "Bid", value: "Submitted", icon: "bidPipeline" },
    { id: "punchlist", label: "Punchlist", value: "3 open", icon: "checklist" },
  ],
};
