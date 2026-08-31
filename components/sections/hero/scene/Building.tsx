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

const BAYS_X = 4;
const BAYS_Z = 3;
const BAY_SIZE = 1.65;
const FLOOR_HEIGHT = 1.05;
const FINISHED_FLOORS = 5;
const COLUMN_SIZE = 0.24;
const SLAB_THICKNESS = 0.16;
// The building reads as "actively under construction": columns for one
// extra story rise above the top finished slab with no floor poured yet.
const UNFINISHED_STORIES = 1;
// Lower floors are enclosed (wall panels below), then open frame, then
// bare structure at top — a visible construction-stage progression
// rather than one uniform open grid top to bottom.
const ENCLOSED_FLOORS = 2;

const WIDTH = BAYS_X * BAY_SIZE;
const DEPTH = BAYS_Z * BAY_SIZE;
const TOTAL_HEIGHT = (FINISHED_FLOORS + UNFINISHED_STORIES) * FLOOR_HEIGHT;

const EDGE_BEAM_HEIGHT = 0.26;
const EDGE_BEAM_DEPTH = 0.12;
const REBAR_LENGTH = 0.42;
const REBAR_RADIUS = 0.02;
const WALL_THICKNESS = 0.07;

// Skip the front-facing corner post entirely — an open corner reads as an
// active hoist/access bay rather than a perfectly uniform grid.
const SKIPPED_CORNER: [number, number] = [BAYS_X, 0];

// Central core (stair/elevator shaft) — construction convention is the
// core climbs ahead of the surrounding frame, so it's given a half-floor
// head start over the finished slabs. Offset off-center (not building-
// centroid) so the composition reads as a real plan, not a symmetric toy.
const CORE_WIDTH = BAY_SIZE * 1.05;
const CORE_DEPTH = BAY_SIZE * 0.85;
const CORE_X = -BAY_SIZE * 0.15;
const CORE_Z = -BAY_SIZE * 0.1;
const CORE_HEIGHT = (FINISHED_FLOORS + 0.55) * FLOOR_HEIGHT;

interface BuildingProps {
  wireframe?: boolean;
}

export function Building({ wireframe = false }: BuildingProps) {
  const columnPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let x = 0; x <= BAYS_X; x++) {
      for (let z = 0; z <= BAYS_Z; z++) {
        if (x === SKIPPED_CORNER[0] && z === SKIPPED_CORNER[1]) continue;
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

  // Perimeter wall infill on the bottom ENCLOSED_FLOORS, back two faces
  // only (−x and −z, away from camera) — enclosing every side would hide
  // the structural read the camera is meant to see; enclosing the far
  // corner instead tells a "this side is finished, this side is still
  // open" story.
  const wallPanelGeometryX = useMemo(
    () => new THREE.BoxGeometry(BAY_SIZE - COLUMN_SIZE * 0.4, FLOOR_HEIGHT * ENCLOSED_FLOORS, WALL_THICKNESS),
    []
  );
  const wallPanelGeometryZ = useMemo(
    () => new THREE.BoxGeometry(WALL_THICKNESS, FLOOR_HEIGHT * ENCLOSED_FLOORS, BAY_SIZE - COLUMN_SIZE * 0.4),
    []
  );
  const wallPanels = useMemo(() => {
    const y = (FLOOR_HEIGHT * ENCLOSED_FLOORS) / 2;
    const items: { position: [number, number, number]; geometry: THREE.BoxGeometry }[] = [];
    for (let x = 0; x < BAYS_X; x++) {
      items.push({
        position: [x * BAY_SIZE - WIDTH / 2 + BAY_SIZE / 2, y, -DEPTH / 2],
        geometry: wallPanelGeometryX,
      });
    }
    for (let z = 0; z < BAYS_Z; z++) {
      items.push({
        position: [-WIDTH / 2, y, z * BAY_SIZE - DEPTH / 2 + BAY_SIZE / 2],
        geometry: wallPanelGeometryZ,
      });
    }
    return items;
  }, [wallPanelGeometryX, wallPanelGeometryZ]);

  // Leaning plywood formwork on the open top floor — the clearest single
  // cue that this level is mid-pour, not just "not enclosed yet".
  const formworkGeometry = useMemo(() => new THREE.BoxGeometry(BAY_SIZE * 0.72, FLOOR_HEIGHT * 0.85, 0.045), []);
  const formworkPanels = useMemo(
    () => [
      {
        position: [WIDTH / 2 - BAY_SIZE * 0.3, TOTAL_HEIGHT - FLOOR_HEIGHT * 0.42, DEPTH / 2 + 0.14] as [
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
