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
      <section className="section-tight">
        <div className="container-xxl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <RevealOnScroll>
            <span className="eyebrow">About Mirai Cloud IT Services</span>
            <h1 className={styles.h1}>We build the IT backbone for ambitious businesses.</h1>
            <p className={`lead ${styles.lead}`}>
              We help organizations in Hyderabad, Miyapur, Kukatpally and across India adopt modern
              technology, improve operational efficiency, and stay secure in an increasingly digital world.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section">
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

      <section className="section">
        <div className="container-xxl">
          <RevealOnScroll>
            <span className="eyebrow">Why choose us</span>
            <h2>More than an IT vendor — your growth partner.</h2>
          </RevealOnScroll>
          <div className={styles.whyGrid}>
            {[
              ["patch-check", "Certified Engineers", "Experienced IT engineers with vendor certifications."],
              ["lightning-charge", "Fast & Reliable", "24/7 assistance with rapid on-site response."],
              ["graph-up-arrow", "Scalable Architecture", "Future-ready cloud and security architecture."],
              ["wallet2", "Budget Friendly", "Right-sized IT packages for SMBs and enterprises."],
              ["shield-lock", "Security First", "Strong focus on data security & compliance."],
              ["people", "Industries We Serve", "Schools, SMBs, healthcare, finance & startups."],
            ].map(([icon, t, d], i) => (
              <RevealOnScroll key={t} delay={i * 0.04}>
                <div className={styles.whyCard}>
                  <i className={`bi bi-${icon}`} />
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
