import { useState } from 'react'
import { Database, Lock, Server, ShieldCheck, ToggleRight, Users, Zap } from 'lucide-react'

export const AdminTelemetryWidget = () => {
  const [intercomActive, setIntercomActive] = useState(true)

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span className="font-mono text-xs font-bold tracking-wider text-emerald-400 uppercase">
            [ENTERPRISE_ERP // FLEET_CRM]
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
          <Server className="h-3 w-3" />
          <span>Vercel Edge Global Mesh</span>
        </div>
      </div>

      {/* Fleet KPI Metric Grid (NVIDIA High-Contrast) */}
      <div className="my-3 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-white/10 bg-[#020306] p-2.5 shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-white/40 uppercase">Active Fleet</span>
            <Users className="h-3.5 w-3.5 text-electric-400" />
          </div>
          <p className="text-2xl font-black font-mono text-white mt-1">1,420</p>
          <p className="text-[10px] text-emerald-400 font-mono mt-0.5">● 100% telemetry synced</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#020306] p-2.5 shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-white/40 uppercase">Verified Clubs</span>
            <Zap className="h-3.5 w-3.5 text-neon-purple" />
          </div>
          <p className="text-2xl font-black font-mono text-neon-purple mt-1">84</p>
          <p className="text-[10px] text-white/40 font-mono mt-0.5">3 pending KYC review</p>
        </div>
      </div>

      {/* Intercom Audio Mesh Toggle & Security Guard */}
      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-surface-900/80 p-2.5 text-xs">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-electric-500/10 border border-electric-500/20 text-electric-400">
              <ToggleRight className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="font-bold text-white">Live Intercom Voice Mesh</p>
              <p className="text-[10px] text-white/40 font-mono">Multi-rider encrypted voice channel</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIntercomActive(!intercomActive)}
            className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
              intercomActive ? 'bg-electric-500' : 'bg-white/20'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-black shadow transition duration-200 ease-in-out ${
                intercomActive ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-2.5 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Lock className="h-3.5 w-3.5" />
              <span>Row-Level Security (Postgres 16 RLS)</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded">
              ACTIVE
            </span>
          </div>
          <p className="text-[10px] text-white/50 font-mono mt-1 flex items-center gap-1.5">
            <Database className="h-3 w-3 text-electric-400" />
            Zero PII leaks · Authenticated capability grants only
          </p>
        </div>
      </div>
    </div>
  )
}
