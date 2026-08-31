"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { concreteMaterial, steelMaterial, wireframeMaterial } from "./materials";

const BAYS_X = 3;
const BAYS_Z = 3;
const BAY_SIZE = 1.5;
const FLOOR_HEIGHT = 1.0;
const FINISHED_FLOORS = 6;
const COLUMN_SIZE = 0.13;
const SLAB_THICKNESS = 0.13;
// The building reads as "half-built": columns for one extra story rise
// above the top finished slab with no floor poured yet.
const UNFINISHED_STORIES = 1;

const WIDTH = BAYS_X * BAY_SIZE;
const DEPTH = BAYS_Z * BAY_SIZE;
const TOTAL_HEIGHT = (FINISHED_FLOORS + UNFINISHED_STORIES) * FLOOR_HEIGHT;

const EDGE_BEAM_HEIGHT = 0.24;
const EDGE_BEAM_DEPTH = 0.1;
const REBAR_LENGTH = 0.4;
const REBAR_RADIUS = 0.018;

// Skip the front-facing corner post entirely — an open corner reads as an
// active hoist/access bay rather than a perfectly uniform grid.
const SKIPPED_CORNER: [number, number] = [BAYS_X, 0];

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
  const columnMaterial = wireframe ? wireframeMaterial : steelMaterial;

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
