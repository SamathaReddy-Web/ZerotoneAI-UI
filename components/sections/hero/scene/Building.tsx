"use client";

import { useMemo } from "react";
import * as THREE from "three";
import {
  concreteColumnMaterial,
  concreteCoreMaterial,
  concreteMaterial,
  formworkMaterial,
  steelMaterial,
  wireframeMaterial,
} from "./materials";

// Wider, more compact footprint (near-square) and shorter floors than the
// first pass — reads as a grounded architectural mass rather than a tall
// thin frame.
const BAYS_X = 4;
const BAYS_Z = 4;
const BAY_SIZE = 1.7;
const FLOOR_HEIGHT = 0.95;
const FINISHED_FLOORS = 4;
const COLUMN_SIZE = 0.24;
const SLAB_THICKNESS = 0.16;
// The building reads as "actively under construction" through a real
// stage gradient bottom to top: fully enclosed → partially enclosed →
// bare finished frame → exposed rebar on an unfinished top story with no
// floor poured yet (see WALL_STAGES below for the enclosure gradient).
const UNFINISHED_STORIES = 1;

const WIDTH = BAYS_X * BAY_SIZE;
const DEPTH = BAYS_Z * BAY_SIZE;
const TOTAL_HEIGHT = (FINISHED_FLOORS + UNFINISHED_STORIES) * FLOOR_HEIGHT;

// Construction-stage progression, bottom to top — not one enclosed block
// with a bare top, but a real gradient: fully enclosed → partially
// enclosed → bare frame → exposed rebar. Indices are floor numbers
// (0 = ground floor); "sides" is which of the four perimeter faces get
// wall infill on that floor. Floors not listed here (the topmost
// finished floor) get no walls at all — structure complete, not yet
// clad, one step before the bare unfinished story above it.
const WALL_STAGES: { floor: number; sides: Array<"x0" | "x1" | "z0" | "z1"> }[] = [
  { floor: 0, sides: ["x0", "x1", "z0", "z1"] },
  { floor: 1, sides: ["x0", "x1", "z0", "z1"] },
  { floor: 2, sides: ["x0", "z0"] },
];

const EDGE_BEAM_HEIGHT = 0.22;
const EDGE_BEAM_DEPTH = 0.1;
const REBAR_LENGTH = 0.4;
const REBAR_RADIUS = 0.02;
const WALL_THICKNESS = 0.07;

// Skip the front-facing corner post entirely — an open corner reads as an
// active hoist/access bay rather than a perfectly uniform grid. Wall
// infill on the two faces meeting there is skipped for the same bay, so
// the access gap actually reads through the enclosed floors below too.
const SKIPPED_CORNER_X = BAYS_X;
const SKIPPED_CORNER_Z = 0;

// Central core (stair/elevator shaft) — construction convention is the
// core climbs ahead of the surrounding frame, so it's given a half-floor
// head start over the finished slabs. Offset off-center (not building-
// centroid) so the composition reads as a real plan, not a symmetric toy.
const CORE_WIDTH = BAY_SIZE * 1.05;
const CORE_DEPTH = BAY_SIZE * 0.85;
const CORE_X = -BAY_SIZE * 0.2;
const CORE_Z = -BAY_SIZE * 0.15;
const CORE_HEIGHT = (FINISHED_FLOORS + 0.5) * FLOOR_HEIGHT;

interface BuildingProps {
  wireframe?: boolean;
}

