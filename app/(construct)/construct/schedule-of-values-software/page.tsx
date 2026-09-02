import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { SovProblemSolution } from "@/components/sections/sov/SovProblemSolution";
import { SovHeroVisual } from "@/components/sections/sov/SovHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { LayoutList, FileSpreadsheet, Percent, RefreshCw, Lock, LineChart } from "lucide-react";

export const metadata = {
  title: "Schedule of Values Software | Zerotone Construct",
  description: "Owner facing SOV. Pay applications with earned value tracking. Retainage and lien waiver management. Billing integration.",
};

const FEATURES = [
  {
    title: "Owner facing SOV",
    description: "Create SOV that allocates contract value across work items. Version control (baseline, current). Track earned value as work progresses.",
    icon: <LayoutList className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Pay applications (G702/G703)",
    description: "Monthly pay apps tied to SOV line items. Track work to date, current period, and earned value. AIA standard format.",
    icon: <FileSpreadsheet className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Percent complete tracking",
    description: "Bulk entry: select SOV lines and set pct complete for the period. Earned value auto calculates. Or import from project tracker.",
    icon: <Percent className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "CO integration",
    description: "Change orders automatically add to SOV. Update contract value. Pay apps include CO scope.",
    icon: <RefreshCw className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Retainage & lien waivers",
    description: "Set retainage per pay app. Lien waiver status tracked. Dashboard shows outstanding retainage due.",
    icon: <Lock className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Cashflow forecasting",
    description: "SOV feeds cashflow reports. See contract billings vs. actual costs. Understand GC margin by period.",
    icon: <LineChart className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "contract transparent",
    description: "Owner sees what work is worth and when payment is due. No surprises at billing.",
  },
  {
    value: "5 min",
    label: "per pay application",
    description: "Set percent complete. Zerotone calculates earned value. Review and submit.",
  },
  {
    value: "0",
    label: "billing disputes",
    description: "Owner facing SOV is clear. Retainage is transparent. Pay apps match contract terms.",
  },
];

const SOV_FAQS = [
  {
    question: "What is a Schedule of Values (SOV)?",
    answer: "A SOV is a contract mandated document that breaks your contract price into line items (e.g., 'Foundation $50K, Framing $75K, MEP $60K'). It's the basis for invoicing. You submit pay applications against the SOV each month.",
  },
  {
    question: "What is a pay application?",
    answer: "A pay application (G702) is your monthly invoice to the owner. It shows work completed in the period (as a % of each SOV line), earned value, retainage held, and amount due.",
  },
  {
    question: "How do I set percent complete?",
    answer: "You estimate pct complete for each SOV line for the period. E.g., 'Foundation is 50% complete, Framing is 20% complete.' Zerotone multiplies by contract value to get earned value.",
  },
  {
    question: "How do change orders affect the SOV?",
    answer: "When you create a CO, it's added to the SOV as a new line or added to existing lines. Contract value increases. Subsequent pay apps include the CO scope and price.",
  },
  {
    question: "How is retainage handled?",
    answer: "You set a retainage percentage per pay app (e.g., 10%). Zerotone calculates retainage due. Pay app shows gross earned value, retainage held, and net due.",
  },
  {
    question: "Can I use AIA standard formats?",
    answer: "Yes. Zerotone formats pay apps as AIA G702/G703 or your custom template. Export to PDF for owner submission.",
  },
];

export default function SovPage() {
  return (
    <>
      <ModuleHero
        badge="SCHEDULE OF VALUES"
        title={
          <>
            Transparent billing. Clear pay apps. <span className="text-primary-800">Predictable cash.</span>
          </>
        }
        description="Create owner facing SOVs. Track earned value. Generate G702 pay apps monthly. Integrate with change orders and retainage."
        visual={<SovHeroVisual />}
      />
      <SovProblemSolution />
      <ModuleFeaturesGrid
        headline="End the month-end billing scramble."
        description="Automated math, integrated change orders, and instant AIA exports."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Billing that owners trust."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={SOV_FAQS} />
      <ModuleCTA
        headline="Billing that owners trust. Payment that happens on time."
        description="15 minute demo. See how SOV + pay apps work end to end."
      />
    </>
  );
}
