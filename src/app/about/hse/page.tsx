import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutHSESections from "@/components/AboutHSESections";

export const metadata: Metadata = {
  title: "Health, Safety and Environmental (HSE) | Integrity Specialists International",
  description:
    "Integrity Specialists International is committed to Health, Safety, and Environmental excellence through proven programs, risk management, and ISO compliance.",
  keywords: [
    "HSE",
    "Health and Safety",
    "Environmental",
    "Safety Management",
    "ISO 14001",
    "OHSAS 18001",
    "Job Safety Analysis",
    "Risk Management",
  ],
  openGraph: {
    title: "Health, Safety and Environmental (HSE) | Integrity Specialists International",
    description:
      "Integrity Specialists International is committed to Health, Safety, and Environmental excellence through proven programs, risk management, and ISO compliance.",
    url: "https://www.integritysolns.com/about/hse",
    siteName: "Integrity Specialists International",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health, Safety and Environmental (HSE) | Integrity Specialists International",
    description:
      "Integrity Specialists International is committed to Health, Safety, and Environmental excellence through proven programs, risk management, and ISO compliance.",
  },
  alternates: {
    canonical: "/about/hse",
  },
};

export default function AboutHSEPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Health, Safety & Environment"
        subtitle="Our Obligation to Health, Safety, and Environmental (HSE)"
        backgroundImage="/images/gas1.webp"
        overlayIntensity="dark"
      />
      <AboutHSESections />
    </div>
  );
}
