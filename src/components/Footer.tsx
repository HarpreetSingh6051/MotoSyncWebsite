import { Compass, Download, GitBranch, Shield, Terminal } from 'lucide-react'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'
const RIDER_APP_URL = 'https://moto-sync-ochre.vercel.app'
const ADMIN_APP_URL = 'https://moto-sync-admin.vercel.app'
const GITHUB_REPO = 'https://github.com/HarpreetSingh6051/MotoSync'

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#000000] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Manifesto (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-neon-purple text-white shadow-lg shadow-electric-500/20">
                <Compass className="h-5 w-5" />
              </div>
              <span className="text-xl font-black tracking-wider text-white font-mono">
                MOTO<span className="text-electric-400">SYNC</span>
              </span>
            </div>

            <p className="text-sm text-white/60 max-w-sm leading-relaxed font-sans">
              Pack Connected. Ride in Sync. Bridging mechanical highway riding culture with real-time GPS radar telemetry, collaborative route synchronisation, and enterprise fleet intelligence.
            </p>

            {/* Live System Health Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>[ALL SYSTEMS OPERATIONAL // VERCEL EDGE & SUPABASE]</span>
            </div>
          </div>

          {/* Col 2: Rider Platform */}
          <div className="space-y-3 text-xs font-mono">
            <p className="font-bold uppercase tracking-wider text-white">RIDER PLATFORM</p>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href={APK_URL} download="motosync.apk" className="hover:text-electric-400 transition flex items-center gap-1.5">
                  <Download className="h-3 w-3 text-electric-400" />
                  <span className="text-white font-semibold">Download Android APK</span>
                </a>
              </li>
              <li>
                <a href={`${RIDER_APP_URL}/#/feed`} target="_blank" rel="noreferrer" className="hover:text-white transition">
                  Pack Highway Feed
                </a>
              </li>
              <li>
                <a href={`${RIDER_APP_URL}/#/clubs`} target="_blank" rel="noreferrer" className="hover:text-white transition">
                  Motorcycle Clubs Directory
                </a>
              </li>
              <li>
                <a href={`${RIDER_APP_URL}/#/chat`} target="_blank" rel="noreferrer" className="hover:text-white transition">
                  Real-Time Intercom Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Super Admin ERP */}
          <div className="space-y-3 text-xs font-mono">
            <p className="font-bold uppercase tracking-wider text-white">SUPER ADMIN ERP</p>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href={`${ADMIN_APP_URL}/#/users`} target="_blank" rel="noreferrer" className="hover:text-neon-purple transition flex items-center gap-1.5">
                  <Shield className="h-3 w-3 text-neon-purple" />
                  <span className="text-white font-semibold">Registered Riders CRM</span>
                </a>
              </li>
              <li>
                <a href={`${ADMIN_APP_URL}/#/clubs`} target="_blank" rel="noreferrer" className="hover:text-white transition">
                  Club KYC Verification
                </a>
              </li>
              <li>
                <a href={`${ADMIN_APP_URL}/#/reports`} target="_blank" rel="noreferrer" className="hover:text-white transition">
                  Subscription Purchases
                </a>
              </li>
              <li>
                <a href={`${ADMIN_APP_URL}/#/database`} target="_blank" rel="noreferrer" className="hover:text-white transition">
                  RLS Postgres Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Open Architecture */}
          <div className="space-y-3 text-xs font-mono">
            <p className="font-bold uppercase tracking-wider text-white">SOURCE & SPECS</p>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href={GITHUB_REPO} target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1.5">
                  <GitBranch className="h-3.5 w-3.5 text-electric-400" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a href="https://moto-sync-be.vercel.app/api/v1/health" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-neon-purple" />
                  <span>Backend Health API</span>
                </a>
              </li>
              <li>
                <span className="text-white/40">Zero-Cost Free Tier Stack</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>© 2026 MotoSync Platform. Built for Indian highway riding packs.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition">RIDER SAFETY STANDARDS</a>
            <a href="#" className="hover:text-white transition">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
