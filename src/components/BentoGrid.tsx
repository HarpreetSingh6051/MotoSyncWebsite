import { motion } from 'framer-motion'
import { SpotlightCard } from '@/components/SpotlightCard'
import { LiveRadarWidget } from '@/components/LiveRadarWidget'
import { ExhaustVaultWidget } from '@/components/ExhaustVaultWidget'
import { RoutePlannerWidget } from '@/components/RoutePlannerWidget'
import { AdminTelemetryWidget } from '@/components/AdminTelemetryWidget'
import { KineticText } from '@/components/KineticText'
import { Terminal } from 'lucide-react'

export const BentoGrid = () => {
  return (
    <section id="features" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-radial from-electric-500/12 via-neon-purple/8 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-gradient-radial from-neon-purple/10 via-neon-red/5 to-transparent blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-electric-500/40 bg-electric-500/10 px-4 py-1.5 text-xs font-mono font-bold text-electric-300 mb-5 shadow-lg shadow-electric-500/10"
        >
          <Terminal className="h-3.5 w-3.5 text-electric-400" />
          <span>[SYSTEM_ARCHITECTURE // 21ST_BENTO]</span>
        </motion.div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
          <KineticText
            text="Engineered for the Open Highway and Synchronized Packs"
            highlightWords={['Engineered', 'Synchronized', 'Packs']}
            highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-neon-violet to-neon-fuchsia glow-electric"
          />
        </h2>

        <p className="text-base sm:text-lg text-white/60 leading-relaxed font-sans max-w-2xl mx-auto">
          Four interconnected disciplines uniting real-time rider GPS telemetry, mechanical exhaust acoustics, collaborative route scheduling, and enterprise fleet intelligence.
        </p>
      </div>

      {/* 21st.dev Bento Grid Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Card 1: Live Radar (Electric Blue Spotlight Variant - 7 Cols) */}
        <div className="lg:col-span-7">
          <SpotlightCard
            variant="blue"
            className="h-full border-electric-500/30 hover:border-electric-500/60"
          >
            <LiveRadarWidget />
          </SpotlightCard>
        </div>

        {/* Card 2: AI Exhaust Sound Vault (Neon Purple Spotlight Variant - 5 Cols) */}
        <div className="lg:col-span-5">
          <SpotlightCard
            variant="purple"
            className="h-full border-neon-purple/30 hover:border-neon-purple/60"
          >
            <ExhaustVaultWidget />
          </SpotlightCard>
        </div>

        {/* Card 3: Route Planner & Checkpoints (Electric Blue Spotlight - 5 Cols) */}
        <div className="lg:col-span-5">
          <SpotlightCard
            variant="blue"
            className="h-full border-electric-500/30 hover:border-electric-500/60"
          >
            <RoutePlannerWidget />
          </SpotlightCard>
        </div>

        {/* Card 4: Super Admin & ERP Telemetry (Neon Red / Emerald Variant - 7 Cols) */}
        <div className="lg:col-span-7">
          <SpotlightCard
            variant="red"
            className="h-full border-neon-red/30 hover:border-neon-red/60"
          >
            <AdminTelemetryWidget />
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
