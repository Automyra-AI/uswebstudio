export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-36 pb-28 lg:pt-44 lg:pb-36">
      {/* left red blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
          opacity: 0.55,
          filter: "blur(20px)",
        }}
      />

      {/* right red blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-40 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
          opacity: 0.55,
          filter: "blur(20px)",
        }}
      />

      {/* faint blue blob right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-20 top-12 w-[420px] h-[420px] rounded-full bg-[#0e3a8a]/30 blur-2xl"
      />

      <div className="container-x relative z-10 text-center">
        <p className="text-white text-sm font-bold tracking-[0.35em]">
          OUR SERVICES
        </p>
        <h1 className="mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-5xl mx-auto">
          We believe local businesses deserve to grow through
          the right marketing platforms. Without breaking the
          bank.
        </h1>
      </div>
    </section>
  );
}
