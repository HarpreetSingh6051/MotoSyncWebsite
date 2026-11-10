import { SceneBackdrop } from '@/components/ui/SceneBackdrop'
import { SceneCopy } from '@/components/ui/SceneCopy'
import { IntercomWidget } from '@/components/widgets/IntercomWidget'
import { IMAGES } from '@/lib/content'

export function IntercomScene() {
  return (
    <section
      id="intercom"
      data-chapter
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden py-28 sm:py-32"
    >
      <SceneBackdrop
        src={IMAGES.ride}
        range={110}
        position="center 52%"
        imageClassName="opacity-25 saturate-[0.85]"
        overlayClassName="bg-[linear-gradient(180deg,#fdfbf7_0%,rgba(253,251,247,0.5)_28%,rgba(253,251,247,0.85)_70%,#fdfbf7_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#fdfbf7_4%,rgba(253,251,247,0.85)_44%,rgba(253,251,247,0.2)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-1/4 top-1/3 h-px w-[150%] -rotate-6 bg-gradient-to-r from-transparent via-radar/20 to-transparent blur-sm"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/3 top-2/3 h-px w-[150%] rotate-3 bg-gradient-to-r from-transparent via-ember/15 to-transparent blur-sm"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <SceneCopy
            index="04"
            label="The Ride"
            tone="settle"
            title={
              <>
                Talk without
                <br />
                <span className="text-settle">stopping.</span>
              </>
            }
            body="Push-to-talk that cuts through wind, distance, and the roar of the pack. No calls. No typing. Just ride."
            bullets={[
              "Clear audio for every rider in the pack",
              "See who is speaking, at a glance",
              "One hold to talk, release to listen",
            ]}
          />

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_60%_40%,rgba(5,150,105,0.10),transparent_66%)] blur-2xl"
            />
            <div className="relative">
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-settle font-medium">
                  <span className="ping-dot h-1.5 w-1.5 rounded-full bg-settle text-settle" />
                  Channel open
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-dim">
                  NH44 · 06:14
                </span>
              </div>
              <IntercomWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
