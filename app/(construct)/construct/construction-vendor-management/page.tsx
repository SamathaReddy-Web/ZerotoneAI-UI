import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { VendorProblemSolution } from "@/components/sections/vendor/VendorProblemSolution";
import { VendorHeroVisual } from "@/components/sections/vendor/VendorHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Factory, ShieldAlert, CreditCard, LockOpen, LineChart, Link } from "lucide-react";

export const metadata = {
  title: "Construction Vendor Management Software | Zerotone Construct",
  description: "Centralized vendor registry with compliance docs, payment setup, and portal access. Lien waiver tracking. Performance snapshot.",
};

const FEATURES = [
  {
    title: "Vendor registry & directory",
    description: "Master list of all vendors. Contact info, addresses, licenses, insurance. Searchable. Required for all POs.",
    icon: <Factory className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Compliance documentation",
    description: "Store insurance certificates, licenses, 1099 forms, and safety certs. Track expiration dates. Auto alerts when docs expire.",
    icon: <ShieldAlert className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Payment setup & 1099 tracking",
    description: "ACH bank details, payment terms, tax ID, and 1099 status. Accounting uses this for AP processing and year end reporting.",
    icon: <CreditCard className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Vendor portal access",
    description: "Subs log in to view their POs, submit invoices, attach lien waivers. No email handoffs. Real time communication.",
    icon: <LockOpen className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Performance snapshot",
    description: "Vendor metrics: total contract value, outstanding invoices, lien waiver status, on time payment rate, quality rating.",
    icon: <LineChart className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Linked to every transaction",
    description: "Every PO, bill, CO, and submittal references the vendor. Change vendor info once, it updates everywhere.",
    icon: <Link className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "vendor compliance visibility",
    description: "Insurance, licenses, 1099 docs: all stored, expiration dates tracked, auto alerts before they expire.",
  },
  {
    value: "5 min",
    label: "vendor data entry",
    description: "Add vendor name, contact, address. Invite to portal. Done. They complete their profile.",
  },
  {
    value: "0",
    label: "missing lien waivers",
    description: "Portal tracks status. Final payment holds until waiver is received. Finance can see what's outstanding by vendor.",
  },
];

const VENDOR_FAQS = [
  {
    question: "What is a vendor registry?",
    answer: "A master list of all vendors, subs, and suppliers you work with. Stores contact info, licenses, insurance, payment details, and performance history. Required before issuing a PO.",
  },
  {
    question: "What compliance docs do I need to track?",
    answer: "Insurance (general liability, workers comp), licenses (contractor, specialty), 1099 tax forms, safety certifications (OSHA, etc.), and bonding. Zerotone stores them and alerts when they expire.",
  },
  {
    question: "Can vendors access their POs and invoices?",
    answer: "Yes. Vendors have portal access. They see their POs, submit invoices, attach lien waivers, and check payment status. No need to email back and forth.",
  },
  {
    question: "How is payment setup handled?",
    answer: "Store vendor ACH bank details, payment terms (Net 30, Net 60), and tax ID. Accounting uses this for automated payments and 1099 reporting at year end.",
  },
  {
    question: "What is a performance snapshot?",
    answer: "Metrics on each vendor: total contract value, work history, invoice counts, lien waiver compliance, on time payment rate, and quality ratings. Helps evaluate future bid packages.",
  },
  {
    question: "How is lien waiver status tracked?",
    answer: "Vendors submit lien waivers through the portal with their final invoice. Zerotone tracks status. Finance sees outstanding waivers and can hold final payment until received.",
  },
];

export default function VendorManagementPage() {
  return (
    <>
      <ModuleHero
        badge="VENDOR MANAGEMENT"
        title={
          <>
            One vendor registry. Compliance docs. <span className="text-primary-800">Performance tracking.</span>
          </>
        }
        description="Centralize vendor info, compliance docs, and payment setup. Give subs portal access. Track performance and lien waiver status."
        visual={<VendorHeroVisual />}
      />
      <VendorProblemSolution />
      <ModuleFeaturesGrid
        headline="Stop chasing expired insurance certificates."
        description="A unified vendor registry with portal access and automated compliance tracking."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Protect your margins. Verify compliance."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Insurance expiration dates are tracked. Lien waivers are collected through the portal. Vendor data is current. No more hunting for documents or surprised by expired certs."
        authorName="Karen B."
        authorTitle="VP Procurement · Quality Builders, AZ"
      />
      <RestOfZerotone />
      <FAQSection items={VENDOR_FAQS} />
      <ModuleCTA
        headline="One vendor registry. Compliance locked in. Transparency throughout."
        description="15 minute demo. See the vendor directory and portal in action."
      />
    </>
  );
}
