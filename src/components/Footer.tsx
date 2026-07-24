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
        <div className="grid grid-cols-1 gap-10 py-14 lg:grid-cols-12 lg:gap-8">
          {/* Company Column */}
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-4">
            <h3 className="text-sm font-bold tracking-wider text-white">INTEGRITY SPECIALISTS INTERNATIONAL</h3>
            <p className="mt-3 text-xs leading-relaxed text-white">
              Integrity Specialists International, Inc. sustainability and growth plan is to accommodate our clients request with reliable solutions that does not compromise safety, quality, budget, or schedule.
            </p>
             <div className="mt-6 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-white">Email</p>
                <a href="mailto:info@integritysolns.com" className="text-xs text-white hover:text-white/80 transition-colors">info@integritysolns.com</a>
              </div>
            </div>
            <div className="mt-2.5 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-white">Phone</p>
                <a href="tel:+13377397000" className="text-xs text-white hover:text-white/80 transition-colors">+1 (337) 739-7000</a>
              </div>
            </div>
            <div className="mt-2.5 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-white">Address</p>
                <p className="text-xs text-white hover:text-white/80 transition-colors">Lafayette, Louisiana 70503</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wider text-white">QUICK LINKS</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-xs font-medium text-white transition-colors hover:text-white"
                  >
                     <span className="h-[3px] w-[3px] rounded-full bg-white transition-all duration-300 group-hover:w-1.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white">SOLUTIONS</h3>
            <ul className="mt-3 grid grid-cols-1 gap-1">
               {topNavigation.find((n) => n.label === "SOLUTIONS")?.dropdownItems?.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1.5 text-[11px] font-medium text-white transition-colors hover:text-white"
                  >
                     <span className="h-[3px] w-[3px] rounded-full bg-white transition-all duration-300 group-hover:w-1.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-wider text-white">STAY CONNECTED</h3>
            <p className="mt-3 text-xs text-white">
              Subscribe to our newsletter for the latest updates and insights.
            </p>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={cn(
                    "h-10 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 text-xs text-white placeholder:text-white/50 outline-none transition-all duration-300 focus:border-white/30 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.1)]"
                  )}
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white text-dark transition-all duration-300 hover:bg-white/90 hover:scale-105"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-xs text-white mb-2.5">Contact Information</p>
              <div className="space-y-2.5">
                <a href="mailto:info@integritysolns.com" className="flex items-center gap-2.5 text-xs text-white transition-colors hover:text-white/80">
                  <Mail className="h-3.5 w-3.5 text-white" />
                  info@integritysolns.com
                </a>
                <a href="tel:+13377397000" className="flex items-center gap-2.5 text-xs text-white transition-colors hover:text-white/80">
                  <Phone className="h-3.5 w-3.5 text-white" />
                  +1 (337) 739-7000
                </a>
                <div className="flex items-start gap-2.5 text-xs text-white">
                  <MapPin className="mt-px h-3.5 w-3.5 flex-shrink-0 text-white" />
                  <span>Lafayette, Louisiana 70503</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-5">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-[11px] text-white">
              Copyright 2021 by local, domestic, and international law by Integrity Specialists International, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="text-xs text-white transition-colors hover:text-white/80">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
