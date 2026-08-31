"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Building, BUILDING_FOOTPRINT, BUILDING_HEIGHT } from "./scene/Building";
import { CameraRig } from "./scene/CameraRig";
import { Crane } from "./scene/Crane";
import { Ground } from "./scene/Ground";
import { Robot } from "./scene/Robot";

// Flip back to true only to re-check geometry/proportions — it swaps in the
// flat wireframe material and a free-orbit camera for inspection.
const DEBUG_WIREFRAME = false;

const GROUND_Y = -BUILDING_HEIGHT / 2;

const [BUILDING_WIDTH, BUILDING_DEPTH] = BUILDING_FOOTPRINT;
// Tall relative to the now-shorter, wider building — a proper tower crane
// dominates vertically even over a compact mass, per the reference.
const MAST_HEIGHT = BUILDING_HEIGHT * 1.42;
// Positioned behind and slightly to the side of the building (not beside
// it) so the mast rises from behind the mass and the jib reads as
// swinging in over the roof, rather than the crane standing next to the
// building as a separate object.
const CRANE_X = -BUILDING_WIDTH * 0.08;
const CRANE_Z = -BUILDING_DEPTH / 2 - 1.3;

interface Scene3DProps {
  reduceMotion?: boolean;
}

export function Scene3D({ reduceMotion = false }: Scene3DProps) {
  return (
    <Canvas
      shadows
      // Capped at 1 — this scene previously ran at dpr:2 with a 2048px
      // shadow map and a per-frame ContactShadows recompute, which was
      // expensive enough in aggregate to trip a GPU driver TDR reset
      // (confirmed via gl.isContextLost()) a few seconds after mount,
      // which is why the building was disappearing. This budget (dpr 1,
      // 1024px shadow map, ContactShadows baked once via frames={1},
      // low-res Environment PMREM) keeps the same visual language at a
      // fraction of the per-frame GPU cost.
      dpr={1}
      camera={{ position: [16.5, 8, 12.7], fov: 30 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      {/* Matches --primary-50 in app/globals.css so the canvas background
          reads as a continuation of the page, not a separate panel. */}
      <color attach="background" args={["#eff6fe"]} />
      <fog attach="fog" args={["#eff6fe", 20, 36]} />

      {/* 3-point rig, oriented relative to the camera (looking back toward
          the origin from +x/+z) rather than world axes — a light "45°
          left of camera" must sit on the same side as the camera or the
          faces actually in view stay unlit. Key is warmed (golden-hour)
          and raked across the visible +x/+z faces from upper-front-right;
          fill is a faint cool lift from the far side; rim sits behind the
          building (-x/-z), pushed cooler/brighter, to punch a bright edge
          along the silhouette the camera doesn't see face-on — the warm/
          cool split is what gives the render contrast rather than a
          single flat wash of light. The physical site itself stays
          neutral (warm concrete / muted yellow crane) — blue is reserved
          for the floating AI/data layer above the canvas. */}
      <directionalLight
        position={[11, 14, 9]}
        intensity={2.2}
        color="#fff8ef"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0004}
      >
        {/* Widened to cover the crane (now behind the building) and the
            foreground robot, not just the building footprint. */}
        <orthographicCamera attach="shadow-camera" args={[-10, 10, 12, -12, 0.1, 45]} />
      </directionalLight>
      <directionalLight position={[-10, 5, -3]} intensity={0.18} color="#cfe0ff" />
      <directionalLight position={[-7, 10, -13]} intensity={0.75} color="#8fc1ff" />
      <hemisphereLight args={["#dbe7ff", "#2c3a4c", 0.4]} />

      {/* Lighting/reflections only — background stays the flat wash above
          so the canvas keeps reading as a continuation of the page rather
          than a visible sky dome behind the model. Low `resolution` keeps
          the PMREM prefilter pass (a real GPU cost, done once on mount)
          cheap — this scene doesn't need a crisp reflection, just a
          believable ambient tint. Wrapped in its own Suspense so the HDRI
          fetch can't block the rest of the scene from mounting. */}
      <Suspense fallback={null}>
        <Environment preset="city" environmentIntensity={0.5} resolution={64} background={false} />
      </Suspense>

      <Building wireframe={DEBUG_WIREFRAME} />
      <Ground y={GROUND_Y} />
      <group position={[CRANE_X, GROUND_Y, CRANE_Z]}>
        <Crane mastHeight={MAST_HEIGHT} reduceMotion={reduceMotion || DEBUG_WIREFRAME} />
      </group>
      {/* Scaled up from "true to the building" size — a robot built to
          the same scale as the site props would read as barely more than
          a speck at this camera distance; bumping it up is what actually
          gives the foreground → building → crane depth hierarchy its
          punch, matching the reference. */}
      {!DEBUG_WIREFRAME && (
        <group scale={2.4} position={[2.15, GROUND_Y + 0.001, 4.1]}>
          <Robot position={[0, 0, 0]} rotationY={-0.5} />
        </group>
      )}

      {/* frames={1}: bake once instead of re-rendering an offscreen blur
          pass every frame — see the dpr comment above for why this scene
          needs to stay frugal. Nothing that meaningfully changes the
          ground shadow moves after the first frame. */}
      <ContactShadows
        position={[0, GROUND_Y + 0.001, 0]}
        opacity={0.42}
        scale={13}
        blur={2.2}
        far={4}
        color="#0d1b33"
        frames={1}
      />

      {DEBUG_WIREFRAME ? (
        <OrbitControls target={[0, 1.5, 0]} />
      ) : (
        <CameraRig reduceMotion={reduceMotion} />
      )}
    </Canvas>
  );
}
