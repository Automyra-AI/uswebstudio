import HexIcon from "./HexIcon";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import TiltCard from "./TiltCard";
import Magnetic from "./Magnetic";

const SERVICES = [
  {
    title: "Social Media Marketing",
    desc: "Turn followers into fans with scroll-stopping content and strategy that connects.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80",
    layout: "image-top",
    href: "/services/social-media",
  },
  {
    title: "Website Development",
    desc: "Your digital storefront — built to impress, load fast, and turn clicks into customers.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80",
    layout: "content-top",
    href: "/services/development",
  },
  {
    title: "Paid Ads",
    desc: "Smart ads that reach the right people, at the right time — and bring real results.",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&q=80",
    layout: "image-top",
    href: "/services/ppc",
  },
];

function CardImage({ s }) {
  return (
    <div className="overflow-hidden aspect-[5/4] relative">
      <img
        src={s.image}
        alt={s.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-[1500ms]"
      />
    </div>
  );
}

function CardInfo({ s, gradient }) {
  return (
    <div
      className={`p-6 sm:p-7 flex-1 flex flex-col ${
        gradient
          ? "bg-gradient-to-b from-[#1d1042] via-[#3b0f24] to-[#5a0f1c]"
          : ""
      }`}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-white">{s.title}</h3>
      <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">
        {s.desc}
      </p>
      <a
        href={s.href}
        className="mt-6 inline-flex items-center gap-2 text-white/90 font-semibold hover:text-brand-red transition self-end group/link"
      >
        Learn more
        <i className="fa-solid fa-chevron-right text-xs transition-transform group-hover/link:translate-x-1" />
      </a>
    </div>
  );
}

function ServiceCard({ s, idx }) {
  return (
    <Reveal variant="up" delay={idx * 120} duration={700}>
      <TiltCard max={6} scale={1.015} glare className="h-full">
        <a
          href={s.href}
          className="block rounded-3xl overflow-hidden p-[2px] bg-gradient-to-b from-[#1f7da6]/70 via-[#1f7da6]/20 to-transparent group/card hover:from-brand-red/70 hover:via-brand-red/20 transition-all duration-500 h-full"
        >
          <div className="rounded-[22px] bg-navy-900 overflow-hidden flex flex-col h-full">
            {s.layout === "image-top" ? (
              <>
                <CardImage s={s} />
                <CardInfo s={s} />
              </>
            ) : (
              <>
                <CardInfo s={s} gradient />
                <CardImage s={s} />
              </>
            )}
          </div>
        </a>
      </TiltCard>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-navy-950 py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* chevron pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 48%, white 48%, white 52%, transparent 52%)",
          backgroundSize: "70px 70px",
        }}
      />

      <Spotlight color="rgba(225,29,42,0.16)" size={700}>
        <div className="container-x relative">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
            <div>
              <Reveal variant="up" duration={600}>
                <div className="flex items-center gap-3 mb-4">
                  <HexIcon size={28} />
                  <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white/90">
                    OUR SERVICES
                  </span>
                </div>
              </Reveal>

              <Reveal variant="up" delay={120} duration={750}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
                  Fuel Your Growth with
                  <br className="hidden sm:block" />{" "}
                  <span className="bg-gradient-to-r from-white via-brand-red to-white bg-clip-text text-transparent animate-gradient">
                    Proven Strategies
                  </span>
                </h2>
              </Reveal>
            </div>

            <Reveal variant="up" delay={250} duration={650}>
              <Magnetic strength={0.3}>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white text-navy-900 px-6 sm:px-7 py-3 rounded-full font-semibold hover:bg-brand-red hover:text-white transition self-start group/btn"
                >
                  View All Services
                  <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Magnetic>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {SERVICES.map((s, idx) => (
              <ServiceCard key={s.title} s={s} idx={idx} />
            ))}
          </div>
        </div>
      </Spotlight>
    </section>
  );
}
