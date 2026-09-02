"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Building, BUILDING_FOOTPRINT, BUILDING_HEIGHT } from "./scene/Building";
import { Crane } from "./scene/Crane";
import { Ground, Helmet, Blueprints } from "./scene/Ground";

const GROUND_Y = -BUILDING_HEIGHT / 2;

const [BUILDING_WIDTH, BUILDING_DEPTH] = BUILDING_FOOTPRINT;
const MAST_HEIGHT = BUILDING_HEIGHT * 1.35;
const CRANE_X = -BUILDING_WIDTH * 0.12;
const CRANE_Z = -BUILDING_DEPTH / 2 - 1.1;

interface Scene3DProps {
  reduceMotion?: boolean;
}

function AnimatedForeground({ reduceMotion }: { reduceMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current || reduceMotion) return;
    const t = state.clock.elapsedTime;
    // Gentle subtle idle float
    groupRef.current.position.y = Math.sin(t * 1.8) * 0.03;
    groupRef.current.rotation.y = Math.sin(t * 0.6) * 0.04 - 0.65;
  });

  return (
    <group ref={groupRef}>
      <Helmet position={[0, 0.14, 0]} rotationY={-0.65} />
      <Blueprints position={[0.55, 0.05, 0.25]} rotationY={0.6} />
    </group>
  );
}

export function Scene3D({ reduceMotion = false }: Scene3DProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [14.5, 7.8, 11.2], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <fog attach="fog" args={["#eff6fe", 20, 36]} />

      {/* Warm Golden Key Sunlight */}
      <directionalLight
        position={[12, 15, 10]}
        intensity={2.4}
        color="#fffaf0"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0003}
      >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, 12, -12, 0.1, 45]} />
      </directionalLight>

      {/* Soft Cool Sky Fill */}
      <directionalLight position={[-10, 6, -4]} intensity={0.25} color="#dbeafe" />
      {/* Cool Rim Light */}
      <directionalLight position={[-6, 12, -12]} intensity={0.8} color="#93c5fd" />
      <hemisphereLight args={["#e0f2fe", "#1e293b", 0.5]} />

      <Suspense fallback={null}>
        <Environment preset="city" environmentIntensity={0.6} resolution={128} background={false} />
      </Suspense>

      {/* The 3D Stepped Building */}
      <Building />

      {/* The 3D Ground & Staged Site Props */}
      <Ground y={GROUND_Y} />

      {/* Blue Tower Crane */}
      <group position={[CRANE_X, GROUND_Y, CRANE_Z]}>
        <Crane mastHeight={MAST_HEIGHT} reduceMotion={reduceMotion} />
      </group>

      {/* Foreground Hero Helmet & Blueprints */}
      <group scale={3.5} position={[1.2, GROUND_Y, 3.85]}>
        <AnimatedForeground reduceMotion={reduceMotion} />
      </group>

      {/* High-quality Ground Contact Shadows */}
      <ContactShadows
        position={[0, GROUND_Y + 0.001, 0]}
        opacity={0.45}
        scale={14}
        blur={2}
        far={4}
        color="#0f172a"
        frames={1}
      />

      {/* Interactive 3D Orbit Controls allowing full rotation */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reduceMotion}
        autoRotateSpeed={0.35}
        maxPolarAngle={Math.PI / 2.05}
        minPolarAngle={Math.PI / 5}
        dampingFactor={0.05}
        target={[0, 0.8, 0]}
      />
    </Canvas>
  );
}
