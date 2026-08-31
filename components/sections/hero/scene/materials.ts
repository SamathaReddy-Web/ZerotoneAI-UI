// Shared PBR materials for the hero 3D scene. Instantiated once here and
// imported wherever needed — Building/Crane/Ground must never call `new
// MeshStandardMaterial(...)` inline, or every re-render would allocate a
// fresh GPU resource.
import * as THREE from "three";

// Warm, slightly-varied concrete tones — three distinct surfaces (slab,
// column, core) instead of one flat grey, so the massing reads as poured
// concrete rather than a uniform CAD material.
export const concreteMaterial = new THREE.MeshStandardMaterial({
  color: "#c2bcac",
  roughness: 0.8,
  metalness: 0.03,
});

export const concreteColumnMaterial = new THREE.MeshStandardMaterial({
  color: "#948a76",
  roughness: 0.85,
  metalness: 0.03,
});

// The core walls are cast earlier/denser than the frame around them —
// noticeably darker (not just a shade off) so it reads as a distinct
// element instead of blending into the slab/column massing.
export const concreteCoreMaterial = new THREE.MeshStandardMaterial({
  color: "#655c4c",
  roughness: 0.74,
  metalness: 0.03,
});

// Scene carries a drei <Environment> (see Scene3D.tsx), so metalness can
// sit at physically-plausible values — MeshStandardMaterial reads
// scene.environment automatically and picks up real reflections instead
// of relying on direct lights alone. Darkened and cooled relative to the
// concrete tones above (not nearly-black, but a clear step down) so
// exposed rebar/steel actually separates from the structure instead of
// reading as the same washed-out grey.
export const steelMaterial = new THREE.MeshStandardMaterial({
  color: "#454b54",
  roughness: 0.48,
  metalness: 0.65,
  envMapIntensity: 1,
});

// Physical construction-site color stays neutral (a richer construction
// gold, not saturated brand blue) — blue is reserved for the AI/data
// layer (SceneCallout cards, connector lines) so the split between "the
// real site" and "the digital layer" reads clearly.
export const craneYellowMaterial = new THREE.MeshStandardMaterial({
  color: "#d1a53c",
  roughness: 0.46,
  metalness: 0.3,
  envMapIntensity: 0.9,
});

export const craneGreyMaterial = new THREE.MeshStandardMaterial({
  color: "#565c66",
  roughness: 0.45,
  metalness: 0.5,
  envMapIntensity: 1,
});

// Precast counterweight blocks — concrete, not steel.
export const counterweightMaterial = new THREE.MeshStandardMaterial({
  color: "#8a8880",
  roughness: 0.8,
  metalness: 0.05,
});

// Off-white hardhat shell — the Zerotone mark is a separate small accent
// mesh (see Ground.tsx) rather than a texture/decal, so it never depends
// on a font or image asset loading.
export const helmetMaterial = new THREE.MeshStandardMaterial({
  color: "#f4f3ef",
  roughness: 0.35,
  metalness: 0.05,
  envMapIntensity: 0.9,
});

export const helmetAccentMaterial = new THREE.MeshStandardMaterial({
  color: "#155fd4",
  roughness: 0.3,
  metalness: 0.2,
  envMapIntensity: 1,
});

// Temporary plywood formwork panels on the actively-under-construction
// top floor — warm tan, matte.
export const formworkMaterial = new THREE.MeshStandardMaterial({
  color: "#ad9670",
  roughness: 0.88,
  metalness: 0.01,
});

// Site-safety orange — barriers, cable reel.
export const safetyOrangeMaterial = new THREE.MeshStandardMaterial({
  color: "#c1602b",
  roughness: 0.6,
  metalness: 0.05,
});

// Warm off-white, not cool grey — the reference ground reads as sunlit
// site paving, not a neutral studio floor.
export const groundMaterial = new THREE.MeshStandardMaterial({
  color: "#e9e3d6",
  roughness: 0.97,
  metalness: 0,
});

// Foreground robot — glossy off-white shell (a shade brighter/glossier
// than the matte helmet) and a dark undercarriage, so it reads as a
// small piece of hardware rather than another construction material.
export const robotShellMaterial = new THREE.MeshStandardMaterial({
  color: "#f3f2ee",
  roughness: 0.25,
  metalness: 0.1,
  envMapIntensity: 1.1,
});

export const robotBaseMaterial = new THREE.MeshStandardMaterial({
  color: "#2c3038",
  roughness: 0.4,
  metalness: 0.35,
  envMapIntensity: 1,
});

// Debug-only: applied instead of the materials above while a piece of
// geometry is still being blocked out, so proportions can be reviewed
// before PBR/lighting are wired in.
export const wireframeMaterial = new THREE.MeshBasicMaterial({
  color: "#0d47a1",
  wireframe: true,
});
