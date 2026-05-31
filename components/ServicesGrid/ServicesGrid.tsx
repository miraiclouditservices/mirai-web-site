"use client";
import React from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import styles from "./ServicesGrid.module.css";

export default function ServicesGrid({
  heading = "Enterprise Solutions Built for Unmatched Performance",
  eyebrow = "Featured Services",
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
            <RevealOnScroll delay={0.05}>
              <span className={styles.category}>CLOUD SOLUTIONS</span>
              <h3 className={styles.titleLarge}>AWS & Azure Managed Cloud</h3>
              <p className={styles.subtitle}>Scalable migration, auto backups, and enterprise database hosting.</p>
              <div className={`${styles.mockupStage} ${styles.stageTop}`}>
                <div className={styles.laptopFrame}>
                  <div className={styles.laptopScreen}>
                    <div className={styles.cloudDashboard}>
                      <div className={styles.dashHeader}>
                        <div className={styles.dashWindowControls}>
                          <span style={{ background: "#ef4444" }} />
                          <span style={{ background: "#eab308" }} />
                          <span style={{ background: "#22c55e" }} />
                        </div>
                        <div className={styles.dashTab}>cloud_cluster_prod</div>
                      </div>
                      <div className={styles.dashContainer}>
                        <div className={styles.dashSidebar}>
                          <i className="bi bi-speedometer2" style={{ color: "#38bdf8" }} />
                          <i className="bi bi-hdd-network" />
                          <i className="bi bi-shield-check" />
                          <i className="bi bi-gear" />
                        </div>
                        <div className={styles.dashMain}>
                          <div className={styles.dashMetricRow}>
                            <div className={styles.dashMetricCard}>
                              <span>CPU Usage</span>
                              <strong>42.8%</strong>
                            </div>
                            <div className={styles.dashMetricCard}>
                              <span>Memory</span>
                              <strong>12.4 GB</strong>
                            </div>
                          </div>
                          <div className={styles.cloudSyncBarContainer}>
                            <div className={styles.cloudSyncBar}>
                              <span style={{ width: "74%" }} />
                            </div>
                            <div className={styles.cloudSyncLabel}>
                              <i className="bi bi-cloud-arrow-up" /> Database replication: 74% sync
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.laptopBase} />
                </div>
              </div>
            </RevealOnScroll>
          </Link>

          {/* Card 2: Cyber Security */}
          <Link href="/services/security" className={`${styles.card} ${styles.cardDouble}`}>
            <RevealOnScroll delay={0.1}>
              <span className={styles.category}>CYBERSECURITY</span>
              <h3 className={styles.titleLarge}>Zero-Trust Defense Systems</h3>
              <p className={styles.subtitle}>Threat management, endpoint monitoring, and access controls.</p>
              <div className={`${styles.mockupStage} ${styles.stageTop}`}>
                <div className={styles.tiltedLaptopFrame}>
                  <div className={styles.laptopScreen} style={{ background: "#090d16" }}>
                    <div className={styles.securityDashboard}>
                      <div className={styles.securityHeader}>
                        <i className="bi bi-shield-lock-fill" />
                        <span>MIRAI SYSTEM PROTECTION</span>
                      </div>
                      <div className={styles.securityScanner}>
                        <div className={styles.radarLine} />
                        <span className={styles.scannerText}>ACTIVE SCANNING...</span>
                      </div>
                      <div className={styles.securityFooterBadge}>
                        <i className="bi bi-check-circle-fill" /> THREAT SHIELD ACTIVE
                      </div>
                    </div>
                  </div>
                  <div className={styles.laptopBase} />
                </div>
              </div>
            </RevealOnScroll>
          </Link>

          {/* Card 3: Network Services */}
          <Link href="/services/network" className={`${styles.card} ${styles.cardTriple}`}>
            <RevealOnScroll delay={0.15}>
              <span className={styles.category}>NETWORK SERVICES</span>
              <h3 className={styles.titleSmall}>SD-WAN & Fiber Setup</h3>
              <p className={styles.subtitle}>High-speed routing, office VPN lines, and wireless heatmaps.</p>
              <div className={`${styles.mockupStage} ${styles.stageBottom}`}>
                <div className={styles.tiltedLaptopFrame2}>
                  <div className={styles.laptopScreen} style={{ background: "#051114" }}>
                    <div className={styles.networkDashboard}>
                      <div className={styles.netHeader}>
                        <i className="bi bi-diagram-3-fill" />
                        <span>WAN OVERVIEW</span>
                      </div>
                      <div className={styles.speedometerContainer}>
                        <i className="bi bi-speedometer" />
                        <div className={styles.speedText}>
                          <strong>984 Mbps</strong>
                          <span>Fiber Up-Link</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.laptopBase} />
                </div>
              </div>
            </RevealOnScroll>
          </Link>

          {/* Card 4: IT Support & AMC */}
          <Link href="/services/it-support" className={`${styles.card} ${styles.cardTriple}`}>
            <RevealOnScroll delay={0.2}>
              <span className={styles.category}>MANAGED IT SUPPORT</span>
              <h3 className={styles.titleSmall}>24/7 Support & Helpdesk</h3>
              <p className={styles.subtitle}>Annual maintenance contracts and rapid dispatch engineers.</p>
              <div className={`${styles.mockupStage} ${styles.stageBottom}`}>
                <div className={styles.phoneFrame}>
                  <div className={styles.phoneScreen}>
                    <div className={styles.phoneHeader}>
                      <span className={styles.phoneCamera} />
                    </div>
                    <div className={styles.phoneBody}>
                      <div className={styles.phoneAppHeader}>
                        <i className="bi bi-chat-left-dots-fill" />
                        <span>Mirai Live Chat</span>
                      </div>
                      <div className={styles.chatArea}>
                        <div className={styles.chatBubble}>
                          <span>Server lag in office?</span>
                        </div>
                        <div className={`${styles.chatBubble} ${styles.chatAgent}`}>
                          <span>On-site engineer sent.</span>
                        </div>
                      </div>
                      <div className={styles.phoneInputBar}>
                        <span className={styles.inputPlaceholder}>Type message...</span>
                        <i className="bi bi-send-fill" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </Link>

          {/* Card 5: View All Services (Symmetric layout aligned to bottom) */}
          <div className={`${styles.card} ${styles.cardTriple}`}>
            <RevealOnScroll delay={0.25}>
              <div className={styles.emptyHeader} />
              <Link href="/services" className={styles.yellowCard}>
                <div className={styles.yellowInner}>
                  <span>Explore all services</span>
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
