export default function Marquee() {
  const items = [
    "Performance Marketing",
    "Social Media Marketing",
    "Web Development",
    "Brand Identity",
    "Paid Ads",
    "AI SEO",
    "Amazon Growth",
    "Email Automation",
  ];

  // Duplicate so the loop can translate -50% smoothly
  const loop = [...items, ...items, ...items];

  return (
    <div className="relative bg-gradient-to-r from-[#7a0e16] via-brand-red to-[#7a0e16] py-5 sm:py-7 overflow-hidden group/marquee">
      {/* fade edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#7a0e16] to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#7a0e16] to-transparent z-10"
      />

      <div className="marquee-track flex items-center gap-8 sm:gap-12 whitespace-nowrap group-hover/marquee:[animation-play-state:paused]">
        {loop.map((label, i) => (
          <div
            key={i}
            className="flex items-center gap-8 sm:gap-12 shrink-0 group/item"
          >
            <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-all duration-300 group-hover/item:text-white group-hover/item:scale-110 group-hover/item:tracking-wide cursor-default">
              {label}
            </span>
            <i className="fa-solid fa-star text-white text-xl sm:text-2xl transition-transform duration-500 group-hover/item:rotate-180 group-hover/item:scale-125" />
          </div>
        ))}
      </div>
    </div>
  );
}
