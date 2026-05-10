import Reveal from "./Reveal";

export default function BookACall({
  calendlyUrl = "https://calendly.com/d/cnwq-9wj-tqw/30min",
}) {
  return (
    <section
      id="book-a-call"
      className="relative text-white py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #6a1428 0%, #8a1a2c 45%, #5a1023 100%)",
      }}
    >
      {/* top diagonal stripe band */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-[1px] h-6 diagonal-stripes opacity-90 z-10"
      />

      {/* Floating accent blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-30 blur-2xl animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, #ffffff 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-25 blur-2xl animate-float-slow-reverse"
        style={{
          background:
            "radial-gradient(circle, #ffffff 0%, transparent 70%)",
        }}
      />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal variant="up" duration={650}>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              Book a{" "}
              <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent animate-gradient">
                Call!
              </span>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={150} duration={700}>
            <p className="mt-4 sm:mt-5 text-white/90 leading-relaxed text-sm sm:text-base lg:text-lg">
              Book a 30-minute strategy call with our team — no fluff, no
              pressure, just clarity and next steps.
            </p>
          </Reveal>
        </div>

        <Reveal variant="zoom" delay={250} duration={800}>
          <div className="mt-10 sm:mt-12 rounded-2xl overflow-hidden shadow-2xl bg-white ring-2 ring-white/20">
            <iframe
              src={calendlyUrl}
              title="Schedule a meeting"
              className="w-full"
              style={{ height: "720px", border: 0 }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
