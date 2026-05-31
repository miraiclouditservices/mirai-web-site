import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import CTASection from "@/components/CTASection/CTASection";

export const metadata: Metadata = {
  title: "IT Products — Hardware, Firewalls, CCTV & Software",
  description: "Premium IT products for modern businesses: servers, networking, firewalls, antivirus, CCTV and licensed software.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="section-tight">
        <div className="container-xxl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <span className="eyebrow">Our Products</span>
          <h1>Premium IT Products for Modern Businesses</h1>
          <p className="lead">Sourced, installed, configured and supported — end to end.</p>
        </div>
      </section>
      <ProductsGrid />
      <CTASection />
    </>
  );
}
