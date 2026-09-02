import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { PurchasingProblemSolution } from "@/components/sections/purchasing/PurchasingProblemSolution";
import { PurchasingHeroVisual } from "@/components/sections/purchasing/PurchasingHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { ClipboardEdit, Briefcase, RefreshCcw, FileCheck2, Target, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Construction Purchasing Software | Zerotone Construct",
  description: "Issue purchase orders. Track commitments. Manage amendments. Control procurement spend. Real time budget integration.",
};

const FEATURES = [
  {
    title: "Issue POs fast",
    description: "Create new POs manually, generate from budget, or create from change orders. Assign line items with descriptions, quantities, rates, and delivery dates.",
    icon: <ClipboardEdit className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "PO = budget commitment",
    description: "Every PO links to budget lines. Committed costs show in real time. Budget variance updates instantly as POs are issued or amended.",
    icon: <Briefcase className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Amendment tracking",
    description: "Issue amendments without creating duplicate POs. Track original amount, changes, and revised total. Full audit trail of all amendments.",
    icon: <RefreshCcw className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Bills & retention tied to POs",
    description: "Receive vendor invoices against POs. Zerotone tracks billed vs. committed. Retention holds show outstanding balance per PO.",
    icon: <FileCheck2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Retainage & payment terms",
    description: "Set retention percentage and payment terms per PO. Dashboard shows payment due dates and retention due per vendor.",
    icon: <Target className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Budget vs. committed analysis",
    description: "See total budget, total committed (issued POs), and variance by line. Drill down by vendor, by cost code, by phase.",
    icon: <BarChart3 className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "cost visibility",
    description: "Every PO commits budget immediately. No guessing which costs are locked in. Budget variance is always accurate.",
  },
  {
    value: "50%",
    label: "faster PO creation",
    description: "Generate from budget or CO. Line items auto fill. No copying between systems. One click submits.",
  },
  {
    value: "0",
    label: "budget overruns",
    description: "POs can't exceed available budget. System enforces approval thresholds. Spend control is automatic.",
  },
];

const PURCHASING_FAQS = [
  {
    question: "What is a purchase order (PO)?",
    answer: "A PO is a legal commitment to a vendor for materials, labor, or services. It specifies quantity, rate, delivery date, and terms. In Zerotone, every PO commits budget. Invoices are processed against the PO, and remaining balance is tracked.",
  },
  {
    question: "Can I generate a PO from my budget?",
    answer: "Yes. Select budget lines and click \"Generate PO.\" Zerotone prefills quantities and costs. Add vendor, payment terms, and delivery date. Submit.",
  },
  {
    question: "How do amendments work?",
    answer: "Instead of creating a new PO, issue an amendment to the existing one. The system tracks original amount, amendment details, and revised total. No duplicate PO numbers or confusion.",
  },
  {
    question: "What happens when a vendor submits an invoice?",
    answer: "The invoice is matched to the PO. Remaining PO balance is calculated. If retention applies, Zerotone deducts it. Payment status moves through approval workflow.",
  },
  {
    question: "Can my subcontractors see POs issued to them?",
    answer: "Yes, via the subcontractor portal. They see their outstanding POs and invoice status. No need to email, print, or retype information.",
  },
  {
    question: "How does the approval workflow work?",
    answer: "Set thresholds: POs under $5K auto approve, $5K–$25K need PM sign off, over $25K need CFO approval. Zerotone routes based on amount and role.",
  },
];

export default function PurchasingPage() {
  return (
    <>
      <ModuleHero
        badge="PURCHASING MODULE"
        title={
          <>
            Control procurement. Lock in costs. <span className="text-primary-800">Manage vendors.</span>
          </>
        }
        description="Issue POs that commit budget. Track amendments. Link invoices. Real time spend visibility from bid to payment."
        visual={<PurchasingHeroVisual />}
      />
      <PurchasingProblemSolution />
      <ModuleFeaturesGrid
        headline="Budget and actual in sync. Every PO, every time."
        description="Stop issuing commitments in a vacuum. Connect procurement to the budget."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Stop budget drift before it starts."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={PURCHASING_FAQS} />
      <ModuleCTA
        headline="Budget and actual in sync. Every PO, every time."
        description="20 minute demo. We'll show how POs integrate with budget and vendor management."
      />
    </>
  );
}
