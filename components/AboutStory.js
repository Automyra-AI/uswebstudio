import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import TiltCard from "./TiltCard";

export default function AboutStory() {
  return (
    <section className="relative bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* subtle wave bg */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full opacity-60"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M0,160 C 360,80 720,320 1080,220 C 1260,170 1380,260 1440,260 L1440,0 L0,0 Z"
          fill="#eef2f8"
        />
        <path
          d="M0,520 C 360,420 720,640 1080,560 C 1260,520 1380,580 1440,580 L1440,800 L0,800 Z"
          fill="#eef2f8"
        />
      </svg>

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* LEFT */}
          <div>
            <Reveal variant="up" duration={600}>
              <p className="text-brand-red font-semibold text-sm sm:text-base">
                About US WebStudio
              </p>
            </Reveal>

            <Reveal variant="up" delay={120} duration={750}>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-5xl font-bold text-navy-900 leading-[1.1]">
                Hear what local businesses are saying about{" "}
                <span className="bg-gradient-to-r from-navy-900 via-brand-red to-navy-900 bg-clip-text text-transparent animate-gradient">
                  US WebStudio
                </span>
                .
              </h2>
            </Reveal>

            <Reveal variant="up" delay={250} duration={700}>
              <p className="mt-4 sm:mt-6 text-navy-900/70 leading-relaxed text-sm sm:text-base lg:text-lg max-w-xl">
                Working hand-in-hand with local businesses, we know how to
                create meaningful results without big-agency price tags. Our
                websites are not just visually polished — they are built to
                convert, helping small businesses attract and close
                high-value clients with confidence. At US WebStudio, we turn
                lean resources into powerful digital impact.
              </p>
            </Reveal>

            <Reveal variant="up" delay={400} duration={650}>
              <Magnetic strength={0.3}>
                <a
                  href="/services"
                  className="mt-6 sm:mt-8 inline-flex items-center gap-2 border-2 border-navy-900 text-navy-900 px-6 sm:px-7 py-2.5 sm:py-3 rounded-md font-semibold relative overflow-hidden group/btn"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-navy-900 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                  />
                  <span className="relative z-10 group-hover/btn:text-white transition-colors">
                    View Our Services
                  </span>
                  <i className="fa-solid fa-arrow-right relative z-10 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </a>
              </Magnetic>
            </Reveal>
          </div>

          {/* RIGHT - video placeholder */}
          <Reveal variant="right" delay={200} duration={800}>
            <TiltCard max={6} scale={1.02}>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-xl ring-2 ring-brand-red/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="About US WebStudio"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
