import HexIcon from "./HexIcon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-28 pb-20 lg:pb-32 lg:pt-40">
      {/* Big red circular gradient on the right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 hidden lg:block"
      >
        <div className="hero-circle h-[760px] w-[760px] rounded-full opacity-95" />
      </div>

      {/* Red triangular accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[44%] top-12 hidden lg:block"
        style={{
          width: 0,
          height: 0,
          borderLeft: "60px solid transparent",
          borderRight: "60px solid transparent",
          borderTop: "180px solid #e11d2a",
          opacity: 0.85,
        }}
      />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <HexIcon size={28} />
              <span className="text-sm font-bold tracking-[0.25em] text-white/90">
                ELEVATE YOUR BUSINESS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              Empowering Local
              <br />
              Brands with Digital
              <br />
              Brilliance
            </h1>

            <p className="mt-8 max-w-xl text-base lg:text-lg text-white/75 leading-relaxed">
              We help businesses grow online by handling everything — from
              logo design and websites to social media, ads, and smart
              automation. Whether you&apos;re just starting out or improving
              your online presence, our team makes it easy, effective, and
              stress-free.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-full font-semibold hover:bg-brand-red hover:text-white transition"
            >
              Contact Us
            </a>

            <div className="mt-16">
              <p className="text-white/70 text-sm mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                {[
                  { i: "linkedin-in", label: "LinkedIn" },
                  { i: "instagram", label: "Instagram" },
                  { i: "facebook-f", label: "Facebook" },
                ].map((s) => (
                  <a
                    key={s.i}
                    href="#"
                    aria-label={s.label}
                    className="w-12 h-12 rounded-md border border-white/30 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition"
                  >
                    <i className={`fa-brands fa-${s.i} text-white text-lg`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative h-[520px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[460px] h-[460px] rounded-full overflow-hidden shadow-2xl ring-4 ring-white/5">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80"
                  alt="Developer at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Speech bubble 1 */}
            <div className="absolute top-16 left-4 bg-white text-navy-900 px-6 py-4 rounded-full shadow-2xl font-semibold leading-tight max-w-[230px]">
              Coding your
              <br />
              problems away.
            </div>

            {/* Speech bubble 2 */}
            <div className="absolute bottom-16 right-2 bg-gradient-to-r from-brand-red to-[#7a0e16] text-white px-7 py-4 rounded-full shadow-2xl font-semibold leading-tight">
              360° Marketing
              <br />
              solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
