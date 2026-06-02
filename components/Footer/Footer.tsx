import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container-xxl">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand}>
              <div className={styles.logoCircle}>
                <img src="/mirai_logo.png" alt="Mirai Logo" className={styles.logoImg} />
              </div>
              <span className={styles.brandText}>Mirai<strong>Cloud</strong></span>
            </Link>
            <p className={styles.about}>{site.description}</p>
            <div className={styles.social}>
              <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener"><i className="bi bi-linkedin" /></a>
              <a href={site.social.twitter} aria-label="Twitter" target="_blank" rel="noopener"><i className="bi bi-twitter-x" /></a>
              <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener"><i className="bi bi-facebook" /></a>
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.slice(0, 5).map(s => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
              <li><Link href="/services" className={styles.accentLink}>View All Services <i className="bi bi-arrow-right" /></Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul className={styles.contactList}>
              <li>
                <div className={styles.iconBox}><i className="bi bi-geo-alt" /></div>
                <span>{site.address}</span>
              </li>
              <li>
                <div className={styles.iconBox}><i className="bi bi-telephone" /></div>
                <a href={`tel:${site.phone.replace(/\s/g,"")}`}>{site.phone}</a>
              </li>
              <li>
                <div className={styles.iconBox}><i className="bi bi-envelope" /></div>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>© {year} {site.name}. All rights reserved.</div>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
