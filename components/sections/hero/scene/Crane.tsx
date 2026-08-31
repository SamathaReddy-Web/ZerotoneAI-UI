"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { craneGreyMaterial, craneYellowMaterial, counterweightMaterial, steelMaterial } from "./materials";

const MAST_WIDTH = 0.3;
const SEGMENT_HEIGHT = 1.15;
const POST_RADIUS = 0.04;
const BRACE_WIDTH = 0.032;
const JIB_LENGTH = 5.4;
const COUNTER_JIB_LENGTH = 1.9;
const JIB_DEPTH_BELOW_APEX = 0.45;
// Truss depth of the jib/counter-jib lattice beams — thin, not a solid box.
const BOOM_TRUSS_DEPTH = 0.2;
const BOOM_SEGMENT_LENGTH = 0.45;

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
          material={craneYellowMaterial}
          castShadow
        />
      ))}
      {rings.transforms.map((t, i) => (
        <mesh
          key={i}
          position={t.position}
          rotation={[0, t.rotationY, 0]}
          geometry={rings.geometry}
          material={craneYellowMaterial}
        />
      ))}
      {braces.items.map((b, i) => (
        <mesh
          key={i}
          position={b.position}
          quaternion={b.quaternion}
          scale={[b.scaleX, 1, 1]}
          geometry={braces.geometry}
          material={craneYellowMaterial}
        />
      ))}
    </group>
  );
}

/** A thin horizontal truss (top chord + bottom chord + verticals +
 * zigzag diagonals), spanning -length/2..+length/2 along local X — the
 * jib/counter-jib built the same lattice way as the mast, instead of a
 * solid box beam, so the boom actually reads as a crane truss. */
function LatticeBeam({ length, material }: { length: number; material: THREE.Material }) {
  const segments = Math.max(2, Math.round(length / BOOM_SEGMENT_LENGTH));
  const segLen = length / segments;
  const halfDepth = BOOM_TRUSS_DEPTH / 2;

  const chordGeometry = useMemo(() => new THREE.BoxGeometry(length, BRACE_WIDTH, BRACE_WIDTH), [length]);
  const postGeometry = useMemo(
    () => new THREE.BoxGeometry(BRACE_WIDTH, BOOM_TRUSS_DEPTH, BRACE_WIDTH),
    []
  );
  const braceGeometry = useMemo(() => new THREE.BoxGeometry(1, BRACE_WIDTH, BRACE_WIDTH), []);

  const posts = useMemo(() => {
    const items: number[] = [];
    for (let i = 0; i <= segments; i++) items.push(-length / 2 + i * segLen);
    return items;
  }, [segments, segLen, length]);

  const diagonals = useMemo(() => {
    const items: { position: [number, number, number]; quaternion: THREE.Quaternion; scaleX: number }[] =
      [];
    for (let i = 0; i < segments; i++) {
      const xFrom = -length / 2 + i * segLen;
      const xTo = -length / 2 + (i + 1) * segLen;
      const flip = i % 2 === 0;
      const from = new THREE.Vector3(xFrom, flip ? -halfDepth : halfDepth, 0);
      const to = new THREE.Vector3(xTo, flip ? halfDepth : -halfDepth, 0);
      const t = braceTransform(from, to);
      items.push({ position: t.position, quaternion: t.quaternion, scaleX: t.length });
    }
    return items;
  }, [segments, segLen, length, halfDepth]);

  return (
    <group>
      <mesh position={[0, halfDepth, 0]} geometry={chordGeometry} material={material} castShadow />
      <mesh position={[0, -halfDepth, 0]} geometry={chordGeometry} material={material} castShadow />
      {posts.map((x, i) => (
        <mesh key={i} position={[x, 0, 0]} geometry={postGeometry} material={material} />
      ))}
      {diagonals.map((d, i) => (
        <mesh
          key={i}
          position={d.position}
          quaternion={d.quaternion}
          scale={[d.scaleX, 1, 1]}
          geometry={braceGeometry}
          material={material}
        />
      ))}
    </group>
  );
}

// Arbitrary fixed offset, not Math.random() — a phase constant needs no
// randomness (it's the same slow sway either way) and calling an impure
// function during render is a React purity violation.
const SWAY_PHASE = 1.7;

export function Crane({ mastHeight, reduceMotion = false }: CraneProps) {
  const slewRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!slewRef.current || reduceMotion) return;
    const t = state.clock.elapsedTime;
    slewRef.current.rotation.y = Math.sin(t * 0.12 + SWAY_PHASE) * 0.06;
  });

  const jibY = mastHeight - JIB_DEPTH_BELOW_APEX;

  const cabGeometry = useMemo(() => new THREE.BoxGeometry(0.4, 0.32, 0.32), []);
  const counterweightGeometry = useMemo(() => new THREE.BoxGeometry(0.5, 0.4, 0.4), []);
  const hookCableGeometry = useMemo(() => new THREE.CylinderGeometry(0.024, 0.024, 1, 6), []);
  const hookBlockGeometry = useMemo(() => new THREE.BoxGeometry(0.16, 0.2, 0.16), []);

  const hookDrop = mastHeight * 0.26;
  const hookX = -JIB_LENGTH * 0.7;

  const supportCable = (tipX: number, tipY: number) => {
    const from = new THREE.Vector3(0, jibY + 0.32, 0);
    const to = new THREE.Vector3(tipX, tipY, 0);
    return braceTransform(from, to);
  };
  const mainCable = useMemo(() => supportCable(-JIB_LENGTH * 0.88, jibY), [jibY]);
  const counterCable = useMemo(() => supportCable(COUNTER_JIB_LENGTH * 0.85, jibY), [jibY]);
  // Box, not cylinder: braceTransform's quaternion rotates FROM the local
  // X-axis, so the geometry it's applied to must be X-axis-aligned by
  // default (as BoxGeometry(length, w, w) is) — a cylinder defaults to
  // Y-axis and would need a different transform.
  const cableGeometry = useMemo(() => new THREE.BoxGeometry(1, 0.022, 0.022), []);

  return (
    <group>
      <MastLattice height={mastHeight} />

      <group ref={slewRef} position={[0, jibY, 0]}>
        {/* Apex mast stub the jib/counter-jib pivot from */}
        <mesh position={[0, 0.32, 0]} geometry={cabGeometry} material={craneGreyMaterial} castShadow />

        <group position={[-JIB_LENGTH / 2, 0, 0]}>
          <LatticeBeam length={JIB_LENGTH} material={craneYellowMaterial} />
        </group>
        <group position={[COUNTER_JIB_LENGTH / 2, 0, 0]}>
          <LatticeBeam length={COUNTER_JIB_LENGTH} material={craneYellowMaterial} />
        </group>
        <mesh
          position={[COUNTER_JIB_LENGTH - 0.16, -0.1, 0]}
          geometry={counterweightGeometry}
          material={counterweightMaterial}
          castShadow
        />
        {/* Operator cab, slung just under the apex toward the working side */}
        <mesh position={[-0.75, -0.26, 0]} geometry={cabGeometry} material={craneGreyMaterial} castShadow />

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
          material={craneGreyMaterial}
          castShadow
        />
      </group>
    </group>
  );
}
