import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      aria-label="AdvertisingsLabs — Home"
      className={`flex items-center gap-3 ${className}`}
    >
      <svg viewBox="0 0 40 44" width="40" height="44" aria-hidden="true">
        <polygon
          points="20,2 38,12 38,32 20,42 2,32 2,12"
          fill="none"
          stroke="#e11d2a"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <text
          x="20"
          y="29"
          textAnchor="middle"
          fill="#e11d2a"
          fontSize="14"
          fontWeight="900"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="-0.5"
        >
          AL
        </text>
      </svg>
      <span className="leading-tight">
        <span className="block text-xl font-extrabold tracking-tight">
          Advertisings
          <span className="text-brand-red">Labs</span>
        </span>
        <span className="block text-[9px] font-bold tracking-[0.25em] text-white/80">
          GROW · CONVERT · SCALE
        </span>
      </span>
    </Link>
  );
}
