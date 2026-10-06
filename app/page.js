import Hero from "@/components/home/Hero";
import AboutIntro from "@/components/home/AboutIntro";
import ServicesOverview from "@/components/home/ServicesOverview";
import LenovoSupport from "@/components/home/LenovoSupport";
import WhyChoose from "@/components/home/WhyChoose";
import IndustriesApproach from "@/components/home/IndustriesApproach";
import CTABand from "@/components/common/CTABand";
import JsonLd from "@/components/common/JsonLd";
import { buildMetadata, pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata(pageMeta.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Hero />
      <AboutIntro />
      <ServicesOverview />
      <LenovoSupport />
      <WhyChoose />
      <IndustriesApproach />
      <CTABand />
    </>
  );
}
