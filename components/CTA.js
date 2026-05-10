import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function CTA() {
  return (
    <section id="contact" className="bg-navy-950 py-16 sm:py-20 lg:py-28">
      <div className="container-x">
        <Reveal variant="zoom" duration={800}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0e2150] via-navy-800 to-navy-900 border border-white/10 p-8 sm:p-10 lg:p-16 text-center">
            {/* Animated background blobs */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full opacity-40 blur-2xl animate-float-slow"
              style={{
                background:
                  "radial-gradient(circle, #e11d2a 0%, transparent 70%)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -bottom-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full opacity-40 blur-2xl animate-float-slow-reverse"
              style={{
                background:
                  "radial-gradient(circle, #1f7da6 0%, transparent 70%)",
              }}
            />

            {/* Sweeping shimmer overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
            >
              <span className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            </div>

            <div className="relative">
              <Reveal variant="up" delay={120} duration={700}>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-white via-brand-red to-white bg-clip-text text-transparent animate-gradient">
                    Elevate Your Brand?
                  </span>
                </h2>
              </Reveal>

              <Reveal variant="up" delay={240} duration={700}>
                <p className="mt-3 sm:mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                  Let&apos;s build something extraordinary together. Tell us
                  about your project and we&apos;ll get back within 24 hours.
                </p>
              </Reveal>

              <Reveal variant="up" delay={360} duration={650}>
                <Magnetic strength={0.4}>
                  <a
                    href="/contact"
                    className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-brand-red text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold relative overflow-hidden group/btn animate-glow"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                    />
                    <span className="relative z-10 group-hover/btn:text-navy-900 transition-colors">
                      Get In Touch
                    </span>
                    <i className="fa-solid fa-arrow-right relative z-10 group-hover/btn:text-navy-900 group-hover/btn:translate-x-1 transition-all" />
                  </a>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
