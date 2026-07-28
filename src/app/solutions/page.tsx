import type { Metadata } from "next";
import AllSolutionsGrid from "@/components/AllSolutionsGrid";

export const metadata: Metadata = {
  title: "Solutions | Integrity Specialists International",
  description:
    "Explore Integrity Specialists International engineering, industrial, commissioning, electrical, staffing, marine construction, operations, maintenance and project planning solutions.",
  keywords: [
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
  ],
  openGraph: {
    title: "Solutions | Integrity Specialists International",
    description:
      "Explore Integrity Specialists International engineering, industrial, commissioning, electrical, staffing, marine construction, operations, maintenance and project planning solutions.",
    url: "https://www.integritysolns.com/solutions",
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
    title: "Solutions | Integrity Specialists International",
    description:
      "Explore Integrity Specialists International engineering, industrial, commissioning, electrical, staffing, marine construction, operations, maintenance and project planning solutions.",
    images: ["/images/menttion.png"],
  },
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">All Solutions</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-black md:text-lg">
            Comprehensive engineering and industrial solutions tailored to your needs.
          </p>
        </div>
      </section>
      <AllSolutionsGrid />
    </div>
  );
}
