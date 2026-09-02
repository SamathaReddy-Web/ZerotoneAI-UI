import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { CloudSun, Users, Camera, Truck, HardHat, FileText } from "lucide-react";

export const metadata = {
  title: "Daily Logs Software | Zerotone Construct",
  description: "Automate weather tracking, labor headcounts, and site photos with digital daily reports.",
};

const FEATURES = [
  {
    title: "Weather automation",
    description: "Automatically pull localized site weather data multiple times a day based on the project zip code.",
    icon: <CloudSun className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Labor tracking",
    description: "Track headcounts, hours, and specific trades on site every day to maintain an accurate labor record.",
    icon: <Users className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Photo documentation",
    description: "Snap and upload site progress photos directly from the mobile app. Auto-stamped with time and location.",
    icon: <Camera className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Equipment & materials",
    description: "Log heavy equipment usage, idle times, and critical material deliveries instantly.",
    icon: <Truck className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Safety observations",
    description: "Document safety issues, toolbox talks, and minor incidents to maintain a culture of compliance.",
    icon: <HardHat className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "PDF reporting",
    description: "Automatically generate and distribute beautiful, standardized PDF daily reports to stakeholders.",
    icon: <FileText className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "10 mins",
    label: "to complete a log",
    description: "Stop spending an hour at the end of the day compiling handwritten notes.",
  },
  {
    value: "100%",
    label: "weather accuracy",
    description: "Automated weather logging protects you from unwarranted schedule delay claims.",
  },
  {
    value: "Complete",
    label: "historical record",
    description: "A fully searchable, daily record of exactly what happened on site from groundbreak to closeout.",
  },
];

export default function DailyLogsPage() {
  return (
    <>
      <ModuleHero
        badge="DAILY LOGS"
        title={
          <>
            Document the jobsite in <span className="text-primary-800">minutes, not hours.</span>
          </>
        }
        description="Empower your superintendents with a mobile-first daily log that automates the busywork and protects your firm from disputes."
      />
      <ModuleFeaturesGrid
        headline="A perfect record of every single day."
        description="Everything you need to document site progress, right in your pocket."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Protect the project."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Our supers used to hate doing dailies. Now they take a few photos, dictate some notes, and the report generates itself before they even leave the site trailer."'
        authorName="VP of Operations"
        authorTitle="Commercial General Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="See the easiest daily log in construction."
        description="Book a demo to see how we automate weather, photos, and PDF generation."
      />
    </>
  );
}

