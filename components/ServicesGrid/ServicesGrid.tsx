"use client";
import React from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import styles from "./ServicesGrid.module.css";
import Image from "next/image";

export default function ServicesGrid({
  heading = "I blend creativity with technical expertise",
  eyebrow = "FEATURED PROJECTS",
}) {
  return (
    <section className={styles.section} id="services">
      <div className="container-xxl">
        <RevealOnScroll>
          <div className={styles.head}>
            <span className={styles.yellowEyebrow}>{eyebrow}</span>
            <h2 className={styles.whiteHeading}>{heading}</h2>
            <p className={styles.mutedLead}>
              Discover professional cloud hosting, network integrations, cyber defense, and managed helpdesk contracts designed to run your business flawlessly.
            </p>
          </div>
        </RevealOnScroll>

        <div className={styles.grid}>
          {/* Card 1: Cloud Services */}
          <Link href="/services/cloud" className={`${styles.card} ${styles.cardDouble}`}>
            <RevealOnScroll delay={0.05} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <span className={styles.category}>WEBSITE DESIGN</span>
              <h3 className={styles.titleLarge}>Cloud Solutions Infrastructure</h3>
              <p className={styles.subtitle}>Scalable migration, auto backups, and enterprise database hosting.</p>
              <div className={styles.imageWrapper}>
                 <img src="/cloud_laptop.png" alt="Cloud Infrastructure mockup" />
              </div>
            </RevealOnScroll>
          </Link>

          {/* Card 2: Cyber Security */}
          <Link href="/services/security" className={`${styles.card} ${styles.cardDouble}`}>
            <RevealOnScroll delay={0.1} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <span className={styles.category}>WEBSITE DESIGN</span>
              <h3 className={styles.titleLarge}>Zero-Trust Defense Systems</h3>
              <p className={styles.subtitle}>Threat management, endpoint monitoring, and access controls.</p>
              <div className={styles.imageWrapper}>
                 <img src="/security_laptop.png" alt="Cybersecurity Dashboard mockup" />
              </div>
            </RevealOnScroll>
          </Link>

          {/* Card 3: Network Services */}
          <Link href="/services/network" className={`${styles.card} ${styles.cardTriple}`}>
            <RevealOnScroll delay={0.15} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <span className={styles.category}>NETWORK DESIGN</span>
              <h3 className={styles.titleSmall}>SD-WAN & Fiber Setup</h3>
              <p className={styles.subtitle}>High-speed routing, office VPN lines, and wireless heatmaps.</p>
              <div className={styles.imageWrapper}>
                 <img src="/network_laptop.png" alt="Network Dashboard mockup" />
              </div>
            </RevealOnScroll>
          </Link>

          {/* Card 4: IT Support & AMC */}
          <Link href="/services/it-support" className={`${styles.card} ${styles.cardTriple}`}>
            <RevealOnScroll delay={0.2} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <span className={styles.category}>MOBILE DESIGN</span>
              <h3 className={styles.titleSmall}>24/7 Support & Helpdesk</h3>
              <p className={styles.subtitle}>Annual maintenance contracts and rapid dispatch engineers.</p>
              <div className={styles.imageWrapper}>
                 <img src="/support_mobile.png" alt="Support Chat App mockup" />
              </div>
            </RevealOnScroll>
          </Link>

          {/* Card 5: View All Services */}
          <div className={styles.cardTriple}>
            <RevealOnScroll delay={0.25} style={{ height: "100%" }}>
              <Link href="/services" className={styles.yellowCard}>
                <div className={styles.yellowInner}>
                  <span>View all projects</span>
                  <div className={styles.arrowIcon}>
                    <i className="bi bi-arrow-up-right" />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
