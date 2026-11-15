import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export interface SmoothScrollProviderProps {
  children: ReactNode;
}

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * MotoSync Smooth Inertia Scrolling Engine (Lenis)
 * Inspired by MotionSites AI & Awwwards-tier momentum scrolling.
 * Provides buttery-smooth exponential deceleration on wheel, trackpad, and anchor links.
 * Respects prefers-reduced-motion.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Respect reduced motion preference
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
      autoResize: true,
    });

    window.__lenis = lenis;

    let animId: number;
    function raf(time: number) {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    }
    animId = requestAnimationFrame(raf);

    // Smooth scroll for internal hash navigation (#experience, #features, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const dest = document.querySelector(href);
        if (dest) {
          e.preventDefault();
          lenis.scrollTo(dest as HTMLElement, {
            offset: -85,
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { passive: false });

    // Handle window resize
    const handleResize = () => {
      lenis.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(animId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}
