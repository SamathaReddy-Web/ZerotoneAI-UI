"use client";

import { useMemo } from "react";
import * as THREE from "three";
import "@react-three/fiber";
import {
  helmetAccentMaterial,
  helmetHarnessMaterial,
  helmetMaterial,
} from "./materials";

interface HelmetProps {
  position: [number, number, number];
  rotationY?: number;
}

/**
 * Clean, Authentic Construction Worker Safety Helmet (Hardhat)
 * - Smooth, aerodynamic anatomical dome shell (no clunky/weird blocks on top)
 * - Molded curved front sun-visor peak & 360° flared rain-gutter brim
 * - Sleek injection-molded rim bead and dark interior suspension headband
 * - Extra-large, crisp Zerotone company logos placed prominently on BOTH sides and the front
 */
export function Helmet({ position, rotationY = 0 }: HelmetProps) {
  // 1. Smooth, curved ergonomic hardhat crown dome (anatomical fit)
  const domeGeometry = useMemo(
    () => new THREE.SphereGeometry(0.32, 64, 48, 0, Math.PI * 2, 0, Math.PI * 0.52),
    []
  );

  // 2. Smooth flared 360° perimeter brim & front visor
  const brimRingGeo = useMemo(() => new THREE.CylinderGeometry(0.355, 0.37, 0.02, 64), []);
  const brimLipGeo = useMemo(() => new THREE.TorusGeometry(0.365, 0.012, 16, 64), []);
  const frontVisorGeo = useMemo(() => new THREE.BoxGeometry(0.24, 0.016, 0.12), []);
  const frontVisorLipGeo = useMemo(() => new THREE.CylinderGeometry(0.012, 0.012, 0.24, 24), []);

  // 3. Interior dark suspension headband
  const harnessRingGeo = useMemo(() => new THREE.CylinderGeometry(0.285, 0.295, 0.042, 48, 1, true), []);

  // 4. High-Res Zerotone Company Logo Texture & Material
  const logoTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const loader = new THREE.TextureLoader();
    const tex = loader.load("/logo-mark-transparent.png");
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }, []);

  const logoMaterial = useMemo(() => {
    if (!logoTexture) return helmetAccentMaterial;
    return new THREE.MeshStandardMaterial({
      map: logoTexture,
      transparent: true,
      alphaTest: 0.005,
      roughness: 0.1,
      metalness: 0.05,
      emissive: new THREE.Color("#0284c7"),
      emissiveIntensity: 0.15,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
  }, [logoTexture]);

  // Extra large logo geometry for maximum visibility (0.26m x 0.26m)
  const logoGeo = useMemo(() => new THREE.PlaneGeometry(0.26, 0.26), []);
  const sideLogoGeo = useMemo(() => new THREE.PlaneGeometry(0.25, 0.25), []);

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* ── 1. SMOOTH GLOSSY WHITE HARDHAT DOME ── */}
      <mesh
        scale={[0.96, 1.0, 1.15]}
        geometry={domeGeometry}
        material={helmetMaterial}
        castShadow
        receiveShadow
      />

      {/* ── 2. SEAMLESS PERIMETER RAIN-GUTTER BRIM ── */}
      <mesh
        position={[0, -0.008, 0.02]}
        scale={[0.96, 1, 1.14]}
        geometry={brimRingGeo}
        material={helmetMaterial}
        castShadow
      />
      {/* Smooth outer rolled lip */}
      <mesh
        position={[0, -0.015, 0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.96, 1.14, 1]}
        geometry={brimLipGeo}
        material={helmetMaterial}
      />

      {/* ── 3. EXTENDED FRONT VISOR SUN PEAK ── */}
      <group position={[0, -0.01, 0.32]} rotation={[-0.12, 0, 0]}>
        <mesh geometry={frontVisorGeo} material={helmetMaterial} castShadow />
        <mesh
          position={[0, 0, 0.06]}
          rotation={[0, 0, Math.PI / 2]}
          geometry={frontVisorLipGeo}
          material={helmetMaterial}
        />
      </group>

      {/* ── 4. DARK INTERIOR SUSPENSION HARNESS RIM ── */}
      <mesh
        position={[0, -0.025, 0.02]}
        scale={[0.93, 1, 1.1]}
        geometry={harnessRingGeo}
        material={helmetHarnessMaterial}
      />

      {/* ── 5. PROMINENT LARGE ZEROTONE LOGOS ── */}
      {/* A. RIGHT SIDE LOGO (Large & clearly visible from 3/4 isometric camera) */}
      <mesh
        position={[0.312, 0.125, 0.02]}
        rotation={[0, Math.PI / 2, -0.15]}
        geometry={sideLogoGeo}
        material={logoMaterial}
      />

      {/* B. LEFT SIDE LOGO (Large & clearly visible from left view) */}
      <mesh
        position={[-0.312, 0.125, 0.02]}
        rotation={[0, -(Math.PI / 2), 0.15]}
        geometry={sideLogoGeo}
        material={logoMaterial}
      />

      {/* C. FRONT FOREHEAD LOGO (Large & bold on the front crown) */}
      <mesh
        position={[0, 0.145, 0.315]}
        rotation={[-0.36, 0, 0]}
        geometry={logoGeo}
        material={logoMaterial}
      />
    </group>
  );
}
