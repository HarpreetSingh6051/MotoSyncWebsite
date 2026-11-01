import { useState, useEffect } from 'react'
import { Compass, Gauge, Shield, Users } from 'lucide-react'

interface RiderBlip {
  id: string
  name: string
  role: string
  x: number
  y: number
  color: string
  speed: number
}

const RIDERS: RiderBlip[] = [
  { id: '1', name: 'Arjun (Lead)', role: 'Road Captain', x: 50, y: 35, color: '#f59e0b', speed: 96 },
  { id: '2', name: 'Simran (Wing)', role: 'Reel Lead', x: 40, y: 50, color: '#06b6d4', speed: 94 },
  { id: '3', name: 'Kabir (Wing)', role: 'Navigator', x: 60, y: 50, color: '#10b981', speed: 95 },
  { id: '4', name: 'Zoya (Mid)', role: 'Pack Rider', x: 45, y: 65, color: '#a855f7', speed: 92 },
  { id: '5', name: 'Dev (Mid)', role: 'Pack Rider', x: 55, y: 65, color: '#ec4899', speed: 93 },
  { id: '6', name: 'Harpreet (Sweep)', role: 'Sweep / First Aid', x: 50, y: 80, color: '#f43f5e', speed: 90 },
]

export const LiveRadarWidget = () => {
  const [selectedRider, setSelectedRider] = useState<RiderBlip>(RIDERS[0])
  const [speed, setSpeed] = useState(94)

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(92 + Math.floor(Math.random() * 6))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            Live Pack Radar
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-white/50">
          <Users className="h-3.5 w-3.5 text-amber-400" />
          <span>6 Active Blips</span>
        </div>
      </div>

      {/* Radar Visual Display */}
      <div className="relative my-4 aspect-square max-h-[240px] w-full mx-auto flex items-center justify-center rounded-full border border-cyan-500/20 bg-ink-950/80 overflow-hidden shadow-inner shadow-cyan-950/40">
        {/* Concentric Range Rings */}
        <div className="absolute inset-4 rounded-full border border-cyan-500/15 border-dashed" />
        <div className="absolute inset-12 rounded-full border border-cyan-500/20" />
        <div className="absolute inset-20 rounded-full border border-cyan-500/25 border-dashed" />

        {/* Crosshair Lines */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-cyan-500/20 -translate-y-1/2" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-cyan-500/20 -translate-x-1/2" />

        {/* Sweeping Scanner Beam */}
        <div
          className="absolute inset-0 origin-center pointer-events-none"
          style={{
            animation: 'radar-sweep 4s linear infinite',
            background: 'conic-gradient(from 0deg at 50% 50%, rgba(6, 182, 212, 0.35) 0deg, transparent 60deg, transparent 360deg)',
          }}
        />

        {/* Rider Blips */}
        {RIDERS.map((r) => {
          const isSelected = selectedRider.id === r.id
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setSelectedRider(r)}
              style={{ left: `${r.x}%`, top: `${r.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group transition transform hover:scale-125 focus:outline-none"
              title={`${r.name} (${r.role})`}
            >
              <span
                className="block h-3 w-3 rounded-full shadow-lg transition"
                style={{
                  backgroundColor: r.color,
                  boxShadow: isSelected ? `0 0 12px ${r.color}` : `0 0 6px ${r.color}`,
                  transform: isSelected ? 'scale(1.4)' : 'scale(1)',
                }}
              />
              <span className="hidden group-hover:block absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black/90 px-2 py-0.5 text-[9px] font-mono text-white border border-white/20 z-20">
                {r.name}
              </span>
            </button>
          )
        })}

        {/* Center Pack Anchor (Own Bike) */}
        <div className="h-4 w-4 rounded-full bg-white ring-4 ring-cyan-500/30 flex items-center justify-center z-10 shadow-lg">
          <div className="h-1.5 w-1.5 rounded-full bg-ink-950" />
        </div>
      </div>

      {/* Selected Rider Telemetry HUD */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-xs">
        <div className="flex items-center justify-between text-white/80">
          <span className="font-semibold text-white">{selectedRider.name}</span>
          <span className="font-mono text-[11px] text-amber-400">{selectedRider.role}</span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 font-mono text-[10px] text-white/50 pt-2 border-t border-white/5">
          <div className="flex items-center gap-1">
            <Gauge className="h-3 w-3 text-cyan-400" />
            <span>{speed} km/h</span>
          </div>
          <div className="flex items-center gap-1">
            <Compass className="h-3 w-3 text-amber-400" />
            <span>312° NW</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="h-3 w-3 text-emerald-400" />
            <span>In Stagger</span>
          </div>
        </div>
      </div>
    </div>
  )
}
