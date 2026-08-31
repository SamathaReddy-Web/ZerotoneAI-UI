"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { craneBlueMaterial, steelMaterial } from "./materials";

const MAST_WIDTH = 0.42;
const SEGMENT_HEIGHT = 1.4;
const POST_RADIUS = 0.055;
const BRACE_WIDTH = 0.055;
const JIB_LENGTH = 6;
const COUNTER_JIB_LENGTH = 2.2;
const JIB_DEPTH_BELOW_APEX = 0.6;

interface CraneProps {
  mastHeight: number;
  reduceMotion?: boolean;
}

const HALF = MAST_WIDTH / 2;
// Corner order matters: consecutive entries must be adjacent (share a mast
// face) so the diagonal-brace loop below connects real edges, not diagonals
// across the mast.
const CORNERS: [number, number][] = [
  [-HALF, -HALF],
  [HALF, -HALF],
  [HALF, HALF],
  [-HALF, HALF],
];

function braceTransform(
  from: THREE.Vector3,
  to: THREE.Vector3
): { position: [number, number, number]; quaternion: THREE.Quaternion; length: number } {
  const mid = from.clone().add(to).multiplyScalar(0.5);
  const dir = to.clone().sub(from);
  const length = dir.length();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(1, 0, 0),
    dir.normalize()
  );
  return { position: [mid.x, mid.y, mid.z], quaternion, length };
}

/** A lattice tower: 4 corner posts, a square ring every segment, and one
 * diagonal brace per face per segment (alternating direction), instead of
 * a solid box — reads as an actual tower crane silhouette, not a pillar. */
function MastLattice({ height }: { height: number }) {
  const segments = Math.ceil(height / SEGMENT_HEIGHT);

  const postGeometry = useMemo(
    () => new THREE.CylinderGeometry(POST_RADIUS, POST_RADIUS, height, 6),
    [height]
  );

  const rings = useMemo(() => {
    // Four edge segments per level (not two boxes through the center) so
    // this actually reads as a square ring connecting the 4 corner posts.
    const ringGeo = new THREE.BoxGeometry(MAST_WIDTH, BRACE_WIDTH, BRACE_WIDTH);
    const transforms: { position: [number, number, number]; rotationY: number }[] = [];
    for (let i = 0; i <= segments; i++) {
      const y = Math.min(i * SEGMENT_HEIGHT, height);
      transforms.push({ position: [0, y, -HALF], rotationY: 0 });
      transforms.push({ position: [0, y, HALF], rotationY: 0 });
      transforms.push({ position: [HALF, y, 0], rotationY: Math.PI / 2 });
      transforms.push({ position: [-HALF, y, 0], rotationY: Math.PI / 2 });
    }
    return { geometry: ringGeo, transforms };
  }, [segments, height]);

  const braces = useMemo(() => {
    const geo = new THREE.BoxGeometry(1, BRACE_WIDTH, BRACE_WIDTH);
    const items: { position: [number, number, number]; quaternion: THREE.Quaternion; scaleX: number }[] =
      [];
    for (let i = 0; i < segments; i++) {
      const yBottom = i * SEGMENT_HEIGHT;
      const yTop = Math.min((i + 1) * SEGMENT_HEIGHT, height);
      for (let c = 0; c < 4; c++) {
        const [x1, z1] = CORNERS[c];
        const [x2, z2] = CORNERS[(c + 1) % 4];
        const flip = i % 2 === 0;
        const from = new THREE.Vector3(x1, flip ? yBottom : yTop, z1);
        const to = new THREE.Vector3(x2, flip ? yTop : yBottom, z2);
        const t = braceTransform(from, to);
        items.push({ position: t.position, quaternion: t.quaternion, scaleX: t.length });
      }
    }
    return { geometry: geo, items };
  }, [segments, height]);

  return (
    <group>
      {CORNERS.map(([x, z], i) => (
        <mesh
          key={i}
          position={[x, height / 2, z]}
          geometry={postGeometry}
          material={craneBlueMaterial}
          castShadow
        />
      ))}
      {rings.transforms.map((t, i) => (
        <mesh
          key={i}
          position={t.position}
          rotation={[0, t.rotationY, 0]}
          geometry={rings.geometry}
          material={craneBlueMaterial}
        />
      ))}
      {braces.items.map((b, i) => (
        <mesh
          key={i}
          position={b.position}
          quaternion={b.quaternion}
          scale={[b.scaleX, 1, 1]}
          geometry={braces.geometry}
          material={craneBlueMaterial}
        />
      ))}
    </group>
  );
}

