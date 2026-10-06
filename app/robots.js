export default function robots() {
  const baseUrl = "https://www.anjanitech.in";

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
