import type { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

/**
 * MotoSync Brand Identity — The Pack Radar HUD
 * 
 * An action-and-purpose-driven brand emblem reflecting what MotoSync actually does:
 * 1. 360° Pack Radar: Range ring tracking pack members within real-time mesh distance.
 * 2. Forward Heading Delta: The aerodynamic motorcycle carving forward on the route.
 * 3. Live Telemetry Sync: Connected crew member pings orbiting together in real-time synchronicity.
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
        aria-label="MotoSync Pack Radar"
        {...props}
      >
        <defs>
          {/* High-voltage heading delta gradient */}
          <linearGradient id="msRadarGrad" x1="12" y1="10" x2="52" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7de0e2" />
            <stop offset="0.6" stopColor="#9bf3aa" />
            <stop offset="1" stopColor="#d6f66f" />
          </linearGradient>

          {/* Depth glow filter */}
          <filter id="msRadarGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#7de0e2" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* 360° Radar Field Boundary (Pack Radius) */}
        <circle
          cx="32"
          cy="32"
          r="26"
          stroke="rgba(125,224,226,0.25)"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />

        {/* Compass Cardinal Heading Tick */}
        <line
          x1="32"
          y1="2"
          x2="32"
          y2="6"
          stroke="#7de0e2"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Forward Heading Stealth Delta (Your bike on the road) */}
        <path
          d="M 32 10 L 49 47 L 32 38 L 15 47 Z"
          fill="url(#msRadarGrad)"
          filter="url(#msRadarGlow)"
        />

        {/* Live GPS Telemetry Pulse (Your real-time ping) */}
        <circle cx="32" cy="27" r="3.2" fill="#ff8a68" />
        <circle cx="32" cy="27" r="1.3" fill="#ffffff" />

        {/* Surrounding Pack Crew Beacons (Active in sync) */}
        <circle cx="50" cy="22" r="2.8" fill="#d6f66f" />
        <circle cx="14" cy="22" r="2.8" fill="#7de0e2" />
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
