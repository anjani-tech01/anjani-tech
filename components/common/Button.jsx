"use client";

import Link from "next/link";
import Icon from "@/components/common/Icon";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out active:scale-[0.98] focus-visible:outline-offset-4";

const variants = {
  primary: "bg-brand text-white shadow-[0_8px_20px_-8px_rgba(247,134,30,0.8)] hover:bg-brand-dark hover:-translate-y-0.5",
  outline: "border border-white/70 text-white hover:bg-white hover:text-navy hover:-translate-y-0.5",
  outlineDark: "border border-navy/70 text-navy hover:bg-navy hover:text-white hover:-translate-y-0.5",
  ghost: "text-navy hover:text-brand px-0 py-0",
};

export default function Button({ href, children, variant = "primary", icon = "arrow", className = "", type = "button", ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <Icon
          name={icon}
          className={`h-4 w-4 ${icon === "arrow" ? "transition-transform duration-300 group-hover:translate-x-1" : ""}`}
        />
      )}
    </>
  );
  if (href) {
    const external = /^(https?:|tel:|mailto:)/.test(href);
    return external ? (
      <a href={href} className={cls} {...rest}>{content}</a>
    ) : (
      <Link href={href} className={cls} {...rest}>{content}</Link>
    );
  }
  return (
    <button type={type} className={cls} {...rest}>{content}</button>
  );
}
