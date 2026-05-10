"use client";

import { useRef } from "react";

/**
 * TiltCard — applies a subtle 3D tilt that follows the cursor.
 * Wrap a card with this component for a "premium" hover feel.
 */
export default function TiltCard({
  children,
  max = 8,
  scale = 1.02,
  className = "",
  glare = false,
}) {
  const ref = useRef(null);
  const glareRef = useRef(null);

  function handleMove(e) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -2 * max;
    const ry = (px - 0.5) * 2 * max;
    node.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;

    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${
        py * 100
      }%, rgba(255,255,255,0.18), transparent 50%)`;
      glareRef.current.style.opacity = "1";
    }
  }

  function reset() {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(1100px) rotateX(0) rotateY(0) scale(1)";
    }
    if (glareRef.current) glareRef.current.style.opacity = "0";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      {glare && (
        <span
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
        />
      )}
    </div>
  );
}
