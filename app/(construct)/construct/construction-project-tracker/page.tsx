import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { TrackerProblemSolution } from "@/components/sections/project-tracker/TrackerProblemSolution";
import { TrackerHeroVisual } from "@/components/sections/project-tracker/TrackerHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Target, Layers, Link, Calendar, CheckSquare, Bell } from "lucide-react";

export const metadata = {
  title: "Project Tracker Software | Zerotone Construct",
  description: "Organize work by phase. Track activity status and dependencies. List and Gantt views. Automated overdue alerts.",
};

const FEATURES = [
  {
    title: "Phase based organization",
    description: "Group activities by phase: Bidding, Preconstruction, Construction, Closeout. Each phase has its own timeline and team.",
    icon: <Layers className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Status tracking",
    description: "Not Started, In Progress, Completed, Overdue. Autoset overdue when deadline passes. Status rollup shows phase health at a glance.",
    icon: <Target className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Activity dependencies",
    description: "Link activities: 'Finish foundation before starting framing.' System shows critical path and impacts of delays.",
    icon: <Link className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "List & Gantt views",
    description: "List view for details (who, what, when). Gantt view for timeline and dependencies. Switch views instantly.",
    icon: <Calendar className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Bulk mark complete",
    description: "Select multiple activities and mark done in one action. Reassign to team members. Update deadlines.",
    icon: <CheckSquare className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Team notifications",
    description: "Assigned team gets notified when activities are assigned or deadline is approaching. WhatsApp integration for field alerts.",
    icon: <Bell className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "activity visibility",
    description: "Every task is visible, assigned, and tracked. Superintendents, PMs, and execs all see the same view.",
  },
  {
    value: "50%",
    label: "faster status updates",
    description: "Bulk status changes and reassignments. Team gets notified automatically.",
  },
  {
    value: "0",
    label: "missed deadlines",
    description: "Overdue activities autoflagged. Escalate to management. No dropped tasks.",
  },
];

const TRACKER_FAQS = [
  {
    question: "What is an activity?",
    answer: "An activity is a unit of work: e.g., 'Secure permit,' 'Schedule concrete pour,' 'Framing inspection.' Activities have start/end dates, assigned owners, status, and notes.",
  },
  {
    question: "How do phases work?",
    answer: "Phases group activities by project stage: Bidding (preconstruction work), Preconstruction (planning, procurement), Construction (onsite work), Closeout (final walkthrough, warranty). Activities within a phase share timeline and team.",
  },
  {
    question: "What are dependencies?",
    answer: "A dependency is a relationship: Activity B cannot start until Activity A is complete. E.g., 'Framing depends on foundation finish.' The system shows the critical path.",
  },
  {
    question: "How do status badges work?",
    answer: "Not Started (white), In Progress (blue), Completed (green), Overdue (red). Overdue is autoset when deadline passes and status is not Complete. Roll up to phase level.",
  },
  {
    question: "Can I view the project as a Gantt chart?",
    answer: "Yes. Gantt view shows activities as bars on a timeline, with dependencies as arrows. Drag to reschedule. Zoom to see detail or high level view.",
  },
  {
    question: "What happens when an activity is overdue?",
    answer: "The system flags it red. Assigned owner gets a notification (email, Slack, or SMS). PM gets an escalation alert. Activity shows days overdue.",
  },
];

export default function ProjectTrackerPage() {
  return (
    <>
      <ModuleHero
        badge="PROJECT TRACKER"
        title={
          <>
            Track every activity. See the whole timeline. <span className="text-primary-800">Keep teams aligned.</span>
          </>
        }
        description="Phase based task management with list and Gantt views. Automatic overdue alerts. Dependency tracking for the critical path."
        visual={<TrackerHeroVisual />}
      />
      <TrackerProblemSolution />
      <ModuleFeaturesGrid
        headline="Stop managing schedules in email."
        description="Live timelines, instant notifications, and dependency tracking."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="One project plan. Zero surprises."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Everyone sees the same project timeline. Supes know what's expected. PM isn't chasing status in email. Overdue activities alert automatically. It's not just a tool, it's our actual project plan."
        authorName="Thomas L."
        authorTitle="Construction Manager · Stellar Builders, NV"
      />
      <RestOfZerotone />
      <FAQSection items={TRACKER_FAQS} />
      <ModuleCTA
        headline="One project plan. Everyone on the same page."
        description="15 minute demo. See phases, activities, and status all at once."
      />
    </>
  );
}
