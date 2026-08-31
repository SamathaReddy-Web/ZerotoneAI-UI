"use client";

import { useMemo } from "react";
import * as THREE from "three";
import {
  concreteMaterial,
  groundMaterial,
  helmetAccentMaterial,
  helmetMaterial,
  safetyOrangeMaterial,
  steelMaterial,
} from "./materials";

const SITE_SIZE = 13;
const SLAB_THICKNESS = 0.15;

interface GroundProps {
  y: number;
}

/** A single hard hat: shell dome, brim ring, and a small flat "Z" mark on
 * the front — the Zerotone brand touch, built as a plain accent mesh
 * (not a texture/decal) so it never depends on a font or image asset
 * loading. Kept low-poly since it's a small background prop. */
function Helmet({ position, rotationY = 0 }: { position: [number, number, number]; rotationY?: number }) {
  const domeGeometry = useMemo(
    () => new THREE.SphereGeometry(0.17, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.55),
    []
  );
  const brimGeometry = useMemo(() => new THREE.CylinderGeometry(0.2, 0.2, 0.02, 16), []);
  const markGeometry = useMemo(() => new THREE.CylinderGeometry(0.045, 0.045, 0.012, 12), []);
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <mesh geometry={domeGeometry} material={helmetMaterial} castShadow receiveShadow />
      <mesh position={[0, -0.02, 0]} geometry={brimGeometry} material={helmetMaterial} castShadow />
      <mesh
        position={[0, 0.06, 0.15]}
        rotation={[Math.PI / 2 + 0.35, 0, 0]}
        geometry={markGeometry}
        material={helmetAccentMaterial}
      />
    </group>
  );
}

/** A stacked pair of site crates — cheap set dressing that reads as
 * "materials staged on site" without pulling in any external model. */
function CrateStack({ position }: { position: [number, number, number] }) {
  const bigGeometry = useMemo(() => new THREE.BoxGeometry(0.8, 0.5, 0.6), []);
  const smallGeometry = useMemo(() => new THREE.BoxGeometry(0.58, 0.4, 0.46), []);
  return (
    <group position={position}>
      <mesh position={[0, 0.25, 0]} geometry={bigGeometry} material={concreteMaterial} castShadow receiveShadow />
      <mesh
        position={[0.06, 0.7, -0.03]}
        rotation={[0, 0.25, 0]}
        geometry={smallGeometry}
        material={steelMaterial}
        castShadow
        receiveShadow
      />
    </group>
  );
}

/** A standing cable reel — a slim core cylinder with two wide flange
 * discs at each end, built along the shared local Y-axis (so no relative
 * rotation is needed between them) then the whole group is tipped 90° so
 * the reel lies on its side like a spool resting on the ground. */
function CableReel({ position }: { position: [number, number, number] }) {
  const coreGeometry = useMemo(() => new THREE.CylinderGeometry(0.07, 0.07, 0.36, 10), []);
  const flangeGeometry = useMemo(() => new THREE.CylinderGeometry(0.26, 0.26, 0.035, 20), []);
  return (
    <group position={position} rotation={[Math.PI / 2, 0, 0]}>
      <mesh geometry={coreGeometry} material={steelMaterial} castShadow receiveShadow />
      <mesh geometry={flangeGeometry} position={[0, -0.18, 0]} material={safetyOrangeMaterial} castShadow receiveShadow />
      <mesh geometry={flangeGeometry} position={[0, 0.18, 0]} material={safetyOrangeMaterial} castShadow receiveShadow />
    </group>
  );
}

/** A short site barrier — the small, unmistakably-a-construction-site
 * prop reference sites always show near the perimeter. */
function Barrier({ position, rotationY = 0 }: { position: [number, number, number]; rotationY?: number }) {
  const panelGeometry = useMemo(() => new THREE.BoxGeometry(0.55, 0.22, 0.03), []);
  const legGeometry = useMemo(() => new THREE.BoxGeometry(0.04, 0.14, 0.04), []);
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <mesh position={[0, 0.2, 0]} geometry={panelGeometry} material={safetyOrangeMaterial} castShadow receiveShadow />
      <mesh position={[-0.22, 0.07, 0]} geometry={legGeometry} material={steelMaterial} castShadow />
      <mesh position={[0.22, 0.07, 0]} geometry={legGeometry} material={steelMaterial} castShadow />
    </group>
  );
}

/** A loose bundle of rebar dowels lying on the ground — thin cylinders
 * clustered together, echoing the exposed rebar up on the building. */
function RebarBundle({ position, rotationY = 0 }: { position: [number, number, number]; rotationY?: number }) {
  const barGeometry = useMemo(() => new THREE.CylinderGeometry(0.018, 0.018, 0.62, 5), []);
  const offsets = useMemo(
    () => [
      [0, 0.018],
      [0.03, 0.05],
      [-0.03, 0.05],
      [0.015, 0.082],
      [-0.015, 0.082],
    ],
    []
  );
  return (
    <group position={position} rotation={[0, rotationY, Math.PI / 2]}>
      {offsets.map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0]} geometry={barGeometry} material={steelMaterial} castShadow receiveShadow />
      ))}
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
      <mesh geometry={slabGeometry} material={groundMaterial} receiveShadow />
      {/* Procedural site grid — three.js's built-in GridHelper, no texture
          asset needed — echoes the blueprint-grid motif used elsewhere in
          this project's design system. */}
      <gridHelper
        args={[SITE_SIZE, SITE_SIZE, "#90caf9", "#c7d9f0"]}
        position={[0, SLAB_THICKNESS / 2 + 0.003, 0]}
      />
      {/* A modest, varied set of staged props toward the camera-facing
          side (+x/+z) — enough to read as a real site without clutter. */}
      <Helmet position={[3.1, SLAB_THICKNESS / 2 + 0.17, 1.2]} rotationY={0.4} />
      <Helmet position={[3.42, SLAB_THICKNESS / 2 + 0.17, 0.62]} rotationY={-0.3} />
      <CrateStack position={[1.1, SLAB_THICKNESS / 2, 3.7]} />
      <CableReel position={[3.6, SLAB_THICKNESS / 2 + 0.17, 2.55]} />
      <RebarBundle position={[-0.6, SLAB_THICKNESS / 2, 3.3]} rotationY={0.5} />
      <Barrier position={[4.1, SLAB_THICKNESS / 2, -0.3]} rotationY={-0.5} />
    </group>
  );
}
