import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutCompliance from "@/components/AboutCompliance";

export const metadata: Metadata = {
  title: "Quality Compliance & Clients Served | Integrity Specialists International",
  description:
    "ISI provides quality compliance and serves clients across domestic and international energy, industrial, and infrastructure sectors.",
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
      "ISI provides quality compliance and serves clients across domestic and international energy, industrial, and infrastructure sectors.",
    url: "https://www.integritysolns.com/about/quality-compliance-clients-served",
    siteName: "Integrity Specialists International",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/15970027/pexels-photo-15970027.jpeg",
        width: 1200,
        height: 630,
        alt: "Quality Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Compliance & Clients Served | Integrity Specialists International",
    description:
      "ISI provides quality compliance and serves clients across domestic and international energy, industrial, and infrastructure sectors.",
    images: ["https://images.pexels.com/photos/15970027/pexels-photo-15970027.jpeg"],
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
        backgroundImage="https://images.pexels.com/photos/15970027/pexels-photo-15970027.jpeg"
        overlayIntensity="dark"
      />
      <AboutCompliance />
    </div>
  );
}
