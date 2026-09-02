import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { LayoutTemplate, MailCheck, BarChart2, PieChart, DownloadCloud, Lock } from "lucide-react";

export const metadata = {
  title: "Reporting Software | Zerotone Construct",
  description: "Build custom reports, visualize project data, and automate distribution to stakeholders.",
};

const FEATURES = [
  {
    title: "Custom report builder",
    description: "Drag and drop data fields to build highly customized reports without needing an IT department or SQL.",
    icon: <LayoutTemplate className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Scheduled delivery",
    description: "Schedule reports to be generated and emailed automatically to specific stakeholders on a recurring basis.",
    icon: <MailCheck className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Cross-project insights",
    description: "Compare financial and schedule metrics across multiple projects to identify company-wide trends.",
    icon: <BarChart2 className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Data visualization",
    description: "Turn rows of raw data into beautiful, interactive charts and graphs that are easy to understand.",
    icon: <PieChart className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Export formats",
    description: "Export any report to PDF for distribution, or to Excel/CSV for further manual manipulation.",
    icon: <DownloadCloud className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Permission controls",
    description: "Granular access controls ensure users only see the financial data they are strictly authorized to view.",
    icon: <Lock className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "Unlimited",
    label: "custom reports",
    description: "Build as many unique reports as your company needs. No paying for custom dev work.",
  },
  {
    value: "Automated",
    label: "distribution",
    description: "Never forget to send the Monday morning status report again. Let the system do it.",
  },
  {
    value: "Live",
    label: "data access",
    description: "Reports query live database numbers, not week-old stale Excel exports.",
  },
];

export default function ReportingPage() {
  return (
    <>
      <ModuleHero
        badge="REPORTS"
        title={
          <>
            Turn project data into <span className="text-primary-800">actionable insights.</span>
          </>
        }
        description="Stop fighting with VLOOKUPs. Build custom reports, visualize your data, and automate distribution to keep your team informed and your executives happy."
      />
      <ModuleFeaturesGrid
        headline="The data you need, formatted how you want it."
        description="A powerful analytics engine built directly into your project management system."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Make better decisions, faster."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"We used to spend two days a month manually compiling data for our executive meeting. Now, the dashboard generates the exact charts we need automatically."'
        authorName="Director of Analytics"
        authorTitle="Commercial Builder"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Unlock your project data."
        description="Book a demo to see our custom report builder in action."
      />
    </>
  );
}

