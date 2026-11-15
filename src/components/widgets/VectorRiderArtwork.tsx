import React from "react";

/**
 * Premium Human Vector Artwork for MotoSync.
 * Designed with editorial quality, authentic rider gear, sleek silhouettes,
 * natural anatomy, and refined lighting matching MotoSync design tokens.
 */

interface VectorArtProps {
  className?: string;
}

/** 1. Find Your Riding Circle: Human riders meeting at a scenic mountain overlook */
export function VectorPackSquad({ className }: VectorArtProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial vector illustration of three riders meeting at a mountain overlook"
    >
      <defs>
        <linearGradient id="sq-bg" x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0e1a20" />
          <stop offset="0.6" stopColor="#142630" />
          <stop offset="1" stopColor="#1b3340" />
        </linearGradient>
        <radialGradient id="sq-sun" cx="300" cy="90" r="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff8a68" stopOpacity="0.3" />
          <stop offset="0.6" stopColor="#ff8a68" stopOpacity="0.05" />
          <stop offset="1" stopColor="#ff8a68" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sq-road" x1="0" y1="180" x2="400" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#17242c" />
          <stop offset="1" stopColor="#0c1317" />
        </linearGradient>
        <linearGradient id="sq-jacket-1" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#253a45" />
          <stop offset="1" stopColor="#131e24" />
        </linearGradient>
        <linearGradient id="sq-jacket-2" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ff8a68" />
          <stop offset="1" stopColor="#c74f32" />
        </linearGradient>
        <linearGradient id="sq-rim-light" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#7de0e2" stopOpacity="0.8" />
          <stop offset="1" stopColor="#7de0e2" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Atmospheric backdrop */}
      <rect width="400" height="250" rx="16" fill="url(#sq-bg)" />
      <circle cx="300" cy="90" r="140" fill="url(#sq-sun)" />

      {/* Distant mountain ridges */}
      <path d="M0 160 L60 135 L140 168 L220 120 L310 155 L400 130 L400 250 L0 250 Z" fill="#121e25" opacity="0.6" />
      <path d="M0 175 L90 148 L170 180 L280 140 L400 170 L400 250 L0 250 Z" fill="#15242c" opacity="0.85" />

      {/* Road overlook pavement */}
      <path d="M0 185 Q 200 175 400 185 L 400 250 L 0 250 Z" fill="url(#sq-road)" />
      <line x1="20" y1="215" x2="380" y2="215" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" strokeDasharray="16 14" />

      {/* Parked Motorcycle 1 (Left - Sleek Silhouette) */}
      <g opacity="0.9" transform="translate(45, 145)">
        <circle cx="20" cy="45" r="18" stroke="#314552" strokeWidth="4" fill="#0d1418" />
        <circle cx="75" cy="45" r="18" stroke="#314552" strokeWidth="4" fill="#0d1418" />
        <path d="M20 45 L42 22 L65 22 L75 45" stroke="#7de0e2" strokeWidth="3" fill="none" />
        <polygon points="35,16 65,16 58,26 30,26" fill="#7de0e2" />
        <path d="M60 16 L68 8 L74 10" stroke="#93a7b0" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* RIDER 1 (Left: Standing, holding helmet under arm) */}
      <g transform="translate(110, 85)">
        {/* Legs / Riding Pants & Boots */}
        <path d="M12 90 L10 142 L6 145 M26 90 L28 142 L32 145" stroke="#10191e" strokeWidth="6" strokeLinecap="round" />
        <path d="M12 90 L10 142 M26 90 L28 142" stroke="#22333d" strokeWidth="4.5" strokeLinecap="round" />
        {/* Torso / Technical Leather Jacket */}
        <path d="M8 38 L30 38 L33 90 L5 90 Z" fill="url(#sq-jacket-1)" stroke="#2b404d" strokeWidth="1.2" />
        <path d="M19 38 L19 90" stroke="#7de0e2" strokeWidth="1.5" strokeOpacity="0.7" />
        {/* Left Arm holding sleek helmet */}
        <path d="M8 42 L-6 68 L8 76" stroke="#22333d" strokeWidth="5.5" strokeLinecap="round" fill="none" />
        {/* Helmet under arm */}
        <ellipse cx="2" cy="74" rx="11" ry="12" fill="#101e25" stroke="#7de0e2" strokeWidth="1.5" />
        <path d="M-4 74 Q 2 70 8 74" stroke="#7de0e2" strokeWidth="2" strokeLinecap="round" />
        {/* Right Arm hanging relaxed */}
        <path d="M30 42 L36 72" stroke="#22333d" strokeWidth="5.5" strokeLinecap="round" />
        {/* Head / Profile */}
        <ellipse cx="19" cy="22" rx="7.5" ry="9.5" fill="#e8c2a8" />
        <path d="M13 14 C15 8, 26 8, 27 16 C25 20, 15 22, 13 14 Z" fill="#2d221c" />
      </g>

      {/* RIDER 2 (Center Hero: Confident posture, checking mobile telemetry) */}
      <g transform="translate(185, 70)">
        {/* Legs / Boots */}
        <path d="M14 105 L12 158 L7 162 M32 105 L35 158 L40 162" stroke="#11191f" strokeWidth="6.5" strokeLinecap="round" />
        <path d="M14 105 L12 158 M32 105 L35 158" stroke="#283944" strokeWidth="5" strokeLinecap="round" />
        {/* Torso / Premium Riding Jacket with Coral Accent */}
        <path d="M8 42 L38 42 L42 105 L4 105 Z" fill="#1b2a32" stroke="#314755" strokeWidth="1.5" />
        {/* Asymmetrical Moto Zipper & Coral Accents */}
        <path d="M18 42 L24 105" stroke="#ff8a68" strokeWidth="2.5" />
        <path d="M8 52 L16 52 M30 52 L38 52" stroke="#ff8a68" strokeWidth="2" />
        {/* Forearms holding smartphone in front */}
        <path d="M8 46 L18 72 L23 68 M38 46 L28 72 L23 68" stroke="#283944" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Smartphone with glowing cyan radar */}
        <rect x="20" y="58" width="8" height="15" rx="2" fill="#0d181e" stroke="#7de0e2" strokeWidth="1" transform="rotate(-10 24 65)" />
        <circle cx="24" cy="65" r="2" fill="#d6f66f" />
        {/* Head / Helmet or Cap */}
        <ellipse cx="23" cy="24" rx="8.5" ry="10.5" fill="#deb498" />
        <path d="M15 15 C17 9, 31 9, 32 18 C28 22, 16 23, 15 15 Z" fill="#191514" />
        {/* Rim light highlight */}
        <path d="M38 44 L42 105" stroke="#7de0e2" strokeWidth="1.5" opacity="0.6" />
      </g>

      {/* RIDER 3 (Right: Seated on modern adventure tourer bike) */}
      <g transform="translate(265, 100)">
        {/* Motorcycle Rear & Tank */}
        <circle cx="65" cy="90" r="19" stroke="#314552" strokeWidth="4" fill="#0d1418" />
        <path d="M20 75 L45 55 L70 58 L65 90" stroke="#2c3e4a" strokeWidth="3.5" fill="none" />
        <polygon points="35,50 60,50 54,60 28,60" fill="#ff8a68" />
        {/* Seated Rider Silhouette */}
        <path d="M28 65 L40 92 L46 128" stroke="#1e2c34" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M18 25 L40 25 L36 68 L14 68 Z" fill="#1b2931" stroke="#2e424f" strokeWidth="1.2" />
        {/* Hands on Handlebars */}
        <path d="M22 30 L48 42" stroke="#263945" strokeWidth="5" strokeLinecap="round" />
        {/* Sleek Aerodynamic Helmet */}
        <ellipse cx="26" cy="12" rx="10" ry="11" fill="#101e25" stroke="#d6f66f" strokeWidth="1.5" />
        <path d="M23 10 Q 34 10 36 17 Q 26 18 23 10 Z" fill="#7de0e2" fillOpacity="0.8" />
      </g>

      {/* HUD Telemetry Overlay Pill */}
      <g transform="translate(145, 18)">
        <rect width="110" height="24" rx="12" fill="#101e25" fillOpacity="0.88" stroke="#7de0e2" strokeWidth="1" />
        <circle cx="16" cy="12" r="3.5" fill="#d6f66f" />
        <text x="26" y="15.5" fill="#ffffff" fontSize="9" fontWeight="700" letterSpacing="0.8" fontFamily="system-ui">
          ROSTER: 3 RIDERS
        </text>
      </g>
    </svg>
  );
}

