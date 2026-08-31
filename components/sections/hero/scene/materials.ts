// Shared PBR materials for the hero 3D scene. Instantiated once here and
// imported wherever needed — Building/Crane/Ground must never call `new
// MeshStandardMaterial(...)` inline, or every re-render would allocate a
// fresh GPU resource.
import * as THREE from "three";

export const concreteMaterial = new THREE.MeshStandardMaterial({
  color: "#c9c7c1",
  roughness: 0.92,
  metalness: 0.02,
});

// Metalness kept moderate (not near 1) because the scene has no
// environment map — very metallic MeshStandardMaterial surfaces rely on
// reflections to read as anything but flat black under direct lights alone.
export const steelMaterial = new THREE.MeshStandardMaterial({
  color: "#5a6b7d",
  roughness: 0.55,
  metalness: 0.35,
});

export const craneBlueMaterial = new THREE.MeshStandardMaterial({
  color: "#0d47a1",
  roughness: 0.45,
  metalness: 0.3,
});

export const helmetMaterial = new THREE.MeshStandardMaterial({
  color: "#f5b400",
  roughness: 0.55,
  metalness: 0.05,
});

export const groundMaterial = new THREE.MeshStandardMaterial({
  color: "#dfe3e8",
  roughness: 1,
  metalness: 0,
});

// Debug-only: applied instead of the materials above while a piece of
// geometry is still being blocked out, so proportions can be reviewed
// before PBR/lighting are wired in.
export const wireframeMaterial = new THREE.MeshBasicMaterial({
  color: "#0d47a1",
  wireframe: true,
});
