"use client";

import { useState, useEffect } from "react";
import HexIcon from "./HexIcon";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    name: "James Walker",
    role: "Architectural & Remodelling — Cadhauz",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85",
    quote:
      "AdvertisingLab rebuilt our social presence with a clean, professional look and managed our paid campaigns to bring in real clients. Within months our revenue grew well beyond what we expected.",
  },
  {
    name: "Sarah Mitchell",
    role: "Air Duct Pros — Cleaning Services",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1600&q=85",
    quote:
      "They rebuilt our funnel from the ground up. We had no online leads before — now we book jobs every single day from their landing pages and ad campaigns.",
  },
  {
    name: "Michael Chen",
    role: "ProPaint Studio — Painting",
    image: "/images/testimonial-propaint.png",
    quote:
      "Branding, website, ads — they handled everything end to end. Our phones ring with high-intent leads now. They translated our customers into copy that converts.",
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
    }, 280);
  }

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((a) => (a + 1) % TESTIMONIALS.length);
        setFading(false);
      }, 280);
    }, 9000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section className="bg-[#f7f8fb] py-20 sm:py-24 lg:py-32 text-navy-900 relative overflow-hidden border-t border-navy-900/[0.06]">
      <div className="container-x relative">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <Reveal variant="up" duration={700}>
            <div className="flex items-center gap-3">
              <HexIcon size={24} />
              <span className="text-[11px] font-semibold tracking-[0.3em] text-navy-900/55 uppercase">
                In their words
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={100} duration={800}>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.02em] leading-[1.05] text-navy-900">
              What our clients say.
            </h2>
          </Reveal>
        </div>

        <Reveal variant="up" delay={200} duration={800}>
          <div className="grid lg:grid-cols-[minmax(0,520px)_1fr] gap-10 lg:gap-16 items-center max-w-6xl">
            <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-navy-900">
              <img
                src={t.image}
                alt={t.name}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  fading ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
                }`}
              />
            </div>

            <div
              className={`transition-opacity duration-500 ${
                fading ? "opacity-0" : "opacity-100"
              }`}
            >
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-navy-900 leading-[1.3] tracking-[-0.015em]">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-8 pt-6 border-t border-navy-900/10 flex items-center justify-between gap-6">
                <div>
                  <p className="font-semibold text-navy-900">{t.name}</p>
                  <p className="text-sm text-navy-900/55 mt-0.5">{t.role}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() =>
                      go(
                        (active - 1 + TESTIMONIALS.length) %
                          TESTIMONIALS.length
                      )
                    }
                    aria-label="Previous"
                    className="w-10 h-10 rounded-full border border-navy-900/15 flex items-center justify-center text-navy-900/70 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-colors"
                  >
                    <i className="fa-solid fa-arrow-left text-xs" />
                  </button>
                  <button
                    onClick={() => go((active + 1) % TESTIMONIALS.length)}
                    aria-label="Next"
                    className="w-10 h-10 rounded-full border border-navy-900/15 flex items-center justify-center text-navy-900/70 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-colors"
                  >
                    <i className="fa-solid fa-arrow-right text-xs" />
                  </button>
                </div>
              </div>

              {/* slim progress */}
              <div className="mt-6 flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`block h-px transition-all duration-500 ${
                      i === active
                        ? "w-12 bg-navy-900"
                        : "w-6 bg-navy-900/20 hover:bg-navy-900/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
