"use client";

/**
 * GrainOverlay — fixed full-viewport SVG noise.
 * Adds a subtle filmic grain that makes flat surfaces feel premium.
 * Renders behind interactive content (z-50) but on top of everything else.
 */
export default function GrainOverlay({ opacity = 0.06 }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[40] mix-blend-overlay"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
        backgroundSize: "200px 200px",
      }}
    />
  );
}
