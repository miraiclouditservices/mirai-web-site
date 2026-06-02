"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function InteractiveHeroBg() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 10;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Particle Data (Antigravity nodes floating upwards)
    const N = 100;
    const particlesData = Array.from({ length: N }, () => {
      const x = (Math.random() - 0.5) * 24;
      const y = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 6;
      const vy = 0.015 + Math.random() * 0.025; // Drift upwards
      const vx = (Math.random() - 0.5) * 0.01;
      const size = 0.06 + Math.random() * 0.08;

      return {
        x,
        y,
        z,
        vx,
        vy,
        size,
        ox: 0,
        oy: 0,
      };
    });

    // Create points geometry
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsPositions = new Float32Array(N * 3);
    const pointsSizes = new Float32Array(N);

    for (let i = 0; i < N; i++) {
      const p = particlesData[i];
      pointsPositions[i * 3] = p.x;
      pointsPositions[i * 3 + 1] = p.y;
      pointsPositions[i * 3 + 2] = p.z;
      pointsSizes[i] = p.size;
    }

    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(pointsPositions, 3));

    // Custom circle texture for soft glowing points
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.3, "rgba(0, 212, 255, 0.8)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.28,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(pointCloud);

    // Connecting lines geometry setup
    const maxConnections = 240;
    const linesGeometry = new THREE.BufferGeometry();
    const linesPositions = new Float32Array(maxConnections * 2 * 3);
    const linesColors = new Float32Array(maxConnections * 2 * 3);

    linesGeometry.setAttribute("position", new THREE.BufferAttribute(linesPositions, 3));
    linesGeometry.setAttribute("color", new THREE.BufferAttribute(linesColors, 3));

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    const connectionLines = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(connectionLines);

    // Background Tech Grid Helper
    const gridHelper = new THREE.GridHelper(30, 24, 0x1e6bff, 0x0f172a);
    gridHelper.position.y = -6.5;
    gridHelper.rotation.x = Math.PI * 0.04;
    scene.add(gridHelper);

    // 5. Mouse tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let hasMoved = false;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;

      const ndcX = (clientX / width) * 2 - 1;
      const ndcY = -(clientY / height) * 2 + 1;

      const aspect = width / height;
      const vh = 2 * Math.tan((60 * Math.PI) / 360) * camera.position.z;
      const vw = vh * aspect;

      mouse.targetX = ndcX * vw * 0.5;
      mouse.targetY = ndcY * vh * 0.5;
      hasMoved = true;
    };

    window.addEventListener("mousemove", onMouseMove);

    // 6. Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse position interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Update particle positions
      const positionsAttr = pointsGeometry.getAttribute("position") as THREE.BufferAttribute;

      for (let i = 0; i < N; i++) {
        const p = particlesData[i];

        // Antigravity drift (rising upwards)
        p.y += p.vy;
        p.x += p.vx;

        // Reset if float out of top bound
        if (p.y > 7.5) {
          p.y = -7.5;
          p.x = (Math.random() - 0.5) * 24;
        }

        // Horizontal micro-drift
        p.vx += (Math.random() - 0.5) * 0.001;
        p.vx = Math.max(-0.015, Math.min(0.015, p.vx));

        // Cursor repulsion
        let pushX = 0;
        let pushY = 0;

        if (hasMoved) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 3.6;

          if (dist < repelRadius) {
            const force = (repelRadius - dist) / repelRadius;
            const angle = Math.atan2(dy, dx);
            pushX = Math.cos(angle) * force * 1.5;
            pushY = Math.sin(angle) * force * 1.2;
          }
        }

        // Apply smooth repulsion decay
        p.ox += (pushX - p.ox) * 0.1;
        p.oy += (pushY - p.oy) * 0.1;

        // Final calculated positions
        const finalX = p.x + p.ox;
        const finalY = p.y + p.oy;

        positionsAttr.setXYZ(i, finalX, finalY, p.z);
      }

      positionsAttr.needsUpdate = true;

      // Draw connection lines between close nodes
      const linePositionsAttr = linesGeometry.getAttribute("position") as THREE.BufferAttribute;
      const lineColorAttr = linesGeometry.getAttribute("color") as THREE.BufferAttribute;
      let lineIndex = 0;

      const colorBlue = new THREE.Color("#1e6bff");
      const colorCyan = new THREE.Color("#00d4ff");

      for (let i = 0; i < N; i++) {
        const pi = particlesData[i];
        const xi = pi.x + pi.ox;
        const yi = pi.y + pi.oy;

        for (let j = i + 1; j < N; j++) {
          const pj = particlesData[j];
          const xj = pj.x + pj.ox;
          const yj = pj.y + pj.oy;

          const dx = xi - xj;
          const dy = yi - yj;
          const dz = pi.z - pj.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          const maxDist = 2.4;

          if (dist < maxDist && lineIndex < maxConnections) {
            const idx = lineIndex * 6;
            const opacity = (1.0 - dist / maxDist) * 0.28;

            // Set positions
            linePositionsAttr.setXYZ(lineIndex * 2, xi, yi, pi.z);
            linePositionsAttr.setXYZ(lineIndex * 2 + 1, xj, yj, pj.z);

            // Set colors with connection fading
            lineColorAttr.setXYZ(lineIndex * 2, colorCyan.r * opacity, colorCyan.g * opacity, colorCyan.b * opacity);
            lineColorAttr.setXYZ(lineIndex * 2 + 1, colorBlue.r * opacity, colorBlue.g * opacity, colorBlue.b * opacity);

            lineIndex++;
          }
        }
      }

      // Clear remaining slots in line geometry buffers
      for (let i = lineIndex; i < maxConnections; i++) {
        linePositionsAttr.setXYZ(i * 2, 0, 0, 0);
        linePositionsAttr.setXYZ(i * 2 + 1, 0, 0, 0);
      }

      linePositionsAttr.needsUpdate = true;
      lineColorAttr.needsUpdate = true;

      // Slowly rotate grid for tech ambient feeling
      gridHelper.rotation.y += 0.0006;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resizing handler
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      texture.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
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
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
