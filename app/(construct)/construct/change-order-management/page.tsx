import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { PlusCircle, Percent, FileDown, Presentation, RefreshCw, FileSignature } from "lucide-react";

export const metadata = {
  title: "Change Order Software | Zerotone Construct",
  description: "Track out-of-scope work, bundle owner change orders, and protect your project margin.",
};

const FEATURES = [
  {
    title: "Potential change orders",
    description: "Log PCOs directly from the field the moment out-of-scope work is requested by the owner or architect.",
    icon: <PlusCircle className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Markup configuration",
    description: "Automatically apply pre-negotiated markup, overhead, and fee percentages to all changes.",
    icon: <Percent className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Subcontractor CORs",
    description: "Subs submit their change order requests directly into the system for PM review and approval.",
    icon: <FileDown className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Owner presentation",
    description: "Bundle multiple PCOs into a clean, professional Owner Change Order (OCO) document.",
    icon: <Presentation className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Budget integration",
    description: "Approved changes automatically update the working budget and the schedule of values.",
    icon: <RefreshCw className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "eSignature",
    description: "Route formal change orders for digital signature from the owner and architect instantly.",
    icon: <FileSignature className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "0",
    label: "lost revenue",
    description: "Never forget to bill for out-of-scope work requested in the field again.",
  },
  {
    value: "Fast",
    label: "approvals",
    description: "Clean, standardized documentation gets owner change orders approved faster.",
  },
  {
    value: "100%",
    label: "budget accuracy",
    description: "Your working budget reflects the true current scope of work, not just the original contract.",
  },
];

export default function ChangeOrderPage() {
  return (
    <>
      <ModuleHero
        badge="CHANGE ORDERS"
        title={
          <>
            Bill for the work <span className="text-primary-800">you actually do.</span>
          </>
        }
        description="Stop bleeding margin on unbilled changes. Track every PCO from the field, apply standard markups, and get owner sign-off without the friction."
      />
      <ModuleFeaturesGrid
        headline="Protect your project margin."
        description="A streamlined workflow for managing scope changes."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Capture every dollar."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"We used to bleed margin on unbilled changes. Now the field creates a PCO from their phone, and it tracks all the way to the owner"s bill without slipping through the cracks."'
        authorName="VP of Construction"
        authorTitle="Commercial General Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Stop doing free work."
        description="Book a demo to see how we track PCOs and automate change order creation."
      />
    </>
  );
}

