import { useState } from 'react'
import { Coffee, Fuel, MapPin, Navigation, TrendingUp } from 'lucide-react'

const STOPS = [
  { id: '1', name: 'Clock Tower Plaza', type: 'Start Point', time: '05:30 AM', icon: MapPin, color: 'text-emerald-400' },
  { id: '2', name: 'Haveli Murthal', type: 'Dhaba Breakfast', time: '07:15 AM', icon: Coffee, color: 'text-amber-400' },
  { id: '3', name: 'HP Fuel Oasis (NH-44)', type: '95 Octane Refill', time: '09:00 AM', icon: Fuel, color: 'text-cyan-400' },
  { id: '4', name: 'Golden Temple Plaza', type: 'Final Destination', time: '11:30 AM', icon: Navigation, color: 'text-rose-400' },
]

export const RoutePlannerWidget = () => {
  const [activeStop, setActiveStop] = useState(STOPS[1])

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Navigation className="h-4 w-4 text-cyan-400" />
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Route Planner & Checkpoints
          </span>
        </div>
        <span className="text-[11px] font-mono text-white/50">214 km · Paved 4-Lane</span>
      </div>

      {/* Elevation SVG Chart */}
      <div className="my-3 rounded-2xl border border-white/5 bg-ink-950/60 p-3">
        <div className="flex items-center justify-between text-[11px] font-mono text-white/60 mb-2">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-cyan-400" />
            <span>Elevation Profile</span>
          </div>
          <span>Gain: +420 m</span>
        </div>
        <div className="relative h-16 w-full">
          <svg viewBox="0 0 300 60" className="h-full w-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="elevationGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Mountain Elevation Curve */}
            <path
              d="M0 45 Q 40 42, 80 30 T 160 15 T 220 35 T 300 20 L 300 60 L 0 60 Z"
              fill="url(#elevationGrad)"
            />
            <path
              d="M0 45 Q 40 42, 80 30 T 160 15 T 220 35 T 300 20"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2.5"
            />
            {/* Checkpoint Dots on Path */}
            <circle cx="80" cy="30" r="4" fill="#f59e0b" className="animate-pulse" />
            <circle cx="160" cy="15" r="4" fill="#06b6d4" />
            <circle cx="220" cy="35" r="4" fill="#10b981" />
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
              className={`w-full flex items-center justify-between rounded-xl border p-2 text-left text-xs transition ${
                isSelected
                  ? 'border-cyan-400/40 bg-white/[0.07] text-white'
                  : 'border-white/5 bg-white/[0.02] text-white/60 hover:border-white/15 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5 truncate">
                <div className={`p-1.5 rounded-lg bg-black/40 ${stop.color}`}>
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="truncate">
                  <p className="font-semibold text-white truncate">{stop.name}</p>
                  <p className="text-[10px] text-white/40">{stop.type}</p>
                </div>
              </div>
              <span className="font-mono text-[10px] text-white/50 shrink-0 ml-2">{stop.time}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
