import HexIcon from "./HexIcon";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import TiltCard from "./TiltCard";

const STEPS = [
  {
    title: "We Communicate.",
    desc: "We listen, understand your goals, and plan the right approach together",
    num: 1,
    icon: "comments",
  },
  {
    title: "We Execute.",
    desc: "From design to strategy, we bring your vision to life with precision.",
    num: 2,
    icon: "wand-magic-sparkles",
  },
  {
    title: "We Present.",
    desc: "You see the final result — crafted, refined, and ready to grow your business.",
    num: 3,
    icon: "rocket",
  },
];

export default function Process() {
  return (
    <section className="relative bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* top diagonal stripe band */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-[1px] h-7 diagonal-stripes"
      />

      {/* big curved white wave */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M0,260 C 360,140 760,520 1100,360 C 1280,280 1380,420 1440,420 L1440,800 L0,800 Z"
          fill="#ffffff"
          opacity="0.85"
        />
        <path
          d="M0,260 C 360,140 760,520 1100,360 C 1280,280 1380,420 1440,420"
          stroke="#dfe6f1"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-end mb-10 sm:mb-14">
          <div>
            <Reveal variant="up" duration={600}>
              <div className="flex items-center gap-3 mb-4">
                <HexIcon size={28} />
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-navy-900">
                  OUR WORK PROCESS
                </span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={120} duration={750}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] text-navy-900">
                Step by Step to
                <br className="hidden sm:block" />{" "}
                <span className="bg-gradient-to-r from-navy-900 via-brand-red to-navy-900 bg-clip-text text-transparent animate-gradient">
                  your Growth
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={250} duration={700}>
            <p className="text-navy-900/65 leading-relaxed lg:text-right text-sm sm:text-base lg:text-lg">
              We start by understanding your goals, then execute with strategy
              and creativity. At every step we keep you in the loop — and
              deliver work that reflects your brand and drives growth.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 relative">
          {/* connecting dotted line on lg+ */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[55%] left-[12%] right-[12%] h-px border-t-2 border-dashed border-navy-900/15 -z-0"
          />

          {STEPS.map((s, i) => (
            <Reveal
              key={s.num}
              variant="up"
              delay={i * 180}
              duration={700}
              className="h-full"
            >
              <TiltCard max={5} scale={1.02} className="h-full">
                <div className="bg-white rounded-2xl shadow-sm border border-navy-900/5 overflow-hidden flex flex-col min-h-[340px] sm:min-h-[360px] group hover:shadow-2xl hover:border-brand-red/40 transition-all duration-500 h-full">
                  <div className="relative p-6 sm:p-8 pb-14 sm:pb-16 flex-1">
                    {/* icon badge */}
                    <span className="inline-flex w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red items-center justify-center mb-5 group-hover:bg-brand-red group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                      <i className={`fa-solid fa-${s.icon} text-lg`} />
                    </span>

                    <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 group-hover:translate-x-1 transition-transform duration-300">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-navy-900/70 max-w-xs">
                      {s.desc}
                    </p>

                    {/* big animated number */}
                    <span
                      aria-hidden="true"
                      className="absolute right-4 sm:right-6 bottom-1 text-[110px] sm:text-[150px] font-extrabold leading-none text-navy-900/10 group-hover:text-brand-red/15 transition-colors duration-500 select-none"
                    >
                      <CountUp to={s.num} duration={1200} />
                    </span>
                  </div>

                  <div
                    className="text-white px-6 sm:px-8 py-4 flex items-center justify-between font-semibold tracking-wider text-xs sm:text-sm relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(90deg, #1f7da6 0%, #0d3a6a 60%, #0a1530 100%)",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms]"
                    />
                    <span className="relative z-10">STEP</span>
                    <span className="relative z-10">
                      0<CountUp to={s.num} duration={1200} />
                    </span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
