import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { FileText, Lock, Package, Send, PenTool, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Schedule of Values Software | Zerotone Construct",
  description: "Automate AIA pay applications, track retainage, and streamline subcontractor billing.",
};

const FEATURES = [
  {
    title: "AIA generation",
    description: "Generate standard G702 and G703 pay applications automatically based on approved percent complete.",
    icon: <FileText className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Retainage tracking",
    description: "Track standard and variable retainage across the entire project lifecycle with pinpoint accuracy.",
    icon: <Lock className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Stored materials",
    description: "Track materials stored on and off-site for accurate billing, supported by required photo documentation.",
    icon: <Package className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Subcontractor pay apps",
    description: "Subs submit their monthly pay apps directly against their specific Schedule of Values line items.",
    icon: <Send className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Architect approval",
    description: "Route the pencil copy to the architect for digital review and markup before formal submission.",
    icon: <PenTool className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Lien waiver integration",
    description: "Tie payment release directly to the collection of conditional and unconditional lien waivers.",
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "1 click",
    label: "pay app generation",
    description: "Generate perfect AIA-style documents instantly, without fighting Excel formatting.",
  },
  {
    value: "Fast",
    label: "payment cycles",
    description: "Clean, error-free billing gets approved significantly faster by the owner and architect.",
  },
  {
    value: "100%",
    label: "retainage accuracy",
    description: "Never lose track of variable retainage rules across dozens of different subcontractors.",
  },
];

export default function SOVPage() {
  return (
    <>
      <ModuleHero
        badge="SCHEDULE OF VALUES"
        title={
          <>
            Get the <span className="text-primary-800">pay app right.</span> First time.
          </>
        }
        description="Stop fighting with Excel spreadsheets every month. Generate perfect AIA-style pay applications, manage retainage, and get paid faster."
      />
      <ModuleFeaturesGrid
        headline="Billing built for construction."
        description="Streamline the entire monthly draw process."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Accelerate your cash flow."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Generating the monthly pay app used to be a three-day argument with the architect. Now we review a pencil copy online, make adjustments, and generate the final G702 in one click."'
        authorName="Project Accountant"
        authorTitle="Regional General Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Modernize your monthly billing."
        description="Book a demo to see how we automate G702 and G703 generation."
      />
    </>
  );
}

