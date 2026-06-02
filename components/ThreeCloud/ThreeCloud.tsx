"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import styles from "./ThreeCloud.module.css";

function Nodes() {
  const ref = useRef<THREE.Group>(null);
  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    const N = 14;
    for (let i = 0; i < N; i++) {
      const t = i / N;
      const r = 2.4;
      arr.push([Math.cos(t * Math.PI * 2) * r, Math.sin(t * Math.PI * 4) * 0.6, Math.sin(t * Math.PI * 2) * r]);
    }
    return arr;
  }, []);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.15; });
  return (
    <group ref={ref}>
      {positions.map((p, i) => (
        <Float key={i} speed={1.2} floatIntensity={0.6} rotationIntensity={0.4}>
          <mesh position={p}>
            <icosahedronGeometry args={[0.18, 0]} />
            <meshStandardMaterial color="#1e6bff" emissive="#00d4ff" emissiveIntensity={0.4} roughness={0.3} metalness={0.6} />
          </mesh>
        </Float>
      ))}
      {positions.map((p, i) => {
        const next = positions[(i + 1) % positions.length];
        const geom = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(...p), new THREE.Vector3(...next),
        ]);
        return (
          <line key={`l${i}`}>
            <primitive object={geom} attach="geometry" />
            <lineBasicMaterial color="#5aa0ff" transparent opacity={0.35} />
          </line>
        );
      })}
    </group>
  );
}

function Starfield() {
  const points = useMemo(() => {
    const N = 600;
    const arr = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  }, []);
  return (
    <Points positions={points} stride={3}>
      <PointMaterial color="#1e6bff" size={0.02} sizeAttenuation transparent opacity={0.6} />
    </Points>
  );
}

export default function ThreeCloud() {
  return (
    <section className={styles.wrap} aria-label="Cloud and network topology visualization">
      <div className="container-xxl">
        <motion.div 
          className={styles.head}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.eyebrowContainer}>
             <i className="bi bi-cloud-network" style={{ color: "var(--brand-500)", fontSize: "1.1rem" }}></i>
             <span className={styles.eyebrowText}>Cloud + Network</span>
          </div>
          <h2 className={styles.title}>An interactive view of your future infrastructure</h2>
          <p className={styles.subtitle}>Distributed cloud, secure network topology, real-time monitoring — visualized.</p>
        </motion.div>
      </div>
      <motion.div 
         className={styles.canvasWrapper}
         initial={{ opacity: 0, scale: 0.95, y: 40 }}
         whileInView={{ opacity: 1, scale: 1, y: 0 }}
         viewport={{ once: true, margin: "-50px" }}
         transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div className={styles.canvas} aria-hidden>
          <Canvas dpr={[1, 1.6]} camera={{ position: [0, 1.4, 6], fov: 55 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1.2} color="#00d4ff" />
            <pointLight position={[-5, -3, -5]} intensity={0.8} color="#1e6bff" />
            <Starfield />
            <Nodes />
          </Canvas>
        </div>
        <div className={styles.canvasOverlay}></div>
      </motion.div>
    </section>
  );
}
