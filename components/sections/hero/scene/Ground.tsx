"use client";

import { useMemo } from "react";
import * as THREE from "three";
import "@react-three/fiber";
import {
  concreteMaterial,
  formworkMaterial,
  groundMaterial,
  helmetAccentMaterial,
  helmetHarnessMaterial,
  helmetMaterial,
  neonCircuitMaterial,
  safetyOrangeMaterial,
  safetyYellowMaterial,
  steelMaterial,
} from "./materials";

const SITE_SIZE = 16;
const SLAB_THICKNESS = 0.15;

interface GroundProps {
  y: number;
}

/** Precast concrete barrier beams with realistic cylindrical hollow-core holes */
function PrecastBarrierStack({ position }: { position: [number, number, number] }) {
  const beamGeo = useMemo(() => new THREE.BoxGeometry(2.6, 0.38, 0.48), []);
  const holeGeo = useMemo(() => new THREE.CylinderGeometry(0.09, 0.09, 0.5, 16), []);

  return (
    <group position={position} rotation={[0, 0.38, 0]}>
      {/* Bottom layer - 2 parallel beams */}
      <group position={[0, 0.19, -0.26]}>
        <mesh geometry={beamGeo} material={concreteMaterial} castShadow receiveShadow />
        <mesh position={[-0.8, 0, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={holeGeo} material={steelMaterial} />
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={holeGeo} material={steelMaterial} />
        <mesh position={[0.8, 0, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={holeGeo} material={steelMaterial} />
      </group>
      <group position={[0, 0.19, 0.26]}>
        <mesh geometry={beamGeo} material={concreteMaterial} castShadow receiveShadow />
        <mesh position={[-0.8, 0, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={holeGeo} material={steelMaterial} />
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={holeGeo} material={steelMaterial} />
        <mesh position={[0.8, 0, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={holeGeo} material={steelMaterial} />
      </group>
      {/* Top layer - 1 beam spanning center */}
      <group position={[0.08, 0.57, 0]}>
        <mesh geometry={beamGeo} material={concreteMaterial} castShadow receiveShadow />
        <mesh position={[-0.8, 0, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={holeGeo} material={steelMaterial} />
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={holeGeo} material={steelMaterial} />
        <mesh position={[0.8, 0, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={holeGeo} material={steelMaterial} />
      </group>
    </group>
  );
}

/** Glowing AI circuit data pathways running on the blueprint grid */
function GlowingCircuitTraces() {
  const traces = useMemo(() => {
    return [
      // Main trunk lines flowing to the building foundation
      { start: [-4.2, 3.2], mid: [-1.8, 3.2], end: [-1.8, 1.4] },
      { start: [-1.8, 1.4], mid: [-0.6, 1.4], end: [-0.6, 0.6] },
      { start: [3.4, 3.8], mid: [2.2, 3.8], end: [2.2, 1.8] },
      { start: [2.2, 1.8], mid: [1.4, 1.8], end: [1.4, 0.5] },
      { start: [4.0, 1.2], mid: [2.8, 1.2], end: [1.8, 0.6] },
      // Branch connecting toward the foreground helmet
      { start: [-0.6, 4.4], mid: [0.8, 4.4], end: [0.8, 3.2] },
      { start: [0.8, 3.2], mid: [1.4, 3.2], end: [1.4, 2.6] },
      { start: [-2.5, 4.0], mid: [-1.0, 4.0], end: [-1.0, 3.0] },
    ];
  }, []);

  return (
    <group position={[0, 0.006, 0]}>
      {traces.map((t, i) => (
        <group key={`trace-${i}`}>
          <mesh
            position={[(t.start[0] + t.mid[0]) / 2, 0, t.start[1]]}
            geometry={new THREE.BoxGeometry(Math.abs(t.mid[0] - t.start[0]), 0.008, 0.035)}
            material={neonCircuitMaterial}
          />
          <mesh
            position={[t.mid[0], 0, (t.mid[1] + t.end[1]) / 2]}
            geometry={new THREE.BoxGeometry(0.035, 0.008, Math.abs(t.end[1] - t.mid[1]))}
            material={neonCircuitMaterial}
          />
          {/* Glowing node junction dot */}
          <mesh
            position={[t.end[0], 0.015, t.end[1]]}
            geometry={new THREE.CylinderGeometry(0.05, 0.05, 0.02, 12)}
            material={neonCircuitMaterial}
          />
        </group>
      ))}
    </group>
  );
}

/**
 * Photorealistic White Safety Hardhat matching the reference design:
 * - High-poly smooth dome shell with glossy specular reflections
 * - Flanged contoured brim with front visor peak
 * - Central spine reinforcement ridge along crown
 * - Dual lateral aerodynamic vent flutes
 * - Dark interior suspension harness visible at base
 */
export function Helmet({ position, rotationY = 0 }: { position: [number, number, number]; rotationY?: number }) {
  // Main Dome Shell (32x24 segments for butter-smooth curve)
  const domeGeometry = useMemo(
    () => new THREE.SphereGeometry(0.3, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.54),
    []
  );
  // Visor Brim
  const brimGeometry = useMemo(() => new THREE.CylinderGeometry(0.34, 0.35, 0.025, 32), []);
  const frontVisorGeo = useMemo(() => new THREE.BoxGeometry(0.24, 0.02, 0.12), []);
  // Reinforcement Crown Ridge
  const crownRidgeGeo = useMemo(() => new THREE.BoxGeometry(0.05, 0.04, 0.52), []);
  const sideFluteGeo = useMemo(() => new THREE.BoxGeometry(0.035, 0.025, 0.36), []);
  // Interior Suspension Harness Rim
  const harnessRingGeo = useMemo(() => new THREE.CylinderGeometry(0.28, 0.28, 0.05, 28, 1, true), []);

  // Company Logo texture & material
  const logoTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const loader = new THREE.TextureLoader();
    const tex = loader.load("/logo-mark-transparent.png");
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }, []);

  const logoMaterial = useMemo(() => {
    if (!logoTexture) return helmetAccentMaterial;
    return new THREE.MeshStandardMaterial({
      map: logoTexture,
      transparent: true,
      roughness: 0.15,
      metalness: 0.05,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
  }, [logoTexture]);

  const frontLogoGeo = useMemo(() => new THREE.PlaneGeometry(0.12, 0.12), []);
  const sideLogoGeo = useMemo(() => new THREE.PlaneGeometry(0.10, 0.10), []);

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* 1. Glossy White Dome Shell */}
      <mesh geometry={domeGeometry} material={helmetMaterial} castShadow receiveShadow />

      {/* 2. Perimeter Flanged Brim */}
      <mesh position={[0, -0.01, 0]} geometry={brimGeometry} material={helmetMaterial} castShadow />
      {/* Front Visor Extension Peak */}
      <mesh position={[0, -0.015, 0.28]} rotation={[-0.1, 0, 0]} geometry={frontVisorGeo} material={helmetMaterial} castShadow />

      {/* 3. Central Crown Reinforcement Ridge */}
      <mesh position={[0, 0.22, 0.02]} geometry={crownRidgeGeo} material={helmetMaterial} castShadow />
      {/* Left and Right Side Flutes */}
      <mesh position={[-0.14, 0.16, 0.02]} rotation={[0, 0, 0.2]} geometry={sideFluteGeo} material={helmetMaterial} />
      <mesh position={[0.14, 0.16, 0.02]} rotation={[0, 0, -0.2]} geometry={sideFluteGeo} material={helmetMaterial} />

      {/* 4. Dark Interior Suspension Base */}
      <mesh position={[0, -0.025, 0]} geometry={harnessRingGeo} material={helmetHarnessMaterial} />

      {/* 5. Company Logo on FRONT */}
      <mesh
        position={[0, 0.125, 0.268]}
        rotation={[-0.38, 0, 0]}
        geometry={frontLogoGeo}
        material={logoMaterial}
      />

      {/* 6. Company Logo on RIGHT SIDE */}
      <mesh
        position={[0.268, 0.115, 0]}
        rotation={[0, Math.PI / 2, -0.22]}
        geometry={sideLogoGeo}
        material={logoMaterial}
      />

      {/* 7. Company Logo on LEFT SIDE */}
      <mesh
        position={[-0.268, 0.115, 0]}
        rotation={[0, -(Math.PI / 2), 0.22]}
        geometry={sideLogoGeo}
        material={logoMaterial}
      />
    </group>
  );
}

/** Rolled Blueprint Cylinders */
export function Blueprints({ position, rotationY = 0 }: { position: [number, number, number]; rotationY?: number }) {
  const paperGeo = useMemo(() => new THREE.CylinderGeometry(0.045, 0.045, 0.7, 16), []);
  const bandGeo = useMemo(() => new THREE.CylinderGeometry(0.048, 0.048, 0.04, 16), []);

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <mesh position={[-0.06, 0.045, 0]} rotation={[Math.PI / 2, 0.12, 0]} geometry={paperGeo} material={helmetMaterial} castShadow />
      <mesh position={[-0.06, 0.045, 0]} rotation={[Math.PI / 2, 0.12, 0]} geometry={bandGeo} material={helmetAccentMaterial} />

      <mesh position={[0.06, 0.045, 0.04]} rotation={[Math.PI / 2, -0.22, 0]} geometry={paperGeo} material={helmetMaterial} castShadow />
      <mesh position={[0.06, 0.045, 0.04]} rotation={[Math.PI / 2, -0.22, 0]} geometry={bandGeo} material={helmetAccentMaterial} />
    </group>
  );
}

/** Site Pallets with staged concrete materials and hollow blocks */
function StagedConcreteBlocks({ position, rotationY = 0 }: { position: [number, number, number]; rotationY?: number }) {
  const blockGeo = useMemo(() => new THREE.BoxGeometry(0.7, 0.45, 0.55), []);
  const holeGeo = useMemo(() => new THREE.CylinderGeometry(0.09, 0.09, 0.56, 14), []);

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* Concrete block with circular core hole */}
      <mesh position={[0, 0.225, 0]} geometry={blockGeo} material={concreteMaterial} castShadow receiveShadow />
      <mesh position={[0, 0.225, 0]} rotation={[Math.PI / 2, 0, 0]} geometry={holeGeo} material={steelMaterial} />
    </group>
  );
}

export function Ground({ y }: GroundProps) {
  const slabGeometry = useMemo(
    () => new THREE.BoxGeometry(SITE_SIZE, SLAB_THICKNESS, SITE_SIZE),
    []
  );

  return (
    <group position={[0, y - SLAB_THICKNESS / 2, 0]}>
      {/* Site Base Floor Slab */}
      <mesh geometry={slabGeometry} material={groundMaterial} receiveShadow />

      {/* Blueprint Grid Lines */}
      <gridHelper
        args={[SITE_SIZE, SITE_SIZE * 2, "#93c5fd", "#dbeafe"]}
        position={[0, SLAB_THICKNESS / 2 + 0.002, 0]}
      />

      {/* Glowing Blueprint / AI Circuit Traces */}
      <GlowingCircuitTraces />

      {/* Precast Beams Stack on the Left */}
      <PrecastBarrierStack position={[-4.0, SLAB_THICKNESS / 2, 1.4]} />

      {/* Staged Concrete Blocks with holes */}
      <StagedConcreteBlocks position={[3.8, SLAB_THICKNESS / 2, 0.9]} rotationY={-0.3} />
      <StagedConcreteBlocks position={[3.2, SLAB_THICKNESS / 2, 2.6]} rotationY={0.4} />
    </group>
  );
}
