import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { DelayTrackingProblemSolution } from "@/components/sections/delays/DelayTrackingProblemSolution";
import { DelayTrackingHeroVisual } from "@/components/sections/delays/DelayTrackingHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { BarChart3, Calculator, Target, FolderTree, Image as ImageIcon, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Delay Tracking for Construction | Zerotone Construct",
  description: "Track schedule delays with responsible party, category, and duration. Autocalculate cost impact. Critical path analysis. Claims ready.",
};

const FEATURES = [
  {
    title: "Delay register with metrics",
    description: "Central log of all project delays. Shows responsible party, category, duration, and cost impact. One click summary dashboard.",
    icon: <BarChart3 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Autocalculated cost impact",
    description: "Zerotone multiplies delay duration by daily GC burden rate. Cost impact autofills. No math errors. Shows delay cost per category.",
    icon: <Calculator className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Critical path flag",
    description: "Mark whether a delay hits the critical path (impacts overall schedule) or is on a float activity. Distinguishes impact vs. idle time.",
    icon: <Target className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Delay categories",
    description: "Weather, manpower, material, equipment, design, owner, subcontractor, site conditions, permit, other. Categorize to identify patterns.",
    icon: <FolderTree className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Linked to daily logs",
    description: "Delays reference daily log entries. Photos, weather data, crew info prove the delay. No separate documentation needed.",
    icon: <ImageIcon className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Schedule impact analysis",
    description: "Compare baseline schedule to updated schedule. Calculate total delay vs. recoverable float. Zerotone shows the math.",
    icon: <TrendingUp className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "of delays documented",
    description: "Every delay recorded with responsible party, category, and impact. Claims are defensible.",
  },
  {
    value: "$0 lost",
    label: "delay claims",
    description: "With cost impact autocalculated and daily logs tied, claims documentation is airtight.",
  },
  {
    value: "5 min",
    label: "per delay record",
    description: "Responsible party, category, dates, and notes. Zerotone does the math.",
  },
];

const DELAYS_FAQS = [
  {
    question: "What is a schedule delay?",
    answer: "A delay is an event that stops or slows project work. Weather, material shortage, design change, permitting: anything that impacts the schedule. Delays are recorded with responsible party, duration, and cost.",
  },
  {
    question: "How is delay cost impact calculated?",
    answer: "Zerotone multiplies delay duration (days/hours) by your daily GC burden rate (overhead + margin). Example: 3 day delay × $1,200/day GC rate = $3,600 impact.",
  },
  {
    question: "What is critical path?",
    answer: "The longest sequence of activities from project start to finish. Any delay on the critical path extends overall schedule. Delays on float activities don't (they have slack time). Zerotone flags CP impact.",
  },
  {
    question: "Can I categorize delays?",
    answer: "Yes. Weather, manpower, material, equipment, design, owner, subcontractor, site, permit, other. Categorization helps you track patterns and identify responsible parties.",
  },
  {
    question: "How do I link daily logs to delays?",
    answer: "When you create a delay record, reference the date and the daily log(s) that document the delay. Photos, weather data, and crew info from the log support the claim.",
  },
  {
    question: "How do I prepare a schedule delay claim?",
    answer: "Gather all delay records in the register. Export with photos and impact calculations. Compare baseline schedule to updated schedule. Zerotone does the math; you present the evidence.",
  },
];

export default function DelaysPage() {
  return (
    <>
      <ModuleHero
        badge="DELAYS MODULE"
        title={
          <>
            Track every delay. Calculate every impact. <span className="text-primary-800">Build airtight claims.</span>
          </>
        }
        description="Document delays with responsible party and cost impact. Link to daily logs. Compare schedules. Export for delay claims analysis."
        visual={<DelayTrackingHeroVisual />}
      />
      <DelayTrackingProblemSolution />
      <ModuleFeaturesGrid
        headline="Don't leave money on the table."
        description="Turn scattered notes into calculated, defensible claims."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Protect your schedule and your profit."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={DELAYS_FAQS} />
      <ModuleCTA
        headline="Delays documented. Impact calculated. Claims won."
        description="20 minute demo. See how daily logs + delay tracking = winning evidence."
      />
    </>
  );
}
