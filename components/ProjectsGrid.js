"use client";

import { useState, useMemo } from "react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const FILTERS = ["All", "Website", "Meta Ads", "Google Ads", "Social Media"];

const PROJECTS = [
  { num: "01", title: "Chris Painting", subtitle: "Home Painting Solutions", body: "Chris Painting needed a professional website that could showcase their craft and bring in steady local leads.", tags: ["Website"] },
  { num: "02", title: "KYB", subtitle: "Marketing Agency Website", body: "KYB wanted a fully custom website that not only looked sharp but followed a structured conversion flow.", tags: ["Website"] },
  { num: "03", title: "Ecology Spray Foam", subtitle: "Spray Foam Insulation Business", body: "Ecology Spray Foam's old Squarespace site was slow and outdated. We rebuilt it from scratch for performance.", tags: ["Website"] },
  { num: "04", title: "D&I", subtitle: "Air Duct Cleaning Business", body: "After scaling successfully with Meta Ads, D&I expanded into Google Ads to capture high-intent search traffic.", tags: ["Google Ads", "Meta Ads"] },
  { num: "05", title: "Cadhauz", subtitle: "Architectural & Remodelling", body: "By mid-2025, Cadhauz was struggling to bring in new business. We rebuilt their funnel and ad creatives.", tags: ["Meta Ads"] },
  { num: "06", title: "D&I", subtitle: "Air Duct Cleaning", body: "D&I's Meta ads started strong, with a single video creative driving solid results before scaling stalled.", tags: ["Meta Ads"] },
  { num: "07", title: "Airways", subtitle: "Air Duct Cleaning Business", body: "Airways faced the same issue as many service businesses — solid demand, but unreliable lead flow.", tags: ["Meta Ads", "Social Media"] },
  { num: "08", title: "D&I", subtitle: "Air Duct Cleaning Business", body: "After scaling successfully with Meta Ads, D&I Air Duct doubled down on multi-channel performance.", tags: ["Google Ads"] },
];

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.tags.includes(active)),
    [active]
  );

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 text-navy-900">
      <div className="container-x">
        {/* Filter pill */}
        <Reveal variant="up" duration={650}>
          <div
            className="mx-auto w-fit max-w-full rounded-full p-2 sm:p-3 lg:p-4 mb-10 sm:mb-14 shadow-2xl"
            style={{
              background:
                "linear-gradient(90deg, #2a0a14 0%, #b8141f 25%, #e11d2a 50%, #b8141f 75%, #2a0a14 100%)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 6s ease infinite",
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                    active === f
                      ? "bg-white text-navy-900 scale-105 shadow-lg"
                      : "bg-navy-900 text-white hover:bg-navy-700 hover:scale-105"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.num} variant="up" delay={i * 80} duration={650}>
              <TiltCard max={5} scale={1.02} className="h-full">
                <article className="rounded-2xl bg-white border border-navy-900/10 shadow-sm overflow-hidden flex flex-col min-h-[380px] sm:min-h-[420px] group hover:border-brand-red hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="relative p-5 sm:p-7 pb-10 sm:pb-12 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-brand-red transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-navy-900/85 font-medium">
                      {p.subtitle}
                    </p>
                    <p className="mt-4 sm:mt-5 text-navy-900/60 leading-relaxed text-xs sm:text-sm">
                      {p.body}
                    </p>
                    <span
                      aria-hidden="true"
                      className="absolute right-4 sm:right-5 bottom-1 sm:bottom-2 text-[90px] sm:text-[120px] font-extrabold leading-none text-navy-900/10 group-hover:text-brand-red/15 transition-colors duration-500 select-none"
                    >
                      {p.num}
                    </span>
                  </div>

                  <a
                    href="#"
                    className="relative px-5 sm:px-7 py-3 sm:py-4 text-white font-medium underline underline-offset-4 hover:text-white/90 transition overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(90deg, #1f7da6 0%, #0d3a6a 60%, #0a1530 100%)",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms]"
                    />
                    <span className="relative z-10">Read More</span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(-45deg, rgba(255,255,255,0.18) 0, rgba(255,255,255,0.18) 4px, transparent 4px, transparent 8px)",
                      }}
                    />
                  </a>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-navy-900/60 mt-12">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