/** 2. Voice Lounge: Cinematic human profile with aero helmet and communicator */
export function VectorVoiceLounge({ className }: VectorArtProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial vector illustration of human rider with high-end aero helmet and intercom"
    >
      <defs>
        <linearGradient id="vl-bg" x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0b1419" />
          <stop offset="0.5" stopColor="#111f26" />
          <stop offset="1" stopColor="#1a2f3b" />
        </linearGradient>
        <radialGradient id="vl-glow" cx="190" cy="125" r="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7de0e2" stopOpacity="0.25" />
          <stop offset="0.7" stopColor="#7de0e2" stopOpacity="0.04" />
          <stop offset="1" stopColor="#7de0e2" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="vl-visor" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#7de0e2" />
          <stop offset="0.5" stopColor="#1e4e54" />
          <stop offset="1" stopColor="#0b191c" />
        </linearGradient>
        <linearGradient id="vl-shell" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#253a47" />
          <stop offset="0.7" stopColor="#142128" />
          <stop offset="1" stopColor="#0b1216" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" rx="16" fill="url(#vl-bg)" />
      <circle cx="190" cy="125" r="120" fill="url(#vl-glow)" />

      {/* Soundwave concentric ripple rings radiating outward */}
      <circle cx="270" cy="135" r="35" stroke="#7de0e2" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="270" cy="135" r="60" stroke="#7de0e2" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="6 6" />
      <circle cx="270" cy="135" r="90" stroke="#d6f66f" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="8 8" />
      <circle cx="270" cy="135" r="125" stroke="#7de0e2" strokeOpacity="0.1" strokeWidth="1.5" />

      {/* HUMAN RIDER BUST & HELMET (SIDE PROFILE) */}
      <g transform="translate(115, 30)">
        {/* Shoulders / Armored Jacket Collar */}
        <path
          d="M -30 185 C 0 155, 60 148, 120 170 L 150 200 L -40 200 Z"
          fill="#131e25"
          stroke="#263a45"
          strokeWidth="1.5"
        />
        <path d="M 35 152 L 42 195" stroke="#ff8a68" strokeWidth="2.5" />
        <path d="M 0 162 L 70 172" stroke="#7de0e2" strokeWidth="1.5" opacity="0.6" />

        {/* Neck Support */}
        <path d="M 22 115 L 48 115 L 52 152 L 18 152 Z" fill="#1b2a33" />

        {/* Helmet Shell: Sleek European Aerodynamic Profile */}
        <path
          d="M 12 30 C 35 -5, 115 -5, 138 35 C 152 65, 145 105, 128 128 C 112 145, 65 145, 32 135 C 10 125, -2 85, 2 60 Z"
          fill="url(#vl-shell)"
          stroke="#395262"
          strokeWidth="2"
        />

        {/* Rear Aero Spoiler Fin */}
        <path d="M 2 55 L -16 65 L -8 88 L 10 82 Z" fill="#ff8a68" opacity="0.9" />

        {/* Visor Cutout & Mirror Tint */}
        <path
          d="M 65 35 Q 115 32 142 55 Q 146 88 125 102 Q 85 96 68 85 Z"
          fill="url(#vl-visor)"
          stroke="#7de0e2"
          strokeWidth="2"
        />
        {/* Visor Reflection Streak (Mountain road reflection) */}
        <path
          d="M 85 45 Q 120 44 135 62 L 128 78 Q 110 58 82 58 Z"
          fill="#ffffff"
          fillOpacity="0.28"
        />

        {/* Chin Vent & Sharp Aero Creases */}
        <polygon points="112,110 126,110 122,122 108,122" fill="#0c1418" stroke="#7de0e2" strokeWidth="1" />
        <path d="M 40 18 Q 85 16 122 42" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />

        {/* Intercom Mesh Unit (Mounted on Left Jawline) */}
        <g transform="translate(54, 98)">
          <rect x="0" y="0" width="34" height="18" rx="6" fill="#0d171c" stroke="#d6f66f" strokeWidth="1.5" />
          <circle cx="9" cy="9" r="4" fill="#d6f66f" />
          <line x1="17" y1="7" x2="28" y2="7" stroke="#7de0e2" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17" y1="11" x2="25" y2="11" stroke="#7de0e2" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </g>

      {/* Floating Audio Status Badge */}
      <g transform="translate(240, 75)">
        <rect width="135" height="28" rx="14" fill="#101e25" fillOpacity="0.9" stroke="#7de0e2" strokeWidth="1.2" />
        <circle cx="16" cy="14" r="4" fill="#7de0e2" />
        <text x="28" y="17.5" fill="#7de0e2" fontSize="9" fontWeight="700" letterSpacing="0.8" fontFamily="system-ui">
          INTERCOM: LOW LATENCY
        </text>
      </g>
    </svg>
  );
}

