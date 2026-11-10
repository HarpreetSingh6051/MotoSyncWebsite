import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { SceneBackdrop } from '@/components/ui/SceneBackdrop'
import { SceneCopy } from '@/components/ui/SceneCopy'
import { RadarWidget } from '@/components/widgets/RadarWidget'
import { IMAGES } from '@/lib/content'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

export function RadarScene() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = usePrefersReducedMotion()
  
  // Track scroll across the pinned track:
  // start start = exactly when section locks to top of viewport
  // end end = exactly when sticky pin finishes
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Smooth, gradual progression over the entire pinned duration:
  // Starts converging after a gentle 8% entrance buffer, smoothly arrives at 85%,
  // and stays comfortably docked until 100% when the next scene glides in.
  const rawProgress = useTransform(
    scrollYProgress,
    [0.08, 0.85],
    [0, 1],
    { clamp: true },
  )
  // Smoothstep keeps the convergence cinematic without spring lag
  const easedProgress = useTransform(
    rawProgress,
    (value) => value * value * (3 - 2 * value),
  )
  const progress = reduce ? rawProgress : easedProgress

  return (
    <section
      ref={sectionRef}
      id="radar"
      data-chapter
      className="radar-scroll relative isolate md:h-[180vh]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <SceneBackdrop
          src={IMAGES.radar}
          range={100}
          position="center 55%"
          imageClassName="opacity-20 saturate-[0.85]"
          overlayClassName="bg-[linear-gradient(180deg,#fdfbf7_0%,rgba(253,251,247,0.6)_24%,rgba(253,251,247,0.85)_76%,#fdfbf7_100%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_64%_44%,rgba(37,99,235,0.08),transparent_52%),linear-gradient(90deg,rgba(253,251,247,0.95)_0%,rgba(253,251,247,0.6)_52%,rgba(253,251,247,0.2)_100%)]" />
      </div>

      <div className="radar-sticky relative z-10 flex min-h-[100svh] items-center py-24 md:sticky md:top-0 md:h-[100svh] md:min-h-0 md:py-0">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-14 lg:px-12">
          <SceneCopy
            index="03"
            label="The Meetup"
            tone="cyan"
            title={
              <>
                Four riders.
                <br />
                <span className="text-radar">One glowing dot.</span>
              </>
            }
            body="The pack converges in real time. See every rider on the route, every distance closing, every ETA update — without a single pin drop."
            bullets={[
              'Live sweep across the whole pack',
              'Distance and ETA for every rider',
              'Waypoint alerts before the turn',
            ]}
            bulletsClassName="hidden lg:grid"
            bodyClassName="hidden lg:block"
          />
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.10),transparent_65%)] blur-2xl"
            />
            <div className="relative">
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-radar font-medium">
                  Pack convergence
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-dim">
                  06:12 IST
                </span>
              </div>
              <RadarWidget progress={progress} />
              <p className="mt-3 hidden text-right font-mono text-[9px] uppercase tracking-[0.22em] text-dim md:block">
                Scroll to converge
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
