import { Navbar } from '@/components/Navbar'
import { HeroScene } from '@/components/HeroScene'
import { ChapterNav } from '@/components/ChapterNav'
import { JourneyStoryPinned } from '@/components/JourneyStoryPinned'
import { DownloadScene } from '@/components/DownloadScene'
import { Footer } from '@/components/Footer'

export default function HomePage({
  searchParams,
}: {
  searchParams?: { preview_stage?: string }
}) {
  const p = searchParams?.preview_stage

  // If a preview_stage is specified in query parameters (for QA frame-by-frame evidence)
  if (p !== undefined) {
    if (p === 'download') {
      return (
        <main className="relative min-h-screen bg-studio-50 text-slateText-body pt-20 overflow-x-hidden">
          <Navbar />
          <DownloadScene />
        </main>
      )
    }
    const num = parseInt(p, 10)
    if (!isNaN(num) && num >= 0 && num <= 4) {
      return (
        <main className="relative min-h-screen bg-studio-50 text-slateText-body pt-20 overflow-x-hidden">
          <Navbar />
          <JourneyStoryPinned forceStage={num} />
        </main>
      )
    }
  }

  // Full interactive landing page with smooth momentum scroll and pinned phone journey
  return (
    <main className="relative min-h-screen bg-studio-50 text-slateText-body selection:bg-neutral-900/10 selection:text-neutral-950 overflow-x-hidden">
      {/* Floating Pill Header Navigation with Sound Toggle */}
      <Navbar />

      {/* Right-side Vertical Chapter Dot Navigation */}
      <ChapterNav />

      {/* SCENE 0: Hero Scene with Realistic 3D Wheel & Immediate Value */}
      <HeroScene />

      {/* SCENES 1 - 5: SCROLL-DRIVEN PINNED PHONE JOURNEY */}
      <JourneyStoryPinned />

      {/* SCENE 6: Download MotoSync APK & PWA */}
      <DownloadScene />

      {/* Minimal Footer */}
      <Footer />
    </main>
  )
}
