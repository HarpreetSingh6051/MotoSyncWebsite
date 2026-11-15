import { useEffect, useRef, useState } from "react";

/** Client-only WebGL artwork. No models, trackers, or remote assets. */
export function CommunityHelmet() {
  const host = useRef<HTMLDivElement>(null);
  const rotate = useRef<(direction: number) => void>(() => {});
  const [status, setStatus] = useState("Loading the 3D studio…");
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
          setStatus(
            "3D is unavailable on this device. Explore the community below.",
          );
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
          color = (name: string) => css.getPropertyValue(name).trim();
        const shell = new T.MeshPhysicalMaterial({
          color: color("--ms-cyan"),
          metalness: 0.55,
          roughness: 0.23,
          clearcoat: 1,
        });
        const dark = new T.MeshPhysicalMaterial({
          color: color("--ms-night"),
          metalness: 0.7,
          roughness: 0.12,
          clearcoat: 1,
        });
        const accent = new T.MeshStandardMaterial({
          color: color("--ms-lime"),
          emissive: color("--ms-lime"),
          emissiveIntensity: 0.5,
        });
        const group = new T.Group();
        scene.add(group);
        const dome = new T.Mesh(
          new T.SphereGeometry(1, 64, 48, 0, Math.PI * 2, 0, Math.PI * 0.75),
          shell,
        );
        dome.scale.set(1, 1.08, 1.18);
        group.add(dome);
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
        const jaw = new T.Mesh(
          new T.TorusGeometry(0.78, 0.19, 20, 64, Math.PI * 1.6),
          shell,
        );
        jaw.rotation.x = Math.PI / 2;
        jaw.rotation.z = -Math.PI * 0.3;
        jaw.position.set(0, -0.68, 0.12);
        jaw.scale.z = 1.2;
        group.add(jaw);
        for (const x of [-0.94, 0.94]) {
          const hinge = new T.Mesh(
            new T.CylinderGeometry(0.16, 0.16, 0.055, 32),
            accent,
          );
          hinge.rotation.z = Math.PI / 2;
          hinge.position.set(x, -0.02, 0.1);
          group.add(hinge);
        }
        const trim = new T.Mesh(
          new T.TorusGeometry(1.03, 0.025, 10, 80, Math.PI * 0.73),
          accent,
        );
        trim.rotation.x = Math.PI / 2;
        trim.rotation.z = 0.42;
        trim.position.y = 0.36;
        trim.scale.y = 1.17;
        group.add(trim);
        const orbit = new T.Mesh(
          new T.TorusGeometry(1.65, 0.008, 8, 100),
          accent,
        );
        orbit.rotation.set(1.1, 0.2, -0.35);
        scene.add(orbit);
        scene.add(
          new T.HemisphereLight(color("--ms-white"), color("--ms-night"), 3),
        );
        const key = new T.DirectionalLight(color("--ms-white"), 5);
        key.position.set(2, 4, 4);
        scene.add(key);
        const rim = new T.DirectionalLight(color("--ms-coral"), 7);
        rim.position.set(-3, 1, -2);
        scene.add(rim);
        const fill = new T.DirectionalLight(color("--ms-cyan"), 4);
        fill.position.set(3, -1, 2);
        scene.add(fill);
        let yaw = -0.45,
          pitch = 0.06,
          visible = true,
          drag = false,
          last = 0;
        const reduced = matchMedia("(prefers-reduced-motion: reduce)");
        const render = () => renderer.render(scene, camera);
        rotate.current = (d) => {
          yaw += d * 0.3;
          group.rotation.y = yaw;
          render();
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
          last = e.clientX;
          el.setPointerCapture(e.pointerId);
        };
        const move = (e: PointerEvent) => {
          if (drag) {
            yaw += (e.clientX - last) * 0.008;
            last = e.clientX;
            group.rotation.y = yaw;
            render();
          }
        };
        const up = () => {
          drag = false;
        };
        el.addEventListener("pointerdown", down);
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerup", up);
        el.addEventListener("pointercancel", up);
        group.rotation.set(pitch, yaw, 0);
        renderer.setAnimationLoop((time) => {
          if (!visible || document.hidden) return;
          if (!reduced.matches) {
            group.position.y = Math.sin(time * 0.0008) * 0.055;
            group.rotation.y =
              yaw + (!drag ? Math.sin(time * 0.0003) * 0.1 : 0);
          } else {
            group.position.y = 0;
            group.rotation.y = yaw;
          }
          render();
        });
        setStatus("Drag to rotate · an original 3D helmet");
        cleanup = () => {
          rotate.current = () => {};
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
          renderer.dispose();
          renderer.domElement.remove();
        };
      })
      .catch(() => {
        if (!disposed)
          setStatus(
            "Explore the community below. The 3D preview could not load.",
          );
      });
    return () => {
      disposed = true;
      cleanup();
    };
  }, []);
  return (
    <div className="helmet-stage">
      <div className="helmet-word" aria-hidden="true">
        CONNECTED
      </div>
      <div className="helmet-canvas" ref={host} />
      <div className="helmet-chip chip-community">
        <span>COMMUNITY HUB</span>
        <strong>Your people. Your space.</strong>
        <small># general &nbsp; # rides &nbsp; ♬ lounge</small>
      </div>
      <div className="helmet-chip chip-ai">
        <span>ON THE HORIZON</span>
        <strong>Your AI co-rider ✦</strong>
        <small>Plan it. Create it. Ride it.</small>
      </div>
      <div className="helmet-controls">
        <button
          aria-label="Rotate helmet left"
          onClick={() => rotate.current(-1)}
        >
          ←
        </button>
        <span role="status">{status}</span>
        <button
          aria-label="Rotate helmet right"
          onClick={() => rotate.current(1)}
        >
          →
        </button>
      </div>
    </div>
  );
}
