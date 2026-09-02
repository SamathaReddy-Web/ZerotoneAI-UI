import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { CalendarRange, Link2, History, Smartphone, CalendarDays, Users } from "lucide-react";

export const metadata = {
  title: "Scheduling Software | Zerotone Construct",
  description: "Interactive Gantt charts, live critical paths, and automated lookaheads for your projects.",
};

const FEATURES = [
  {
    title: "Interactive Gantt charts",
    description: "Build and manage complex schedules with interactive Gantt charts that automatically calculate the critical path.",
    icon: <CalendarRange className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Dependency tracking",
    description: "Link tasks with finish-to-start, start-to-start, and finish-to-finish dependencies. Changes ripple automatically.",
    icon: <Link2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Baseline comparison",
    description: "Save schedule baselines and compare current progress against your original plans to identify slip early.",
    icon: <History className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Field schedule updates",
    description: "Superintendents can update task completion percentages directly from the field via the mobile app.",
    icon: <Smartphone className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Lookahead schedules",
    description: "Automatically generate and distribute 3-week lookahead reports for your weekly subcontractor meetings.",
    icon: <CalendarDays className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Resource loading",
    description: "Assign crews, subcontractors, and equipment to tasks to prevent overallocation and bottlenecks.",
    icon: <Users className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "team alignment",
    description: "Everyone from the owner to the subs works off the exact same live, cloud-based schedule.",
  },
  {
    value: "3 week",
    label: "lookahead automation",
    description: "Stop manually building lookaheads in Excel. Generate them instantly from the master schedule.",
  },
  {
    value: "Live",
    label: "critical path",
    description: "Know instantly when a minor delay pushes your final completion date and take action.",
  },
];

export default function SchedulingPage() {
  return (
    <>
      <ModuleHero
        badge="SMART SCHEDULING"
        title={
          <>
            Keep every project <span className="text-primary-800">on time.</span>
          </>
        }
        description="Dynamic Gantt charts that live in the cloud, update from the field, and keep your entire project team aligned on the critical path."
      />
      <ModuleFeaturesGrid
        headline="Schedules that actually reflect reality."
        description="Built for the superintendent's trailer, powerful enough for the master scheduler."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Drive the project forward."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"The ability for our supers to update the schedule from their iPads has completely changed our weekly sub meetings. The schedule is finally a living document."'
        authorName="General Superintendent"
        authorTitle="Top 50 General Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Build a schedule you can trust."
        description="Book a demo to see how we handle critical paths, baselines, and field updates."
      />
    </>
  );
}

