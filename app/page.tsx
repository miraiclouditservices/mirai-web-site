import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";
import ServicesGrid from "@/components/ServicesGrid/ServicesGrid";
import FeatureGrid from "@/components/FeatureGrid/FeatureGrid";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import StatsCounter from "@/components/StatsCounter/StatsCounter";
import CTASection from "@/components/CTASection/CTASection";

const ThreeCloud = dynamic(() => import("@/components/ThreeCloud/ThreeCloud"), { ssr: false });

export const metadata: Metadata = {
  title: "IT Services in Hyderabad — Cloud, Security, Networking",
  description:
    "Mirai Cloud IT Services delivers cloud, cybersecurity, networking, data center and 24/7 managed IT support to businesses in Hyderabad, Miyapur and across India.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeCloud />
      <ServicesGrid />
      <FeatureGrid />
      <StatsCounter />
      <ProductsGrid />
      <CTASection />
    </>
  );
}
