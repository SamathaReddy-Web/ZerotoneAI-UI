// Shared PBR materials for the hero 3D scene.
import * as THREE from "three";

// Architectural warm concrete tones
export const concreteMaterial = new THREE.MeshStandardMaterial({
  color: "#d8d3c5",
  roughness: 0.72,
  metalness: 0.02,
});

export const concreteColumnMaterial = new THREE.MeshStandardMaterial({
  color: "#c6c0b0",
  roughness: 0.75,
  metalness: 0.02,
});

export const concreteCoreMaterial = new THREE.MeshStandardMaterial({
  color: "#8c8577",
  roughness: 0.68,
  metalness: 0.04,
});

export const steelMaterial = new THREE.MeshStandardMaterial({
  color: "#334155",
  roughness: 0.35,
  metalness: 0.8,
  envMapIntensity: 1.2,
});

export const craneBlueMaterial = new THREE.MeshStandardMaterial({
  color: "#155fd4", // Zerotone construction blue
  roughness: 0.38,
  metalness: 0.35,
  envMapIntensity: 1.1,
});

export const craneGreyMaterial = new THREE.MeshStandardMaterial({
  color: "#475569",
  roughness: 0.4,
  metalness: 0.6,
  envMapIntensity: 1,
});

export const counterweightMaterial = new THREE.MeshStandardMaterial({
  color: "#94a3b8",
  roughness: 0.8,
  metalness: 0.05,
});

// Pristine Glossy Safety Hardhat Shell
export const helmetMaterial = new THREE.MeshStandardMaterial({
  color: "#ffffff",
  roughness: 0.15,
  metalness: 0.05,
  envMapIntensity: 1.5,
});

export const helmetAccentMaterial = new THREE.MeshStandardMaterial({
  color: "#155fd4",
  roughness: 0.2,
  metalness: 0.25,
  envMapIntensity: 1.2,
});

export const helmetHarnessMaterial = new THREE.MeshStandardMaterial({
  color: "#1e293b",
  roughness: 0.6,
  metalness: 0.2,
});

export const formworkMaterial = new THREE.MeshStandardMaterial({
  color: "#b49b75",
  roughness: 0.85,
  metalness: 0.01,
});

export const safetyYellowMaterial = new THREE.MeshStandardMaterial({
  color: "#facc15",
  roughness: 0.35,
  metalness: 0.15,
  envMapIntensity: 0.9,
});

export const safetyOrangeMaterial = new THREE.MeshStandardMaterial({
  color: "#ea580c",
  roughness: 0.5,
  metalness: 0.1,
});

export const groundMaterial = new THREE.MeshStandardMaterial({
  color: "#f8fafc",
  roughness: 0.95,
  metalness: 0,
});

export const neonCircuitMaterial = new THREE.MeshStandardMaterial({
  color: "#38bdf8",
  emissive: "#0284c7",
  emissiveIntensity: 1.4,
  roughness: 0.2,
  metalness: 0.1,
});

export const wireframeMaterial = new THREE.MeshBasicMaterial({
  color: "#0d47a1",
  wireframe: true,
});
