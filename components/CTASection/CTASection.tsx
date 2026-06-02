import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./CTASection.module.css";

interface CTAProps {
  pillText?: string;
  title?: string;
  desc?: string;
}

export default function CTASection({ pillText, title, desc }: CTAProps) {
  return (
    <section className={styles.wrap}>
      <div className="container-xxl">
        <div className={styles.card}>
          <div className={styles.pill}>
            {pillText || "🚀 Ready to upgrade your IT infrastructure?"}
          </div>
          <h2>{title || "Get a Free IT Infrastructure Assessment in Hyderabad"}</h2>
          <p>{desc || "Talk to a senior IT engineer. No obligation — just a clear roadmap for your digital expansion and security."}</p>
          
          <div className={styles.actions}>
            <Link href="/contact" className={styles.btnPrimary}>
              Book Free Consultation &rarr;
            </Link>
            <a href={`tel:${site.phone.replace(/\s/g,"")}`} className={styles.btnOutline}>
              <i className="bi bi-telephone" /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
