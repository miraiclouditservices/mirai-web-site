import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ServicesGrid from "@/components/ServicesGrid/ServicesGrid";
import CTASection from "@/components/CTASection/CTASection";

export const metadata: Metadata = {
  title: "IT Services — Cloud, Security, Networking, Support",
  description: "Explore our full catalog of IT services: cloud, cybersecurity, networking, data center, wireless, communication and 24/7 managed support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-tight">
        <div className="container-xxl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <span className="eyebrow">Our Services</span>
          <h1>End-to-End IT Services for Hyderabad businesses.</h1>
          <p className="lead">Pick a service to learn how we design, deploy and support it.</p>
        </div>
      </section>
      <ServicesGrid heading="Choose a service" eyebrow="Catalog" />
      <CTASection />
    </>
  );
}
