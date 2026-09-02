import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { PackageOpen, Smartphone, Truck, Wallet, ClipboardCheck, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Purchasing Software | Zerotone Construct",
  description: "Manage material catalogs, route requisitions, and automate three-way invoice matching.",
};

const FEATURES = [
  {
    title: "Material catalogs",
    description: "Build a standard company material catalog with pre-negotiated vendor pricing for the field to order from.",
    icon: <PackageOpen className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Requisition workflow",
    description: "Field teams submit material requests directly from the app, routed to PMs for fast approval.",
    icon: <Smartphone className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Vendor portal",
    description: "Vendors receive official POs and submit their invoices through a secure, free portal.",
    icon: <Truck className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Committed cost tracking",
    description: "Approved POs instantly hit the project budget as committed costs, preventing accidental overspending.",
    icon: <Wallet className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Receiving logs",
    description: "Document exactly what arrived on site against the original PO, including photos of damaged goods.",
    icon: <ClipboardCheck className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Three-way matching",
    description: "Automatically match the PO, the field receiving log, and the vendor invoice before cutting a check.",
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "spend visibility",
    description: "Eliminate rogue purchasing from the field and enforce standard vendor pricing.",
  },
  {
    value: "3-way",
    label: "invoice matching",
    description: "Never pay a vendor invoice for materials that never actually arrived on site.",
  },
  {
    value: "Live",
    label: "committed costs",
    description: "See the financial impact on the budget the moment a Purchase Order is issued.",
  },
];

export default function PurchasingPage() {
  return (
    <>
      <ModuleHero
        badge="PURCHASING"
        title={
          <>
            Control field spending. <span className="text-primary-800">Automate approvals.</span>
          </>
        }
        description="Streamline material procurement from the field to the back office. Automate approvals, track receipts, and never overpay a vendor again."
      />
      <ModuleFeaturesGrid
        headline="Procurement built for construction."
        description="Connect the foreman's needs with the PM's budget."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Stop rogue spending."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"We used to have foremen buying materials on company cards with zero tracking. Now every purchase goes through a quick approval workflow and hits the budget instantly."'
        authorName="Operations Manager"
        authorTitle="Specialty Electrical Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Take control of your procurement."
        description="Book a demo to see how we handle field requisitions and 3-way invoice matching."
      />
    </>
  );
}

