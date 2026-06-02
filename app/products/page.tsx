import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import CTASection from "@/components/CTASection/CTASection";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import styles from "./Products.module.css";

export const metadata: Metadata = {
  title: "IT Products — Hardware, Firewalls, CCTV & Software",
  description: "Premium IT products for modern businesses: servers, networking, firewalls, antivirus, CCTV and licensed software.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container-xxl">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.breadcrumbWrap}>
                <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
              </div>
              <RevealOnScroll>
                <div className={styles.pill}>Our Products</div>
                <h1 className={styles.title}>Premium <span>IT Products</span> for Modern Businesses</h1>
                <p className={styles.lead}>
                  Sourced, installed, configured and supported — end to end.
                </p>
              </RevealOnScroll>
            </div>
            {/* Keeping it clean and left-aligned, matching the requested modern aesthetic */}
          </div>
        </div>
      </section>
      
      <section style={{ paddingBottom: 'clamp(60px, 8vw, 100px)', background: '#ffffff' }}>
        <div className="container-xxl">
          <ProductsGrid hideHeader={true} />
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
