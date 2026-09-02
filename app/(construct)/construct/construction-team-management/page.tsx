import { ModuleHero } from "@/components/ui/modules/ModuleHero";
import { ModuleFeaturesGrid } from "@/components/ui/modules/ModuleFeaturesGrid";
import { ModuleMetrics } from "@/components/ui/modules/ModuleMetrics";
import { ModuleTestimonial } from "@/components/ui/modules/ModuleTestimonial";
import { ModuleCTA } from "@/components/ui/modules/ModuleCTA";
import { TeamProblemSolution } from "@/components/sections/team/TeamProblemSolution";
import { TeamHeroVisual } from "@/components/sections/team/TeamHeroVisual";
import { RestOfZerotone } from "@/components/sections/RestOfZerotone";
import { FAQSection } from "@/components/sections/FAQSection";

import { Users, ShieldCheck, DollarSign, History, Key, Smartphone } from "lucide-react";

export const metadata = {
  title: "Construction Team Management Software | Zerotone Construct",
  description: "Manage user accounts, assign roles, control permissions per module. Set approval authority by dollar threshold. Activity logging.",
};

const FEATURES = [
  {
    title: "User & role management",
    description: "Add users, assign roles (Admin, PM, Estimator, Accounting, Superintendent, etc.). Deactivate users without deleting history.",
    icon: <Users className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Module level permissions",
    description: "Control access per module: RFI (view/edit/approve), Budget (view only), Change Orders (edit), Purchasing (approve). Granular control.",
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Approval authority thresholds",
    description: "Set dollar limits per role. PM can approve POs up to $50K. CFO approves anything over $50K. System enforces limits.",
    icon: <DollarSign className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Activity log & audit trail",
    description: "See who accessed what, when, and what they changed. Full audit trail for compliance. Login history.",
    icon: <History className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "SSO & API access",
    description: "Single sign on (Okta, Azure AD) for enterprise security. API keys for integrations. Revoke anytime.",
    icon: <Key className="h-6 w-6" strokeWidth={2} />,
  },
  {
    title: "Mobile & field access",
    description: "Field users can log in from phone or tablet. Same permissions as desktop. Work offline when needed.",
    icon: <Smartphone className="h-6 w-6" strokeWidth={2} />,
  },
];

const METRICS = [
  {
    value: "100%",
    label: "secure access control",
    description: "Role based permissions + dollar limits + audit trail. No unauthorized access.",
  },
  {
    value: "5 min",
    label: "to onboard a new user",
    description: "Add email, assign role, set permissions. User gets invite link. No manual provisioning.",
  },
  {
    value: "0",
    label: "compliance violations",
    description: "Full audit trail. Document every approval, edit, and access for your accountant and auditors.",
  },
];

const TEAM_FAQS = [
  {
    question: "What roles does Zerotone provide?",
    answer: "Admin (full access), PM (most functions, limited approvals), Estimator (estimate/cost codes only), Accounting (financial modules), Superintendent (field/daily logs), Architect/Designer (RFI/design modules), View Only (dashboard only). Customize as needed.",
  },
  {
    question: "How do module level permissions work?",
    answer: "Example: An Estimator can view and edit estimates and cost codes, but can't view budgets or POs. A Superintendent can view and log daily logs, but can't edit estimates. Permissions per role per module.",
  },
  {
    question: "What is approval authority?",
    answer: "A dollar limit tied to a role. PM can approve POs up to $50K. CFO approves $50K+. When a user tries to approve above their limit, system rejects it and escalates.",
  },
  {
    question: "Can I track user activity?",
    answer: "Yes. Activity log shows who did what, when, and what changed. Login history tracks access. Export for compliance audits.",
  },
  {
    question: "Does Zerotone support SSO?",
    answer: "Yes. Okta, Azure AD, Google Workspace. Users log in with their corporate credentials. No separate passwords to manage.",
  },
  {
    question: "Can field supers work offline?",
    answer: "Yes. Mobile app caches data. Supers can log activities and activities offline. Sync when they reconnect.",
  },
];

export default function TeamManagementPage() {
  return (
    <>
      <ModuleHero
        badge="USERS & ROLES"
        title={
          <>
            Control who sees what. <span className="text-primary-800">Enforce approval limits.</span>
          </>
        }
        description="Role based permissions. Dollar thresholds for approvals. Full activity log. Secure access from day one."
        visual={<TeamHeroVisual />}
      />
      <TeamProblemSolution />
      <ModuleFeaturesGrid
        headline="Give your team the exact access they need. Nothing more."
        description="Granular controls, dollar limits, and an immutable audit trail."
        features={FEATURES}
      />
      <ModuleMetrics
        headline="Secure your business data."
        metrics={METRICS}
      />
      <ModuleTestimonial
        quote="We set roles once. PM can approve up to their limit. Finance sees only what they need. Auditors ask for a report, we export the activity log. Compliance became easy."
        authorName="Michael T."
        authorTitle="IT Director · Northeast Builders Collective, MA"
      />
      <RestOfZerotone />
      <FAQSection items={TEAM_FAQS} />
      <ModuleCTA
        headline="Secure access. Clear roles. Audit proof."
        description="20 minute demo. See role based permissions and activity logs."
      />
    </>
  );
}
