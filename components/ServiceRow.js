import Reveal from "./Reveal";

export default function ServiceRow({ service }) {
  return (
    <section className="relative text-white bg-navy-950 border-b border-white/[0.06] group/row hover:bg-navy-900/40 transition-colors duration-500">
      <div className="container-x py-16 sm:py-20 lg:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* number */}
          <Reveal variant="fade" duration={700} className="lg:col-span-2">
            <span className="block text-5xl lg:text-6xl font-light tracking-tight text-white/35">
              {service.num}
            </span>
          </Reveal>

          {/* title */}
          <Reveal variant="fade" delay={80} duration={750} className="lg:col-span-6">
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]">
              {service.title}
            </h2>
          </Reveal>

          {/* description + link */}
          <Reveal
            variant="fade"
            delay={160}
            duration={750}
            className="lg:col-span-4"
          >
            <p className="text-white/55 leading-relaxed text-sm lg:text-base">
              {service.desc}
            </p>
            <a
              href={service.href || "#"}
              className="mt-6 inline-flex items-center gap-3 text-white text-sm font-medium group/link"
            >
              <span>View service</span>
              <span className="relative w-8 overflow-hidden">
                <i className="fa-solid fa-arrow-right text-xs transition-transform duration-500 group-hover/link:translate-x-8" />
                <i className="fa-solid fa-arrow-right text-xs absolute left-0 -translate-x-8 transition-transform duration-500 group-hover/link:translate-x-0" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
