"use client";

import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { Reveal } from "@/components/common/Motion";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutIntro() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="about-intro-title"
      className="relative isolate overflow-hidden bg-[#F5F7FA] py-12 text-slate-900 sm:py-14 lg:py-16"
    >
      <div className="container-x flex min-h-[360px] items-center lg:min-h-[390px]">
        {/* CONTENT */}
        <Reveal className="relative z-10 w-full lg:w-[44%]">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="About Anjani Technologies"
              title="Your Trusted IT Infrastructure Partner in"
              accent="Ahmedabad"
              size="lg"
            />

            <p className="mt-4 max-w-lg font-body text-[0.82rem] leading-6 text-slate-700 sm:mt-5 sm:text-sm sm:leading-7">
              We design and deliver end-to-end IT infrastructure and technology
              solutions with reliable products, expert guidance and dedicated
              support for businesses, educational institutions and organizations.
            </p>

            <div className="mt-5 sm:mt-6">
              <Button href="/about" variant="ghost">
                Learn More
              </Button>
            </div>
          </div>
        </Reveal>

        {/* IMAGE - 58% WIDTH / FULL IMAGE */}
        <motion.div
          className="absolute right-0 top-1/2 hidden w-[58%] -translate-y-1/2 sm:block"
          initial={reduce ? false : { opacity: 0, x: 30 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src="/images/about-bg.png"
            alt="Anjani Technologies IT infrastructure and technology solutions"
            width={1100}
            height={700}
            priority
            className="block h-auto w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}