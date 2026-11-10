import { Navbar } from '@/components/Navbar'
import { ChapterNav } from '@/components/ChapterNav'
import { HeroScene } from '@/components/HeroScene'
import { CinematicStory } from '@/components/CinematicStory'
import { GrandFinaleScene } from '@/components/GrandFinaleScene'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-void text-textSupport selection:bg-cyan-500 selection:text-void overflow-x-hidden">
      {/* Floating Dark Frosted Glass Header */}
      <Navbar />

      {/* Right-side Vertical Chapter Dot Navigation */}
      <ChapterNav />

      {/* SCENE 1: The Call to Adventure (Hero with Moody Highway Atmosphere) */}
      <HeroScene />

      {/* SCENES 2 - 6: The Sticky Phone Scroll-Driven Visual Journey */}
      <CinematicStory />

      {/* SCENE 7: The Grand Finale (Ecosystem, Comparison Matrix & APK Downloads) */}
      <GrandFinaleScene />

      {/* Cinematic Dark Footer */}
      <Footer />
    </main>
  )
}
