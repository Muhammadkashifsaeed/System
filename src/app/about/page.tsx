import type { Metadata } from "next";
import AboutWhoWeAre from "@/components/AboutWhoWeAre";
import AboutHSESections from "@/components/AboutHSESections";
import AboutPrinciples from "@/components/AboutPrinciples";
import AboutCompliance from "@/components/AboutCompliance";

export const metadata: Metadata = {
  title: "About | Integrity Specialists International",
  description:
    "Integrity Specialists International delivers engineering, project management, and technical solutions with a commitment to HSE, quality, and integrity across global energy sectors.",
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
      "Integrity Specialists International delivers engineering, project management, and technical solutions with a commitment to HSE, quality, and integrity across global energy sectors.",
    url: "https://www.integritysolns.com/about",
    siteName: "Integrity Specialists International",
    type: "website",
    images: [
      {
        url: "/images/menttion.png",
        width: 1200,
        height: 630,
        alt: "Integrity Specialists International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Integrity Specialists International",
    description:
      "Integrity Specialists International delivers engineering, project management, and technical solutions with a commitment to HSE, quality, and integrity across global energy sectors.",
    images: ["/images/menttion.png"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutWhoWeAre />
      <AboutHSESections variant="about" />
      <AboutPrinciples />
      <AboutCompliance />
    </div>
  );
}
