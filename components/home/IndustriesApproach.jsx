"use client";

import Icon from "@/components/common/Icon";
import SectionHeading from "@/components/common/SectionHeading";
import { home } from "@/lib/content";

export default function IndustriesApproach() {
  return (
    <section className="industries-section overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-0">

        <div id="industries" className="industries-content lg:pr-10">
          <div className="section-heading-fade">
            <SectionHeading
              eyebrow="Industries We Serve"
              title="IT Solutions for Businesses & Organizations"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {home.industries.map((i, idx) => (
              <div
                key={i.label}
                className="industry-card group"
                style={{ animationDelay: `${250 + idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 rounded-md border border-slate-100 bg-white px-3 py-3 shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#F26522]/30 hover:shadow-lg">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F26522]/40 bg-[#F26522]/5 transition-all duration-500 group-hover:scale-110 group-hover:border-[#F26522] group-hover:bg-[#F26522]/10">
                    <Icon
                      name={i.icon}
                      className="h-5 w-5 text-[#F26522] transition-transform duration-500 group-hover:scale-110"
                    />
                  </span>

                  <span className="text-[0.82rem] font-bold leading-tight text-navy transition-colors duration-300 group-hover:text-[#F26522]">
                    {i.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="approach-content lg:border-l lg:border-slate-200 lg:pl-10">
          <div className="section-heading-fade approach-heading">
            <SectionHeading
              eyebrow="Our Approach"
              title="From Requirement to Reliable IT Infrastructure"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {home.approach.map((a, idx) => (
              <div
                key={a.label}
                className="approach-card group"
                style={{ animationDelay: `${350 + idx * 120}ms` }}
              >
                <div className="relative flex min-h-[145px] flex-col items-center justify-center rounded-md border border-slate-100 bg-white px-3 pb-5 pt-7 shadow-card transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#F26522]/30 hover:shadow-lg">

                  <span className="absolute -top-3 left-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#F26522] text-[0.65rem] font-bold text-white shadow-md transition-transform duration-500 group-hover:scale-110">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F26522]/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#F26522]/10">
                    <Icon
                      name={a.icon}
                      className="h-6 w-6 text-[#F26522] transition-transform duration-500 group-hover:scale-110"
                    />
                  </span>

                  <span className="mt-3 text-center text-xs font-bold leading-tight text-navy transition-colors duration-300 group-hover:text-[#F26522]">
                    {a.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}