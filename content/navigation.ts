// Global navigation + footer data, sourced from zerotoneai-construct-content.md §2.
//
// Note on module count: the doc's own site map header says "21 product/module
// pages," but both the site map table and the nav's numbered list actually
// enumerate 22 distinct routes (Buildings ... Closeout & Punchlist), matching
// the 22 individually-authored module sections in §4.1–4.22. Treating 22 as
// correct here — it's backed by two independent full enumerations in the doc,
// the "21" is the one place that undercounts.
//
// Note on grouping: the doc's mega-menu spec is a flat fixed-order list. Per
// Phase 2 direction ("meaningful groupings, not a generic dropdown"), the 22
// modules below are clustered into 4 functional categories grounded in what
// each module actually does (per §4) — all 22 labels and routes are preserved
// exactly as specified, only the visual grouping is new.

export const CONSTRUCT_BASE_PATH = "/construct";

export function constructHref(slug: string) {
  return `${CONSTRUCT_BASE_PATH}/${slug}`;
}

import {
  Hammer,
  TrendingUp,
  Building2,
  BarChart2,
  CalendarDays,
  ClipboardList,
  Clipboard,
  CheckCircle2,
  Clock,
  FolderOpen,
  Wallet,
  ShoppingCart,
  FileText,
  ArrowRightLeft,
  DollarSign,
  Landmark,
  Boxes,
  Target,
  PieChart,
  Users,
  Factory,
  type LucideIcon,
} from "lucide-react";

export type ModuleCategoryKey =
  | "win-the-work"
  | "run-the-project"
  | "manage-the-money"
  | "stay-ahead";

export interface ModuleCategory {
  key: ModuleCategoryKey;
  label: string;
}

export const MODULE_CATEGORIES: ModuleCategory[] = [
  { key: "win-the-work", label: "WIN THE WORK" },
  { key: "run-the-project", label: "RUN THE PROJECT" },
  { key: "manage-the-money", label: "MANAGE THE MONEY" },
  { key: "stay-ahead", label: "STAY AHEAD" },
];

export interface ModuleLink {
  label: string;
  slug: string;
  category: ModuleCategoryKey;
  icon: LucideIcon;
}

export const MODULES: ModuleLink[] = [
  // WIN THE WORK
  { label: "Bidding & Precon", slug: "construction-bidding-software", category: "win-the-work", icon: Hammer },
  { label: "Estimate", slug: "construction-estimating-software", category: "win-the-work", icon: TrendingUp },
  { label: "Buildings", slug: "construction-buildings", category: "win-the-work", icon: Building2 },
  { label: "Cost Codes", slug: "construction-cost-codes", category: "win-the-work", icon: BarChart2 },

  // RUN THE PROJECT
  { label: "Smart Scheduling", slug: "construction-scheduling-software", category: "run-the-project", icon: CalendarDays },
  { label: "Daily Logs", slug: "construction-daily-logs", category: "run-the-project", icon: ClipboardList },
  { label: "RFI Manager", slug: "rfi-software", category: "run-the-project", icon: Clipboard },
  { label: "Submittals", slug: "construction-submittals-software", category: "run-the-project", icon: CheckCircle2 },
  { label: "Delays", slug: "construction-delay-tracking", category: "run-the-project", icon: Clock },
  { label: "Closeout & Punchlist", slug: "punchlist-software", category: "run-the-project", icon: FolderOpen },

  // MANAGE THE MONEY
  { label: "Budget, POs & Bills", slug: "construction-budget-software", category: "manage-the-money", icon: Wallet },
  { label: "Purchasing", slug: "construction-purchasing-software", category: "manage-the-money", icon: ShoppingCart },
  { label: "Bills", slug: "construction-bills-software", category: "manage-the-money", icon: FileText },
  { label: "Change Orders", slug: "change-order-management", category: "manage-the-money", icon: ArrowRightLeft },
  { label: "SOV", slug: "schedule-of-values-software", category: "manage-the-money", icon: DollarSign },
  { label: "Accounting & GL", slug: "construction-accounting-software", category: "manage-the-money", icon: Landmark },
  { label: "Inventory", slug: "construction-inventory-software", category: "manage-the-money", icon: Boxes },

  // STAY AHEAD
  { label: "Project Tracker", slug: "construction-project-tracker", category: "stay-ahead", icon: Target },
  { label: "Reports", slug: "construction-reporting-software", category: "stay-ahead", icon: PieChart },
  { label: "Users & Roles", slug: "construction-team-management", category: "stay-ahead", icon: Users },
  { label: "Vendor Master", slug: "construction-vendor-management", category: "stay-ahead", icon: Factory },
];

