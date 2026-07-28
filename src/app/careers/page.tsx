import type { Metadata } from "next";
import CareersClient from "@/components/CareersClient";

export const metadata: Metadata = {
  title: "Careers | Integrity Specialists International",
  description:
    "Join Integrity Specialists International and explore career opportunities in engineering, industrial services, construction, energy, manufacturing, and infrastructure.",
  keywords: [
    "Integrity Specialists Careers",
    "Engineering Jobs",
    "Industrial Careers",
    "Construction Jobs",
    "Oil and Gas Jobs",
    "Manufacturing Careers",
    "Power and Utilities Jobs",
    "Energy Industry Careers",
    "Apply Online",
    "Engineering Recruitment",
  ],
  openGraph: {
    title: "Careers | Integrity Specialists International",
    description:
      "Join Integrity Specialists International and explore career opportunities in engineering, industrial services, construction, energy, manufacturing, and infrastructure.",
    url: "https://www.integritysolns.com/careers",
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
    title: "Careers | Integrity Specialists International",
    description:
      "Join Integrity Specialists International and explore career opportunities in engineering, industrial services, construction, energy, manufacturing, and infrastructure.",
    images: ["/images/menttion.png"],
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
