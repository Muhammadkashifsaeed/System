import type { Metadata } from "next";
import AboutWhoWeAre from "@/components/AboutWhoWeAre";
import AboutHSESections from "@/components/AboutHSESections";
import AboutPrinciples from "@/components/AboutPrinciples";
import AboutCompliance from "@/components/AboutCompliance";

export const metadata: Metadata = {
  title: "Who We Are | Integrity Specialists International",
  description:
    "Integrity Specialists International was created by industry professionals committed to delivering engineering, project management, and technical solutions with safety and quality.",
  keywords: [
    "Who We Are",
    "Integrity Specialists",
    "Engineering Professionals",
    "Project Management",
    "Technical Solutions",
    "Oil and Gas",
    "Industrial Services",
  ],
  openGraph: {
    title: "Who We Are | Integrity Specialists International",
    description:
      "Integrity Specialists International was created by industry professionals committed to delivering engineering, project management, and technical solutions with safety and quality.",
    url: "https://www.integritysolns.com/about/who-we-are",
    siteName: "Integrity Specialists International",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are | Integrity Specialists International",
    description:
      "Integrity Specialists International was created by industry professionals committed to delivering engineering, project management, and technical solutions with safety and quality.",
  },
  alternates: {
    canonical: "/about/who-we-are",
  },
};

export default function WhoWeArePage() {
  return (
    <div className="flex flex-col">
      <AboutWhoWeAre />
      <AboutHSESections />
      <AboutPrinciples />
      <AboutCompliance />
    </div>
  );
}
