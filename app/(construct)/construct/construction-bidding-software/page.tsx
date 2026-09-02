import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { BiddingProblemSolution } from "@/components/sections/bidding/BiddingProblemSolution";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { PackageOpen, Send, LayoutGrid, ListChecks, Paperclip, FileSignature } from "lucide-react";

export const metadata = {
  title: "Bidding & Precon Software | Zerotone Construct",
  description:
    "Send bid packages to subs, collect responses, and sign contracts. A modern, AI-powered construction bidding software.",
};

const BIDDING_FEATURES = [
  {
    title: "Bid package builder",
    description: "Build scope packages by CSI division. Attach drawings, specs, and addenda. Send to your sub list in one click.",
    icon: <PackageOpen className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Sub invite portal",
    description: "Subs receive an email with a secure link to download documents and submit their bid: no Zerotone account required.",
    icon: <Send className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Scope coverage matrix",
    description: "See which scopes have bids and which are uncovered before bid day. No last minute scramble to find a sub for Division 10.",
    icon: <LayoutGrid className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Bid leveling worksheet",
    description: "Line up bids side by side. Flag inclusions and exclusions. Add your own adjustments to put apples to apples numbers on the table.",
    icon: <ListChecks className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Addendum management",
    description: "Issue addenda and notify every bidder automatically. Track which subs have acknowledged the addendum before you award.",
    icon: <Paperclip className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Subcontract eSignature",
    description: "Award a bid and convert it to a subcontract in one step. Sub signs digitally. Executed agreement goes straight into the project file.",
    icon: <FileSignature className="h-6 w-6" strokeWidth={2} />,
  },
];

const BIDDING_METRICS = [
  {
    value: "2x",
    label: "more sub responses",
    description: "Structured bid invites with clear scope packages get 2x the response rate compared to email based invites with PDF attachments.",
  },
  {
    value: "4 hrs",
    label: "saved on bid leveling",
    description: "Side by side bid comparison with scope inclusion/exclusion tracking cuts bid day leveling from a full day to a half morning.",
  },
  {
    value: "1 click",
    label: "from awarded bid to executed subcontract",
    description: "No retyping scope into a contract template. Award the bid in Zerotone and the subcontract is prepopulated and ready to send.",
  },
];

export default function BiddingSoftwarePage() {
  return (
    <>
      <ModuleHero
        badge="BIDDING & PRECON"
        title={
          <>
            Send bid packages to subs, collect responses, <span className="text-primary-800">sign contracts.</span>
          </>
        }
        description="Structured bid invites that get responses. Side by side leveling that catches exclusions. Digital subcontracts that close in hours. Built for GCs who bid multiple projects at once."
      />
      <BiddingProblemSolution />
      <ModuleFeaturesGrid
        headline="Win more work. Award it faster."
        description="From the first ITB to the signed subcontract: in one place."
        features={BIDDING_FEATURES}
      />
      <ModuleMetrics
        headline="What structured bidding looks like."
        metrics={BIDDING_METRICS}
      />
      <ModuleTestimonial
        quote='"Zerotone Construct is a young product running on live construction projects today. We don"t publish quotes we can"t attribute, ask us on a call and we"ll walk you through the real system on a real project instead."'
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection />
      <ModuleCTA
        headline="Run a bid you can actually manage."
        description="20 minute demo. We'll walk through a full bid package from invite to executed subcontract."
      />
    </>
  );
}