/** 3. Turn "Let's Go" into a Ride: Human rider leaning into mountain apex */
export function VectorMountainRide({ className }: VectorArtProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial vector illustration of human rider leaning through a canyon hairpin"
    >
      <defs>
        <linearGradient id="mr-sky" x1="0" y1="0" x2="0" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a1c29" />
          <stop offset="0.4" stopColor="#2c2433" />
          <stop offset="0.75" stopColor="#ff8a68" />
          <stop offset="1" stopColor="#ffb088" />
        </linearGradient>
        <linearGradient id="mr-asphalt" x1="0" y1="130" x2="400" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#182329" />
          <stop offset="1" stopColor="#0c1216" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" rx="16" fill="url(#mr-sky)" />
      {/* Sun glow */}
      <circle cx="310" cy="115" r="42" fill="#ffe28a" fillOpacity="0.85" />

      {/* Canyon Cliffs */}
      <polygon points="0,175 80,105 160,175" fill="#1b1722" />
      <polygon points="120,175 220,80 320,175" fill="#201a28" opacity="0.9" />
      <polygon points="270,175 350,118 400,165 400,250 0,250" fill="#261d2d" opacity="0.8" />

      {/* Sweeping Mountain Hairpin Road */}
      <path
        d="M -30 250 C 130 240, 160 185, 110 162 C 60 142, 170 120, 420 135 L 420 250 Z"
        fill="url(#mr-asphalt)"
      />
      {/* Luminous Waypoint Trail */}
      <path
        d="M 0 245 C 130 235, 145 190, 112 168 C 80 150, 180 128, 400 138"
        stroke="#7de0e2"
        strokeWidth="3.5"
        strokeDasharray="12 10"
        fill="none"
      />

      {/* HUMAN RIDER LEANING DEEPLY INTO THE APEX (45° Lean Angle) */}
      <g transform="translate(180, 145) rotate(-22)">
        {/* Motorcycle Body & Wheels */}
        <circle cx="-42" cy="28" r="20" fill="#0d1417" stroke="#374d5c" strokeWidth="5" />
        <circle cx="-42" cy="28" r="10" fill="#ff8a68" />
        <circle cx="48" cy="28" r="20" fill="#0d1417" stroke="#374d5c" strokeWidth="5" />
        <circle cx="48" cy="28" r="10" fill="#ff8a68" />

        {/* Chassis, Fairing & Exhaust */}
        <path d="M -38 24 L -10 6 L 26 6 L 44 24 Z" fill="#1b2a32" />
        <polygon points="-8,4 28,4 35,16 -14,16" fill="#ff6b4a" />
        <line x1="-30" y1="28" x2="-2" y2="28" stroke="#93a7b0" strokeWidth="4" strokeLinecap="round" />

        {/* Human Rider Form: Hanging off inside the curve */}
        {/* Outside Leg on tank */}
        <path d="M -15 16 L 4 -2 L 18 16" stroke="#121e25" strokeWidth="7" strokeLinecap="round" fill="none" />
        {/* Inside Leg with Knee Slider touching tarmac */}
        <path d="M 6 12 L 24 24 L 32 38" stroke="#121e25" strokeWidth="6.5" strokeLinecap="round" fill="none" />
        <circle cx="32" cy="38" r="4.5" fill="#d6f66f" /> {/* Knee puck */}

        {/* Torso: Leaning lower than the bike */}
        <path d="M -8 8 L 8 -16 L 24 2 Z" fill="#1a2b34" stroke="#ff8a68" strokeWidth="1.5" />

        {/* Arms gripping clip-on handlebars */}
        <path d="M 6 -12 L 28 -2" stroke="#263b47" strokeWidth="5.5" strokeLinecap="round" />

        {/* Helmet: Looking forward toward corner exit */}
        <ellipse cx="14" cy="-26" rx="12" ry="13" fill="#101e25" stroke="#7de0e2" strokeWidth="1.5" />
        <path d="M 12 -28 Q 24 -28 26 -20 Q 18 -18 12 -28 Z" fill="#7de0e2" />
      </g>

      {/* Floating GPS Waypoint Beacon */}
      <g transform="translate(295, 62)">
        <ellipse cx="14" cy="36" rx="10" ry="4" fill="#000000" fillOpacity="0.3" />
        <path d="M 14 0 C 6 0, 0 6, 0 14 C 0 24, 14 36, 14 36 C 14 36, 28 24, 28 14 C 28 6, 22 0, 14 0 Z" fill="#d6f66f" />
        <circle cx="14" cy="14" r="5" fill="#101e25" />
      </g>
    </svg>
  );
}

