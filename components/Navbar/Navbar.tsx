"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const pathname = usePathname();

  const closeAll = () => { setOpen(false); setActiveMega(null); };

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} onClick={closeAll}>
          <img src="/mirai_logo.png" alt="Mirai Logo" className={styles.logoImg} />
        </Link>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <i className="bi bi-list" />
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Primary">
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`} onClick={closeAll}>Home</Link>

          {/* Services Mega Menu */}
          <div
            className={styles.megaWrap}
            onMouseEnter={() => setActiveMega('services')}
            onMouseLeave={() => setActiveMega(null)}
          >
            <button
              className={`${styles.navLink} ${styles.megaBtn} ${pathname.startsWith('/services') ? styles.active : ''}`}
              aria-expanded={activeMega === 'services'}
              onClick={() => setActiveMega(v => v === 'services' ? null : 'services')}
            >
              Services <i className="bi bi-chevron-down" aria-hidden />
            </button>
            <div className={`${styles.mega} ${activeMega === 'services' ? styles.megaOpen : ""}`}>
              <div className={styles.megaInner}>
                <div className={styles.megaIntro}>
                  <span className="eyebrow">What we do</span>
                  <h3>Enterprise IT, end to end</h3>
                  <p>From cloud migration to 24/7 managed services.</p>
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

          {/* Solutions Mega Menu */}
          <div
            className={styles.megaWrap}
            onMouseEnter={() => setActiveMega('solutions')}
            onMouseLeave={() => setActiveMega(null)}
          >
            <button
              className={`${styles.navLink} ${styles.megaBtn} ${pathname.startsWith('/solutions') ? styles.active : ''}`}
              aria-expanded={activeMega === 'solutions'}
              onClick={() => setActiveMega(v => v === 'solutions' ? null : 'solutions')}
            >
              Solutions <i className="bi bi-chevron-down" aria-hidden />
            </button>
            <div className={`${styles.mega} ${activeMega === 'solutions' ? styles.megaOpen : ""}`}>
              <div className={styles.megaInner}>
                <div className={styles.megaIntro}>
                  <span className="eyebrow">What we offer</span>
                  <h3>Enterprise Solutions</h3>
                  <p>Tailored tech solutions to drive your business forward.</p>
                  <Link href="/solutions" className="btn-brand" onClick={closeAll}>All Solutions</Link>
                </div>
                <ul className={styles.megaGrid}>
                  <li>
                    <Link href="/solutions/web-development" className={styles.megaItem} onClick={closeAll}>
                      <i className="bi bi-laptop" aria-hidden />
                      <div>
                        <strong>Web development</strong>
                        <span>Modern, responsive web applications</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/software-development" className={styles.megaItem} onClick={closeAll}>
                      <i className="bi bi-code-slash" aria-hidden />
                      <div>
                        <strong>Software development</strong>
                        <span>Custom software tailored to your needs</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/cloud-solutions" className={styles.megaItem} onClick={closeAll}>
                      <i className="bi bi-cloud" aria-hidden />
                      <div>
                        <strong>Cloud solutions</strong>
                        <span>Scalable cloud infrastructure</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/business-connectivity" className={styles.megaItem} onClick={closeAll}>
                      <i className="bi bi-router" aria-hidden />
                      <div>
                        <strong>Business connectivity</strong>
                        <span>Reliable networking and comms</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/backup" className={styles.megaItem} onClick={closeAll}>
                      <i className="bi bi-shield-check" aria-hidden />
                      <div>
                        <strong>Backup</strong>
                        <span>Secure data protection and recovery</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="/products" className={`${styles.navLink} ${pathname.startsWith('/products') ? styles.active : ''}`} onClick={closeAll}>Products</Link>
          <Link href="/about" className={`${styles.navLink} ${pathname.startsWith('/about') ? styles.active : ''}`} onClick={closeAll}>About</Link>
          <Link href="/contact" className={`${styles.navLink} ${pathname.startsWith('/contact') ? styles.active : ''}`} onClick={closeAll}>Contact</Link>
        </nav>

        <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={styles.ctaPill} onClick={closeAll}>
          {site.phone}
        </a>
      </header>
    </div>
  );
}
