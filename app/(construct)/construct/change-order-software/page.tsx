import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { ChangeOrderProblemSolution } from "@/components/sections/change-orders/ChangeOrderProblemSolution";
import { ChangeOrderHeroVisual } from "@/components/sections/change-orders/ChangeOrderHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { FileSignature, PenTool, RefreshCw, BarChart3, Clock, DollarSign } from "lucide-react";

export const metadata = {
  title: "Change Order Management Software | Zerotone Construct",
  description: "Generate CORs, collect owner esignatures, and issue sub POs digitally. Full change log and budget impact tracking for construction GCs.",
};

const FEATURES = [
  {
    title: "Digital COR generation",
    description: "Create a Change Order Request from any RFI, PCO, or field directive. Pulls in scope, pricing, and schedule impact automatically.",
    icon: <FileSignature className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Owner esignature workflow",
    description: "Send the COR to the owner via email. They review and esign without logging in. You get a timestamped executed copy in your file.",
    icon: <PenTool className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Sub CO and PO issuance",
    description: "Issue change orders down to subs and back to back purchase orders in the same workflow. No separate forms or PDFs to manage.",
    icon: <RefreshCw className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Lump sum + T&M tracking",
    description: "Price changes as lump sum, unit price, or time and materials. Zerotone tracks T&M daily logs against the approved CO value.",
    icon: <DollarSign className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Change order log",
    description: "Full CO log with status, value, and approval date. Export to AIA G701 format for your contract file.",
    icon: <Clock className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Budget impact tracking",
    description: "Every approved CO updates your job budget automatically. See revised contract value and pending CO exposure in real time.",
    icon: <BarChart3 className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "5 days",
    label: "faster CO approval",
    description: "Digital approval workflows cut the average time from COR submission to executed CO from 12 days to 7.",
  },
  {
    value: "100%",
    label: "CO capture rate",
    description: "Teams using Zerotone CO tracking capture every billable change: no more verbal approvals that get disputed later.",
  },
  {
    value: "$0",
    label: "in unapproved disputes",
    description: "Esigned approvals with timestamps mean no more 'the owner said it was OK' disagreements at the end of the job.",
  },
];

const CO_FAQS = [
  {
    question: "What is a change order in construction?",
    answer: "A change order (CO) is a written amendment to the original construction contract that modifies the scope, price, or schedule. COs can be initiated by the owner, architect, or contractor and require written approval before work proceeds. Undocumented changes are the single biggest source of disputes in commercial construction.",
  },
  {
    question: "What's the difference between a PCO, COR, and CO?",
    answer: "A PCO (Potential Change Order) or COR (Change Order Request) is the contractor's notice to the owner that a change may be coming and its likely cost. A CO (Change Order) is the executed agreement. Zerotone tracks all three stages and the transitions between them.",
  },
  {
    question: "Does Zerotone support T&M (time and materials) change orders?",
    answer: "Yes. You can open a T&M CO, and your field team logs daily labor hours and material receipts against it. Zerotone tracks running cost vs. approved CO value and alerts you when you're approaching the cap.",
  },
  {
    question: "Can the owner esign from their phone?",
    answer: "Yes. The owner receives an email with a secure link. They can review the CO, add comments, and esign from any device: no Zerotone account required.",
  },
  {
    question: "Does an approved CO automatically update my budget?",
    answer: "Yes. When a CO moves to 'executed' status, the approved value posts to your job budget and updates the revised contract value. Your cost codes update automatically if scope was assigned during CO creation.",
  },
  {
    question: "Can I generate AIA G701 forms from Zerotone?",
    answer: "Yes. Zerotone generates G701 (Change Order) and G714 (Construction Change Directive) formats from your CO data. Most owners and architects accept these for the official contract file.",
  },
];

export default function ChangeOrderPage() {
  return (
    <>
      <ModuleHero
        badge="CHANGE ORDERS & POs"
        title={
          <>
            Issue, approve, and track changes <span className="text-primary-800">without printing a thing.</span>
          </>
        }
        description="From the first PCO to the executed CO and back to back sub PO: one digital workflow. No PDFs emailed back and forth. No disputes about what was approved."
        visual={<ChangeOrderHeroVisual />}
      />
      <ChangeOrderProblemSolution />
      <ModuleFeaturesGrid
        headline="No more verbal approvals."
        description="Every change documented, priced, signed, and applied to the budget."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Get paid for the work you do."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={CO_FAQS} />
      <ModuleCTA
        headline="Every change, documented and executed."
        description="20 minute demo. We'll walk through a CO workflow from PCO to executed agreement."
      />
    </>
  );
}
