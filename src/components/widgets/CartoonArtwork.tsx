import React from "react";

/**
 * High-fidelity 3D cartoon illustrations for MotoSync features.
 * Designed in a vibrant, tactile, Magnific-style 3D cartoon aesthetic
 * with rich depth, clay shading, specular highlights, and neon accents.
 */

interface CartoonArtProps {
  className?: string;
}

/** 1. Find Your Riding Circle: Stylized cartoon biker squad */
export function CartoonPackSquad({ className }: CartoonArtProps) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D cartoon illustration of riders meeting at sunset"
    >
      <defs>
        <linearGradient id="squad-bg" x1="0" y1="0" x2="360" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a2e38" />
          <stop offset="0.6" stopColor="#122027" />
          <stop offset="1" stopColor="#0b151b" />
        </linearGradient>
        <radialGradient id="sun-glow" cx="180" cy="90" r="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff8a68" stopOpacity="0.45" />
          <stop offset="0.7" stopColor="#ff8a68" stopOpacity="0.08" />
          <stop offset="1" stopColor="#ff8a68" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="helmet-coral" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffab91" />
          <stop offset="0.5" stopColor="#ff6b4a" />
          <stop offset="1" stopColor="#c43b1d" />
        </linearGradient>
        <linearGradient id="helmet-cyan" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#a7f3f4" />
          <stop offset="0.5" stopColor="#4fd1d3" />
          <stop offset="1" stopColor="#168b8e" />
        </linearGradient>
        <linearGradient id="helmet-lime" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ebfca3" />
          <stop offset="0.5" stopColor="#c5ee4f" />
          <stop offset="1" stopColor="#82ab17" />
        </linearGradient>
        <linearGradient id="visor-glass" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#1b2a32" />
          <stop offset="1" stopColor="#091014" />
        </linearGradient>
        <linearGradient id="road-mesh" x1="0" y1="180" x2="360" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#253842" />
          <stop offset="1" stopColor="#131e24" />
        </linearGradient>
        <filter id="clay-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.4" />
        </filter>
        <filter id="neon-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="glow" />
          <feComposite in="SourceGraphic" in2="glow" operator="over" />
        </filter>
      </defs>

      {/* Backdrop */}
      <rect width="360" height="220" rx="16" fill="url(#squad-bg)" />
      <circle cx="180" cy="90" r="130" fill="url(#sun-glow)" />

      {/* Stylized road & terrain */}
      <path d="M0 170 Q 180 148 360 170 L 360 220 L 0 220 Z" fill="url(#road-mesh)" />
      <path d="M30 198 Q 180 182 330 198" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="3" strokeDasharray="14 12" />

      {/* Stylized 3D cartoon mini motorcycles in background */}
      <g opacity="0.85" filter="url(#clay-shadow)">
        {/* Bike Left */}
        <circle cx="95" cy="180" r="18" fill="#1e2c33" stroke="#ff8a68" strokeWidth="2.5" />
        <circle cx="95" cy="180" r="9" fill="#0f171b" />
        <path d="M95 180 L 125 162 L 145 162" stroke="#ff8a68" strokeWidth="5" strokeLinecap="round" />
        {/* Bike Right */}
        <circle cx="265" cy="180" r="18" fill="#1e2c33" stroke="#7de0e2" strokeWidth="2.5" />
        <circle cx="265" cy="180" r="9" fill="#0f171b" />
        <path d="M265 180 L 235 162 L 215 162" stroke="#7de0e2" strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* RIDER 1 (Left - Cyan Jacket) */}
      <g filter="url(#clay-shadow)" transform="translate(68, 65)">
        {/* Body / Jacket */}
        <path d="M12 70 Q 28 48 44 70 L 48 102 Q 28 108 8 102 Z" fill="#203a46" />
        <path d="M20 70 L 24 102 M36 70 L 32 102" stroke="#7de0e2" strokeWidth="2.5" />
        {/* Cartoon Helmet */}
        <ellipse cx="28" cy="38" rx="22" ry="24" fill="url(#helmet-cyan)" />
        {/* Visor */}
        <path d="M14 36 Q 28 32 42 36 Q 44 48 28 48 Q 12 48 14 36 Z" fill="url(#visor-glass)" />
        <path d="M17 38 Q 28 35 39 38" stroke="#7de0e2" strokeWidth="2" strokeLinecap="round" filter="url(#neon-glow)" />
        {/* Specular sheen */}
        <ellipse cx="22" cy="24" rx="8" ry="4" fill="#ffffff" fillOpacity="0.4" transform="rotate(-15 22 24)" />
      </g>

      {/* RIDER 2 (Center Hero - Coral/Orange Leader) */}
      <g filter="url(#clay-shadow)" transform="translate(145, 42)">
        {/* Body / Leather Jacket */}
        <path d="M15 88 Q 35 62 55 88 L 60 128 Q 35 136 10 128 Z" fill="#321e1a" />
        <path d="M22 88 L 35 128 M48 88 L 35 128" stroke="#ff8a68" strokeWidth="3" />
        {/* Thumbs up / high five gesture */}
        <circle cx="68" cy="85" r="7" fill="#ffab91" />
        <path d="M68 82 L 68 76" stroke="#ffab91" strokeWidth="3" strokeLinecap="round" />
        {/* Cartoon Helmet */}
        <ellipse cx="35" cy="46" rx="27" ry="30" fill="url(#helmet-coral)" />
        {/* Visor */}
        <path d="M18 44 Q 35 40 52 44 Q 55 58 35 58 Q 15 58 18 44 Z" fill="url(#visor-glass)" />
        <path d="M22 47 Q 35 43 48 47" stroke="#ffab91" strokeWidth="2.5" strokeLinecap="round" filter="url(#neon-glow)" />
        {/* Top Vent */}
        <rect x="29" y="18" width="12" height="4" rx="2" fill="#2c140e" />
        {/* Specular 3D highlight */}
        <ellipse cx="28" cy="28" rx="10" ry="5" fill="#ffffff" fillOpacity="0.45" transform="rotate(-18 28 28)" />
      </g>

      {/* RIDER 3 (Right - Neon Lime Jacket) */}
      <g filter="url(#clay-shadow)" transform="translate(230, 68)">
        {/* Body */}
        <path d="M10 68 Q 26 46 42 68 L 46 98 Q 26 104 6 98 Z" fill="#24361e" />
        <path d="M18 68 L 22 98 M34 68 L 30 98" stroke="#d6f66f" strokeWidth="2.5" />
        {/* Cartoon Helmet */}
        <ellipse cx="26" cy="36" rx="21" ry="23" fill="url(#helmet-lime)" />
        {/* Visor */}
        <path d="M13 34 Q 26 31 39 34 Q 41 45 26 45 Q 11 45 13 34 Z" fill="url(#visor-glass)" />
        <path d="M16 36 Q 26 33 36 36" stroke="#d6f66f" strokeWidth="2" strokeLinecap="round" filter="url(#neon-glow)" />
        {/* Specular sheen */}
        <ellipse cx="20" cy="22" rx="7" ry="3.5" fill="#ffffff" fillOpacity="0.4" transform="rotate(-15 20 22)" />
      </g>

      {/* Floating 3D connected badge */}
      <g transform="translate(132, 12)" filter="url(#clay-shadow)">
        <rect width="96" height="24" rx="12" fill="#162831" stroke="#ff8a68" strokeWidth="1.5" />
        <circle cx="16" cy="12" r="4" fill="#d6f66f" />
        <text x="27" y="15.5" fill="#ffffff" fontSize="9" fontWeight="700" letterSpacing="0.8" fontFamily="system-ui">
          PACK LIVE: 3
        </text>
      </g>
    </svg>
  );
}

