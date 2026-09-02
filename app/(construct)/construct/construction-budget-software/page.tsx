import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { BudgetProblemSolution } from "@/components/sections/budget/BudgetProblemSolution";
import { BudgetHeroVisual } from "@/components/sections/budget/BudgetHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { FolderTree, BarChart3, AlertTriangle, Hash, RefreshCcw, FileText } from "lucide-react";

export const metadata = {
  title: "Construction Budget Software | Zerotone Construct",
  description: "Construction budget software for GCs: CSI cost codes, job to date tracking, QuickBooks sync, and variance alerts.",
};

const FEATURES = [
  {
    title: "Preloaded CSI cost codes",
    description: "Start with the full 50 division CSI MasterFormat library. Customize codes for your trade mix: no blank spreadsheet to build from scratch.",
    icon: <FolderTree className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Job to date tracking",
    description: "Budget vs. committed vs. actual: updated in real time as invoices come in. See exactly where you stand on every line item.",
    icon: <BarChart3 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Variance alerts",
    description: "Set threshold rules (e.g., flag any line over 10% variance) and get alerted before overruns become surprises on the owner's statement.",
    icon: <AlertTriangle className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Unit cost tracking",
    description: "Track cost per square foot, per unit, or per linear foot alongside budget totals. Build the unit cost database you'll reference on every future bid.",
    icon: <Hash className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "QuickBooks & Sage sync",
    description: "Two way sync with QuickBooks Online and Sage 100 Contractor. AP invoices post automatically: no double entry.",
    icon: <RefreshCcw className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Owner cost reports",
    description: "Generate AIA G702/G703 pay application formats or custom cost reports for owner reporting in one click.",
    icon: <FileText className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "3x",
    label: "faster month end",
    description: "Teams with Zerotone Budget close their monthly cost reports 3x faster than teams reconciling from QuickBooks alone.",
  },
  {
    value: "$18k",
    label: "avg overrun caught",
    description: "The average Zerotone customer catches a budget variance alert and recovers $18k+ in potential overruns per project.",
  },
  {
    value: "100%",
    label: "setup on day one",
    description: "Import your existing budget from Excel or start with our CSI library: zero setup time lost.",
  },
];

const BUDGET_FAQS = [
  {
    question: "Does Zerotone include a cost code library or do I have to build one?",
    answer: "Zerotone ships with the full CSI 50 division MasterFormat library preloaded. You can use it as is, hide divisions that don't apply to your trade, or add custom codes. Most GCs are set up in under an hour.",
  },
  {
    question: "Can I import my existing budget from Excel?",
    answer: "Yes. Paste your budget columns (description, cost code, budgeted amount) into our import template and upload. The importer maps your columns to CSI divisions and flags any codes it can't match.",
  },
  {
    question: "How does QuickBooks sync work?",
    answer: "Zerotone connects to QuickBooks Online via OAuth. AP invoices coded to a Zerotone project flow in automatically. You can also push approved invoices from Zerotone into QuickBooks for payment. Sage 100 Contractor uses a file based integration.",
  },
  {
    question: "Can I track committed costs (POs, subcontracts) before invoices arrive?",
    answer: "Yes. When you issue a subcontract or PO in Zerotone, the committed amount posts to your budget instantly. You see budget vs. committed vs. actual: not just budget vs. billed.",
  },
  {
    question: "Does Zerotone support multi project budget roll ups?",
    answer: "Yes. The portfolio dashboard rolls up budget vs. actual across all active projects. You can see which jobs are running hot before your PM calls to warn you.",
  },
  {
    question: "Can I generate AIA pay app forms (G702/G703) in Zerotone?",
    answer: "Yes: G702 and G703 generate automatically from your budget and billing data. Fill in the stored materials line and the form is complete. Export to PDF and send to the owner.",
  },
];

export default function BudgetPage() {
  return (
    <>
      <ModuleHero
        badge="BUDGET & COST CODES"
        title={
          <>
            Know where your money is <span className="text-primary-800">before the invoice hits.</span>
          </>
        }
        description="Preloaded CSI cost code library, job to date tracking, and two way QuickBooks sync. Built for GCs who want to catch overruns in week three: not week twelve."
        visual={<BudgetHeroVisual />}
      />
      <BudgetProblemSolution />
      <ModuleFeaturesGrid
        headline="Complete visibility into project financials."
        description="Track committed costs, actuals, and variances in real time."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Catch overruns before they eat your margin."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={BUDGET_FAQS} />
      <ModuleCTA
        headline="Know where every dollar is going."
        description="20 minute demo. We'll import your last project's budget and show you what it looks like live."
      />
    </>
  );
}
