const VALUES = [
  {
    title: "Local Masterminds",
    body:
      "We are not just marketers — we are locals who understand your customers and your community. Think of us as your neighbourhood growth team.",
  },
  {
    title: "We Live Next Door",
    body:
      "Whether it is a quick update or a brand new idea, we stay close — ready to respond, support, and build alongside you every step of the way.",
  },
  {
    title: "Pocket Friendly",
    body:
      "Most marketing partners are not built to be pocket friendly — but we are. Our services are tailored to your budget without cutting corners on creativity or results.",
  },
];

export default function AboutValues() {
  return (
    <section className="relative bg-navy-950 text-white py-20 lg:py-28 overflow-hidden">
      {/* big red blob behind */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 w-[1100px] h-[700px] rounded-[50%]"
        style={{
          background:
            "radial-gradient(ellipse at center, #e11d2a 0%, #8a0e18 45%, transparent 75%)",
          opacity: 0.55,
          filter: "blur(4px)",
        }}
      />

      <div className="container-x relative z-10">
        <h2 className="text-center text-3xl lg:text-5xl font-bold leading-[1.1] max-w-4xl mx-auto">
          Helping local businesses grow smarter,
          <br className="hidden lg:block" /> faster, and stronger
        </h2>
        <p className="mt-6 text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
          We blend creativity, strategy, and digital tools so small businesses
          can compete with the big names — without burning through their
          budget.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl p-[1px] bg-gradient-to-b from-white/30 via-white/10 to-transparent"
            >
              <div className="rounded-[22px] h-full p-8 lg:p-10 bg-gradient-to-b from-[#0e2a55] via-navy-800 to-navy-900">
                <h3 className="text-center text-2xl lg:text-3xl font-bold pb-4 border-b border-white/15">
                  {v.title}
                </h3>
                <p className="mt-6 text-center text-white/85 leading-relaxed">
                  {v.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom diagonal stripe band */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-6 diagonal-stripes opacity-90 z-10"
      />
    </section>
  );
}
