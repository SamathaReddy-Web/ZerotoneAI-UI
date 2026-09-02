import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Wallet, TrendingUp, RefreshCw, CheckCircle, FileText, PieChart } from "lucide-react";

export const metadata = {
  title: "Budget & PO Software | Zerotone Construct",
  description: "Track live budgets, forecast costs, and sync with your ERP to keep operations and accounting aligned.",
};

const FEATURES = [
  {
    title: "Live budget tracking",
    description: "Track original budget, revised budget, commitments, and actuals in real-time across every phase.",
    icon: <Wallet className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Cost forecasting",
    description: "Project your estimated final costs based on current burn rates and pending change orders.",
    icon: <TrendingUp className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "ERP sync",
    description: "Two-way sync with Sage, Viewpoint, and QuickBooks so accounting and operations stay perfectly aligned.",
    icon: <RefreshCw className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Approval routing",
    description: "Route internal budget reallocations and owner change orders through customized approval chains.",
    icon: <CheckCircle className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Purchase orders",
    description: "Generate, send, and track Purchase Orders directly from the budget line item to prevent overspending.",
    icon: <FileText className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Profitability dashboard",
    description: "See exactly where your margin is expanding or shrinking with visual cost-to-complete metrics.",
    icon: <PieChart className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "1 unified",
    label: "financial truth",
    description: "Operations and accounting finally looking at the exact same numbers, at the exact same time.",
  },
  {
    value: "100%",
    label: "margin visibility",
    description: "No surprises at the end of the project when it's too late to fix budget overruns.",
  },
  {
    value: "0",
    label: "double entry",
    description: "Seamless ERP integrations eliminate manual data entry errors and hours of reconciliation.",
  },
];

export default function BudgetSoftwarePage() {
  return (
    <>
      <ModuleHero
        badge="BUDGET & POS"
        title={
          <>
            Protect your <span className="text-primary-800">profit margin.</span>
          </>
        }
        description="Stop managing multi-million dollar budgets in fragile spreadsheets. Track commitments, forecast final costs, and sync directly with your accounting ERP."
      />
      <ModuleFeaturesGrid
        headline="Financial control at the project level."
        description="Empower your PMs to manage costs before they happen."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Align operations and accounting."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Before Zerotone, our PMs managed their budgets in Excel and our accountants used Sage. Nobody ever agreed on the numbers. Now, we have a single source of truth."'
        authorName="Chief Financial Officer"
        authorTitle="Top 100 General Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Take control of project costs."
        description="Book a demo to see our live budget tracking and native ERP integrations in action."
      />
    </>
  );
}

