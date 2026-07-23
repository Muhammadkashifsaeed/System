"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CTABanner({
  title = "Ready to Start Your Next Project?",
  subtitle = "Let us help you deliver world-class engineering and industrial solutions.",
  buttonLabel = "CONTACT US",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-dark to-primary">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(59,130,246,0.2) 0%, transparent 50%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h2>
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white md:text-xl"
          >
            {subtitle}
          </motion.p>
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10"
          >
            <Link
              href={buttonHref}
              className="btn-primary"
            >
              {buttonLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
