"use client";

import { useSyncExternalStore } from "react";

// Extracted from the inline version originally in Hero.tsx so
// CustomCursor and any future pointer-aware component share one
// subscription instead of re-deriving it.
function subscribe(callback: () => void) {
  const mq = window.matchMedia("(pointer: fine)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
function getSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}
function getServerSnapshot() {
  return false;
}

/** True once hydrated on a device with a precise pointer (mouse/trackpad). */
export function useFinePointer() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
