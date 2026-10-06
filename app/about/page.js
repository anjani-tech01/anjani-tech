import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseAbout from "@/components/about/WhyChooseAbout";
import Commitment from "@/components/about/Commitment";
import CTABand from "@/components/common/CTABand";
import JsonLd from "@/components/common/JsonLd";
import { buildMetadata, pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata(pageMeta.about);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <AboutHero />
      <WhoWeAre />
      <VisionMission />
      <CoreValues />
      <WhyChooseAbout />
      <Commitment />

      <CTABand
        eyebrow="Looking for the right IT solution?"
        title="Looking for the Right"
        accent="IT Solution?"
        text="Talk to Anjani Technologies about your networking, infrastructure, security, computing or business technology requirements."
        image="/images/about/cta-city.jpg"
        imageAlt="City skyline at dusk with glowing lights"
        actions={[
          {
            label: "Contact Us",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
