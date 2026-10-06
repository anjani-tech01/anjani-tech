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
      className="relative isolate h-[calc(100svh-72px)] min-h-[560px] max-h-[760px] overflow-hidden bg-navy text-white"
    >
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
          className="object-cover object-right"
        />
      </motion.div>

      {/* LEFT BLACK OVERLAY ONLY */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 -z-20 w-full bg-gradient-to-r from-black/95 via-black/75 to-transparent lg:w-[70%]"
      />

      <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-20 w-[45%] bg-black/20 blur-2xl" />

      <div className="container-x relative flex h-full items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Stagger immediate stagger={0.08} delay={0.08}>
            {/* BRAND MESSAGE */}
            <StaggerItem>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(247,134,30,0.8)]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/85">Trust</span>

                <span className="text-white/30">/</span>

                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/85">Technology</span>

                <span className="text-white/30">/</span>

                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/85">Solutions</span>
              </div>
            </StaggerItem>

            {/* SEO EYEBROW */}
            <StaggerItem>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand sm:text-xs">
                IT Infrastructure &amp; Technology Solutions in Ahmedabad
              </p>
            </StaggerItem>

            {/* PRIMARY SEO HEADING */}
            <StaggerItem>
              <h1
                id="hero-title"
                className="max-w-3xl font-display text-[1.8rem] font-bold leading-[1.08] tracking-[-0.035em] !text-white sm:text-3xl md:text-[2.35rem] lg:text-[2.8rem] xl:text-[3rem]"
              >
                IT Infrastructure &amp; Networking Solutions for <span className="text-brand">Smarter Business</span>
              </h1>
            </StaggerItem>

            {/* SEO SUPPORTING CONTENT */}
            <StaggerItem>
              <p className="mt-5 max-w-2xl text-xs leading-6 text-white/80 sm:text-sm sm:leading-7">
                Anjani Technologies is a trusted IT solutions provider in Ahmedabad, delivering reliable business technology solutions
                including networking, LAN, Wi-Fi, structured cabling, data centre, servers, storage, CCTV surveillance, computing and
                communication solutions for businesses, educational institutions and organizations.
              </p>
            </StaggerItem>

            {/* CTA */}
            <StaggerItem>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/services">Explore IT Services</Button>

                <Button href="/contact" variant="outline" icon="headset">
                  Talk to Our IT Experts
                </Button>
              </div>
            </StaggerItem>

            {/* SEO TRUST LINE */}
            <StaggerItem>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/45">
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

          {/* RIGHT INFRASTRUCTURE PANEL */}
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
