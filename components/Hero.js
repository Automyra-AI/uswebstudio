"use client";

import { useEffect, useRef } from "react";
import HexIcon from "./HexIcon";
import LetterReveal from "./LetterReveal";
import Magnetic from "./Magnetic";
import TiltCard from "./TiltCard";
import Reveal from "./Reveal";

export default function Hero() {
  const visualRef = useRef(null);

  // Mouse-tracked parallax: speech bubbles drift with cursor
  useEffect(() => {
    const node = visualRef.current;
    if (!node) return;

    function move(e) {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const y = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      node.style.setProperty("--mx", x.toFixed(3));
      node.style.setProperty("--my", y.toFixed(3));
    }

    function leave() {
      node.style.setProperty("--mx", "0");
      node.style.setProperty("--my", "0");
    }

    node.addEventListener("mousemove", move);
    node.addEventListener("mouseleave", leave);
    return () => {
      node.removeEventListener("mousemove", move);
      node.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy-950 pt-28 pb-20 lg:pb-32 lg:pt-40">
      {/* Floating red circular gradient (right side) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 hidden lg:block"
      >
        <div className="hero-circle h-[760px] w-[760px] rounded-full opacity-95 animate-float-slow" />
      </div>

      {/* Drifting red triangular accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[44%] top-12 hidden lg:block animate-float-slow-reverse"
        style={{
          width: 0,
          height: 0,
          borderLeft: "60px solid transparent",
          borderRight: "60px solid transparent",
          borderTop: "180px solid #e11d2a",
          opacity: 0.85,
        }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute block w-1 h-1 rounded-full bg-white/30 animate-particle"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${(i * 0.6) % 8}s`,
              animationDuration: `${8 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <Reveal variant="up" duration={600}>
              <div className="flex items-center gap-3 mb-8">
                <span className="animate-spin-slow inline-block">
                  <HexIcon size={28} />
                </span>
                <span className="text-sm font-bold tracking-[0.25em] text-white/90 overflow-hidden inline-block">
                  <span className="inline-block animate-slide-in">
                    ELEVATE YOUR BUSINESS
                  </span>
                </span>
              </div>
            </Reveal>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              <LetterReveal
                as="span"
                text="Empowering Local"
                stagger={28}
                className="block"
              />
              <LetterReveal
                as="span"
                text="Brands with Digital"
                stagger={28}
                startDelay={400}
                className="block"
              />
              <span className="block bg-gradient-to-r from-brand-red via-pink-400 to-brand-red bg-clip-text text-transparent animate-gradient">
                <LetterReveal
                  as="span"
                  text="Brilliance"
                  stagger={50}
                  startDelay={900}
                />
              </span>
            </h1>

            <Reveal variant="up" delay={1300} duration={700}>
              <p className="mt-8 max-w-xl text-base lg:text-lg text-white/75 leading-relaxed">
                We help businesses grow online by handling everything — from
                logo design and websites to social media, ads, and smart
                automation. Whether you&apos;re just starting out or improving
                your online presence, our team makes it easy, effective, and
                stress-free.
              </p>
            </Reveal>

            <Reveal variant="up" delay={1500} duration={700}>
              <Magnetic strength={0.4}>
                <a
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-full font-semibold relative overflow-hidden group/btn"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-brand-red translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                  />
                  <span className="relative z-10 group-hover/btn:text-white transition-colors">
                    Contact Us
                  </span>
                  <i className="fa-solid fa-arrow-right relative z-10 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </a>
              </Magnetic>
            </Reveal>

            <Reveal variant="up" delay={1700} duration={600}>
              <div className="mt-16">
                <p className="text-white/70 text-sm mb-4">Follow Us</p>
                <div className="flex items-center gap-3">
                  {[
                    { i: "linkedin-in", label: "LinkedIn" },
                    { i: "instagram", label: "Instagram" },
                    { i: "facebook-f", label: "Facebook" },
                  ].map((s, idx) => (
                    <Magnetic key={s.i} strength={0.5}>
                      <a
                        href="#"
                        aria-label={s.label}
                        className="w-12 h-12 rounded-md border border-white/30 flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:rotate-12 transition-all duration-300"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <i className={`fa-brands fa-${s.i} text-white text-lg`} />
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div ref={visualRef} className="relative h-[520px] hidden lg:block group">
            <div className="absolute inset-0 flex items-center justify-center">
              <TiltCard max={12} scale={1.04} className="rounded-full" glare>
                <div className="relative w-[460px] h-[460px] rounded-full overflow-hidden shadow-2xl ring-4 ring-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80"
                    alt="Developer at work"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* shimmer overlay */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms]"
                  />
                </div>
              </TiltCard>
            </div>

            {/* Speech bubble 1 — drifts with cursor */}
            <div
              className="absolute top-16 left-4 bg-white text-navy-900 px-6 py-4 rounded-full shadow-2xl font-semibold leading-tight max-w-[230px] animate-bubble-1 transition-transform duration-300"
              style={{
                transform:
                  "translate(calc(var(--mx, 0) * -20px), calc(var(--my, 0) * -15px))",
              }}
            >
              Coding your
              <br />
              problems away.
            </div>

            {/* Speech bubble 2 — drifts opposite direction */}
            <div
              className="absolute bottom-16 right-2 bg-gradient-to-r from-brand-red to-[#7a0e16] text-white px-7 py-4 rounded-full shadow-2xl font-semibold leading-tight animate-bubble-2 transition-transform duration-300"
              style={{
                transform:
                  "translate(calc(var(--mx, 0) * 20px), calc(var(--my, 0) * 15px))",
              }}
            >
              360° Marketing
              <br />
              solutions
            </div>

            {/* Decorative orbiting dot */}
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 w-3 h-3 bg-brand-red rounded-full shadow-[0_0_20px_#e11d2a] animate-orbit"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
