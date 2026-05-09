"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal — wraps children and animates them in when they scroll into view.
 *
 * Props:
 *   variant: "up" | "left" | "right" | "fade" | "zoom"
 *   delay:   ms before the animation starts (after element is visible)
 *   duration: ms (default 700)
 *   once:    only animate once (default true)
 *   as:      element tag (default "div")
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 700,
  once = true,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [once]);

  const initial = {
    up: "opacity-0 translate-y-8",
    left: "opacity-0 -translate-x-8",
    right: "opacity-0 translate-x-8",
    fade: "opacity-0",
    zoom: "opacity-0 scale-95",
  }[variant];

  const final = "opacity-100 translate-x-0 translate-y-0 scale-100";

  return (
    <Tag
      ref={ref}
      className={`will-change-transform transition-all ease-out ${
        visible ? final : initial
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
