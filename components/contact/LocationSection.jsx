"use client";

import Icon from "@/components/common/Icon";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Motion";

export default function LocationSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-16">
      <div className="container-x">

        {/* HEADER */}
        <Reveal>
          <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-brand" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand sm:text-xs">
                  Coordinates
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-[#03254C] sm:text-4xl lg:text-[46px]">
                Find us where
                <br className="hidden sm:block" />
                <span className="text-brand"> business happens.</span>
              </h2>
            </div>

            <div className="max-w-sm lg:pb-1">
              <p className="text-sm leading-6 text-slate-500">
                Our Ahmedabad office connects businesses with dependable
                infrastructure, networking and technology solutions.
              </p>
            </div>
          </div>
        </Reveal>

        {/* MAIN LOCATION VISUAL */}
        <div className="relative mt-9 sm:mt-11 lg:mt-14">

          {/* FADED BACKGROUND TEXT */}
          <div className="pointer-events-none absolute -top-7 left-0 select-none overflow-hidden text-[70px] font-black uppercase leading-none tracking-[-0.06em] text-slate-50 sm:-top-10 sm:text-[110px] lg:text-[150px]">
            AHMEDABAD
          </div>

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-10 xl:gap-14">

            {/* LOCATION DETAILS */}
            <Stagger className="relative z-10">

              <StaggerItem>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#03254C] text-white shadow-lg shadow-slate-200">
                      <Icon
                        name="map-pin"
                        className="h-5 w-5"
                        strokeWidth={1.7}
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Office Location
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-900">
                        Nehrunagar, Ahmedabad
                      </p>
                    </div>
                  </div>
                </Reveal>
              </StaggerItem>

              <StaggerItem>
                <Reveal delay={0.08}>
                  <div className="mt-8 sm:mt-10">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                      Anjani Technologies
                    </p>

                    <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      Your technology partner in Ahmedabad.
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                      214 Galaxy Mall, Opp. Jhansi ki Rani BRTS Stop,
                      Nehrunagar, Ahmedabad 380015
                    </p>
                  </div>
                </Reveal>
              </StaggerItem>

              <StaggerItem>
                <Reveal delay={0.16}>
                  <div className="mt-7 flex flex-wrap gap-2">
                    <span className="rounded-full border border-slate-200 px-3 py-1.5 text-[10px] font-semibold text-slate-600">
                      IT Infrastructure
                    </span>
                    <span className="rounded-full border border-slate-200 px-3 py-1.5 text-[10px] font-semibold text-slate-600">
                      Networking
                    </span>
                    <span className="rounded-full border border-slate-200 px-3 py-1.5 text-[10px] font-semibold text-slate-600">
                      Technology Solutions
                    </span>
                  </div>
                </Reveal>
              </StaggerItem>

              <StaggerItem>
                <Reveal delay={0.24}>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=214%20Galaxy%20Mall%2C%20Opp.%20Jhansi%20ki%20Rani%20BRTS%20Stop%2C%20Nehrunagar%2C%20Ahmedabad%20380015"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#03254C] px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand"
                  >
                    <span>Get Directions</span>
                    <Icon
                      name="arrow-up-right"
                      className="h-4 w-4"
                      strokeWidth={2}
                    />
                  </a>
                </Reveal>
              </StaggerItem>

            </Stagger>

            {/* UNIQUE MAP FRAME */}
            <Reveal delay={0.12} className="relative z-10">
              <div className="relative mx-auto max-w-[700px]">

                {/* CORNER ACCENTS */}
                <div className="absolute -left-2 -top-2 z-20 h-10 w-10 border-l-2 border-t-2 border-brand sm:-left-3 sm:-top-3" />
                <div className="absolute -bottom-2 -right-2 z-20 h-10 w-10 border-b-2 border-r-2 border-brand sm:-bottom-3 sm:-right-3" />

                {/* MAP */}
                <div className="relative overflow-hidden border border-slate-200 bg-slate-100 shadow-[0_18px_55px_rgba(3,37,76,0.1)]">
                  <div className="h-[260px] sm:h-[330px] lg:h-[390px]">
                    <iframe
                      title="Anjani Technologies Location - Ahmedabad"
                      src="https://www.google.com/maps?q=214%20Galaxy%20Mall,%20Opp.%20Jhansi%20ki%20Rani%20BRTS%20Stop,%20Nehrunagar,%20Ahmedabad%20380015&output=embed"
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* MAP FLOATING TAG */}
                  <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                    <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                      </span>

                      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-800">
                        Our Location
                      </span>
                    </div>
                  </div>
                </div>

                {/* COORDINATE BAR */}
                <div className="flex items-center justify-between border-x border-b border-slate-200 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="navigation"
                      className="h-3.5 w-3.5 text-brand"
                      strokeWidth={1.8}
                    />
                    <span className="text-[10px] font-semibold text-slate-500 sm:text-xs">
                      Nehrunagar · Ahmedabad · Gujarat
                    </span>
                  </div>

                  <span className="hidden text-[9px] font-bold uppercase tracking-[0.15em] text-slate-300 sm:block">
                    380015
                  </span>
                </div>

              </div>
            </Reveal>
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <Reveal delay={0.25}>
          <div className="mt-10 flex items-center gap-4 sm:mt-12">
            <div className="h-px flex-1 bg-slate-100" />
            <div className="h-1.5 w-1.5 rounded-full bg-brand" />
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}