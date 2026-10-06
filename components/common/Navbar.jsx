"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Button from "@/components/common/Button";
import { site } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 180, damping: 15, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 15, mass: 0.5 });

  const handleMagneticMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.12);
    mouseY.set(y * 0.12);
  };

  const resetMagnetic = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const isActive = (href) => {
    if (href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className={`sticky top-0 z-[100] transition-all duration-500 ${scrolled ? "px-3 pt-2 lg:px-5" : "px-0 pt-0"}`}>
        <motion.div animate={{ height: scrolled ? 66 : 78, borderRadius: scrolled ? 18 : 0, marginTop: scrolled ? 2 : 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className={`relative overflow-hidden border ${scrolled ? "border-slate-200/70 bg-white/90 backdrop-blur-2xl" : "border-transparent bg-white"}`}>
          <motion.div className="pointer-events-none absolute inset-y-0 -left-[30%] w-[25%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-brand/10 to-transparent" animate={{ left: ["-30%", "130%"] }} transition={{ duration: 5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }} />
          <motion.div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent" animate={{ opacity: scrolled ? 1 : 0, scaleX: scrolled ? 1 : 0.5 }} transition={{ duration: 0.5 }} />

          <div className="container-x relative flex h-full items-center justify-between">
            <Link href="/" aria-label="Anjani Technologies" className="group relative flex shrink-0 items-center">
              <motion.div animate={{ scale: scrolled ? 0.88 : 1 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <Image src="/images/logo1.png" alt="Anjani Technologies" width={150} height={35} priority className="h-[50px] w-auto object-contain sm:h-[62px]" />
              </motion.div>
              <motion.span className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-10 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-2xl" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1.2, 0.8] }} transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 5 }} />
            </Link>

            <nav aria-label="Primary" className="hidden lg:flex lg:items-center">
              <div className="relative flex items-center rounded-full border border-slate-200/70 bg-slate-50/60 p-1.5 backdrop-blur-md">
                {site.nav.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link key={link.label} href={link.href} aria-current={active ? "page" : undefined} className="group relative px-4 py-2">
                      {active && <motion.span layoutId="active-pill" className="absolute inset-0 rounded-full bg-white" transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.7 }} />}
                      <motion.span className="absolute inset-0 rounded-full bg-brand/10" initial={{ opacity: 0, scale: 0.8 }} whileHover={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25 }} />
                      <motion.span className={`relative z-10 block text-[0.78rem] font-semibold tracking-wide ${active ? "text-brand" : "text-navy/80 group-hover:text-navy"}`} whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>{link.label}</motion.span>
                      {active && <motion.span layoutId="active-dot" className="absolute -bottom-[2px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand" transition={{ type: "spring", stiffness: 500, damping: 30 }} />}
                      <motion.span className="absolute bottom-1 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-brand" whileHover={{ width: "45%" }} transition={{ duration: 0.3, ease: "easeOut" }} />
                    </Link>
                  );
                })}
              </div>
            </nav>

            <motion.div className="hidden lg:block" style={{ x: springX, y: springY }} onMouseMove={handleMagneticMove} onMouseLeave={resetMagnetic}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                <Button href="/contact" className="group relative !overflow-hidden !rounded-full !px-5 !py-2.5 text-[0.78rem]">
                  <motion.span className="absolute inset-y-0 -left-10 w-8 skew-x-[-20deg] bg-white/30" animate={{ x: ["0%", "500%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }} />
                  <span className="relative z-10 flex items-center gap-2">Get a Quote</span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)} whileTap={{ scale: 0.88 }} className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-50 text-navy lg:hidden">
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.25 }}><X className="h-5 w-5" /></motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: -90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.25 }}><Menu className="h-5 w-5" /></motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={() => setOpen(false)} className="fixed inset-0 z-[90] bg-navy/20 backdrop-blur-sm lg:hidden" />

            <motion.div id="mobile-menu" initial={{ opacity: 0, y: -25, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.96 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="fixed left-3 right-3 top-[74px] z-[95] overflow-hidden rounded-2xl border border-slate-200 bg-white lg:hidden">
              <motion.div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.1 }} />

              <div className="p-4">
                {site.nav.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.div key={link.label} initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                      <Link href={link.href} onClick={() => setOpen(false)} className={`group flex items-center justify-between rounded-xl px-4 py-3.5 ${active ? "bg-brand/10 text-brand" : "text-navy hover:bg-slate-50"}`}>
                        <span className="text-[0.95rem] font-semibold">{link.label}</span>
                        <motion.span className={`flex h-7 w-7 items-center justify-center rounded-full ${active ? "bg-brand text-white" : "bg-slate-100 text-navy"}`} whileHover={{ x: 4, scale: 1.08 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}><ArrowUpRight className="h-3.5 w-3.5" /></motion.span>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Simple Fade In / Fade Out Get a Quote */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }} className="mt-3 w-full">
                  <motion.div animate={{ opacity: [1, 0.82, 1], boxShadow: ["0 0 0 rgba(247,134,30,0)", "0 0 22px rgba(247,134,30,0.20)", "0 0 0 rgba(247,134,30,0)"] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.97 }} className="w-full rounded-xl">
                    <Button href="/contact" onClick={() => setOpen(false)} className="w-full !rounded-xl !px-6 !py-3.5">Get a Quote</Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}