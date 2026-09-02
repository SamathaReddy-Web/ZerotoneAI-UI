import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { RfiProblemSolution } from "@/components/sections/rfi/RfiProblemSolution";
import { RfiHeroVisual } from "@/components/sections/rfi/RfiHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { GitMerge, Clock, Smartphone, Search, PenTool, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Construction RFI Software | Zerotone Construct",
  description: "Track every construction RFI with auto assignment by trade, 7 day response timer, and full audit trail. Built for GCs and subs.",
};

const FEATURES = [
  {
    title: "Auto assignment by trade",
    description: "Submit an RFI and Zerotone routes it to the right party based on CSI division. No more 'who owns this?' threads.",
    icon: <GitMerge className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Built in 7 day SLA tracker",
    description: "Industry standard response timer on every RFI. See aging questions before they impact the project schedule.",
    icon: <Clock className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Field to office in 30 seconds",
    description: "Supers submit from their phone with photos and drawing markups. Office team responds without leaving Zerotone.",
    icon: <Smartphone className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Searchable RFI log",
    description: "Pull a full project RFI log in one click. Filter by trade, phase, status, or assignee. Export to PDF for closeout.",
    icon: <Search className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Drawing markup attached",
    description: "Snap a photo, circle the issue, attach to the RFI. No more 'see attached drawing' with a missing PDF.",
    icon: <PenTool className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Full audit trail",
    description: "Every submission, response, edit, and viewer logged with timestamp. Bulletproof when disputes come up, and rolls into your project closeout binder.",
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "60%",
    label: "faster response time",
    description: "vs. email based RFI workflows, typical for teams moving off inbox-and-spreadsheet tracking.",
  },
  {
    value: "2 days",
    label: "saved per week",
    description: "Field super hours redirected from chasing answers to building. Measured across GC teams in the first quarter.",
  },
  {
    value: "0 RFIs",
    label: "lost in transit",
    description: "Every question tracked from submission to close out. Nothing buried in an email thread from three months ago.",
  },
];

const RFI_FAQS = [
  {
    question: "What is an RFI in construction?",
    answer: "A Request for Information (RFI) is a formal question submitted by a contractor, subcontractor, or owner asking for clarification on contract documents: drawings, specs, or scope. Unmanaged RFIs are one of the leading causes of schedule delays and cost disputes on commercial projects.",
  },
  {
    question: "What's a typical RFI response time?",
    answer: "The industry standard is 7 calendar days. In practice, email based workflows average 12–18 days. Zerotone starts a 7 day timer automatically and surfaces aging items on the dashboard before they slip past the SLA.",
  },
  {
    question: "How is RFI software different from a shared spreadsheet?",
    answer: "A spreadsheet tracks what you type in: it doesn't route questions, enforce response timelines, attach markups, or log who changed what and when. Zerotone auto assigns by trade, stores all attachments, and generates a timestamped audit trail that stands up in a dispute.",
  },
  {
    question: "Can my subcontractors submit RFIs through Zerotone?",
    answer: "Yes. Subs get free access to a dedicated portal where they can submit RFIs, attach photos and markups, and track response status: without paying for a seat. You control what they can see.",
  },
  {
    question: "Do you integrate with Procore, Autodesk, or PlanGrid?",
    answer: "Not yet. Zerotone currently focuses on teams that haven't adopted those platforms: small to mid size GCs running $2M–$50M jobs who need serious RFI tooling without a six figure software budget.",
  },
  {
    question: "Does it work offline on the jobsite?",
    answer: "Yes. The iOS and Android apps cache your active projects. Your super can draft an RFI, attach photos, and reference drawings with no signal. Everything syncs the moment they reconnect.",
  },
  {
    question: "Can I export my RFI log for closeout?",
    answer: "One click. Export to PDF or Excel: includes RFI number, description, date submitted, assignee, response date, and closure status. It also auto populates the RFI section of your Zerotone closeout binder.",
  },
];

export default function RfiPage() {
  return (
    <>
      <ModuleHero
        badge="RFI MANAGER"
        title={
          <>
            The construction RFI software that <span className="text-primary-800">doesn&apos;t live in your inbox.</span>
          </>
        }
        description="Submit from the field, respond from the office, and close every Request for Information with a full audit trail. Built for GCs and subs who lose two days a week to email threads."
        visual={<RfiHeroVisual />}
      />
      <RfiProblemSolution />
      <ModuleFeaturesGrid
        headline="Track every request in one place."
        description="Every answer, captured. Every dispute, settled."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Stop chasing answers through email."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={RFI_FAQS} />
      <ModuleCTA
        headline="Stop running RFIs through email."
        description="20 minute demo. No slide deck. We'll show RFI Manager running on a real project."
      />
    </>
  );
}
