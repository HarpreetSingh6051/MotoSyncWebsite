import { useState, useRef, useEffect, useCallback } from "react";
import {
  Users,
  Radio,
  Route,
  Sparkles,
  Navigation,
  Wallet,
  Shield,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Eye,
  Layers,
  LayoutGrid,
  Zap,
  RotateCw,
} from "lucide-react";

import { LubanMicroCanvas } from "./LubanMicroCanvas";

export interface FeatureItem {
  id: string;
  title: string;
  copy: string;
  tag: string;
  icon: typeof Users;
  accent: string;
  hasLuban3D?: "radar" | "ai-core";
}

const FEATURE_LIST: FeatureItem[] = [
  {
    id: "radar",
    title: "Keep the pack in sight",
    copy: "60Hz shared location view, rider delta formation, and live telemetry.",
    tag: "60Hz Radar · Luban 3D",
    icon: Navigation,
    accent: "var(--ms-lime, #d6f66f)",
    hasLuban3D: "radar",
  },
  {
    id: "squad",
    title: "Find your riding circle",
    copy: "Local crews, touring clubs, and riders who share your kind of road.",
    tag: "Community Vision",
    icon: Users,
    accent: "var(--ms-coral, #ff8a68)",
  },
  {
    id: "voice",
    title: "Drop into the voice lounge",
    copy: "Hang out before the ride. Talk through the route. Keep everyone connected.",
    tag: "Intercom 24/7",
    icon: Radio,
    accent: "var(--ms-cyan, #7de0e2)",
  },
  {
    id: "route",
    title: "Turn “let’s go” into a ride",
    copy: "Meetup points, invitations, waypoints, and a route everyone can ride.",
    tag: "Waypoint Route",
    icon: Route,
    accent: "var(--ms-coral, #ff8a68)",
  },
  {
    id: "ai",
    title: "AI co-rider for planning",
    copy: "Describe time, terrain, and riding style. Get a personalized itinerary.",
    tag: "AI Copilot · Luban 3D",
    icon: Sparkles,
    accent: "var(--ms-cyan, #7de0e2)",
    hasLuban3D: "ai-core",
  },
  {
    id: "split",
    title: "Keep shared expenses simple",
    copy: "Fuel, food, and stays. Settle who paid and who owes in one tap.",
    tag: "Instant Splitwise",
    icon: Wallet,
    accent: "var(--ms-lime, #d6f66f)",
  },
  {
    id: "club",
    title: "Create club identity",
    copy: "Custom club badges, crests, ride announcements, and rally banners.",
    tag: "Club Badges",
    icon: Shield,
    accent: "var(--ms-coral, #ff8a68)",
  },
  {
    id: "hazard",
    title: "Pack hazard & safety pings",
    copy: "Gravel, potholes, and weather pings pinned and synced across the pack.",
    tag: "Safety HUD",
    icon: MapPin,
    accent: "var(--ms-lime, #d6f66f)",
  },
];

type ViewMode = "curved" | "tilt" | "grid";

