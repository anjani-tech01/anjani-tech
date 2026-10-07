"use client";

import { motion, useReducedMotion } from "framer-motion";
import SafeImage from "@/components/common/SafeImage";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import { Stagger, StaggerItem } from "@/components/common/Motion";
import { home } from "@/lib/content";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate w-full bg-navy text-white overflow-hidden flex items-center min-h-[calc(100vh-72px)] py-12 lg:py-0 lg:h-[calc(100svh-72px)] lg:min-h-[560px] lg:max-h-[760px]"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        className="absolute inset-0 -z-30 overflow-hidden"
        animate={reduce ? undefined : { scale: [1, 1.025] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <SafeImage
          src="/images/home-bg.png"
          alt="Enterprise server racks and IT infrastructure in a modern data centre"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />
      </motion.div>

      {/* GRADIENT OVERLAYS */}
      {/* Mobile: Top-to-bottom dark gradient | Desktop: Left-to-right gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-b from-black/95 via-black/90 to-navy/95 lg:bg-gradient-to-r lg:from-black/95 lg:via-black/75 lg:to-transparent lg:w-[70%]"
      />

      <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-20 w-full lg:w-[45%] bg-black/20 blur-2xl pointer-events-none" />

      {/* MAIN CONTENT CONTAINER */}
      <div className="container-x relative w-full h-full flex items-center py-4 lg:py-0">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Stagger immediate stagger={0.08} delay={0.08}>
            
            {/* 1. BRAND BADGE */}
            <StaggerItem>
              <div className="mb-4 inline-flex max-w-full flex-wrap items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand shadow-[0_0_8px_rgba(247,134,30,0.8)]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white/85">Trust</span>
                <span className="text-white/30 text-[9px]">\</span>

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white/85">Technology</span>
                <span className="text-white/30 text-[9px]">\</span>

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white/85">Solutions</span>
              </div>
            </StaggerItem>

            {/* 2. SEO EYEBROW */}
            <StaggerItem>
              <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-brand sm:text-xs leading-normal">
                IT Infrastructure &amp; Technology Solutions in Ahmedabad
              </p>
            </StaggerItem>

            {/* 3. MAIN HEADING */}
            <StaggerItem>
              <h1
                id="hero-title"
                className="max-w-3xl font-display text-[1.65rem] xs:text-[1.85rem] font-bold leading-[1.15] tracking-[-0.03em] !text-white sm:text-3xl md:text-[2.35rem] lg:text-[2.8rem] xl:text-[3rem]"
              >
                IT Infrastructure &amp; Networking Solutions for <span className="text-brand">Smarter Business</span>
              </h1>
            </StaggerItem>

            {/* 4. PARAGRAPH TEXT */}
            <StaggerItem>
              <p className="mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed sm:leading-7 text-white/80">
                Anjani Technologies is a trusted IT solutions provider in Ahmedabad, delivering reliable business technology solutions
                including networking, LAN, Wi-Fi, structured cabling, data centre, servers, storage, CCTV surveillance, computing and
                communication solutions for businesses, educational institutions and organizations.
              </p>
            </StaggerItem>

            {/* 5. CTA BUTTONS */}
            <StaggerItem>
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
                <Button href="/services" className="w-full sm:w-auto justify-center text-center">
                  Explore IT Services
                </Button>

                <Button href="/contact" variant="outline" icon="headset" className="w-full sm:w-auto justify-center text-center">
                  Talk to Our IT Experts
                </Button>
              </div>
            </StaggerItem>

            {/* 6. TRUST TAGS */}
            <StaggerItem>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50 sm:gap-x-5">
                <span>Networking</span>
                <span className="h-1 w-1 rounded-full bg-brand/70" />
                <span>Data Centre</span>
                <span className="h-1 w-1 rounded-full bg-brand/70" />
                <span>Security</span>
                <span className="h-1 w-1 rounded-full bg-brand/70" />
                <span>Business IT</span>
              </div>
            </StaggerItem>

          </Stagger>

          {/* RIGHT INFRASTRUCTURE PANEL (Preserved completely for desktop) */}
          <Stagger immediate stagger={0.1} delay={0.4} className="hidden justify-end lg:flex">
            <div className="w-full max-w-[275px]">
              <div className="overflow-hidden rounded-md border border-white/15 bg-black/10 p-1.5 backdrop-blur-md">
                <div className="rounded-md border border-white/10 bg-black/10 px-4 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/50">IT Infrastructure</span>

                    <span className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-brand">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      Solutions
                    </span>
                  </div>
                </div>

                <div className="px-3">
                  {home.heroHighlights.map((h, index) => (
                    <StaggerItem key={h.label} className="flex items-center gap-3 border-b border-white/10 py-3.5 last:border-b-0">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-brand/20 bg-brand/10">
                        <Icon name={h.icon} className="h-[18px] w-[18px] text-brand" strokeWidth={1.5} />
                      </div>

                      <div className="min-w-0">
                        <span className="mb-0.5 block text-[7px] font-bold uppercase tracking-[0.16em] text-white/35">0{index + 1}</span>

                        <span className="block text-xs font-semibold leading-snug text-white">{h.label}</span>
                      </div>

                      <span aria-hidden="true" className="ml-auto text-sm text-white/30">
                        →
                      </span>
                    </StaggerItem>
                  ))}
                </div>
              </div>
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
}