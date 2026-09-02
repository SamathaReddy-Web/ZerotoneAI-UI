import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { AccountingProblemSolution } from "@/components/sections/accounting/AccountingProblemSolution";
import { AccountingHeroVisual } from "@/components/sections/accounting/AccountingHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { BookOpen, Link, Landmark, ReceiptText, LockKeyhole, Building2 } from "lucide-react";

export const metadata = {
  title: "Construction Accounting Software | Zerotone Construct",
  description: "Full double entry general ledger built for construction. AP, AR, bank reconciliation, journal entries, revenue recognition, and 1099 tracking, all tied to the job.",
};

const FEATURES = [
  {
    title: "Full double entry GL",
    description: "A chart of accounts built for construction: assets, liabilities, equity, and job cost revenue and expense accounts. Every transaction posts with a balanced entry, automatically.",
    icon: <BookOpen className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Bills and POs post themselves",
    description: "Approved vendor bills and purchase orders flow straight into AP and the job cost ledger. Nothing gets re-keyed between purchasing and accounting.",
    icon: <Link className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Bank reconciliation built in",
    description: "Import your bank feed, match transactions to recorded payments and deposits, and reconcile by account and by period without leaving the system.",
    icon: <Landmark className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "AR, pay apps & 1099s",
    description: "Owner billing from approved pay applications posts to AR automatically. Vendor payments are tracked against 1099 eligibility all year, forms ready at year end.",
    icon: <ReceiptText className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Period close & controls",
    description: "Lock accounting periods once closed. Entries dated into a closed period route through a reopen request instead of silently changing a closed month.",
    icon: <LockKeyhole className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Revenue recognition & WIP",
    description: "Percentage of completion revenue recognition and WIP schedules calculated from live job cost data, not a spreadsheet rebuilt every month.",
    icon: <Building2 className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "2 days",
    label: "month end close",
    description: "Job costs and GL entries are the same data. Nothing to reconcile between two systems at close.",
  },
  {
    value: "100%",
    label: "traceability",
    description: "Every journal entry links back to the PO, bill, or payment that created it. Full audit trail, no manual journal hunting.",
  },
  {
    value: "0",
    label: "re-keyed transactions",
    description: "Bills, payments, and pay apps post to the GL automatically. Your bookkeeper reviews the numbers instead of retyping them.",
  },
];

const ACCOUNTING_FAQS = [
  {
    question: "Is this a full general ledger, or just job costing that exports to QuickBooks?",
    answer: "It's a full double entry GL: chart of accounts, journal entries, AP, AR, and bank reconciliation all live inside Zerotone. You can still export to QuickBooks or your CPA's format, but you don't need a second system to close your books.",
  },
  {
    question: "How do vendor bills get into the GL?",
    answer: "A bill entered against a PO posts automatically: a debit to the job cost account, a credit to AP. No manual journal entry required.",
  },
  {
    question: "Can I reconcile my bank accounts here?",
    answer: "Yes. Import your bank feed or statement, match transactions to recorded payments and deposits, and reconcile by account and by period.",
  },
  {
    question: "How does revenue recognition work?",
    answer: "Zerotone calculates percentage of completion from live job cost and billing data, and generates the WIP schedule automatically. No manual spreadsheet rebuild each month.",
  },
  {
    question: "Do you handle 1099 tracking?",
    answer: "Yes. Vendor payments are tracked against 1099 eligibility all year, and forms are ready to generate at year end, no separate export and reclassification.",
  },
  {
    question: "Can my bookkeeper still control the close?",
    answer: "Yes. Accounting periods lock once closed. Entries dated into a closed period route through a reopen request instead of quietly changing historical numbers.",
  },
];

export default function AccountingPage() {
  return (
    <>
      <ModuleHero
        badge="ACCOUNTING MODULE"
        title={
          <>
            A general ledger that already knows <span className="text-primary-800">what job it's for.</span>
          </>
        }
        description="Every PO, bill, and payment posts straight to the GL, coded by job and cost code. Bank reconciliation, journal entries, and financial reports, without a second system."
        visual={<AccountingHeroVisual />}
      />
      <AccountingProblemSolution />
      <ModuleFeaturesGrid
        headline="End the month-end reconciliation scramble."
        description="Connect the field to finance. Stop re-keying data."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Close the books in two days."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="Zerotone Construct is a young product running on live construction projects today. We don't publish quotes we can't attribute, ask us on a call and we'll walk you through the real system on a real project instead."
        authorName="The Zerotone team"
        authorTitle="The people who build and run the system"
      />
      <RestOfZerotone />
      <FAQSection items={ACCOUNTING_FAQS} />
      <ModuleCTA
        headline="One ledger. Every job costed, every entry traceable."
        description="20 minute demo. We'll show how bills, payments, and pay apps post straight to the GL."
      />
    </>
  );
}
