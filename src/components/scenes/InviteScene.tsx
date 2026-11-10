import { Clock, MapPin, Users } from 'lucide-react'
import { SceneBackdrop } from '@/components/ui/SceneBackdrop'
import { SceneCopy } from '@/components/ui/SceneCopy'
import { InviteCard } from '@/components/widgets/InviteCard'
import { IMAGES } from '@/lib/content'

const META = [
  { icon: Clock, value: '6:00 AM', label: 'Meet time' },
  { icon: MapPin, value: 'The Haveli', label: 'Murthal' },
  { icon: Users, value: '4 riders', label: 'Confirmed' },
] as const

export function InviteScene() {
  return (
    <section
      id="invite"
      data-chapter
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden py-28 sm:py-32"
    >
      <SceneBackdrop
        src={IMAGES.invite}
        range={80}
        position="center 40%"
        imageClassName="opacity-25 saturate-[0.85]"
        overlayClassName="bg-[linear-gradient(180deg,#fdfbf7_0%,rgba(253,251,247,0.5)_26%,rgba(253,251,247,0.85)_72%,#fdfbf7_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(234,88,12,0.10),transparent_52%),linear-gradient(90deg,rgba(253,251,247,0.95)_0%,rgba(253,251,247,0.65)_46%,transparent_74%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <SceneCopy
              index="02"
              label="The Invite"
              tone="ember"
              title={
                <>
                  The plan lands
                  <br />
                  <span className="text-ember">before the alarm.</span>
                </>
              }
              body="One invite carries the route, the meetup point, and the pack. No screenshots. No lost pins. No maybes."
              bullets={[
                'Route and meet time synced to every rider',
                'RSVP updates the whole pack instantly',
                'Your spot and route stay saved offline',
              ]}
            />

            <div className="mt-9 grid max-w-md grid-cols-3 gap-2">
              {META.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/5 bg-white p-3 shadow-xs"
                >
                  <item.icon className="h-3.5 w-3.5 text-ember" />
                  <p className="mt-2 text-[11px] font-semibold text-ink">{item.value}</p>
                  <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-dim">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.10),transparent_65%)] blur-2xl"
            />
            <div className="relative">
              <span className="mb-4 hidden justify-end gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-dim sm:flex">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-ember/40" />
                One tap to accepted
              </span>
              <InviteCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
