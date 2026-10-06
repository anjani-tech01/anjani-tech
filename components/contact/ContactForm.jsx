"use client";
import { useState } from "react";
import Button from "@/components/common/Button";
import { Reveal } from "@/components/common/Motion";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

const field =
  "w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-[0.85rem] text-navy placeholder:text-slate-400 transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";
const label = "mb-1.5 block text-[0.8rem] font-bold text-navy";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  function onSubmit(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const body = [
      `Name: ${d.name}`,
      `Company / Organization: ${d.company || "-"}`,
      `Phone: ${d.phone}`,
      `Email: ${d.email}`,
      `Service: ${d.service}`,
      "",
      d.message || "",
    ].join("\n");
    setStatus("sent");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${d.service} – ${d.name}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <Reveal delay={0.1} className="rounded-xl border border-slate-100 bg-white p-6 shadow-card sm:p-7">
      <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brand">Contact Form</p>
      <h2 className="mt-2 font-display text-2xl font-bold sm:text-[1.7rem]">Tell Us About Your IT Requirements</h2>
      <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate={false}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><label htmlFor="name" className={label}>Full Name</label><input id="name" name="name" required autoComplete="name" placeholder="Enter your full name" className={field} /></div>
          <div><label htmlFor="company" className={label}>Company / Organization</label><input id="company" name="company" autoComplete="organization" placeholder="Enter your company name" className={field} /></div>
          <div><label htmlFor="phone" className={label}>Phone Number</label><input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="Enter your phone number" className={field} /></div>
          <div><label htmlFor="email" className={label}>Email Address</label><input id="email" name="email" type="email" required autoComplete="email" placeholder="Enter your email address" className={field} /></div>
        </div>
        <div>
          <label htmlFor="service" className={label}>Select Service</label>
          <select id="service" name="service" defaultValue={services[0].title} className={field}>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="message" className={label}>Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Tell us about your requirements..." className={`${field} resize-y`} />
        </div>
        <Button type="submit" icon="arrow">Send Enquiry</Button>
        <p role="status" aria-live="polite" className="text-sm text-panel/80">
          {status === "sent" && "Opening your email app with the enquiry ready to send. You can also call us on " + site.phone + "."}
        </p>
      </form>
    </Reveal>
  );
}
