import HexIcon from "./HexIcon";
import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Social Media Marketing",
    desc: "Content systems and strategy that turn audiences into customers.",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1600&q=85",
    href: "/services/social-media",
  },
  {
    title: "Website Development",
    desc: "Fast, considered builds — designed to convert without compromise on craft.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=85",
    href: "/services/development",
  },
  {
    title: "Paid Media",
    desc: "Performance campaigns tuned to your unit economics — not vanity metrics.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85",
    href: "/services/ppc",
  },
];

function ServiceCard({ s, idx }) {
  return (
    <Reveal variant="up" delay={idx * 90} duration={750}>
      <a
        href={s.href}
        className="block group/card relative overflow-hidden rounded-2xl border border-white/[0.08] bg-navy-900/40 hover:border-white/20 transition-colors duration-500 h-full"
      >
        <div className="aspect-[4/3] overflow-hidden bg-navy-950">
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover opacity-85 group-hover/card:opacity-100 transition-opacity duration-700"
          />
        </div>
        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold text-white tracking-tight">
              {s.title}
            </h3>
            <span className="inline-flex w-9 h-9 rounded-full border border-white/15 items-center justify-center text-white/70 group-hover/card:bg-white group-hover/card:text-navy-900 group-hover/card:border-white transition-colors duration-400 shrink-0">
              <i className="fa-solid fa-arrow-right text-[11px]" />
            </span>
          </div>
          <p className="mt-3 text-sm text-white/55 leading-relaxed">{s.desc}</p>
        </div>
      </a>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-navy-950 py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 sm:mb-20">
          <div className="max-w-2xl">
            <Reveal variant="up" duration={700}>
              <div className="flex items-center gap-3 mb-6">
                <HexIcon size={24} />
                <span className="text-[11px] font-semibold tracking-[0.3em] text-white/55 uppercase">
                  Capabilities
                </span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]">
                Strategy, craft, and growth — under one roof.
              </h2>
            </Reveal>
          </div>

          <Reveal variant="up" delay={220} duration={700}>
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white font-medium group/all"
            >
              <span className="relative">
                Explore all services
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white/30 group-hover/all:bg-white transition-colors" />
              </span>
              <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover/all:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map((s, idx) => (
            <ServiceCard key={s.title} s={s} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
