import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import CTASection from "@/components/CTASection/CTASection";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import styles from "./service.module.css";

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find(x => x.slug === params.slug);
  if (!s) return {};
  return {
    title: `${s.title} in Hyderabad`,
    description: `${s.short} ${s.bullets.join(", ")}.`,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.title} — ${site.name}`, description: s.short },
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const s = services.find(x => x.slug === params.slug);
  if (!s) return notFound();

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title, description: s.short,
    provider: { "@type": "Organization", name: site.name, telephone: site.phone },
    areaServed: "Hyderabad, India",
  };

  return (
    <>
      <section className={styles.hero}>
        <div className="container-xxl">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: s.title },
          ]} />
          <div className={styles.heroGrid}>
            <RevealOnScroll>
              <span className="eyebrow">{s.title}</span>
              <h1>{s.title} in {site.city}</h1>
              <p className="lead">{s.short}</p>
              <div className={styles.actions}>
                <Link href="/contact" className="btn-brand">Get free consultation</Link>
                <a href={`tel:${site.phone.replace(/\s/g,"")}`} className="btn-ghost">
                  <i className="bi bi-telephone" /> {site.phone}
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className={styles.iconCard}>
                <i className={`bi bi-${s.icon}`} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xxl">
          <RevealOnScroll>
            <span className="eyebrow">What you get</span>
            <h2>Capabilities included</h2>
          </RevealOnScroll>
          <div className={styles.featureGrid}>
            {s.bullets.map((b, i) => (
              <RevealOnScroll key={b} delay={i * 0.05}>
                <div className={styles.feature}>
                  <i className="bi bi-check2-circle" />
                  <h3>{b}</h3>
                  <p>Designed, deployed and supported by certified engineers with measurable SLAs.</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--muted)" }}>
        <div className="container-xxl">
          <RevealOnScroll>
            <span className="eyebrow">Our process</span>
            <h2>How we deliver {s.title.toLowerCase()}</h2>
          </RevealOnScroll>
          <ol className={styles.steps}>
            {["Discover", "Design", "Deploy", "Support"].map((step, i) => (
              <RevealOnScroll key={step} delay={i * 0.05}>
                <li>
                  <span className={styles.stepNum}>0{i + 1}</span>
                  <h3>{step}</h3>
                  <p>{[
                    "We map your environment, objectives and constraints.",
                    "We architect a solution that fits your business and budget.",
                    "We implement with zero-disruption rollout and proper documentation.",
                    "We keep it running with 24/7 monitoring and rapid response.",
                  ][i]}</p>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
      <Script id={`ld-service-${s.slug}`} type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
