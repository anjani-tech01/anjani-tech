"use client";

import Icon from "@/components/common/Icon";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Motion";

export default function LocationSection() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-14 lg:py-16">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-2.5 sm:mb-4 flex items-center gap-3">
                <span className="h-[2px] w-6 bg-brand sm:w-8" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand sm:text-xs">Coordinates</span>
              </div>
              <h2 className="text-2xl font-bold leading-[1.1] tracking-[-0.035em] text-[#03254C] sm:text-4xl lg:text-[46px]">
                Find us where <br className="hidden sm:block" />
                <span className="text-brand"> business happens.</span>
              </h2>
            </div>
            <div className="max-w-sm lg:pb-1">
              <p className="text-xs sm:text-sm leading-relaxed sm:leading-6 text-slate-500">
                Our Ahmedabad office connects businesses with dependable infrastructure, networking and technology solutions.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-7 sm:mt-11 lg:mt-14">
          <div className="pointer-events-none absolute -top-5 left-0 select-none overflow-hidden text-[52px] font-black uppercase leading-none tracking-[-0.06em] text-slate-50 sm:-top-10 sm:text-[110px] lg:text-[150px]">
            AHMEDABAD
          </div>

          <div className="relative grid items-center gap-7 lg:grid-cols-[1fr_1.35fr] lg:gap-10 xl:gap-14">
            <Stagger className="relative z-10">
              <StaggerItem>
                <Reveal>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#03254C] text-white shadow-lg shadow-slate-200">
                      <Icon name="map-pin" className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.7} />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Office Location</p>
                      <p className="mt-0.5 text-xs sm:text-sm font-bold text-slate-900">Nehrunagar, Ahmedabad</p>
                    </div>
                  </div>
                </Reveal>
              </StaggerItem>

              <StaggerItem>
                <Reveal delay={0.08}>
                  <div className="mt-6 sm:mt-10">
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-brand">Anjani Technologies</p>
                    <h3 className="mt-2 sm:mt-3 max-w-md text-xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      Your technology partner in Ahmedabad.
                    </h3>
                    <p className="mt-2.5 sm:mt-4 max-w-md text-xs sm:text-sm leading-relaxed sm:leading-6 text-slate-500">
                      214 Galaxy Mall, Opp. Jhansi ki Rani BRTS Stop, Nehrunagar, Ahmedabad 380015
                    </p>
                  </div>
                </Reveal>
              </StaggerItem>

              <StaggerItem>
                <Reveal delay={0.16}>
                  <div className="mt-5 sm:mt-7 flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="rounded-full border border-slate-200 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-semibold text-slate-600">IT Infrastructure</span>
                    <span className="rounded-full border border-slate-200 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-semibold text-slate-600">Networking</span>
                    <span className="rounded-full border border-slate-200 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-semibold text-slate-600">Technology Solutions</span>
                  </div>
                </Reveal>
              </StaggerItem>

              <StaggerItem>
                <Reveal delay={0.24}>
                  <a href="https://www.google.com/maps/search/?api=1&query=214%20Galaxy%20Mall%2C%20Opp.%20Jhansi%20ki%20Rani%20BRTS%20Stop%2C%20Nehrunagar%2C%20Ahmedabad%20380015" target="_blank" rel="noopener noreferrer" className="mt-6 sm:mt-8 inline-flex w-full justify-center sm:w-auto items-center gap-3 rounded-full bg-[#03254C] px-5 py-2.5 sm:py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand">
                    <span>Get Directions</span>
                    <Icon name="arrow-up-right" className="h-4 w-4" strokeWidth={2} />
                  </a>
                </Reveal>
              </StaggerItem>
            </Stagger>

            <Reveal delay={0.12} className="relative z-10">
              <div className="relative mx-auto max-w-[700px]">
                <div className="absolute -left-2 -top-2 z-20 h-8 w-8 sm:h-10 sm:w-10 border-l-2 border-t-2 border-brand sm:-left-3 sm:-top-3" />
                <div className="absolute -bottom-2 -right-2 z-20 h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-r-2 border-brand sm:-bottom-3 sm:-right-3" />

                <div className="relative overflow-hidden border border-slate-200 bg-slate-100 shadow-[0_18px_55px_rgba(3,37,76,0.1)]">
                  <div className="h-[220px] sm:h-[330px] lg:h-[390px]">
                    <iframe title="Anjani Technologies Location - Ahmedabad" src="https://www.google.com/maps?q=214%20Galaxy%20Mall,%20Opp.%20Jhansi%20ki%20Rani%20BRTS%20Stop,%20Nehrunagar,%20Ahmedabad%20380015&output=embed" className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>

                  <div className="absolute left-3 top-3 sm:left-5 sm:top-5">
                    <div className="flex items-center gap-2 rounded-full bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                      </span>
                      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.16em] text-slate-800">Our Location</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-x border-b border-slate-200 px-3.5 py-2.5 sm:px-5 sm:py-3">
                  <div className="flex items-center gap-2">
                    <Icon name="navigation" className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand" strokeWidth={1.8} />
                    <span className="text-[10px] font-semibold text-slate-500 sm:text-xs">Nehrunagar · Ahmedabad · Gujarat</span>
                  </div>
                  <span className="hidden text-[9px] font-bold uppercase tracking-[0.15em] text-slate-300 sm:block">380015</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.25}>
          <div className="mt-8 sm:mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-100" />
            <div className="h-1.5 w-1.5 rounded-full bg-brand" />
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}