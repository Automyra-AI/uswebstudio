import HexIcon from "./HexIcon";
import Reveal from "./Reveal";
import LetterReveal from "./LetterReveal";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-24 sm:pb-32 lg:pt-44 lg:pb-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 w-[500px] sm:w-[640px] h-[500px] sm:h-[640px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, #6a1428 0%, #3a0c1c 40%, transparent 75%)",
          opacity: 0.85,
          filter: "blur(2px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 w-[500px] sm:w-[680px] h-[500px] sm:h-[680px] rounded-full animate-float-slow-reverse"
        style={{
          background:
            "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
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
              ABOUT US
            </span>
          </div>
        </Reveal>

        <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-5xl mx-auto">
          <LetterReveal as="span" text="We turn neighbourhood businesses into" stagger={18} startDelay={100} />
          <span className="block mt-1 bg-gradient-to-r from-brand-red via-pink-400 to-brand-red bg-clip-text text-transparent animate-gradient">
            <LetterReveal as="span" text="digital powerhouses" stagger={28} startDelay={900} />
          </span>
          <span className="block mt-1">
            <LetterReveal as="span" text="— building sites and campaigns that" stagger={20} startDelay={1400} />
          </span>
          <span className="block mt-1">
            <LetterReveal as="span" text="help local brands stand out where it counts." stagger={20} startDelay={2100} />
          </span>
        </h1>
      </div>
    </section>
  );
}
