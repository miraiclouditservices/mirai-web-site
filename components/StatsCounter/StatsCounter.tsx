"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StatsCounter.module.css";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 250, suffix: "+", label: "Projects delivered" },
  { value: 99.9, suffix: "%", label: "Uptime guarantee", decimals: 1 },
  { value: 24, suffix: "/7", label: "Support coverage" },
  { value: 15, suffix: "+", label: "Industries served" },
];

export default function StatsCounter() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = root.current?.querySelectorAll<HTMLElement>("[data-counter]");
      els?.forEach(el => {
        const end = parseFloat(el.dataset.counter || "0");
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end, duration: 2, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => { el.textContent = obj.v.toFixed(decimals); },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.wrap} ref={root}>
      <div className="container-xxl">
        <div className={styles.grid}>
          {stats.map(s => (
            <div key={s.label} className={styles.item}>
              <div className={styles.number}>
                <span data-counter={s.value} data-decimals={s.decimals || 0}>0</span>
                <em>{s.suffix}</em>
              </div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
