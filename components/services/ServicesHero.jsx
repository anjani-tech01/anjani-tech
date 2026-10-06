"use client";

import Button from "@/components/common/Button";
import { Stagger, StaggerItem } from "@/components/common/Motion";

export default function ServicesHero() {
  return (
    <section
      className="relative isolate bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/images/service-bg.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/20" />

      <div className="container-x py-16 sm:py-20 lg:min-h-[440px] lg:py-24">
        <Stagger
          immediate
          stagger={0.14}
          delay={0.15}
          className="max-w-lg"
        >
          {/* Eyebrow */}
          <StaggerItem>
            <p
              className="
                animate-fade-up
                mb-3
                flex items-center gap-2
                text-[0.65rem]
                font-bold uppercase
                tracking-[0.18em]
                text-brand
                sm:mb-4
                sm:text-[0.68rem]
              "
            >
              Services

              <span
                aria-hidden="true"
                className="h-[2px] w-7 bg-brand sm:w-8"
              />
            </p>
          </StaggerItem>

          {/* Heading */}
          <StaggerItem>
            <h1
              className="
                animate-fade-up
                font-display
                text-4xl
                font-bold
                leading-[1.1]
                !text-white
                sm:text-5xl
              "
            >
              IT Infrastructure &amp;
              <span className="block text-brand">
                Technology Services
              </span>
            </h1>
          </StaggerItem>

          {/* Description */}
          <StaggerItem>
            <div className="animate-fade-up">
              <p className="mt-5 text-sm leading-relaxed text-white/90">
                Anjani Technologies provides a comprehensive range of IT
                infrastructure and technology solutions for businesses,
                educational institutions and organizations.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Our services cover connectivity, networking, data
                infrastructure, security, computing, communication and power
                requirements.
              </p>
            </div>
          </StaggerItem>

          {/* Button */}
          <StaggerItem>
            <div className="mt-7 animate-fade-up">
              <Button href="/contact" className="!py-2.5">
                Get In Touch
              </Button>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}