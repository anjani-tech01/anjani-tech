"use client";
import Image from "next/image";
import { useState } from "react";

/** next/image with a graceful dark fallback if the asset has not been added yet. */
export default function SafeImage({ src, alt, className = "", ...props }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 bg-gradient-to-br from-panel via-navy to-charcoal"
      />
    );
  }
  return <Image src={src} alt={alt} className={className} onError={() => setFailed(true)} {...props} />;
}
