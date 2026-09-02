import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { DailyLogsProblemSolution } from "@/components/sections/daily-logs/DailyLogsProblemSolution";
import { DailyLogsHeroVisual } from "@/components/sections/daily-logs/DailyLogsHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { FileText, Image as ImageIcon, LayoutList, Clock, CheckSquare, FileOutput } from "lucide-react";

export const metadata = {
  title: "Daily Logs for Construction | Zerotone Construct",
  description: "Record daily conditions, crew, work progress, and weather. Two views: table and diary. Link to delays. Official project record.",
};

const FEATURES = [
  {
    title: "Structured daily entry form",
    description: "Weather (cloud, rain, wind, temp), crew (trade, count, hours), work progress (area, activity, pct complete). Supers fill in once per day.",
    icon: <FileText className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Photo attachments",
    description: "Attach site photos to the daily log. Timestamp and location autocaptured. Reference shots for weather, progress, or issues.",
    icon: <ImageIcon className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Two views: table & diary",
    description: "View logs as a data table (sortable by date, crew, weather) or as diary cards (narrative view). Supers prefer diary mode for field entry.",
    icon: <LayoutList className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Link delays atomically",
    description: 'While logging a day, capture delay records. "Concrete delayed 4 hours due to rain." Logs and delays stay synchronized.',
    icon: <Clock className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Work progress tracking",
    description: "Log what areas were worked, by which crews, and pct completion. Roll up daily progress into schedule tracking.",
    icon: <CheckSquare className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Excel export & print",
    description: "Export daily log history for owner reports or legal review. Print for field super's file. Official project record certified by date.",
    icon: <FileOutput className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "5 min",
    label: "per daily log",
    description: "Structured form, no narrative typing. Super fills weather, crew, progress. Done.",
  },
  {
    value: "100%",
    label: "legal defensibility",
    description: "Timestamped, signed entries. Weather and crew records create evidence trail for delay claims.",
  },
  {
    value: "0 lost",
    label: "missing logs",
    description: "Cloud stored. Searchable. Exportable to PDF or Excel for closeout binder.",
  },
];

const DAILY_LOGS_FAQS = [
  {
    question: "What is a daily log?",
    answer: "A daily log is the official record of onsite work, weather, crew, and progress for a single day. It's signed by the super and becomes part of the project record. Used for scheduling verification, delay documentation, and legal claims.",
  },
  {
    question: "What data does a daily log capture?",
    answer: "Weather (cloud cover, rain, wind, temperature), crew by trade (number of workers, hours, work completed), work progress (areas worked, pct complete), and photos. Optional notes for unusual conditions.",
  },
  {
    question: "Can I log delays in the daily log?",
    answer: "Yes. While logging the day, capture delay events. E.g., 'Concrete delayed 4 hours due to weather.' The delay record is created atomically with the log.",
  },
  {
    question: "What's the difference between diary and table view?",
    answer: "Table view shows all logs in columns (date, weather, crew count, work area, pct complete), for analysis and reporting. Diary view shows card entries with narrative, suits field entry on a phone.",
  },
  {
    question: "Can I print daily logs?",
    answer: "Yes. Export individual days or a date range to PDF. Includes all photos and notes. Supers can print for their field file or owner reports.",
  },
  {
    question: "How are daily logs used in delay claims?",
    answer: "Supers log the day, the weather, the crew, and the issue. If rain delays work, that's recorded with date, duration, and impact. Timestamps and photos create defensible evidence.",
  },
];

export default function DailyLogsPage() {
  return (
    <>
      <ModuleHero
        badge="DAILY LOGS"
        title={
          <>
            The official site record. <span className="text-primary-800">You own the history.</span>
          </>
        }
        description="Capture weather, crew, and progress daily. Link delays. Store photos. Export for owner reporting and delay claims."
        visual={<DailyLogsHeroVisual />}
      />
      <DailyLogsProblemSolution />
      <ModuleFeaturesGrid
        headline="Structured data, not scattered notes."
        description="Everything you need to prove what happened, when it happened."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Protect your margins with airtight records."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={DAILY_LOGS_FAQS} />
      <ModuleCTA
        headline="Proof of what happened, every single day."
        description="15 minute demo. See how supers log daily and claims get backed."
      />
    </>
  );
}
