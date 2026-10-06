"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import { Reveal } from "@/components/common/Motion";

export default function CTABand() {
  const actions = [
    { label: "Contact Us", href: "/contact", variant: "primary" },
    { label: "Explore Services", href: "/services", variant: "secondary" },
  ];

  return (
    <section className="cta-band relative isolate overflow-hidden text-white">
      <motion.div initial={{ scale: 1.08, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0 -z-30">
        <Image src="/images/cta-bg.png" alt="" fill priority sizes="100vw" className="cta-bg object-cover" />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="cta-overlay absolute inset-0 -z-20 bg-black/45" />
      <motion.div aria-hidden="true" className="cta-glow pointer-events-none absolute -right-32 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.65, 0.35] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 -z-10 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" animate={{ x: [0, 40, 0], y: [0, 25, 0], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div aria-hidden="true" className="cta-line pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-brand/70 to-transparent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }} />

      <div className="container-x py-14 lg:py-16">
        <Reveal className="max-w-3xl">
          <motion.div className="cta-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.p className="cta-eyebrow mb-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brand" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              TRUST • TECHNOLOGY • SOLUTIONS
            </motion.p>

            <motion.h2 className="cta-title font-display text-2xl font-bold leading-tight !text-white sm:text-3xl lg:text-[2.1rem]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}>
              Let's Build Your IT Infrastructure
            </motion.h2>

            <motion.p className="cta-text mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}>
              Get reliable IT infrastructure and technology solutions designed
              around your <br className="hidden sm:block" />
              business, institution or organization. From networking and Wi-Fi
              to servers, <br className="hidden sm:block" />
              security, computing and communication, we're ready to help.
            </motion.p>

            <motion.div className="cta-actions mt-6 flex flex-wrap gap-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.45 }}>
              {actions.map((action, index) => (
                <motion.div key={action.label} className="cta-button" initial={{ opacity: 0, y: 15, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.55 + index * 0.12, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Button href={action.href} variant={action.variant} icon="arrow">
                    {action.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}