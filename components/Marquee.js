export default function Marquee() {
  const items = [
    "Brand Identity",
    "Web Design",
    "Web Development",
    "Performance Marketing",
    "Social Strategy",
    "AI SEO",
    "Amazon Growth",
    "Email & Retention",
  ];

  const loop = [...items, ...items, ...items];

  return (
    <div className="relative bg-navy-950 py-6 sm:py-7 overflow-hidden border-y border-white/[0.06]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-navy-950 to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-navy-950 to-transparent z-10"
      />

      <div className="marquee-slow flex items-center gap-12 sm:gap-16 whitespace-nowrap">
        {loop.map((label, i) => (
          <div
            key={i}
            className="flex items-center gap-12 sm:gap-16 shrink-0"
          >
            <span className="text-white/55 text-sm sm:text-base font-medium tracking-[0.2em] uppercase">
              {label}
            </span>
            <span
              aria-hidden="true"
              className="inline-block w-1 h-1 rounded-full bg-brand-red/70"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
