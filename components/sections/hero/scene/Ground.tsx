"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { concreteMaterial, groundMaterial, helmetMaterial, steelMaterial } from "./materials";

const SITE_SIZE = 11;
const SLAB_THICKNESS = 0.15;

interface GroundProps {
  y: number;
}

/** A single hard hat: a shell dome plus a brim ring, kept low-poly since
 * it's a small background prop, not a hero object. */
function Helmet({ position }: { position: [number, number, number] }) {
  const domeGeometry = useMemo(
    () => new THREE.SphereGeometry(0.17, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.55),
    []
  );
  const brimGeometry = useMemo(() => new THREE.CylinderGeometry(0.2, 0.2, 0.02, 16), []);
  return (
    <group position={position}>
      <mesh geometry={domeGeometry} material={helmetMaterial} castShadow receiveShadow />
      <mesh position={[0, -0.02, 0]} geometry={brimGeometry} material={helmetMaterial} castShadow />
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
      {/* Placed toward the camera-facing side (+x/+z) so they sit in the
          open ground in front of the building instead of behind it. */}
      <Helmet position={[3.0, SLAB_THICKNESS / 2 + 0.17, 1.1]} />
      <Helmet position={[3.35, SLAB_THICKNESS / 2 + 0.17, 0.55]} />
      <CrateStack position={[1.0, SLAB_THICKNESS / 2, 3.5]} />
    </group>
  );
}
