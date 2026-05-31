"use client";
import { motion as m } from "framer-motion";
import Link from "next/link";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({
  icon, title, short, bullets, href,
}: { icon: string; title: string; short: string; bullets: string[]; href: string }) {
  // Map key icons to exact visual matches in the reference image
  let bootstrapIcon = icon;
  if (icon === "cloud") bootstrapIcon = "cloud";
  if (icon === "diagram-3") bootstrapIcon = "diagram-3";
  if (icon === "shield-lock") bootstrapIcon = "shield";

  return (
    <m.div
      className={styles.card}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div className={styles.iconWrap} aria-hidden>
        <i className={`bi bi-${bootstrapIcon}`} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{short}</p>
      <ul className={styles.list}>
        {bullets.map(b => (
          <li key={b}>
            <i className="bi bi-check-circle" style={{ color: "#3b82f6" }} /> 
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Link href={href} className={styles.link}>
        <span>Learn more</span> 
        <i className="bi bi-arrow-right" style={{ fontSize: "1rem" }} />
      </Link>
    </m.div>
  );
}
