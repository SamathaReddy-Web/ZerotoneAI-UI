"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { helmetAccentMaterial, robotBaseMaterial, robotShellMaterial } from "./materials";

interface RobotProps {
  position: [number, number, number];
  rotationY?: number;
}

/**
 * A small autonomous site-inspection robot — the foreground character
 * that anchors the depth hierarchy (robot → building → crane). Rounded
 * white shell, dark wheeled undercarriage, one blue "sensor" accent —
 * all primitives, no external model/texture.
 */
export function Robot({ position, rotationY = 0 }: RobotProps) {
  const baseGeometry = useMemo(() => new THREE.CylinderGeometry(0.155, 0.17, 0.09, 20), []);
  const wheelGeometry = useMemo(() => new THREE.CylinderGeometry(0.05, 0.05, 0.045, 14), []);
  const bodyGeometry = useMemo(() => new THREE.SphereGeometry(0.15, 22, 16), []);
  const bandGeometry = useMemo(() => new THREE.TorusGeometry(0.148, 0.018, 10, 28), []);
  const headGeometry = useMemo(() => new THREE.SphereGeometry(0.075, 18, 14), []);
  const eyeGeometry = useMemo(() => new THREE.SphereGeometry(0.02, 10, 8), []);

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* undercarriage */}
      <mesh position={[0, 0.045, 0]} geometry={baseGeometry} material={robotBaseMaterial} castShadow receiveShadow />
      {[-0.13, 0.13].map((x) =>
        [-0.1, 0.1].map((z) => (
          <mesh
            key={`${x}-${z}`}
            position={[x, 0.023, z]}
            rotation={[Math.PI / 2, 0, 0]}
            geometry={wheelGeometry}
            material={robotBaseMaterial}
            castShadow
          />
        ))
      )}

      {/* rounded body shell, slightly squashed */}
      <mesh
        position={[0, 0.24, 0]}
        scale={[1, 0.86, 1]}
        geometry={bodyGeometry}
        material={robotShellMaterial}
        castShadow
        receiveShadow
      />
      <mesh position={[0, 0.24, 0]} scale={[1, 0.86, 1]} geometry={bandGeometry} material={helmetAccentMaterial} />

      {/* small sensor head + single accent "eye" */}
      <mesh position={[0, 0.37, 0]} geometry={headGeometry} material={robotShellMaterial} castShadow />
      <mesh position={[0, 0.37, 0.068]} geometry={eyeGeometry} material={helmetAccentMaterial} />
    </group>
  );
}
