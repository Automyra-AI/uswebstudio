import Reveal from "./Reveal";

export default function ServiceRow({ service }) {
  return (
    <section className="relative text-white group/row overflow-hidden bg-navy-950 hover:bg-brand-red transition-colors duration-500">
      {/* Subtle hover sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/row:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.08), transparent 40%)",
        }}
      />

      <div className="container-x py-20 lg:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* number */}
          <Reveal variant="left" duration={700} className="lg:col-span-2">
            <span className="block text-6xl lg:text-7xl font-light tracking-tight text-white/95 transition-transform duration-500 group-hover/row:scale-110 group-hover/row:translate-x-2">
              {service.num}
            </span>
          </Reveal>

          {/* title */}
          <Reveal variant="up" delay={120} duration={750} className="lg:col-span-6">
            <h2 className="text-3xl lg:text-5xl font-bold leading-[1.1] transition-transform duration-500 group-hover/row:translate-x-2">
              {service.title}
            </h2>
          </Reveal>

          {/* description + link */}
          <Reveal
            variant="up"
            delay={220}
            duration={750}
            className="lg:col-span-4 relative"
          >
            <p className="text-white/90 leading-relaxed text-base lg:text-lg">
              {service.desc}
            </p>
            <a
              href={service.href || "#"}
              className="mt-6 inline-flex items-center gap-3 text-white font-medium group/link"
            >
              View Service
              <span className="inline-block h-px w-16 bg-white/70 transition-all duration-300 group-hover/link:w-24 group-hover/link:bg-white" />
            </a>

            <a
              href={service.href || "#"}
              aria-label={`Open ${service.title}`}
              className="absolute right-0 -bottom-2 w-12 h-12 rounded-full bg-white text-navy-900 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-45 group-hover/row:bg-navy-900 group-hover/row:text-white"
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
            </a>
          </Reveal>
        </div>
      </div>

      {/* divider line at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" />
    </section>
  );
}
