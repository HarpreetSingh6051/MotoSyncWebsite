'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { WheelPosterFallback } from './WheelPosterFallback'

// React Three Fiber 3D Wheel Component with instant poster fallback
const ThreeCanvas = dynamic(
  () => import('./R3FWheelScene').then((mod) => mod.R3FWheelScene),
  {
    ssr: false,
    loading: () => <WheelPosterFallback />,
  },
)

export const HeroWheel3D = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <WheelPosterFallback />
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] flex items-center justify-center">
      <ThreeCanvas />
    </div>
  )
}
