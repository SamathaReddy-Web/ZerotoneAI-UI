import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Book, Building, Building2, FileBarChart, Users, History } from "lucide-react";

export const metadata = {
  title: "Accounting & GL Software | Zerotone Construct",
  description: "A complete, construction-specific General Ledger with native job costing and WIP reporting.",
};

const FEATURES = [
  {
    title: "General Ledger",
    description: "A complete, construction-specific general ledger with job costing natively built in.",
    icon: <Book className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Multi-company",
    description: "Manage multiple entities, joint ventures, and complex intercompany transactions seamlessly.",
    icon: <Building className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Automated bank feeds",
    description: "Connect your bank accounts securely for automated daily transaction reconciliations.",
    icon: <Building2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "WIP reporting",
    description: "Generate highly accurate Work in Progress (WIP) reports for bonding companies with one click.",
    icon: <FileBarChart className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Payroll integration",
    description: "Sync with major payroll providers to automatically allocate labor burden back to the job cost.",
    icon: <Users className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Audit trail",
    description: "Every single transaction is logged with an immutable audit trail, showing exactly who did what.",
    icon: <History className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "1 system",
    label: "for ops and finance",
    description: "Eliminate the painful disconnect between the field and the back office.",
  },
  {
    value: "Real-time",
    label: "financials",
    description: "Close the month in days, not weeks, with automated reconciliations.",
  },
  {
    value: "100%",
    label: "audit ready",
    description: "Immutable transaction logs and linked documentation make audits painless.",
  },
];

export default function AccountingPage() {
  return (
    <>
      <ModuleHero
        badge="ACCOUNTING & GL"
        title={
          <>
            Construction accounting, <span className="text-primary-800">built for modern builders.</span>
          </>
        }
        description="A true construction ERP. Unify your project management and financial accounting in a single platform designed specifically for the complexities of job costing."
      />
      <ModuleFeaturesGrid
        headline="Financial control at the enterprise level."
        description="Powerful accounting tools that understand construction."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Close the books faster."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Moving to a construction-specific ERP changed our business. We finally have a General Ledger that understands job costing natively, instead of relying on fragile Excel integrations."'
        authorName="Chief Financial Officer"
        authorTitle="National General Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Unify ops and accounting."
        description="Book a demo to see our construction-specific General Ledger and WIP reporting."
      />
    </>
  );
}

