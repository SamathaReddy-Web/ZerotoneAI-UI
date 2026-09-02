import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Wrench, Truck, Boxes, QrCode, DollarSign, Bell } from "lucide-react";

export const metadata = {
  title: "Inventory & Tool Tracking | Zerotone Construct",
  description: "Track small tools, manage heavy equipment, and automate internal equipment billing.",
};

const FEATURES = [
  {
    title: "Tool tracking",
    description: "Assign small tools to specific employees and track their location to prevent loss and theft.",
    icon: <Wrench className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Asset management",
    description: "Manage heavy equipment assignments, preventative maintenance schedules, and depreciation.",
    icon: <Truck className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Warehouse inventory",
    description: "Track bulk materials and consumables stored in the warehouse before they ship to the job site.",
    icon: <Boxes className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "QR code scanning",
    description: "Scan tools and equipment in and out using the camera on your mobile device. No dedicated scanners needed.",
    icon: <QrCode className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Job costing",
    description: "Automatically charge the project budget for the days a piece of company-owned equipment is on site.",
    icon: <DollarSign className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Low stock alerts",
    description: "Get notified automatically when consumable inventory drops below predefined minimum thresholds.",
    icon: <Bell className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "0",
    label: "lost tools",
    description: "Hold employees accountable for the specific high-value tools assigned to them.",
  },
  {
    value: "100%",
    label: "equipment utilization",
    description: "Know exactly where your heavy equipment is, and more importantly, if it is actually being used.",
  },
  {
    value: "Automated",
    label: "internal billing",
    description: "Charge projects for equipment usage accurately without relying on manual spreadsheets.",
  },
];

export default function InventoryPage() {
  return (
    <>
      <ModuleHero
        badge="INVENTORY"
        title={
          <>
            Know where <span className="text-primary-800">your assets are.</span>
          </>
        }
        description="Stop losing high-value tools and letting heavy equipment sit idle. Track inventory, scan items in and out, and automate equipment job costing."
      />
      <ModuleFeaturesGrid
        headline="Complete control over physical assets."
        description="From the warehouse shelf to the job site."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Maximize asset utilization."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"We used to lose tens of thousands of dollars a year in missing small tools. Now we scan them out to the foreman, and the loss rate has dropped to practically zero."'
        authorName="Warehouse Manager"
        authorTitle="Self-Performing General Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Stop replacing lost tools."
        description="Book a demo to see how easy it is to scan and track your assets with Zerotone."
      />
    </>
  );
}