export const PRICING_HREF = `${CONSTRUCT_BASE_PATH}#pricing`;
export const FAQ_HREF = `${CONSTRUCT_BASE_PATH}#faq`;
export const GET_STARTED_HREF = `${CONSTRUCT_BASE_PATH}/get-started`;

// --- Footer -----------------------------------------------------------
// Per §2 footer spec. Labels there sometimes differ from the nav's module
// labels (e.g. "Estimating" vs "Estimate") for the same route — kept as
// written in the doc. One item needed a resolved (not spec-literal) target:
//   - "Purchase Orders": doc gives no slug; inferred to the Purchasing module
//     (construction-purchasing-software), whose own hero copy is literally
//     about issuing/controlling POs — the content match, not a guess.
// The doc's "RFIs & Submittals" was a single combined label covering two
// distinct modules with no disambiguating route — approved decision: split
// it into two honest links (RFIs, Submittals) rather than have one label
// silently open only one destination.
export const FOOTER_PLATFORM_LINKS: { label: string; slug: string }[] = [
  { label: "Bid Pipeline", slug: "construction-bidding-software" },
  { label: "Estimating", slug: "construction-estimating-software" },
  { label: "Budget Control", slug: "construction-budget-software" },
  { label: "Purchase Orders", slug: "construction-purchasing-software" },
  { label: "Schedule Control", slug: "construction-scheduling-software" },
  { label: "RFIs", slug: "rfi-software" },
  { label: "Submittals", slug: "construction-submittals-software" },
  { label: "Change Orders", slug: "change-order-management" },
];

export const FOOTER_SECONDARY_LINKS: { label: string; slug: string; highlight?: boolean }[] = [
  { label: "SOV & Billing", slug: "schedule-of-values-software" },
  { label: "Accounting & GL", slug: "construction-accounting-software" },
  { label: "Vendor Management", slug: "construction-vendor-management" },
  { label: "Daily Logs", slug: "construction-daily-logs" },
  { label: "Reports", slug: "construction-reporting-software" },
  { label: "Inventory & Materials", slug: "construction-inventory-software" },
];

export const FOOTER_COMPANY_LINKS: { label: string; slug: string }[] = [
  { label: "Zerotone home", slug: "" },
  { label: "About", slug: "about" },
  { label: "Security & data", slug: "security" },
  { label: "Privacy", slug: "privacy" },
  { label: "Terms", slug: "terms" },
];

// The doc lists these 4 social channels but only gives a URL for WhatsApp.
// This is the single config point for all social hrefs — `href: null` means
// "not provided yet," not "goes nowhere." The Footer renders a null href as
// a visually-present but non-interactive icon (not a fake "#" link), so
// filling in a real URL here is the only change needed to activate it.
export type SocialLabel = "WhatsApp" | "LinkedIn" | "Instagram" | "Facebook";

export interface SocialLink {
  label: SocialLabel;
  href: string | null;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "WhatsApp", href: "https://wa.me/917676451991" },
  { label: "LinkedIn", href: "https://linkedin.com/company/zerotone-ai" },
  { label: "Instagram", href: "https://instagram.com/zerotone.ai" },
  { label: "Facebook", href: "https://facebook.com/zerotone.ai" },
];

export const CONTACT = {
  phone: "+91 98486 41736",
  phoneHref: "tel:+919848641736",
  email: "rktantry.marketing@gmail.com",
  address:
    "Chennammana Kere, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085",
};

export const BRAND_TAGLINE =
  "Construction management software for the people who actually build things.";
