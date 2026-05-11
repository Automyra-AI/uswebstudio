"use client";

import dynamic from "next/dynamic";
import HexIcon from "./HexIcon";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

const Hero3DScene = dynamic(() => import("./Hero3DScene"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-24 lg:pb-32 lg:pt-44">
      {/* One restrained accent — soft red glow, far right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/3 hidden lg:block w-[520px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(225,29,42,0.22) 0%, rgba(90,10,18,0.16) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle editorial dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <Reveal variant="up" duration={700}>
              <div className="flex items-center gap-3 mb-10">
                <HexIcon size={24} />
                <span className="text-[11px] font-semibold tracking-[0.35em] text-white/55 uppercase">
                  An advertising studio
                </span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={120} duration={900}>
              <h1 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] font-semibold leading-[1.02] tracking-[-0.02em]">
                <span className="block text-white">Crafted advertising</span>
                <span className="block text-white">that earns its place</span>
                <span className="block text-brand-red">in your brand.</span>
              </h1>
            </Reveal>

            <Reveal variant="up" delay={300} duration={800}>
              <p className="mt-10 max-w-lg text-base lg:text-lg text-white/60 leading-relaxed">
                Brand, web, paid media, SEO — engineered by a small,
                senior team for ambitious brands that need craft and
                results in equal measure.
              </p>
            </Reveal>

            <Reveal variant="up" delay={450} duration={800}>
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <Magnetic strength={0.25}>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-white text-navy-900 pl-7 pr-3 py-2 rounded-full font-medium text-sm group/btn hover:bg-brand-red hover:text-white transition-colors duration-300"
                  >
                    Start a project
                    <span className="inline-flex w-9 h-9 rounded-full bg-navy-900 text-white items-center justify-center group-hover/btn:bg-white group-hover/btn:text-brand-red transition-colors">
                      <i className="fa-solid fa-arrow-right text-xs" />
                    </span>
                  </a>
                </Magnetic>

                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium group/sec"
                >
                  <span className="relative">
                    Selected work
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white/40 group-hover/sec:bg-white transition-colors" />
                  </span>
                  <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover/sec:translate-x-1" />
                </a>
              </div>
            </Reveal>

            <Reveal variant="up" delay={600} duration={700}>
              <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { v: "12+", l: "Years" },
                  { v: "80+", l: "Brands" },
                  { v: "9", l: "Services" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                      {s.v}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/45">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — 3D scene */}
          <div
            className="relative h-[420px] sm:h-[500px] lg:h-[600px] hidden md:block"
            data-cursor="hover"
          >
            <Hero3DScene className="absolute inset-0" />

            {/* Tiny vertical scroll cue */}
            <div
              aria-hidden="true"
              className="absolute -bottom-2 right-2 hidden lg:flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-[0.3em] uppercase"
            >
              <span className="rotate-90 origin-center mt-3">Scroll</span>
              <span className="w-px h-10 bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
