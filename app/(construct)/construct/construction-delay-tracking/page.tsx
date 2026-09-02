import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { CloudRain, Calculator, FolderSearch, Bell, CalendarPlus, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Delay Tracking Software | Zerotone Construct",
  description: "Log weather events, calculate schedule impact, and generate formal delay notices automatically.",
};

const FEATURES = [
  {
    title: "Weather delays",
    description: "Automatically log severe weather events that impact the critical path directly into the delay log.",
    icon: <CloudRain className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Impact analysis",
    description: "Calculate the exact financial cost and schedule impact of a delay event across multiple trades.",
    icon: <Calculator className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Evidence gathering",
    description: "Link photos, daily logs, and related RFIs directly to the delay claim for bulletproof substantiation.",
    icon: <FolderSearch className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Owner notifications",
    description: "Generate formal, contractually compliant delay notices for the owner with a single click.",
    icon: <Bell className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Schedule integration",
    description: "Push approved time extensions directly to the master project schedule automatically.",
    icon: <CalendarPlus className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Mitigation tracking",
    description: "Document the steps your team took to mitigate the delay, protecting you during dispute resolution.",
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "claim substantiation",
    description: "Never lose a valid time extension or delay claim because you lacked the proper documentation.",
  },
  {
    value: "Live",
    label: "schedule impact",
    description: "Know exactly how many days you are behind, right now, before the end-of-month report.",
  },
  {
    value: "Automated",
    label: "contract notices",
    description: "Never miss a strict contractual notice period for a delay event again.",
  },
];

export default function DelayTrackingPage() {
  return (
    <>
      <ModuleHero
        badge="DELAYS"
        title={
          <>
            Document the delay. Protect your <span className="text-primary-800">fee.</span>
          </>
        }
        description="When things go wrong, documentation is everything. Auto-log weather, link evidence, and generate formal notices before the contractual deadline expires."
      />
      <ModuleFeaturesGrid
        headline="Bulletproof your delay claims."
        description="Everything you need to prove impact and get your time extension."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Get paid for the time you deserve."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"When a rain week hit, we used to scramble to prove we couldn"t work. Now the system auto-logs the weather, ties it to the daily report, and generates the notice for the owner automatically."'
        authorName="Senior Project Manager"
        authorTitle="Heavy Civil Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Stop eating delay costs."
        description="Book a demo to see how we automate delay tracking and owner notifications."
      />
    </>
  );
}

