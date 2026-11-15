import type { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

/**
 * MotoSync Bespoke Brand Mark — The Apex Winglet
 * 
 * An iconic high-velocity monogram engineered at the intersection of:
 * 1. Motorcycle Racing Aerodynamics: Dual superbike winglets canted at a dynamic 22° rake angle.
 * 2. Pack Echelon Formation: Two synchronized riders leaning together through a high-speed apex.
 * 3. Live Telemetry Mesh: Integrated coral-flame apex focal beacon connecting the pack in real-time.
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
    <div className={`motosync-logo-container inline-flex items-center gap-3 select-none ${className}`}>
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
          <linearGradient id="msApexGrad" x1="8" y1="12" x2="56" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7de0e2" />
            <stop offset="0.5" stopColor="#9bf3aa" />
            <stop offset="1" stopColor="#d6f66f" />
          </linearGradient>

          {/* Depth glow filter */}
          <filter id="msApexGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#7de0e2" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* 
          The Apex Winglet Monogram
          - Left Blade: Ascending motorcycle rake angle (Lead Rider)
          - Center Dive: High-speed apex lean
          - Right Blade: Ascending second crest (Wingman / Pack Sync)
          - Chamfered base: Aerodynamic winglet cutouts
        */}
        <path
          d="M 12 47 L 22.5 14.5 C 23.2 12.5 25.2 11.2 27.5 11.5 L 30 12 C 32 12.5 33.2 14.2 33.8 16 L 37.5 27 L 41.2 16 C 41.8 14.2 43 12.5 45 12 L 47.5 11.5 C 49.8 11.2 51.8 12.5 52.5 14.5 L 63 47 L 54 47 L 47 25 L 42.5 37 C 41.8 39 39.8 40.2 37.8 40 L 36.2 40 C 34.2 40.2 32.2 39 31.5 37 L 27 25 L 20 47 L 12 47 Z"
          fill="url(#msApexGrad)"
          filter="url(#msApexGlow)"
        />

        {/* Synchronized Telemetry Focal Node (The Live Pack Sync Beacon) */}
        <circle cx="37" cy="23" r="3.2" fill="#ff8a68" />
        <circle cx="37" cy="23" r="1.4" fill="#ffffff" />
      </svg>

      {showWordmark && (
        <span className="motosync-wordmark font-display font-extrabold tracking-tight text-xl leading-none flex items-center">
          <span className="text-[var(--ms-white,#f7f8ef)]">MOTO</span>
          <span className="text-[var(--ms-lime,#d6f66f)]">SYNC</span>
          <span className="ml-1.5 text-[9px] font-mono font-bold text-[var(--ms-cyan,#7de0e2)] uppercase tracking-widest bg-[rgba(125,224,226,0.12)] border border-[rgba(125,224,226,0.3)] px-1.5 py-0.5 rounded-full">
            PRO
          </span>
        </span>
      )}
    </div>
  );
}
