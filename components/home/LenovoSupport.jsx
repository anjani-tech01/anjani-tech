"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Laptop,
  Monitor,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/common/Motion";

export default function LenovoSupport() {
  const support = [
    {
      icon: ShieldCheck,
      title: "Warranty Service",
    },
    {
      icon: Wrench,
      title: "Out-of-Warranty",
    },
    {
      icon: Laptop,
      title: "Laptop & Desktop",
    },
    {
      icon: Monitor,
      title: "All-in-One",
    },
  ];

  return (
    <section className="bg-cloud py-6 sm:py-12 lg:py-16">
      <div className="container-x px-4 sm:px-6">
        <div className="overflow-hidden rounded-xl sm:rounded-md border border-slate-200 bg-white shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center p-5 sm:p-9 lg:p-12">
              <Reveal>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                    Lenovo Support
                  </span>
                  <span className="h-px w-8 sm:w-10 bg-slate-300" />
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="mt-3.5 sm:mt-5 max-w-lg text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] sm:leading-[1.08] tracking-tight text-navy">
                  Expert care for your{" "}
                  <span className="block sm:inline lg:block text-brand">
                    Lenovo devices.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-3 sm:mt-5 max-w-md text-xs sm:text-sm leading-relaxed sm:leading-6 text-slate-600">
                  Professional technical assistance for Lenovo laptops,
                  desktops and All-in-One systems, including warranty and
                  out-of-warranty service.
                </p>
              </Reveal>

              {/* Support Types Grid */}
              <Stagger
                className="mt-5 sm:mt-7 grid grid-cols-2 gap-2 border-y border-slate-200 py-3 sm:gap-0 sm:py-0"
                stagger={0.025}
              >
                {support.map((item) => {
                  const Icon = item.icon;

                  return (
                    <StaggerItem key={item.title}>
                      <div className="flex items-center gap-2 rounded-md bg-slate-50 p-2.5 sm:rounded-none sm:bg-transparent sm:p-0 sm:border-b sm:border-slate-100 sm:py-3.5 sm:last:border-0">
                        <Icon
                          size={16}
                          strokeWidth={1.8}
                          className="shrink-0 text-brand"
                        />
                        <span className="text-[11px] sm:text-xs font-bold text-navy leading-tight">
                          {item.title}
                        </span>
                      </div>
                    </StaggerItem>
                  );
                })}
              </Stagger>

              <Reveal delay={0.18}>
                <div className="mt-5 sm:mt-7 flex flex-wrap items-center justify-between sm:justify-start gap-3">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy"
                  >
                    Talk to our support team
                    <ArrowUpRight
                      size={15}
                      className="text-brand transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  <span className="hidden sm:inline-block h-4 w-px bg-slate-300" />

                  <span className="text-[11px] sm:text-xs text-slate-400">
                    Professional IT Support
                  </span>
                </div>
              </Reveal>
            </div>

            {/* RIGHT PRODUCT AREA */}
            <Reveal delay={0.1}>
              <div className="relative min-h-[260px] xs:min-h-[320px] sm:min-h-[380px] lg:min-h-[470px] overflow-hidden bg-[#f1f3f5]">
                {/* Technical Grid Background */}
                <div className="absolute inset-0 opacity-40">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(#cfd3d8 1px, transparent 1px), linear-gradient(90deg, #cfd3d8 1px, transparent 1px)",
                      backgroundSize: "35px 35px",
                    }}
                  />
                </div>

                {/* Decorative Circles */}
                <div className="absolute -right-20 -top-20 sm:-right-28 sm:-top-28 h-60 w-60 sm:h-80 sm:w-80 rounded-full border border-slate-300 pointer-events-none" />
                <div className="absolute -bottom-24 -left-16 sm:-bottom-32 sm:-left-20 h-56 w-56 sm:h-72 sm:w-72 rounded-full border border-slate-300 pointer-events-none" />

                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-12 lg:p-14">
                  <div className="relative w-full max-w-[280px] xs:max-w-[360px] sm:max-w-[500px] lg:max-w-[560px]">
                    <Image
                      src="/images/lenovo-laptop.png"
                      alt="Lenovo ThinkPad laptop"
                      width={900}
                      height={650}
                      unoptimized
                      className="relative z-10 h-auto w-full object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)] sm:drop-shadow-[0_30px_30px_rgba(0,0,0,0.22)]"
                    />
                  </div>
                </div>

                {/* Floating Device Support Badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-20 rounded-md border border-white/80 bg-white/95 px-3 py-2 sm:px-4 sm:py-3 shadow-sm sm:shadow-card backdrop-blur-sm max-w-[calc(100%-1.5rem)]">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-md bg-navy text-white">
                      <Wrench className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-bold text-navy truncate">
                        Device Support
                      </p>

                      <div className="mt-0.5 flex items-center gap-1 sm:gap-1.5">
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0 text-brand" />
                        <span className="text-[9px] sm:text-[10px] text-slate-500 truncate">
                          Warranty & Out-of-Warranty
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Top Label */}
                <div className="absolute right-3 top-3 sm:right-6 sm:top-6 z-20 text-right">
                  <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Lenovo
                  </p>
                  <p className="mt-0.5 text-[10px] sm:text-xs font-bold text-navy">
                    Business Computing
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bottom Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-slate-200 px-4 py-3 sm:px-8 sm:py-4 bg-slate-50/50 sm:bg-transparent">
            <p className="text-[11px] sm:text-xs font-semibold text-slate-500">
              Laptop <span className="mx-1.5 text-slate-300">•</span>
              Desktop <span className="mx-1.5 text-slate-300">•</span>
              All-in-One
            </p>

            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Professional Technical Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}