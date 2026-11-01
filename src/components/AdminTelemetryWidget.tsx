import { useState } from 'react'
import { Database, Lock, Server, ShieldCheck, ToggleRight } from 'lucide-react'

export const AdminTelemetryWidget = () => {
  const [intercomActive, setIntercomActive] = useState(true)

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            Super Admin & ERP Telemetry
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          <Server className="h-3 w-3" />
          <span>Vercel Edge & Supabase</span>
        </div>
      </div>

      {/* Fleet KPI Metric Grid */}
      <div className="my-3 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
          <p className="text-[10px] font-mono text-white/40 uppercase">Fleet Riders</p>
          <p className="text-xl font-bold font-mono text-white mt-0.5">1,420</p>
          <p className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-1">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            +18% this week
          </p>
        </div>

        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
          <p className="text-[10px] font-mono text-white/40 uppercase">Verified Clubs</p>
          <p className="text-xl font-bold font-mono text-amber-400 mt-0.5">84</p>
          <p className="text-[10px] text-white/40 mt-0.5">3 pending review</p>
        </div>
      </div>

      {/* Module Control: Intercom Toggle & RLS Security Status */}
      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-xl border border-white/5 bg-ink-950/60 p-2.5 text-xs">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
              <ToggleRight className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="font-semibold text-white">Live Intercom Feature</p>
              <p className="text-[10px] text-white/40">Multi-rider audio mesh</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIntercomActive(!intercomActive)}
            className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
              intercomActive ? 'bg-amber-500' : 'bg-white/20'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-black shadow transition duration-200 ease-in-out ${
                intercomActive ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2.5 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Lock className="h-3.5 w-3.5" />
              <span>Row-Level Security (RLS)</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">ENFORCED</span>
          </div>
          <p className="text-[10px] text-white/50 mt-1 flex items-center gap-1.5">
            <Database className="h-3 w-3 text-cyan-400" />
            Zero PII leaks · Capability-token RPC grants only
          </p>
        </div>
      </div>
    </div>
  )
}
