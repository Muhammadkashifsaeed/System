"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { topNavigation } from "@/lib/constants/navigation";
import type { NavItem } from "@/lib/constants/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

function NavLink({ item }: { item: NavItem }) {
  if (item.hasDropdown && item.dropdownItems) {
    const isSolutions = item.label === "SOLUTIONS";
    const dropdownItems = item.dropdownItems;

    if (isSolutions && dropdownItems.length > 4) {
      const mid = Math.ceil(dropdownItems.length / 2);
      const col1 = dropdownItems.slice(0, mid);
      const col2 = dropdownItems.slice(mid);

      return (
        <li className="relative group">
          <div
            className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors text-black hover:text-primary"
          >
            {item.label}
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
          </div>

          <div
            className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200"
          >
               <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl premium-shadow">
                 <Link
                   href="/solutions"
                   className="group flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-black uppercase tracking-wide transition-colors hover:bg-primary/5 hover:text-primary"
                 >
                   <span className="line-clamp-1">All Solutions</span>
                   <ArrowRight className="ml-auto h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
                 </Link>
                <div className="mt-1 grid grid-cols-2 gap-1">
                  {[col1, col2].map((col, ci) => (
                    <div key={ci}>
                      {col.map((dropdownItem) => (
                     <Link
                       key={dropdownItem.href}
                       href={dropdownItem.href}
                       className="group flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-black uppercase tracking-wide transition-colors hover:bg-primary/5 hover:text-primary"
                     >
                       <span className="line-clamp-1">{dropdownItem.label}</span>
                       <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
                     </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </li>
      );
    }

    return (
      <li className="relative group">
        <div
          className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors text-black hover:text-primary"
        >
          {item.label}
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        </div>

        <div
          className="absolute left-0 top-full z-50 w-72 pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200"
        >
          <div className="rounded-2xl border border-gray-100 bg-white shadow-2xl premium-shadow">
            <ul className="py-2">
              {dropdownItems.map((dropdownItem) => (
                <li key={dropdownItem.href}>
                  <Link
                    href={dropdownItem.href}
                    className="group flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-black uppercase tracking-wide transition-colors hover:bg-primary/5 hover:text-primary"
                  >
                    <span className="line-clamp-1">{dropdownItem.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href}
        className="block rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors text-black hover:text-primary"
      >
        {item.label}
      </Link>
    </li>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg shadow-black/5 border-b border-gray-100/80 backdrop-blur-md"
          : "bg-white/90 shadow-sm border-b border-gray-100/60 backdrop-blur-sm"
      }`}
    >
      <div className="absolute top-0 left-0 h-[3px] bg-primary transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-[3px] bg-primary transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="relative flex-shrink-0">
            <div className="rounded-lg p-2 shadow-sm transition-all duration-300 hover:shadow-md">
              <Image
                src="/images/menttion.png"
                alt="Integrity Specialists International"
                width={120}
                height={36}
                quality={100}
                priority
                className="h-16 w-auto object-contain md:h-20"
              />
            </div>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {topNavigation.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary transition-all duration-300 hover:scale-105"
            >
              GET IN TOUCH
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors hover:bg-white/10 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <nav className="mx-auto max-w-7xl px-6 py-4">
              <ul className="flex flex-col gap-1 max-h-[calc(100vh-80px)] overflow-y-auto pb-4">
                {topNavigation.map((item) => (
                  <li key={item.href}>
                    <MobileNavLink item={item} onClose={() => setMenuOpen(false)} />
                  </li>
                ))}
                <li className="mt-4">
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="btn-primary w-full"
                  >
                    GET IN TOUCH
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileNavLink({ item, onClose }: { item: NavItem; onClose: () => void }) {
  if (item.hasDropdown && item.dropdownItems) {
    return (
      <div>
        <div
          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-wider text-black bg-gray-50"
          aria-expanded="true"
        >
          {item.label}
          <ChevronDown className="h-5 w-5 rotate-180" />
        </div>

        <div className="overflow-hidden pl-4">
          <ul className="flex flex-col gap-1 pb-2">
            {item.dropdownItems.map((dropdownItem) => (
              <li key={dropdownItem.href}>
                <Link
                  href={dropdownItem.href}
                  onClick={onClose}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  {dropdownItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="block rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-wider text-black transition-colors hover:bg-gray-50 hover:text-black"
    >
      {item.label}
    </Link>
  );
}
