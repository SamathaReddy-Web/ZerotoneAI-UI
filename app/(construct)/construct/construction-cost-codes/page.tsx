import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { CostCodesProblemSolution } from "@/components/sections/cost-codes/CostCodesProblemSolution";
import { CostCodesHeroVisual } from "@/components/sections/cost-codes/CostCodesHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Library, Settings2, Zap, DollarSign, PenTool, ArrowDownUp } from "lucide-react";

export const metadata = {
  title: "Construction Cost Codes | Zerotone Construct",
  description: "Organize costs by CSI division. Company wide master library plus job specific overrides. Autogenerate estimates from cost codes and buildings.",
};

const FEATURES = [
  {
    title: "Prebuilt CSI library",
    description: "Start with a comprehensive two digit CSI cost code structure covering all divisions. Company wide master that applies to every project.",
    icon: <Library className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Job specific overrides",
    description: "Customize pricing, labor rates, and material costs per project. Keep the CSI structure but adjust rates without touching the master.",
    icon: <Settings2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "One click estimate generation",
    description: "Select which cost codes apply to your project, enable them by building level. Zerotone autogenerates estimate lines for all combinations.",
    icon: <Zap className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Labor, material, GC split",
    description: "Every cost code separates labor from material from GC markup. Perfect for vendor quotes, sub bids, and margin tracking.",
    icon: <DollarSign className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Bulk rate adjustments",
    description: "Adjust all labor rates by 5% across the project, or apply a markup to material only. Bulk changes update estimate lines instantly.",
    icon: <PenTool className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Excel import & copy config",
    description: "Import cost codes and rates from Excel. Or copy configuration from a similar past project: saves hours on setup.",
    icon: <ArrowDownUp className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "2 hrs",
    label: "saved per estimate",
    description: "One click generates your entire cost code estimate from buildings + enabled codes. No line by line manual entry.",
  },
  {
    value: "100+",
    label: "codes in library",
    description: "CSI organized, covering every division. Start comprehensive: customize only what you need per project.",
  },
  {
    value: "1",
    label: "accounting language",
    description: "Every project speaks the same CSI dialect. Historical data comparable. Reporting consistent.",
  },
];

const COST_CODES_FAQS = [
  {
    question: "What is a CSI cost code?",
    answer: "CSI (Construction Specifications Institute) cost codes organize construction work by division: e.g., 02 = site construction, 03 = concrete. Zerotone comes with a master CSI library. You enable the codes that apply to your project, set rates, and estimate lines autogenerate.",
  },
  {
    question: "Can I have a company wide master and project specific overrides?",
    answer: "Yes. The CSI master library is company wide: everyone uses the same codes. At the project level, you override labor rates, material costs, and GC margins without changing the master. Historical data stays consistent.",
  },
  {
    question: "How does estimate generation work?",
    answer: "You select which cost codes apply. You assign each code to building levels (e.g., 'concrete applies to all levels; roofing applies to roof level only'). Then Zerotone autogenerates estimate lines for every enabled code × building combination.",
  },
  {
    question: "Can I adjust rates in bulk?",
    answer: "Yes. Increase all labor rates by 5%, or apply a 10% material markup project wide. Or adjust specific codes. Bulk changes cascade through the estimate: line items update in real time.",
  },
  {
    question: "Can I import cost codes from Excel?",
    answer: "Yes. Prepare a spreadsheet with code, name, labor rate, material rate, and GC margin. Import in one step. Or copy configuration from a similar past project to use as a template.",
  },
  {
    question: "What if a project needs a custom cost code?",
    answer: "Add it to the job's cost code list. It won't affect the master library. The custom code appears in that project's estimates and tracking but stays isolated: other projects don't see it.",
  },
];

export default function CostCodesPage() {
  return (
    <>
      <ModuleHero
        badge="COST CODES"
        title={
          <>
            CSI cost codes. One master library. <span className="text-primary-800">Unlimited project customization.</span>
          </>
        }
        description="Organize costs by industry standard divisions. Create estimates automatically. Keep accounting consistent across every project."
        visual={<CostCodesHeroVisual />}
      />
      <CostCodesProblemSolution />
      <ModuleFeaturesGrid
        headline="Standardize your accounting."
        description="From master library to project overrides, keep everything in sync."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="One language across all projects."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Zerotone Construct is a young product running on live construction projects today. We don&apos;t publish quotes we can&apos;t attribute, ask us on a call and we&apos;ll walk you through the real system on a real project instead."'
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={COST_CODES_FAQS} />
      <ModuleCTA
        headline="Stop building estimates from scratch."
        description="Book a 20 minute demo. We'll show how cost codes autogenerate your entire estimate."
      />
    </>
  );
}
