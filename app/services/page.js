import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import CTABand from "@/components/common/CTABand";
import JsonLd from "@/components/common/JsonLd";
import { buildMetadata, pageMeta, breadcrumbSchema, servicesSchema } from "@/lib/seo";

export const metadata = buildMetadata(pageMeta.services);

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <JsonLd data={servicesSchema} />

      <ServicesHero />

      <ServicesList />

      <CTABand
        title="Need a Complete IT"
        accent="Infrastructure Solution?"
        text="Discuss your technology requirements with Anjani Technologies and find the right combination of connectivity, infrastructure, security, computing and communication solutions."
        image="/images/services/cta-city.jpg"
        imageAlt="Glowing network connections over a city skyline at dusk"
        actions={[{ label: "Get In Touch", href: "/contact" }]}
      />
    </>
  );
}
