# Anjani Technologies – Next.js (App Router, JSX, Tailwind 4, Framer Motion)

    npm install
    npm run dev      # http://localhost:3000
    npm run build

## Images you need to add (public/images/)
Missing files fall back to a dark gradient (no broken icons), so the site runs before you add them.

logo/logo.png            – your own logo (transparent PNG, ~200x56 or larger)
Hero-bg.png              – already in your project (home hero + social/OG image)

home/about-workspace.jpg, home/why-bg.jpg, home/cta-building.jpg
about/hero-building.jpg, about/office.jpg, about/vision-bg.jpg, about/mission-bg.jpg,
about/why-bg.jpg, about/commitment.jpg, about/cta-city.jpg
services/hero-switch.jpg, services/cta-city.jpg, and one per service:
  lan, wifi, cabling, data-centre, server-storage, cctv, computing, peripherals,
  software, ip-pbx, power, data-security  (.jpg)
contact/hero.jpg, contact/ahmedabad.jpg, contact/cta.jpg

Different extension (e.g. .webp)? Edit lib/content.js and the component that references it.

## Things to edit
- lib/site.js   – social links (currently "#"), nav, address, phone
- lib/content.js – services, FAQs, about stats (set `value` to show animated counters)
- ContactForm   – opens the visitor's email app (mailto). Swap for an API route / Resend when ready.
