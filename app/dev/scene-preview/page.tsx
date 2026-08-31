import { Scene3D } from "@/components/sections/hero/Scene3D";

// Temporary route for reviewing the hero 3D scene in isolation while it's
// being built piece by piece. Not linked from anywhere; delete once
// Scene3D is wired into Hero.tsx for real.
export default function ScenePreviewPage() {
  return (
    <div className="h-screen w-screen bg-[#f0f4ff]">
      <Scene3D />
    </div>
  );
}
