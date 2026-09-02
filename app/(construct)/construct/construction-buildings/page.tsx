import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Map, Building2, Link2, Wrench, PieChart, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Buildings Portfolio | Zerotone Construct",
  description: "Track your entire portfolio of buildings with real-time status overlays and document linking.",
};

const FEATURES = [
  {
    title: "Portfolio mapping",
    description: "See your entire portfolio on an interactive map with real-time status overlays and health indicators.",
    icon: <Map className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Building profiles",
    description: "Track key data for every building: square footage, floors, usage type, and operational status.",
    icon: <Building2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Document linking",
    description: "Attach AS-BUILT drawings, specs, and warranties directly to the physical building profile for easy access.",
    icon: <Link2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Maintenance history",
    description: "Log maintenance history, work orders, and upcoming service requirements in one centralized log.",
    icon: <Wrench className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Space utilization",
    description: "Monitor occupancy rates, floor plans, and lease expirations for commercial and residential portfolios.",
    icon: <PieChart className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Capital planning",
    description: "Forecast capital expenditures based on building age, condition assessments, and historical maintenance cost.",
    icon: <TrendingUp className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "360°",
    label: "portfolio visibility",
    description: "Every physical asset you manage, visible and searchable from one unified dashboard.",
  },
  {
    value: "100%",
    label: "document retention",
    description: "Never lose an as-built drawing, O&M manual, or equipment warranty again.",
  },
  {
    value: "1 click",
    label: "portfolio reporting",
    description: "Generate portfolio-wide status reports for owners and stakeholders instantly.",
  },
];

export default function BuildingsPage() {
  return (
    <>
      <ModuleHero
        badge="BUILDINGS"
        title={
          <>
            Your entire portfolio, <span className="text-primary-800">mapped and tracked.</span>
          </>
        }
        description="Stop managing physical assets in spreadsheets. Visualize your properties, link critical documents, and plan capital expenditures from one command center."
      />
      <ModuleFeaturesGrid
        headline="Complete control over physical assets."
        description="From as-builts to occupancy, everything tied to the building."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Manage assets, not spreadsheets."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Managing 50+ commercial properties used to mean 50+ disconnected spreadsheets. Now we click a pin on the map and have the entire history of the building in seconds."'
        authorName="Portfolio Manager"
        authorTitle="National Real Estate Developer"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="See your portfolio in Zerotone."
        description="Book a demo to see how we map, track, and manage physical building assets."
      />
    </>
  );
}

