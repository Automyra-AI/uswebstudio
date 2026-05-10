"use client";

import { useRef } from "react";

/**
 * Spotlight — wraps a section/grid and shows a soft glow that follows the cursor.
 * Set CSS variable color via the `color` prop (any rgba/hsla string).
 */
export default function Spotlight({
  children,
  color = "rgba(225,29,42,0.18)",
  size = 600,
  className = "",
}) {
  const ref = useRef(null);

  function handleMove(e) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    node.style.setProperty("--spot-opacity", "1");
  }

  function reset() {
    if (ref.current) ref.current.style.setProperty("--spot-opacity", "0");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`relative ${className}`}
      style={{
        "--spot-opacity": "0",
        "--spot-x": "50%",
        "--spot-y": "50%",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: "var(--spot-opacity)",
          background: `radial-gradient(${size}px circle at var(--spot-x) var(--spot-y), ${color}, transparent 45%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
