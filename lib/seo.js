import { site } from "@/lib/site";

export const pageMeta = {
  home: {
    path: "/",
    title: "IT Infrastructure Solutions in Ahmedabad | Anjani Technologies",
    description:
      "Anjani Technologies provides IT infrastructure, networking, Wi-Fi, structured cabling, data centre, server, storage, security and business technology solutions in Ahmedabad.",
  },

  about: {
    path: "/about",
    title: "About Anjani Technologies | IT Solutions Company in Ahmedabad",
    description:
      "Learn about Anjani Technologies, an Ahmedabad-based IT solutions provider delivering reliable networking, infrastructure, security, computing and business technology solutions.",
  },

  services: {
    path: "/services",
    title: "IT Infrastructure & Networking Services in Ahmedabad | Anjani Technologies",
    description:
      "Explore Anjani Technologies services including LAN, Wi-Fi, structured cabling, data centre, servers, storage, CCTV, computing, software, IP PBX and power solutions.",
  },

  contact: {
    path: "/contact",
    title: "Contact Anjani Technologies | IT Solutions in Ahmedabad",
    description:
      "Contact Anjani Technologies in Ahmedabad for IT infrastructure, networking, Wi-Fi, structured cabling, servers, storage, security, computing and business technology solutions.",
  },
};

export function buildMetadata({ title, description, path = "/" }) {
  const url = path === "/" ? site.url : `${site.url}${path}`;

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: site.ogImage,
          width: 1920,
          height: 1080,
          alt: "Anjani Technologies – IT infrastructure solutions",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.ogImage],
    },
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}${site.ogImage}`,
  telephone: site.phone,
  email: site.email,

  description: pageMeta.home.description,

  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },

  areaServed: "Ahmedabad",
};

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${site.url}/services`,
  name: pageMeta.services.title,
  description: pageMeta.services.description,
  url: `${site.url}/services`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: 10,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "LAN & Networking Solutions",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wi-Fi Solutions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Structured Cabling",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Data Centre Solutions",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Servers & Storage",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Security & CCTV",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Computing Solutions",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Software Solutions",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "IP PBX & Communication Solutions",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Power Solutions",
      },
    ],
  },
};