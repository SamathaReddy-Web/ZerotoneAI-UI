import { DataFlow } from "@/components/sections/DataFlow";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ProductStorySection } from "@/components/sections/ProductStorySection";
import { ConstructionStorySection } from "@/components/sections/ConstructionStorySection";
import { WholeTeamSection } from "@/components/sections/WholeTeamSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HomeCTA } from "@/components/sections/HomeCTA";

// Real content starts here (§5.1 Hero, Phase 3) plus DataFlow (new, no
// §5.x source). Remaining home sections (§5.2–§5.12 — stats strip,
// origin, pain, workflow, module grid, tour, roles, testimonials,
// pricing, FAQ, CTA form) are later phases.
export default function ConstructHome() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProductStorySection />
      <DataFlow />
      <ConstructionStorySection />
      <WholeTeamSection />
      <PricingSection />
      <FAQSection />
      <HomeCTA />
    </>
  );
}

