import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { FileSpreadsheet, Database, Settings2, ArrowRightLeft, History, Users } from "lucide-react";

export const metadata = {
  title: "Estimating Software | Zerotone Construct",
  description: "AI-assisted takeoffs, historical cost tracking, and collaborative estimating for modern builders.",
};

const FEATURES = [
  {
    title: "Accurate takeoffs",
    description: "Extract quantities from 2D and 3D drawings with AI-assisted takeoff tools.",
    icon: <FileSpreadsheet className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Cost database",
    description: "Maintain your master cost database with real-time material pricing updates.",
    icon: <Database className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "What-if scenarios",
    description: "Run multiple scenarios to evaluate design alternatives and value engineering options.",
    icon: <Settings2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Bid leveling integration",
    description: "Push your final estimate directly into the budget and bidding workflows without rekeying.",
    icon: <ArrowRightLeft className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Historical cost tracking",
    description: "Leverage past project data to inform conceptual estimates with real historical numbers.",
    icon: <History className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Collaborative estimating",
    description: "Multiple estimators working in the same estimate concurrently. Lock rows and track changes.",
    icon: <Users className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "50%",
    label: "faster takeoffs",
    description: "AI-assisted tools cut manual takeoff time in half compared to traditional screen measuring.",
  },
  {
    value: "100%",
    label: "cost visibility",
    description: "No hidden costs or missed scope items when every CSI division is mapped and tracked.",
  },
  {
    value: "0",
    label: "re-entry",
    description: "Seamless handoff to project management. One click from approved estimate to working budget.",
  },
];

export default function EstimatingSoftwarePage() {
  return (
    <>
      <ModuleHero
        badge="ESTIMATE"
        title={
          <>
            Stop counting. Start <span className="text-primary-800">analyzing.</span>
          </>
        }
        description="Fast, accurate takeoffs linked directly to your historical cost database. The foundation of a profitable project starts here."
      />
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
        quote='"The ability to push our estimate directly to the budget without rekeying data is a massive time saver. We finally trust our conceptual numbers because they are backed by real historicals."'
        authorName="Preconstruction Director"
        authorTitle="Regional Commercial Builder"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Build your next estimate with Zerotone."
        description="Book a demo to see how we handle takeoffs, cost databases, and value engineering."
      />
    </>
  );
}

