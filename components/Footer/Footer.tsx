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
          <div>
            <div className={styles.brand}>
              <span className={styles.mark}>M</span>
              <span>Mirai<strong>Cloud</strong></span>
            </div>
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
              {services.slice(0, 6).map(s => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
              <li><Link href="/services">All Services →</Link></li>
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
            <h4>Get in touch</h4>
            <ul className={styles.contactList}>
              <li><i className="bi bi-geo-alt" /> {site.address}</li>
              <li><i className="bi bi-telephone" /> <a href={`tel:${site.phone.replace(/\s/g,"")}`}>{site.phone}</a></li>
              <li><i className="bi bi-envelope" /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {year} {site.name}. All rights reserved.</span>
          <span>Crafted for performance & SEO.</span>
        </div>
      </div>
    </footer>
  );
}
