import { Navbar } from '@/components/Navbar'
import { HeroScene } from '@/components/HeroScene'
import { JourneyScene1 } from '@/components/JourneyScene1'
import { JourneyScene2 } from '@/components/JourneyScene2'
import { JourneyScene3 } from '@/components/JourneyScene3'
import { JourneyScene4 } from '@/components/JourneyScene4'
import { JourneyScene5 } from '@/components/JourneyScene5'
import { DownloadScene } from '@/components/DownloadScene'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-sky-500 selection:text-black overflow-x-hidden">
      {/* Floating Pill Header Navigation */}
      <Navbar />

      {/* SCENE 0: Hero Scene with 3D Wheel & Immediate Value */}
      <HeroScene />

      {/* SCROLL-DRIVEN RIDER JOURNEY */}
      <div id="journey" className="relative">
        {/* Subtle background track line connecting the scenes */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sky-500/10 to-transparent pointer-events-none -translate-x-1/2" />

        {/* Scene 1: Ride Planning & Notification */}
        <JourneyScene1 />

        {/* Scene 2: Live Radar Telemetry */}
        <JourneyScene2 />

        {/* Scene 3: Fair Split Fuel & Food */}
        <JourneyScene3 />

        {/* Scene 4: Discover Nearby Packs */}
        <JourneyScene4 />

        {/* Scene 5: Mesh Comms & Hazard Alerts */}
        <JourneyScene5 />
      </div>

      {/* SCENE 6: Download MotoSync APK & PWA */}
      <DownloadScene />

      {/* Minimal Footer */}
      <Footer />
    </main>
  )
}
