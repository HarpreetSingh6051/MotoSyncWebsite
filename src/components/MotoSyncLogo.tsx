import type { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

/**
 * MotoSync Bespoke Brand Mark
 * 
 * An original, precision-crafted monogram combining:
 * 1. Dual leaning motorcycle apex trajectories (18° dynamic velocity rake)
 * 2. An interconnected "M" and "S" geometry forming an infinite sync loop
 * 3. High-voltage electric cyan (#7de0e2) and neon lime (#d6f66f) speed accents
 */
export function MotoSyncLogo({
  size = 32,
  showWordmark = false,
  className = "",
  ...props
}: LogoProps) {
  const markWidth = size;
  const markHeight = size;

  return (
    <div className={`motosync-logo-container inline-flex items-center gap-3 ${className}`}>
      <svg
        width={markWidth}
        height={markHeight}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="motosync-logo-mark transition-transform duration-300 hover:scale-105"
        aria-label="MotoSync Icon"
        {...props}
      >
        <defs>
          {/* Main neon velocity gradient */}
          <linearGradient id="msLogoGradient" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7de0e2" />
            <stop offset="0.5" stopColor="#9bf3aa" />
            <stop offset="1" stopColor="#d6f66f" />
          </linearGradient>

          {/* Secondary depth gradient for rear wing */}
          <linearGradient id="msLogoDepth" x1="12" y1="20" x2="52" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d6f66f" stopOpacity="0.85" />
            <stop offset="1" stopColor="#ff8a68" stopOpacity="0.75" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="msLogoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#7de0e2" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Outer aerodynamic speed ring (subtle radar track) */}
        <circle
          cx="32"
          cy="32"
          r="29"
          stroke="var(--ms-line, #33464e)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeOpacity="0.6"
        />

        {/* Left Wing / Apex Fork (First leg of 'M' leaning into curve) */}
        <path
          d="M13 46L24 16C24.5 14.5 26.2 13.5 28 14L34 16C35.5 16.5 36.2 18.2 35.5 19.8L27 41C26.5 42.5 24.8 43.5 23 43L15 41C13.5 40.5 12.5 38.8 13 37.2Z"
          fill="url(#msLogoGradient)"
          filter="url(#msLogoGlow)"
        />

        {/* Intersecting Sync Loop (Twin apex curve forming the 'S' and bridge of 'M') */}
        <path
          d="M26 21L42 15C44.5 14 47.5 15.5 48.5 18L51 25C52 27.5 50.8 30.5 48.2 31.5L34 37C31.5 38 29.8 40.5 30.5 43L32 48C32.8 50.8 35.8 52.2 38.5 51.2L51 46.5"
          stroke="url(#msLogoGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dynamic Velocity Apex Chevron (Forward telemetry indicator) */}
        <path
          d="M37 25L43 31L37 37"
          stroke="var(--ms-night, #101e25)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center Pack Pulsing Apex Point */}
        <circle cx="43" cy="31" r="2.5" fill="var(--ms-lime, #d6f66f)" />
      </svg>

      {showWordmark && (
        <span className="motosync-wordmark font-display font-extrabold tracking-tight text-xl leading-none flex items-center">
          <span className="text-[var(--ms-white,#f7f8ef)]">MOTO</span>
          <span className="text-[var(--ms-lime,#d6f66f)]">SYNC</span>
          <span className="ml-1 text-[9px] font-mono text-[var(--ms-cyan,#7de0e2)] uppercase tracking-widest bg-[rgba(125,224,226,0.12)] border border-[rgba(125,224,226,0.3)] px-1.5 py-0.5 rounded-full">
            PRO
          </span>
        </span>
      )}
    </div>
  );
}
