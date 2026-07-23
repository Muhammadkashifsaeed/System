"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { footerNavigation, topNavigation } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Footer form", formData);
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#0B1020",
        backgroundImage:
          "radial-gradient(circle at 15% 85%, rgba(59,130,246,0.12) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(30,107,184,0.1) 0%, transparent 45%), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 100% 100%, 48px 48px, 48px 48px",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-8">
          {/* Company Column */}
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-4">
            <h3 className="text-lg font-bold text-white">INTEGRITY SPECIALISTS INTERNATIONAL</h3>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Integrity Specialists International, Inc. sustainability and growth plan is to accommodate our clients request with reliable solutions that does not compromise safety, quality, budget, or schedule.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-white/45">Email</p>
                <a href="mailto:info@integritysolns.com" className="text-sm text-white hover:text-white/80 transition-colors">info@integritysolns.com</a>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-white/45">Phone</p>
                <a href="tel:+13377397000" className="text-sm text-white hover:text-white/80 transition-colors">+1 (337) 739-7000</a>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-white/45">Address</p>
                <p className="text-sm text-white hover:text-white/80 transition-colors">Lafayette, Louisiana 70503</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white">QUICK LINKS</h3>
            <ul className="mt-6 space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary transition-all duration-300 group-hover:w-2 group-hover:bg-white" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white">SOLUTIONS</h3>
            <ul className="mt-6 grid grid-cols-1 gap-2">
              {topNavigation.find((n) => n.label === "SOLUTIONS")?.dropdownItems?.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary transition-all duration-300 group-hover:w-2 group-hover:bg-white" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white">STAY CONNECTED</h3>
            <p className="mt-4 text-sm text-white/65">
              Subscribe to our newsletter for the latest updates and insights.
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={cn(
                    "h-12 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
                  )}
                />
                <button
                  type="submit"
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-all duration-300 hover:bg-secondary hover:scale-105"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>

            <div className="mt-8">
              <p className="text-sm text-white/45 mb-3">Contact Information</p>
              <div className="space-y-3">
                <a href="mailto:info@integritysolns.com" className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-primary" />
                  info@integritysolns.com
                </a>
                <a href="tel:+13377397000" className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-primary" />
                  +1 (337) 739-7000
                </a>
                <div className="flex items-start gap-3 text-sm text-white/65">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>Lafayette, Louisiana 70503</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/45">
              Copyright 2021 by local, domestic, and international law by Integrity Specialists International, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/contact" className="text-sm text-white/45 transition-colors hover:text-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
