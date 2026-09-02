import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { PunchlistProblemSolution } from "@/components/sections/punchlist/PunchlistProblemSolution";
import { PunchlistHeroVisual } from "@/components/sections/punchlist/PunchlistHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Camera, Send, RefreshCcw, Map, FolderOpen, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Punchlist Software for General Contractors | Zerotone Construct",
  description: "Photo based punchlists, sub assignment, reinspection tracking, and automated closeout binders. Construction punchlist software for GCs.",
};

const FEATURES = [
  {
    title: "Photo based punch items",
    description: "Walk the job and tap to create a punch item with a photo, location on the floor plan, and trade assignment. No clipboard, no paper.",
    icon: <Camera className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Sub assignment and notification",
    description: "Assign each item to a sub and they get an instant notification with the photo and location. No phone calls to explain what's wrong.",
    icon: <Send className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Reinspection workflow",
    description: "Sub marks an item complete and uploads a photo. You approve or reject with one tap. Rejected items go back to the sub with your note.",
    icon: <RefreshCcw className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Floor plan markup",
    description: "Pin punch items directly to the floor plan. Walk the punchlist in room order: not the order you happened to find things.",
    icon: <Map className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Automated closeout binder",
    description: "At project completion, Zerotone compiles your O&Ms, warranties, attic stock records, and training documentation into a single PDF binder.",
    icon: <FolderOpen className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Warranty tracking",
    description: "Log equipment warranties by trade and system. Get alerts 30 days before warranty expirations. Document your warranty claim process.",
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "3 wks",
    label: "faster to completion",
    description: "Teams using Zerotone digital punchlist complete closeout 3 weeks faster than paper based punchlist processes.",
  },
  {
    value: "70%",
    label: "fewer repeat items",
    description: "Photo based assignments with reinspection approval cut the rate of items that come back open on the second walk.",
  },
  {
    value: "1 click",
    label: "to generate binder",
    description: "Automated binder assembly saves 8–12 hours of document gathering at the end of every project.",
  },
];

const PUNCHLIST_FAQS = [
  {
    question: "What is a punchlist in construction?",
    answer: "A punchlist (or punch list) is a document created near project completion that lists items of work that do not conform to contract specifications and must be corrected before the contractor can receive final payment. It's compiled during a walkthrough with the owner and architect.",
  },
  {
    question: "Can subs complete punchlist items from their phone?",
    answer: "Yes. Subs get a notification with a link. They open it on any device, see the photo and location, do the work, and upload a completion photo. No app download required.",
  },
  {
    question: "Can I create a punchlist before substantial completion?",
    answer: "Absolutely, and you should. Many teams run informal QC walks throughout construction to catch issues before the owner's punch walk. Zerotone supports both QC walks and the formal substantial completion punchlist.",
  },
  {
    question: "Does Zerotone support floor plan markup for punchlist items?",
    answer: "Yes. Upload your as built floor plans and pin punch items directly to the location on the drawing. You can filter the floor plan view by trade, status, or room.",
  },
  {
    question: "What goes into the automated closeout binder?",
    answer: "The binder includes: as built drawings, O&M manuals by system, equipment warranties and serial numbers, attic stock records, training documentation, and the completed punchlist with closure photos. You control what sections to include.",
  },
  {
    question: "Can the owner review the punchlist in Zerotone?",
    answer: "Yes. You can share a view only link with the owner that shows all open and closed items with photos and dates. Most owners find this more useful than a PDF report.",
  },
  {
    question: "Does Zerotone handle warranty calls after turnover?",
    answer: "Yes. The warranty module lets you log calls, assign them to the responsible sub, track resolution, and document the fix. All warranty records are searchable after project closeout.",
  },
];

export default function PunchlistPage() {
  return (
    <>
      <ModuleHero
        badge="CLOSEOUT & PUNCHLIST"
        title={
          <>
            Close out the job <span className="text-primary-800">without the clipboard.</span>
          </>
        }
        description="Photo based punchlists, sub assignment, reinspection approvals, and an automated closeout binder. The last 5% of the job shouldn't take 20% of your time."
        visual={<PunchlistHeroVisual />}
      />
      <PunchlistProblemSolution />
      <ModuleFeaturesGrid
        headline="Get to final completion faster."
        description="Clear communication, photo proof, and automated document assembly."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Accelerate the end of the project."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={PUNCHLIST_FAQS} />
      <ModuleCTA
        headline="Close the job. Get paid. Move on."
        description="20 minute demo. We'll show the punchlist workflow from walk to closeout binder."
      />
    </>
  );
}