export function Building({ wireframe = false }: BuildingProps) {
  const columnPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let x = 0; x <= BAYS_X; x++) {
      for (let z = 0; z <= BAYS_Z; z++) {
        if (x === SKIPPED_CORNER_X && z === SKIPPED_CORNER_Z) continue;
        positions.push([x * BAY_SIZE - WIDTH / 2, TOTAL_HEIGHT / 2, z * BAY_SIZE - DEPTH / 2]);
      }
    }
    return positions;
  }, []);

  const slabYPositions = useMemo(
    () =>
      Array.from({ length: FINISHED_FLOORS + 1 }, (_, i) => i * FLOOR_HEIGHT - SLAB_THICKNESS / 2),
    []
  );

  const columnGeometry = useMemo(
    () => new THREE.BoxGeometry(COLUMN_SIZE, TOTAL_HEIGHT, COLUMN_SIZE),
    []
  );
  const slabGeometry = useMemo(
    () => new THREE.BoxGeometry(WIDTH + COLUMN_SIZE, SLAB_THICKNESS, DEPTH + COLUMN_SIZE),
    []
  );
  const coreGeometry = useMemo(
    () => new THREE.BoxGeometry(CORE_WIDTH, CORE_HEIGHT, CORE_DEPTH),
    []
  );

  // Spandrel beams just under each slab edge — gives the floor plates real
  // depth/shadow lines instead of reading as flat stacked pancakes.
  const beamXGeometry = useMemo(
    () => new THREE.BoxGeometry(WIDTH + COLUMN_SIZE, EDGE_BEAM_HEIGHT, EDGE_BEAM_DEPTH),
    []
  );
  const beamZGeometry = useMemo(
    () => new THREE.BoxGeometry(DEPTH + COLUMN_SIZE, EDGE_BEAM_HEIGHT, EDGE_BEAM_DEPTH),
    []
  );
  const beams = useMemo(() => {
    const items: { position: [number, number, number]; rotationY: number; geometry: THREE.BoxGeometry }[] =
      [];
    for (const slabY of slabYPositions) {
      const y = slabY - SLAB_THICKNESS / 2 - EDGE_BEAM_HEIGHT / 2;
      items.push({ position: [0, y, -DEPTH / 2], rotationY: 0, geometry: beamXGeometry });
      items.push({ position: [0, y, DEPTH / 2], rotationY: 0, geometry: beamXGeometry });
      items.push({ position: [-WIDTH / 2, y, 0], rotationY: Math.PI / 2, geometry: beamZGeometry });
      items.push({ position: [WIDTH / 2, y, 0], rotationY: Math.PI / 2, geometry: beamZGeometry });
    }
    return items;
  }, [slabYPositions, beamXGeometry, beamZGeometry]);

  // Perimeter wall infill, staged per floor per WALL_STAGES above — a
  // real construction-progress gradient rather than one enclosed block
  // with a bare top. The bay next to the skipped corner is left open on
  // both faces so that access gap reads through every enclosed floor.
  const wallGeometryX = useMemo(
    () => new THREE.BoxGeometry(BAY_SIZE - COLUMN_SIZE * 0.4, FLOOR_HEIGHT, WALL_THICKNESS),
    []
  );
  const wallGeometryZ = useMemo(
    () => new THREE.BoxGeometry(WALL_THICKNESS, FLOOR_HEIGHT, BAY_SIZE - COLUMN_SIZE * 0.4),
    []
  );
  const wallPanels = useMemo(() => {
    const items: { position: [number, number, number]; geometry: THREE.BoxGeometry }[] = [];
    for (const stage of WALL_STAGES) {
      const y = stage.floor * FLOOR_HEIGHT + FLOOR_HEIGHT / 2;
      if (stage.sides.includes("z0")) {
        for (let x = 0; x < BAYS_X; x++) {
          if (SKIPPED_CORNER_Z === 0 && x === SKIPPED_CORNER_X - 1) continue;
          items.push({ position: [x * BAY_SIZE - WIDTH / 2 + BAY_SIZE / 2, y, -DEPTH / 2], geometry: wallGeometryX });
        }
      }
      if (stage.sides.includes("z1")) {
        for (let x = 0; x < BAYS_X; x++) {
          items.push({ position: [x * BAY_SIZE - WIDTH / 2 + BAY_SIZE / 2, y, DEPTH / 2], geometry: wallGeometryX });
        }
      }
      if (stage.sides.includes("x0")) {
        for (let z = 0; z < BAYS_Z; z++) {
          items.push({ position: [-WIDTH / 2, y, z * BAY_SIZE - DEPTH / 2 + BAY_SIZE / 2], geometry: wallGeometryZ });
        }
      }
      if (stage.sides.includes("x1")) {
        for (let z = 0; z < BAYS_Z; z++) {
          if (SKIPPED_CORNER_X === BAYS_X && z === SKIPPED_CORNER_Z) continue;
          items.push({ position: [WIDTH / 2, y, z * BAY_SIZE - DEPTH / 2 + BAY_SIZE / 2], geometry: wallGeometryZ });
        }
      }
    }
    return items;
  }, [wallGeometryX, wallGeometryZ]);

  // Leaning plywood formwork on the open top floor — the clearest single
  // cue that this level is mid-pour, not just "not enclosed yet".
  const formworkGeometry = useMemo(() => new THREE.BoxGeometry(BAY_SIZE * 0.68, FLOOR_HEIGHT * 0.85, 0.045), []);
  const formworkPanels = useMemo(
    () => [
      {
        position: [WIDTH / 2 - BAY_SIZE * 0.3, TOTAL_HEIGHT - FLOOR_HEIGHT * 0.42, DEPTH / 2 + 0.13] as [
          number,
          number,
          number,
        ],
        rotation: [0.12, 0.35, 0.04] as [number, number, number],
      },
      {
        position: [WIDTH / 2 - BAY_SIZE * 1.35, TOTAL_HEIGHT - FLOOR_HEIGHT * 0.4, DEPTH / 2 + 0.1] as [
          number,
          number,
          number,
        ],
        rotation: [0.1, -0.2, -0.05] as [number, number, number],
      },
    ],
    []
  );

  // Exposed rebar dowels tufted above every column top — the clearest
  // single cue for "actively under construction" on a bare concrete frame.
  const rebarGeometry = useMemo(
    () => new THREE.CylinderGeometry(REBAR_RADIUS, REBAR_RADIUS, REBAR_LENGTH, 5),
    []
  );
  const rebarTufts = useMemo(() => {
    const items: { position: [number, number, number]; rotation: [number, number, number] }[] = [];
    columnPositions.forEach(([x, , z], colIndex) => {
      for (let r = 0; r < 3; r++) {
        const angle = (colIndex * 37 + r * 131) % 360;
        const rad = (angle * Math.PI) / 180;
        const lean = 0.12;
        items.push({
          position: [
            x + Math.cos(rad) * COLUMN_SIZE * 0.6,
            TOTAL_HEIGHT + REBAR_LENGTH / 2 - 0.05,
            z + Math.sin(rad) * COLUMN_SIZE * 0.6,
          ],
          rotation: [Math.sin(rad) * lean, 0, Math.cos(rad) * -lean],
        });
      }
    });
    return items;
  }, [columnPositions]);

  const slabMaterial = wireframe ? wireframeMaterial : concreteMaterial;
  const columnMaterial = wireframe ? wireframeMaterial : concreteColumnMaterial;
  const coreMaterial = wireframe ? wireframeMaterial : concreteCoreMaterial;

  return (
    <group position={[0, -TOTAL_HEIGHT / 2, 0]}>
      {columnPositions.map(([x, y, z], i) => (
        <mesh
          key={i}
          position={[x, y, z]}
          geometry={columnGeometry}
          material={columnMaterial}
          castShadow={!wireframe}
          receiveShadow={!wireframe}
        />
      ))}
      {slabYPositions.map((y, i) => (
        <mesh
          key={i}
          position={[0, y, 0]}
          geometry={slabGeometry}
          material={slabMaterial}
          castShadow={!wireframe}
          receiveShadow={!wireframe}
        />
      ))}
      <mesh
        position={[CORE_X, CORE_HEIGHT / 2, CORE_Z]}
        geometry={coreGeometry}
        material={coreMaterial}
        castShadow={!wireframe}
        receiveShadow={!wireframe}
      />
      {!wireframe &&
        beams.map((b, i) => (
          <mesh
            key={i}
            position={b.position}
            rotation={[0, b.rotationY, 0]}
            geometry={b.geometry}
            material={concreteMaterial}
            castShadow
            receiveShadow
          />
        ))}
      {!wireframe &&
        wallPanels.map((w, i) => (
          <mesh
            key={i}
            position={w.position}
            geometry={w.geometry}
            material={concreteMaterial}
            castShadow
            receiveShadow
          />
        ))}
      {!wireframe &&
        formworkPanels.map((f, i) => (
          <mesh
            key={i}
            position={f.position}
            rotation={f.rotation}
            geometry={formworkGeometry}
            material={formworkMaterial}
            castShadow
            receiveShadow
          />
        ))}
      {!wireframe &&
        rebarTufts.map((t, i) => (
          <mesh
            key={i}
            position={t.position}
            rotation={t.rotation}
            geometry={rebarGeometry}
            material={steelMaterial}
            castShadow
          />
        ))}
    </group>
  );
}

export const BUILDING_HEIGHT = TOTAL_HEIGHT;
export const BUILDING_FOOTPRINT: [number, number] = [WIDTH, DEPTH];
