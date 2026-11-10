import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'
import { ChapterRail } from '@/components/ChapterRail'
import { HeroScene } from '@/components/scenes/HeroScene'
import { InviteScene } from '@/components/scenes/InviteScene'
import { RadarScene } from '@/components/scenes/RadarScene'
import { IntercomScene } from '@/components/scenes/IntercomScene'
import { SplitScene } from '@/components/scenes/SplitScene'
import { ChatScene } from '@/components/scenes/ChatScene'
import { FinaleScene } from '@/components/scenes/FinaleScene'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <ChapterRail />
      <main id="main" className="relative overflow-x-clip">
        <HeroScene />
        <InviteScene />
        <RadarScene />
        <IntercomScene />
        <SplitScene />
        <ChatScene />
        <FinaleScene />
      </main>
      <Footer />
    </>
  )
}
