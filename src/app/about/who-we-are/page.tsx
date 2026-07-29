import type { Metadata } from "next";
import AboutWhoWeAre from "@/components/AboutWhoWeAre";
import AboutHSESections from "@/components/AboutHSESections";
import AboutPrinciples from "@/components/AboutPrinciples";
import AboutCompliance from "@/components/AboutCompliance";

export const metadata: Metadata = {
  title: "Who We Are | Integrity Specialists International",
  description:
    "ISI is a team of industry professionals providing engineering, project management, and technical solutions with proven planning and execution methods.",
  keywords: [
    "Who We Are",
    "Integrity Specialists",
    "Engineering Professionals",
    "Project Management",
    "Technical Solutions",
    "Oil and Gas",
    "Industrial Services",
  ],
  openGraph: {
    title: "Who We Are | Integrity Specialists International",
    description:
      "ISI is a team of industry professionals providing engineering, project management, and technical solutions with proven planning and execution methods.",
    url: "https://www.integritysolns.com/about/who-we-are",
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
    title: "Who We Are | Integrity Specialists International",
    description:
      "ISI is a team of industry professionals providing engineering, project management, and technical solutions with proven planning and execution methods.",
    images: ["/images/menttion.png"],
  },
  alternates: {
    canonical: "/about/who-we-are",
  },
};

export default function WhoWeArePage() {
  return (
    <div className="flex flex-col">
      <AboutWhoWeAre />
      <AboutHSESections />
      <AboutPrinciples />
      <AboutCompliance />
    </div>
  );
}
