import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import CTASection from "@/components/CTASection/CTASection";
import StatsCounter from "@/components/StatsCounter/StatsCounter";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Mirai Cloud IT Services — Hyderabad",
  description:
    "Mirai Cloud IT Services is a fast-growing IT solutions company in Hyderabad delivering cloud, cybersecurity, networking and managed IT services across India.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container-xxl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <RevealOnScroll>
                <div className={styles.heroPill}>Trusted IT Partner for Modern Businesses</div>
                <h1 className={styles.heroTitle}>
                  We build secure, scalable & intelligent <span>IT solutions.</span>
                </h1>
                <p className={styles.heroDesc}>
                  We help organizations in Hyderabad, Miyapur, Kukatpally and across India adopt modern technology, improve operational efficiency, and stay secure in an increasingly digital world.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/services" className={styles.btnPrimary}>
                    Explore Services <i className="bi bi-arrow-right" />
                  </Link>
                  <Link href="/contact" className={styles.btnOutline}>
                    <i className="bi bi-telephone" /> Talk to an Expert
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
            
            <div className={styles.heroImage}>
              <RevealOnScroll delay={0.1}>
                <img src="/about-hero.png" alt="Secure IT Solutions" />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.vmSection}>
        <div className="container-xxl">
          <div className={styles.vmGrid}>
            <RevealOnScroll>
              <article className={styles.vmCard}>
                <i className="bi bi-eye" />
                <h2>Our Vision</h2>
                <p>To be a trusted technology partner, empowering organizations through secure, scalable
                  and intelligent IT solutions that shape a digitally connected future.</p>
              </article>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <article className={styles.vmCard}>
                <i className="bi bi-bullseye" />
                <h2>Our Mission</h2>
                <p>Deliver reliable, secure, customized IT solutions that simplify operations, improve productivity,
                  enhance cybersecurity, and scale with confidence.</p>
              </article>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container-xxl">
          <RevealOnScroll>
            <div className={styles.whyHeader}>
              <div className={styles.whyLeft}>
                <div className={styles.pill}>Why choose us</div>
                <h2>More than an IT vendor —<br/>your growth partner.</h2>
              </div>
              <div className={styles.whyRight}>
                <p>We combine technology, expertise, and a customer-first approach to deliver solutions that drive lasting impact.</p>
              </div>
            </div>
          </RevealOnScroll>
          <div className={styles.whyGrid}>
            {[
              ["person-badge", "Certified Experts", "Experienced IT engineers with industry-recognized certifications."],
              ["lightning-charge", "Fast & Reliable", "24/7 assistance with rapid on-site and remote support."],
              ["arrow-repeat", "Scalable Solutions", "Future-ready cloud and security architectures built to scale."],
              ["wallet2", "Budget Friendly", "Right-sized IT packages tailored for SMBs and enterprises."],
              ["shield-lock", "Security First", "Strong focus on data security, compliance, and best practices."],
              ["hdd-network", "Industry Focused", "Serving schools, healthcare, finance, startups & more."],
            ].map(([icon, t, d], i) => (
              <RevealOnScroll key={t} delay={i * 0.04}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>
                    <i className={`bi bi-${icon}`} />
                  </div>
                  <div className={styles.whyText}>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.coreBanner}>
        <div className="container-xxl">
          <RevealOnScroll>
            <div className={styles.coreHeader}>
              <div>
                <span className={styles.corePill}>Our Core Services</span>
                <h2>End-to-end IT solutions to power your business.</h2>
              </div>
              <Link href="/services" className={styles.coreBtn}>
                View All Services
              </Link>
            </div>
            
            <div className={styles.coreServicesList}>
              {[
                ["cloud", "Cloud Services"],
                ["diagram-3", "Network Solutions"],
                ["shield-check", "IT Security"],
                ["headset", "IT Support & AMC"],
                ["server", "Data Center"],
                ["wifi", "Wireless Solutions"]
              ].map(([icon, label], i) => (
                <div className={styles.coreServiceItem} key={label}>
                  <i className={`bi bi-${icon}`} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  );
}
