import { useState } from 'react'
import { Coffee, Fuel, MapPin, Navigation, TrendingUp } from 'lucide-react'

const STOPS = [
  { id: '1', name: 'Clock Tower Plaza', type: 'Origin Point', time: '05:30 AM', icon: MapPin, color: 'text-electric-400' },
  { id: '2', name: 'Haveli Murthal', type: 'Dhaba Breakfast', time: '07:15 AM', icon: Coffee, color: 'text-neon-purple' },
  { id: '3', name: 'HP 95-Octane Oasis', type: 'Fuel & Paddock Sync', time: '09:00 AM', icon: Fuel, color: 'text-electric-300' },
  { id: '4', name: 'Golden Temple Plaza', type: 'Destination', time: '11:30 AM', icon: Navigation, color: 'text-neon-red' },
]

export const RoutePlannerWidget = () => {
  const [activeStop, setActiveStop] = useState(STOPS[1])

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Navigation className="h-4 w-4 text-electric-400" />
          <span className="font-mono text-xs font-bold tracking-wider text-electric-400 uppercase">
            [ROUTE_SYNCHRONIZER // NH-44]
          </span>
        </div>
        <span className="text-[11px] font-mono text-neon-purple font-semibold">214 km · Paved 4-Lane</span>
      </div>

      {/* High-Contrast Neon Elevation Chart */}
      <div className="my-3 rounded-2xl border border-white/10 bg-[#020306] p-3 shadow-inner">
        <div className="flex items-center justify-between text-[11px] font-mono text-white/60 mb-2">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-electric-400" />
            <span className="text-white font-semibold">Elevation Dynamics</span>
          </div>
          <span className="text-electric-400 font-bold">+420m Climb</span>
        </div>
        <div className="relative h-16 w-full">
          <svg viewBox="0 0 300 60" className="h-full w-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="neonElevationGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b1fb" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Gradient Filled Area */}
            <path
              d="M0 45 Q 40 42, 80 28 T 160 14 T 220 36 T 300 18 L 300 60 L 0 60 Z"
              fill="url(#neonElevationGrad)"
            />
            {/* Glowing Stroke Curve */}
            <path
              d="M0 45 Q 40 42, 80 28 T 160 14 T 220 36 T 300 18"
              fill="none"
              stroke="#10b1fb"
              strokeWidth="2.5"
            />
            {/* Interactive Checkpoint Nodes */}
            <circle cx="80" cy="28" r="4.5" fill="#8b5cf6" className="animate-pulse" />
            <circle cx="160" cy="14" r="4.5" fill="#10b1fb" />
            <circle cx="220" cy="36" r="4.5" fill="#ef4444" />
          </svg>
        </div>
      </div>

      {/* Synchronized Checkpoint Steps */}
      <div className="space-y-2">
        {STOPS.map((stop) => {
          const Icon = stop.icon
          const isSelected = activeStop.id === stop.id
          return (
            <button
              key={stop.id}
              type="button"
              onClick={() => setActiveStop(stop)}
              className={`w-full flex items-center justify-between rounded-xl border p-2 text-left text-xs transition duration-200 ${
                isSelected
                  ? 'border-electric-500/50 bg-electric-500/10 text-white shadow-md shadow-electric-500/10'
                  : 'border-white/5 bg-surface-900/60 text-white/60 hover:border-white/20 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5 truncate">
                <div className={`p-1.5 rounded-lg bg-black/60 border border-white/10 ${stop.color}`}>
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="truncate">
                  <p className="font-bold text-white truncate">{stop.name}</p>
                  <p className="text-[10px] text-white/40 font-mono">{stop.type}</p>
                </div>
              </div>
              <span className="font-mono text-[10px] text-electric-400 font-semibold shrink-0 ml-2">
                {stop.time}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
