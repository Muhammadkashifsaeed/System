"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const offices = [
  {
    name: "Corporate Office",
    address: "Lafayette, Louisiana 70503",
  },
  {
    name: "West Coast District Office",
    address: "Ontario, CA 91761",
  },
  {
    name: "East Coast District Office",
    address: "Birmingham, AL 35209",
  },
  {
    name: "Mexico Office",
    address: "Mexico City, Mexico",
  },
  {
    name: "Nigeria",
    address: "Lagos, Nigeria\nPort Harcourt, Nigeria",
  },
  {
    name: "Gulf Coast District Office",
    address: "Houston, Texas 77057",
  },
  {
    name: "South America Office",
    address: "Georgetown, Guyana",
  },
];

export default function ContactClient() {
  return (
    <div className="flex flex-col">
      <PageHeroWrapper
        title="CONTACT"
        subtitle="Get in touch with our team"
        backgroundImage="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg"
      />

      <section className="bg-[#F8FAFC] section-padding">
        <div className="container-custom">
          <SectionHeader
            title="CONTACT"
            subtitle="Offices across the USA, Mexico, Nigeria, and South America"
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {offices.map((office, idx) => (
              <AnimatedSection key={office.name} delay={idx}>
                <div className="glass-card p-7">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/5 text-black">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">
                        {office.name}
                      </h3>
                      <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-black">
                        {office.address}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={offices.length}>
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-black">
                Request More Information
              </h3>
              <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
                <Mail className="h-6 w-6 text-black" />
                <a
                  href="mailto:info@integritysolns.com"
                  className="text-lg font-medium text-black underline-offset-4 transition-colors duration-300 hover:text-secondary hover:underline"
                >
                  info@integritysolns.com
                </a>
              </div>

              <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
                <Phone className="h-6 w-6 text-black" />
                <a
                  href="tel:+13377397000"
                  className="text-lg font-medium text-black underline-offset-4 transition-colors duration-300 hover:text-secondary hover:underline"
                >
                  +1 (337) 739-7000
                </a>
              </div>

              <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
                <Clock className="h-6 w-6 text-black" />
                <span className="text-base font-medium text-black">
                  Mon - Fri: 8:00 AM - 5:00 PM CST
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

function PageHeroWrapper({ title, subtitle, backgroundImage }: { title: string; subtitle: string; backgroundImage: string }) {
  return (
    <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden sm:h-[360px] md:h-[400px] lg:h-[420px]">
        <Image
          src="https://images.pexels.com/photos/7644016/pexels-photo-7644016.jpeg"
          alt={title}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/45 via-dark/35 to-dark/50" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center py-8 text-center sm:py-10 md:py-12 lg:py-14">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg md:text-xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
