import HexIcon from "./HexIcon";

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
      className="relative bg-navy-950 py-20 lg:py-28 overflow-hidden"
    >
      {/* big red sphere blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-25%] top-[12%] w-[1100px] h-[1100px] rounded-full"
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 mt-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <HexIcon size={28} />
              <span className="text-sm font-bold tracking-[0.25em] text-white/90">
                OUR WORK
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Work That Drive Results
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-navy-900 px-7 py-3 rounded-full font-semibold hover:bg-brand-red hover:text-white transition self-start"
          >
            View All Work <i className="fa-solid fa-arrow-right" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e2a55] via-navy-800 to-navy-900 p-5 lg:p-6 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,260px)_1fr] gap-5">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[280px] bg-black/40">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-semibold leading-snug border-b border-white/15 pb-3">
                    {p.title}
                  </h3>

                  {p.heading && (
                    <h4 className="mt-4 text-lg lg:text-xl font-semibold text-white">
                      {p.heading}
                    </h4>
                  )}

                  <p className="mt-3 text-white/75 leading-relaxed text-sm lg:text-base">
                    {p.body}
                  </p>

                  <div className="mt-auto pt-6 flex justify-end">
                    <a
                      href="#"
                      aria-label={`View ${p.title}`}
                      className="w-12 h-12 rounded-full bg-white text-navy-900 flex items-center justify-center hover:bg-brand-red hover:text-white transition shadow-lg"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
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
