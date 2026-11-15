import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

/** A short wheel easing; native anchors retain URL, focus and history behavior. */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    let frame = 0;
    const stop = () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = undefined;
    };
    const update = () => {
      stop();
      if (preference.matches) return;
      lenis = new Lenis({ duration: 0.65, smoothWheel: true, syncTouch: false });
      const tick = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    update();
    preference.addEventListener("change", update);
    return () => { preference.removeEventListener("change", update); stop(); };
  }, []);
  return <>{children}</>;
}
