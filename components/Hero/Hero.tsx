"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/site";
import styles from "./Hero.module.css";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.eyebrow}`, { y: 20, opacity: 0, duration: .6, ease: "power3.out" });
      gsap.from(`.${styles.title} span`, { y: 40, opacity: 0, duration: .8, stagger: .08, ease: "power3.out", delay: .1 });
      gsap.from(`.${styles.sub}`, { y: 20, opacity: 0, duration: .7, ease: "power3.out", delay: .4 });
      gsap.from(`.${styles.actions} > *`, { y: 18, opacity: 0, duration: .6, stagger: .12, ease: "power3.out", delay: .55 });
      gsap.from(`.${styles.badge}`, { scale: .9, opacity: 0, duration: .6, stagger: .1, ease: "back.out(1.7)", delay: .75 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className={styles.hero}>
      <div className={styles.orb} aria-hidden />
      <div className={styles.orb2} aria-hidden />
      <div className={`container-xxl ${styles.inner}`}>
        <span className={`eyebrow ${styles.eyebrow}`}>Enterprise IT • {site.city}</span>
        <h1 className={styles.title}>
          <span>Technology</span> <span>That</span> <span>Powers</span> <span>Your</span><br />
          <span className={styles.grad}>Business Growth</span>
        </h1>
        <p className={`lead ${styles.sub}`}>
          Comprehensive IT solutions in Hyderabad, Miyapur & surrounding areas —
          cloud, security, networking and managed services designed to scale your business.
        </p>
        <div className={styles.actions}>
          <Link href="/contact" className="btn-brand">Get Free IT Consultation</Link>
          <Link href="/services" className="btn-ghost">Explore Services</Link>
        </div>
        <motion.div
          className={styles.badges}
          initial="hidden" animate="show"
          variants={{ show: { transition: { staggerChildren: .08, delayChildren: .9 } } }}
        >
          {[
            { i: "shield-check", t: "ISO-ready Security" },
            { i: "clock-history", t: "24/7 Support" },
            { i: "graph-up-arrow", t: "Scalable Cloud" },
          ].map(b => (
            <motion.span key={b.t} className={styles.badge}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
              <i className={`bi bi-${b.i}`} /> {b.t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
