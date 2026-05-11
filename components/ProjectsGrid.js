"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { PROJECTS } from "@/lib/projects-data";

const FILTERS = ["All", "Website", "Meta Ads", "Google Ads", "Social Media"];

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
            <Reveal key={p.slug} variant="up" delay={i * 80} duration={650}>
              <TiltCard max={5} scale={1.02} className="h-full">
                <Link
                  href={`/projects/${p.slug}`}
                  className="block rounded-2xl bg-white border border-navy-900/10 shadow-sm overflow-hidden flex flex-col min-h-[380px] sm:min-h-[420px] group hover:border-brand-red hover:shadow-2xl transition-all duration-500 h-full"
                >
                  <div className="relative p-5 sm:p-7 pb-10 sm:pb-12 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-brand-red transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-navy-900/85 font-medium">
                      {p.subtitle}
                    </p>
                    <p className="mt-4 sm:mt-5 text-navy-900/60 leading-relaxed text-xs sm:text-sm">
                      {p.short}
                    </p>
                    <span
                      aria-hidden="true"
                      className="absolute right-4 sm:right-5 bottom-1 sm:bottom-2 text-[90px] sm:text-[120px] font-extrabold leading-none text-navy-900/10 group-hover:text-brand-red/15 transition-colors duration-500 select-none"
                    >
                      {p.num}
                    </span>
                  </div>

                  <span
                    className="relative px-5 sm:px-7 py-3 sm:py-4 text-white font-medium underline underline-offset-4 transition overflow-hidden flex items-center justify-between"
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
                    <i className="fa-solid fa-arrow-right relative z-10 transition-transform group-hover:translate-x-1" />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(-45deg, rgba(255,255,255,0.18) 0, rgba(255,255,255,0.18) 4px, transparent 4px, transparent 8px)",
                      }}
                    />
                  </span>
                </Link>
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
