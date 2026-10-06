"use client";

import SafeImage from "@/components/common/SafeImage";
import Icon from "@/components/common/Icon";

function Panel({ dark, icon, eyebrow, title, text, image, alt, contentClassName = "", contentWidthClassName = "max-w-sm" }) {
  return (
    <div className={`relative isolate overflow-hidden ${dark ? "bg-navy text-white" : "bg-white text-panel"}`}>
      {/* Background */}
      <SafeImage
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className={`absolute inset-0 -z-20 object-cover ${dark ? "opacity-60" : "opacity-50 object-bottom"}`}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 -z-10 ${dark ? "bg-gradient-to-r from-navy via-navy/40 to-navy/10" : ""}`} />

      {/* CONTENT */}
      <div className={`container-x flex gap-5 py-12 lg:py-10 ${contentClassName}`}>
        {/* Icon */}
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-brand text-brand"
          style={{
            opacity: 1,
            visibility: "visible",
            transform: "none",
          }}
        >
          <Icon name={icon} className="h-8 w-8" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <div
          className={contentWidthClassName}
          style={{
            opacity: 1,
            visibility: "visible",
            transform: "none",
          }}
        >
          <p className={`text-[0.7rem] font-bold uppercase tracking-[0.2em] ${dark ? "text-white" : "text-navy"}`}>{eyebrow}</p>

          <h2 className={`mt-3 font-display text-2xl font-bold sm:text-[1.7rem] ${dark ? "!text-white" : ""}`}>
            {title.split(" ")[0]} <span className="text-brand">{title.split(" ")[1]}</span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed">{text}</p>

          <span aria-hidden="true" className="mt-5 block h-[2px] w-10 bg-brand" />
        </div>
      </div>
    </div>
  );
}

export default function VisionMission() {
  return (
    <section
      aria-label="Vision and mission"
      className="grid md:grid-cols-2"
      style={{
        opacity: 1,
        visibility: "visible",
        display: "grid",
      }}
    >
      {/* Vision */}
      <Panel
        dark
        icon="eye"
        eyebrow="Our Vision"
        title="Our Vision"
        image="/images/vision-bg.png"
        alt="Mountain peaks under a night sky"
        text="To be a leading and most preferred technology partner, recognized for our integrity, innovation, excellence and commitment to customer success, delivering reliable and innovative technology solutions that help businesses grow."
        contentClassName="lg:pl-16 xl:pl-40"
      />

      {/* Mission */}
      <Panel
        icon="target"
        eyebrow="Our Mission"
        title="Our Mission"
        image="/images/mission-bg.png"
        alt="Snow-covered mountain range in daylight"
        text="To provide high-quality IT products and services under one roof with a focus on reliability, value and customer satisfaction, while helping businesses and institutions grow through technology."
      />
    </section>
  );
}
