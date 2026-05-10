"use client";

import { useRef } from "react";

/**
 * Magnetic — child element pulls toward the cursor on hover.
 * Wrap a button or link inside <Magnetic>...</Magnetic>.
 */
export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}) {
  const ref = useRef(null);

  function handleMove(e) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function reset() {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  }

  return (
    <span
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`inline-block ${className}`}
    >
      <span
        ref={ref}
        className="inline-block transition-transform duration-300 ease-out will-change-transform"
      >
        {children}
      </span>
    </span>
  );
}
