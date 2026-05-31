"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCloudBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 300;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Create soft cloud particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      // Soft fading blue-white cloud puff
      gradient.addColorStop(0, "rgba(234, 242, 255, 0.4)");
      gradient.addColorStop(0.2, "rgba(180, 210, 255, 0.25)");
      gradient.addColorStop(0.5, "rgba(90, 160, 255, 0.08)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);

    // 4. Parallax Layers Setup
    // Layer 1: Background (slow, small, many)
    // Layer 2: Midground (medium, average speed)
    // Layer 3: Foreground (fast, large, few)
    const layers = [
      { count: 45, size: 140, speed: 0.06, z: -100, opacity: 0.75 },
      { count: 25, size: 220, speed: 0.12, z: 0, opacity: 0.65 },
      { count: 12, size: 340, speed: 0.22, z: 100, opacity: 0.4 }
    ];

    const cloudGroups: {
      points: THREE.Points;
      geometry: THREE.BufferGeometry;
      speed: number;
      initialY: Float32Array;
      phases: Float32Array;
      size: number;
    }[] = [];

    layers.forEach((layer) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(layer.count * 3);
      const initialY = new Float32Array(layer.count);
      const phases = new Float32Array(layer.count);

      for (let i = 0; i < layer.count; i++) {
        // Distribute cloud puffs across the screen width, clustered in a horizontal band
        const x = (Math.random() - 0.5) * (width + 400);
        const y = (Math.random() - 0.5) * (height * 0.7);
        const z = layer.z + (Math.random() - 0.5) * 50;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        initialY[i] = y;
        phases[i] = Math.random() * Math.PI * 2; // For smooth vertical bobbing
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        size: layer.size,
        map: texture,
        transparent: true,
        opacity: layer.opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      cloudGroups.push({
        points,
        geometry,
        speed: layer.speed,
        initialY,
        phases,
        size: layer.size
      });
    });

    // 5. Interactive Mouse Parallax Easing
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX - window.innerWidth / 2) * 0.08;
      targetY = (event.clientY - window.innerHeight / 2) * 0.08;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. Animation Loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.005;

      // Easing mouse movement
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Apply subtle mouse camera offset
      camera.position.x = mouseX;
      camera.position.y = -mouseY;
      camera.lookAt(scene.position);

      cloudGroups.forEach((group) => {
        const positionsArr = group.geometry.attributes.position.array as Float32Array;
        const count = positionsArr.length / 3;

        for (let i = 0; i < count; i++) {
          // 1. Slow horizontal wind drift
          positionsArr[i * 3] += group.speed;

          // Wrap around screen boundaries
          const boundaryX = width / 2 + group.size * 0.8;
          if (positionsArr[i * 3] > boundaryX) {
            positionsArr[i * 3] = -boundaryX - 100;
          }

          // 2. Volumetric vertical bobbing
          positionsArr[i * 3 + 1] = group.initialY[i] + Math.sin(time + group.phases[i]) * 8;
        }

        group.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 8. Memory Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      cloudGroups.forEach((group) => {
        group.geometry.dispose();
        (group.points.material as THREE.Material).dispose();
      });
      texture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}