/** 2. Voice Lounge: Stylized cartoon helmet with DJ headphones & soundwaves */
export function CartoonVoiceLounge({ className }: CartoonArtProps) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D cartoon illustration of helmet with voice intercom headphones"
    >
      <defs>
        <linearGradient id="voice-bg" x1="0" y1="0" x2="360" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a2033" />
          <stop offset="0.6" stopColor="#111724" />
          <stop offset="1" stopColor="#0a0e17" />
        </linearGradient>
        <linearGradient id="hp-cushion" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#7de0e2" />
          <stop offset="1" stopColor="#177e82" />
        </linearGradient>
        <linearGradient id="sound-grad" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#d6f66f" />
          <stop offset="1" stopColor="#7de0e2" />
        </linearGradient>
        <radialGradient id="voice-pulse" cx="180" cy="110" r="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7de0e2" stopOpacity="0.3" />
          <stop offset="1" stopColor="#7de0e2" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="360" height="220" rx="16" fill="url(#voice-bg)" />
      <circle cx="180" cy="110" r="110" fill="url(#voice-pulse)" />

      {/* Concentric Audio Wave Rings */}
      <circle cx="180" cy="110" r="75" stroke="#7de0e2" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="6 6" />
      <circle cx="180" cy="110" r="95" stroke="#d6f66f" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="8 8" />

      {/* Stylized Equalizer Columns Left */}
      <g transform="translate(42, 85)">
        <rect x="0" y="25" width="6" height="25" rx="3" fill="#7de0e2" fillOpacity="0.7" />
        <rect x="12" y="10" width="6" height="40" rx="3" fill="#7de0e2" />
        <rect x="24" y="0" width="6" height="50" rx="3" fill="#d6f66f" />
        <rect x="36" y="18" width="6" height="32" rx="3" fill="#7de0e2" fillOpacity="0.8" />
      </g>

      {/* Stylized Equalizer Columns Right */}
      <g transform="translate(275, 85)">
        <rect x="0" y="18" width="6" height="32" rx="3" fill="#7de0e2" fillOpacity="0.8" />
        <rect x="12" y="0" width="6" height="50" rx="3" fill="#d6f66f" />
        <rect x="24" y="10" width="6" height="40" rx="3" fill="#7de0e2" />
        <rect x="36" y="25" width="6" height="25" rx="3" fill="#7de0e2" fillOpacity="0.7" />
      </g>

      {/* CARTOON HELMET WITH HEADPHONES */}
      <g transform="translate(180, 110)">
        {/* Headphone Band Arching Over */}
        <path
          d="M -54 -20 C -54 -75, 54 -75, 54 -20"
          stroke="#ff8a68"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M -54 -20 C -54 -75, 54 -75, 54 -20"
          stroke="#ffffff"
          strokeWidth="2"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* 3D Helmet Shell */}
        <ellipse cx="0" cy="0" rx="46" ry="48" fill="#1b2a33" stroke="#2c3e4b" strokeWidth="3" />
        {/* Visor */}
        <path d="M -36 -6 Q 0 -12 36 -6 Q 38 18 0 18 Q -38 18 -36 -6 Z" fill="#0c1418" />
        <path d="M -30 -3 Q 0 -8 30 -3" stroke="#7de0e2" strokeWidth="3.5" strokeLinecap="round" />
        {/* Gloss highlight */}
        <ellipse cx="-18" cy="-24" rx="14" ry="7" fill="#ffffff" fillOpacity="0.35" transform="rotate(-25 -18 -24)" />

        {/* Headphone Ear Cushions */}
        {/* Left Ear Cushion */}
        <g transform="translate(-52, -4)">
          <rect x="-10" y="-22" width="20" height="44" rx="10" fill="url(#hp-cushion)" />
          <ellipse cx="0" cy="0" rx="4" ry="14" fill="#0f4547" />
        </g>
        {/* Right Ear Cushion */}
        <g transform="translate(52, -4)">
          <rect x="-10" y="-22" width="20" height="44" rx="10" fill="url(#hp-cushion)" />
          <ellipse cx="0" cy="0" rx="4" ry="14" fill="#0f4547" />
        </g>

        {/* Boom Microphone */}
        <path d="M 48 10 Q 52 38 16 42" stroke="#ff8a68" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <rect x="6" y="36" width="14" height="12" rx="4" fill="#d6f66f" />
        <circle cx="13" cy="42" r="2" fill="#1b2a33" />
      </g>

      {/* Floating Audio Bubble */}
      <g transform="translate(136, 172)">
        <rect width="88" height="22" rx="11" fill="#162831" stroke="#d6f66f" strokeWidth="1.2" />
        <text x="44" y="14.5" textAnchor="middle" fill="#d6f66f" fontSize="9" fontWeight="700" letterSpacing="1" fontFamily="system-ui">
          INTERCOM 24/7
        </text>
      </g>
    </svg>
  );
}

