import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function CTA() {
  return (
    <section id="contact" className="bg-navy-950 py-20 sm:py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl bg-navy-900/50 border border-white/[0.08] p-10 sm:p-14 lg:p-20">
          {/* Single soft accent — far corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -bottom-24 w-[420px] h-[420px] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(225,29,42,0.45) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-3xl">
            <Reveal variant="up" duration={700}>
              <p className="text-[11px] font-semibold tracking-[0.3em] text-white/55 uppercase">
                Let&apos;s talk
              </p>
            </Reveal>

            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]">
                Have a project in mind?
                <br />
                <span className="text-white/55">We&apos;re ready when you are.</span>
              </h2>
            </Reveal>

            <Reveal variant="up" delay={240} duration={750}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Magnetic strength={0.22}>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-white text-navy-900 pl-7 pr-3 py-2 rounded-full font-medium text-sm group/btn hover:bg-brand-red hover:text-white transition-colors duration-300"
                  >
                    Start the conversation
                    <span className="inline-flex w-9 h-9 rounded-full bg-navy-900 text-white items-center justify-center group-hover/btn:bg-white group-hover/btn:text-brand-red transition-colors">
                      <i className="fa-solid fa-arrow-right text-xs" />
                    </span>
                  </a>
                </Magnetic>

                <a
                  href="mailto:hello@advertisingslabs.com"
                  className="text-sm text-white/70 hover:text-white transition relative group/mail"
                >
                  hello@advertisingslabs.com
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white/30 group-hover/mail:bg-white transition-colors" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
