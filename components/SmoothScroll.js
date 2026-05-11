"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll — wraps the app so every scroll feels buttery.
 * Initialise once at the root. Lenis takes over the scroll loop.
 *
 * Notes:
 *  - Disables itself on mobile (touch scrolling is already native + faster)
 *  - Respects prefers-reduced-motion
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
    });

    let raf;
    function tick(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
