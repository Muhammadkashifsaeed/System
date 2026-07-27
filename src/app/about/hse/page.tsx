import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutHSESections from "@/components/AboutHSESections";
import AboutPrinciples from "@/components/AboutPrinciples";
import AboutCompliance from "@/components/AboutCompliance";

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
    images: [
      {
        url: "https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg",
        width: 1200,
        height: 630,
        alt: "HSE Safety",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health, Safety and Environmental (HSE) | Integrity Specialists International",
    description:
      "Integrity Specialists International is committed to Health, Safety, and Environmental excellence through proven programs, risk management, and ISO compliance.",
    images: ["https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg"],
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
        backgroundImage="https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg"
        overlayIntensity="dark"
      />
      <AboutHSESections />
      <AboutPrinciples />
      <AboutCompliance />
    </div>
  );
}
