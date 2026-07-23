"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { topNavigation } from "@/lib/constants/navigation";
import type { NavItem } from "@/lib/constants/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

function NavLink({ item, isScrolled }: { item: NavItem; isScrolled: boolean }) {
  const [open, setOpen] = useState(false);

  if (item.hasDropdown && item.dropdownItems) {
    const isSolutions = item.label === "SOLUTIONS";
    const dropdownItems = item.dropdownItems;

    if (isSolutions && dropdownItems.length > 4) {
      const mid = Math.ceil(dropdownItems.length / 2);
      const col1 = dropdownItems.slice(0, mid);
      const col2 = dropdownItems.slice(mid);

      return (
        <li className="relative">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className={`flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
              isScrolled
                ? "text-[#0F172A] hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
            aria-expanded={open}
          >
            {item.label}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </button>

          <div
            className={`absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3 transition-all duration-200 ${
              open ? "opacity-100 visible" : "invisible opacity-0"
            }`}
            onMouseLeave={() => setOpen(false)}
          >
              <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
                <Link
                  href="/solutions"
                  className="flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-[#334155] uppercase tracking-wide transition-colors hover:bg-primary/5 hover:text-primary"
                  onClick={() => setOpen(false)}
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
                          className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-[#334155] uppercase tracking-wide transition-colors hover:bg-primary/5 hover:text-primary"
                          onClick={() => setOpen(false)}
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
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
            isScrolled
              ? "text-[#0F172A] hover:text-primary"
              : "text-white/90 hover:text-white"
          }`}
          aria-expanded={open}
        >
          {item.label}
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>

        <div
          className={`absolute left-0 top-full z-50 w-72 pt-2 transition-all duration-200 ${
            open ? "opacity-100 visible" : "invisible opacity-0"
          }`}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="rounded-2xl border border-gray-100 bg-white shadow-2xl">
            <ul className="py-2">
              {dropdownItems.map((dropdownItem) => (
                <li key={dropdownItem.href}>
                  <Link
                    href={dropdownItem.href}
                    className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-[#334155] uppercase tracking-wide transition-colors hover:bg-primary/5 hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {dropdownItem.label}
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
        className={`block rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
          isScrolled
            ? "text-[#0F172A] hover:text-primary"
              : "text-white/90 hover:text-white"
        }`}
      >
        {item.label}
      </Link>
    </li>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/95 shadow-lg shadow-black/5 border-b border-gray-100/80 backdrop-blur-md"
          : "bg-gradient-to-b from-dark/70 via-dark/60 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="relative flex-shrink-0">
            <div className="rounded-lg bg-white/95 p-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md">
              <Image
                src="/images/logo.jpg"
                alt="Integrity Specialists International"
                width={120}
                height={36}
                quality={100}
                priority
                className="h-10 w-auto object-contain md:h-12"
              />
            </div>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {topNavigation.map((item) => (
                <NavLink key={item.href} item={item} isScrolled={scrolled} />
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className={`transition-all duration-300 hover:scale-105 ${
                scrolled
                  ? "btn-primary"
                  : "btn-outline"
              }`}
            >
              GET IN TOUCH
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden ${
              scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-[#0F172A]" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-[#0F172A]" : "text-white"}`} />
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
              <ul className="flex flex-col gap-1">
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
  const [open, setOpen] = useState(false);

  if (item.hasDropdown && item.dropdownItems) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-wider text-[#0F172A] transition-colors hover:bg-gray-50"
          aria-expanded={open}
        >
          {item.label}
          <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden pl-4"
            >
              <ul className="flex flex-col gap-1 pb-2">
                {item.dropdownItems.map((dropdownItem) => (
                  <li key={dropdownItem.href}>
                    <Link
                      href={dropdownItem.href}
                      onClick={onClose}
                      className="block rounded-xl px-4 py-2.5 text-sm font-medium text-[#475569] transition-colors hover:bg-primary/5 hover:text-primary"
                    >
                      {dropdownItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="block rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-wider text-[#0F172A] transition-colors hover:bg-gray-50 hover:text-primary"
    >
      {item.label}
    </Link>
  );
}
