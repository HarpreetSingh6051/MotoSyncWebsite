import { SceneBackdrop } from '@/components/ui/SceneBackdrop'
import { SceneCopy } from '@/components/ui/SceneCopy'
import { ChatWidget } from '@/components/widgets/ChatWidget'
import { IMAGES } from '@/lib/content'

export function ChatScene() {
  return (
    <section
      id="chat"
      data-chapter
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden py-28 sm:py-32"
    >
      <SceneBackdrop
        src={IMAGES.chat}
        range={95}
        position="center 40%"
        imageClassName="opacity-25 saturate-[0.85]"
        overlayClassName="bg-[linear-gradient(180deg,#fdfbf7_0%,rgba(253,251,247,0.5)_24%,rgba(253,251,247,0.85)_72%,#fdfbf7_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(37,99,235,0.08),transparent_52%),linear-gradient(90deg,rgba(253,251,247,0.95)_0%,rgba(253,251,247,0.65)_48%,transparent_100%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <SceneCopy
            index="06"
            label="The Aftermath"
            tone="cyan"
            title={
              <>
                The ride doesn&apos;t end
                <br />
                <span className="text-radar">at the dhaba.</span>
              </>
            }
            body="Channels built around the ride: polls, pins, reels, receipts. The pack stays in sync long after the last chai."
            bullets={[
              'Ride channels that stay together',
              'Polls for the next breakfast run',
              'Reels, pins, and receipts in one thread',
            ]}
          />

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_50%_45%,rgba(37,99,235,0.08),transparent_66%)] blur-2xl"
            />
            <div className="relative">
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-radar font-medium">
                  NH44 Sunday Squad
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-dim">
                  12 members · 4 online
                </span>
              </div>
              <ChatWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
