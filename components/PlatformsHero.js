export default function PlatformsHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-36 pb-32 lg:pt-44 lg:pb-36">
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

      <div className="container-x relative z-10 text-center">
        <p className="text-white text-sm font-bold tracking-[0.35em]">
          PLATFORMS
        </p>
        <h1 className="mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-5xl mx-auto">
          Comprehensive solutions across every major
          ecommerce platform — built to scale with your brand.
        </h1>
      </div>
    </section>
  );
}
