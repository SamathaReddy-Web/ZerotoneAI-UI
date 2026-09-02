import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { ReportsProblemSolution } from "@/components/sections/reports/ReportsProblemSolution";
import { ReportsHeroVisual } from "@/components/sections/reports/ReportsHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { BarChart3, LineChart, Target, Zap, Share2, Layers } from "lucide-react";

export const metadata = {
  title: "Construction Reporting Software | Zerotone Construct",
  description: "Prebuilt reports: AP aging, cashflow, earned value, variance analysis. Real time dashboards. Drill down analytics. Export to Excel or PDF.",
};

const FEATURES = [
  {
    title: "Prebuilt financial reports",
    description: "AP aging, cashflow forecast, variance (budget vs. actual), cost to complete, earned value curves (S curves), and trend analysis.",
    icon: <BarChart3 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Project operations reports",
    description: "Change order aging, PO budget tracking, vendor performance, delay summary, daily log analytics, and schedule variance.",
    icon: <LineChart className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Drill down analytics",
    description: "Start with high level dashboard. Click into cost code, vendor, trade, or phase. Granular detail is two clicks away.",
    icon: <Target className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Real time dashboards",
    description: "No data stale. Cashflow, budget variance, and commitment status update as POs, bills, and changes are entered.",
    icon: <Zap className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Export & share",
    description: "Export any report to Excel, PDF, or print. Schedule automated email reports to owner, lender, or stakeholders.",
    icon: <Share2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Multi project views",
    description: "Compare metrics across projects. Portfolio level rollup for GCs running multiple jobs. Benchmark and analyze.",
    icon: <Layers className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "0 hrs",
    label: "building reports from scratch",
    description: "Prebuilt templates cover every financial and operational metric. Click and view.",
  },
  {
    value: "100%",
    label: "real time data",
    description: "Every report is live. No manual data pulls. No stale snapshots.",
  },
  {
    value: "5 min",
    label: "to understand project health",
    description: "Dashboard view shows budget, cashflow, and pending risks. Drill down for details.",
  },
];

const REPORTS_FAQS = [
  {
    question: "What reports does Zerotone provide?",
    answer: "Financial: AP aging, bills line progress, cashflow, cost to complete, earned value (S curves), variance analysis, GC dashboard. Operations: change order aging, PO budget, vendor performance, delay summary, daily log analytics, schedule variance.",
  },
  {
    question: "Can I drill down from high level reports?",
    answer: "Yes. Start with budget variance by phase. Click to see variance by cost code. Click again to see individual line items and POs. Every report supports drill down.",
  },
  {
    question: "How often are reports updated?",
    answer: "In real time. As you enter POs, bills, COs, and daily logs, reports update instantly. No overnight batch processes.",
  },
  {
    question: "Can I export reports?",
    answer: "Yes. Every report can be exported to Excel, PDF, or printed. Useful for owner presentations, lender reviews, or internal archiving.",
  },
  {
    question: "Can I share reports with owners or lenders?",
    answer: "Yes. Schedule automated email reports on a weekly or monthly cadence. Recipients see read only versions with your branding.",
  },
  {
    question: "What is earned value (S curve)?",
    answer: "Earned value shows cumulative work progress and cost. Compares baseline budget (scheduled) vs. actual cost (spent). Shows whether you're ahead/behind schedule and under/over budget.",
  },
];

export default function ReportingPage() {
  return (
    <>
      <ModuleHero
        badge="REPORTS MODULE"
        title={
          <>
            Project health in real time. <span className="text-primary-800">Data that actually drives decisions.</span>
          </>
        }
        description="Prebuilt financial and operational reports. Drill down analytics. Real time dashboards. Export for stakeholders."
        visual={<ReportsHeroVisual />}
      />
      <ReportsProblemSolution />
      <ModuleFeaturesGrid
        headline="Stop rebuilding spreadsheets every week."
        description="Live data, one click drill-down, and automated exports."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Real data. Right now."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Finance stopped spending a day a week building reports. Now we have real time dashboards. When the owner asks 'what's our cashflow?', we show her. No guessing, no waiting."
        authorName="Angela T."
        authorTitle="Finance Director · Premier Contracting, MA"
      />
      <RestOfZerotone />
      <FAQSection items={REPORTS_FAQS} />
      <ModuleCTA
        headline="Real time data. Real decisions. Real results."
        description="20 minute demo. See how Zerotone turns data into insights."
      />
    </>
  );
}
