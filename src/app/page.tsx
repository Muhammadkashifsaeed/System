import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import PowerIndustries from "@/components/PowerIndustries";
import AboutWhoWeAre from "@/components/AboutWhoWeAre";
import AboutCompliance from "@/components/AboutCompliance";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrity Specialists International | Engineering & Industrial Solutions",
  description:
    "Integrity Specialists International provides professional engineering, industrial, commissioning, electrical, staffing, marine construction, operations, maintenance and project planning solutions.",
  keywords: [
    "Integrity Specialists International",
    "Engineering Solutions",
    "Industrial Services",
    "Oil and Gas",
    "Project Planning",
    "Marine Construction",
    "Operations Maintenance",
    "Electrical Engineering",
    "Commissioning",
    "Asset Integrity",
    "Industrial Support",
    "Energy Solutions",
  ],
  openGraph: {
    title: "Integrity Specialists International | Engineering & Industrial Solutions",
    description:
      "Proven professional and technical solutions for both domestic & international customers in the industry sectors we serve.",
    url: "https://www.integritysolns.com",
    siteName: "Integrity Specialists International",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrity Specialists International | Engineering & Industrial Solutions",
    description:
      "Proven professional and technical solutions for both domestic & international customers in the industry sectors we serve.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative flex h-[320px] w-full items-center justify-center overflow-hidden sm:h-[360px] md:h-[400px] lg:h-[420px]">
        <Image
          src="/images/port.jpg"
          alt="Industrial background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/40 to-dark/50" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-center py-8 pb-12 text-center sm:py-10 md:pb-16 lg:pb-20">
            <AnimatedSection delay={1}>
              <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
                Integrity Specialists International, Inc. <span className="text-gradient">(ISI)</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
                Proven professional and technical solutions for both domestic & international customers in the industry sectors we serve. We have experience in both onshore and offshore projects and assets lifecycles.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Link
                  href="/solutions"
                  className="btn-primary"
                >
                  EXPLORE SOLUTIONS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="btn-outline"
                >
                  LEARN MORE
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            title="Industries Served"
            subtitle="Delivering excellence across domestic and international industry sectors with proven expertise."
            showLink
            linkHref="/solutions"
            linkLabel="View All Solutions"
          />
          <div className="mt-16">
            <PowerIndustries />
          </div>
        </div>
      </section>

      <AboutWhoWeAre />

      {/* ABOUT COMPLIANCE */}
      <AboutCompliance />
    </div>
  );
}
