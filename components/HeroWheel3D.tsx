'use client'

import { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// High-Performance Animated Fallback (Always renders immediately, 100% visible on first frame)
export const WheelFallback = () => {
  return (
    <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px] flex items-center justify-center pointer-events-none select-none">
      {/* Specular Radial Halos */}
      <div className="absolute inset-0 bg-gradient-radial from-electric-500/20 via-neon-purple/10 to-transparent blur-3xl" />

      {/* Outer Rotating Tire Ring */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-[18px] border-[#0c0f14] shadow-[0_0_50px_rgba(16,177,251,0.25)] flex items-center justify-center animate-spin-slow">
        {/* Outer Electric Blue Neon Rim */}
        <div className="absolute inset-2 rounded-full border-2 border-electric-500 shadow-[0_0_15px_#10b1fb]" />

        {/* Inner Neon Purple Rim */}
        <div className="absolute inset-5 rounded-full border-2 border-neon-purple shadow-[0_0_15px_#8b5cf6]" />

        {/* Center Machined Hub */}
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#1a2332] to-[#090d14] border-4 border-electric-500/40 flex items-center justify-center shadow-inner">
          <div className="w-8 h-8 rounded-full bg-electric-500 shadow-[0_0_12px_#10b1fb] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-black" />
          </div>
        </div>

        {/* 10 Alloy Spokes */}
        {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg) => (
          <div
            key={deg}
            style={{ transform: `rotate(${deg}deg)` }}
            className="absolute top-1/2 left-1/2 w-full h-[3px] bg-gradient-to-r from-transparent via-[#2b394f] to-transparent -translate-x-1/2 -translate-y-1/2"
          />
        ))}

        {/* Perforated Brake Rotor Ring */}
        <div className="absolute inset-10 rounded-full border border-white/20 border-dashed opacity-60" />

        {/* Red Racing Caliper Accent */}
        <div className="absolute -top-3 right-10 w-9 h-14 rounded-lg bg-gradient-to-b from-neon-red to-neon-crimson shadow-[0_0_15px_#ef4444] border border-white/20 rotate-12 flex items-center justify-center">
          <span className="text-[7px] font-mono font-bold text-white tracking-widest -rotate-90">BREMBO</span>
        </div>
      </div>
    </div>
  )
}

// React Three Fiber 3D Wheel Component
const ThreeCanvas = dynamic(
  () =>
    import('./R3FWheelScene').then((mod) => mod.R3FWheelScene),
  {
    ssr: false,
    loading: () => <WheelFallback />,
  },
)

export const HeroWheel3D = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <WheelFallback />
  }

  return (
    <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[580px] flex items-center justify-center">
      <ThreeCanvas />
    </div>
  )
}
