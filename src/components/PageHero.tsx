"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlayIntensity?: "light" | "medium" | "dark";
  priority?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  overlayIntensity = "medium",
  priority = true,
}: PageHeroProps) {
  const overlayClasses = {
    light: "bg-gradient-to-b from-dark/40 via-dark/30 to-dark/40",
    medium: "bg-gradient-to-b from-dark/45 via-dark/35 to-dark/50",
    dark: "bg-gradient-to-b from-dark/55 via-dark/45 to-dark/60",
  };

  return (
    <section className="relative flex h-[320px] w-full items-center justify-center overflow-hidden sm:h-[360px] md:h-[400px] lg:h-[420px]">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority={priority}
        quality={100}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className={`absolute inset-0 ${overlayClasses[overlayIntensity]}`} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center py-12 text-center sm:py-16 md:py-20">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg md:text-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
