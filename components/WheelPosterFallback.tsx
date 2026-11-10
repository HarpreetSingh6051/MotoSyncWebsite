'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Monochrome Studio Fallback & Poster Component
 * Minimalist brushed titanium, stainless steel rotor, and matte charcoal tire.
 * 0ms instantaneous paint on first frame.
 */
export function WheelPosterFallback() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: -y * 12, y: x * 12 })
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
      {/* Subtle Studio Ambient Halos */}
      <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-radial from-black/[0.04] to-transparent blur-3xl pointer-events-none" />

      {/* 3D Parallax Container */}
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 160 }}
        className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] flex items-center justify-center"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
          aria-label="MotoSync High-Performance Motorcycle Wheel"
        >
          <defs>
            {/* Brushed Titanium Rim Gradient */}
            <linearGradient id="titaniumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8A93A0" />
              <stop offset="25%" stopColor="#4A5260" />
              <stop offset="60%" stopColor="#2D333E" />
              <stop offset="100%" stopColor="#6C7685" />
            </linearGradient>

            {/* Drilled Stainless Steel Rotor */}
            <radialGradient id="rotorSteelGrad" cx="50%" cy="50%" r="50%">
              <stop offset="55%" stopColor="#E2E8F0" />
              <stop offset="72%" stopColor="#CBD5E1" />
              <stop offset="88%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#475569" />
            </radialGradient>

            {/* Clean Specular Chrome Rim Highlight */}
            <linearGradient id="chromeHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#CBD5E1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1E293B" stopOpacity="0.1" />
            </linearGradient>

            {/* Tire Rubber Tread Pattern */}
            <pattern id="monoTreadPattern" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="20" height="20" fill="#181A20" />
              <line x1="0" y1="0" x2="20" y2="0" stroke="#252832" strokeWidth="4" />
              <line x1="0" y1="10" x2="20" y2="10" stroke="#0E0F14" strokeWidth="2" />
            </pattern>
          </defs>

          {/* 1. Heavy Rubber Tire Outer Ring */}
          <circle cx="250" cy="250" r="236" fill="#181A20" stroke="#2D323E" strokeWidth="2" />
          <circle cx="250" cy="250" r="226" fill="url(#monoTreadPattern)" opacity="0.8" />
          <circle cx="250" cy="250" r="206" fill="none" stroke="#121419" strokeWidth="6" />

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
                stroke="#323846"
                strokeWidth="2.5"
                strokeLinecap="round"
                transform={`rotate(${angle} 250 250)`}
              />
            )
          })}

          {/* 2. Brushed Titanium Rim Barrel */}
          <circle cx="250" cy="250" r="195" fill="url(#titaniumGrad)" stroke="#475569" strokeWidth="3" />
          <circle cx="250" cy="250" r="192" fill="none" stroke="url(#chromeHighlight)" strokeWidth="3.5" />

          {/* 3. Cross-Drilled Ventilated Rotor Ring */}
          <g>
            <circle cx="250" cy="250" r="142" fill="url(#rotorSteelGrad)" stroke="#334155" strokeWidth="2" />
            <circle cx="250" cy="250" r="82" fill="#1E293B" stroke="#475569" strokeWidth="3" />

            {/* Drilled Holes Rows */}
            {[...Array(32)].map((_, i) => {
              const angle = (i * 360) / 32
              return (
                <g key={i} transform={`rotate(${angle} 250 250)`}>
                  <circle cx="250" cy="116" r="2.2" fill="#181A20" opacity="0.9" />
                  <circle cx="250" cy="126" r="2.8" fill="#181A20" opacity="0.95" />
                  <circle cx="250" cy="136" r="2.2" fill="#181A20" opacity="0.9" />
                </g>
              )
            })}
          </g>

          {/* 4. Sculpted 10 Machined Alloy Spokes */}
          {[...Array(10)].map((_, i) => {
            const angle = (i * 360) / 10
            return (
              <g key={i} transform={`rotate(${angle} 250 250)`}>
                <path
                  d="M 245 78 L 255 78 L 253 188 L 247 188 Z"
                  fill="url(#titaniumGrad)"
                  stroke="#475569"
                  strokeWidth="1.5"
                />
                <line x1="250" y1="80" x2="250" y2="186" stroke="#94A3B8" strokeWidth="1" />
              </g>
            )
          })}

          {/* 5. Center Hub with Machined Nut */}
          <circle cx="250" cy="250" r="62" fill="#252A34" stroke="#475569" strokeWidth="3" />
          <circle cx="250" cy="250" r="48" fill="#1C212A" />
          <polygon
            points="250,224 272,237 272,263 250,276 228,263 228,237"
            fill="#334155"
            stroke="#CBD5E1"
            strokeWidth="2.5"
          />
          <circle cx="250" cy="250" r="14" fill="#090A0F" stroke="#94A3B8" strokeWidth="1.5" />

          {/* 6. Satin Black Racing Caliper (Unbranded / Clean MotoSync Monogram) */}
          <g transform="translate(330, 140) rotate(22)">
            <rect
              x="-22"
              y="-42"
              width="44"
              height="84"
              rx="9"
              fill="#181C24"
              stroke="#475569"
              strokeWidth="2.5"
            />
            <rect
              x="-18"
              y="-38"
              width="36"
              height="76"
              rx="6"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="1.2"
              opacity="0.4"
            />
            <circle cx="0" cy="-18" r="9" fill="#282E3B" stroke="#475569" strokeWidth="1.5" />
            <circle cx="0" cy="18" r="9" fill="#282E3B" stroke="#475569" strokeWidth="1.5" />
            <text
              x="0"
              y="3"
              fill="#E2E8F0"
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

        {/* Specular sheen */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
      </motion.div>

      {/* Realistic Floor Studio Shadow */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-radial from-black/25 via-black/10 to-transparent blur-xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-gradient-radial from-black/15 to-transparent blur-lg pointer-events-none" />
    </div>
  )
}
