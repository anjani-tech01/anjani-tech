"use client";

import { motion, useReducedMotion } from "framer-motion";
import SafeImage from "@/components/common/SafeImage";
import Button from "@/components/common/Button";
import { Stagger, StaggerItem } from "@/components/common/Motion";

export default function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="
        relative isolate overflow-hidden bg-navy text-white
        min-h-[680px]
        sm:min-h-[560px] sm:h-[560px]
        lg:min-h-[550px] lg:h-[550px]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <motion.div
        className="absolute inset-0 -z-30 overflow-hidden"
        initial={
          reduce
            ? undefined
            : {
                scale: 1.04,
                opacity: 0,
              }
        }
        animate={
          reduce
            ? undefined
            : {
                scale: [1.04, 1.02],
                opacity: 1,
              }
        }
        transition={{
          opacity: {
            duration: 1.2,
            ease: "easeOut",
          },
          scale: {
            duration: 24,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      >
        <SafeImage
          src="/images/hero-building.png"
          alt="Enterprise server racks and IT infrastructure in a modern data centre"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[72%_center]
            sm:object-[75%_center]
            lg:object-right
          "
        />
      </motion.div>

      {/* ================= DARK OVERLAY ================= */}
      <motion.div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-gradient-to-b
          from-black/90
          via-black/75
          to-black/65
          sm:bg-gradient-to-r
          sm:from-black/95
          sm:via-black/75
          sm:to-transparent
          lg:w-[70%]
        "
        initial={
          reduce
            ? undefined
            : {
                opacity: 0,
              }
        }
        animate={
          reduce
            ? undefined
            : {
                opacity: 1,
              }
        }
        transition={{
          duration: 1.2,
          delay: 0.15,
          ease: "easeOut",
        }}
      />

      {/* ================= MOBILE IMAGE DARKEN ================= */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0 -z-20
          h-[45%]
          bg-gradient-to-t
          from-black/70
          to-transparent
          sm:hidden
        "
      />

      {/* ================= SOFT GLOW ================= */}
      <div
        aria-hidden="true"
        className="
          absolute inset-y-0 left-0 -z-20
          hidden w-[45%]
          bg-black/20 blur-2xl
          sm:block
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          container-x relative z-10
          flex min-h-[680px] items-center
          py-14
          sm:h-full sm:min-h-0 sm:py-10
          lg:py-12
        "
      >
        <div className="grid w-full items-center lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={
              reduce
                ? undefined
                : {
                    opacity: 0,
                    y: 28,
                  }
            }
            animate={
              reduce
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Stagger
              immediate
              stagger={0.08}
              delay={0.1}
              className="max-w-xl"
            >
              {/* ================= LABEL ================= */}
              <StaggerItem>
                <p
                  className="
                    mb-3
                    flex items-center gap-2
                    text-[0.65rem]
                    font-bold uppercase
                    tracking-[0.18em]
                    text-brand
                    sm:mb-4
                    sm:text-[0.68rem]
                  "
                >
                  About Us

                  <span
                    aria-hidden="true"
                    className="h-[2px] w-7 bg-brand sm:w-8"
                  />
                </p>
              </StaggerItem>

              {/* ================= HEADING ================= */}
              <StaggerItem>
                <h1
                  id="hero-title"
                  className="
                    font-display
                    text-[2rem]
                    font-bold
                    leading-[1.08]
                    !text-white
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  About Anjani{" "}
                  <span className="block text-brand">
                    Technologies
                  </span>
                </h1>
              </StaggerItem>

              {/* ================= SUBHEADING ================= */}
              <StaggerItem>
                <p
                  className="
                    mt-3
                    max-w-md
                    font-display
                    text-[0.95rem]
                    font-semibold
                    leading-snug
                    text-white
                    sm:mt-4
                    sm:text-lg
                    lg:text-xl
                  "
                >
                  A Trusted Technology Partner for Businesses &amp;
                  Organizations
                </p>
              </StaggerItem>

              {/* ================= DESCRIPTION ================= */}
              <StaggerItem>
                <div className="max-w-lg">
                  <p
                    className="
                      mt-3
                      text-[0.76rem]
                      leading-[1.6]
                      text-white/90
                      sm:mt-4
                      sm:text-sm
                    "
                  >
                    Anjani Technologies is an IT solutions provider
                    focused on delivering reliable, innovative and
                    cost-effective technology solutions for businesses,
                    educational institutions and organizations.
                  </p>

                  <p
                    className="
                      mt-2
                      text-[0.76rem]
                      leading-[1.6]
                      text-white/80
                      sm:text-sm
                    "
                  >
                    Our approach begins with understanding the client’s
                    requirements and identifying the right products and
                    services supported by expert guidance and dedicated
                    after-sales support.
                  </p>
                </div>
              </StaggerItem>

              {/* ================= BUTTONS ================= */}
              <StaggerItem>
                <div
                  className="
                    mt-6
                    flex flex-col gap-3
                    sm:mt-6
                    sm:flex-row
                    sm:flex-wrap
                  "
                >
                  <Button
                    href="/services"
                    className="w-full sm:w-auto"
                  >
                    Explore Our Services
                  </Button>

                  <Button
                    href="/contact"
                    variant="outline"
                    icon="headset"
                    className="w-full sm:w-auto"
                  >
                    Talk to Our Experts
                  </Button>
                </div>
              </StaggerItem>
            </Stagger>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
