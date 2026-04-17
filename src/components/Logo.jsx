const sizes = {
  sm: "w-8 h-8",
  md: "w-9 h-9",
  lg: "w-11 h-11",
};

const Logo = ({ size = "md", className = "", title = "Kethan Vemuri" }) => (
  <span
    className={`inline-flex shrink-0 ${sizes[size] || sizes.md} ${className}`}
    aria-label={title}
  >
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_4px_14px_rgba(6,182,212,0.35)]"
      role="img"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="kv-logo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="0.55" stopColor="#06b6d4" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="kv-logo-shine" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="64" height="64" rx="14" ry="14" fill="url(#kv-logo-grad)" />
      <rect x="0" y="0" width="64" height="64" rx="14" ry="14" fill="url(#kv-logo-shine)" />
      <g fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 15 L17 49" />
        <path d="M17 32 L30 15" />
        <path d="M17 32 L30 49" />
        <path d="M36 15 L44 49 L52 15" />
      </g>
    </svg>
  </span>
);

export default Logo;
