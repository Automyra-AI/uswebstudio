import HexIcon from "./HexIcon";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    title: "KYB",
    subtitle: "Marketing Agency Website",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85",
    href: "/projects/kyb-marketing-agency",
  },
  {
    title: "Cadhauz",
    subtitle: "Architectural & Remodelling",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85",
    href: "/projects/cadhauz-architectural",
  },
  {
    title: "D&I Air Duct",
    subtitle: "Multi-channel Performance",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85",
    href: "/projects/di-air-duct-multichannel",
  },
  {
    title: "Ecology Spray Foam",
    subtitle: "Insulation Business",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=85",
    href: "/projects/ecology-spray-foam",
  },
];

export default function Work() {
  return (
    <section
      id="projects"
      className="relative bg-navy-950 py-20 sm:py-24 lg:py-32 overflow-hidden border-t border-white/[0.06]"
    >
      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 sm:mb-20">
          <div className="max-w-2xl">
            <Reveal variant="up" duration={700}>
              <div className="flex items-center gap-3 mb-6">
                <HexIcon size={24} />
                <span className="text-[11px] font-semibold tracking-[0.3em] text-white/55 uppercase">
                  Selected work
                </span>
              </div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]">
                A small sample of recent partnerships.
              </h2>
            </Reveal>
          </div>

          <Reveal variant="up" delay={220} duration={700}>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white font-medium group/all"
            >
              <span className="relative">
                View all projects
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white/30 group-hover/all:bg-white transition-colors" />
              </span>
              <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover/all:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06]">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} variant="up" delay={i * 100} duration={750}>
              <a
                href={p.href}
                className="group/card block bg-navy-950 p-5 sm:p-6 lg:p-8 h-full"
              >
                <div className="relative aspect-[4/3] sm:aspect-[5/3] overflow-hidden rounded-lg bg-navy-900">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-85 group-hover/card:opacity-100 group-hover/card:scale-[1.03] transition-all duration-[1200ms] ease-out"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.25em] text-white/50 uppercase">
                      {p.subtitle}
                    </p>
                    <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-white tracking-[-0.01em]">
                      {p.title}
                    </h3>
                  </div>
                  <span className="inline-flex w-9 h-9 mt-1 rounded-full border border-white/15 items-center justify-center text-white/70 group-hover/card:bg-white group-hover/card:text-navy-900 group-hover/card:border-white transition-colors duration-400 shrink-0">
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
