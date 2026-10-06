"use client";

import SafeImage from "@/components/common/SafeImage";
import Icon from "@/components/common/Icon";
import SectionHeading from "@/components/common/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Motion";
import { home } from "@/lib/content";

export default function WhyChoose() {
  return (
    <section id="why-us" className="relative isolate overflow-hidden bg-navy py-12 text-white sm:py-14 lg:py-12">
      <SafeImage
        src="/images/why-bg.png"
        alt="Blue network cables connected to a server rack"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-right"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/25" />
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Technology Solutions Built Around Your Requirements"
            dark
            className="[&_h2]:max-w-md"
          />
        </Reveal>
        <Stagger className="mt-8 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:mt-9 lg:grid-cols-5" stagger={0.12}>
          {home.whyUs.map((w) => (
            <StaggerItem
              key={w.label}
              className="group flex items-center gap-4 border-b border-[#F26522]/30 px-1 py-4 transition-all duration-500 ease-out hover:-translate-y-1 sm:px-4 lg:border-b-0 lg:border-r lg:border-[#F26522]/60 lg:px-5 lg:py-2 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#162E93] bg-[#F26522]/10 opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#F26522]/20 group-hover:shadow-[0_0_18px_rgba(242,101,34,0.3)] sm:h-12 sm:w-12">
                <Icon name={w.icon} className="h-5 w-5 text-[#F26522] transition-transform duration-500 group-hover:scale-110" />
              </span>
              <span className="text-sm font-bold leading-snug text-white opacity-0 animate-[fadeInUp_0.7s_ease-out_0.15s_forwards]">
                {w.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
