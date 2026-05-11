import Link from "next/link";
import HexIcon from "./HexIcon";
import Reveal from "./Reveal";
import LetterReveal from "./LetterReveal";
import TiltCard from "./TiltCard";
import Magnetic from "./Magnetic";
import CountUp from "./CountUp";
import { PROJECTS } from "@/lib/projects-data";

export default function ProjectDetail({ project }) {
  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -bottom-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full animate-float-slow-reverse"
          style={{
            background:
              "radial-gradient(circle, #6a1428 0%, #3a0c1c 40%, transparent 75%)",
            opacity: 0.55,
            filter: "blur(2px)",
          }}
        />

        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div>
              <Reveal variant="fade" duration={500}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-5 sm:mb-6 group"
                >
                  <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1" />
                  Back to Projects
                </Link>
              </Reveal>

              <Reveal variant="up" delay={50} duration={600}>
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <span className="animate-spin-slow inline-block">
                    <HexIcon size={28} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white/90">
                    CASE STUDY · {project.num}
                  </span>
                </div>
              </Reveal>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                <LetterReveal as="span" text={project.title} stagger={30} />
              </h1>

              <Reveal variant="up" delay={500} duration={700}>
                <p className="mt-3 sm:mt-4 text-brand-red font-semibold text-base sm:text-lg lg:text-xl">
                  {project.subtitle}
                </p>
              </Reveal>

              <Reveal variant="up" delay={650} duration={700}>
                <p className="mt-5 sm:mt-6 text-white/85 leading-relaxed text-sm sm:text-base lg:text-lg max-w-xl">
                  {project.short}
                </p>
              </Reveal>

              <Reveal variant="up" delay={800} duration={650}>
                <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal variant="up" delay={950} duration={650}>
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
                      Start a Similar Project
                    </span>
                    <i className="fa-solid fa-arrow-right relative z-10 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </Link>
                </Magnetic>
              </Reveal>
            </div>

            <Reveal variant="zoom" delay={250} duration={800}>
              <TiltCard max={6} scale={1.02} glare className="rounded-3xl">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/5 group/cover">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/cover:scale-110"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover/cover:translate-x-[100%] transition-transform duration-[1500ms]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-5 right-5 text-5xl font-extrabold text-white/30 leading-none select-none"
                  >
                    {project.num}
                  </span>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#f5f7fb] text-navy-900 py-12 sm:py-16 lg:py-20">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {project.stats.map((s, i) => (
              <Reveal key={s.label} variant="up" delay={i * 120} duration={650}>
                <TiltCard max={4} scale={1.02} className="h-full">
                  <div className="rounded-2xl bg-white border border-navy-900/10 p-6 sm:p-8 text-center hover:border-brand-red hover:shadow-2xl transition-all duration-500 h-full">
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-red leading-none">
                      <CountUp
                        to={s.value}
                        duration={1600}
                        suffix={s.suffix}
                        decimals={s.decimals || 0}
                      />
                    </p>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold tracking-[0.15em] text-navy-900/70 uppercase">
                      {s.label}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGE / SOLUTION / RESULT */}
      <section className="bg-white text-navy-900 py-16 sm:py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              label: "The Challenge",
              icon: "circle-question",
              body: project.challenge,
              tone: "from-brand-red/10 to-brand-red/0",
            },
            {
              label: "Our Approach",
              icon: "wand-magic-sparkles",
              body: project.solution,
              tone: "from-navy-900/10 to-navy-900/0",
            },
            {
              label: "The Result",
              icon: "trophy",
              body: project.result,
              tone: "from-[#1f7da6]/15 to-[#1f7da6]/0",
            },
          ].map((block, i) => (
            <Reveal key={block.label} variant="up" delay={i * 130} duration={700}>
              <div className="relative h-full">
                <div
                  aria-hidden="true"
                  className={`absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br ${block.tone} blur-2xl`}
                />
                <div className="relative">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-brand-red text-white items-center justify-center">
                    <i className={`fa-solid fa-${block.icon} text-lg`} />
                  </span>
                  <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-navy-900">
                    {block.label}
                  </h2>
                  <p className="mt-3 sm:mt-4 text-navy-900/75 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {block.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-navy-950 text-white py-16 sm:py-20 lg:py-28 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-10 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow"
            style={{
              background:
                "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
              opacity: 0.35,
              filter: "blur(20px)",
            }}
          />
          <div className="container-x relative">
            <Reveal variant="up" duration={650}>
              <p className="text-white/70 font-semibold tracking-[0.25em] text-xs sm:text-sm">
                PROJECT GALLERY
              </p>
            </Reveal>
            <Reveal variant="up" delay={120} duration={700}>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.1]">
                A closer look.
              </h2>
            </Reveal>

            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {project.gallery.map((src, i) => (
                <Reveal key={i} variant="zoom" delay={i * 110} duration={650}>
                  <TiltCard max={5} scale={1.02} glare className="rounded-2xl">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group/img">
                      <img
                        src={src}
                        alt={`${project.title} — image ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover/img:translate-x-[100%] transition-transform duration-[1500ms]"
                      />
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OTHER PROJECTS */}
      <section className="bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal variant="up" duration={650}>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                More projects
              </h2>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-brand-red transition group"
              >
                View all
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {others.map((o, i) => (
              <Reveal key={o.slug} variant="up" delay={i * 110} duration={650}>
                <Link
                  href={`/projects/${o.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white border border-navy-900/10 hover:border-brand-red hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={o.cover}
                      alt={o.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-navy-900 group-hover:text-brand-red transition">
                      {o.title}
                    </h3>
                    <p className="mt-1 text-sm text-navy-900/65">
                      {o.subtitle}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-navy-900 font-semibold text-sm mt-auto pt-3">
                      Read case study
                      <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
