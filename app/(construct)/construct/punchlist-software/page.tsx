import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { MapPin, Send, CheckSquare, BookOpen, Shield, LayoutDashboard } from "lucide-react";

export const metadata = {
  title: "Punchlist & Closeout Software | Zerotone Construct",
  description: "Drop punchlist pins from the field, automate O&M manuals, and get your final payment faster.",
};

const FEATURES = [
  {
    title: "Mobile punch items",
    description: "Drop pins directly on the drawings from your phone in the field and attach photos of the defect.",
    icon: <MapPin className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Subcontractor assignments",
    description: "Assign punch items directly to the responsible sub with automatic due dates and overdue reminders.",
    icon: <Send className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Sign-off workflows",
    description: "Multi-step sign-off routing requiring the subcontractor, GC, architect, and owner approval.",
    icon: <CheckSquare className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "O&M manual builder",
    description: "Automatically compile all approved submittals and product data into the final digital O&M manual.",
    icon: <BookOpen className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Warranty tracking",
    description: "Log start dates, expiration dates, and contact information for all installed equipment warranties.",
    icon: <Shield className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Closeout dashboard",
    description: "See exactly what documents are missing before you can confidently submit the final pay application.",
    icon: <LayoutDashboard className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "50%",
    label: "faster closeout",
    description: "Cut the time from substantial completion to final payment in half with automated workflows.",
  },
  {
    value: "0",
    label: "lost retainage",
    description: "Ensure every single punch item is documented, fixed, and formally signed off by the owner.",
  },
  {
    value: "Automated",
    label: "O&M creation",
    description: "Turn a week of painful administrative document gathering into a single click.",
  },
];

export default function PunchlistPage() {
  return (
    <>
      <ModuleHero
        badge="CLOSEOUT & PUNCHLIST"
        title={
          <>
            Finish the job. <span className="text-primary-800">Get your retainage.</span>
          </>
        }
        description="Closeout used to be a nightmare of missing documents and lingering punch items. Now, you build the O&M manual as you go, and the punch list manages itself."
      />
      <ModuleFeaturesGrid
        headline="A frictionless path to final completion."
        description="Everything you need to hand over the keys and close the books."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Get paid faster."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote='"Closeout used to be the most painful part of the job. We"d spend weeks chasing down warranties. Now we build the O&M manual as we go, and the punch list manages itself."'
        authorName="Project Manager"
        authorTitle="Commercial Interiors Firm"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Take the pain out of closeout."
        description="Book a demo to see how we automate punchlists and O&M manual generation."
      />
    </>
  );
}

