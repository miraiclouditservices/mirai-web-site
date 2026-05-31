"use client";
import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import styles from "./cloud.module.css";
import ThreeCloudBackground from "@/components/ThreeCloudBackground/ThreeCloudBackground";

export default function CloudServicePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const servicesList = [
    {
      title: "Cloud Infrastructure Design & Deployment",
      desc: "Build a secure, scalable, and high-performance cloud environment tailored to your business.",
      bullets: [
        "Cloud architecture planning & deployment",
        "Auto-scaling infrastructure for performance",
        "High availability & disaster-ready systems",
        "Optimized storage & network design"
      ],
      icon: "cpu"
    },
    {
      title: "Data Backup, Disaster Recovery & Replication",
      desc: "Ensure zero data loss and business continuity with enterprise-grade backup solutions.",
      bullets: [
        "Automated cloud backups with versioning",
        "Geo-redundant replication across regions",
        "Disaster recovery planning & failover systems",
        "Business continuity solutions"
      ],
      icon: "shield-fill-check"
    },
    {
      title: "Hybrid & Private Cloud Solutions",
      desc: "Seamlessly integrate on-premises infrastructure with cloud platforms.",
      bullets: [
        "Hybrid cloud architecture",
        "Secure private cloud environments",
        "Real-time data synchronization",
        "Workload portability & flexibility"
      ],
      icon: "device-ssd"
    },
    {
      title: "Cloud Email Hosting Solutions",
      desc: "Professional business email with high security and reliability.",
      bullets: [
        "Microsoft 365 & Google Workspace setup",
        "Custom domain email hosting",
        "Spam protection & email encryption",
        "99.99% uptime guarantee"
      ],
      icon: "envelope-at"
    },
    {
      title: "Cloud Storage & File Sharing",
      desc: "Secure, scalable, and accessible cloud file storage solutions.",
      bullets: [
        "Anywhere access (mobile/web/desktop)",
        "Version control & backup",
        "Role-based access & permissions",
        "Secure file sharing"
      ],
      icon: "cloud-check"
    },
    {
      title: "Cloud Monitoring & Cost Optimization",
      desc: "Maximize performance while reducing costs.",
      bullets: [
        "Real-time cloud monitoring",
        "Performance analytics & optimization",
        "Auto-scaling recommendations",
        "Budget tracking & cost control"
      ],
      icon: "graph-up-arrow"
    }
  ];

  const expertise = [
    { label: "Multi-Cloud Environments", detail: "AWS, Azure, GCP architecture" },
    { label: "Cloud Migration", detail: "Modernization & zero downtime" },
    { label: "Enterprise Security", detail: "Compliance, IAM & encryptions" },
    { label: "DevOps & CI/CD", detail: "Terraform automation & PowerShell" },
    { label: "Cloud-native", detail: "SRE practices & serverless scale" }
  ];

  const faqs = [
    {
      q: "Is cloud computing secure for businesses?",
      a: "Yes, we implement advanced security protocols, IAM role permissions, end-to-end encryption, and compliance measures to ensure your data is fully protected."
    },
    {
      q: "Can you migrate my existing system to the cloud?",
      a: "Yes, we provide seamless cloud migration services. We analyze your workloads and carry out migration with zero downtime for your active users."
    },
    {
      q: "Do you provide 24/7 support?",
      a: "Yes, we offer round-the-clock cloud monitoring, rapid disaster recovery, and proactive helpdesk support services."
    },
    {
      q: "Which cloud platforms do you support?",
      a: "We work directly with AWS (Amazon Web Services), Microsoft Azure, and Google Cloud Platform (GCP)."
    }
  ];

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cloud Services in Hyderabad",
    description: "Secure, Scalable & Cost-Optimized Cloud Computing Solutions in Hyderabad.",
    provider: { "@type": "Organization", name: "Mirai Cloud", telephone: "+91 9100218218" },
    areaServed: "Hyderabad, India"
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <ThreeCloudBackground />
        <div className={`container-xxl ${styles.heroContentWrapper}`}>
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Cloud Services" },
          ]} />

          <div className={styles.heroGrid}>
            <RevealOnScroll>
              <span className={styles.eyebrow}>CLOUD SERVICES</span>
              <h1 className={styles.heroTitle}>
                Cloud Services
              </h1>
              <p className={styles.heroLead}>
                Transform your business with advanced cloud computing services in Hyderabad, Miyapur, and across India. We deliver AWS, Azure, and Google Cloud solutions tailored for performance, security, and growth.
              </p>

              <div className={styles.heroActions}>
                <Link href="/contact" className="btn-brand">Get Free Cloud Consultation</Link>
                <a href="tel:+919100218218" className="btn-ghost">
                  <i className="bi bi-telephone-fill" /> Book Free Assessment
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div className={styles.heroGraphic}>
                <div className={styles.floatingCard}>
                  <i className="bi bi-cloud-check-fill" />
                  <div>
                    <strong>AWS & Azure Active</strong>
                    <span>99.99% Global Uptime</span>
                  </div>
                </div>
                <div className={`${styles.floatingCard} ${styles.floater2}`}>
                  <i className="bi bi-shield-fill-check" style={{ color: "#10b981" }} />
                  <div>
                    <strong>Enterprise Security</strong>
                    <span>ISO & SOC Compliant</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Trust bar */}
          <div className={styles.trustBar}>
            <span><i className="bi bi-check-circle-fill" /> 24/7 Support</span>
            <span><i className="bi bi-check-circle-fill" /> Enterprise Security</span>
            <span><i className="bi bi-check-circle-fill" /> High Availability</span>
            <span><i className="bi bi-check-circle-fill" /> Disaster Recovery</span>
            <span><i className="bi bi-check-circle-fill" /> Cost Optimization</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container-xxl">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <strong>500+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className={styles.statCard}>
              <strong>99.99%</strong>
              <span>Uptime Guarantee</span>
            </div>
            <div className={styles.statCard}>
              <strong>24/7</strong>
              <span>Monitoring & Security</span>
            </div>
            <div className={styles.statCard}>
              <strong>100+</strong>
              <span>Cloud Migrations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Cloud Services Bento Grid */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container-xxl">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>OUR CLOUD SERVICES</span>
            <h2>Premium Cloud Infrastructure Designed for Growth</h2>
            <p>Deploy enterprise-grade cloud capabilities managed fully by certified DevOps engineers.</p>
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
                        <i className="bi bi-check2-all" /> {bullet}
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
          <div className={styles.expertiseGrid}>
            <RevealOnScroll>
              <div className={styles.expertiseLeft}>
                <span className={styles.eyebrow}>OUR EXPERTISE</span>
                <h2>Industry Leading Multi-Cloud Expertise</h2>
                <p className="lead">
                  We specialize in crafting scalable systems, migrating complex workloads, and automating deployment scripts across all major providers.
                </p>
                <div className={styles.providersBadges}>
                  <span>AWS Partner</span>
                  <span>Microsoft Azure</span>
                  <span>Google Cloud</span>
                </div>
              </div>
            </RevealOnScroll>

            <div className={styles.expertiseRight}>
              {expertise.map((exp, index) => (
                <RevealOnScroll key={index} delay={index * 0.05}>
                  <div className={styles.expItem}>
                    <div className={styles.expDot} />
                    <div>
                      <h4>{exp.label}</h4>
                      <span>{exp.detail}</span>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container-xxl">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>FAQ SECTION</span>
            <h2>Frequently Asked Questions</h2>
            <p>Clear, direct answers about our cloud deployments and integration workflows.</p>
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
            <h2>Ready to Move Your Business to the Cloud?</h2>
            <p>Get a Free Cloud Readiness Assessment in Hyderabad today.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn-brand" style={{ background: "#ffffff", color: "var(--brand-500)", boxShadow: "none" }}>
                Book Free Consultation
              </Link>
              <a href="tel:+919100218218" className={styles.ctaCallLink}>
                <i className="bi bi-telephone-fill" /> Call Now: +91 9100218218
              </a>
            </div>
          </div>
        </div>
      </section>

      <Script id="ld-service-cloud" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
