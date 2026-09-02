import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { BillsProblemSolution } from "@/components/sections/bills/BillsProblemSolution";
import { BillsHeroVisual } from "@/components/sections/bills/BillsHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { ScanLine, FileCheck2, Wallet, Clock, BarChart3, Briefcase } from "lucide-react";

export const metadata = {
  title: "Construction Billing Software | Zerotone Construct",
  description: "Process vendor invoices fast. Track retention, lien waivers, and payment status. OCR invoice import. Real time AP aging.",
};

const FEATURES = [
  {
    title: "Bill against any PO",
    description: "Create bills tied to purchase orders. Or submit cash bills for vendors without POs. Track amount billed, retained, and paid.",
    icon: <FileCheck2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "OCR invoice import",
    description: "Snap a photo of a PDF invoice or scan it. Zerotone extracts vendor, date, amount, and line items automatically. No manual typing.",
    icon: <ScanLine className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Retention & lien waivers",
    description: "Set retention percentage per vendor. Capture lien waivers as they come in. Dashboard shows retention due by vendor.",
    icon: <Wallet className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Payment status workflow",
    description: "Bills move through statuses: Submitted → Reviewed → Approved → Paid. See aging invoices and payment due dates at a glance.",
    icon: <Clock className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Real time AP aging",
    description: "Dashboard shows invoices aged 0–30, 30–60, 60–90, 90+ days. Drill down by vendor or date range. Export for accounting review.",
    icon: <BarChart3 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Feeds budget & cashflow",
    description: "Bills lock in committed costs. Cashflow reports show what's billed, retained, and paid. Budget variances updated in real time.",
    icon: <Briefcase className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "80%",
    label: "faster processing",
    description: "OCR extracts vendor and amount instantly. No manual data entry. Bills ready for approval in seconds.",
  },
  {
    value: "0",
    label: "lost lien waivers",
    description: "Capture lien waiver status on submission. Dashboard tracks all outstanding waivers by vendor and date.",
  },
  {
    value: "100%",
    label: "retention visibility",
    description: "Always know how much retention is due to each vendor. Payment planning is precise. No surprised retainage disputes.",
  },
];

const BILLS_FAQS = [
  {
    question: "What is a bill in construction?",
    answer: "A bill is an invoice from a vendor or subcontractor. It documents work completed, materials delivered, or services rendered. Bills are submitted against purchase orders, and amounts are tracked against budget. Retainage (hold back) is often applied per contract terms.",
  },
  {
    question: "Can I create bills without a PO?",
    answer: "Yes. Cash bills allow you to enter vendor invoices for expenses without a preexisting PO: useful for emergency repairs, small purchases, or soft costs.",
  },
  {
    question: "How does OCR invoice import work?",
    answer: "Take a photo of an invoice or upload a PDF. Zerotone extracts vendor name, invoice number, date, amount, and line items. Review the extracted data and submit. Saves 10 minutes per invoice.",
  },
  {
    question: "How is retention handled?",
    answer: "You set a retention percentage per vendor (e.g., 5%). When a bill for $10,000 is submitted, Zerotone automatically calculates $500 retained. Dashboard shows retention due by vendor and aging.",
  },
  {
    question: "What is a lien waiver?",
    answer: "A lien waiver is a legal document signed by a vendor or sub stating they waive the right to file a lien against the project. It's typically signed on partial and final invoice payment. Zerotone tracks lien waiver status and due date.",
  },
  {
    question: "How do bills affect my budget?",
    answer: "Approved bills lock in committed costs. Your budget variance report shows budget vs. actual. Cashflow reports show what's billed, when it's due, and how much is retained.",
  },
];

export default function BillsPage() {
  return (
    <>
      <ModuleHero
        badge="BILLS MODULE"
        title={
          <>
            Process invoices fast. Control retainage. <span className="text-primary-800">Manage cash.</span>
          </>
        }
        description="Submit bills tied to POs. Capture lien waivers. Track retention and payment status. Cashflow stays clear."
        visual={<BillsHeroVisual />}
      />
      <BillsProblemSolution />
      <ModuleFeaturesGrid
        headline="No more data entry. No more retention math."
        description="Automate the busywork out of accounts payable."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Clear invoices faster. Pay smarter."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={BILLS_FAQS} />
      <ModuleCTA
        headline="Clear invoices faster. Pay smarter."
        description="20 minute demo. See how OCR and retention tracking work together."
      />
    </>
  );
}
