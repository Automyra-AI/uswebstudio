import Link from "next/link";
import HexIcon from "./HexIcon";
import FAQ from "./FAQ";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/services-data";

export default function ServiceDetail({ service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 w-[700px] h-[700px] rounded-full animate-float-slow"
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
              href="/services"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 group"
            >
              <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1" /> Back to Services
            </Link>
          </Reveal>

          <Reveal variant="up" delay={50} duration={600}>
            <div className="flex items-center gap-3 mb-6">
              <HexIcon size={28} />
              <span className="text-sm font-bold tracking-[0.25em] text-white/90">
                SERVICE {service.num}
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={150} duration={800}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
              {service.name}
            </h1>
          </Reveal>

          <Reveal variant="up" delay={280} duration={700}>
            <p className="mt-6 text-xl lg:text-2xl text-white/85 max-w-2xl">
              {service.tagline}
            </p>
          </Reveal>

          <Reveal variant="up" delay={400} duration={700}>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-full font-semibold hover:bg-brand-red hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              Get a Free Consultation
              <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#f5f7fb] text-navy-900 py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <Reveal variant="left" duration={700}>
            <p className="text-brand-red font-semibold">Overview</p>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold leading-[1.1]">
              How we approach {service.name.toLowerCase()}.
            </h2>
          </Reveal>

          <div className="space-y-5 text-navy-900/75 leading-relaxed text-base lg:text-lg">
            {service.long.map((p, i) => (
              <Reveal key={i} variant="right" delay={i * 120} duration={700}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-navy-950 text-white py-20 lg:py-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -bottom-32 w-[600px] h-[600px] rounded-full animate-float-slow-reverse"
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
              <p className="text-white/70 font-semibold tracking-[0.25em] text-sm">
                WHAT IS INCLUDED
              </p>
            </Reveal>
            <Reveal variant="up" delay={120} duration={700}>
              <h2 className="mt-3 text-3xl lg:text-5xl font-bold leading-[1.1]">
                Everything you need to win at {service.name.toLowerCase()}.
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((f, i) => (
              <Reveal
                key={f}
                variant="zoom"
                delay={i * 100}
                duration={600}
                className="rounded-2xl p-[1px] bg-gradient-to-b from-white/30 via-white/10 to-transparent hover:from-brand-red/60 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="rounded-[15px] h-full p-6 bg-gradient-to-b from-[#0e2a55] via-navy-800 to-navy-900 flex items-start gap-3">
                  <span className="mt-1 inline-flex w-8 h-8 rounded-full bg-brand-red items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <i className="fa-solid fa-check text-sm" />
                  </span>
                  <span className="text-white/90 leading-snug">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ title={`${service.name} questions, answered.`} />

      {/* OTHER SERVICES */}
      <section className="bg-white text-navy-900 py-20 lg:py-24">
        <div className="container-x">
          <Reveal variant="up" duration={600}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-10">
              Explore other services
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((o, i) => (
              <Reveal
                key={o.slug}
                variant="up"
                delay={i * 100}
                duration={600}
              >
                <Link
                  href={`/services/${o.slug}`}
                  className="group block rounded-2xl border border-navy-900/10 bg-white p-6 hover:border-brand-red hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <span className="text-3xl font-extrabold text-navy-900/15 leading-none transition-colors group-hover:text-brand-red/40">
                    {o.num}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy-900 group-hover:text-brand-red transition">
                    {o.name}
                  </h3>
                  <p className="mt-2 text-sm text-navy-900/65 line-clamp-3">
                    {o.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-navy-900 font-semibold text-sm">
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
