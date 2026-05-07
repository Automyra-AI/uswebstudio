import HexIcon from "./HexIcon";

const SERVICES = [
  {
    title: "Social Media Marketing",
    desc: "Turn followers into fans with scroll-stopping content and strategy that connects.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80",
    layout: "image-top",
  },
  {
    title: "Website Development",
    desc: "Your digital storefront — built to impress, load fast, and turn clicks into customers.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80",
    layout: "content-top",
  },
  {
    title: "Paid Ads",
    desc: "Smart ads that reach the right people, at the right time — and bring real results.",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&q=80",
    layout: "image-top",
  },
];

function Image({ s }) {
  return (
    <div className="overflow-hidden aspect-[5/4]">
      <img
        src={s.image}
        alt={s.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function Info({ s, gradient }) {
  return (
    <div
      className={`p-7 flex-1 flex flex-col ${
        gradient
          ? "bg-gradient-to-b from-[#1d1042] via-[#3b0f24] to-[#5a0f1c]"
          : ""
      }`}
    >
      <h3 className="text-2xl font-bold text-white">{s.title}</h3>
      <p className="mt-3 text-white/75 leading-relaxed">{s.desc}</p>
      <a
        href="#"
        className="mt-6 inline-flex items-center gap-2 text-white/90 font-semibold hover:text-brand-red transition self-end"
      >
        Learn more <i className="fa-solid fa-chevron-right text-xs" />
      </a>
    </div>
  );
}

function ServiceCard({ s }) {
  return (
    <div className="rounded-3xl overflow-hidden p-[2px] bg-gradient-to-b from-[#1f7da6]/70 via-[#1f7da6]/20 to-transparent">
      <div className="rounded-[22px] bg-navy-900 overflow-hidden flex flex-col h-full">
        {s.layout === "image-top" ? (
          <>
            <Image s={s} />
            <Info s={s} />
          </>
        ) : (
          <>
            <Info s={s} gradient />
            <Image s={s} />
          </>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-navy-950 py-20 lg:py-28 overflow-hidden">
      {/* arrow / chevron pattern */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.05]"
           style={{
             backgroundImage:
               "linear-gradient(135deg, transparent 48%, white 48%, white 52%, transparent 52%)",
             backgroundSize: "70px 70px",
           }}
      />

      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <HexIcon size={28} />
              <span className="text-sm font-bold tracking-[0.25em] text-white/90">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
              Fuel Your Growth with
              <br />
              Proven Strategies
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-navy-900 px-7 py-3 rounded-full font-semibold hover:bg-brand-red hover:text-white transition self-start"
          >
            View All Services <i className="fa-solid fa-arrow-right" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
