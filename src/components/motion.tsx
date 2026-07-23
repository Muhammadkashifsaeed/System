"use client";

import { motion } from "framer-motion";

export function MotionDiv({
  children,
  className,
  custom,
  initial,
  whileInView,
  viewport,
  variants,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      className={className}
      custom={custom}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionH2({
  children,
  className,
  custom,
  initial,
  whileInView,
  viewport,
  variants,
  ...props
}: React.ComponentProps<typeof motion.h2>) {
  return (
    <motion.h2
      className={className}
      custom={custom}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
      {...props}
    >
      {children}
    </motion.h2>
  );
}

export function MotionP({
  children,
  className,
  custom,
  initial,
  whileInView,
  viewport,
  variants,
  ...props
}: React.ComponentProps<typeof motion.p>) {
  return (
    <motion.p
      className={className}
      custom={custom}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
      {...props}
    >
      {children}
    </motion.p>
  );
}
