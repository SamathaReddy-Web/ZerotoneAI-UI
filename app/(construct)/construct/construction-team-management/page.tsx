import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Contact, CalendarRange, Award, CalendarOff, Star, UserPlus } from "lucide-react";

export const metadata = {
  title: "Team Management Software | Zerotone Construct",
  description: "Track employee skills, forecast resource loads, and manage certifications.",
};

const FEATURES = [
  {
    title: "Directory & skills",
    description: "Maintain a comprehensive directory of all employees, their specific trade skills, and contact info.",
    icon: <Contact className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Resource forecasting",
    description: "Forecast labor needs across upcoming projects to avoid shortages and balance the workload.",
    icon: <CalendarRange className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Certification tracking",
    description: "Track expiring OSHA cards, forklift licenses, and specialized training certificates with automated alerts.",
    icon: <Award className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Time-off management",
    description: "Manage PTO requests and instantly see how an absence impacts active project schedules.",
    icon: <CalendarOff className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Performance reviews",
    description: "Conduct and securely store standard employee performance evaluations and compensation history.",
    icon: <Star className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Onboarding workflows",
    description: "Automate new hire onboarding with standardized digital checklists and policy acknowledgments.",
    icon: <UserPlus className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "compliance",
    description: "Never let an OSHA 30 certification or specialized trade license lapse unnoticed again.",
  },
  {
    value: "Visual",
    label: "resource loads",
    description: "See exactly when your top superintendents are finishing their current jobs and are available next.",
  },
  {
    value: "Centralized",
    label: "HR data",
    description: "A single, secure source of truth for your entire field and back-office staff.",
  },
];

export default function TeamManagementPage() {
  return (
    <>
      <ModuleHero
        badge="TEAM MANAGEMENT"
        title={
          <>
            Manage your <span className="text-primary-800">most valuable asset.</span>
          </>
        }
        description="Your people build the projects. Track their skills, manage their certifications, and forecast exactly where they need to be deployed next."
      />
      <ModuleFeaturesGrid
        headline="Deploy the right people to the right jobs."
        description="HR and resource management built for construction."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Optimize your workforce."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Trying to figure out who was available to run a new job used to involve calling five different people. Now I look at the resource forecast and know instantly who is freeing up."'
        authorName="Director of Field Operations"
        authorTitle="Self-Performing Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Streamline your team management."
        description="Book a demo to see how we track certifications and forecast resources."
      />
    </>
  );
}