/** 3. Turn "Let's Go" into a Ride: Stylized cartoon bike on mountain hairpin */
export function CartoonMountainRide({ className }: CartoonArtProps) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D cartoon illustration of motorcycle carving a mountain curve"
    >
      <defs>
        <linearGradient id="mtn-sky" x1="0" y1="0" x2="0" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2c1e2b" />
          <stop offset="0.5" stopColor="#43222a" />
          <stop offset="0.8" stopColor="#ff8a68" />
          <stop offset="1" stopColor="#ffb380" />
        </linearGradient>
        <linearGradient id="mtn-rock-back" x1="0" y1="80" x2="0" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="#221820" />
          <stop offset="1" stopColor="#120c11" />
        </linearGradient>
        <linearGradient id="road-surface" x1="0" y1="130" x2="360" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1c262b" />
          <stop offset="1" stopColor="#10171a" />
        </linearGradient>
      </defs>

      {/* Sunset sky */}
      <rect width="360" height="220" rx="16" fill="url(#mtn-sky)" />

      {/* Sun disk */}
      <circle cx="270" cy="110" r="38" fill="#ffd166" fillOpacity="0.85" />

      {/* Mountain Silhouettes */}
      <polygon points="30,170 110,90 190,170" fill="url(#mtn-rock-back)" />
      <polygon points="140,170 230,75 320,170" fill="url(#mtn-rock-back)" opacity="0.9" />
      <polygon points="260,170 320,110 380,170" fill="url(#mtn-rock-back)" opacity="0.8" />

      {/* Twisting Mountain Hairpin Road */}
      <path
        d="M -20 220 C 120 210, 140 165, 90 148 C 40 132, 160 110, 380 125 L 380 220 Z"
        fill="url(#road-surface)"
      />
      {/* Glowing Road Centerline */}
      <path
        d="M 10 215 C 110 205, 125 170, 92 153 C 65 140, 160 118, 360 128"
        stroke="#ffd166"
        strokeWidth="3"
        strokeDasharray="10 8"
        fill="none"
      />

      {/* 3D CARTOON CAFE RACER BIKE */}
      <g transform="translate(150, 130) rotate(-14)">
        {/* Wheels with chunky cartoon tires */}
        <circle cx="-32" cy="22" r="16" fill="#0d1417" stroke="#334652" strokeWidth="4" />
        <circle cx="-32" cy="22" r="8" fill="#ff8a68" />
        <circle cx="36" cy="22" r="16" fill="#0d1417" stroke="#334652" strokeWidth="4" />
        <circle cx="36" cy="22" r="8" fill="#ff8a68" />

        {/* Motorcycle Body & Tank */}
        <path d="M -28 18 L -6 4 L 18 4 L 32 18 Z" fill="#ff6b4a" />
        <ellipse cx="6" cy="4" rx="14" ry="8" fill="#ff8a68" />
        <ellipse cx="6" cy="2" rx="8" ry="3" fill="#ffffff" fillOpacity="0.5" />

        {/* Cartoon Rider Leaning Into the Apex */}
        <circle cx="4" cy="-14" r="13" fill="#ff8a68" />
        {/* Visor */}
        <rect x="6" y="-14" width="10" height="7" rx="3" fill="#101e25" />
        <line x1="8" y1="-10" x2="14" y2="-10" stroke="#7de0e2" strokeWidth="2" strokeLinecap="round" />
        {/* Leaning Torso */}
        <path d="M -10 10 L 2 -4 L 14 10 Z" fill="#1b2a33" />

        {/* Speed Wind Lines */}
        <line x1="-50" y1="12" x2="-38" y2="12" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
        <line x1="-58" y1="20" x2="-42" y2="20" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Floating 3D Waypoint Pin */}
      <g transform="translate(260, 48)">
        <ellipse cx="14" cy="38" rx="8" ry="3" fill="#000000" fillOpacity="0.3" />
        <path d="M 14 0 C 6 0, 0 6, 0 14 C 0 24, 14 36, 14 36 C 14 36, 28 24, 28 14 C 28 6, 22 0, 14 0 Z" fill="#d6f66f" />
        <circle cx="14" cy="14" r="6" fill="#101e25" />
      </g>
    </svg>
  );
}

