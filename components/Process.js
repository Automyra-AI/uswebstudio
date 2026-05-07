import HexIcon from "./HexIcon";

const STEPS = [
  {
    title: "We Communicate.",
    desc: "We listen, understand your goals, and plan the right approach together",
    num: "01",
  },
  {
    title: "We Execute.",
    desc: "From design to strategy, we bring your vision to life with precision.",
    num: "02",
  },
  {
    title: "We Present.",
    desc: "You see the final result — crafted, refined, and ready to grow your business.",
    num: "03",
  },
];

export default function Process() {
  return (
    <section className="relative bg-[#f5f7fb] text-navy-900 py-20 lg:py-28 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <HexIcon size={28} />
              <span className="text-sm font-bold tracking-[0.25em] text-navy-900">
                OUR WORK PROCESS
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] text-navy-900">
              Step by Step to
              <br />
              your Growth
            </h2>
          </div>
          <p className="text-navy-900/65 leading-relaxed lg:text-right text-base lg:text-lg">
            We start by understanding your goals, then execute with strategy and
            creativity. At every step we keep you in the loop — and deliver work
            that reflects your brand and drives growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-2xl shadow-sm border border-navy-900/5 overflow-hidden flex flex-col min-h-[360px]"
            >
              <div className="relative p-8 pb-16 flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-navy-900/70 max-w-xs">{s.desc}</p>
                <span
                  className="absolute right-6 bottom-2 text-[150px] font-extrabold leading-none text-navy-900/10 select-none"
                  aria-hidden="true"
                >
                  {s.num}
                </span>
              </div>
              <div
                className="text-white px-8 py-4 flex items-center justify-between font-semibold tracking-wider text-sm"
                style={{
                  background:
                    "linear-gradient(90deg, #1f7da6 0%, #0d3a6a 60%, #0a1530 100%)",
                }}
              >
                <span>STEP</span>
                <span>{s.num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
