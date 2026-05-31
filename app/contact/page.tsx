import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import { site } from "@/lib/site";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Mirai Cloud IT Services — Hyderabad",
  description: "Talk to our IT experts. Call +91 9100218218 or request a free IT consultation in Hyderabad.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="section-tight">
        <div className="container-xxl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <RevealOnScroll>
            <span className="eyebrow">Get in touch</span>
            <h1>Let’s build your IT roadmap.</h1>
            <p className="lead">Tell us about your business — we’ll respond within one business day.</p>
          </RevealOnScroll>
        </div>
      </section>
      <section className="section">
        <div className="container-xxl">
          <div className={styles.grid}>
            <RevealOnScroll>
              <ContactForm />
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <aside className={styles.info}>
                <h3>Mirai Cloud IT Services</h3>
                <p className="lead" style={{ marginBottom: "1.25rem" }}>{site.tagline}</p>
                <ul>
                  <li><i className="bi bi-geo-alt" /><span>{site.address}</span></li>
                  <li><i className="bi bi-telephone" /><a href={`tel:${site.phone.replace(/\s/g,"")}`}>{site.phone}</a></li>
                  <li><i className="bi bi-envelope" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
                  <li><i className="bi bi-clock" /><span>Mon–Sat · 9:00 – 19:00 IST</span></li>
                </ul>
                <a href={`tel:${site.phone.replace(/\s/g,"")}`} className="btn-brand" style={{ marginTop: "1rem", display: "inline-flex" }}>
                  <i className="bi bi-telephone-fill" /> Call now
                </a>
              </aside>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
