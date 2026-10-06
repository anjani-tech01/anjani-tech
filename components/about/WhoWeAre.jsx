"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/common/Motion";
import { Handshake, Award, Smile } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { icon: Handshake, a: "Trusted", b: "Partner" },
  { icon: Award, a: "Years of +", b: "Experience" },
  { icon: Smile, a: "Happy", b: "Clients" },
];

const PHOTO = "polygon(10% 0, 72% 0, 64% 100%, 0 100%)";

export default function WhoWeAre() {
  const reduce = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#F4F9FD] py-14 sm:py-16 lg:py-16">
      <div className="container-x mx-auto grid items-center gap-10 px-4 lg:grid-cols-12 lg:gap-6">
        {/* LEFT */}
        <Reveal
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-3 flex items-center gap-3">
            <motion.span
              className="h-[3px] w-9 rounded-full bg-[#F7861E]"
              initial={reduce ? false : { width: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { width: 36, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            />

            <motion.span
              className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0F1F29]"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Who We Are
            </motion.span>
          </div>

          <motion.h2
            className="font-[family-name:var(--font-sora)] text-3xl font-extrabold text-[#0F1F29] sm:text-4xl lg:text-[2.5rem]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Who <span className="text-[#F7861E]">We Are</span>
          </motion.h2>

          <motion.div
            className="mt-4 space-y-3.5 text-[0.85rem] leading-[1.65] text-slate-600 sm:text-[0.9rem]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <p>
              At Anjani Technologies, we believe that technology should make
              business operations more connected, efficient and dependable.
            </p>

            <p>
              We provide a broad range of IT infrastructure and technology
              solutions covering networking, wireless connectivity, structured
              cabling, data centres, servers, storage, security, computing,
              software, communication and power solutions.
            </p>

            <p>
              Our objective is to provide practical technology solutions that
              meet customer requirements while delivering reliability, value
              and long-term support.
            </p>
          </motion.div>
        </Reveal>

        {/* RIGHT */}
        <Reveal
          delay={0.12}
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
        >
          <div className="relative mx-auto aspect-[415/215] w-full max-w-[760px] sm:aspect-[415/215]">
            {/* STATS */}
            <Stagger
              stagger={0.12}
              className="absolute right-0 top-[2%] z-0 flex h-[96%] w-[32%] flex-col justify-around pl-[9%] pr-[4%]"
            >
              {stats.map(({ icon: Icon, a, b }) => (
                <StaggerItem
                  key={a}
                  className="flex flex-1 items-center gap-[7%]"
                >
                  <motion.span
                    className="flex aspect-square w-[34%] max-w-[46px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9A3C] to-[#F7861E] text-white shadow-md shadow-orange-300/60"
                    whileHover={
                      reduce
                        ? undefined
                        : {
                            scale: 1.08,
                            rotate: 4,
                          }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      className="h-[48%] w-[48%]"
                      strokeWidth={2}
                    />
                  </motion.span>

                  <p className="text-[clamp(9px,1.05vw,12px)] font-medium leading-snug text-slate-600">
                    {a}
                    <br />
                    {b}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            {/* PHOTO */}
            <motion.div
              className="absolute inset-0 z-10"
              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      x: 30,
                      scale: 1.03,
                    }
              }
              whileInView={
                reduce
                  ? undefined
                  : {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: PHOTO }}
              >
                <img
                  src="/images/office.png"
                  alt="Bright modern office with glass meeting rooms"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}