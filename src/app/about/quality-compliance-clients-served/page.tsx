import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutCompliance from "@/components/AboutCompliance";

export const metadata: Metadata = {
  title: "Quality Compliance & Clients Served | Integrity Specialists International",
  description:
    "Integrity Specialists International maintains ISO 9001:2015 certified quality management, client-focused compliance, and global stakeholder trust since 2012.",
  keywords: [
    "Quality Compliance",
    "Clients Served",
    "ISO 9001",
    "Quality Management",
    "Engineering Compliance",
    "Industrial Quality",
    "Client Solutions",
  ],
  openGraph: {
    title: "Quality Compliance & Clients Served | Integrity Specialists International",
    description:
      "Integrity Specialists International maintains ISO 9001:2015 certified quality management, client-focused compliance, and global stakeholder trust since 2012.",
    url: "https://www.integritysolns.com/about/quality-compliance-clients-served",
    siteName: "Integrity Specialists International",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Compliance & Clients Served | Integrity Specialists International",
    description:
      "Integrity Specialists International maintains ISO 9001:2015 certified quality management, client-focused compliance, and global stakeholder trust since 2012.",
  },
  alternates: {
    canonical: "/about/quality-compliance-clients-served",
  },
};

export default function QualityCompliancePage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Quality Compliance"
        subtitle="Maintaining the highest standards through ISO certifications and industry memberships"
        backgroundImage="/images/gas2.webp"
        overlayIntensity="dark"
      />
      <AboutCompliance />
    </div>
  );
}
