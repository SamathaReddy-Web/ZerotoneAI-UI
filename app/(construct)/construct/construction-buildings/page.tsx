import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { BuildingsProblemSolution } from "@/components/sections/buildings/BuildingsProblemSolution";
import { BuildingsHeroVisual } from "@/components/sections/buildings/BuildingsHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Building2, Calculator, Link2, FileSpreadsheet, Network, Repeat } from "lucide-react";

export const metadata = {
  title: "Building Management Software | Zerotone Construct",
  description: "Centralize building data with a master registry. Store levels, floor areas, attachments, and project structure in one place.",
};

const FEATURES = [
  {
    title: "Simple & stacked buildings",
    description: "Single uniform buildings or complex multi-unit projects with variable floor plates. Define each level's area, ceiling height, and attached drawings.",
    icon: <Building2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Real time GFA totals",
    description: "Track total buildings, levels, and gross floor area. See averages, ranges, and area breakdowns updated as you edit: no manual math.",
    icon: <Calculator className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Attach plans & drawings",
    description: "Store reference PDFs, floor plans, sections, and site plans directly on each building. One source of truth: no scattered shared drives.",
    icon: <Link2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Bulk import from Excel",
    description: "Set up a whole project from a spreadsheet in minutes. Import building names, levels, areas, and volume data: done in one step.",
    icon: <FileSpreadsheet className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Instant bulk operations",
    description: "Edit multiple levels at once, apply changes across buildings, delete whole buildings with one action. No tedious line by line edits.",
    icon: <Repeat className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Feeds estimate & cost codes",
    description: "Building structure autopopulates estimate line items and cost code assignments. Change the building, proposal updates downstream.",
    icon: <Network className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "15 min",
    label: "average setup",
    description: "Import buildings and levels from Excel. No manual data entry, no spreadsheet migration delays.",
  },
  {
    value: "100%",
    label: "data accuracy",
    description: "Single source of truth. Changes to building structure automatically cascade through estimate and budgets.",
  },
  {
    value: "0 lost",
    label: "floor plans",
    description: "All drawings stored directly on the building registry. Supers, architects, and estimators access the same plans.",
  },
];

const BUILDINGS_FAQS = [
  {
    question: "What is a building registry?",
    answer: "A building registry is a master list of all buildings on your project, with each building's levels and floor areas. It's the foundation for cost estimation, project scheduling, and change management. Every estimate line, budget line, and change order ties back to building structure.",
  },
  {
    question: "Can I store PDFs and drawings on buildings?",
    answer: "Yes. Each building can have multiple attachments: floor plans, sections, architectural details, MEP drawings, site plans. Everyone accessing that building sees the current versions. No more hunting through shared drives.",
  },
  {
    question: "How does building structure feed into estimates?",
    answer: "You define buildings and levels once. Then when you create a cost code estimate, Zerotone offers to autogenerate line items for each combination of building, level, and cost code. One click generates your whole line item structure.",
  },
  {
    question: "Can I edit buildings after I start the estimate?",
    answer: "Yes. If you add a building or level later, existing estimates don't break, but new estimates can include the new structure. You can also add buildings to an estimate manually at any time.",
  },
  {
    question: "Can I import from Excel?",
    answer: "Yes. Prepare a spreadsheet with building name, number of levels, level names, and GFA. Zerotone imports it in one step: no line by line data entry.",
  },
  {
    question: "What if my buildings have different floor areas per level?",
    answer: "Switch to 'stacked' mode: define each level separately with its own area, ceiling height, occupancy, and attachments. Stacked buildings show totals and averages automatically.",
  },
];

export default function BuildingsPage() {
  return (
    <>
      <ModuleHero
        badge="BUILDING REGISTRY"
        title={
          <>
            One building registry. <span className="text-primary-800">Zero spreadsheet chaos.</span>
          </>
        }
        description="Store your complete project structure (buildings, levels, floor areas, and drawings) in one living document. Autofeeds estimate and cost tracking downstream."
        visual={<BuildingsHeroVisual />}
      />
      <BuildingsProblemSolution />
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
        quote='"Zerotone Construct is a young product running on live construction projects today. We don&apos;t publish quotes we can&apos;t attribute, ask us on a call and we&apos;ll walk you through the real system on a real project instead."'
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={BUILDINGS_FAQS} />
      <ModuleCTA
        headline="Let estimators focus on pricing, not data entry."
        description="Book a 15 minute demo. We'll show how a building registry feeds your entire cost workflow."
      />
    </>
  );
}
