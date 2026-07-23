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

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  showLink?: boolean;
  linkHref?: string;
  linkLabel?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  theme = "light",
  showLink = false,
  linkHref = "#",
  linkLabel = "Learn More",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <motion.div
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${isDark ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-6 text-lg leading-relaxed md:text-xl ${isDark ? "text-white" : "text-black"}`}>
          {subtitle}
        </p>
      )}
      {showLink && (
        <Link
          href={linkHref}
          className={`mt-8 inline-flex items-center gap-2 text-base font-semibold transition-all duration-300 hover:gap-3 ${
            isDark ? "text-blue-300 hover:text-white" : "text-primary hover:text-secondary"
          }`}
        >
          {linkLabel}
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      )}
    </motion.div>
  );
}