/** 4. AI Co-Rider Navigator: Rider planning with holographic route vector map */
export function VectorAiNavigator({ className }: VectorArtProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial vector illustration of human rider planning a route with AI telemetry HUD"
    >
      <defs>
        <linearGradient id="ai-bg" x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0a1a20" />
          <stop offset="0.6" stopColor="#102730" />
          <stop offset="1" stopColor="#183a47" />
        </linearGradient>
        <radialGradient id="ai-holo" cx="200" cy="120" r="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7de0e2" stopOpacity="0.3" />
          <stop offset="0.7" stopColor="#7de0e2" stopOpacity="0.05" />
          <stop offset="1" stopColor="#7de0e2" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="250" rx="16" fill="url(#ai-bg)" />
      <circle cx="200" cy="120" r="130" fill="url(#ai-holo)" />

      {/* 3D Wireframe Perspective Elevation Grid */}
      <g opacity="0.35">
        <line x1="40" y1="190" x2="360" y2="190" stroke="#7de0e2" strokeWidth="1" />
        <line x1="20" y1="215" x2="380" y2="215" stroke="#7de0e2" strokeWidth="1.5" />
        <line x1="100" y1="165" x2="60" y2="240" stroke="#7de0e2" strokeWidth="1" />
        <line x1="160" y1="165" x2="130" y2="240" stroke="#7de0e2" strokeWidth="1" />
        <line x1="240" y1="165" x2="270" y2="240" stroke="#7de0e2" strokeWidth="1" />
        <line x1="300" y1="165" x2="340" y2="240" stroke="#7de0e2" strokeWidth="1" />
      </g>

      {/* HUMAN RIDER SEATED ON BIKE COCKPIT REVIEWING ROUTE */}
      <g transform="translate(60, 60)">
        {/* Bike Handlebars & Cockpit Console */}
        <path d="M 20 135 L 75 110 L 130 135" stroke="#354955" strokeWidth="5" strokeLinecap="round" fill="none" />
        <rect x="62" y="100" width="26" height="18" rx="3" fill="#0d171c" stroke="#7de0e2" strokeWidth="1.5" />
        <line x1="68" y1="108" x2="82" y2="108" stroke="#d6f66f" strokeWidth="2" strokeLinecap="round" />

        {/* Human Hands in Gauntlet Gloves on Bars */}
        <ellipse cx="22" cy="135" rx="7" ry="6" fill="#1b2a32" stroke="#7de0e2" strokeWidth="1" />
        <ellipse cx="128" cy="135" rx="7" ry="6" fill="#1b2a32" stroke="#7de0e2" strokeWidth="1" />

        {/* Rider Torso & Arms */}
        <path d="M 22 135 L 50 85 M 128 135 L 100 85" stroke="#21323c" strokeWidth="8" strokeLinecap="round" />
        <path d="M 45 65 L 105 65 L 115 140 L 35 140 Z" fill="#182730" stroke="#314957" strokeWidth="1.5" />
        <path d="M 75 65 L 75 140" stroke="#ff8a68" strokeWidth="2" />

        {/* Helmet: Tilted Downward Studying Hologram */}
        <ellipse cx="75" cy="40" rx="17" ry="19" fill="#101e25" stroke="#7de0e2" strokeWidth="2" />
        <path d="M 63 42 Q 75 48 87 42 Q 85 54 75 56 Q 65 54 63 42 Z" fill="#7de0e2" fillOpacity="0.8" />
      </g>

      {/* FLOATING 3D HOLOGRAPHIC ROUTE PROJECTION (AI NAVIGATOR) */}
      <g transform="translate(205, 50)">
        {/* Elevation 3D Contour Wireframe */}
        <path
          d="M 10 95 C 40 40, 80 120, 120 65 C 145 35, 170 70, 185 50"
          stroke="#7de0e2"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 10 115 C 40 60, 80 140, 120 85 C 145 55, 170 90, 185 70"
          stroke="#d6f66f"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          fill="none"
          opacity="0.7"
        />

        {/* Route Nodes */}
        <circle cx="10" cy="95" r="5" fill="#ff8a68" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="65" cy="72" r="5" fill="#d6f66f" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="120" cy="65" r="6" fill="#7de0e2" stroke="#ffffff" strokeWidth="2" />
        <circle cx="185" cy="50" r="5" fill="#ff8a68" stroke="#ffffff" strokeWidth="1.5" />

        {/* AI Waypoint Telemetry Card */}
        <g transform="translate(60, 15)">
          <rect width="105" height="34" rx="8" fill="#101e25" fillOpacity="0.92" stroke="#d6f66f" strokeWidth="1.2" />
          <text x="10" y="15" fill="#d6f66f" fontSize="8" fontWeight="800" fontFamily="system-ui">
            AI OPTIMIZED: 142 MI
          </text>
          <text x="10" y="27" fill="#93a7b0" fontSize="8" fontWeight="600" fontFamily="system-ui">
            Curves: 94 · Clear Weather
          </text>
        </g>
      </g>
    </svg>
  );
}

