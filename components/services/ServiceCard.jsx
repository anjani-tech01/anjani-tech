"use client";

import SafeImage from "@/components/common/SafeImage";
import Icon from "@/components/common/Icon";

export default function ServiceCard({ service, index }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      id={service.slug}
      className="
        group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-md
        bg-white shadow-card
        transition-all duration-500
        hover:-translate-y-1.5 hover:shadow-lift
        animate-service-fade
      "
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >
      {/* Image */}
      <div className="relative h-32 overflow-hidden bg-navy sm:h-44 lg:h-48">
        <SafeImage
          src={service.image}
          alt={service.alt}
          fill
          sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw"
          className="
            object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />

        {/* Soft image fade */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>

      {/* Service Icon */}
      <div className="relative -mt-7 px-5">
        <span
          className="
            flex h-14 w-14 items-center justify-center
            rounded-full bg-brand text-white
            shadow-lg ring-4 ring-white
            transition-all duration-500 ease-out
            group-hover:scale-105
            group-hover:rotate-2
          "
        >
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-6 pt-2">
        <h3 className="flex items-baseline gap-2 text-lg font-bold">
          <span className="font-display text-base font-medium text-brand">{num}</span>

          {service.title}
        </h3>

        <p className="mt-1 text-xs font-semibold text-panel/70">{service.subtitle}</p>

        <p className="mt-3 text-[0.82rem] leading-relaxed">{service.description}</p>

        {/* Points */}
        <ul className="mt-4 space-y-1.5">
          {service.points.map((p, pointIndex) => (
            <li
              key={p}
              className="
                flex items-center gap-2.5 text-[0.8rem]
                transition-all duration-300
                group-hover:translate-x-0.5
              "
              style={{
                transitionDelay: `${pointIndex * 30}ms`,
              }}
            >
              <span
                className="
                  flex h-4 w-4 shrink-0 items-center justify-center
                  rounded-full bg-brand text-white
                  transition-transform duration-300
                  group-hover:scale-105
                "
              >
                <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3.5} />
              </span>

              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
