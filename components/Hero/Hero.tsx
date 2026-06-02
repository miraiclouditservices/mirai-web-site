"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { site } from "@/lib/site";
import styles from "./Hero.module.css";

const InteractiveHeroBg = dynamic(() => import("./InteractiveHeroBg"), { ssr: false });

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className={styles.hero}>
      <InteractiveHeroBg />
      <div className={styles.orb} aria-hidden />
      <div className={styles.orb2} aria-hidden />
      
      <motion.div 
        className={`container-xxl ${styles.inner}`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.span variants={itemVariants} className={`eyebrow ${styles.eyebrow}`}>
          Enterprise IT • {site.city}
        </motion.span>
        
        <motion.h1 variants={itemVariants} className={styles.title}>
          Technology That Powers Your<br />
          <span className={styles.grad}>Business Growth</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className={`lead ${styles.sub}`}>
          Comprehensive IT solutions in Hyderabad, Miyapur & surrounding areas —
          cloud, security, networking and managed services designed to scale your business.
        </motion.p>
        
        <motion.div variants={itemVariants} className={styles.actions}>
          <Link href="/contact" className={`btn-brand ${styles.heroBtnPrimary}`}>Get Free IT Consultation</Link>
          <Link href="/services" className={`btn-ghost ${styles.heroBtnSecondary}`}>Explore Services</Link>
        </motion.div>
        
        <motion.div variants={itemVariants} className={styles.badges}>
          {[
            { i: "shield-check", t: "ISO-ready Security" },
            { i: "clock-history", t: "24/7 Support" },
            { i: "graph-up-arrow", t: "Scalable Cloud" },
          ].map(b => (
            <span key={b.t} className={styles.badge}>
              <i className={`bi bi-${b.i}`} /> {b.t}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
