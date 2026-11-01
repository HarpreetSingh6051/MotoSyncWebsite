'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Compass, MapPin, Plus, Sparkles, Users } from 'lucide-react'

const PACKS = [
  {
    id: '1',
    name: 'Punjab Royal Brotherhood',
    style: 'Highway Cruisers & Touring',
    riders: 412,
    distance: '4.2 km away',
    badge: '🦁',
    city: 'Ludhiana, IN',
    color: '#10b1fb',
  },
  {
    id: '2',
    name: 'Dawn Patrol Riders',
    style: 'Sport & Mountain Twisties',
    riders: 186,
    distance: '12 km away',
    badge: '⚡',
    city: 'Chandigarh, IN',
    color: '#8b5cf6',
  },
  {
    id: '3',
    name: 'Himalayan Altitude Pack',
    style: 'Off-Road & Adventure Tourers',
    riders: 298,
    distance: '18 km away',
    badge: '🏔️',
    city: 'Shimla Route',
    color: '#10b981',
  },
]

export const JourneyScene4 = () => {
  const [joinedId, setJoinedId] = useState<string | null>(null)

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Step Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-full border border-electric-500/30 bg-electric-500/10 px-3.5 py-1 text-xs font-mono font-bold text-electric-300 mb-4"
      >
        SCENE 04 // COMMUNITY
      </motion.div>

      {/* Headline (Max 6 words) */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-black text-center text-white mb-2 tracking-tight"
      >
        Discover Other Packs.
      </motion.h2>

      {/* Caption (Max 15 words) */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-base sm:text-xl text-center text-white/60 mb-12"
      >
        Find your next pack.
      </motion.p>

      {/* Swipeable Nearby Pack Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
        {PACKS.map((pack, idx) => {
          const isJoined = joinedId === pack.id
          return (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative rounded-3xl border border-white/10 bg-[#05070c]/90 p-6 shadow-2xl backdrop-blur-2xl flex flex-col justify-between hover:border-electric-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="text-2xl">{pack.badge}</span>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-white/50">
                    <MapPin className="h-3 w-3 text-electric-400" />
                    {pack.distance}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{pack.name}</h3>
                <p className="text-xs text-white/50 mb-4">{pack.style}</p>

                <div className="flex items-center gap-3 font-mono text-xs text-white/70 mb-6">
                  <span className="flex items-center gap-1 text-electric-300 font-bold">
                    <Users className="h-3.5 w-3.5" />
                    {pack.riders} riders
                  </span>
                  <span>·</span>
                  <span className="text-white/40">{pack.city}</span>
                </div>
              </div>

              {/* Pulsing Join Button */}
              <button
                type="button"
                onClick={() => setJoinedId(isJoined ? null : pack.id)}
                className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition duration-200 ${
                  isJoined
                    ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                    : 'bg-gradient-to-r from-electric-500/20 to-neon-purple/20 border border-electric-500/40 text-electric-300 hover:border-electric-400 hover:text-white animate-pulse'
                }`}
              >
                {isJoined ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>MEMBER OF PACK</span>
                  </>
                ) : (
                  <>
                    <Plus className="h-3.5 w-3.5" />
                    <span>REQUEST TO JOIN</span>
                  </>
                )}
              </button>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
