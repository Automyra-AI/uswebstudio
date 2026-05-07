"use client";

import { useState } from "react";
import HexIcon from "./HexIcon";

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
  const t = TESTIMONIALS[active];

  return (
    <section className="bg-[#f5f7fb] py-20 lg:py-28 text-navy-900 relative overflow-hidden">
      {/* subtle decorative shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 w-72 h-72 rounded-full bg-navy-900/[0.03]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 w-96 h-96 rounded-full bg-navy-900/[0.03]"
      />

      <div className="container-x relative">
        <div className="flex items-center gap-3 justify-center">
          <HexIcon size={28} />
          <span className="text-sm font-bold tracking-[0.25em] text-navy-900">
            GET WHAT YOU SEE
          </span>
        </div>

        <h2 className="text-center text-4xl lg:text-6xl font-bold text-navy-900 mt-4">
          What Our Clients say
        </h2>

        {/* tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {["Remodeling", "Air Duct", "Painting"].map((label, idx) => (
            <button
              key={label}
              onClick={() => setActive(idx)}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                active === idx
                  ? "bg-navy-900 text-white"
                  : "bg-transparent text-navy-900 border border-navy-900/20 hover:bg-navy-900 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
          <a href="#" className="text-navy-900 underline font-semibold ml-2">
            See All
          </a>
        </div>

        {/* testimonial card */}
        <div className="mt-14 grid lg:grid-cols-[minmax(0,560px)_1fr] gap-12 items-center max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-[#fbe4e7] border border-navy-900/15 p-4 shadow-sm">
            <div className="relative aspect-[5/4] rounded-2xl overflow-hidden">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActive((active + 1) % TESTIMONIALS.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-brand-red hover:text-white transition"
                aria-label="Next testimonial"
              >
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-3xl lg:text-5xl font-bold text-navy-900">
              {t.name}
            </h3>
            <p className="mt-3 text-brand-red font-semibold text-lg lg:text-xl">
              {t.role}
            </p>
            <p className="mt-6 text-navy-900/75 leading-relaxed text-base lg:text-lg">
              {t.quote}
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 border-2 border-navy-900 text-navy-900 px-7 py-3 rounded-full font-semibold hover:bg-navy-900 hover:text-white transition"
            >
              Case Study <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
