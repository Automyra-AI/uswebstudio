export default function ServiceRow({ service, variant = "red" }) {
  const isRed = variant === "red";

  const bg = isRed ? "bg-brand-red" : "bg-navy-950";
  const arrowBg = "bg-white text-navy-900";

  return (
    <section
      className={`${bg} relative text-white`}
    >
      <div className="container-x py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* number */}
          <div className="lg:col-span-2">
            <span className="block text-6xl lg:text-7xl font-light tracking-tight text-white/95">
              {service.num}
            </span>
          </div>

          {/* title */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl lg:text-5xl font-bold leading-[1.1]">
              {service.title}
            </h2>
          </div>

          {/* description + link */}
          <div className="lg:col-span-4 relative">
            <p className="text-white/90 leading-relaxed text-base lg:text-lg">
              {service.desc}
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-3 text-white font-medium"
            >
              View Projects
              <span className="inline-block h-px w-16 bg-white/70" />
            </a>

            <a
              href="#"
              aria-label={`Open ${service.title}`}
              className={`absolute right-0 -bottom-2 w-12 h-12 rounded-full ${arrowBg} flex items-center justify-center shadow-lg hover:bg-navy-900 hover:text-white transition`}
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* divider line at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" />
    </section>
  );
}
