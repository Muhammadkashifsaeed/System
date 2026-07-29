import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact | Integrity Specialists International",
  description:
    "Contact ISI offices across the USA, Mexico, Nigeria, and South America for engineering, industrial, and energy services.",
  keywords: [
    "Integrity Specialists Contact",
    "Engineering Company",
    "Industrial Services",
    "Oil and Gas",
    "Power Utilities",
    "Infrastructure",
    "Manufacturing",
    "Energy Solutions",
    "Corporate Office",
    "Contact Us",
  ],
  openGraph: {
    title: "Contact | Integrity Specialists International",
    description:
      "Contact ISI offices across the USA, Mexico, Nigeria, and South America for engineering, industrial, and energy services.",
    url: "https://www.integritysolns.com/contact",
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
    title: "Contact | Integrity Specialists International",
    description:
      "Contact ISI offices across the USA, Mexico, Nigeria, and South America for engineering, industrial, and energy services.",
    images: ["/images/menttion.png"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
