export default function Marquee() {
  const items = [
    "Performance Marketing",
    "Social Media Marketing",
    "Web Development",
    "Brand Identity",
    "Paid Ads",
  ];

  // Duplicate so the loop can translate -50% smoothly
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div className="relative bg-gradient-to-r from-[#7a0e16] via-brand-red to-[#7a0e16] py-7 overflow-hidden">
      <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
        {loop.map((label, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="text-white text-2xl md:text-3xl font-bold tracking-tight">
              {label}
            </span>
            <i className="fa-solid fa-star text-white text-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
