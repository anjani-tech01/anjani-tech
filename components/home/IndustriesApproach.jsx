"use client";

import Icon from "@/components/common/Icon";
import SectionHeading from "@/components/common/SectionHeading";
import { home } from "@/lib/content";

export default function IndustriesApproach() {
  return (
    <section className="industries-section overflow-hidden bg-white py-8 sm:py-14 lg:py-16">
      <div className="container-x grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-0">
        {/* INDUSTRIES WE SERVE */}
        <div id="industries" className="industries-content lg:pr-10">
          <div className="section-heading-fade">
            <SectionHeading
              eyebrow="Industries We Serve"
              title="IT Solutions for Businesses & Organizations"
            />
          </div>

          {/* 2-col on mobile/phablets for crisp layout, 3-col on desktop */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
            {home.industries.map((i, idx) => (
              <div
                key={i.label}
                className="industry-card group"
                style={{ animationDelay: `${250 + idx * 100}ms` }}
              >
                <div className="flex h-full items-center gap-2.5 rounded-lg border border-slate-100 bg-white p-2.5 sm:p-3 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F26522]/30 hover:shadow-lg active:scale-[0.98]">
                  <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-[#F26522]/40 bg-[#F26522]/5 transition-all duration-300 group-hover:scale-105 group-hover:border-[#F26522] group-hover:bg-[#F26522]/10">
                    <Icon
                      name={i.icon}
                      className="h-4 w-4 sm:h-5 sm:w-5 text-[#F26522] transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>

                  <span className="text-[0.78rem] sm:text-[0.82rem] font-bold leading-tight text-navy transition-colors duration-300 group-hover:text-[#F26522]">
                    {i.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="approach-content pt-2 sm:pt-0 border-t border-slate-100 sm:border-t-0 lg:border-l lg:border-slate-200 lg:pl-10">
          <div className="section-heading-fade approach-heading">
            <SectionHeading
              eyebrow="Our Approach"
              title="From Requirement to Reliable IT Infrastructure"
            />
          </div>

          {/* 2x2 grid on mobile with space at top for badges */}
          <div className="mt-8 sm:mt-8 pt-2 grid grid-cols-2 gap-3.5 sm:gap-4 sm:grid-cols-4">
            {home.approach.map((a, idx) => (
              <div
                key={a.label}
                className="approach-card group"
                style={{ animationDelay: `${350 + idx * 120}ms` }}
              >
                <div className="relative flex min-h-[120px] sm:min-h-[145px] flex-col items-center justify-center rounded-lg border border-slate-100 bg-white px-2.5 pb-4 pt-6 sm:px-3 sm:pb-5 sm:pt-7 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F26522]/30 hover:shadow-lg active:scale-[0.98]">
                  {/* Step Badge */}
                  <span className="absolute -top-3 left-3 sm:left-3 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#F26522] text-[0.6rem] sm:text-[0.65rem] font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#F26522]/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F26522]/10">
                    <Icon
                      name={a.icon}
                      className="h-5 w-5 sm:h-6 sm:w-6 text-[#F26522] transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>

                  {/* Label */}
                  <span className="mt-2.5 sm:mt-3 text-center text-[0.75rem] sm:text-xs font-bold leading-tight text-navy transition-colors duration-300 group-hover:text-[#F26522]">
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