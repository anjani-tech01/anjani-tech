"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin, MoveUpRight } from "lucide-react";
import { site } from "@/lib/site";

const paths = {
  linkedin:
    "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.75h4V21H3V9.75zm6.5 0h3.83v1.54h.06c.53-.95 1.84-1.95 3.78-1.95 4.04 0 4.78 2.66 4.78 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4V9.75z",

  facebook:
    "M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.25-1.5 1.55-1.5h1.65V3.45A22 22 0 0014.3 3.3c-2.4 0-4.05 1.47-4.05 4.15v2.35H7.5V13h2.75v8h3.25z",

  instagram:
    "M7.5 3h9A4.5 4.5 0 0121 7.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3zm0 1.8A2.7 2.7 0 004.8 7.5v9a2.7 2.7 0 002.7 2.7h9a2.7 2.7 0 002.7-2.7v-9a2.7 2.7 0 00-2.7-2.7h-9zM12 7.8a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4zm0 1.8a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm4.6-3.1a1 1 0 110 2 1 1 0 010-2z",

  youtube:
    "M21.6 7.2a2.5 2.5 0 00-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.83.43A2.5 2.5 0 002.4 7.2C2 8.78 2 12 2 12s0 3.22.4 4.8a2.5 2.5 0 001.77 1.77C5.75 19 12 19 12 19s6.25 0 7.83-.43a2.5 2.5 0 001.77-1.77C22 15.22 22 12 22 12s0-3.22-.4-4.8zM10 15V9l5.2 3L10 15z",
};

export default function Footer() {
  const navLinks = site.nav || [];
  const socialLinks = site.social || [];

  return (
    <footer className="relative w-full overflow-hidden bg-white pt-6 sm:pt-8">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] bg-brand-dark/[0.05] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[280px] w-[280px] bg-brand/[0.04] blur-[100px]"
      />

      {/* FULL WIDTH FOOTER */}
      <div className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#07090b]">
        {/* Top Accent */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />

        {/* CONTENT */}
        <div className="w-full px-4 py-8 sm:px-8 sm:py-8 lg:px-12 lg:py-7 xl:px-16">
          {/* MAIN GRID */}
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.7fr_1fr_1fr] lg:gap-10">
            {/* BRAND */}
            <div className="relative">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-5 bg-brand" />
                <span className="text-[9px] sm:text-[7px] font-medium uppercase tracking-[0.2em] text-white/40">
                  Technology & Infrastructure
                </span>
              </div>

              <Link href="/" className="group block">
                <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.85] sm:leading-[0.76] tracking-[-0.075em] text-white">
                  ANJANI
                </h2>

                <div className="mt-2 sm:mt-1.5 flex items-center gap-2">
                  <span className="text-[clamp(1.1rem,2.5vw,1.7rem)] font-semibold tracking-[-0.045em] text-brand transition-colors duration-300 group-hover:text-white">
                    TECHNOLOGIES
                  </span>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>

              <p className="mt-4 max-w-[400px] text-[13px] sm:text-[12px] leading-relaxed sm:leading-5 text-white/50 sm:text-white/40">
                IT infrastructure, networking and technology solutions designed to help modern businesses stay connected, secure and ready
                for growth.
              </p>

              {/* Social */}
              <div className="mt-5 sm:mt-4 flex flex-wrap gap-2 sm:gap-1.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-9 w-9 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand active:scale-95"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 sm:h-3 sm:w-3 fill-current text-white/50 transition-colors duration-300 group-hover:text-white"
                      aria-hidden="true"
                    >
                      <path d={paths[social.icon]} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* EXPLORE & CONNECT FLEX CONTAINER FOR MOBILE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:contents">
              {/* EXPLORE */}
              <div>
                <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2 lg:border-none lg:pb-0">
                  <span className="text-[9px] sm:text-[7px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-white/35">
                    Explore
                  </span>

                  <span className="text-[9px] sm:text-[7px] text-white/30 sm:text-white/20">01</span>
                </div>

                <ul>
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between border-b border-white/[0.055] py-2.5 sm:py-2 text-[13px] sm:text-[11px] text-white/65 sm:text-white/55 transition-colors duration-300 hover:text-white"
                      >
                        <span>{link.label}</span>

                        <MoveUpRight className="h-3 w-3 sm:h-2.5 sm:w-2.5 -translate-x-1 translate-y-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONNECT */}
              <div>
                <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2 lg:border-none lg:pb-0">
                  <span className="text-[9px] sm:text-[7px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-white/35">
                    Connect
                  </span>

                  <span className="text-[9px] sm:text-[7px] text-white/30 sm:text-white/20">02</span>
                </div>

                {/* Location */}
                <div className="border-b border-white/[0.055] pb-3">
                  <div className="mb-1.5 flex items-center gap-1.5 text-white/40 sm:text-white/35">
                    <MapPin className="h-3.5 w-3.5 sm:h-3 sm:w-3 text-brand" />

                    <span className="text-[8px] sm:text-[7px] uppercase tracking-[0.15em]">Headquarters</span>
                  </div>

                  <p className="text-[12px] sm:text-[11px] text-white/70 sm:text-white/55">Ahmedabad, Gujarat</p>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="group mt-4 sm:mt-3 flex items-center justify-between rounded-lg sm:rounded-md border border-white/10 bg-white/[0.03] sm:bg-white/[0.02] p-3.5 sm:px-3 sm:py-2.5 transition-all duration-300 hover:border-brand/50 hover:bg-brand active:scale-[0.99]"
                >
                  <div>
                    <p className="text-[8px] sm:text-[7px] uppercase tracking-[0.14em] text-white/40 sm:text-white/30 transition-colors group-hover:text-white/70">
                      Have a project?
                    </p>

                    <p className="mt-0.5 text-[12px] sm:text-[11px] font-medium text-white">Let's talk</p>
                  </div>

                  <span className="flex h-7 w-7 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/[0.08] sm:bg-white/[0.06] text-white transition-all duration-300 group-hover:bg-white group-hover:text-brand">
                    <ArrowUpRight className="h-3.5 w-3.5 sm:h-3 sm:w-3" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="mt-8 sm:mt-6 h-px bg-gradient-to-r from-white/[0.1] via-white/[0.04] to-transparent" />

          {/* BOTTOM */}
          <div className="flex flex-col gap-3 pt-4 sm:pt-3 text-[10px] sm:text-[8px] text-white/40 sm:text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1">
              <p>© {new Date().getFullYear()} Anjani Technologies.</p>

              <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />

              <p>All rights reserved.</p>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Ahmedabad, Gujarat</span>
            </div>
          </div>
        </div>

        {/* BACKGROUND BRAND TEXT */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-3 left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap lg:block"
        >
          <span className="text-[clamp(6rem,13vw,13rem)] font-black leading-none tracking-[-0.1em] text-white/[0.018]">
            ANJANI
          </span>
        </div>
      </div>
    </footer>
  );
}