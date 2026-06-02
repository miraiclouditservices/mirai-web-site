"use client";
import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import styles from "./network.module.css";

export default function NetworkServicePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const servicesList = [
    {
      title: "LAN/WAN Infrastructure Design & Deployment",
      desc: "Custom LAN/WAN topologies designed for optimum throughput, low latency, and ease of expansion.",
      bullets: [
        "Structured fiber & copper cabling",
        "Switching & routing architecture",
        "Core network optimization",
        "Redundant path design"
      ],
      icon: "diagram-3"
    },
    {
      title: "Secure VPN & Remote Access",
      desc: "Securely connect branch offices and remote workers with enterprise-grade encrypted VPNs.",
      bullets: [
        "Site-to-site IPsec VPNs",
        "SSL VPNs for remote workers",
        "Multi-factor authentication (MFA)",
        "Zero Trust network access (ZTNA)"
      ],
      icon: "shield-lock"
    },
    {
      title: "Enterprise Wireless Solutions",
      desc: "High-density office and campus-wide Wi-Fi networks designed for seamless roaming.",
      bullets: [
        "RF site surveys & heatmaps",
        "High-capacity Access Points (APs)",
        "Guest portal & onboarding",
        "Seamless roaming protocols"
      ],
      icon: "wifi"
    },
    {
      title: "Firewall & Network Security",
      desc: "Protect your network perimeter from intrusions, malware, and unauthorized access.",
      bullets: [
        "Next-Gen Firewall (NGFW) setup",
        "Intrusion Prevention Systems (IPS)",
        "Web filtering & application control",
        "Regular security patch updates"
      ],
      icon: "shield-shaded"
    },
    {
      title: "Network Monitoring & AMC",
      desc: "Ensure maximum uptime with proactive network health tracking and rapid incident response.",
      bullets: [
        "24/7 NOC monitoring",
        "Bandwidth usage analysis",
        "Hardware maintenance AMC",
        "On-site troubleshooting support"
      ],
      icon: "activity"
    },
    {
      title: "SD-WAN & Cloud Connectivity",
      desc: "Optimize cloud access and branch-to-branch communications with software-defined networking.",
      bullets: [
        "SD-WAN setup & deployment",
        "Cloud direct connect lines",
        "Dynamic path selection",
        "Reduced MPLS costs"
      ],
      icon: "cloud"
    }
  ];

  const faqs = [
    {
      q: "Which firewall brands do you configure?",
      a: "We deploy and manage Fortinet, Sophos, SonicWall, and Cisco firewalls, custom-fit for your budget and performance requirements."
    },
    {
      q: "Can you support remote site connectivity?",
      a: "Yes, we set up secure site-to-site IPsec VPNs and SD-WAN networks to connect multiple branches securely with unified routing policies."
    },
    {
      q: "Do you offer annual maintenance contracts (AMC)?",
      a: "Yes, we provide comprehensive and non-comprehensive Network AMC packages with defined SLA turnaround times and proactive support."
    },
    {
      q: "How do you guarantee wireless coverage?",
      a: "We conduct professional wireless site surveys and heatmap analysis to ensure optimal placement of access points without signal drops or dead zones."
    }
  ];

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Network Services in Hyderabad",
    description: "Secure, High-Speed & Enterprise LAN/WAN/VPN Networking Solutions in Hyderabad.",
    provider: { "@type": "Organization", name: "Mirai Cloud", telephone: "+91 9100218218" },
    areaServed: "Hyderabad, India"
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container-xxl ${styles.heroContentWrapper}`}>
          <div className={styles.heroBreadcrumbs}>
            <Breadcrumbs items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Network Services" },
            ]} />
          </div>

          <div className={styles.heroGrid}>
            <RevealOnScroll>
              <div className={styles.heroBadge}>
                <span className={styles.heroDot} />
                <span className={styles.heroBadgeText}>Hyderabad - Miyapur - Pan-India</span>
              </div>
              <h1 className={styles.heroTitle}>
                Network Services
              </h1>
              <p className={styles.heroLead}>
                Establish a robust network infrastructure across Hyderabad, Miyapur, and India. We deliver LAN/WAN deployment, secure VPN tunnels, enterprise Wi-Fi, and 24/7 proactive monitoring.
              </p>

              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.heroBtnPrimary}>
                  Get Free Network Consultation &rarr;
                </Link>
                <a href="tel:+919100218218" className={styles.heroBtnSecondary}>
                  <i className="bi bi-telephone" /> +91 9100218218
                </a>
              </div>

              <div className={styles.heroTrust}>
                <span className={styles.trustItem}>
                  <i className="bi bi-check" /> 99.99% network uptime
                </span>
                <span className={styles.trustItem}>
                  <i className="bi bi-check" /> Zero-packet-loss assurance
                </span>
                <span className={styles.trustItem}>
                  <i className="bi bi-check" /> 24/7 managed NOC operations
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div className={styles.heroCard}>
                <div className={styles.cardBadge}>
                  <span className={styles.cardBadgeDot} />
                  <span>NOC Status: Active</span>
                </div>
                
                <div className={styles.cardGraphic}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/network-topology.png" alt="Network Topology and Routers Illustration" />
                </div>

                <div className={styles.cardStats}>
                  <div className={styles.cardStatCol}>
                    <span className={styles.cardStatLabel}>Latency</span>
                    <span className={styles.cardStatVal}>&lt;2ms</span>
                  </div>
                  <div className={styles.cardStatCol}>
                    <span className={styles.cardStatLabel}>Bandwidth</span>
                    <span className={styles.cardStatVal}>10G</span>
                  </div>
                  <div className={styles.cardStatCol}>
                    <span className={styles.cardStatLabel}>Packet Loss</span>
                    <span className={styles.cardStatVal}>0%</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container-xxl">
          <div className={styles.sectionHead}>
            <span className={styles.infraEyebrow}>OUR NETWORK SERVICES</span>
            <h2>Everything you need for enterprise-grade networking.</h2>
            <p>From copper/fiber cabling to secure VPN tunnels and central management, our network engineering team delivers seamless operations.</p>
          </div>

          <div className={styles.bentoGrid}>
            {servicesList.map((service, index) => (
              <RevealOnScroll key={index} delay={index * 0.05}>
                <div className={styles.bentoCard}>
                  <div className={styles.bentoIcon}>
                    <i className={`bi bi-${service.icon}`} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ul className={styles.bentoBullets}>
                    {service.bullets.map((bullet, bIndex) => (
                      <li key={bIndex}>
                        <i className="bi bi-check-circle" /> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section" style={{ background: "var(--muted)" }}>
        <div className="container-xxl">
          <div className={styles.expertHeaderGrid}>
            <RevealOnScroll>
              <span className={styles.infraEyebrow}>OUR EXPERTISE</span>
              <h2 className={styles.expertSectionTitle}>
                A senior network team delivering performance, security, and reliability.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className={styles.expertSectionLead}>
                We work across diverse routing, switching, and firewall environments — designing, deploying, and auditing network systems following global Cisco and ITIL standards.
              </p>
            </RevealOnScroll>
          </div>

          <div className={styles.expertMainGrid}>
            <RevealOnScroll>
              <div className={styles.expertGraphicCard}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/network-expert.png" alt="Server racks switches fiber cabling illustration" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div className={styles.expertGridBlock}>
                <div className={styles.expertCell}>
                  <i className="bi bi-globe" />
                  <h4>Network Infrastructure</h4>
                  <span>Cisco · Aruba · Juniper</span>
                </div>
                <div className={styles.expertCell}>
                  <i className="bi bi-arrow-right" />
                  <h4>Migration & Modernization</h4>
                  <span>Zero-downtime cutovers</span>
                </div>
                <div className={styles.expertCell}>
                  <i className="bi bi-shield" />
                  <h4>Security & Compliance</h4>
                  <span>ISO · NIST · Threat Intel</span>
                </div>
                <div className={styles.expertCell}>
                  <i className="bi bi-cpu" />
                  <h4>SD-WAN & Automation</h4>
                  <span>Ansible · Cisco DNA</span>
                </div>
                <div className={styles.expertCell}>
                  <i className="bi bi-stars" />
                  <h4>High-Density Wireless</h4>
                  <span>Wi-Fi 6 · Campus RF</span>
                </div>
                <div className={styles.expertCell}>
                  <i className="bi bi-lock" />
                  <h4>24/7 Managed NOC</h4>
                  <span>Proactive monitoring</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Infrastructure Section */}
      <section className={styles.infraSection}>
        <div className="container-xxl">
          <RevealOnScroll>
            <div className={styles.infraBanner}>
              <div className={styles.infraOverlay}>
                <span className={styles.infraEyebrow}>Enterprise-Grade Infrastructure</span>
                <h2 className={styles.infraTitle}>Carrier-neutral paths. High-speed backbones. Zero compromise.</h2>
                <p className={styles.infraText}>
                  Our network deployments use enterprise Cisco, Sophos, and Aruba hardware with geo-redundant links and automated failovers.
                </p>

                <div className={styles.infraStatsRow}>
                  <div className={styles.infraStatCol}>
                    <span className={styles.infraStatVal}>99.99%</span>
                    <span className={styles.infraStatLabel}>Uptime SLA</span>
                  </div>
                  <div className={styles.infraStatCol}>
                    <span className={styles.infraStatVal}>&lt;2ms</span>
                    <span className={styles.infraStatLabel}>Local Latency</span>
                  </div>
                  <div className={styles.infraStatCol}>
                    <span className={styles.infraStatVal}>&lt;15min</span>
                    <span className={styles.infraStatLabel}>NOC Response</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container-xxl">
          <div className={styles.sectionHead}>
            <span className={styles.infraEyebrow}>FAQ SECTION</span>
            <h2>Frequently Asked Questions</h2>
            <p>Clear, direct answers about our network integrations and routing policies.</p>
          </div>

          <div className={styles.faqWrapper}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqCard} onClick={() => toggleFaq(index)}>
                <div className={styles.faqHeader}>
                  <h3>{faq.q}</h3>
                  <i className={`bi bi-chevron-${activeFaq === index ? "up" : "down"}`} />
                </div>
                <div className={`${styles.faqBody} ${activeFaq === index ? styles.faqOpen : ""}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className={styles.bottomCtaSection}>
        <div className="container-xxl">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaBadge}>
              <span>🚀 Ready to upgrade your business network?</span>
            </div>
            <h2>Get a Free Network Infrastructure Assessment in Hyderabad</h2>
            <p>
              Talk to a senior network engineer. No obligation — just a clear roadmap for your network expansion and security.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtnPrimary}>
                Book Free Consultation &rarr;
              </Link>
              <a href="tel:+919100218218" className={styles.ctaBtnSecondary}>
                <i className="bi bi-telephone" /> +91 9100218218
              </a>
            </div>
          </div>
        </div>
      </section>

      <Script id="ld-service-network" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
