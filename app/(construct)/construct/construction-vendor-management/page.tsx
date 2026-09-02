import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Database, FileCheck, ShieldAlert, StarHalf, Users, Globe } from "lucide-react";

export const metadata = {
  title: "Vendor Management Software | Zerotone Construct",
  description: "Track subcontractor COIs, automate prequalification, and rate vendor performance.",
};

const FEATURES = [
  {
    title: "Vendor database",
    description: "Maintain a central, searchable database of all approved subcontractors, suppliers, and consultants.",
    icon: <Database className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Prequalification workflows",
    description: "Automate the collection of financials, safety EMR scores, and bonding capacity on an annual basis.",
    icon: <FileCheck className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Insurance tracking",
    description: "Track COIs and automatically block payments to vendors with expired general liability or worker's comp.",
    icon: <ShieldAlert className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Performance rating",
    description: "Rate vendors after every project on safety, quality, and schedule adherence to inform future bidding.",
    icon: <StarHalf className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Diversity tracking",
    description: "Track MBE, WBE, and DBE vendor utilization across your portfolio to ensure compliance with owner requirements.",
    icon: <Users className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Vendor portal",
    description: "Give vendors a secure, self-serve portal to update their own contact information, COIs, and W-9s.",
    icon: <Globe className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "insurance compliance",
    description: "Never let an un-insured subcontractor step foot on your job site again.",
  },
  {
    value: "Automated",
    label: "prequalification",
    description: "Stop chasing down W-9s and safety records via email. The portal does it for you.",
  },
  {
    value: "Data-driven",
    label: "bidding",
    description: "Award subcontracts based on historical performance ratings, not just the lowest number.",
  },
];

export default function VendorManagementPage() {
  return (
    <>
      <ModuleHero
        badge="VENDOR MANAGEMENT"
        title={
          <>
            Manage risk. <span className="text-primary-800">Build better relationships.</span>
          </>
        }
        description="Your projects are only as good as your subcontractors. Automate prequalification, strictly enforce COI compliance, and track performance across the portfolio."
      />
      <ModuleFeaturesGrid
        headline="A single source of truth for your supply chain."
        description="Stop managing critical vendor risk in spreadsheets."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Protect the firm."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Keeping track of 500+ subcontractor COIs used to be a nightmare. Now the system warns us 30 days before expiration and blocks payments automatically if they lapse."'
        authorName="Risk Manager"
        authorTitle="Commercial General Contractor"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Automate your vendor compliance."
        description="Book a demo to see our prequalification workflows and COI tracking."
      />
    </>
  );
}

