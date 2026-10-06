"use client";

import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
import Icon from "@/components/common/Icon";
import TiltCard from "@/components/3d/TiltCard";
import { Stagger, StaggerItem, Reveal } from "@/components/common/Motion";
import { services } from "@/lib/content";

export default function ServicesOverview() {
  return (
    <section className="bg-cloud py-14 lg:py-16">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Our Core Services"
            title="Complete IT Infrastructure Solutions"
            accent="Under One Roof"
            align="center"
            className="[&_h2]:max-w-xl"
          />
        </Reveal>

        <Stagger
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          stagger={0.05}
        >
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <TiltCard className="h-full">
                <Link
                  href={`/services#${s.slug}`}
                  className="group relative flex h-full min-h-[132px] flex-col justify-between overflow-hidden rounded-md bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  {/* Hover Image */}
                  <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Image
                      src={s.image}
                      alt={s.alt || s.short}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16.66vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Service Icon */}
                  <div className="relative z-10">
                    <Icon
                      name={s.icon}
                      className="h-8 w-8 text-brand transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Service Name */}
                  <span className="relative z-10 mt-4 text-[0.85rem] font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-white">
                    {s.short}
                  </span>

                  {/* Arrow */}
                  <Icon
                    name="arrow"
                    className="relative z-10 mt-3 h-3.5 w-3.5 self-end text-brand transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                  />
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
