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

export default function NewsClient() {
  return (
    <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden sm:h-[360px] md:h-[400px] lg:h-[420px]">
      <Image
        src="/images/port.jpg"
        alt="News background"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/45 via-dark/35 to-dark/50" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-12 text-center">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          COMING SOON
        </motion.h1>
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white sm:text-lg md:text-xl"
        >
          We are working hard to bring you the latest news and updates from Integrity Specialists International. Stay tuned!
        </motion.p>
      </div>
    </div>
  );
}
