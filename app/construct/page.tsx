import { DataFlow } from "@/components/sections/DataFlow";
import { Hero } from "@/components/sections/Hero";
import { ModuleGrid } from "@/components/sections/ModuleGrid";

// Real content starts here (§5.1 Hero, §5.6 Module Grid, Phase 3) plus
// DataFlow (new, no §5.x source). Remaining home sections (§5.2–§5.5,
// §5.7–§5.12 — stats strip, origin, pain, workflow, tour, roles,
// testimonials, pricing, FAQ, CTA form) are later phases.
export default function ConstructHome() {
  return (
    <>
      <Hero />
      <ModuleGrid />
      <DataFlow />
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <p className="font-data text-xs text-text-muted">
          Next: stats strip, origin, pain section, and the platform workflow diagram.
        </p>
      </div>
    </>
  );
}
