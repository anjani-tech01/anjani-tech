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
    <section className="bg-cloud py-12 lg:py-16">
      <div className="container-x">
        <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-card">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
                    Lenovo Support
                  </span>

                  <span className="h-px w-10 bg-slate-300" />
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="mt-5 max-w-lg text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-[44px]">
                  Expert care for your
                  <span className="block text-brand">
                    Lenovo devices.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
                  Professional technical assistance for Lenovo laptops,
                  desktops and All-in-One systems, including warranty and
                  out-of-warranty service.
                </p>
              </Reveal>

              {/* Support Types */}
              <Stagger
                className="mt-7 grid grid-cols-2 border-y border-slate-200"
                stagger={0.025}
              >
                {support.map((item) => {
                  const Icon = item.icon;

                  return (
                    <StaggerItem key={item.title}>
                      <div className="flex items-center gap-2.5 border-b border-slate-100 py-3.5 last:border-0">
                        <Icon
                          size={16}
                          strokeWidth={1.8}
                          className="text-brand"
                        />

                        <span className="text-xs font-bold text-navy">
                          {item.title}
                        </span>
                      </div>
                    </StaggerItem>
                  );
                })}
              </Stagger>

              <Reveal delay={0.18}>
                <div className="mt-7 flex items-center gap-3">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-sm font-bold text-navy"
                  >
                    Talk to our support team

                    <ArrowUpRight
                      size={16}
                      className="text-brand transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  <span className="h-4 w-px bg-slate-300" />

                  <span className="text-xs text-slate-400">
                    Professional IT Support
                  </span>
                </div>
              </Reveal>
            </div>

            {/* RIGHT PRODUCT AREA */}
            <Reveal delay={0.1}>
              <div className="relative min-h-[360px] overflow-hidden bg-[#f1f3f5] lg:min-h-[470px]">
                {/* Technical Background */}
                <div className="absolute inset-0 opacity-40">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(#cfd3d8 1px, transparent 1px), linear-gradient(90deg, #cfd3d8 1px, transparent 1px)",
                      backgroundSize: "45px 45px",
                    }}
                  />
                </div>

                {/* Silver Circle */}
                <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-slate-300" />

                <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-slate-300" />

                {/* Image */}
                <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 lg:p-14">
                  <div className="relative w-full max-w-[560px]">
                    <Image
                      src="/images/lenovo-laptop.png"
                      alt="Lenovo ThinkPad laptop"
                      width={900}
                      height={650}
                      unoptimized
                      className="relative z-10 h-auto w-full object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.22)]"
                    />
                  </div>
                </div>

                {/* Premium Floating Card */}
                <div className="absolute bottom-6 left-6 z-20 rounded-md border border-white/70 bg-white/95 px-4 py-3 shadow-card backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-white">
                      <Wrench size={15} />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-navy">
                        Device Support
                      </p>

                      <div className="mt-1 flex items-center gap-1.5">
                        <Check size={11} className="text-brand" />

                        <span className="text-[10px] text-slate-500">
                          Warranty & Out-of-Warranty
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Label */}
                <div className="absolute right-6 top-6 z-20 text-right">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Lenovo
                  </p>

                  <p className="mt-1 text-xs font-bold text-navy">
                    Business Computing
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Minimal Bottom Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-6 py-4 sm:px-8">
            <p className="text-xs font-semibold text-slate-500">
              Laptop <span className="mx-2 text-slate-300">•</span>
              Desktop <span className="mx-2 text-slate-300">•</span>
              All-in-One
            </p>

            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Professional Technical Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}