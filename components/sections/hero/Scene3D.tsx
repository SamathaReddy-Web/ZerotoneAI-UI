"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Building, BUILDING_FOOTPRINT, BUILDING_HEIGHT } from "./scene/Building";
import { Crane } from "./scene/Crane";
import { Ground } from "./scene/Ground";

// Flip back to true only to re-check geometry/proportions — it swaps in the
// flat wireframe material and a free-orbit camera for inspection.
const DEBUG_WIREFRAME = false;

const GROUND_Y = -BUILDING_HEIGHT / 2;

const [BUILDING_WIDTH] = BUILDING_FOOTPRINT;
const MAST_HEIGHT = BUILDING_HEIGHT * 1.35;
const MAST_X = BUILDING_WIDTH / 2 + 1.1;

interface Scene3DProps {
  reduceMotion?: boolean;
}

export function Scene3D({ reduceMotion = false }: Scene3DProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [14, 3, 9], fov: 36 }}
      gl={{ antialias: true }}
    >
      {/* Matches --primary-50 in app/globals.css so the canvas background
          reads as a continuation of the page, not a separate panel. */}
      <color attach="background" args={["#eff6fe"]} />

      {/* 3-point rig, oriented relative to the camera at [13,9,16] (looking
          back toward the origin from +x/+z) rather than world axes — a
          light "45° left of camera" must sit on the same side as the
          camera or the faces actually in view stay unlit. Key rakes across
          the visible +x/+z faces from upper-front-right; fill is a faint
          lift from the far side; rim sits behind the building (-x/-z) to
          catch the silhouette edges the camera doesn't see face-on. */}
      <directionalLight
        position={[10, 13, 8]}
        intensity={1.9}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0003}
      >
        {/* Widened to cover the crane's mast offset and extra height, not
            just the building footprint. */}
        <orthographicCamera attach="shadow-camera" args={[-8, 8, 10, -10, 0.1, 40]} />
      </directionalLight>
      <directionalLight position={[-9, 5, -3]} intensity={0.3} />
      <directionalLight position={[-6, 9, -12]} intensity={0.55} color="#bcd4ff" />
      <hemisphereLight args={["#dbe7ff", "#3a4a5c", 0.45]} />

      <Building wireframe={DEBUG_WIREFRAME} />
      <Ground y={GROUND_Y} />
      <group position={[MAST_X, GROUND_Y, 0]}>
        <Crane mastHeight={MAST_HEIGHT} reduceMotion={reduceMotion || DEBUG_WIREFRAME} />
      </group>

      <ContactShadows
        position={[0, GROUND_Y + 0.001, 0]}
        opacity={0.4}
        scale={11}
        blur={2.2}
        far={4}
        color="#0d1b33"
      />

      {DEBUG_WIREFRAME && <OrbitControls target={[0, 0, 0]} />}
    </Canvas>
  );
}
