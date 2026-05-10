import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const VALUES = [
  {
    title: "Local Masterminds",
    icon: "users",
    body:
      "We are not just marketers — we are locals who understand your customers and your community. Think of us as your neighbourhood growth team.",
  },
  {
    title: "We Live Next Door",
    icon: "house-chimney-user",
    body:
      "Whether it is a quick update or a brand new idea, we stay close — ready to respond, support, and build alongside you every step of the way.",
  },
  {
    title: "Pocket Friendly",
    icon: "wallet",
    body:
      "Most marketing partners are not built to be pocket friendly — but we are. Our services are tailored to your budget without cutting corners on creativity or results.",
  },
];

export default function AboutValues() {
  return (
    <section className="relative bg-navy-950 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* big red blob behind */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 w-[700px] sm:w-[1100px] h-[500px] sm:h-[700px] rounded-[50%] animate-float-slow"
        style={{
          background:
            "radial-gradient(ellipse at center, #e11d2a 0%, #8a0e18 45%, transparent 75%)",
          opacity: 0.55,
          filter: "blur(4px)",
        }}
      />

      <div className="container-x relative z-10">
        <Reveal variant="up" duration={650}>
          <h2 className="text-center text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.1] max-w-4xl mx-auto">
            Helping local businesses{" "}
            <span className="bg-gradient-to-r from-white via-brand-red to-white bg-clip-text text-transparent animate-gradient">
              grow smarter,
            </span>
            <br className="hidden sm:block" /> faster, and stronger
          </h2>
        </Reveal>

        <Reveal variant="up" delay={150} duration={650}>
          <p className="mt-4 sm:mt-6 text-center text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            We blend creativity, strategy, and digital tools so small businesses
            can compete with the big names — without burning through their
            budget.
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} variant="zoom" delay={i * 130} duration={650}>
              <TiltCard max={6} scale={1.02} className="h-full">
                <div className="rounded-3xl p-[1px] bg-gradient-to-b from-white/30 via-white/10 to-transparent hover:from-brand-red/60 transition-all duration-300 group h-full">
                  <div className="rounded-[22px] h-full p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#0e2a55] via-navy-800 to-navy-900">
                    <span className="inline-flex w-12 h-12 rounded-xl bg-brand-red/20 text-brand-red items-center justify-center mb-4 sm:mb-5 group-hover:bg-brand-red group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <i className={`fa-solid fa-${v.icon} text-lg`} />
                    </span>
                    <h3 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold pb-3 sm:pb-4 border-b border-white/15">
                      {v.title}
                    </h3>
                    <p className="mt-4 sm:mt-6 text-center text-white/85 leading-relaxed text-sm sm:text-base">
                      {v.body}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-6 diagonal-stripes opacity-90 z-10"
      />
    </section>
  );
}
