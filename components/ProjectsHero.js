export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-36 pb-32 lg:pt-44 lg:pb-44">
      {/* big purple/red blob bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-72 -bottom-40 w-[1100px] h-[1100px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #6a1428 0%, #3a0c1c 45%, transparent 75%)",
          opacity: 0.85,
          filter: "blur(2px)",
        }}
      />

      <div className="container-x relative z-10 text-center">
        <p className="text-white text-sm font-bold tracking-[0.35em]">
          OUR PROJECTS
        </p>
        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1]">
          Proud Work,
          <br />
          Proven Impact
        </h1>
        <p className="mt-6 text-white text-sm lg:text-base font-bold tracking-[0.35em]">
          YOUR BRAND, ELEVATED.
        </p>
      </div>
    </section>
  );
}
