export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-36 pb-32 lg:pt-44 lg:pb-44">
      {/* left red/purple blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 w-[640px] h-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #6a1428 0%, #3a0c1c 40%, transparent 75%)",
          opacity: 0.85,
          filter: "blur(2px)",
        }}
      />

      {/* right red blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 w-[680px] h-[680px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
          opacity: 0.85,
          filter: "blur(2px)",
        }}
      />

      <div className="container-x relative z-10 text-center">
        <p className="text-white text-sm font-bold tracking-[0.35em]">
          ABOUT US
        </p>
        <h1 className="mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-5xl mx-auto">
          We turn neighbourhood businesses into digital
          powerhouses — building sites and campaigns that help
          local brands stand out where it counts.
        </h1>
      </div>
    </section>
  );
}
