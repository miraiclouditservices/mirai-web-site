import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.wrap}>
      <div className="container-xxl">
        <div className={styles.card}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>End-to-End IT Solutions</span>
            <h2>Get a Free IT Audit in Hyderabad Today</h2>
            <p>Optimize your business operations with expert IT solutions tailored to your needs.</p>
          </div>
          <div className={styles.actions}>
            <a href={`tel:${site.phone.replace(/\s/g,"")}`} className="btn-brand">
              <i className="bi bi-telephone-fill" /> Call {site.phone}
            </a>
            <Link href="/contact" className={styles.ghostLight}>Book Free Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