export function Feature3DWall() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("curved");
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoOrbit, setAutoOrbit] = useState(false);
  const [mouseTilt, setMouseTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);
  const isHorizontalDragRef = useRef<boolean>(false);
  const lastDragTimeRef = useRef<number>(0);
  const dragVelocityRef = useRef<number>(0);

  const total = FEATURE_LIST.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto orbit
  useEffect(() => {
    if (!autoOrbit || isDragging) return;
    const timer = setInterval(nextSlide, 4200);
    return () => clearInterval(timer);
  }, [autoOrbit, isDragging, nextSlide]);

  // Wheel / Trackpad horizontal swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let wheelDebounce = 0;
    const handleWheel = (e: WheelEvent) => {
      if (viewMode === "grid") return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
      if (Math.abs(delta) > 28) {
        const now = Date.now();
        if (now - wheelDebounce > 350) {
          wheelDebounce = now;
          if (delta > 0) nextSlide();
          else prevSlide();
        }
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: true });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [viewMode, nextSlide, prevSlide]);

  // Pointer drag - intelligent horizontal/vertical axis discrimination
  const handlePointerDown = (e: React.PointerEvent) => {
    if (viewMode === "grid") return;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    isHorizontalDragRef.current = false;
    lastDragTimeRef.current = Date.now();
    dragVelocityRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragStartRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    // Check gesture direction if not locked yet
    if (!isHorizontalDragRef.current) {
      if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
        // Confirmed horizontal intent: engage drag and capture pointer
        isHorizontalDragRef.current = true;
        setIsDragging(true);
        try {
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        } catch {}
      } else if (Math.abs(dy) > 10) {
        // Vertical scroll intent: release and let page scroll smoothly
        dragStartRef.current = null;
        return;
      }
    }

    if (isHorizontalDragRef.current) {
      const now = Date.now();
      const dt = Math.max(1, now - lastDragTimeRef.current);
      dragVelocityRef.current = (dx - dragOffset) / dt;
      lastDragTimeRef.current = now;
      setDragOffset(dx);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isHorizontalDragRef.current) {
      const velocity = dragVelocityRef.current;
      if (dragOffset > 45 || velocity > 0.35) {
        prevSlide();
      } else if (dragOffset < -45 || velocity < -0.35) {
        nextSlide();
      }
      try {
        (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
      } catch {}
    }

    setIsDragging(false);
    isHorizontalDragRef.current = false;
    setDragOffset(0);
    dragStartRef.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Interactive mouse tilt
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x: x * 14, y: -y * 14 });
  };

  const handleCardMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  return (
    <div className="ms-3d-wall-wrapper">
      {/* 1. Header Toolbar with Mode Toggles & Luban 3D Telemetry HUD */}
      <div className="ms-3d-toolbar">
        <div className="ms-3d-telemetry-badge">
          <span className="ms-telemetry-pulse" />
          <span className="ms-telemetry-label">LUBAN 3D CYLINDER</span>
          <span className="ms-telemetry-sep">·</span>
          <span className="ms-telemetry-yaw">
            YAW {((activeIndex / total) * 360).toFixed(0)}°
          </span>
          <span className="ms-telemetry-sep">·</span>
          <span className="ms-telemetry-stat">SMOOTH MOTION</span>
        </div>

        {/* View Mode Switcher */}
        <div className="ms-3d-modes" role="tablist" aria-label="3D Carousel Modes">
          <button
            type="button"
            className={`ms-mode-btn ${viewMode === "curved" ? "is-active" : ""}`}
            onClick={() => setViewMode("curved")}
            title="3D Curved Cylinder Wall"
          >
            <Eye size={14} />
            <span>3D Cylinder</span>
          </button>
          <button
            type="button"
            className={`ms-mode-btn ${viewMode === "tilt" ? "is-active" : ""}`}
            onClick={() => setViewMode("tilt")}
            title="3D Isometric Tilt Flow"
          >
            <Layers size={14} />
            <span>Tilt Flow</span>
          </button>
          <button
            type="button"
            className={`ms-mode-btn ${viewMode === "grid" ? "is-active" : ""}`}
            onClick={() => setViewMode("grid")}
            title="Flat Overview Grid"
          >
            <LayoutGrid size={14} />
            <span>Grid</span>
          </button>
        </div>

        {/* Controls: Prev / Auto / Next */}
        <div className="ms-3d-nav-ctrls">
          <button
            type="button"
            className={`ms-ctrl-btn ${autoOrbit ? "is-active" : ""}`}
            onClick={() => setAutoOrbit(!autoOrbit)}
            title={autoOrbit ? "Pause auto-orbit" : "Start auto-orbit"}
            aria-label="Toggle auto-orbit"
          >
            <RotateCw size={14} className={autoOrbit ? "animate-spin" : ""} />
            <span className="hidden sm:inline">{autoOrbit ? "Orbiting" : "Auto"}</span>
          </button>
          <button
            type="button"
            className="ms-ctrl-btn ms-arrow-btn"
            onClick={prevSlide}
            aria-label="Previous feature card"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            type="button"
            className="ms-ctrl-btn ms-arrow-btn"
            onClick={nextSlide}
            aria-label="Next feature card"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      {/* 2. 3D Wall Carousel Stage */}
      {viewMode === "grid" ? (
        /* Flat Grid View: Clean cards same as previous */
        <div className="ms-3d-grid-view">
          {FEATURE_LIST.map((item, idx) => (
            <article
              key={item.id}
              className={`ms-grid-card ${idx === activeIndex ? "is-focused" : ""}`}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="ms-card-top-row">
                <div className="ms-card-icon-box" style={{ color: item.accent }}>
                  <item.icon size={26} />
                </div>
                <div className="ms-card-badges">
                  {item.hasLuban3D && (
                    <span className="ms-luban-chip">
                      <Zap size={11} className="text-[var(--ms-lime,#d6f66f)]" />
                      LUBAN 3D
                    </span>
                  )}
                  <span className="ms-card-num-badge">0{idx + 1}</span>
                </div>
              </div>
              <span className="ms-card-tag" style={{ color: item.accent }}>
                {item.tag}
              </span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      ) : (
        /* 3D Curved Cylinder Wall or Tilt Flow */
        <div
          ref={containerRef}
          className={`ms-3d-stage ${viewMode === "curved" ? "is-curved-mode" : "is-tilt-mode"} ${
            isDragging ? "is-grabbing" : ""
          }`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* Ambient Lighting Floor Glow */}
          <div className="ms-3d-floor-glow" />

          <div className="ms-3d-track">
            {FEATURE_LIST.map((item, idx) => {
              // Calculate shortest modular distance in circular carousel
              let offset = idx - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isCurrent = offset === 0;
              const absOffset = Math.abs(offset);
              const isVisible = absOffset <= 3; // Render center + 3 on each side

              if (!isVisible) return null;

              // Pure Mathematical 3D Polar Cylinder Math
              let transform = "";
              let opacity = 1;
              let zIndex = 60 - absOffset * 10;
              let filter = "none";

              if (viewMode === "curved") {
                const cylinderRadius = 580;
                const angleDeg = offset * 25 + dragOffset * 0.08;
                const angleRad = (angleDeg * Math.PI) / 180;

                const transX = Math.sin(angleRad) * cylinderRadius;
                const transZ = (Math.cos(angleRad) - 1) * cylinderRadius + (isCurrent ? 60 : -absOffset * 20);
                const scale = Math.max(0.78, 1 - absOffset * 0.06);

                transform = `translateX(${transX.toFixed(1)}px) translateZ(${transZ.toFixed(1)}px) rotateY(${angleDeg.toFixed(1)}deg) scale(${scale.toFixed(2)})`;

                if (isCurrent && !isDragging) {
                  transform += ` rotateX(${mouseTilt.y.toFixed(1)}deg) rotateY(${mouseTilt.x.toFixed(1)}deg)`;
                }

                opacity = Math.max(0.28, 1 - absOffset * 0.2);
                if (absOffset >= 2) {
                  filter = `blur(${Math.min(3, absOffset * 1.2)}px)`;
                }
              } else {
                // Tilt Flow
                const transX = offset * 260 + dragOffset;
                const transZ = -absOffset * 90;
                const rotY = offset > 0 ? -32 : offset < 0 ? 32 : 0;
                const scale = Math.max(0.82, 1 - absOffset * 0.07);

                transform = `translateX(${transX}px) translateZ(${transZ}px) rotateY(${rotY}deg) scale(${scale})`;
                opacity = Math.max(0.3, 1 - absOffset * 0.2);
              }

              return (
                <div
                  key={item.id}
                  className={`ms-3d-card ${isCurrent ? "is-active" : "is-neighbor"}`}
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    filter,
                    transition: isDragging
                      ? "none"
                      : "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease, filter 0.5s ease",
                  }}
                  onClick={() => {
                    if (offset !== 0) setActiveIndex(idx);
                  }}
                  onMouseMove={isCurrent ? handleCardMouseMove : undefined}
                  onMouseLeave={isCurrent ? handleCardMouseLeave : undefined}
                >
                  {/* React Bits StarBorder Glow on Active Card */}
                  {isCurrent && <div className="ms-star-border-aura" />}

                  {/* Clean Card Inner - Same as previous, no big image */}
                  <div className="ms-card-clean-inner">
                    <div className="ms-card-top-row">
                      <div className="ms-card-icon-box" style={{ color: item.accent }}>
                        <item.icon size={26} />
                      </div>
                      <div className="ms-card-badges">
                        {item.hasLuban3D && (
                          <div className="ms-card-luban-inline">
                            <span className="ms-luban-chip">
                              <Zap size={10} className="text-[var(--ms-lime,#d6f66f)]" />
                              LUBAN 3D
                            </span>
                            <div className="ms-micro-view-dot">
                              <LubanMicroCanvas variant={item.hasLuban3D} className="w-8 h-8" />
                            </div>
                          </div>
                        )}
                        <span className="ms-card-num-badge">0{idx + 1}</span>
                      </div>
                    </div>

                    <span className="ms-card-tag" style={{ color: item.accent }}>
                      {item.tag}
                    </span>

                    <h3 className={`ms-card-title ${isCurrent ? "ms-shiny-title" : ""}`}>
                      {item.title}
                    </h3>

                    <p className="ms-card-copy">{item.copy}</p>

                    <div className="ms-card-footer-action">
                      <span className="ms-card-action-text" style={{ color: item.accent }}>
                        Explore feature ↗
                      </span>
                      <span className="ms-card-accent-line" style={{ background: item.accent }} />
                    </div>

                    {/* Specular glass reflection on active card */}
                    <div
                      className="ms-card-specular-sheen"
                      style={{
                        background: isCurrent
                          ? `radial-gradient(400px circle at ${50 + mouseTilt.x * 2}% ${
                              50 + mouseTilt.y * 2
                            }%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)`
                          : "none",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
