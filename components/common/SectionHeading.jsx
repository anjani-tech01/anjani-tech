"use client";

export default function SectionHeading({ eyebrow, title, accent, accentFirst = false, align = "left", dark = false, as: Tag = "h2", className = "", size = "md" }) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  const sizeCls = size === "lg" ? "text-3xl sm:text-4xl lg:text-[2.6rem]" : "text-2xl sm:text-3xl lg:text-[2.1rem]";
  return (
    <div className={`flex flex-col gap-3 ${alignCls} ${className}`}>
      {eyebrow && (
        <p className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brand">
          <span aria-hidden="true" className="h-[2px] w-6 bg-brand" />
          {eyebrow}
        </p>
      )}
      <Tag className={`font-display font-bold leading-tight ${sizeCls} ${dark ? "!text-white" : ""}`}>
        {accentFirst && accent && <span className="text-brand">{accent} </span>}
        {title}
        {!accentFirst && accent && <span className="text-brand"> {accent}</span>}
      </Tag>
    </div>
  );
}
