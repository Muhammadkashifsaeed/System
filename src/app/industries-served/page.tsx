import type { Metadata } from "next";
import IndustriesServed from "@/components/IndustriesServed";

export const metadata: Metadata = {
  title: "Industries Served | Integrity Specialists International",
  description:
    "ISI delivers engineering, industrial, commissioning, electrical, staffing, marine construction, operations, maintenance, and project planning solutions across domestic and international industry sectors.",
  keywords: [
    "Integrity Specialists International",
    "Industries Served",
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
    "Energy Solutions",
  ],
  openGraph: {
    title: "Industries Served | Integrity Specialists International",
    description:
      "ISI delivers excellence across domestic and international industry sectors with proven expertise.",
    url: "https://www.integritysolns.com/industries-served",
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
    title: "Industries Served | Integrity Specialists International",
    description:
      "ISI delivers excellence across domestic and international industry sectors with proven expertise.",
    images: ["/images/menttion.png"],
  },
  alternates: {
    canonical: "/industries-served",
  },
};

export default function IndustriesServedPage() {
  return (
    <main>
      <IndustriesServed />
    </main>
  );
}
