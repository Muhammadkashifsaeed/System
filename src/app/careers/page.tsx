import type { Metadata } from "next";
import CareersClient from "@/components/CareersClient";

export const metadata: Metadata = {
  title: "Careers | Integrity Specialists International",
  description:
    "Join ISI's team of industry professionals. We offer careers in engineering, project management, and technical solutions across global energy sectors.",
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
      "Join ISI's team of industry professionals. We offer careers in engineering, project management, and technical solutions across global energy sectors.",
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
      "Join ISI's team of industry professionals. We offer careers in engineering, project management, and technical solutions across global energy sectors.",
    images: ["/images/menttion.png"],
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
