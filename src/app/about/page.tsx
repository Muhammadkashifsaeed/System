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
    title: "About | Integrity Specialists International",
    description:
      "Learn about Integrity Specialists International. Our team of industry professionals delivers engineering, project management, and technical solutions with a commitment to HSE, quality, and integrity.",
    images: ["/images/logo.webp"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">About Integrity Specialists International</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-black md:text-lg">
            Integrity Specialists International, Inc. was created by a team of industry professionals that know exactly what it takes to do the job right the first time without compromising any aspect of the owners investment.
          </p>
        </div>
      </section>
      <AboutWhoWeAre />
      <AboutHSESections />
      <AboutPrinciples />
      <AboutCompliance />
    </div>
  );
}
