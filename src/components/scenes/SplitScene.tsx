import { SceneBackdrop } from '@/components/ui/SceneBackdrop'
import { SceneCopy } from '@/components/ui/SceneCopy'
import { BillSplitWidget } from '@/components/widgets/BillSplitWidget'
import { IMAGES } from '@/lib/content'

export function SplitScene() {
  return (
    <section
      id="split"
      data-chapter
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden py-28 sm:py-32"
    >
      <SceneBackdrop
        src={IMAGES.split}
        range={85}
        position="center 55%"
        imageClassName="opacity-25 saturate-[0.85]"
        overlayClassName="bg-[linear-gradient(180deg,#fdfbf7_0%,rgba(253,251,247,0.5)_26%,rgba(253,251,247,0.85)_72%,#fdfbf7_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_70%,rgba(234,88,12,0.10),transparent_52%),linear-gradient(90deg,rgba(253,251,247,0.95)_0%,rgba(253,251,247,0.65)_48%,transparent_100%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <SceneCopy
            index="05"
            label="The Settlement"
            tone="settle"
            title={
              <>
                The bill
                <br />
                <span className="text-settle">settles itself.</span>
              </>
            }
            body="One tap, one ledger, zero awkward reminders. Everyone sees the same total before the bikes cool down."
            bullets={[
              'Equal or itemised splits in seconds',
              'UPI in a single tap',
              'Every rider sees the same ledger',
            ]}
          />

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_55%_45%,rgba(5,150,105,0.10),transparent_66%)] blur-2xl"
            />
            <div className="relative">
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-ember font-medium">
                  Table for four
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-dim">
                  ₹1,200 · split four ways
                </span>
              </div>
              <BillSplitWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
