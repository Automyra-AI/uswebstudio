export default function HexIcon({ size = 28 }) {
  return (
    <svg viewBox="0 0 40 44" width={size} height={(size / 40) * 44} aria-hidden="true">
      <polygon
        points="20,2 38,12 38,32 20,42 2,32 2,12"
        fill="none"
        stroke="#e11d2a"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="17.5" y="14" width="5" height="16" fill="#e11d2a" rx="1" />
    </svg>
  );
}