/** 5. Pack Radar: Cockpit POV with riders ahead in echelon formation */
export function VectorPackRadar({ className }: VectorArtProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial vector illustration of rider cockpit POV with pack riders ahead in formation"
    >
      <defs>
        <linearGradient id="pr-bg" x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0b171a" />
          <stop offset="0.6" stopColor="#10252b" />
          <stop offset="1" stopColor="#18363e" />
        </linearGradient>
        <radialGradient id="pr-radar" cx="200" cy="90" r="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d6f66f" stopOpacity="0.25" />
          <stop offset="0.7" stopColor="#7de0e2" stopOpacity="0.05" />
          <stop offset="1" stopColor="#7de0e2" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="250" rx="16" fill="url(#pr-bg)" />
      <circle cx="200" cy="90" r="110" fill="url(#pr-radar)" />

      {/* Open Highway Vanishing Point Horizon */}
      <path d="M 0 145 L 180 85 L 220 85 L 400 145 L 400 250 L 0 250 Z" fill="#121e25" />
      <line x1="200" y1="85" x2="200" y2="185" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="14 12" />

      {/* Holographic Radar Concentric Arcs */}
      <ellipse cx="200" cy="85" rx="120" ry="45" stroke="#7de0e2" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="6 6" fill="none" />
      <ellipse cx="200" cy="85" rx="80" ry="30" stroke="#d6f66f" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="6 6" fill="none" />

      {/* PACK RIDER 1 AHEAD (Lead Road Captain in Center) */}
      <g transform="translate(188, 55)">
        {/* Tail light & Tire */}
        <ellipse cx="12" cy="24" rx="4" ry="7" fill="#090f12" />
        <rect x="9" y="16" width="6" height="3" rx="1" fill="#ff4d4d" />
        {/* Rider Back Silhouette */}
        <path d="M 4 8 L 20 8 L 18 20 L 6 20 Z" fill="#1b2a32" />
        <ellipse cx="12" cy="4" rx="5" ry="5.5" fill="#101e25" stroke="#d6f66f" strokeWidth="1" />
        {/* Radar Telemetry Tag */}
        <rect x="-14" y="-12" width="52" height="13" rx="3" fill="#101e25" stroke="#d6f66f" strokeWidth="0.8" />
        <text x="12" y="-3" textAnchor="middle" fill="#d6f66f" fontSize="7" fontWeight="700" fontFamily="system-ui">
          CAPTAIN · +85M
        </text>
      </g>

      {/* PACK RIDER 2 AHEAD (Right Wingman in Staggered Formation) */}
      <g transform="translate(245, 70)">
        <ellipse cx="12" cy="28" rx="5" ry="8" fill="#090f12" />
        <rect x="9" y="18" width="6" height="3" rx="1" fill="#ff4d4d" />
        <path d="M 3 10 L 21 10 L 19 23 L 5 23 Z" fill="#20333d" />
        <ellipse cx="12" cy="5" rx="5.5" ry="6" fill="#101e25" stroke="#7de0e2" strokeWidth="1" />
        <rect x="-10" y="-12" width="46" height="13" rx="3" fill="#101e25" stroke="#7de0e2" strokeWidth="0.8" />
        <text x="13" y="-3" textAnchor="middle" fill="#7de0e2" fontSize="7" fontWeight="700" fontFamily="system-ui">
          LEO · +42M
        </text>
      </g>

      {/* COCKPIT FOREGROUND (Rider's Hands & Clip-on Handlebars) */}
      <g transform="translate(0, 160)">
        {/* Left Clip-on & Glove */}
        <path d="M 0 65 L 110 25" stroke="#2e424e" strokeWidth="10" strokeLinecap="round" />
        <circle cx="110" cy="25" r="14" fill="#16252d" stroke="#7de0e2" strokeWidth="1.5" />
        {/* Right Clip-on & Glove */}
        <path d="M 400 65 L 290 25" stroke="#2e424e" strokeWidth="10" strokeLinecap="round" />
        <circle cx="290" cy="25" r="14" fill="#16252d" stroke="#7de0e2" strokeWidth="1.5" />

        {/* Digital Cockpit Screen */}
        <rect x="145" y="10" width="110" height="42" rx="8" fill="#0d171c" stroke="#7de0e2" strokeWidth="1.5" />
        <text x="200" y="32" textAnchor="middle" fill="#d6f66f" fontSize="18" fontWeight="900" fontFamily="monospace">
          68 <tspan fontSize="10">MPH</tspan>
        </text>
        <text x="200" y="44" textAnchor="middle" fill="#7de0e2" fontSize="7" fontWeight="700" fontFamily="system-ui">
          PACK FORMATION DELTA LOCKED
        </text>
      </g>
    </svg>
  );
}

