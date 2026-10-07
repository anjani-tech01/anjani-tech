"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import { Reveal } from "@/components/common/Motion";
import { services } from "@/lib/content";

const field =
  "w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-[0.85rem] text-navy placeholder:text-slate-400 transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

const label =
  "mb-1.5 block text-[0.8rem] font-bold text-navy";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setStatus("idle");

    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: d.name,
          company: d.company,
          phone: d.phone,
          email: d.email,
          service: d.service,
          message: d.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send enquiry");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Reveal
      delay={0.1}
      className="rounded-md border border-slate-100 bg-white p-6 shadow-card sm:p-7"
    >
      <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brand">
        Contact Form
      </p>

      <h2 className="mt-2 font-display text-2xl font-bold sm:text-[1.7rem]">
        Tell Us About Your IT Requirements
      </h2>

      <form
        onSubmit={onSubmit}
        className="mt-6 space-y-4"
        noValidate={false}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={label}>
              Full Name
            </label>

            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Enter your full name"
              className={field}
            />
          </div>

          <div>
            <label htmlFor="company" className={label}>
              Company / Organization
            </label>

            <input
              id="company"
              name="company"
              autoComplete="organization"
              placeholder="Enter your company name"
              className={field}
            />
          </div>

          <div>
            <label htmlFor="phone" className={label}>
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="Enter your phone number"
              className={field}
            />
          </div>

          <div>
            <label htmlFor="email" className={label}>
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Enter your email address"
              className={field}
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className={label}>
            Select Service
          </label>

          <select
            id="service"
            name="service"
            defaultValue={services[0].title}
            className={field}
          >
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={label}>
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your requirements..."
            className={`${field} resize-y`}
          />
        </div>

        <Button type="submit" icon="arrow">
          {loading ? "Sending..." : "Send Enquiry"}
        </Button>

        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${
            status === "success"
              ? "text-green-600"
              : status === "error"
              ? "text-red-600"
              : "text-panel/80"
          }`}
        >
          {status === "success" &&
            "Your enquiry has been sent successfully."}

          {status === "error" &&
            "Unable to send your enquiry. Please try again."}
        </p>
      </form>
    </Reveal>
  );
}