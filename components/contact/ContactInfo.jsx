"use client";

import Icon from "@/components/common/Icon";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Motion";
import { site } from "@/lib/site";

const rows = [
  {
    icon: "call",
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: "mail",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "globe",
    label: "Website",
    value: site.website,
    href: site.url,
  },
  {
    icon: "pin",
    label: "Office",
    value: site.address.lines,
    href: site.mapsUrl,
  },
];

export default function ContactInfo() {
  return (
    <Reveal className="relative overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_20px_60px_rgba(3,37,76,0.08)]">
      {/* Top accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-[3px] bg-brand"
      />

      <div className="p-5 sm:p-7 lg:p-8">
        {/* Header */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand sm:w-10" />

            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brand sm:text-xs">
              Get in Touch
            </p>
          </div>

          <h2 className="mt-4 font-display text-[1.7rem] font-bold leading-[1.15] tracking-[-0.02em] text-navy sm:text-2xl lg:text-[1.85rem]">
            Talk to Our Technology Team
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500 sm:text-[0.92rem]">
            Connect with our team for reliable IT infrastructure,
            networking and technology solutions tailored to your
            business requirements.
          </p>
        </div>

        {/* Contact Details */}
        <Stagger
          className="mt-7 border-t border-slate-200 sm:mt-8"
          stagger={0.1}
          delay={0.15}
        >
          {rows.map((r) => (
            <StaggerItem
              key={r.label}
              className="group border-b border-slate-200 last:border-b-0"
            >
              <a
                href={r.href}
                {...(r.label === "Office" || r.label === "Website"
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="flex min-w-0 items-center gap-3 py-4 transition-all duration-300 sm:gap-5 sm:py-[18px]"
              >
                {/* Icon */}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-navy transition-all duration-300 group-hover:border-brand/30 group-hover:bg-brand group-hover:text-white sm:h-11 sm:w-11">
                  <Icon
                    name={r.icon}
                    className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-105"
                  />
                </span>

                {/* Text */}
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-[0.68rem]">
                    {r.label}
                  </span>

                  <span className="mt-1 block break-words text-[0.86rem] font-semibold leading-6 text-navy transition-colors duration-300 group-hover:text-brand sm:text-[0.92rem]">
                    {Array.isArray(r.value)
                      ? r.value.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))
                      : r.value}
                  </span>
                </span>

                {/* Arrow */}
                <span className="hidden shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand sm:block">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Bottom status */}
        <div className="mt-6 flex items-center gap-2.5 border-t border-slate-100 pt-5 sm:mt-7 sm:pt-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>

          <p className="text-xs font-medium text-slate-500 sm:text-sm">
            Our technology team is available to assist you.
          </p>
        </div>
      </div>

      {/* Subtle reveal line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand transition-transform duration-700 group-hover:scale-x-100"
      />

      <style jsx>{`
        :global(.contact-info-premium) {
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </Reveal>
  );
}
