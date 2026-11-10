import type { MotionValue } from 'framer-motion'
import { motion, useTransform } from 'framer-motion'
import { MapPin, Navigation, Radio, Users } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { RIDERS, type Rider } from '@/lib/content'
import { useMounted, usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

const WAYPOINT = { x: 57, y: 47 }

type MarkerSpec = {
  rider: Rider
  start: { x: number; y: number }
  end: { x: number; y: number }
  startKm: number
  endKm: number
}

const MARKERS: MarkerSpec[] = [
  {
    rider: RIDERS[0],
    start: { x: 14, y: 86 },
    end: { x: 48, y: 57 },
    startKm: 6.4,
    endKm: 0.3,
  },
  {
    rider: RIDERS[1],
    start: { x: 30, y: 76 },
    end: { x: 54, y: 60 },
    startKm: 4.8,
    endKm: 0.4,
  },
  {
    rider: RIDERS[2],
    start: { x: 80, y: 88 },
    end: { x: 65, y: 56 },
    startKm: 7.1,
    endKm: 0.5,
  },
  {
    rider: RIDERS[3],
    start: { x: 86, y: 24 },
    end: { x: 63, y: 37 },
    startKm: 3.9,
    endKm: 0.3,
  },
]

const ROUTE_PATH =
  'M 80 470 C 170 430 210 365 285 352 C 355 340 385 315 408 285 C 425 262 438 248 456 235'

function RiderMarker({
  spec,
  progress,
}: {
  spec: MarkerSpec
  progress: MotionValue<number>
}) {
  const reduce = usePrefersReducedMotion()
  const mounted = useMounted()
  const still = mounted && reduce
  const left = useTransform(
    progress,
    (value) => `${spec.start.x + (spec.end.x - spec.start.x) * value}%`,
  )
  const top = useTransform(
    progress,
    (value) => `${spec.start.y + (spec.end.y - spec.start.y) * value}%`,
  )
  const distance = useTransform(progress, (value) =>
    `${(spec.startKm - (spec.startKm - spec.endKm) * value).toFixed(1)} km`,
  )

  return (
    <motion.div
      data-rider-marker={spec.rider.id}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={
        still
          ? { left: `${spec.end.x}%`, top: `${spec.end.y}%` }
          : { left, top }
      }
    >
      <div className="flex flex-col items-center">
        <div
          className="relative rounded-full p-[2px]"
          style={{
            backgroundColor: `${spec.rider.accent}40`,
            boxShadow: `0 2px 14px -2px ${spec.rider.accent}55`,
          }}
        >
          <img
            src={spec.rider.avatar}
            alt={spec.rider.name}
            loading="lazy"
            decoding="async"
            className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-xs sm:h-10 sm:w-10"
          />
        </div>
        <div className="mt-1.5 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-black/10 bg-white/95 px-2 py-0.5 text-[8px] font-medium text-ink shadow-xs backdrop-blur-md sm:text-[9px]">
          <span>{spec.rider.name}</span>
          <span className="h-0.5 w-0.5 rounded-full bg-black/25" />
          {still ? (
            <span className="font-mono font-semibold text-radar">{spec.endKm.toFixed(1)} km</span>
          ) : (
            <motion.span className="font-mono font-semibold text-radar">{distance}</motion.span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function RadarWidget({ progress }: { progress: MotionValue<number> }) {
  const reduce = usePrefersReducedMotion()
  const mounted = useMounted()
  const still = mounted && reduce

  return (
    <GlassCard glow="cyan" className="relative overflow-hidden p-0">
      <div className="relative z-30 flex items-center justify-between gap-3 border-b border-black/5 bg-white/90 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <Radio className="h-3.5 w-3.5 text-radar" />
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-radar font-semibold">
            Live radar
          </span>
        </div>
        <span className="hidden text-[10px] text-mist sm:block">Murthal · NH44</span>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-mist">
            <Users className="h-3 w-3 text-radar" /> 4
          </span>
          <span className="rounded-full border border-black/5 bg-raised px-2 py-0.5 font-mono text-[9px] text-dim">
            06:12
          </span>
        </div>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10]">
        <div className="absolute inset-0 bg-[#f7f4ec]" />
        <div className="absolute inset-0 map-grid opacity-35" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_57%_47%,rgba(37,99,235,0.08),transparent_50%)]"
        />

        <svg
          viewBox="0 0 800 500"
          preserveAspectRatio="none"
          aria-hidden
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <filter id="radar-route-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g fill="#ede6d8" stroke="#dfd6c4" strokeWidth="1">
            <rect x="48" y="48" width="138" height="82" rx="10" />
            <rect x="212" y="32" width="108" height="64" rx="9" />
            <rect x="88" y="168" width="96" height="118" rx="9" />
            <rect x="222" y="206" width="132" height="76" rx="10" />
            <rect x="560" y="62" width="152" height="96" rx="12" />
            <rect x="640" y="206" width="118" height="84" rx="10" />
            <rect x="516" y="336" width="92" height="112" rx="10" />
            <rect x="636" y="378" width="130" height="84" rx="10" />
            <rect x="292" y="398" width="118" height="74" rx="10" />
          </g>

          <g
            stroke="#ded6c5"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          >
            <path d="M -20 444 C 140 390 260 334 382 302 S 640 238 820 176" strokeWidth="15" />
            <path d="M 126 530 C 190 422 304 370 448 328 S 634 226 762 -20" strokeWidth="11" />
            <path d="M 40 104 C 190 148 300 188 420 232 S 610 306 780 320" strokeWidth="7" />
            <path d="M 410 530 C 438 470 470 420 508 372 S 568 274 600 190" strokeWidth="6" />
          </g>

          <g
            fill="#8c8375"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="9"
            letterSpacing="2.6"
          >
            <text x="70" y="92">MURTHAL</text>
            <text x="580" y="112">NH44</text>
            <text x="526" y="466">SONIPAT</text>
            <text x="232" y="250">THE HAVELI</text>
          </g>

          <g fill="#bcb19f">
            <circle cx="300" cy="314" r="3" />
            <circle cx="612" cy="282" r="3" />
            <circle cx="230" cy="420" r="3" />
            <circle cx="548" cy="138" r="3" />
          </g>

          <path
            d={ROUTE_PATH}
            fill="none"
            stroke="#2563eb"
            strokeOpacity="0.2"
            strokeWidth="12"
            filter="url(#radar-route-glow)"
          />
          <path
            d={ROUTE_PATH}
            fill="none"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeOpacity="0.88"
          />
          <path
            d={ROUTE_PATH}
            fill="none"
            stroke="#93c5fd"
            strokeWidth="1.4"
            className="route-dash"
          />

          <path
            d="M 740 470 C 660 400 610 350 560 310 C 520 278 490 255 456 235"
            fill="none"
            stroke="#2563eb"
            strokeOpacity="0.32"
            strokeWidth="1.4"
            strokeDasharray="3 10"
          />
          <path
            d="M 760 60 C 660 90 620 150 580 190 C 545 225 500 232 456 235"
            fill="none"
            stroke="#ea580c"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            strokeDasharray="3 10"
          />
        </svg>

        <div className="absolute inset-0 map-scan opacity-30" />

        <div
          aria-hidden
          className="pointer-events-none absolute left-[57%] top-[47%] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative h-[280px] w-[280px] sm:h-[420px] sm:w-[420px]">
            <div className="radar-ring absolute inset-0" />
            <div className="radar-ring absolute inset-[20%]" />
            <div className="radar-ring absolute inset-[40%]" />
            <div className="radar-sweep absolute inset-0 rounded-full opacity-60" />
          </div>
        </div>

        <div
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${WAYPOINT.x}%`, top: `${WAYPOINT.y}%` }}
        >
          <span className="ping-dot absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-radar/40 text-radar" />
          <div className="relative grid h-10 w-10 place-items-center rounded-2xl border border-radar/30 bg-white text-radar shadow-md">
            <MapPin className="h-5 w-5" />
          </div>
          <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-radar/20 bg-white/95 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.18em] text-radar font-semibold shadow-xs backdrop-blur-md">
            The Haveli
          </span>
        </div>

        {MARKERS.map((spec) => (
          <RiderMarker key={spec.rider.id} spec={spec} progress={progress} />
        ))}

        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between gap-3 p-3 sm:p-4">
          <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 shadow-xs backdrop-blur-md">
            <span className="ping-dot h-1.5 w-1.5 rounded-full bg-radar text-radar" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-radar font-medium">
              Converging
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-ember/25 bg-ember/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-ember font-semibold">
              Live
            </span>
            <span className="hidden rounded-full border border-black/10 bg-white/90 px-2.5 py-1 font-mono text-[9px] text-dim backdrop-blur-md shadow-xs sm:block">
              Sweep 4.6s
            </span>
          </div>
        </div>

        <div className="absolute inset-x-3 bottom-3 z-30 sm:inset-x-4 sm:bottom-4">
          <div className="rounded-2xl border border-black/10 bg-white/95 p-3 backdrop-blur-xl shadow-md sm:p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-medium leading-4 text-ink sm:text-xs">
                Converging on <span className="text-radar font-semibold">The Haveli</span>
                <span className="mx-2 text-black/20">•</span>
                <span className="text-mist">3/4 riders within 2km</span>
              </p>
              <span className="hidden shrink-0 font-mono text-[9px] uppercase tracking-[0.16em] text-dim sm:block">
                ETA 06:15
              </span>
            </div>
            <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-black/[0.06]">
              <motion.div
                className="h-full origin-left rounded-full bg-gradient-to-r from-radar via-[#3b82f6] to-ember"
                style={{ scaleX: still ? 1 : progress }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                {RIDERS.map((rider) => (
                  <img
                    key={rider.id}
                    src={rider.avatar}
                    alt={rider.name}
                    loading="lazy"
                    decoding="async"
                    className="h-5 w-5 rounded-full border border-white shadow-xs object-cover"
                  />
                ))}
                <span className="ml-1 font-mono text-[9px] text-mist">4 linked</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
                <span className="flex items-center gap-1">
                  <Navigation className="h-3 w-3 text-radar" /> Sweep on
                </span>
                <span className="hidden items-center gap-1 sm:flex">
                  <Users className="h-3 w-3 text-radar" /> Pack 4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
