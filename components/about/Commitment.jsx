"use client";

import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
import Icon from "@/components/common/Icon";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Motion";
import { about } from "@/lib/content";

export default function Commitment() {
  return (
    <section className="overflow-hidden bg-[#f9fafc] py-14 lg:py-16">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        {/* Image */}
        <Reveal>
          <div className="relative h-[240px] w-full overflow-hidden rounded-xl sm:h-[300px]">
            <Image
              src="/images/commitment.png"
              alt="Our Commitment"
              width={800}
              height={600}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        
        <div>
          <Reveal>
            <SectionHeading eyebrow="Our Commitment" title="Our Commitment to" accent="Customers" />

            <p className="mt-3 text-sm">Our commitment is centered around:</p>
          </Reveal>

          <Stagger className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2" stagger={0.07}>
            {about.commitments.map((c) => (
              <StaggerItem key={c} className="flex items-center gap-3 text-[0.82rem] font-medium">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                </span>

                {c}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
