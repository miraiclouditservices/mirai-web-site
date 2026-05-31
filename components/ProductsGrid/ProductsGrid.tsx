import { products } from "@/lib/services";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import styles from "./ProductsGrid.module.css";

export default function ProductsGrid() {
  return (
    <section className="section" id="products" style={{ background: "var(--muted)" }}>
      <div className="container-xxl">
        <RevealOnScroll>
          <div className={styles.head}>
            <span className="eyebrow">Our Products</span>
            <h2>Premium IT Products for Modern Businesses</h2>
            <p className="lead">Carefully chosen hardware, security and software stack — sourced, installed and supported.</p>
          </div>
        </RevealOnScroll>
        <div className={styles.grid}>
          {products.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 0.05}>
              <article className={styles.card}>
                <div className={styles.icon}><i className={`bi bi-${p.icon}`} /></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul>{p.bullets.map(b => <li key={b}><i className="bi bi-dot" />{b}</li>)}</ul>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