export function Crane({ mastHeight, reduceMotion = false }: CraneProps) {
  const slewRef = useRef<THREE.Group>(null);
  const swayPhase = useRef(Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (!slewRef.current || reduceMotion) return;
    const t = state.clock.elapsedTime;
    slewRef.current.rotation.y = Math.sin(t * 0.12 + swayPhase.current) * 0.06;
  });

  const jibY = mastHeight - JIB_DEPTH_BELOW_APEX;

  const jibGeometry = useMemo(() => new THREE.BoxGeometry(JIB_LENGTH, 0.3, 0.3), []);
  const counterJibGeometry = useMemo(
    () => new THREE.BoxGeometry(COUNTER_JIB_LENGTH, 0.3, 0.3),
    []
  );
  const cabGeometry = useMemo(() => new THREE.BoxGeometry(0.6, 0.45, 0.45), []);
  const counterweightGeometry = useMemo(() => new THREE.BoxGeometry(0.75, 0.6, 0.6), []);
  const hookCableGeometry = useMemo(() => new THREE.CylinderGeometry(0.035, 0.035, 1, 6), []);
  const hookBlockGeometry = useMemo(() => new THREE.BoxGeometry(0.24, 0.3, 0.24), []);

  const hookDrop = mastHeight * 0.28;
  const hookX = -JIB_LENGTH * 0.68;

  const supportCable = (tipX: number, tipY: number) => {
    const from = new THREE.Vector3(0, jibY + 0.5, 0);
    const to = new THREE.Vector3(tipX, tipY, 0);
    return braceTransform(from, to);
  };
  const mainCable = useMemo(() => supportCable(-JIB_LENGTH * 0.85, jibY), [jibY]);
  const counterCable = useMemo(() => supportCable(COUNTER_JIB_LENGTH * 0.85, jibY), [jibY]);
  // Box, not cylinder: braceTransform's quaternion rotates FROM the local
  // X-axis, so the geometry it's applied to must be X-axis-aligned by
  // default (as BoxGeometry(length, w, w) is) — a cylinder defaults to
  // Y-axis and would need a different transform.
  const cableGeometry = useMemo(() => new THREE.BoxGeometry(1, 0.03, 0.03), []);

  return (
    <group>
      <MastLattice height={mastHeight} />

      <group ref={slewRef} position={[0, jibY, 0]}>
        {/* Apex mast stub the jib/counter-jib pivot from */}
        <mesh position={[0, 0.5, 0]} geometry={cabGeometry} material={steelMaterial} castShadow />

        <mesh
          position={[-JIB_LENGTH / 2, 0, 0]}
          geometry={jibGeometry}
          material={craneBlueMaterial}
          castShadow
        />
        <mesh
          position={[COUNTER_JIB_LENGTH / 2, 0, 0]}
          geometry={counterJibGeometry}
          material={craneBlueMaterial}
          castShadow
        />
        <mesh
          position={[COUNTER_JIB_LENGTH - 0.2, -0.15, 0]}
          geometry={counterweightGeometry}
          material={steelMaterial}
          castShadow
        />
        {/* Operator cab, slung just under the apex toward the working side */}
        <mesh position={[-1, -0.35, 0]} geometry={cabGeometry} material={steelMaterial} castShadow />

        <mesh
          position={mainCable.position}
          quaternion={mainCable.quaternion}
          scale={[mainCable.length, 1, 1]}
          geometry={cableGeometry}
          material={steelMaterial}
        />
        <mesh
          position={counterCable.position}
          quaternion={counterCable.quaternion}
          scale={[counterCable.length, 1, 1]}
          geometry={cableGeometry}
          material={steelMaterial}
        />

        <mesh
          position={[hookX, -hookDrop / 2, 0]}
          geometry={hookCableGeometry}
          material={steelMaterial}
          scale={[1, hookDrop, 1]}
        />
        <mesh
          position={[hookX, -hookDrop, 0]}
          geometry={hookBlockGeometry}
          material={steelMaterial}
          castShadow
        />
      </group>
    </group>
  );
}
