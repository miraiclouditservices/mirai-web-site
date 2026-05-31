"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => { setOpen(false); setMega(false); };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container-xxl ${styles.bar}`}>
        <Link href="/" className={styles.brand} onClick={closeAll}>
          <span className={styles.logoMark} aria-hidden>M</span>
          <span className={styles.logoText}>
            Mirai<strong>Cloud</strong>
          </span>
        </Link>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Primary">
          <Link href="/" className={styles.navLink} onClick={closeAll}>Home</Link>

          <div
            className={styles.megaWrap}
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
          >
            <button
              className={`${styles.navLink} ${styles.megaBtn}`}
              aria-expanded={mega}
              onClick={() => setMega(v => !v)}
            >
              Services <i className="bi bi-chevron-down" aria-hidden />
            </button>
            <div className={`${styles.mega} ${mega ? styles.megaOpen : ""}`}>
              <div className={styles.megaInner}>
                <div className={styles.megaIntro}>
                  <span className="eyebrow">What we do</span>
                  <h3>Enterprise IT, end to end</h3>
                  <p>From cloud migration to 24/7 managed services — built for businesses in Hyderabad and beyond.</p>
                  <Link href="/services" className="btn-brand" onClick={closeAll}>All Services</Link>
                </div>
                <ul className={styles.megaGrid}>
                  {services.map(s => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className={styles.megaItem} onClick={closeAll}>
                        <i className={`bi bi-${s.icon}`} aria-hidden />
                        <div>
                          <strong>{s.title}</strong>
                          <span>{s.short}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link href="/products" className={styles.navLink} onClick={closeAll}>Products</Link>
          <Link href="/about" className={styles.navLink} onClick={closeAll}>About</Link>
          <Link href="/contact" className={styles.navLink} onClick={closeAll}>Contact</Link>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={`btn-brand ${styles.cta}`} onClick={closeAll}>
            <i className="bi bi-telephone-fill" aria-hidden /> {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