/** 4. AI Co-Rider Navigator: Cute cartoon holographic robotic companion */
export function CartoonAiNavigator({ className }: CartoonArtProps) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D cartoon illustration of AI Co-Rider robot"
    >
      <defs>
        <linearGradient id="ai-bg" x1="0" y1="0" x2="360" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d242b" />
          <stop offset="0.6" stopColor="#08171c" />
          <stop offset="1" stopColor="#040b0e" />
        </linearGradient>
        <linearGradient id="bot-shell" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ebfca3" />
          <stop offset="0.5" stopColor="#d6f66f" />
          <stop offset="1" stopColor="#7ba119" />
        </linearGradient>
        <radialGradient id="holo-glow" cx="180" cy="160" r="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7de0e2" stopOpacity="0.45" />
          <stop offset="1" stopColor="#7de0e2" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="360" height="220" rx="16" fill="url(#ai-bg)" />

      {/* Holographic 3D Grid Floor */}
      <g opacity="0.35">
        <line x1="30" y1="180" x2="330" y2="180" stroke="#7de0e2" strokeWidth="1" />
        <line x1="10" y1="200" x2="350" y2="200" stroke="#7de0e2" strokeWidth="1.5" />
        <line x1="90" y1="160" x2="40" y2="220" stroke="#7de0e2" strokeWidth="1" />
        <line x1="150" y1="160" x2="120" y2="220" stroke="#7de0e2" strokeWidth="1" />
        <line x1="210" y1="160" x2="240" y2="220" stroke="#7de0e2" strokeWidth="1" />
        <line x1="270" y1="160" x2="320" y2="220" stroke="#7de0e2" strokeWidth="1" />
      </g>

      <circle cx="180" cy="160" r="100" fill="url(#holo-glow)" />

      {/* CARTOON ROBOT AI CO-RIDER */}
      <g transform="translate(180, 85)">
        {/* Antenna with pulsing sphere */}
        <line x1="0" y1="-44" x2="0" y2="-28" stroke="#7de0e2" strokeWidth="3" />
        <circle cx="0" cy="-48" r="6" fill="#7de0e2" />
        <circle cx="0" cy="-48" r="12" stroke="#7de0e2" strokeOpacity="0.4" strokeWidth="1.5" />

        {/* Head: Rounded Friendly 3D Cube */}
        <rect x="-38" y="-28" width="76" height="62" rx="18" fill="url(#bot-shell)" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.3" />

        {/* Visor Screen */}
        <rect x="-28" y="-18" width="56" height="38" rx="10" fill="#0b171c" />

        {/* Glowing Expressive Eyes */}
        <rect x="-18" y="-8" width="10" height="16" rx="5" fill="#7de0e2" />
        <rect x="8" y="-8" width="10" height="16" rx="5" fill="#7de0e2" />
        {/* Smiling digital mouth */}
        <path d="M -8 12 Q 0 16 8 12" stroke="#d6f66f" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Floating Ear Nodes */}
        <rect x="-46" y="-8" width="8" height="20" rx="4" fill="#7de0e2" />
        <rect x="38" y="-8" width="8" height="20" rx="4" fill="#7de0e2" />

        {/* Cute Floating Hands holding Hologram Map */}
        <g transform="translate(-50, 48)">
          <ellipse cx="0" cy="0" rx="9" ry="7" fill="url(#bot-shell)" />
        </g>
        <g transform="translate(50, 48)">
          <ellipse cx="0" cy="0" rx="9" ry="7" fill="url(#bot-shell)" />
        </g>

        {/* Hologram Route Map Projecting from Bot */}
        <g transform="translate(-40, 52)">
          <path d="M 0 15 Q 40 -10 80 15" stroke="#7de0e2" strokeWidth="3" strokeDasharray="5 4" fill="none" />
          <circle cx="0" cy="15" r="4" fill="#ff8a68" />
          <circle cx="40" cy="2" r="4" fill="#d6f66f" />
          <circle cx="80" cy="15" r="5" fill="#7de0e2" />
        </g>
      </g>

      {/* Floating Mode Chip */}
      <g transform="translate(126, 178)">
        <rect width="108" height="22" rx="11" fill="#10252e" stroke="#7de0e2" strokeWidth="1.2" />
        <text x="54" y="14.5" textAnchor="middle" fill="#7de0e2" fontSize="9" fontWeight="700" letterSpacing="1" fontFamily="system-ui">
          AI COPILOT ACTIVE
        </text>
      </g>
    </svg>
  );
}

