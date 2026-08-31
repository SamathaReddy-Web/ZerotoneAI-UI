"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const BASE_POSITION = new THREE.Vector3(16.5, 8, 12.7);
const LOOK_TARGET = new THREE.Vector3(0, 1.5, 0);
const DAMP_LAMBDA = 3.2;

interface CameraRigProps {
  reduceMotion?: boolean;
}

/**
 * True 3D parallax, not a CSS tilt on the canvas element: reads R3F's own
 * pointer state (normalized to the canvas, so it only reacts while the
 * pointer is actually over the scene) and eases the camera toward a small
 * offset from BASE_POSITION, plus a slow idle drift so the render never
 * looks perfectly static even before the pointer moves.
 */
export function CameraRig({ reduceMotion = false }: CameraRigProps) {
  const { camera } = useThree();
  const current = useRef(BASE_POSITION.clone());

  useFrame((state, delta) => {
    if (reduceMotion) {
      if (!current.current.equals(BASE_POSITION)) {
        camera.position.copy(BASE_POSITION);
        camera.lookAt(LOOK_TARGET);
        current.current.copy(BASE_POSITION);
      }
      return;
    }

    const t = state.clock.elapsedTime;
    const idleX = Math.sin(t * 0.15) * 0.25;
    const idleY = Math.cos(t * 0.12) * 0.12;

    const targetX = BASE_POSITION.x + state.pointer.x * 1.1 + idleX;
    const targetY = BASE_POSITION.y - state.pointer.y * 0.65 + idleY;
    const targetZ = BASE_POSITION.z + state.pointer.y * 0.5;

    current.current.x = THREE.MathUtils.damp(current.current.x, targetX, DAMP_LAMBDA, delta);
    current.current.y = THREE.MathUtils.damp(current.current.y, targetY, DAMP_LAMBDA, delta);
    current.current.z = THREE.MathUtils.damp(current.current.z, targetZ, DAMP_LAMBDA, delta);

    camera.position.copy(current.current);
    camera.lookAt(LOOK_TARGET);
  });

  return null;
}
