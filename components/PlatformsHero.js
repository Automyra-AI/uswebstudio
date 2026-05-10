import HexIcon from "./HexIcon";
import Reveal from "./Reveal";
import LetterReveal from "./LetterReveal";

export default function PlatformsHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-24 sm:pb-32 lg:pt-44 lg:pb-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
          opacity: 0.55,
          filter: "blur(20px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-40 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow-reverse"
        style={{
          background:
            "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
          opacity: 0.55,
          filter: "blur(20px)",
        }}
      />

      <div className="container-x relative z-10 text-center">
        <Reveal variant="fade" duration={600}>
          <div className="inline-flex items-center gap-3 justify-center">
            <span className="animate-spin-slow inline-block">
              <HexIcon size={28} />
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.35em] text-white/90">
              PLATFORMS
            </span>
          </div>
        </Reveal>

        <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-5xl mx-auto">
          <LetterReveal
            as="span"
            text="Comprehensive solutions across every"
            stagger={20}
            startDelay={100}
          />
          <span className="block mt-1">
            <LetterReveal
              as="span"
              text="major ecommerce"
              stagger={22}
              startDelay={650}
            />{" "}
            <span className="bg-gradient-to-r from-brand-red via-pink-400 to-brand-red bg-clip-text text-transparent animate-gradient">
              <LetterReveal
                as="span"
                text="platform"
                stagger={45}
                startDelay={950}
              />
            </span>
            <LetterReveal as="span" text="." stagger={45} startDelay={1280} />
          </span>
        </h1>
      </div>
    </section>
  );
}
