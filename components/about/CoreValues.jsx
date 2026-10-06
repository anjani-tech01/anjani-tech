"use client";

import SectionHeading from "@/components/common/SectionHeading";
import Icon from "@/components/common/Icon";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Motion";
import { about } from "@/lib/content";

export default function CoreValues() {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="container-x">
        <Reveal>
          <SectionHeading eyebrow="Our Core Values" title="Our Core" accent="Values" align="center" size="lg" />
        </Reveal>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
          {about.values.map((v) => (
            <StaggerItem key={v.title} className="group rounded-xl bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 transition-colors duration-300 group-hover:bg-brand">
                <Icon name={v.icon} className="h-7 w-7 text-brand transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
              </span>
              <h3 className="mt-4 text-[0.95rem] font-bold">{v.title}</h3>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-panel/80">{v.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
