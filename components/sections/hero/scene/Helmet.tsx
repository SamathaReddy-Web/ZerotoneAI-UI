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
 * Photorealistic Construction Worker Safety Helmet (Hardhat)
 * Modeled to exact industrial safety standards:
 * - Elongated aerodynamic crown dome (anatomical fit)
 * - Prominent front sun visor peak with protective rolled drip-edge
 * - 360° flared rain-trough perimeter brim
 * - Central impact deflection spine / ridge (crown keel)
 * - Twin lateral aerodynamic stiffener flutes
 * - Universal 30mm accessory mount slots (ear muff / lamp clips)
 * - Internal suspension harness with rear nape cradle & rotary ratchet dial
 * - Vivid high-resolution Zerotone company logo on front crown and lateral flanks
 */
export function Helmet({ position, rotationY = 0 }: HelmetProps) {
  // 1. Crown Shell Geometry (anatomical elongated egg-dome)
  const domeGeometry = useMemo(
    () => new THREE.SphereGeometry(0.31, 48, 36, 0, Math.PI * 2, 0, Math.PI * 0.53),
    []
  );

  // 2. Visor and Brim Geometries
  // Front visor peak extension (swept forward and downward)
  const frontVisorGeo = useMemo(() => new THREE.BoxGeometry(0.26, 0.018, 0.14), []);
  const frontVisorLipGeo = useMemo(() => new THREE.CylinderGeometry(0.014, 0.014, 0.26, 24), []);
  // Perimeter 360° rain-trough brim ring
  const brimRingGeo = useMemo(() => new THREE.CylinderGeometry(0.345, 0.355, 0.022, 48), []);
  const brimLipGeo = useMemo(() => new THREE.TorusGeometry(0.35, 0.012, 12, 48), []);

  // 3. Central Crown Ridge (Impact Deflection Spine) & Lateral Flutes
  const crownRidgeGeo = useMemo(() => new THREE.BoxGeometry(0.048, 0.042, 0.54), []);
  const crownRidgeCapGeo = useMemo(() => new THREE.SphereGeometry(0.024, 16, 16), []);
  const sideFluteGeo = useMemo(() => new THREE.BoxGeometry(0.032, 0.025, 0.38), []);

  // 4. Universal Side Accessory Mount Slots (30mm slots for face shields / ear defenders)
  const accessorySlotHousingGeo = useMemo(() => new THREE.BoxGeometry(0.038, 0.065, 0.048), []);
  const accessorySlotIndentGeo = useMemo(() => new THREE.BoxGeometry(0.042, 0.042, 0.02), []);

  // 5. Suspension Harness & Ratchet Adjustment Dial
  const harnessRingGeo = useMemo(() => new THREE.CylinderGeometry(0.275, 0.285, 0.045, 36, 1, true), []);
  const napeCradleGeo = useMemo(() => new THREE.BoxGeometry(0.18, 0.035, 0.06), []);
  const ratchetKnobGeo = useMemo(() => new THREE.CylinderGeometry(0.032, 0.032, 0.022, 24), []);
  const ratchetKnobCapGeo = useMemo(() => new THREE.SphereGeometry(0.032, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), []);

  // 6. High-Res Zerotone Company Logo Texture & Material
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
      alphaTest: 0.002,
      roughness: 0.12,
      metalness: 0.08,
      emissive: new THREE.Color("#0284c7"),
      emissiveIntensity: 0.12,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
  }, [logoTexture]);

  // Logo geometries sized and contoured for maximum clarity
  const frontLogoGeo = useMemo(() => new THREE.PlaneGeometry(0.155, 0.155), []);
  const sideLogoGeo = useMemo(() => new THREE.PlaneGeometry(0.115, 0.115), []);

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* ── 1. GLOSSY WHITE CROWN DOME (ELONGATED ANATOMICAL FIT) ── */}
      <mesh
        scale={[0.94, 0.98, 1.14]}
        geometry={domeGeometry}
        material={helmetMaterial}
        castShadow
        receiveShadow
      />

      {/* ── 2. PERIMETER FLANGED RAIN-TROUGH BRIM ── */}
      <mesh
        position={[0, -0.01, 0.02]}
        scale={[0.96, 1, 1.12]}
        geometry={brimRingGeo}
        material={helmetMaterial}
        castShadow
      />
      {/* Rolled Outer Gutter Lip around the brim */}
      <mesh
        position={[0, -0.018, 0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.96, 1.12, 1]}
        geometry={brimLipGeo}
        material={helmetMaterial}
      />

      {/* ── 3. EXTENDED FRONT VISOR SUN PEAK ── */}
      <group position={[0, -0.012, 0.31]} rotation={[-0.14, 0, 0]}>
        <mesh geometry={frontVisorGeo} material={helmetMaterial} castShadow />
        {/* Front peak rolled protective bead */}
        <mesh
          position={[0, 0, 0.07]}
          rotation={[0, 0, Math.PI / 2]}
          geometry={frontVisorLipGeo}
          material={helmetMaterial}
        />
      </group>

      {/* ── 4. CENTRAL IMPACT DEFLECTION SPINE / KEEL ── */}
      <group position={[0, 0.235, 0.03]} rotation={[-0.04, 0, 0]}>
        <mesh geometry={crownRidgeGeo} material={helmetMaterial} castShadow />
        {/* Rounded front & rear transition caps on central ridge */}
        <mesh position={[0, 0, 0.27]} geometry={crownRidgeCapGeo} material={helmetMaterial} />
        <mesh position={[0, 0, -0.27]} geometry={crownRidgeCapGeo} material={helmetMaterial} />
      </group>

      {/* Left and Right Lateral Stiffener Flutes */}
      <mesh
        position={[-0.145, 0.165, 0.03]}
        rotation={[-0.04, 0, 0.22]}
        geometry={sideFluteGeo}
        material={helmetMaterial}
      />
      <mesh
        position={[0.145, 0.165, 0.03]}
        rotation={[-0.04, 0, -0.22]}
        geometry={sideFluteGeo}
        material={helmetMaterial}
      />

      {/* ── 5. UNIVERSAL 30mm SIDE ACCESSORY MOUNT SLOTS ── */}
      {/* Left Slot Housing */}
      <group position={[-0.305, 0.04, 0.02]}>
        <mesh geometry={accessorySlotHousingGeo} material={helmetMaterial} castShadow />
        <mesh position={[-0.01, 0, 0]} geometry={accessorySlotIndentGeo} material={helmetHarnessMaterial} />
      </group>
      {/* Right Slot Housing */}
      <group position={[0.305, 0.04, 0.02]}>
        <mesh geometry={accessorySlotHousingGeo} material={helmetMaterial} castShadow />
        <mesh position={[0.01, 0, 0]} geometry={accessorySlotIndentGeo} material={helmetHarnessMaterial} />
      </group>

      {/* ── 6. SUSPENSION HARNESS & REAR NAPE RATCHET DIAL ── */}
      {/* Internal suspension rim */}
      <mesh
        position={[0, -0.028, 0.02]}
        scale={[0.92, 1, 1.08]}
        geometry={harnessRingGeo}
        material={helmetHarnessMaterial}
      />
      {/* Rear Nape Cradle Bar */}
      <mesh
        position={[0, -0.048, -0.27]}
        rotation={[-0.25, 0, 0]}
        geometry={napeCradleGeo}
        material={helmetHarnessMaterial}
      />
      {/* Rear Rotary Fast-Trac Ratchet Sizing Knob */}
      <group position={[0, -0.052, -0.315]} rotation={[0.42, 0, 0]}>
        <mesh geometry={ratchetKnobGeo} material={helmetHarnessMaterial} castShadow />
        <mesh position={[0, 0.011, 0]} geometry={ratchetKnobCapGeo} material={helmetHarnessMaterial} />
        {/* Blue center brand dot on the ratchet dial */}
        <mesh
          position={[0, 0.022, 0]}
          geometry={new THREE.CylinderGeometry(0.012, 0.012, 0.005, 16)}
          material={helmetAccentMaterial}
        />
      </group>

      {/* ── 7. PROMINENT ZEROTONE COMPANY LOGO ── */}
      {/* FRONT FOREHEAD CROWN LOGO — High visibility & clarity */}
      <mesh
        position={[0, 0.138, 0.292]}
        rotation={[-0.36, 0, 0]}
        geometry={frontLogoGeo}
        material={logoMaterial}
      />

      {/* RIGHT TEMPLE LATERAL LOGO */}
      <mesh
        position={[0.285, 0.12, 0.03]}
        rotation={[0, Math.PI / 2, -0.22]}
        geometry={sideLogoGeo}
        material={logoMaterial}
      />

      {/* LEFT TEMPLE LATERAL LOGO */}
      <mesh
        position={[-0.285, 0.12, 0.03]}
        rotation={[0, -(Math.PI / 2), 0.22]}
        geometry={sideLogoGeo}
        material={logoMaterial}
      />
    </group>
  );
}
