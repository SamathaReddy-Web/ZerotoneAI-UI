// JS mirror of the duration/easing tokens in app/globals.css (`--duration-*`,
// `--ease-out`). Kept as plain numbers/arrays here since Motion/GSAP need
// JS values, not CSS custom properties — update both places together.
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.2,
  ui: 0.4,
  section: 0.8,
  cinematic: 1.4,
} as const;
