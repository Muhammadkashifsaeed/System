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
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions | Integrity Specialists International",
    description:
      "Explore Integrity Specialists International engineering, industrial, commissioning, electrical, staffing, marine construction, operations, maintenance and project planning solutions.",
  },
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      <AllSolutionsGrid />
    </div>
  );
}
