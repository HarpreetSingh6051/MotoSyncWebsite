import { useState, useEffect } from 'react'
import { Activity, Compass, Gauge } from 'lucide-react'

interface RiderBlip {
  id: string
  name: string
  role: string
  x: number
  y: number
  color: string
  speed: number
  bike: string
}

const RIDERS: RiderBlip[] = [
  { id: '1', name: 'Arjun (Lead)', role: 'Road Captain', x: 50, y: 32, color: '#10b1fb', speed: 98, bike: 'Harley Fat Bob' },
  { id: '2', name: 'Simran (Wing)', role: 'Reel Lead', x: 38, y: 48, color: '#8b5cf6', speed: 96, bike: 'Himalayan 450' },
  { id: '3', name: 'Kabir (Wing)', role: 'Navigator', x: 62, y: 48, color: '#38bdf8', speed: 97, bike: 'Triumph Scrambler' },
  { id: '4', name: 'Zoya (Mid)', role: 'Pack Rider', x: 44, y: 64, color: '#ec4899', speed: 95, bike: 'KTM 390 Adv' },
  { id: '5', name: 'Dev (Mid)', role: 'Pack Rider', x: 56, y: 64, color: '#a855f7', speed: 95, bike: 'Ducati Scrambler' },
  { id: '6', name: 'Harpreet (Sweep)', role: 'Sweep / First Aid', x: 50, y: 82, color: '#ef4444', speed: 92, bike: 'Multistrada V4' },
]

export const LiveRadarWidget = () => {
  const [selectedRider, setSelectedRider] = useState<RiderBlip>(RIDERS[0])
  const [speed, setSpeed] = useState(98)
  const [pingMs, setPingMs] = useState(11)

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(95 + Math.floor(Math.random() * 7))
      setPingMs(9 + Math.floor(Math.random() * 5))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Technical Header (NVIDIA Style) */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-500" />
          </span>
          <span className="font-mono text-xs font-bold tracking-wider text-electric-400 uppercase">
            [RADAR // LIVE_GPS_MESH]
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-white/50">
          <span className="text-emerald-400 font-semibold">{pingMs}ms PTT</span>
          <span className="text-white/30">|</span>
          <span className="text-neon-purple font-semibold">6 IN PACK</span>
        </div>
      </div>

      {/* Center Radar Scanner Viewport */}
      <div className="relative my-4 aspect-square max-h-[250px] w-full mx-auto flex items-center justify-center rounded-full border border-electric-500/30 bg-[#020306] overflow-hidden shadow-2xl shadow-electric-500/10">
        {/* Distance Range Concentric Rings */}
        <div className="absolute inset-5 rounded-full border border-electric-500/15 border-dashed" />
        <div className="absolute inset-14 rounded-full border border-electric-500/25" />
        <div className="absolute inset-24 rounded-full border border-neon-purple/20 border-dashed" />

        {/* Industrial Crosshair Grids */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-electric-500/25 -translate-y-1/2" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-electric-500/25 -translate-x-1/2" />

        {/* Sweeping Radar Scan Line */}
        <div
          className="absolute inset-0 origin-center pointer-events-none"
          style={{
            animation: 'radar-sweep 3.5s linear infinite',
            background: 'conic-gradient(from 0deg at 50% 50%, rgba(16, 177, 251, 0.45) 0deg, rgba(139, 92, 246, 0.15) 45deg, transparent 90deg, transparent 360deg)',
          }}
        />

        {/* Rider Blips with Pulsing Halos */}
        {RIDERS.map((r) => {
          const isSelected = selectedRider.id === r.id
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setSelectedRider(r)}
              style={{ left: `${r.x}%`, top: `${r.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group transition transform hover:scale-125 focus:outline-none z-20"
              title={`${r.name} · ${r.bike}`}
            >
              <span
                className="block h-3.5 w-3.5 rounded-full shadow-lg transition"
                style={{
                  backgroundColor: r.color,
                  boxShadow: isSelected ? `0 0 16px ${r.color}, 0 0 30px ${r.color}` : `0 0 8px ${r.color}`,
                  transform: isSelected ? 'scale(1.45)' : 'scale(1)',
                }}
              />
              <span className="hidden group-hover:block absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black/95 px-2 py-0.5 text-[9px] font-mono text-white border border-electric-500/40 z-30 shadow-xl">
                {r.name} ({r.speed} km/h)
              </span>
            </button>
          )
        })}

        {/* Center Pack Anchor (User Anchor) */}
        <div className="h-5 w-5 rounded-full bg-white ring-4 ring-electric-500/50 flex items-center justify-center z-10 shadow-xl">
          <div className="h-2 w-2 rounded-full bg-black" />
        </div>
      </div>

      {/* High-Contrast Selected Rider Telemetry HUD */}
      <div className="rounded-2xl border border-electric-500/25 bg-surface-900/90 p-3 text-xs space-y-2">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: selectedRider.color }} />
            <span className="font-bold text-white tracking-wide">{selectedRider.name}</span>
            <span className="text-white/40 font-mono text-[10px]">({selectedRider.bike})</span>
          </div>
          <span className="font-mono text-[10px] text-electric-400 font-semibold px-2 py-0.5 rounded bg-electric-500/10 border border-electric-500/20">
            {selectedRider.role}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-white/60 pt-2 border-t border-white/10">
          <div className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5 text-electric-400" />
            <span className="text-white font-bold">{speed} km/h</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Compass className="h-3.5 w-3.5 text-neon-purple" />
            <span className="text-white">312° NW</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Activity className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Staggered</span>
          </div>
        </div>
      </div>
    </div>
  )
}
