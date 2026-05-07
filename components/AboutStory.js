export default function AboutStory() {
  return (
    <section className="relative bg-[#f5f7fb] text-navy-900 py-20 lg:py-28 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <p className="text-brand-red font-semibold text-base">
              About US WebStudio
            </p>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy-900 leading-[1.1]">
              Hear what local businesses are saying
              about US WebStudio.
            </h2>
            <p className="mt-6 text-navy-900/70 leading-relaxed text-base lg:text-lg max-w-xl">
              Working hand-in-hand with local businesses, we know how to
              create meaningful results without big-agency price tags. Our
              websites are not just visually polished — they are built to
              convert, helping small businesses attract and close
              high-value clients with confidence. At US WebStudio, we turn
              lean resources into powerful digital impact.
            </p>
            <a
              href="/services"
              className="mt-8 inline-flex items-center gap-2 border-2 border-navy-900 text-navy-900 px-7 py-3 rounded-md font-semibold hover:bg-navy-900 hover:text-white transition"
            >
              View Our Services <i className="fa-solid fa-arrow-right" />
            </a>
          </div>

          {/* RIGHT - video placeholder */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-xl">
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
        </div>
      </div>
    </section>
  );
}
