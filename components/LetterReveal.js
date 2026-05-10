"use client";

import { useEffect, useRef, useState } from "react";

/**
 * LetterReveal — splits text into characters that fade + slide up in sequence
 * once the element scrolls into view. Each character animates independently
 * for a wave-like reveal effect.
 *
 * Example:
 *   <LetterReveal as="h1" text="Empowering Local Brands" stagger={30} />
 */
export default function LetterReveal({
  text,
  as: Tag = "span",
  stagger = 25,
  duration = 700,
  className = "",
  startDelay = 0,
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShow(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShow(true);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");
  let charIndex = 0;

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
        >
          {Array.from(word).map((ch, ci) => {
            const delay = startDelay + charIndex * stagger;
            charIndex++;
            return (
              <span
                key={ci}
                className="inline-block will-change-transform"
                style={{
                  transition: `transform ${duration}ms cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}ms, opacity ${duration}ms ease ${delay}ms`,
                  transform: show ? "translateY(0)" : "translateY(0.6em)",
                  opacity: show ? 1 : 0,
                }}
              >
                {ch}
              </span>
            );
          })}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
