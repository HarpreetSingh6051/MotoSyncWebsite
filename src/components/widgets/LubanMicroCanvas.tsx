import { useEffect, useRef, useState } from "react";

interface LubanMicroCanvasProps {
  variant: "radar" | "ai-core";
  className?: string;
  isActive?: boolean;
}

/**
 * Lightweight client-side WebGL micro-viewport for Luban 3D telemetry effects.
 * Mounts only in designated feature spots to preserve buttery 60 FPS performance.
 */
export function LubanMicroCanvas({
  variant,
  className = "",
  isActive = true,
}: LubanMicroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;
    let disposed = false;
    let animId: number;

    import("three").then((T) => {
      if (disposed || !containerRef.current) return;
      const el = containerRef.current;

      // Renderer
      let renderer: InstanceType<typeof T.WebGLRenderer>;
      try {
        renderer = new T.WebGLRenderer({ alpha: true, antialias: true });
      } catch {
        return;
      }

      const width = el.clientWidth || 120;
      const height = el.clientHeight || 120;
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      el.replaceChildren(renderer.domElement);
      renderer.domElement.setAttribute("aria-hidden", "true");

      // Scene & Camera
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 4.2);

      const group = new T.Group();
      scene.add(group);

      if (variant === "radar") {
        // Holographic Wireframe Radar Rings
        const ringGeo1 = new T.RingGeometry(1.4, 1.45, 32);
        const ringMat1 = new T.MeshBasicMaterial({
          color: 0x7de0e2,
          wireframe: true,
          transparent: true,
          opacity: 0.7,
        });
        const ring1 = new T.Mesh(ringGeo1, ringMat1);
        group.add(ring1);

        const ringGeo2 = new T.RingGeometry(0.85, 0.9, 24);
        const ringMat2 = new T.MeshBasicMaterial({
          color: 0xd6f66f,
          wireframe: true,
          transparent: true,
          opacity: 0.85,
        });
        const ring2 = new T.Mesh(ringGeo2, ringMat2);
        group.add(ring2);

        // Radar Sweep Beam
        const sweepGeo = new T.BufferGeometry();
        const pts = new Float32Array([
          0, 0, 0,
          1.4, 0, 0,
          1.2, 0.7, 0,
        ]);
        sweepGeo.setAttribute("position", new T.BufferAttribute(pts, 3));
        const sweepMat = new T.MeshBasicMaterial({
          color: 0xd6f66f,
          transparent: true,
          opacity: 0.45,
          side: T.DoubleSide,
        });
        const sweep = new T.Mesh(sweepGeo, sweepMat);
        group.add(sweep);

        // Blips
        const blipGeo = new T.SphereGeometry(0.08, 8, 8);
        const blipMat = new T.MeshBasicMaterial({ color: 0xff8a68 });
        const blip1 = new T.Mesh(blipGeo, blipMat);
        blip1.position.set(0.65, 0.5, 0);
        group.add(blip1);

        const blip2 = new T.Mesh(blipGeo, blipMat);
        blip2.position.set(-0.7, -0.4, 0);
        group.add(blip2);

        let sweepAngle = 0;
        const animate = () => {
          if (disposed) return;
          sweepAngle -= 0.045;
          sweep.rotation.z = sweepAngle;
          group.rotation.x = 0.35;
          group.rotation.y = Math.sin(Date.now() * 0.001) * 0.2;
          renderer.render(scene, camera);
          animId = requestAnimationFrame(animate);
        };
        animate();
      } else {
        // AI Core: Holographic Rotating Icosahedron
        const icoGeo = new T.IcosahedronGeometry(1.15, 1);
        const icoMat = new T.MeshBasicMaterial({
          color: 0x7de0e2,
          wireframe: true,
          transparent: true,
          opacity: 0.75,
        });
        const ico = new T.Mesh(icoGeo, icoMat);
        group.add(ico);

        // Core Glowing Center
        const coreGeo = new T.OctahedronGeometry(0.5, 0);
        const coreMat = new T.MeshStandardMaterial({
          color: 0xd6f66f,
          emissive: 0xd6f66f,
          emissiveIntensity: 0.8,
          wireframe: false,
        });
        const core = new T.Mesh(coreGeo, coreMat);
        group.add(core);

        const light = new T.PointLight(0xd6f66f, 2, 10);
        light.position.set(0, 0, 2);
        scene.add(light);

        const animate = () => {
          if (disposed) return;
          ico.rotation.x += 0.012;
          ico.rotation.y += 0.018;
          core.rotation.x -= 0.02;
          core.rotation.y -= 0.025;
          renderer.render(scene, camera);
          animId = requestAnimationFrame(animate);
        };
        animate();
      }

      // Handle Resize
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const w = entry.contentRect.width || 120;
          const h = entry.contentRect.height || 120;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      });
      resizeObserver.observe(el);

      return () => {
        disposed = true;
        cancelAnimationFrame(animId);
        resizeObserver.disconnect();
        renderer.dispose();
      };
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(animId);
    };
  }, [mounted, variant]);

  return (
    <div
      ref={containerRef}
      className={`luban-micro-canvas ${className}`}
      aria-hidden="true"
    />
  );
}
