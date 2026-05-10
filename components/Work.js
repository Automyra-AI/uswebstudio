import HexIcon from "./HexIcon";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import Magnetic from "./Magnetic";

const PROJECTS = [
  {
    title: "KYB (Marketing Agency Website)",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
    heading: "Challenge",
    body:
      "KYB needed a fully custom website that not only looked sharp but also followed a structured flow built around their agency's services and conversion goals…",
  },
  {
    title: "D&I (Air Duct Cleaning)",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&q=80",
    heading: "The Challenge",
    body:
      "D&I's Meta ads started strong, with a single video creative driving solid results. After three months performance plummeted — even with bigger budgets, results dropped to just 2–3 bookings per week…",
  },
  {
    title: "AirDuct Business Website",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&q=80",
    heading: "",
    body:
      "Pairing a conversion-focused site with a multi-channel campaign significantly boosted lead flow. The business now benefits from both Meta and Google Ads, ensuring a steady stream of new customers…",
  },
  {
    title: "Cadhauz (Architectural & Remodelling)",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    heading: "The Challenge",
    body:
      "By mid-2025, Cadhauz was struggling to bring in new business. Their Meta ads were underperforming and generating zero results, leaving the studio with little growth runway to work with…",
  },
];

export default function Work() {
  return (
    <section
      id="projects"
      className="relative bg-navy-950 py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* big red sphere blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-25%] top-[12%] w-[700px] sm:w-[1100px] h-[700px] sm:h-[1100px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle at 35% 50%, #e11d2a 0%, #8a0e18 40%, #2b0814 65%, transparent 80%)",
          filter: "blur(8px)",
          opacity: 0.85,
        }}
      />

      {/* diagonal stripe top band */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-6 diagonal-stripes opacity-90 z-10"
      />

      <div className="container-x relative z-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 mt-4">
          <div>
            <Reveal variant="up" duration={600}>
              <div className="flex items-center gap-3 mb-4">
                <HexIcon size={28} />
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white/90">
                  OUR WORK
                </span>
              </div>
            </Reveal>
            <Reveal variant="up" delay={120} duration={750}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Work That{" "}
                <span className="bg-gradient-to-r from-white via-brand-red to-white bg-clip-text text-transparent animate-gradient">
                  Drive Results
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal variant="up" delay={250} duration={650}>
            <Magnetic strength={0.3}>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 bg-white text-navy-900 px-6 sm:px-7 py-3 rounded-full font-semibold hover:bg-brand-red hover:text-white transition self-start group/btn"
              >
                View All Work
                <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1" />
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-7">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} variant="up" delay={i * 120} duration={700}>
              <TiltCard max={4} scale={1.01} className="h-full">
                <article className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e2a55] via-navy-800 to-navy-900 p-4 sm:p-5 lg:p-6 overflow-hidden hover:border-brand-red/50 transition-all duration-500 h-full group/card">
                  <div className="grid grid-cols-1 md:grid-cols-[minmax(0,200px)_1fr] lg:grid-cols-[minmax(0,260px)_1fr] gap-4 sm:gap-5">
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[260px] lg:h-[280px] bg-black/40 relative">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-[1500ms]"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug border-b border-white/15 pb-3 group-hover/card:text-brand-red transition-colors">
                        {p.title}
                      </h3>

                      {p.heading && (
                        <h4 className="mt-4 text-base sm:text-lg lg:text-xl font-semibold text-white">
                          {p.heading}
                        </h4>
                      )}

                      <p className="mt-3 text-white/75 leading-relaxed text-xs sm:text-sm lg:text-base">
                        {p.body}
                      </p>

                      <div className="mt-auto pt-5 sm:pt-6 flex justify-end">
                        <a
                          href="/projects"
                          aria-label={`View ${p.title}`}
                          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-navy-900 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-45 shadow-lg"
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* bottom diagonal stripe band */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-6 diagonal-stripes opacity-90 z-10"
      />
    </section>
  );
}
