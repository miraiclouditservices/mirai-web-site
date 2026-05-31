"use client";
import React from "react";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import styles from "./FeatureGrid.module.css";

const simpleCells = [
  // Row 1 (Columns 2 to 9 centered)
  { name: "Cloud Backup", icon: "cloud-arrow-up", col: 2, row: 1 },
  { name: "Firewall Setup", icon: "shield-slash", col: 3, row: 1 },
  { name: "VPN Access", icon: "key", col: 4, row: 1 },
  { name: "24/7 Monitor", icon: "clock-history", col: 5, row: 1 },
  { name: "CCTV Security", icon: "camera-video", col: 6, row: 1 },
  { name: "Server Rack", icon: "hdd-stack", col: 7, row: 1 },
  { name: "Wi-Fi Heatmaps", icon: "wifi", col: 8, row: 1 },
  { name: "VoIP Phone", icon: "telephone", col: 9, row: 1 },

  // Row 2
  // Left Side (Col 1, 2, 3)
  { name: "AMC Support", icon: "headset", col: 1, row: 2 },
  { name: "Workstations", icon: "pc-display", col: 2, row: 2 },
  { name: "Web Hosting", icon: "globe", col: 3, row: 2 },
  // Right Side (Col 8, 9, 10)
  { name: "Office 365", icon: "box-seam", col: 8, row: 2 },
  { name: "Threat Intel", icon: "bug", col: 9, row: 2 },
  { name: "Fiber Network", icon: "lightning", col: 10, row: 2 },

  // Row 3
  // Left Side
  { name: "Access Control", icon: "fingerprint", col: 1, row: 3 },
  { name: "Email Hosting", icon: "envelope-at", col: 2, row: 3 },
  { name: "Linux Servers", icon: "terminal", col: 3, row: 3 },
  // Right Side
  { name: "Database Admin", icon: "database", col: 8, row: 3 },
  { name: "Disaster Recovery", icon: "shield-fill-exclamation", col: 9, row: 3 },
  { name: "QA Testing", icon: "clipboard2-check", col: 10, row: 3 },

  // Row 4
  // Left Side
  { name: "MFA Security", icon: "shield-lock", col: 1, row: 4 },
  { name: "CRM Integration", icon: "shuffle", col: 2, row: 4 },
  { name: "Cloud Storage", icon: "cloud-check", col: 3, row: 4 },
  // Right Side
  { name: "Network Switch", icon: "diagram-3", col: 8, row: 4 },
  { name: "DNS Security", icon: "globe", col: 9, row: 4 },
  { name: "Mobile Development", icon: "phone", col: 10, row: 4 },

  // Row 5
  // Left Side
  { name: "NAS Storage", icon: "device-hdd", col: 1, row: 5 },
  { name: "UPS Backup", icon: "lightning-charge", col: 2, row: 5 },
  { name: "IT Consulting", icon: "briefcase", col: 3, row: 5 },
  // Right Side
  { name: "Virtualization", icon: "layers", col: 8, row: 5 },
  { name: "Active Directory", icon: "person-workspace", col: 9, row: 5 },
  { name: "Figma Design", icon: "figma", col: 10, row: 5 },

  // Row 6 (Centered along the bottom)
  { name: "Asset Manage", icon: "tags", col: 3, row: 6 },
  { name: "Vulnerability Scan", icon: "search", col: 4, row: 6 },
  { name: "SD-WAN", icon: "router", col: 5, row: 6 },
  { name: "Helpdesk", icon: "question-circle", col: 6, row: 6 },
  { name: "Remote Support", icon: "chat-dots", col: 7, row: 6 },
  { name: "Mobile Alerts", icon: "bell", col: 8, row: 6 },
];

