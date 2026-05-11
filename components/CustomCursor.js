"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CustomCursor — replaces the system cursor with a refined dual-layer dot.
 * - A small solid dot that follows the cursor exactly.
 * - A larger ring that trails with slight delay, scales on hoverables,
 *   and absorbs the dot when clicking links/buttons.
 *
 * Disabled on touch devices and reduced-motion users.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;
    let scale = 1;
    let opacity = 0;

    function onMove(e) {
      mx = e.clientX;
      my = e.clientY;
      opacity = 1;
    }
    function onLeave() {
      opacity = 0;
    }
    function onEnter() {
      opacity = 1;
    }

    function onDown() {
      scale = 0.6;
    }
    function onUp() {
      scale = 1;
    }

    function onOver(e) {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='hover']"
      );
      scale = interactive ? 2.6 : 1;
    }
    function onOut() {
      scale = 1;
    }

    function tick() {
      // Trailing easing for the ring
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
        dotRef.current.style.opacity = opacity;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.style.opacity = opacity;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseout", onOut, true);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseout", onOut, true);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <span
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-9 h-9 rounded-full border border-white/60 mix-blend-difference"
        style={{
          transition: "transform 80ms ease-out, opacity 200ms ease",
          willChange: "transform, opacity",
          opacity: 0,
        }}
      />
      <span
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-white mix-blend-difference"
        style={{
          transition: "opacity 200ms ease",
          willChange: "transform, opacity",
          opacity: 0,
        }}
      />
    </>
  );
}
