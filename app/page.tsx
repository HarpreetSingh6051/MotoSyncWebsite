import { Navbar } from '@/components/Navbar'
import { HeroScene } from '@/components/HeroScene'
import { ChapterNav } from '@/components/ChapterNav'
import { JourneyStoryPinned } from '@/components/JourneyStoryPinned'
import { DownloadScene } from '@/components/DownloadScene'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-studio-50 text-slateText-body selection:bg-neutral-900 selection:text-white overflow-x-hidden">
      {/* Floating Pill Header Navigation with Sound Toggle */}
      <Navbar />

      {/* Right-side Vertical Chapter Dot Navigation */}
      <ChapterNav />

      {/* SCENE 0: Hero Scene with Live Flagship App Dashboard */}
      <HeroScene />

      {/* SCENES 1 - 5: THE MOTOSYNC PACK SYSTEM (5-STAGE INTERACTIVE SHOWCASE) */}
      <JourneyStoryPinned />

      {/* SCENE 6: Download MotoSync APK & Sideload Guide */}
      <DownloadScene />

      {/* Minimal Studio Footer */}
      <Footer />
    </main>
  )
}
