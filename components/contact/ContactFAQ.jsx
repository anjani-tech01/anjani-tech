"use client";

import FAQ from "@/components/common/FAQ";
import SectionHeading from "@/components/common/SectionHeading";
import Icon from "@/components/common/Icon";
import {
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/common/Motion";
import { faqs } from "@/lib/content";

export default function ContactFAQ() {
  return (
    <section id="faq" className="bg-white py-14 lg:py-16">
      <div className="container-x grid items-start gap-8 lg:grid-cols-[1.35fr_1fr]">
        
        {/* FAQ */}
        <Stagger>
          <StaggerItem>
            <Reveal>
              <SectionHeading
                eyebrow="Frequently Asked Questions"
                title="Contact FAQ"
                size="lg"
              />
            </Reveal>
          </StaggerItem>

          <StaggerItem>
            <Reveal delay={0.08}>
              <div className="mt-6">
                <FAQ items={faqs} />
              </div>
            </Reveal>
          </StaggerItem>
        </Stagger>

        {/* Information Card */}
        <Reveal delay={0.2} className="lg:mt-27">
          <div className="group relative overflow-hidden rounded-md bg-cloud p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            
            {/* Soft hover light */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Icon */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Icon
                name="chat"
                className="h-12 w-12 text-brand transition-transform duration-500"
                strokeWidth={1.4}
              />
            </div>

            {/* Content */}
            <div className="relative">
              <h3 className="mt-4 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand">
                Need More Information?
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Our team is here to help you find the right IT solutions for
                your business.
              </p>
            </div>

            {/* Bottom accent */}
            <div className="mt-6 h-px w-10 bg-brand/40 transition-all duration-500 group-hover:w-full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}