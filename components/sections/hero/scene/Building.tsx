"use client";

import { useMemo } from "react";
import * as THREE from "three";
import {
  concreteColumnMaterial,
  concreteCoreMaterial,
  concreteMaterial,
  formworkMaterial,
  safetyYellowMaterial,
  steelMaterial,
  wireframeMaterial,
} from "./materials";

const BAY_X = 1.4;
const BAY_Z = 1.4;
const FLOOR_HEIGHT = 1.05;
const COLUMN_SIZE = 0.19;
const SLAB_THICKNESS = 0.13;
const SPANDREL_HEIGHT = 0.17;
const SPANDREL_THICKNESS = 0.08;
const REBAR_HEIGHT = 0.38;
const REBAR_RADIUS = 0.014;

const TOTAL_HEIGHT = 4.6;
const WIDTH = 4 * BAY_X;
const DEPTH = 3.5 * BAY_Z;

interface BuildingProps {
  wireframe?: boolean;
}

interface ColumnDef {
  x: number;
  z: number;
  startY: number;
  height: number;
  rebar: boolean;
}

interface SlabDef {
  x: number;
  z: number;
  width: number;
  depth: number;
  y: number;
  railings: Array<"front" | "back" | "left" | "right">;
}

export function Building({ wireframe = false }: BuildingProps) {
  // Cascading slab levels matching reference stepped shape
  const slabs: SlabDef[] = useMemo(
    () => [
      // Ground foundation slab
      { x: 0, z: 0, width: 4 * BAY_X + 0.4, depth: 3.2 * BAY_Z + 0.4, y: 0, railings: [] },
      // Level 1 Slab (Full footprint)
      {
        x: 0,
        z: 0,
        width: 4 * BAY_X + 0.25,
        depth: 3.2 * BAY_Z + 0.25,
        y: FLOOR_HEIGHT,
        railings: ["front", "left"],
      },
      // Level 2 Slab (Stepped back on front & left to create terrace)
      {
        x: 0.45 * BAY_X,
        z: -0.2 * BAY_Z,
        width: 3.1 * BAY_X + 0.25,
        depth: 2.4 * BAY_Z + 0.25,
        y: 2 * FLOOR_HEIGHT,
        railings: ["front", "left", "right"],
      },
      // Level 3 Slab (Top terrace around core)
      {
        x: -0.15 * BAY_X,
        z: -0.35 * BAY_Z,
        width: 2.1 * BAY_X + 0.25,
        depth: 1.8 * BAY_Z + 0.25,
        y: 3 * FLOOR_HEIGHT,
        railings: ["front", "left", "back", "right"],
      },
    ],
    []
  );

  // Column positions and heights across all tiers
  const columns: ColumnDef[] = useMemo(() => {
    const list: ColumnDef[] = [];
    const colCoords = [
      // Outer front row (stops at floor 1)
      { gx: -2, gz: 1.5, floors: 1 },
      { gx: -1, gz: 1.5, floors: 1 },
      { gx: 0, gz: 1.5, floors: 2 },
      { gx: 1, gz: 1.5, floors: 2 },
      { gx: 2, gz: 1.5, floors: 2 },

      // Mid-front row
      { gx: -2, gz: 0.5, floors: 1 },
      { gx: -1, gz: 0.5, floors: 3 },
      { gx: 0, gz: 0.5, floors: 3 },
      { gx: 1, gz: 0.5, floors: 2 },
      { gx: 2, gz: 0.5, floors: 2 },

      // Mid-back row
      { gx: -2, gz: -0.5, floors: 1 },
      { gx: -1, gz: -0.5, floors: 3 },
      { gx: 0, gz: -0.5, floors: 3 },
      { gx: 1, gz: -0.5, floors: 2 },
      { gx: 2, gz: -0.5, floors: 2 },

      // Outer back row
      { gx: -2, gz: -1.5, floors: 1 },
      { gx: -1, gz: -1.5, floors: 1 },
      { gx: 0, gz: -1.5, floors: 1 },
      { gx: 1, gz: -1.5, floors: 2 },
      { gx: 2, gz: -1.5, floors: 2 },
    ];

    colCoords.forEach((c) => {
      const x = c.gx * (BAY_X * 0.95);
      const z = c.gz * (BAY_Z * 0.95);
      const h = c.floors * FLOOR_HEIGHT;
      list.push({
        x,
        z,
        startY: 0,
        height: h,
        rebar: true,
      });
    });

    return list;
  }, []);

  // Shared Geometries
  const colGeo = useMemo(() => new THREE.BoxGeometry(COLUMN_SIZE, 1, COLUMN_SIZE), []);
  const footingGeo = useMemo(() => new THREE.BoxGeometry(COLUMN_SIZE * 1.6, 0.08, COLUMN_SIZE * 1.6), []);
  const spandrelGeo = useMemo(() => new THREE.BoxGeometry(1, SPANDREL_HEIGHT, SPANDREL_THICKNESS), []);
  const rebarGeo = useMemo(() => new THREE.CylinderGeometry(REBAR_RADIUS, REBAR_RADIUS, REBAR_HEIGHT, 6), []);
  const railPostGeo = useMemo(() => new THREE.BoxGeometry(0.025, 0.32, 0.025), []);
  const railBarGeo = useMemo(() => new THREE.BoxGeometry(1, 0.02, 0.02), []);
  const railMeshGeo = useMemo(() => new THREE.BoxGeometry(1, 0.16, 0.005), []);

  const concreteMat = wireframe ? wireframeMaterial : concreteMaterial;
  const colMat = wireframe ? wireframeMaterial : concreteColumnMaterial;
  const coreMat = wireframe ? wireframeMaterial : concreteCoreMaterial;

  return (
    <group position={[0, -TOTAL_HEIGHT / 2, 0]}>
      {/* 1. Slabs & Spandrel edge beams */}
      {slabs.map((slab, idx) => {
        const halfW = slab.width / 2;
        const halfD = slab.depth / 2;
        const spandrelY = slab.y - SLAB_THICKNESS / 2 - SPANDREL_HEIGHT / 2;

        return (
          <group key={`slab-${idx}`}>
            {/* Slab Plate */}
            <mesh
              position={[slab.x, slab.y - SLAB_THICKNESS / 2, slab.z]}
              geometry={new THREE.BoxGeometry(slab.width, SLAB_THICKNESS, slab.depth)}
              material={concreteMat}
              castShadow={!wireframe}
              receiveShadow={!wireframe}
            />

            {/* Edge Beams (Spandrels) for architectural depth */}
            {slab.y > 0 && (
              <>
                <mesh
                  position={[slab.x, spandrelY, slab.z + halfD - SPANDREL_THICKNESS / 2]}
                  scale={[slab.width, 1, 1]}
                  geometry={spandrelGeo}
                  material={concreteMat}
                  castShadow={!wireframe}
                  receiveShadow={!wireframe}
                />
                <mesh
                  position={[slab.x, spandrelY, slab.z - halfD + SPANDREL_THICKNESS / 2]}
                  scale={[slab.width, 1, 1]}
                  geometry={spandrelGeo}
                  material={concreteMat}
                  castShadow={!wireframe}
                  receiveShadow={!wireframe}
                />
                <mesh
                  position={[slab.x - halfW + SPANDREL_THICKNESS / 2, spandrelY, slab.z]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[slab.depth, 1, 1]}
                  geometry={spandrelGeo}
                  material={concreteMat}
                  castShadow={!wireframe}
                  receiveShadow={!wireframe}
                />
                <mesh
                  position={[slab.x + halfW - SPANDREL_THICKNESS / 2, spandrelY, slab.z]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[slab.depth, 1, 1]}
                  geometry={spandrelGeo}
                  material={concreteMat}
                  castShadow={!wireframe}
                  receiveShadow={!wireframe}
                />
              </>
            )}

            {/* Safety Yellow Perimeter Guardrails */}
            {!wireframe &&
              slab.railings.map((side) => {
                const railY = slab.y + 0.16;
                const postCount = 4;
                const isXAxis = side === "front" || side === "back";
                const length = isXAxis ? slab.width : slab.depth;
                const fixedPos =
                  side === "front"
                    ? slab.z + halfD - 0.05
                    : side === "back"
                      ? slab.z - halfD + 0.05
                      : side === "left"
                        ? slab.x - halfW + 0.05
                        : slab.x + halfW - 0.05;

                return (
                  <group key={`rail-${idx}-${side}`}>
                    {/* Top Rail */}
                    <mesh
                      position={isXAxis ? [slab.x, railY + 0.14, fixedPos] : [fixedPos, railY + 0.14, slab.z]}
                      rotation={isXAxis ? [0, 0, 0] : [0, Math.PI / 2, 0]}
                      scale={[length - 0.1, 1, 1]}
                      geometry={railBarGeo}
                      material={safetyYellowMaterial}
                    />
                    {/* Mid Rail */}
                    <mesh
                      position={isXAxis ? [slab.x, railY + 0.02, fixedPos] : [fixedPos, railY + 0.02, slab.z]}
                      rotation={isXAxis ? [0, 0, 0] : [0, Math.PI / 2, 0]}
                      scale={[length - 0.1, 1, 1]}
                      geometry={railBarGeo}
                      material={safetyYellowMaterial}
                    />
                    {/* Railing Posts */}
                    {Array.from({ length: postCount }).map((_, pIdx) => {
                      const offset = (pIdx / (postCount - 1) - 0.5) * (length - 0.2);
                      const postX = isXAxis ? slab.x + offset : fixedPos;
                      const postZ = isXAxis ? fixedPos : slab.z + offset;
                      return (
                        <mesh
                          key={`post-${pIdx}`}
                          position={[postX, railY + 0.06, postZ]}
                          geometry={railPostGeo}
                          material={safetyYellowMaterial}
                        />
                      );
                    })}
                  </group>
                );
              })}
          </group>
        );
      })}

      {/* 2. Concrete Columns with Footings & 4-bar Rebar */}
      {columns.map((col, idx) => {
        const topY = col.startY + col.height;
        return (
          <group key={`col-${idx}`}>
            {/* Base Footing Pad */}
            <mesh
              position={[col.x, col.startY + 0.04, col.z]}
              geometry={footingGeo}
              material={concreteMat}
              receiveShadow={!wireframe}
            />

            {/* Column Body */}
            <mesh
              position={[col.x, col.startY + col.height / 2, col.z]}
              scale={[1, col.height, 1]}
              geometry={colGeo}
              material={colMat}
              castShadow={!wireframe}
              receiveShadow={!wireframe}
            />

            {/* 4-bar Steel Rebar cage extending from column top */}
            {!wireframe && col.rebar && (
              <>
                <mesh
                  position={[col.x - 0.05, topY + REBAR_HEIGHT / 2, col.z - 0.05]}
                  geometry={rebarGeo}
                  material={steelMaterial}
                  castShadow
                />
                <mesh
                  position={[col.x + 0.05, topY + REBAR_HEIGHT / 2, col.z + 0.05]}
                  geometry={rebarGeo}
                  material={steelMaterial}
                  castShadow
                />
                <mesh
                  position={[col.x - 0.05, topY + REBAR_HEIGHT / 2, col.z + 0.05]}
                  geometry={rebarGeo}
                  material={steelMaterial}
                  castShadow
                />
                <mesh
                  position={[col.x + 0.05, topY + REBAR_HEIGHT / 2, col.z - 0.05]}
                  geometry={rebarGeo}
                  material={steelMaterial}
                  castShadow
                />
              </>
            )}
          </group>
        );
      })}

      {/* 3. Central Monolithic Concrete Core (Shear Walls & Formwork) */}
      <group position={[-0.2 * BAY_X, 1.9, -0.4 * BAY_Z]}>
        {/* Core Main Solid Body */}
        <mesh
          position={[0, 0, 0]}
          geometry={new THREE.BoxGeometry(1.65 * BAY_X, 3.8 * FLOOR_HEIGHT, 1.45 * BAY_Z)}
          material={coreMat}
          castShadow={!wireframe}
          receiveShadow={!wireframe}
        />
        {/* Timber / Plywood Formwork on top tier */}
        {!wireframe && (
          <>
            <mesh
              position={[0, 1.9 * FLOOR_HEIGHT + 0.25, 0.725 * BAY_Z + 0.03]}
              geometry={new THREE.BoxGeometry(1.55 * BAY_X, 0.75, 0.045)}
              material={formworkMaterial}
              castShadow
            />
            <mesh
              position={[-0.825 * BAY_X - 0.03, 1.9 * FLOOR_HEIGHT + 0.25, 0]}
              rotation={[0, Math.PI / 2, 0]}
              geometry={new THREE.BoxGeometry(1.35 * BAY_Z, 0.75, 0.045)}
              material={formworkMaterial}
              castShadow
            />
          </>
        )}
      </group>
    </group>
  );
}

export const BUILDING_HEIGHT = TOTAL_HEIGHT;
export const BUILDING_FOOTPRINT: [number, number] = [WIDTH, DEPTH];
