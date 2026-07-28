import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const interSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.integritysolns.com"),
  title: {
    default: "Integrity Specialists International | Engineering & Industrial Solutions",
    template: "%s | Integrity Specialists International",
  },
  description:
    "Integrity Specialists International provides professional engineering, industrial, commissioning, electrical, staffing, marine construction, operations, maintenance and project planning solutions.",
  keywords: [
    "Integrity Specialists International",
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
    "Power & Utilities",
    "Infrastructure",
  ],
  authors: [{ name: "Integrity Specialists International" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.integritysolns.com",
    siteName: "Integrity Specialists International",
    title: "Integrity Specialists International | Engineering & Industrial Solutions",
    description:
      "Proven professional and technical solutions for both domestic & international customers in the industry sectors we serve.",
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
    title: "Integrity Specialists International",
    description: "Engineering & Industrial Solutions Provider",
    images: ["/images/menttion.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${interSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-black">
        <link rel="preload" as="image" href="/images/gas4.webp" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/favicon-128x128.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/favicon-256x256.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-128x128.png" />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Integrity Specialists International, Inc.",
              url: "https://www.integritysolns.com",
              logo: "https://www.integritysolns.com/images/menttion.png",
              description:
                "Proven professional and technical solutions for both domestic & international customers in the industry sectors we serve.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lafayette",
                addressRegion: "Louisiana",
                postalCode: "70503",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-337-739-7000",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "en",
              },
              sameAs: [],
            }),
          }}
        />
        <ScrollProgress />
        <Header />
        <main id="main-content" className="flex-1 pt-20">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
