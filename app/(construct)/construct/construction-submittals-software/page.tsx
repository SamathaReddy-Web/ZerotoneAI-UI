import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { FileSearch, GitCommit, PenTool, UploadCloud, Truck, History } from "lucide-react";

export const metadata = {
  title: "Submittals Software | Zerotone Construct",
  description: "Automate submittal register creation with AI. Track approvals, markups, and lead times in one place.",
};

const FEATURES = [
  {
    title: "AI spec extraction",
    description: "Automatically extract the entire submittal register from the spec book using intelligent document parsing.",
    icon: <FileSearch className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Approval workflows",
    description: "Route submittals through custom approval chains (Sub -> GC -> Architect -> Engineer) automatically.",
    icon: <GitCommit className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Browser markup tools",
    description: "Review, stamp, and markup submittals directly in your browser. No third-party PDF software required.",
    icon: <PenTool className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Subcontractor portal",
    description: "Subs upload their submittals directly into the system. Automated reminders chase down missing items.",
    icon: <UploadCloud className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Procurement tracking",
    description: "Track fabrication lead times and delivery dates directly on the submittal to ensure materials arrive on time.",
    icon: <Truck className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Revision control",
    description: "Maintain a clear, auditable history of every revision, rejection, and final approval.",
    icon: <History className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "90%",
    label: "faster log creation",
    description: "AI extracts your submittal register from a 1,000 page spec book in minutes, not days.",
  },
  {
    value: "100%",
    label: "version control",
    description: "Ensure the field superintendent is always building off the currently approved submittal.",
  },
  {
    value: "Zero",
    label: "material delays",
    description: "Track lead times and delivery dates directly on the submittal item to prevent schedule slips.",
  },
];

export default function SubmittalsPage() {
  return (
    <>
      <ModuleHero
        badge="SUBMITTALS"
        title={
          <>
            From spec book to approved, <span className="text-primary-800">faster.</span>
          </>
        }
        description="Stop manually typing out submittal registers. Let AI extract the requirements, automate the workflow, and track procurement to keep the job on schedule."
      />
      <ModuleFeaturesGrid
        headline="Complete control over what gets built."
        description="A streamlined process for getting the right materials approved."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Accelerate the approval cycle."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Building the submittal register used to take a project engineer a full week. Now they upload the specs to Zerotone and have a complete log to review in 10 minutes."'
        authorName="Project Executive"
        authorTitle="ENR Top 100 General Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Automate your submittal register."
        description="Book a demo to see how our AI extracts submittals from your spec book in seconds."
      />
    </>
  );
}

