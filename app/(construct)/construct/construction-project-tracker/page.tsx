import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { LayoutDashboard, FileText, ShieldAlert, Flag, Users, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Project Tracker Software | Zerotone Construct",
  description: "See the health of every active construction project in a single, high-level portfolio view.",
};

const FEATURES = [
  {
    title: "Portfolio dashboard",
    description: "See the health of every active project in a single, high-level view. Stop chasing down PMs for updates.",
    icon: <LayoutDashboard className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Executive summaries",
    description: "Auto-generated weekly project summaries tailored specifically for executives, owners, and stakeholders.",
    icon: <FileText className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Risk indicators",
    description: "Clear Red/Yellow/Green health indicators for schedule, budget, safety, and client satisfaction.",
    icon: <ShieldAlert className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Milestone tracking",
    description: "Track major project milestones (Notice to Proceed, Dry In, Substantial Completion) across the entire portfolio.",
    icon: <Flag className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Resource heatmaps",
    description: "See exactly where your Project Managers and Superintendents are deployed and when they free up.",
    icon: <Users className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Financial rollup",
    description: "Roll up project-level financials into a company-wide revenue and profitability forecast automatically.",
    icon: <TrendingUp className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "360°",
    label: "portfolio visibility",
    description: "Stop calling PMs to ask how their job is going. See the truth live on the dashboard.",
  },
  {
    value: "1 click",
    label: "executive reports",
    description: "Generate portfolio-wide health reports instantly for your Monday morning executive meetings.",
  },
  {
    value: "Early",
    label: "risk detection",
    description: "Identify failing projects and budget slip before they impact the company bottom line.",
  },
];

export default function ProjectTrackerPage() {
  return (
    <>
      <ModuleHero
        badge="PROJECT TRACKER"
        title={
          <>
            See the big picture. <span className="text-primary-800">Spot the risks.</span>
          </>
        }
        description="A command center for construction executives. Track the health, schedule, and financials of every active project in your portfolio from a single dashboard."
      />
      <ModuleFeaturesGrid
        headline="Executive visibility, automated."
        description="Everything a VP needs to know, nothing they don't."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Manage by exception."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"As a VP, I need to know the health of 30 projects at once. I open the tracker every morning, look for the red indicators, and know exactly who I need to call. It changed my life."'
        authorName="VP of Operations"
        authorTitle="Top 50 General Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Get out of the weeds."
        description="Book a demo to see the executive portfolio dashboard in action."
      />
    </>
  );
}

