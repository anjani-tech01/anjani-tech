"use client";

import SafeImage from "@/components/common/SafeImage";
import Icon from "@/components/common/Icon";
import Button from "@/components/common/Button";
import SectionHeading from "@/components/common/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Motion";
import { about } from "@/lib/content";

export default function WhyChooseAbout() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-10 text-white lg:py-12">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Reveal y={0} delay={0.1}>
          <SafeImage
            src="/images/about-why-bg.png"
            alt="Dark data centre aisle lined with server racks"
            fill
            sizes="100vw"
            className="object-cover object-right transition-transform duration-[1800ms] ease-out hover:scale-[1.03]"
          />
        </Reveal>
      </div>

      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />

      <div className="container-x grid items-end gap-8 lg:grid-cols-[1fr_1.05fr]">
        <Reveal x={-30} y={10} delay={0.05}>
          <SectionHeading eyebrow="Why Choose Us" title="Why Businesses Choose a" accent="Technology Partner" dark size="lg" />

          <Reveal y={18} delay={0.15}>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Modern organizations depend on reliable connectivity, computing, communication, security and data infrastructure.
            </p>
          </Reveal>

          <Reveal y={18} delay={0.22}>
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              Anjani Technologies brings multiple technology requirements together through a comprehensive IT solutions portfolio, helping
              customers simplify their technology sourcing and support requirements.
            </p>
          </Reveal>

          <Reveal y={18} delay={0.3}>
            <div className="mt-4">
              <Button
                href="/services"
                variant="outline"
                className="!border-brand !text-white transition-all duration-300 hover:!bg-brand hover:scale-[1.03] hover:shadow-lg hover:shadow-brand/20"
              >
                Explore Our Services
              </Button>
            </div>
          </Reveal>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-5 sm:grid-cols-4" stagger={0.12} delay={0.2}>
          {about.whyUs.map((w) => (
            <StaggerItem
              key={w.label}
              className="group flex flex-col items-center gap-2 text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand transition-all duration-500 group-hover:scale-110 group-hover:bg-brand/10 group-hover:shadow-[0_0_25px_rgba(247,134,30,0.25)]">
                <Icon
                  name={w.icon}
                  className="h-6 w-6 text-brand transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  strokeWidth={1.5}
                />
              </span>

              <span className="text-[0.78rem] font-bold leading-snug transition-colors duration-300 group-hover:text-brand">{w.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