/** 5. Pack Radar: Stylized cartoon 3D radar dish with pack formation */
export function CartoonPackRadar({ className }: CartoonArtProps) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D cartoon illustration of live pack radar HUD"
    >
      <defs>
        <linearGradient id="radar-bg" x1="0" y1="0" x2="360" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d2822" />
          <stop offset="0.6" stopColor="#081b16" />
          <stop offset="1" stopColor="#05100d" />
        </linearGradient>
        <radialGradient id="radar-sweep" cx="180" cy="105" r="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d6f66f" stopOpacity="0.35" />
          <stop offset="0.8" stopColor="#7de0e2" stopOpacity="0.1" />
          <stop offset="1" stopColor="#7de0e2" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="360" height="220" rx="16" fill="url(#radar-bg)" />

      {/* Radar Coordinate Grid */}
      <g transform="translate(180, 105)">
        <circle cx="0" cy="0" r="90" stroke="#7de0e2" strokeOpacity="0.2" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="65" stroke="#d6f66f" strokeOpacity="0.25" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="38" stroke="#7de0e2" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="-95" y1="0" x2="95" y2="0" stroke="#7de0e2" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="0" y1="-95" x2="0" y2="95" stroke="#7de0e2" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />

        {/* Rotating Radar Sweep Cone */}
        <path d="M 0 0 L 85 -35 A 90 90 0 0 0 45 -78 Z" fill="url(#radar-sweep)" opacity="0.85" />

        {/* Mini Cartoon Pack Bikes on Radar */}
        {/* Leader Bike (Top Center) */}
        <g transform="translate(0, -42)">
          <circle cx="0" cy="0" r="10" fill="#d6f66f" />
          <polygon points="0,-8 5,6 -5,6" fill="#101e25" />
          <text x="14" y="4" fill="#d6f66f" fontSize="9" fontWeight="700" fontFamily="system-ui">
            YOU
          </text>
        </g>

        {/* Wingman Left */}
        <g transform="translate(-45, 15)">
          <circle cx="0" cy="0" r="8" fill="#7de0e2" />
          <polygon points="0,-6 4,4 -4,4" fill="#101e25" />
          <text x="-38" y="4" fill="#7de0e2" fontSize="8" fontWeight="600" fontFamily="system-ui">
            MARC
          </text>
        </g>

        {/* Wingman Right */}
        <g transform="translate(42, 28)">
          <circle cx="0" cy="0" r="8" fill="#ff8a68" />
          <polygon points="0,-6 4,4 -4,4" fill="#101e25" />
          <text x="12" y="4" fill="#ff8a68" fontSize="8" fontWeight="600" fontFamily="system-ui">
            LEO
          </text>
        </g>
      </g>

      {/* Telemetry pill */}
      <g transform="translate(120, 180)">
        <rect width="120" height="22" rx="11" fill="#12241d" stroke="#d6f66f" strokeWidth="1.2" />
        <circle cx="16" cy="11" r="3.5" fill="#d6f66f" />
        <text x="26" y="14.5" fill="#d6f66f" fontSize="9" fontWeight="700" letterSpacing="0.8" fontFamily="system-ui">
          60Hz LIVE RADAR
        </text>
      </g>
    </svg>
  );
}

