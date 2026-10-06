"use client";

import SafeImage from "@/components/common/SafeImage";

/** Photo card with an angled edge and an orange accent bar. */
export default function SlantImage({ src, alt, sizes = "(min-width:1024px) 50vw, 100vw", side = "left", className = "" }) {
  const left = side === "left";
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className={`absolute inset-y-0 ${left ? "left-0 [clip-path:polygon(45%_0,100%_0,55%_100%,0_100%)]" : "right-0 [clip-path:polygon(0_0,55%_0,100%_100%,45%_100%)]"} w-14 bg-gradient-to-b from-brand to-brand-dark`}
      />
      <div
        className={`relative h-full overflow-hidden ${left ? "ml-6 [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]" : "mr-6 [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]"}`}
      >
        <SafeImage src={src} alt={alt} fill sizes={sizes} className="object-cover transition-transform duration-700 ease-out hover:scale-105" />
      </div>
    </div>
  );
}
