"use client";
import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function RevealOnScroll({
  children, delay = 0, y = 24, style, className
}: { children: ReactNode; delay?: number; y?: number; style?: React.CSSProperties; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1, y: 0, duration: .7, ease: "power3.out", delay,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [delay, y]);
  return <div ref={ref} style={{ height: "100%", ...style }} className={className}>{children}</div>;
}
