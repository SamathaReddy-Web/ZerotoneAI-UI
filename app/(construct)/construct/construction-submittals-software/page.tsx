import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { SubmittalsProblemSolution } from "@/components/sections/submittals/SubmittalsProblemSolution";
import { SubmittalsHeroVisual } from "@/components/sections/submittals/SubmittalsHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { FolderTree, ShieldCheck, FileType, CalendarClock, MessageSquare, Send } from "lucide-react";

export const metadata = {
  title: "Submittal Management Software | Zerotone Construct",
  description: "Track vendor submittals from draft to approval. Compliance tracking, spec section organization, lead time management.",
};

const FEATURES = [
  {
    title: "Spec section organization",
    description: "Submittals organized by CSI spec section (e.g., 05 12: Steel Framing). Easy to find and track by trade.",
    icon: <FolderTree className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Compliance tracking",
    description: "Capture spec compliance, deviations, QA certifications, warranty info, country of origin. Audit trail shows what was reviewed.",
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Manufacturer & product data",
    description: "Store specs, warranty docs, certifications, and technical data on each submittal. No lost PDFs.",
    icon: <FileType className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Lead time & schedule impact",
    description: "Capture lead time and installation date. Dashboard shows critical submittals blocking the schedule.",
    icon: <CalendarClock className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Approval workflow & comments",
    description: "Draft → Submitted → In Review → Approved / Rejected / Revise. Comments and markup attached. Full audit trail.",
    icon: <MessageSquare className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Vendor communication",
    description: "Vendors submit through portal. Notified of approvals or requests to revise. No lost emails.",
    icon: <Send className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "of submittals tracked",
    description: "Every shop drawing has a record. Status, compliance, and schedule impact visible.",
  },
  {
    value: "5 days",
    label: "average review cycle",
    description: "Streamlined process: upload, review, approve. Vendors notified. No chasing.",
  },
  {
    value: "0 late",
    label: "deliveries",
    description: "Dashboard shows critical path submittals. Approve early to keep schedule.",
  },
];

const SUBMITTALS_FAQS = [
  {
    question: "What is a submittal?",
    answer: "A submittal is a vendor's submission of product data, shop drawings, or certifications for approval. E.g., steel beam details, window schedule, mechanical equipment specifications. GC or architect reviews and approves before the item ships or is installed.",
  },
  {
    question: "How do I organize submittals?",
    answer: "By CSI spec section. E.g., all steel submittals in one section, all window submittals in another. Vendors organize by trade, making review faster.",
  },
  {
    question: "What is spec compliance?",
    answer: "Spec compliance means the submittal meets the contract specs: size, material, finish, performance. You mark items as compliant, non compliant, or deviations with approval required.",
  },
  {
    question: "Can vendors submit through Zerotone?",
    answer: "Yes. Vendors have portal access. They upload submittals, attach PDFs, and submit. You get notified. They're notified of approvals or revision requests.",
  },
  {
    question: "How do I capture lead time?",
    answer: "When creating a submittal, enter lead time (e.g., '12 weeks to deliver'). Dashboard flags critical submittals with long lead times that could delay the schedule.",
  },
  {
    question: "What happens after approval?",
    answer: "The submittal is approved and the vendor is notified. The item is cleared to fabricate and ship. Lead time is tracked to ensure on time delivery.",
  },
];

export default function SubmittalsPage() {
  return (
    <>
      <ModuleHero
        badge="SUBMITTALS"
        title={
          <>
            Vendor approvals, on schedule. <span className="text-primary-800">No delays from missing specs.</span>
          </>
        }
        description="Organize submittals by CSI section. Track compliance. Manage lead times. Keep vendors and schedule in sync."
        visual={<SubmittalsHeroVisual />}
      />
      <SubmittalsProblemSolution />
      <ModuleFeaturesGrid
        headline="Approvals that keep the schedule on track."
        description="Organized by spec. Clear compliance. Bulletproof audit trail."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Stop chasing shop drawings."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={SUBMITTALS_FAQS} />
      <ModuleCTA
        headline="Approvals that keep the schedule on track."
        description="20 minute demo. See vendor submissions and approval workflow."
      />
    </>
  );
}
