import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { List, GitMerge, Waypoints, Flame, Smartphone, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Cost Codes Software | Zerotone Construct",
  description: "Standardize your cost codes, track burn rates in real-time, and catch budget overruns early.",
};

const FEATURES = [
  {
    title: "Standardized lists",
    description: "Import CSI MasterFormat natively or easily map your own custom company cost code structures.",
    icon: <List className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Hierarchical tracking",
    description: "Track costs by division, phase, and granular cost code levels for maximum financial control.",
    icon: <GitMerge className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Budget mapping",
    description: "Map estimate items directly to cost codes for seamless, automatic working budget creation.",
    icon: <Waypoints className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Real-time burn rates",
    description: "Monitor budget vs actuals at the cost code level instantly. Catch overruns before they escalate.",
    icon: <Flame className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Timecard integration",
    description: "Field teams tag hours to specific cost codes directly from their phones for accurate labor tracking.",
    icon: <Smartphone className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Cross-project reporting",
    description: "Compare the financial performance of the same cost code across multiple projects and teams.",
    icon: <BarChart3 className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "standardization",
    description: "Eliminate rogue cost codes and standardize financial reporting company-wide.",
  },
  {
    value: "0 lag",
    label: "in field data",
    description: "Labor hours hit the cost code budget the moment the timecard is submitted by the foreman.",
  },
  {
    value: "Granular",
    label: "cost control",
    description: "Catch budget overruns at the phase level before they impact the bottom line of the project.",
  },
];

export default function CostCodesPage() {
  return (
    <>
      <ModuleHero
        badge="COST CODES"
        title={
          <>
            Know exactly where your <span className="text-primary-800">money goes.</span>
          </>
        }
        description="Standardized cost tracking from the estimate to the field. Monitor burn rates in real-time and stop guessing about profitability."
      />
      <ModuleFeaturesGrid
        headline="Granular control. Zero surprises."
        description="Connect your field labor directly to your budget phases."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Financial clarity at every level."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Before Zerotone, we couldn"t tell if we were losing money on concrete or framing until the job was over. Now we see the burn rate daily by cost code and can pivot immediately."'
        authorName="Chief Financial Officer"
        authorTitle="Specialty Concrete Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Standardize your cost tracking."
        description="Book a demo to see how easy it is to import your CSI MasterFormat and track live burn rates."
      />
    </>
  );
}