/** 6. Expense Split: Stylized cartoon vintage gas pump & coins */
export function CartoonFuelSplit({ className }: CartoonArtProps) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D cartoon illustration of gas pump and bill splitting"
    >
      <defs>
        <linearGradient id="fuel-bg" x1="0" y1="0" x2="360" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#291e1a" />
          <stop offset="0.6" stopColor="#1a1310" />
          <stop offset="1" stopColor="#0f0b09" />
        </linearGradient>
        <linearGradient id="pump-coral" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffab91" />
          <stop offset="0.5" stopColor="#ff6b4a" />
          <stop offset="1" stopColor="#ba3518" />
        </linearGradient>
        <linearGradient id="coin-gold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffe066" />
          <stop offset="1" stopColor="#f4a261" />
        </linearGradient>
      </defs>

      <rect width="360" height="220" rx="16" fill="url(#fuel-bg)" />

      {/* 3D CARTOON GAS PUMP */}
      <g transform="translate(100, 40)">
        {/* Pump Main Body */}
        <rect x="0" y="20" width="70" height="120" rx="14" fill="url(#pump-coral)" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.25" />
        {/* Pump Crown Light */}
        <circle cx="35" cy="14" r="14" fill="#ffffff" stroke="#ff6b4a" strokeWidth="3" />
        <text x="35" y="18" textAnchor="middle" fill="#ff6b4a" fontSize="11" fontWeight="900" fontFamily="system-ui">
          MS
        </text>
        {/* Dial Display */}
        <rect x="10" y="38" width="50" height="32" rx="6" fill="#0d1417" />
        <text x="35" y="58" textAnchor="middle" fill="#d6f66f" fontSize="14" fontWeight="800" fontFamily="monospace">
          $48.50
        </text>

        {/* Pump Nozzle & Hose */}
        <path d="M 70 85 Q 92 85 92 110 Q 92 135 110 115" stroke="#37474f" strokeWidth="6" strokeLinecap="round" fill="none" />
        <rect x="105" y="105" width="16" height="8" rx="2" fill="#7de0e2" transform="rotate(-30 105 105)" />
      </g>

      {/* 3D FLOATING SPLIT RECEIPT */}
      <g transform="translate(205, 48) rotate(6)">
        <rect width="90" height="110" rx="8" fill="#ffffff" />
        {/* Receipt Header */}
        <rect x="12" y="14" width="66" height="6" rx="3" fill="#ff8a68" />
        {/* Checkmark Line 1 */}
        <circle cx="20" cy="34" r="5" fill="#d6f66f" />
        <rect x="32" y="31" width="46" height="5" rx="2.5" fill="#cfd8dc" />
        {/* Checkmark Line 2 */}
        <circle cx="20" cy="50" r="5" fill="#d6f66f" />
        <rect x="32" y="47" width="46" height="5" rx="2.5" fill="#cfd8dc" />
        {/* Checkmark Line 3 */}
        <circle cx="20" cy="66" r="5" fill="#d6f66f" />
        <rect x="32" y="63" width="46" height="5" rx="2.5" fill="#cfd8dc" />
        {/* Total Badge */}
        <rect x="12" y="82" width="66" height="18" rx="5" fill="#101e25" />
        <text x="45" y="94" textAnchor="middle" fill="#d6f66f" fontSize="9" fontWeight="700" fontFamily="system-ui">
          PAID IN FULL
        </text>
      </g>

      {/* Floating 3D Golden Coins */}
      <g transform="translate(200, 25)">
        <circle cx="0" cy="0" r="12" fill="url(#coin-gold)" stroke="#ffffff" strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fill="#6d4c41" fontSize="11" fontWeight="900" fontFamily="system-ui">
          $
        </text>
      </g>
      <g transform="translate(305, 140)">
        <circle cx="0" cy="0" r="10" fill="url(#coin-gold)" stroke="#ffffff" strokeWidth="1" />
        <text x="0" y="3.5" textAnchor="middle" fill="#6d4c41" fontSize="9" fontWeight="900" fontFamily="system-ui">
          $
        </text>
      </g>
    </svg>
  );
}

