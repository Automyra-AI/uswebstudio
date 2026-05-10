import HexIcon from "./HexIcon";
import Reveal from "./Reveal";
import LetterReveal from "./LetterReveal";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-24 sm:pb-32 lg:pt-44 lg:pb-44">
      {/* big purple/red blob bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-72 -bottom-40 w-[700px] sm:w-[1100px] h-[700px] sm:h-[1100px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #6a1428 0%, #3a0c1c 45%, transparent 75%)",
          opacity: 0.85,
          filter: "blur(2px)",
        }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="absolute block w-1 h-1 rounded-full bg-white/30 animate-particle"
            style={{
              top: `${(i * 41) % 100}%`,
              left: `${(i * 67) % 100}%`,
              animationDelay: `${(i * 0.7) % 9}s`,
              animationDuration: `${9 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="container-x relative z-10 text-center">
        <Reveal variant="fade" duration={600}>
          <div className="inline-flex items-center gap-3 justify-center">
            <span className="animate-spin-slow inline-block">
              <HexIcon size={28} />
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.35em] text-white/90">
              OUR PROJECTS
            </span>
          </div>
        </Reveal>

        <h1 className="mt-6 sm:mt-8 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1]">
          <LetterReveal as="span" text="Proud Work," stagger={28} startDelay={150} className="block" />
          <span className="block mt-1 bg-gradient-to-r from-brand-red via-pink-400 to-brand-red bg-clip-text text-transparent animate-gradient">
            <LetterReveal as="span" text="Proven Impact" stagger={32} startDelay={650} />
          </span>
        </h1>

        <Reveal variant="up" delay={1300} duration={650}>
          <p className="mt-5 sm:mt-6 text-white text-xs sm:text-sm lg:text-base font-bold tracking-[0.35em]">
            YOUR BRAND, ELEVATED.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
