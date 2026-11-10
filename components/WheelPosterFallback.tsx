'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Photorealistic Fallback & Poster Component
 * Renders instantly on the very first frame with 0 ms delay.
 * Includes interactive mouse-driven 3D parallax tilt,
 * realistic brushed rim, cross-drilled rotor, and dual-tone studio rim lighting.
 */
export function WheelPosterFallback() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: -y * 14, y: x * 14 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      {/* Layered Volumetric Rim Lights */}
      {/* Top-Left Electric Blue Rim Glow */}
      <div className="absolute -top-10 -left-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-radial from-electric-500/25 via-electric-500/5 to-transparent blur-3xl pointer-events-none" />
      {/* Bottom-Right Warm Ember Pavement Reflection */}
      <div className="absolute -bottom-10 -right-10 w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-radial from-ember-500/20 via-ember-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* 3D Parallax Container */}
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 160 }}
        className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] flex items-center justify-center"
      >
        {/* SVG High-Fidelity Wheel */}
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
          aria-label="MotoSync High-Performance Motorcycle Wheel"
        >
          <defs>
            {/* Dark Alloy Rim Gradient */}
            <linearGradient id="alloyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E2738" />
              <stop offset="30%" stopColor="#121824" />
              <stop offset="70%" stopColor="#0B0F17" />
              <stop offset="100%" stopColor="#1A2232" />
            </linearGradient>

            {/* Drilled Rotor Stainless Steel Gradient */}
            <radialGradient id="rotorGrad" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="#8A98AB" />
              <stop offset="75%" stopColor="#B4C2D6" />
              <stop offset="88%" stopColor="#5E6B7C" />
              <stop offset="100%" stopColor="#2A3444" />
            </radialGradient>

            {/* Blue Rim Specular Highlight */}
            <linearGradient id="electricRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B1FB" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0284C7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>

            {/* Ember Lower Highlight */}
            <linearGradient id="emberRimGrad" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FF6A3D" stopOpacity="0.7" />
              <stop offset="40%" stopColor="#FF6A3D" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Tire Rubber Tread Pattern */}
            <pattern id="treadPattern" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="20" height="20" fill="#06080D" />
              <line x1="0" y1="0" x2="20" y2="0" stroke="#121722" strokeWidth="4" />
              <line x1="0" y1="10" x2="20" y2="10" stroke="#000000" strokeWidth="2" />
            </pattern>
          </defs>

          {/* 1. Outer Heavy Rubber Tire Ring */}
          <circle cx="250" cy="250" r="236" fill="#06080D" stroke="#161D2B" strokeWidth="2" />
          <circle cx="250" cy="250" r="226" fill="url(#treadPattern)" opacity="0.65" />
          <circle cx="250" cy="250" r="206" fill="none" stroke="#0D111A" strokeWidth="6" />

          {/* Directional Tire Tread Siping */}
          {[...Array(24)].map((_, i) => {
            const angle = (i * 360) / 24
            return (
              <line
                key={i}
                x1="250"
                y1="22"
                x2="250"
                y2="42"
                stroke="#1B2333"
                strokeWidth="2.5"
                strokeLinecap="round"
                transform={`rotate(${angle} 250 250)`}
                opacity="0.8"
              />
            )
          })}

          {/* 2. Deep Machined Alloy Rim Barrel */}
          <circle cx="250" cy="250" r="195" fill="url(#alloyGrad)" stroke="#222C3D" strokeWidth="3" />
          {/* Outer Electric Blue Rim Stroke */}
          <circle cx="250" cy="250" r="192" fill="none" stroke="url(#electricRimGrad)" strokeWidth="3.5" />
          {/* Inner Ember Reflection Stroke */}
          <circle cx="250" cy="250" r="188" fill="none" stroke="url(#emberRimGrad)" strokeWidth="2" opacity="0.8" />

          {/* 3. Cross-Drilled Ventilated Rotor Ring */}
          <g>
            <circle cx="250" cy="250" r="142" fill="url(#rotorGrad)" stroke="#1A2230" strokeWidth="2" />
            <circle cx="250" cy="250" r="82" fill="#0A0E17" stroke="#222D3E" strokeWidth="3" />

            {/* Drilled Holes Rows */}
            {[...Array(32)].map((_, i) => {
              const angle = (i * 360) / 32
              return (
                <g key={i} transform={`rotate(${angle} 250 250)`}>
                  <circle cx="250" cy="116" r="2.2" fill="#0A0E17" opacity="0.9" />
                  <circle cx="250" cy="126" r="2.8" fill="#0A0E17" opacity="0.95" />
                  <circle cx="250" cy="136" r="2.2" fill="#0A0E17" opacity="0.9" />
                </g>
              )
            })}
          </g>

          {/* 4. Sculpted 10 Machined Alloy Spokes */}
          {[...Array(10)].map((_, i) => {
            const angle = (i * 360) / 10
            return (
              <g key={i} transform={`rotate(${angle} 250 250)`}>
                {/* Main Turbine Spoke Blade */}
                <path
                  d="M 245 78 L 255 78 L 253 188 L 247 188 Z"
                  fill="url(#alloyGrad)"
                  stroke="#29364A"
                  strokeWidth="1.5"
                />
                {/* Specular Bevel Ridge */}
                <line x1="250" y1="80" x2="250" y2="186" stroke="#3E4E68" strokeWidth="1" />
              </g>
            )
          })}

          {/* 5. Center Hub with Machined Titanium Nut */}
          <circle cx="250" cy="250" r="62" fill="#111622" stroke="#232E40" strokeWidth="3" />
          <circle cx="250" cy="250" r="48" fill="#171F2D" />
          {/* Hex Spindle Nut */}
          <polygon
            points="250,224 272,237 272,263 250,276 228,263 228,237"
            fill="#1E2838"
            stroke="#10B1FB"
            strokeWidth="2.5"
          />
          <circle cx="250" cy="250" r="14" fill="#06090F" stroke="#10B1FB" strokeWidth="1.5" />

          {/* 6. Dark Anodized Racing Caliper (Clean unbranded MotoSync hardware) */}
          <g transform="translate(330, 140) rotate(22)">
            {/* Caliper Body */}
            <rect
              x="-22"
              y="-42"
              width="44"
              height="84"
              rx="9"
              fill="#121722"
              stroke="#2B374B"
              strokeWidth="2.5"
            />
            {/* Caliper Highlight Edge */}
            <rect
              x="-18"
              y="-38"
              width="36"
              height="76"
              rx="6"
              fill="none"
              stroke="#10B1FB"
              strokeWidth="1.2"
              opacity="0.4"
            />
            {/* Piston Caps */}
            <circle cx="0" cy="-18" r="9" fill="#1C2333" stroke="#2F3B50" strokeWidth="1.5" />
            <circle cx="0" cy="18" r="9" fill="#1C2333" stroke="#2F3B50" strokeWidth="1.5" />
            {/* MotoSync Monogram */}
            <text
              x="0"
              y="3"
              fill="#10B1FB"
              fontSize="8"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="bold"
              textAnchor="middle"
              letterSpacing="1"
            >
              MOTOSYNC
            </text>
          </g>
        </svg>

        {/* Dynamic Specular Sheen across wheel */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
      </motion.div>

      {/* Floor Contact Shadow and Reflection */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-radial from-black/80 via-black/40 to-transparent blur-xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-gradient-radial from-electric-500/15 via-ember-500/10 to-transparent blur-lg pointer-events-none" />
    </div>
  )
}
