import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Mail, MapPin, UserCheck, AlertTriangle, Link2, Smartphone } from "lucide-react";

export const metadata = {
  title: "RFI Management Software | Zerotone Construct",
  description: "Create, track, and resolve Requests for Information faster with clear ball-in-court accountability.",
};

const FEATURES = [
  {
    title: "Email integration",
    description: "Design teams can reply to RFIs directly from their inbox without logging in. The system logs it automatically.",
    icon: <Mail className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Drawing links",
    description: "Pin RFIs directly to the exact location on the drawing set so the architect knows exactly what you're looking at.",
    icon: <MapPin className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Ball-in-court tracking",
    description: "See exactly whose desk the RFI is sitting on with clear accountability and automated overdue reminders.",
    icon: <UserCheck className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Schedule impact",
    description: "Flag RFIs that will impact the schedule or budget, automatically notifying the project executive.",
    icon: <AlertTriangle className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Related items",
    description: "Link RFIs to the submittals, change orders, and daily logs they affect for a complete audit trail.",
    icon: <Link2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Mobile access",
    description: "Draft an RFI directly from the field with photos taken on your phone. No more walking back to the trailer.",
    icon: <Smartphone className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "3 days",
    label: "faster resolution",
    description: "Cut average RFI turnaround time by 3 days with automated reminders and clear ownership.",
  },
  {
    value: "0",
    label: "lost emails",
    description: "Every question, clarification, and official answer is logged in a single, searchable system of record.",
  },
  {
    value: "Clear",
    label: "accountability",
    description: "Never wonder who owes you an answer again. Ball-in-court tracking makes bottlenecks obvious.",
  },
];

export default function RFIPage() {
  return (
    <>
      <ModuleHero
        badge="RFI MANAGER"
        title={
          <>
            Get answers faster. Keep the project <span className="text-primary-800">moving.</span>
          </>
        }
        description="Stop losing RFIs in crowded email threads. Centralize questions, pin them to drawings, and hold design teams accountable with automated follow-ups."
      />
      <ModuleFeaturesGrid
        headline="A single source of truth for every question."
        description="Built to get you official answers without the administrative headache."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Break down the bottlenecks."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"We used to lose track of RFIs in crowded email threads. Now we have a central dashboard that tells us exactly what"s outstanding and who is holding us up."'
        authorName="Project Manager"
        authorTitle="Design-Build Firm"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Take control of your RFIs."
        description="Book a demo to see how we track ball-in-court status and integrate with email."
      />
    </>
  );
}

