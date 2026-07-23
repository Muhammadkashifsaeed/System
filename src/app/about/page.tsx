import type { Metadata } from "next";
import AboutWhoWeAre from "@/components/AboutWhoWeAre";
import AboutHSESections from "@/components/AboutHSESections";
import AboutPrinciples from "@/components/AboutPrinciples";
import AboutCompliance from "@/components/AboutCompliance";

export const metadata: Metadata = {
  title: "About | Integrity Specialists International",
  description:
    "Learn about Integrity Specialists International. Our team of industry professionals delivers engineering, project management, and technical solutions with a commitment to HSE, quality, and integrity.",
  keywords: [
    "About Integrity Specialists",
    "Engineering Company",
    "Industrial Services",
    "Oil and Gas",
    "Project Management",
    "HSE",
    "Quality Compliance",
    "Energy Solutions",
    "Engineering Staffing",
  ],
  openGraph: {
    title: "About | Integrity Specialists International",
    description:
      "Learn about Integrity Specialists International. Our team of industry professionals delivers engineering, project management, and technical solutions with a commitment to HSE, quality, and integrity.",
    url: "https://www.integritysolns.com/about",
    siteName: "Integrity Specialists International",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Integrity Specialists International",
    description:
      "Learn about Integrity Specialists International. Our team of industry professionals delivers engineering, project management, and technical solutions with a commitment to HSE, quality, and integrity.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutWhoWeAre />
      <AboutHSESections />
      <AboutPrinciples />
      <AboutCompliance />
    </div>
  );
}
