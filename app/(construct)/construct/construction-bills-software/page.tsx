import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { ScanLine, GitBranch, AlertCircle, CalendarRange, FileWarning, CreditCard } from "lucide-react";

export const metadata = {
  title: "AP & Bills Software | Zerotone Construct",
  description: "Automate invoice OCR, routing, and lien waiver tracking for construction AP teams.",
};

const FEATURES = [
  {
    title: "Invoice OCR",
    description: "AI extracts invoice data instantly from PDFs and emails, eliminating manual data entry.",
    icon: <ScanLine className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Automated routing",
    description: "Route invoices to the correct Project Manager based on project, vendor, or cost code.",
    icon: <GitBranch className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Budget validation",
    description: "Automatically flag invoices that exceed the original PO or the remaining budget line item.",
    icon: <AlertCircle className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Payment scheduling",
    description: "Schedule payments intelligently based on vendor terms, discount dates, and cash flow.",
    icon: <CalendarRange className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Lien waiver tracking",
    description: "Block payments automatically until the vendor uploads their signed conditional/unconditional lien waiver.",
    icon: <FileWarning className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Direct payments",
    description: "Pay vendors via ACH or virtual card directly from the platform. No more printing checks.",
    icon: <CreditCard className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "0",
    label: "manual entry",
    description: "Advanced OCR technology eliminates the need to manually key invoice data into the ERP.",
  },
  {
    value: "100%",
    label: "lien compliance",
    description: "Never release a check without the signed lien waiver in hand. The system blocks it.",
  },
  {
    value: "Fast",
    label: "approvals",
    description: "Cut invoice approval time from weeks to days with mobile PM approvals.",
  },
];

export default function BillsPage() {
  return (
    <>
      <ModuleHero
        badge="AP & BILLS"
        title={
          <>
            Process invoices <span className="text-primary-800">without the paperwork.</span>
          </>
        }
        description="Transform your AP department. Let AI read the invoices, automate the approval routing, and hold payments until lien waivers are signed."
      />
      <ModuleFeaturesGrid
        headline="Accounts payable on autopilot."
        description="Built to handle the complexity of construction billing."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Scale your accounting team."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Processing 500 invoices a month used to require two full-time clerks. Now AI reads the invoices, the PM approves them on their phone, and we pay them with a click."'
        authorName="Controller"
        authorTitle="Regional Commercial Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Modernize your Accounts Payable."
        description="Book a demo to see our AI invoice extraction and lien waiver tracking."
      />
    </>
  );
}

