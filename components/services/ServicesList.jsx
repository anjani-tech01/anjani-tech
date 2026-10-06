"use client";

import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Motion";
import { services } from "@/lib/content";

export default function ServicesList() {
  return (
    <section className="bg-cloud py-14 lg:py-20">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionHeading eyebrow="Our Services" title="Comprehensive" accent="IT Solutions" align="center" size="lg" />
          <p className="mt-4 text-sm leading-relaxed sm:text-base">From network infrastructure to security and communication, we provide end-to-end technology solutions to keep your business connected, secure and future-ready.</p>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {services.map((s, i) => (
            <StaggerItem key={s.slug}><ServiceCard service={s} index={i} /></StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
