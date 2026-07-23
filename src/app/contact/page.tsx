import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact | Integrity Specialists International",
  description:
    "Contact Integrity Specialists International offices across the USA, Mexico, Nigeria, and South America for engineering, industrial, energy, construction, and infrastructure services.",
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
      "Contact Integrity Specialists International offices across the USA, Mexico, Nigeria, and South America for engineering, industrial, energy, construction, and infrastructure services.",
    url: "https://www.integritysolns.com/contact",
    siteName: "Integrity Specialists International",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Integrity Specialists International",
    description:
      "Contact Integrity Specialists International offices across the USA, Mexico, Nigeria, and South America for engineering, industrial, energy, construction, and infrastructure services.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