export default function FeatureGrid() {
  // Generate background lines for 10 cols x 6 rows checkerboard layout
  const bgCells = [];
  for (let r = 1; r <= 6; r++) {
    for (let c = 1; c <= 10; c++) {
      bgCells.push({ r, c });
    }
  }

  return (
    <section className="section" id="features" style={{ background: "#ffffff", padding: "100px 0" }}>
      <div className="container-xxl">
        <RevealOnScroll>
          <div className={styles.head}>
            <span className="eyebrow">Interactive Ecosystem</span>
            <h2>Operate around its people, not scattered tools.</h2>
            <p className="lead">
              A unified digital ecosystem containing everything you need to run, manage and grow your enterprise.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className={styles.gridContainer}>
            {/* 1. Background Grid Border Lines */}
            <div className={styles.bgGrid}>
              {bgCells.map((cell, idx) => (
                <div key={idx} className={styles.bgCell} />
              ))}
            </div>

            {/* 2. Interactive Simple Cells */}
            <div className={styles.fgGrid}>
              {simpleCells.map(cell => (
                <div
                  key={cell.name}
                  className={styles.simpleTile}
                  style={{
                    gridColumn: cell.col,
                    gridRow: cell.row,
                  }}
                >
                  <i className={`bi bi-${cell.icon} ${styles.tileIcon}`} />
                  <span className={styles.tileName}>{cell.name}</span>
                </div>
              ))}

              {/* 3. Big Central 2x2 Feature Modules (Mirai Cloud Project Services) */}
              {/* Module A: cloud. */}
              <div className={`${styles.bigBlock} ${styles.blockGather}`}>
                <div className={styles.mockCloudCard}>
                  <i className="bi bi-cloud-arrow-up" />
                  <div className={styles.cloudProgress}>
                    <div className={styles.cloudBar} style={{ width: "65%" }} />
                  </div>
                  <span className={styles.cloudText}>Syncing Data...</span>
                </div>
                <div className={styles.blockFooter}>
                  <strong>cloud.</strong>
                  <span>MIRAI CLOUD</span>
                </div>
              </div>

              {/* Module B: network. */}
              <div className={`${styles.bigBlock} ${styles.blockVote}`}>
                <div className={styles.mockNetworkCard}>
                  <div className={styles.networkNodes}>
                    <i className="bi bi-pc-display" />
                    <span className={styles.netLine} />
                    <i className="bi bi-router" />
                    <span className={styles.netLine} />
                    <i className="bi bi-globe" />
                  </div>
                  <span className={styles.netStatus}><span className={styles.pulseDot} /> Connected</span>
                </div>
                <div className={styles.blockFooter}>
                  <strong>network.</strong>
                  <span>MIRAI NETWORK</span>
                </div>
              </div>

              {/* Module C: web dev. */}
              <div className={`${styles.bigBlock} ${styles.blockLearn}`}>
                <div className={styles.mockWebCard}>
                  <div className={styles.webHeader}>
                    <span className={styles.webDot} style={{ background: "#ef4444" }} />
                    <span className={styles.webDot} style={{ background: "#eab308" }} />
                    <span className={styles.webDot} style={{ background: "#22c55e" }} />
                  </div>
                  <div className={styles.webBody}>
                    <span>&lt;/&gt;</span>
                  </div>
                </div>
                <div className={styles.blockFooter}>
                  <strong>web dev.</strong>
                  <span>MIRAI WEB DEV</span>
                </div>
              </div>

              {/* Module D: support. */}
              <div className={`${styles.bigBlock} ${styles.blockSite}`}>
                <div className={styles.mockSupportCard}>
                  <div className={styles.chatBubble}>
                    <i className="bi bi-chat-text" style={{ color: "#3b82f6" }} />
                    <span>Need support?</span>
                  </div>
                  <div className={`${styles.chatBubble} ${styles.chatAgent}`}>
                    <i className="bi bi-headset" style={{ color: "#1abc9c" }} />
                    <span>Agent Connected</span>
                  </div>
                </div>
                <div className={styles.blockFooter}>
                  <strong>support.</strong>
                  <span>MIRAI SUPPORT</span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
