import Link from "next/link";
import HexIcon from "./HexIcon";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import Magnetic from "./Magnetic";
import { PLATFORMS } from "@/lib/platforms-data";

export default function PlatformDetail({ platform }) {
  const others = PLATFORMS.filter((p) => p.slug !== platform.slug).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-20 sm:pb-24 lg:pt-44 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
            opacity: 0.7,
            filter: "blur(2px)",
          }}
        />

        <div className="container-x relative z-10 max-w-4xl">
          <Reveal variant="fade" duration={500}>
            <Link
              href="/platforms"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-5 sm:mb-6 group"
            >
              <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1" />
              Back to Platforms
            </Link>
          </Reveal>

          <Reveal variant="up" delay={50} duration={600}>
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="animate-spin-slow inline-block">
                <HexIcon size={28} />
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white/90">
                PLATFORM
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={150} duration={800}>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
              {platform.name}
            </h1>
          </Reveal>

          <Reveal variant="up" delay={280} duration={700}>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-white/85 max-w-2xl">
              {platform.tagline}
            </p>
          </Reveal>

          <Reveal variant="up" delay={400} duration={700}>
            <Magnetic strength={0.35}>
              <Link
                href="/contact"
                className="mt-8 sm:mt-10 inline-flex items-center gap-2 bg-white text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold relative overflow-hidden group/btn"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-brand-red translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                />
                <span className="relative z-10 group-hover/btn:text-white transition-colors">
                  Get a Free Consultation
                </span>
                <i className="fa-solid fa-arrow-right relative z-10 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-8 sm:gap-12">
          <Reveal variant="left" duration={700}>
            <p className="text-brand-red font-semibold">Overview</p>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.1]">
              Why brands trust us with{" "}
              <span className="bg-gradient-to-r from-navy-900 via-brand-red to-navy-900 bg-clip-text text-transparent animate-gradient">
                {platform.name}
              </span>
              .
            </h2>
          </Reveal>

          <div className="space-y-4 sm:space-y-5 text-navy-900/75 leading-relaxed text-sm sm:text-base lg:text-lg">
            {platform.long.map((p, i) => (
              <Reveal key={i} variant="right" delay={i * 120} duration={700}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -bottom-32 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full animate-float-slow-reverse"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
            opacity: 0.45,
            filter: "blur(2px)",
          }}
        />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <Reveal variant="up" duration={600}>
              <p className="text-white/70 font-semibold tracking-[0.25em] text-xs sm:text-sm">
                WHAT WE BUILD
              </p>
            </Reveal>
            <Reveal variant="up" delay={120} duration={700}>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.1]">
                Capabilities on {platform.name}.
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {platform.features.map((f, i) => (
              <Reveal key={f} variant="zoom" delay={i * 100} duration={600}>
                <TiltCard max={6} scale={1.02} className="h-full">
                  <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/30 via-white/10 to-transparent hover:from-brand-red/60 transition-all duration-300 group h-full">
                    <div className="rounded-[15px] h-full p-5 sm:p-6 bg-gradient-to-b from-[#0e2a55] via-navy-800 to-navy-900 flex items-start gap-3">
                      <span className="mt-1 inline-flex w-8 h-8 rounded-full bg-brand-red items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <i className="fa-solid fa-check text-sm" />
                      </span>
                      <span className="text-white/90 leading-snug text-sm sm:text-base">
                        {f}
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER PLATFORMS */}
      <section className="bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal variant="up" duration={600}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10">
              Explore other platforms
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {others.map((o, i) => (
              <Reveal key={o.slug} variant="up" delay={i * 100} duration={600}>
                <Link
                  href={`/platforms/${o.slug}`}
                  className="group block rounded-2xl border border-navy-900/10 bg-white p-5 sm:p-6 hover:border-brand-red hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-brand-red transition">
                    {o.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-navy-900/65 line-clamp-3">
                    {o.tagline}
                  </p>
                  <span className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-navy-900 font-semibold text-xs sm:text-sm">
                    Learn more
                    <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
