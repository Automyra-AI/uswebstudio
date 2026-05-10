"use client";

import { useState, useEffect } from "react";
import HexIcon from "./HexIcon";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

const TESTIMONIALS = [
  {
    name: "James Walker",
    role: "Architectural & Remodelling (Cadhauz)",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    quote:
      "Working with US Web Studio completely transformed our brand. Before, our marketing felt scattered and our ads were not bringing in real results. Their team rebuilt our social presence with a clean, professional look and managed our paid campaigns to bring in real clients. Within months our revenue grew well beyond what we expected, and we keep scaling. They didn't just run ads — they built a strategy that worked.",
  },
  {
    name: "Sarah Mitchell",
    role: "Air Duct Pros (Cleaning Services)",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&q=80",
    quote:
      "The team rebuilt our funnel from the ground up. We had no online leads before — now we book jobs every single day from their landing pages and ad campaigns. Communication has been smooth and they truly understand the home services space.",
  },
  {
    name: "Michael Chen",
    role: "ProPaint Studio (Painting)",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80",
    quote:
      "Branding, website, ads — they handled everything end to end. Our phones ring with high-intent leads now. The thing that stood out was how well they understood our customers and translated that into copy that converts.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  function go(idx) {
    if (idx === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 220);
  }

  // Auto-rotate every 8s, pauses on user interaction
  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((a) => (a + 1) % TESTIMONIALS.length);
        setFading(false);
      }, 220);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section className="bg-[#f5f7fb] py-16 sm:py-20 lg:py-28 text-navy-900 relative overflow-hidden">
      {/* subtle decorative shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 w-72 h-72 rounded-full bg-navy-900/[0.03] animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 w-96 h-96 rounded-full bg-navy-900/[0.03] animate-float-slow-reverse"
      />

      <div className="container-x relative">
        <Reveal variant="up" duration={600}>
          <div className="flex items-center gap-3 justify-center">
            <HexIcon size={28} />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-navy-900">
              GET WHAT YOU SEE
            </span>
          </div>
        </Reveal>

        <Reveal variant="up" delay={120} duration={750}>
          <h2 className="text-center text-3xl sm:text-4xl lg:text-6xl font-bold text-navy-900 mt-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-navy-900 via-brand-red to-navy-900 bg-clip-text text-transparent animate-gradient">
              Clients say
            </span>
          </h2>
        </Reveal>

        {/* tabs */}
        <Reveal variant="up" delay={250} duration={650}>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {["Remodeling", "Air Duct", "Painting"].map((label, idx) => (
              <button
                key={label}
                onClick={() => go(idx)}
                className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  active === idx
                    ? "bg-navy-900 text-white scale-105 shadow-lg"
                    : "bg-transparent text-navy-900 border border-navy-900/20 hover:bg-navy-900 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href="/reviews"
              className="text-navy-900 underline font-semibold ml-2 text-sm sm:text-base hover:text-brand-red transition"
            >
              See All
            </a>
          </div>
        </Reveal>

        {/* testimonial card */}
        <Reveal variant="up" delay={350} duration={700}>
          <div className="mt-10 sm:mt-14 grid lg:grid-cols-[minmax(0,560px)_1fr] gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative rounded-3xl bg-[#fbe4e7] border border-navy-900/15 p-3 sm:p-4 shadow-sm">
              <div className="relative aspect-[5/4] rounded-2xl overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    fading ? "opacity-0 scale-105" : "opacity-100 scale-100"
                  }`}
                />
                <button
                  onClick={() =>
                    go((active + 1) % TESTIMONIALS.length)
                  }
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-45"
                  aria-label="Next testimonial"
                >
                  <i className="fa-solid fa-chevron-right" />
                </button>
              </div>

              {/* dot indicators */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-white border border-navy-900/10 rounded-full px-3 py-1.5 shadow-md">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`block w-2 h-2 rounded-full transition-all ${
                      i === active
                        ? "bg-brand-red w-6"
                        : "bg-navy-900/30 hover:bg-navy-900/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-500 ${
                fading
                  ? "opacity-0 translate-y-3"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {/* big decorative quote mark */}
              <span
                aria-hidden="true"
                className="absolute -top-8 -left-2 text-7xl sm:text-9xl font-serif text-brand-red/15 leading-none select-none"
              >
                &ldquo;
              </span>

              <h3 className="relative text-2xl sm:text-3xl lg:text-5xl font-bold text-navy-900">
                {t.name}
              </h3>
              <p className="mt-2 sm:mt-3 text-brand-red font-semibold text-base sm:text-lg lg:text-xl">
                {t.role}
              </p>
              <p className="mt-4 sm:mt-6 text-navy-900/75 leading-relaxed text-sm sm:text-base lg:text-lg">
                {t.quote}
              </p>

              <Magnetic strength={0.25}>
                <a
                  href="/projects"
                  className="mt-6 sm:mt-8 inline-flex items-center gap-2 border-2 border-navy-900 text-navy-900 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-navy-900 hover:text-white transition group/btn"
                >
                  Case Study
                  <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
