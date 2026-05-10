"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CountUp — animates a number from 0 to `to` when scrolled into view.
 * Eased with cubic-out for a satisfying decelerate.
 */
export default function CountUp({
  to = 100,
  duration = 1600,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0,
}) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setN(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (t) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(to * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}