/** 6. Keep Shared Expenses Simple: Two riders settling fuel bill with phone tap */
export function VectorFuelSplit({ className }: VectorArtProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial vector illustration of two riders settling fuel expenses at a road stop"
    >
      <defs>
        <linearGradient id="fs-bg" x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a1412" />
          <stop offset="0.6" stopColor="#291c18" />
          <stop offset="1" stopColor="#3d261e" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" rx="16" fill="url(#fs-bg)" />

      {/* Modern Roadside Fuel Station Canopy Silhouette */}
      <path d="M 30 50 L 370 50 L 370 65 L 30 65 Z" fill="#241a16" />
      <line x1="70" y1="65" x2="70" y2="210" stroke="#241a16" strokeWidth="6" />
      <line x1="330" y1="65" x2="330" y2="210" stroke="#241a16" strokeWidth="6" />

      {/* Fuel Pump Console in Background */}
      <rect x="75" y="105" width="45" height="105" rx="6" fill="#1b1310" stroke="#ff8a68" strokeWidth="1.5" />
      <rect x="83" y="118" width="29" height="22" rx="3" fill="#0a0706" />
      <text x="97" y="132" textAnchor="middle" fill="#d6f66f" fontSize="9" fontWeight="800" fontFamily="monospace">
        $48.50
      </text>

      {/* RIDER 1 (Left: Extending phone with NFC payment) */}
      <g transform="translate(130, 80)">
        {/* Legs / Boots */}
        <path d="M 16 95 L 14 148 M 34 95 L 36 148" stroke="#161e24" strokeWidth="5.5" strokeLinecap="round" />
        {/* Torso / Riding Jacket */}
        <path d="M 10 38 L 40 38 L 44 95 L 6 95 Z" fill="#1e2c34" stroke="#ff8a68" strokeWidth="1.2" />
        {/* Arm extending forward holding phone */}
        <path d="M 38 45 L 62 65" stroke="#2a3d47" strokeWidth="5.5" strokeLinecap="round" />
        {/* Smartphone with Glowing Settle Checkmark */}
        <rect x="62" y="58" width="12" height="20" rx="3" fill="#0d181e" stroke="#d6f66f" strokeWidth="1.2" transform="rotate(15 68 68)" />
        <circle cx="68" cy="68" r="4" fill="#d6f66f" />
        {/* Head with Beanie/Cap looking across */}
        <ellipse cx="25" cy="22" rx="8" ry="9.5" fill="#e0b89f" />
        <path d="M 17 14 C 19 8, 32 8, 33 16 C 30 20, 18 20, 17 14 Z" fill="#ff8a68" />
      </g>

      {/* RIDER 2 (Right: Tapping his phone to split 50/50) */}
      <g transform="translate(210, 80)">
        {/* Legs / Boots */}
        <path d="M 16 95 L 14 148 M 34 95 L 36 148" stroke="#161e24" strokeWidth="5.5" strokeLinecap="round" />
        {/* Torso */}
        <path d="M 10 38 L 40 38 L 44 95 L 6 95 Z" fill="#23343d" stroke="#7de0e2" strokeWidth="1.2" />
        {/* Arm extending forward holding phone */}
        <path d="M 12 45 L -12 65" stroke="#2b404b" strokeWidth="5.5" strokeLinecap="round" />
        <rect x="-18" y="58" width="12" height="20" rx="3" fill="#0d181e" stroke="#7de0e2" strokeWidth="1.2" transform="rotate(-15 -12 68)" />
        <circle cx="-12" cy="68" r="4" fill="#7de0e2" />
        {/* Head */}
        <ellipse cx="25" cy="22" rx="8" ry="9.5" fill="#deb498" />
        <path d="M 17 14 C 19 8, 32 8, 33 16 C 30 20, 18 20, 17 14 Z" fill="#1b2328" />
      </g>

      {/* Floating Instant Settle Hologram Card */}
      <g transform="translate(135, 20)">
        <rect width="130" height="30" rx="15" fill="#120c0a" fillOpacity="0.9" stroke="#d6f66f" strokeWidth="1.2" />
        <circle cx="18" cy="15" r="5" fill="#d6f66f" />
        <text x="30" y="19" fill="#d6f66f" fontSize="9" fontWeight="800" fontFamily="system-ui">
          SPLIT 50/50 · SETTLED
        </text>
      </g>
    </svg>
  );
}

