import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { SchedulingProblemSolution } from "@/components/sections/scheduling/SchedulingProblemSolution";
import { SchedulingHeroVisual } from "@/components/sections/scheduling/SchedulingHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Hand, Link2, Users, FileBarChart2, CloudRain, Baseline } from "lucide-react";

export const metadata = {
  title: "Construction Scheduling Software | Gantt Charts | Zerotone Construct",
  description: "Drag and drop Gantt scheduling for construction GCs: look ahead reports, baseline tracking, CPM critical path. No P6 license required.",
};

const FEATURES = [
  {
    title: "Drag and drop Gantt",
    description: "Build and update your schedule visually. Drag tasks, extend durations, and the whole schedule recalculates automatically.",
    icon: <Hand className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Predecessor logic",
    description: "Set finish to start, start to start, and lag relationships. Zerotone warns you when a predecessor slip will impact your milestones.",
    icon: <Link2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Resource loading",
    description: "See your crew and sub commitments across tasks. Catch overloading before you commit to a schedule you can't staff.",
    icon: <Users className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "3 week look ahead",
    description: "Auto generated look ahead reports for your weekly owner meeting. Shows what's starting, what's finishing, and what needs attention.",
    icon: <FileBarChart2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Weather day buffers",
    description: "Add weather contingency buffers to exterior work phases. Zerotone tracks consumed float and flags when you're running out.",
    icon: <CloudRain className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Baseline comparison",
    description: "Lock your original schedule as a baseline. See slippage clearly (planned vs. actual) on every task and milestone.",
    icon: <Baseline className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "35%",
    label: "fewer schedule slips",
    description: "GCs using Zerotone scheduling catch predecessor conflicts 2 weeks earlier than teams running spreadsheet schedules.",
  },
  {
    value: "4 hrs",
    label: "saved per week",
    description: "Auto generated look aheads replace manual PowerPoint schedule updates before every owner meeting.",
  },
  {
    value: "1 day",
    label: "to build a baseline",
    description: "Import your project milestones and build a complete Gantt schedule in a single afternoon: no P6 training required.",
  },
];

const SCHEDULING_FAQS = [
  {
    question: "Is Zerotone compatible with Primavera P6 or Microsoft Project?",
    answer: "You can import XER (P6) and MPP (MS Project) files into Zerotone to use as a starting point. Export back to those formats is on the roadmap. For most small GCs, Zerotone's native scheduling is all they need.",
  },
  {
    question: "Can I share the schedule with my owner or architect?",
    answer: "Yes: view only links let owners and architects see live schedule status without logging in. You can also export PDF Gantt charts for contract submittals.",
  },
  {
    question: "How does Zerotone handle schedule changes mid project?",
    answer: "Drag any task to update it. Zerotone recalculates all successors automatically and flags any milestones now at risk. You can save a new baseline and keep the old one for comparison.",
  },
  {
    question: "Can my subs see their portion of the schedule?",
    answer: "Yes. Subs log into the sub portal and see only the tasks assigned to their trade. They can update percent complete, which flows back into your master schedule.",
  },
  {
    question: "Do you have CPM (Critical Path Method) scheduling?",
    answer: "Yes: Zerotone calculates critical path automatically and highlights it in the Gantt. You can see total float on any task and identify which sequences are driving your completion date.",
  },
  {
    question: "Can I schedule by phase or by area?",
    answer: "Both. You can organize the WBS by phase, by building area, or by trade. Tasks can span multiple areas. Most GCs use a combination: phases at the top level, trades underneath.",
  },
];

export default function SmartSchedulingPage() {
  return (
    <>
      <ModuleHero
        badge="SMART SCHEDULING"
        title={
          <>
            Gantt charts that update <span className="text-primary-800">when reality does.</span>
          </>
        }
        description="Drag and drop scheduling with predecessor logic, resource loading, and 3 week look aheads. Built for GCs who need a real schedule: not a $40k P6 license."
        visual={<SchedulingHeroVisual />}
      />
      <SchedulingProblemSolution />
      <ModuleFeaturesGrid
        headline="Run the project, not the software."
        description="Powerful logic with a drag-and-drop interface."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Stop spending Fridays making PowerPoints."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={SCHEDULING_FAQS} />
      <ModuleCTA
        headline="Run a schedule your whole team can see."
        description="20 minute demo. We'll build a sample Gantt for a project that looks like yours."
      />
    </>
  );
}
