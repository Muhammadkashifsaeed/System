"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function CareersClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    position: "",
    yearsInIndustry: "",
    yearsInCurrentPosition: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Careers form", formData);
  };

  return (
    <div className="flex flex-col">
      <PageHeroWrapper />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <AnimatedSection delay={0}>
                <h2 className="text-3xl font-bold text-black md:text-4xl">
                  CAREERS
                </h2>

                <p className="mt-8 text-base leading-[1.8] text-black md:text-lg">
                  Integrity Specialists International, Inc. appreciates talented,
                  ethical, hardworking, and disciplined stakeholders to join our team
                  for positions that may be available.
                </p>
                <p className="mt-6 text-base leading-[1.8] text-black md:text-lg">
                  If you are interested in joining our team, please provide your
                  information and attach your current resume (CV). Thank you in
                  advance for your interest, someone will contact you.
                </p>
                <p className="mt-6 text-base leading-[1.8] text-black md:text-lg">
                  We are committed to providing equal employment opportunity for all
                  persons regardless of race, color, religion, sex, age, national
                  origin, citizenship status, disability, or veterans status.
                </p>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-7">
              <AnimatedSection delay={1}>
                <form
                  onSubmit={handleSubmit}
                  className="glass-card p-8 md:p-10"
                >
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-black">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="h-[52px] w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-black placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-gray-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(15,76,129,0.1)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-black">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+1 234 567 890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-[52px] w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-black placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-gray-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(15,76,129,0.1)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-black">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-[52px] w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-black placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-gray-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(15,76,129,0.1)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="mb-2 block text-sm font-medium text-black">
                        Your Location
                      </label>
                      <input
                        id="location"
                        type="text"
                        required
                        placeholder="City, Country"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="h-[52px] w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-black placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-gray-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(15,76,129,0.1)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="position" className="mb-2 block text-sm font-medium text-black">
                        Position Applying For
                      </label>
                      <input
                        id="position"
                        type="text"
                        required
                        placeholder="e.g. Project Engineer"
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="h-[52px] w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-black placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-gray-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(15,76,129,0.1)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="yearsInIndustry" className="mb-2 block text-sm font-medium text-black">
                        Years In Industry
                      </label>
                      <input
                        id="yearsInIndustry"
                        type="text"
                        required
                        placeholder="e.g. 5"
                        value={formData.yearsInIndustry}
                        onChange={(e) => setFormData({ ...formData, yearsInIndustry: e.target.value })}
                        className="h-[52px] w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-black placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-gray-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(15,76,129,0.1)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="yearsInCurrentPosition" className="mb-2 block text-sm font-medium text-black">
                        Years In Current Position
                      </label>
                      <input
                        id="yearsInCurrentPosition"
                        type="text"
                        required
                        placeholder="e.g. 2"
                        value={formData.yearsInCurrentPosition}
                        onChange={(e) => setFormData({ ...formData, yearsInCurrentPosition: e.target.value })}
                        className="h-[52px] w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-black placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-gray-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(15,76,129,0.1)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="cv" className="mb-2 block text-sm font-medium text-black">
                        Attach CV
                      </label>
                      <input
                        id="cv"
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        className="h-[52px] w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-black outline-none transition-all duration-300 hover:border-gray-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(15,76,129,0.1)]"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-black">
                        Message (optional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about yourself..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-gray-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(15,76,129,0.1)]"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="btn-primary w-full md:w-auto"
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PageHeroWrapper() {
  return (
    <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden sm:h-[360px] md:h-[400px] lg:h-[420px]">
        <Image
          src="/images/port.jpg"
          alt="Careers background"
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
            CAREERS
          </motion.h1>
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg md:text-xl"
          >
            Join our team of industry professionals
          </motion.p>
        </div>
      </div>
    </div>
  );
}
