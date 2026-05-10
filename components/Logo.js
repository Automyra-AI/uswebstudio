import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" aria-label="US Web Studio — Home" className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 40 44" width="40" height="44" aria-hidden="true">
        <polygon
          points="20,2 38,12 38,32 20,42 2,32 2,12"
          fill="none"
          stroke="#e11d2a"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <rect x="17.5" y="14" width="5" height="16" fill="#e11d2a" rx="1" />
      </svg>
      <span className="leading-tight">
        <span className="block text-2xl font-extrabold tracking-tight">US</span>
        <span className="block text-[10px] font-bold tracking-[0.25em] text-white/90">
          WEB
          <br />
          STUDIO
        </span>
      </span>
    </Link>
  );
}
