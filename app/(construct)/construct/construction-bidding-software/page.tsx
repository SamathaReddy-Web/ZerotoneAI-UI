import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { BiddingProblemSolution } from "@/components/sections/bidding/BiddingProblemSolution";
import { BiddingHeroVisual } from "@/components/sections/bidding/BiddingHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { PackageOpen, Send, LayoutGrid, ListChecks, Paperclip, FileSignature } from "lucide-react";

export const metadata = {
  title: "Bidding & Precon Software | Zerotone Construct",
  description:
    "Send bid packages to subs, track responses, level bids side by side, and issue digital subcontracts. Construction bidding software for GCs. 14 day free trial.",
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

const BIDDING_FAQS = [
  {
    id: "account",
    question: "Do subs need a Zerotone account to submit a bid?",
    answer: "No. Subs receive a link by email. They click it, download the bid documents, fill out the bid form, and submit: no login, no account creation. This is by design; removing friction gets you more responses.",
  },
  {
    id: "database",
    question: "Can I manage a bid list / sub database in Zerotone?",
    answer: "Yes. Your sub list lives in Zerotone organized by trade and CSI division. When you build a bid package, Zerotone suggests subs from the relevant trades. You can import your existing sub list from CSV.",
  },
  {
    id: "coverage",
    question: "How does the scope coverage matrix work?",
    answer: "When you set up a bid package, you define the scopes you need covered (e.g., concrete, structural, MEP, finishes). The matrix shows which scopes have at least one invited sub, which have responses, and which are still uncovered, so you can chase missing bids before bid day.",
  },
  {
    id: "compare",
    question: "Can I compare bids from multiple subs side by side?",
    answer: "Yes. The bid leveling worksheet lines up all responses and lets you enter scope adjustments (add/deduct) for inclusions and exclusions. The leveled total appears next to each bid so you're comparing apples to apples.",
  },
  {
    id: "bonded",
    question: "Does Zerotone handle bonded and non bonded subs differently?",
    answer: "You can flag which bids require bonding and track whether each sub has confirmed bonding availability. Bonding requirement and cost can be added as a line in the leveling worksheet.",
  },
  {
    id: "itbs",
    question: "Can I issue ITBs (Invitations to Bid) on public projects?",
    answer: "Yes. Zerotone generates formatted ITB letters with project details, bid deadline, and scope summary. These can be sent by email or printed for USPS delivery for public work that requires documented notification.",
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
        visual={<BiddingHeroVisual />}
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
        quote='"Zerotone Construct is a young product running on live construction projects today. We don&apos;t publish quotes we can&apos;t attribute, ask us on a call and we&apos;ll walk you through the real system on a real project instead."'
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={BIDDING_FAQS} />
      <ModuleCTA
        headline="Run a bid you can actually manage."
        description="20 minute demo. We'll walk through a full bid package from invite to executed subcontract."
      />
    </>
  );
}

