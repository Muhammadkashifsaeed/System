import type { Metadata } from "next";
import NewsClient from "@/components/NewsClient";

export const metadata: Metadata = {
  title: {
    default: "Coming Soon | Integrity Specialists International",
    template: "%s | Integrity Specialists International",
  },
  description: "News and updates coming soon from Integrity Specialists International.",
  keywords: [
    "Integrity Specialists News",
    "Engineering News",
    "Industrial Updates",
  ],
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Coming Soon | Integrity Specialists International",
    description: "News and updates coming soon.",
    url: "https://www.integritysolns.com/news",
    siteName: "Integrity Specialists International",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon | Integrity Specialists International",
    description: "News and updates coming soon.",
  },
  alternates: {
    canonical: "/news",
  },
};

export default function NewsPage() {
  return <NewsClient />;
}