/** 7. Create Club Identity: Back view of rider in customized club jacket looking at dawn */
export function VectorClubBadge({ className }: VectorArtProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial vector illustration of rider back view with custom club crest jacket"
    >
      <defs>
        <linearGradient id="cb-bg" x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14111f" />
          <stop offset="0.6" stopColor="#1d1630" />
          <stop offset="1" stopColor="#2c1e4a" />
        </linearGradient>
        <radialGradient id="cb-dawn" cx="200" cy="100" r="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff8a68" stopOpacity="0.35" />
          <stop offset="0.6" stopColor="#ff8a68" stopOpacity="0.08" />
          <stop offset="1" stopColor="#ff8a68" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="250" rx="16" fill="url(#cb-bg)" />
      <circle cx="200" cy="100" r="130" fill="url(#cb-dawn)" />

      {/* Mountain Pass Horizon at Dawn */}
      <path d="M 0 160 Q 120 140 200 150 Q 280 140 400 160 L 400 250 L 0 250 Z" fill="#130d1d" />

      {/* HUMAN RIDER BACK VIEW (CENTERED HERO) */}
      <g transform="translate(150, 75)">
        {/* Broad Shoulders & Heavy Armored Riding Leather */}
        <path
          d="M 10 50 C 30 42, 70 42, 90 50 L 84 145 C 65 148, 35 148, 16 145 Z"
          fill="#171e27"
          stroke="#2f3b4c"
          strokeWidth="1.8"
        />

        {/* Back Crest / Embroidered Modern Club Emblem */}
        <g transform="translate(50, 85)">
          {/* Outer Shield */}
          <path
            d="M 0 -22 L 24 -10 L 24 10 C 24 24, 0 34, 0 34 C 0 34, -24 24, -24 10 L -24 -10 Z"
            fill="#0f141a"
            stroke="#ffc107"
            strokeWidth="2"
          />
          {/* Twin Wing Geometric Piston */}
          <path d="M -12 -5 L 0 -14 L 12 -5 L 8 12 L -8 12 Z" fill="#7de0e2" />
          <circle cx="0" cy="-2" r="4.5" fill="#0f141a" stroke="#d6f66f" strokeWidth="1.5" />
          {/* Club Rocker Banner */}
          <path d="M -28 32 L 28 32 L 22 42 L -22 42 Z" fill="#ff6b4a" />
          <text x="0" y="39" textAnchor="middle" fill="#ffffff" fontSize="5.5" fontWeight="900" letterSpacing="0.8" fontFamily="system-ui">
            APEX PACK NO. 1
          </text>
        </g>

        {/* Helmet / Back of Head looking into the sunrise */}
        <ellipse cx="50" cy="22" rx="14" ry="16" fill="#0e171e" stroke="#7de0e2" strokeWidth="1.5" />
        <path d="M 38 18 Q 50 14 62 18" stroke="#ff8a68" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Floating Badge Verification Pill */}
      <g transform="translate(140, 20)">
        <rect width="120" height="26" rx="13" fill="#150f21" fillOpacity="0.9" stroke="#ffc107" strokeWidth="1" />
        <circle cx="16" cy="13" r="4" fill="#ffc107" />
        <text x="26" y="16.5" fill="#ffc107" fontSize="8" fontWeight="800" letterSpacing="0.8" fontFamily="system-ui">
          VERIFIED CLUB CHAPTER
        </text>
      </g>
    </svg>
  );
}

