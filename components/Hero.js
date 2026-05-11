"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import HexIcon from "./HexIcon";
import LetterReveal from "./LetterReveal";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

// 3D scene only on client + only when needed (keeps initial bundle small)
const Hero3DScene = dynamic(() => import("./Hero3DScene"), { ssr: false });

export default function Hero() {
  const visualRef = useRef(null);

  // Subtle mouse-tracked parallax on the speech bubbles
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
      {/* Soft cool gradient bottom - replaces heavy red wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-900/70 to-transparent"
      />

      {/* One restrained red accent — far right, low opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/3 hidden lg:block w-[520px] h-[520px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(225,29,42,0.35) 0%, rgba(90,10,18,0.25) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Subtle dotted-grid mesh background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          {/* LEFT */}
          <div>
            <Reveal variant="up" duration={600}>
              <div className="flex items-center gap-3 mb-8">
                <span className="animate-spin-slow inline-block">
                  <HexIcon size={28} />
                </span>
                <span className="text-xs font-bold tracking-[0.3em] text-white/80 overflow-hidden inline-block">
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
              <span className="block bg-gradient-to-r from-white via-brand-red to-white bg-clip-text text-transparent animate-gradient">
                <LetterReveal
                  as="span"
                  text="Brilliance."
                  stagger={50}
                  startDelay={900}
                />
              </span>
            </h1>

            <Reveal variant="up" delay={1300} duration={700}>
              <p className="mt-8 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
                Full-service digital craftsmanship — websites, brand,
                paid media, SEO and AI-driven growth. Everything your
                brand needs to perform, in one place.
              </p>
            </Reveal>

            <Reveal variant="up" delay={1500} duration={700}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.4}>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-navy-900 px-7 py-4 rounded-full font-semibold relative overflow-hidden group/btn"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-brand-red translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                    />
                    <span className="relative z-10 group-hover/btn:text-white transition-colors">
                      Start a Project
                    </span>
                    <i className="fa-solid fa-arrow-right relative z-10 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </a>
                </Magnetic>

                <Magnetic strength={0.3}>
                  <a
                    href="/projects"
                    className="inline-flex items-center gap-2 text-white/85 hover:text-white px-2 py-4 font-medium group/sec"
                  >
                    <span className="relative">
                      View our work
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/70 origin-left scale-x-100 group-hover/sec:scale-x-0 transition-transform duration-300" />
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand-red origin-right scale-x-0 group-hover/sec:scale-x-100 transition-transform duration-300 delay-150" />
                    </span>
                    <i className="fa-solid fa-arrow-right transition-transform group-hover/sec:translate-x-1" />
                  </a>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal variant="up" delay={1700} duration={600}>
              <div className="mt-16">
                <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-4">
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  {[
                    {
                      i: "linkedin-in",
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/company/advertisinglab",
                    },
                    {
                      i: "instagram",
                      label: "Instagram",
                      href: "https://www.instagram.com/advertisinglab",
                    },
                    {
                      i: "facebook-f",
                      label: "Facebook",
                      href: "https://www.facebook.com/advertisinglab",
                    },
                  ].map((s) => (
                    <Magnetic key={s.i} strength={0.5}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center hover:bg-white hover:text-navy-900 hover:border-white transition-all duration-300"
                      >
                        <i className={`fa-brands fa-${s.i} text-base`} />
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — 3D scene */}
          <div
            ref={visualRef}
            className="relative h-[460px] sm:h-[520px] lg:h-[560px] hidden md:block"
            data-cursor="hover"
          >
            <Hero3DScene className="absolute inset-0" />

            {/* Speech bubble — white glass */}
            <div
              className="absolute top-6 left-2 sm:left-6 bg-white/95 backdrop-blur-sm text-navy-900 px-5 py-3 rounded-full shadow-2xl text-sm font-semibold leading-tight ring-1 ring-white/40 animate-bubble-1 transition-transform duration-500"
              style={{
                transform:
                  "translate(calc(var(--mx, 0) * -22px), calc(var(--my, 0) * -15px))",
              }}
            >
              Coding your problems away.
            </div>

            {/* Speech bubble — navy glass with red dot */}
            <div
              className="absolute bottom-10 right-0 sm:right-4 bg-navy-900/85 backdrop-blur-sm text-white px-5 py-3 rounded-full shadow-2xl text-sm font-semibold leading-tight ring-1 ring-white/15 animate-bubble-2 transition-transform duration-500 flex items-center gap-2"
              style={{
                transform:
                  "translate(calc(var(--mx, 0) * 22px), calc(var(--my, 0) * 15px))",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              360° Marketing solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
