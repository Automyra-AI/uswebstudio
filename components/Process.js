import HexIcon from "./HexIcon";
import Reveal from "./Reveal";

const STEPS = [
  {
    title: "Discover",
    desc: "We listen, audit, and align on the outcome before a single pixel moves.",
    num: "01",
  },
  {
    title: "Design & Build",
    desc: "Strategy translated into systems — brand, site, ads, content — built to last.",
    num: "02",
  },
  {
    title: "Scale",
    desc: "We measure what matters and double down on what works, quarter after quarter.",
    num: "03",
  },
];

export default function Process() {
  return (
    <section className="relative bg-[#f7f8fb] text-navy-900 py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 sm:gap-12 lg:gap-20 items-end mb-14 sm:mb-20">
          <div>
            <Reveal variant="up" duration={700}>
              <div className="flex items-center gap-3 mb-6">
                <HexIcon size={24} />
                <span className="text-[11px] font-semibold tracking-[0.3em] text-navy-900/55 uppercase">
                  How we work
                </span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.02em] leading-[1.05] text-navy-900">
                A measured process,
                <br />
                no theatrics.
              </h2>
            </Reveal>
          </div>

          <Reveal variant="up" delay={200} duration={750}>
            <p className="text-navy-900/55 leading-relaxed text-sm sm:text-base lg:text-lg max-w-md lg:ml-auto">
              We work in deliberate phases — clarity before craft, craft before
              scale. You stay in the loop at every step, never surprised.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-navy-900/10">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} variant="up" delay={i * 120} duration={750}>
              <div className="bg-[#f7f8fb] p-8 sm:p-10 lg:p-12 h-full flex flex-col group">
                <div className="flex items-center justify-between mb-10 sm:mb-14">
                  <span className="text-[11px] font-semibold tracking-[0.3em] text-navy-900/55 uppercase">
                    Phase {s.num}
                  </span>
                  <span className="w-8 h-px bg-navy-900/20" />
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-900 tracking-[-0.02em] leading-tight">
                  {s.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-navy-900/55 leading-relaxed max-w-xs">
                  {s.desc}
                </p>

                <span
                  aria-hidden="true"
                  className="mt-auto pt-12 text-[120px] sm:text-[140px] font-semibold leading-none text-navy-900/[0.04] tracking-tighter group-hover:text-brand-red/15 transition-colors duration-700 select-none"
                >
                  {s.num}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
