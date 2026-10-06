"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  className = "",
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={false}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 0.6,
        ease,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

const container = (stagger, delay) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

const item = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease,
    },
  },
};

export function Stagger({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
  immediate = false,
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  if (immediate) {
    return (
      <motion.div
        className={className}
        variants={container(stagger, delay)}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
        margin: "-40px",
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  as = "div",
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;

    return (
      <Tag className={className}>
        {children}
      </Tag>
    );
  }

  const Cmp = motion[as] || motion.div;

  return (
    <Cmp
      className={className}
      variants={item}
    >
      {children}
    </Cmp>
  );
}

export function ImageReveal({
  children,
  className = "",
  from = "right",
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  const hidden =
    from === "right"
      ? "inset(0 0 0 100%)"
      : "inset(0 100% 0 0)";

  return (
    <motion.div
      className={className}
      initial={{
        clipPath: hidden,
        opacity: 0.4,
      }}
      whileInView={{
        clipPath: "inset(0 0 0 0)",
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.1,
        margin: "-40px",
      }}
      transition={{
        duration: 0.9,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}