import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { EstimateProblemSolution } from "@/components/sections/estimate/EstimateProblemSolution";
import { EstimateHeroVisual } from "@/components/sections/estimate/EstimateHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Zap, PenLine, History, PieChart, FileSpreadsheet, Target } from "lucide-react";

export const metadata = {
  title: "Construction Estimating Software: Line Item Pricing & Versioning",
  description: "Build estimates line by line with CSI codes. Version control, inline editing, automarkup. Promote to budget in one step.",
};

const FEATURES = [
  {
    title: "Autogenerate from cost codes",
    description: "Select cost codes and buildings. Zerotone generates your entire estimate structure in one click: no line by line entry.",
    icon: <Zap className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Inline editing, bulk tools",
    description: "Edit any cell in place. Multi-select lines and apply markups, delete, or duplicate across the estimate simultaneously.",
    icon: <PenLine className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Version control & comparison",
    description: "Save versions as you refine. Compare side by side. Revert to any prior version. Full audit trail of changes.",
    icon: <History className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Separate labor, material, overhead",
    description: "Every line splits cost into labor, material, and GC margin. See your gross margin per line. Adjust markups instantly.",
    icon: <PieChart className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Excel import & export",
    description: "Import line items from Excel. Export for client review or vendor quotes. Round trip editing always supported.",
    icon: <FileSpreadsheet className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Promote to budget baseline",
    description: "Estimate finalized? Promote to a locked budget baseline in one step. Baseline becomes your approved cost plan.",
    icon: <Target className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "5 hrs",
    label: "saved per estimate",
    description: "Autogenerate from cost codes. Inline editing. No retyping. No spreadsheet math.",
  },
  {
    value: "100%",
    label: "cost visibility",
    description: "Every line itemized by CSI code, building, level. Margin and material split clear. No black boxes.",
  },
  {
    value: "0",
    label: "lost estimate versions",
    description: "Full version history. Save, compare, revert. Always know what changed and when.",
  },
];

const ESTIMATE_FAQS = [
  {
    id: "start",
    question: "How do I start an estimate?",
    answer: "Option 1: Select cost codes and buildings, autogenerate the line item structure. Option 2: Import from Excel. Option 3: Start blank and add lines manually. Most projects use autogeneration to save time.",
  },
  {
    id: "edit",
    question: "Can I edit line items after they're generated?",
    answer: "Yes. Every line is editable in real time. Change quantity, rate, or notes inline. Multi-select to apply bulk changes (e.g., add 10% markup to all labor lines). Subtotals and grand totals update instantly.",
  },
  {
    id: "version",
    question: "What is estimate version control?",
    answer: "Save snapshots of your estimate as you refine it. Compare any two versions side by side to see what changed. Revert to an earlier version if needed. Full audit trail shows who changed what and when.",
  },
  {
    id: "split",
    question: "Can I separate labor from material?",
    answer: "Yes. Every line has labor rate, material rate, and GC markup. You see gross margin per line. Adjust labor and material independently. Useful for sub quotes and cost tracking.",
  },
  {
    id: "promote",
    question: "How do I promote an estimate to a budget?",
    answer: "Once your estimate is finalized, click \"Promote to Budget Baseline.\" Zerotone locks the estimate, converts it to your approved cost baseline, and tracks committed costs against it going forward.",
  },
  {
    id: "multiple",
    question: "Can I have multiple estimates for one project?",
    answer: "Yes. Create Estimate A (value engineering), Estimate B (baseline bid), Estimate C (alternate). Keep all versions. Promote the winning estimate to budget when the contract is signed.",
  },
];

export default function EstimatingSoftwarePage() {
  return (
    <>
      <ModuleHero
        badge="ESTIMATE MODULE"
        title={
          <>
            Build estimates in minutes, <span className="text-primary-800">not weeks.</span>
          </>
        }
        description="Autogenerate from cost codes and buildings. Edit inline. Version and compare. Promote to budget baseline with one click."
        visual={<EstimateHeroVisual />}
      />
      <EstimateProblemSolution />
      <ModuleFeaturesGrid
        headline="Conceptual to hard bid in record time."
        description="Powerful estimating tools built for the way modern preconstruction teams work."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Confidence in every number."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Zerotone Construct is a young product running on live construction projects today. We don&apos;t publish quotes we can&apos;t attribute, ask us on a call and we&apos;ll walk you through the real system on a real project instead."'
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={ESTIMATE_FAQS} />
      <ModuleCTA
        headline="From bid to baseline in one workflow."
        description="15 minute demo. We'll show how Zerotone cuts your estimate time in half."
      />
    </>
  );
}
