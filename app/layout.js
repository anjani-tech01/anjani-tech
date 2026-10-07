import { Sora, Manrope, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ScrollProgress from "@/components/common/ScrollProgress";
import JsonLd from "@/components/common/JsonLd";
import { site } from "@/lib/site";
import { buildMetadata, pageMeta, localBusinessSchema } from "@/lib/seo";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  ...buildMetadata(pageMeta.home),

  icons: {
    icon: "/images/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#0F1F29",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${sora.variable} ${manrope.variable} ${caveat.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <JsonLd data={localBusinessSchema} />

        <ScrollProgress />

        <Navbar />

        <main id="main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