/** 7. Club Badges: Stylized cartoon heraldic club emblem with wings */
export function CartoonClubBadge({ className }: CartoonArtProps) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D cartoon illustration of club heraldic badge with wings"
    >
      <defs>
        <linearGradient id="club-bg" x1="0" y1="0" x2="360" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e182e" />
          <stop offset="0.6" stopColor="#130f1e" />
          <stop offset="1" stopColor="#0a0810" />
        </linearGradient>
        <linearGradient id="gold-crest" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffe57f" />
          <stop offset="0.5" stopColor="#ffc107" />
          <stop offset="1" stopColor="#ff8f00" />
        </linearGradient>
      </defs>

      <rect width="360" height="220" rx="16" fill="url(#club-bg)" />

      {/* 3D Golden Wings */}
      <g transform="translate(180, 105)">
        {/* Left Wing */}
        <path
          d="M -20 -10 C -60 -40, -110 -20, -130 10 C -105 12, -70 5, -20 18 Z"
          fill="url(#gold-crest)"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        <path d="M -20 10 C -70 12, -100 25, -115 35 C -90 32, -60 25, -20 25 Z" fill="#ffa000" />

        {/* Right Wing */}
        <path
          d="M 20 -10 C 60 -40, 110 -20, 130 10 C 105 12, 70 5, 20 18 Z"
          fill="url(#gold-crest)"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        <path d="M 20 10 C 70 12, 100 25, 115 35 C 90 32, 60 25, 20 25 Z" fill="#ffa000" />

        {/* Center Shield / Crest */}
        <path
          d="M 0 -38 L 38 -20 L 38 20 C 38 46, 0 64, 0 64 C 0 64, -38 46, -38 20 L -38 -20 Z"
          fill="#162831"
          stroke="#ffc107"
          strokeWidth="3.5"
        />

        {/* Interlocking Monogram / Piston */}
        <path d="M -16 -8 L 0 -22 L 16 -8 L 10 20 L -10 20 Z" fill="#7de0e2" />
        <circle cx="0" cy="-2" r="7" fill="#162831" stroke="#d6f66f" strokeWidth="2.5" />

        {/* Ribbon Banner */}
        <path d="M -55 58 L 55 58 L 48 74 L -48 74 Z" fill="#ff6b4a" />
        <text x="0" y="69" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800" letterSpacing="1" fontFamily="system-ui">
          APEX CLUB NO. 1
        </text>
      </g>
    </svg>
  );
}

