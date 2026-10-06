import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import LocationSection from "@/components/contact/LocationSection";
import ContactFAQ from "@/components/contact/ContactFAQ";
import CTABand from "@/components/common/CTABand";
import JsonLd from "@/components/common/JsonLd";
import { buildMetadata, pageMeta, breadcrumbSchema } from "@/lib/seo";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata = buildMetadata(pageMeta.contact);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <JsonLd data={faqSchema} />
      <ContactHero />
      <section id="enquiry" className="scroll-mt-20 bg-white py-12 lg:py-14">
        <div className="container-x grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <LocationSection />
      <ContactFAQ />
      <CTABand
        eyebrow="Let’s connect"
        title="Let’s Build Your"
        accent="Technology Infrastructure"
        text="Have an IT requirement? Let’s discuss it. From connectivity and networking to servers, security, computing and communication, Anjani Technologies provides technology solutions designed around your requirements."
        image="/images/contact/cta.jpg"
        imageAlt="Business handshake in front of server racks"
        actions={[
          { label: "Call Now", href: site.phoneHref, icon: "call" },
          { label: "Send Enquiry", href: "#enquiry", variant: "outline", icon: "mail" },
        ]}
      />
    </>
  );
}
