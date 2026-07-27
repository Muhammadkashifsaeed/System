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
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Integrity Specialists International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are | Integrity Specialists International",
    description:
      "Integrity Specialists International was created by industry professionals committed to delivering engineering, project management, and technical solutions with safety and quality.",
    images: ["/images/logo.webp"],
  },
  alternates: {
    canonical: "/about/who-we-are",
  },
};

export default function WhoWeArePage() {
  return (
    <div className="flex flex-col">
      <section className="bg-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">Who We Are</h1>
        </div>
      </section>
      <AboutWhoWeAre />
      <AboutHSESections />
      <AboutPrinciples />
      <AboutCompliance />
    </div>
  );
}
