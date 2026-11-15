import { useEffect, useRef, useState } from "react";
import { Compass, Radio, Shield, Zap, Sparkles, Navigation } from "lucide-react";

/** Client-only WebGL artwork. Luban 3D precision engineering aesthetic. */
export function CommunityHelmet() {
  const host = useRef<HTMLDivElement>(null);
  const rotateTo = useRef<(angle: number) => void>(() => {});
  const rotateBy = useRef<(direction: number) => void>(() => {});
  const [status, setStatus] = useState("Drag to rotate in 3D");
  const [activeAngle, setActiveAngle] = useState<number>(0);

  useEffect(() => {
    let disposed = false,
      cleanup = () => {};
    import("three")
      .then((T) => {
        if (disposed || !host.current) return;
        const el = host.current;
        let renderer: InstanceType<typeof T.WebGLRenderer>;
        try {
          renderer = new T.WebGLRenderer({ alpha: true, antialias: true });
        } catch {
          setStatus("3D preview offline. Explore features below.");
          return;
        }
        renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
        renderer.setClearColor(0, 0);
        renderer.toneMapping = T.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.6;
        el.appendChild(renderer.domElement);
        renderer.domElement.setAttribute("aria-hidden", "true");

        const scene = new T.Scene(),
          camera = new T.PerspectiveCamera(36, 1, 0.1, 50);
        camera.position.set(0, 0.35, 6.8);

        const css = getComputedStyle(el),
          color = (name: string) => css.getPropertyValue(name).trim() || "#7de0e2";

        const shell = new T.MeshPhysicalMaterial({
          color: color("--ms-cyan"),
          metalness: 0.6,
          roughness: 0.2,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
        });

        const dark = new T.MeshPhysicalMaterial({
          color: color("--ms-night"),
          metalness: 0.85,
          roughness: 0.1,
          clearcoat: 1,
        });

        const accent = new T.MeshStandardMaterial({
          color: color("--ms-lime"),
          emissive: color("--ms-lime"),
          emissiveIntensity: 0.65,
        });

        const hologram = new T.MeshBasicMaterial({
          color: color("--ms-cyan"),
          wireframe: true,
          transparent: true,
          opacity: 0.35,
        });

        const group = new T.Group();
        scene.add(group);

        // 1. Helmet Dome
        const dome = new T.Mesh(
          new T.SphereGeometry(1, 64, 48, 0, Math.PI * 2, 0, Math.PI * 0.75),
          shell,
        );
        dome.scale.set(1, 1.08, 1.18);
        group.add(dome);

        // 2. Visor (Smoked aerodynamic visor)
        const visor = new T.Mesh(
          new T.SphereGeometry(
            1.02,
            64,
            24,
            Math.PI * 0.16,
            Math.PI * 0.68,
            Math.PI * 0.37,
            Math.PI * 0.23,
          ),
          dark,
        );
        visor.scale.set(1, 1.08, 1.2);
        group.add(visor);

        // 3. Jaw / Chin Bar
        const jaw = new T.Mesh(
          new T.TorusGeometry(0.78, 0.19, 20, 64, Math.PI * 1.6),
          shell,
        );
        jaw.rotation.x = Math.PI / 2;
        jaw.rotation.z = -Math.PI * 0.3;
        jaw.position.set(0, -0.68, 0.12);
        jaw.scale.z = 1.2;
        group.add(jaw);

        // 4. Side Pivot Hinges
        for (const x of [-0.94, 0.94]) {
          const hinge = new T.Mesh(
            new T.CylinderGeometry(0.16, 0.16, 0.055, 32),
            accent,
          );
          hinge.rotation.z = Math.PI / 2;
          hinge.position.set(x, -0.02, 0.1);
          group.add(hinge);
        }

        // 5. Neon Speed Trim
        const trim = new T.Mesh(
          new T.TorusGeometry(1.03, 0.025, 10, 80, Math.PI * 0.73),
          accent,
        );
        trim.rotation.x = Math.PI / 2;
        trim.rotation.z = 0.42;
        trim.position.y = 0.36;
        trim.scale.y = 1.17;
        group.add(trim);

        // 6. Luban 3D Holographic Orbit Ring
        const orbit = new T.Mesh(
          new T.TorusGeometry(1.65, 0.008, 8, 100),
          accent,
        );
        orbit.rotation.set(1.1, 0.2, -0.35);
        scene.add(orbit);

        // 7. Base Radar Compass Ring
        const radarRing = new T.Mesh(
          new T.RingGeometry(1.85, 1.88, 64),
          hologram,
        );
        radarRing.rotation.x = -Math.PI / 2.3;
        radarRing.position.y = -1.2;
        scene.add(radarRing);

        // Lighting
        scene.add(new T.HemisphereLight(0xf7f8ef, 0x101e25, 3.2));
        const key = new T.DirectionalLight(0xf7f8ef, 5.5);
        key.position.set(2, 4, 4);
        scene.add(key);

        const rim = new T.DirectionalLight(0xff8a68, 6.5);
        rim.position.set(-3, 1, -2);
        scene.add(rim);

        const fill = new T.DirectionalLight(0x7de0e2, 4.5);
        fill.position.set(3, -1, 2);
        scene.add(fill);

        let currentYaw = -0.45,
          targetYaw = -0.45,
          pitch = 0.06,
          visible = true,
          drag = false,
          lastX = 0;

        const reduced = matchMedia("(prefers-reduced-motion: reduce)");
        const render = () => renderer.render(scene, camera);

        rotateBy.current = (d) => {
          targetYaw += d * 0.4;
        };

        rotateTo.current = (angle) => {
          targetYaw = angle;
        };

        const resize = new ResizeObserver(() => {
          const w = el.clientWidth,
            h = el.clientHeight;
          renderer.setSize(w, h);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          render();
        });
        resize.observe(el);

        const observer = new IntersectionObserver(([e]) => {
          visible = e.isIntersecting;
        });
        observer.observe(el);

        const down = (e: PointerEvent) => {
          drag = true;
          lastX = e.clientX;
          el.setPointerCapture(e.pointerId);
        };

        const move = (e: PointerEvent) => {
          if (drag) {
            const delta = (e.clientX - lastX) * 0.008;
            targetYaw += delta;
            lastX = e.clientX;
          }
        };

        const up = () => {
          drag = false;
        };

        el.addEventListener("pointerdown", down);
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerup", up);
        el.addEventListener("pointercancel", up);

        group.rotation.set(pitch, currentYaw, 0);

        renderer.setAnimationLoop((time) => {
          if (!visible || document.hidden) return;

          // Smooth interpolation toward target yaw
          currentYaw += (targetYaw - currentYaw) * 0.12;

          if (!reduced.matches) {
            group.position.y = Math.sin(time * 0.0008) * 0.055;
            group.rotation.y = currentYaw + (!drag ? Math.sin(time * 0.0003) * 0.06 : 0);
            radarRing.rotation.z = time * 0.0002;
            orbit.rotation.z = time * 0.0003;
          } else {
            group.position.y = 0;
            group.rotation.y = currentYaw;
          }

          render();
        });

        setStatus("Drag to inspect · 360° Luban 3D Studio");

        cleanup = () => {
          rotateBy.current = () => {};
          rotateTo.current = () => {};
          renderer.setAnimationLoop(null);
          resize.disconnect();
          observer.disconnect();
          el.removeEventListener("pointerdown", down);
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerup", up);
          el.removeEventListener("pointercancel", up);
          scene.traverse((o) => {
            if (o instanceof T.Mesh) o.geometry.dispose();
          });
          shell.dispose();
          dark.dispose();
          accent.dispose();
          hologram.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      })
      .catch(() => {
        if (!disposed)
          setStatus("Interactive 3D model offline. Explore features below.");
      });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  const angles = [
    { label: "Front Apex", angle: 0 },
    { label: "3/4 Aero", angle: -0.65 },
    { label: "Profile", angle: -1.57 },
    { label: "Rear Fin", angle: 2.8 },
  ];

  return (
    <div className="helmet-stage">
      <div className="helmet-word" aria-hidden="true">
        CONNECTED
      </div>
      <div className="helmet-canvas" ref={host} />

      {/* Visual Telemetry HUD Readout Chips */}
      <div className="helmet-chip chip-community">
        <span className="flex items-center gap-1.5 text-[var(--ms-lime,#d6f66f)]">
          <Radio size={12} /> PACK RADAR ACTIVE
        </span>
        <strong>6 Riders in Close Sync</strong>
        <small>Leader: Road Captain · 78 km/h</small>
      </div>

      <div className="helmet-chip chip-ai">
        <span className="flex items-center gap-1.5 text-[var(--ms-cyan,#7de0e2)]">
          <Sparkles size={12} /> CO-RIDER AI HUD
        </span>
        <strong>Kullu Pass Apex Ahead</strong>
        <small>Curve Advisory: 45 km/h · Clear Road</small>
      </div>

      {/* Preset Camera View Angle Pills */}
      <div className="helmet-angle-presets">
        {angles.map((a, idx) => (
          <button
            key={a.label}
            className={`helmet-angle-btn ${activeAngle === idx ? "is-active" : ""}`}
            onClick={() => {
              setActiveAngle(idx);
              rotateTo.current(a.angle);
            }}
          >
            {a.label}
          </button>
        ))}
      </div>

      {/* Interaction Controls */}
      <div className="helmet-controls">
        <button
          aria-label="Rotate helmet left"
          onClick={() => rotateBy.current(-1)}
        >
          ←
        </button>
        <span role="status">{status}</span>
        <button
          aria-label="Rotate helmet right"
          onClick={() => rotateBy.current(1)}
        >
          →
        </button>
      </div>
    </div>
  );
}