/** 8. Pack Hazard & Safety Pings: Rider giving the classic hand-down warning signal */
export function VectorSafetyPing({ className }: VectorArtProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial vector illustration of human rider giving the hand-down hazard warning signal"
    >
      <defs>
        <linearGradient id="sp-bg" x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a0f0f" />
          <stop offset="0.6" stopColor="#291414" />
          <stop offset="1" stopColor="#3d1b1b" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" rx="16" fill="url(#sp-bg)" />

      {/* Highway Pavement */}
      <path d="M 0 160 L 400 160 L 400 250 L 0 250 Z" fill="#140f10" />
      <line x1="20" y1="205" x2="380" y2="205" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" strokeDasharray="14 12" />

      {/* ROAD HAZARD AHEAD (Gravel / Debris Pin) */}
      <g transform="translate(290, 140)">
        {/* Pulsing Caution Rings */}
        <circle cx="20" cy="20" r="30" stroke="#ff8a68" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="20" cy="20" r="48" stroke="#d6f66f" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="6 6" />
        {/* Hazard Warning Diamond */}
        <polygon points="20,2 38,20 20,38 2,20" fill="#ffd166" stroke="#140f10" strokeWidth="2" />
        <text x="20" y="26" textAnchor="middle" fill="#140f10" fontSize="18" fontWeight="900" fontFamily="system-ui">
          !
        </text>
      </g>

      {/* RIDER ON MOTORCYCLE GIVING CLASSIC HAND-DOWN SIGNAL */}
      <g transform="translate(100, 75)">
        {/* Motorcycle Wheels & Frame */}
        <circle cx="30" cy="95" r="18" fill="#0d1417" stroke="#37474f" strokeWidth="4" />
        <circle cx="105" cy="95" r="18" fill="#0d1417" stroke="#37474f" strokeWidth="4" />
        <path d="M 30 95 L 60 70 L 95 70 L 105 95" stroke="#25353d" strokeWidth="4" fill="none" />
        <polygon points="45,62 85,62 78,74 40,74" fill="#ff8a68" />

        {/* Rider Body */}
        <path d="M 40 50 L 72 50 L 68 95 L 36 95 Z" fill="#1e2c34" stroke="#2c3e4a" strokeWidth="1.5" />
        {/* Right Hand on Throttle */}
        <path d="M 68 55 L 92 68" stroke="#2c3e4a" strokeWidth="5.5" strokeLinecap="round" />

        {/* LEFT HAND EXTENDED LOW AND OUT (International Biker Hazard Signal) */}
        <path d="M 44 55 L 20 85 L 10 115" stroke="#ff8a68" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Gauntlet Glove Pointing Downward */}
        <circle cx="10" cy="115" r="4.5" fill="#d6f66f" />

        {/* Helmet: Looking Ahead */}
        <ellipse cx="56" cy="30" rx="12" ry="13" fill="#101e25" stroke="#ff8a68" strokeWidth="1.5" />
        <path d="M 54 28 Q 66 28 68 36 Q 58 38 54 28 Z" fill="#7de0e2" />
      </g>

      {/* Alert Status Pill */}
      <g transform="translate(130, 20)">
        <rect width="140" height="26" rx="13" fill="#1c0b0b" fillOpacity="0.9" stroke="#ff8a68" strokeWidth="1.2" />
        <circle cx="16" cy="13" r="4" fill="#ff8a68" />
        <text x="26" y="16.5" fill="#ff8a68" fontSize="8" fontWeight="800" letterSpacing="0.8" fontFamily="system-ui">
          HAZARD PINNED · SPEED ADJUSTED
        </text>
      </g>
    </svg>
  );
}
