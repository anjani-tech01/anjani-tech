"use client";

import SafeImage from "@/components/common/SafeImage";

/** Right-hand photo with an angled left edge and an orange stripe, as in the page heroes. */
export default function SlantedBg({ src, alt, priority = false, widthClass = "lg:w-[62%]", sizes = "(min-width:1024px) 62vw, 100vw", position = "object-center" }) {
  return (
    <div className={`absolute inset-y-0 right-0 -z-10 w-full ${widthClass}`}>
      <div className="absolute inset-0 lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]">
        <SafeImage src={src} alt={alt} fill priority={priority} sizes={sizes} className={`object-cover ${position}`} />
      </div>
      <div aria-hidden="true" className="absolute inset-0 hidden bg-brand lg:block [clip-path:polygon(16%_0,18.5%_0,2.5%_100%,0_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/75 lg:hidden" />
    </div>
  );
}