/** 8. Pack Safety Ping: Stylized cartoon hazard beacon & cone */
export function CartoonSafetyPing({ className }: CartoonArtProps) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D cartoon illustration of safety hazard ping and cone"
    >
      <defs>
        <linearGradient id="safe-bg" x1="0" y1="0" x2="360" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2b1a1a" />
          <stop offset="0.6" stopColor="#1c1010" />
          <stop offset="1" stopColor="#0f0707" />
        </linearGradient>
        <linearGradient id="cone-orange" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ff8a68" />
          <stop offset="0.5" stopColor="#ff5722" />
          <stop offset="1" stopColor="#c41c00" />
        </linearGradient>
      </defs>

      <rect width="360" height="220" rx="16" fill="url(#safe-bg)" />

      {/* Safety Pulsing Waves */}
      <circle cx="180" cy="115" r="78" stroke="#ff8a68" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="6 6" />
      <circle cx="180" cy="115" r="95" stroke="#d6f66f" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="8 8" />

      {/* 3D CARTOON TRAFFIC CONE */}
      <g transform="translate(180, 115)">
        {/* Base Plate */}
        <polygon points="-46,45 46,45 36,35 -36,35" fill="#1b2a33" />

        {/* Orange Cone Body with White Reflective Stripe */}
        <path d="M -28 35 L -8 -38 L 8 -38 L 28 35 Z" fill="url(#cone-orange)" />
        {/* White Reflective Band */}
        <polygon points="-19,10 19,10 14,-10 -14,-10" fill="#ffffff" />

        {/* Floating Warning Shield */}
        <g transform="translate(0, -62)">
          <polygon points="0,-18 18,12 -18,12" fill="#ffd166" stroke="#212121" strokeWidth="2" />
          <text x="0" y="8" textAnchor="middle" fill="#212121" fontSize="15" fontWeight="900" fontFamily="system-ui">
            !
          </text>
        </g>
      </g>

      {/* Safe Path Divert Arrow */}
      <path
        d="M 60 170 Q 180 150 300 170"
        stroke="#d6f66f"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="8 8"
        fill="none"
      />

      {/* Alert Pill */}
      <g transform="translate(120, 180)">
        <rect width="120" height="22" rx="11" fill="#241313" stroke="#ff8a68" strokeWidth="1.2" />
        <circle cx="16" cy="11" r="3.5" fill="#ff8a68" />
        <text x="26" y="14.5" fill="#ff8a68" fontSize="9" fontWeight="700" letterSpacing="0.8" fontFamily="system-ui">
          HAZARD PINNED · ROAD CLEAR
        </text>
      </g>
    </svg>
  );
}
