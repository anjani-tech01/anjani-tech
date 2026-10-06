"use client";

import SafeImage from "@/components/common/SafeImage";
import { Stagger, StaggerItem } from "@/components/common/Motion";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {/* Contact Background Image */}
      <SafeImage
        src="/images/contact-bg.png"
        alt="IT infrastructure office with server racks, laptop and office desk"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-right"
      />

      {/* Dark Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/60 to-navy/1"
      />

      {/* Content */}
      <div className="container-x relative py-14 sm:py-16 lg:min-h-[250px]">
        <Stagger
          immediate
          stagger={0.1}
          delay={0.1}
          className="max-w-xl"
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
              Contact Us

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
              Contact{" "}
              <span className="block text-brand">
                Anjani Technologies
              </span>
            </h1>
          </StaggerItem>

          {/* Description */}
          <StaggerItem>
            <p
              className="
                animate-fade-up
                mt-5
                text-sm
                leading-relaxed
                text-white/90
              "
            >
              Looking for reliable IT infrastructure and technology
              solutions in Ahmedabad? Contact Anjani Technologies to
              discuss your requirements for networking, Wi-Fi, structured
              cabling, data centres, servers, storage, security, computing,
              software, communication and power solutions.
            </p>
          </StaggerItem>
        </Stagger>

        {/* Technology Partner Text */}
        <p
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-8
            top-10
            hidden
            -rotate-6
            font-script
            text-3xl
            text-white
            lg:block
          "
        >
          Your
          <br />
          Technology Partner

          <span className="mt-1 block h-[2px] w-40 -rotate-3 bg-brand" />
        </p>
      </div>
    </section>
  );
}