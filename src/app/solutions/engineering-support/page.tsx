import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionImage from "@/components/SolutionImage";

export const metadata: Metadata = {
  title: "Engineering Support | Integrity Specialists International",
  description: "ISI Engineering Support delivers professional licensing, specifications, drawings review, and technical advisory across multiple states to keep your project compliant and on track from concept to completion.",
  keywords: ["engineering support", "professional engineering", "technical advisory", "drawings reviews", "specifications development", "integrity specialists", "FEED engineering", "project engineering", "compliance"],
  alternates: {
    canonical: "https://www.integritysolns.com/solutions/engineering-support",
  },
  openGraph: {
    title: "Engineering Support | Integrity Specialists International",
    description: "ISI Engineering Support delivers professional licensing, specifications, drawings review, and technical advisory across multiple states to keep your project compliant and on track from concept to completion.",
    url: "https://www.integritysolns.com/solutions/engineering-support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Support | Integrity Specialists International",
    description: "ISI Engineering Support delivers professional licensing, specifications, drawings review, and technical advisory across multiple states to keep your project compliant and on track from concept to completion.",
  },
};

export default function EngineeringSupportPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Engineering Support"
        backgroundImage="/images/gas3.webp"
        overlayIntensity="dark"
      />
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black md:text-4xl">ENGINEERING SUPPORT</h2>
              <ul className="mt-6 space-y-3 text-base leading-[1.8] text-black md:text-lg list-disc list-inside">
                <li>Professional Engineering Licensing in Multiple States</li>
                <li>Development of Specifications</li>
                <li>Technical Advisory</li>
                <li>Drawings Reviews</li>
                <li>Development of / Input to Work Scope Bid Package Schedule and Budget</li>
                <li>Development of Work Scope Packages</li>
                <li>Development of System Boundaries Demarcation</li>
                <li>Planning for Commissioning and Start-Up</li>
              </ul>
            </div>
            <SolutionImage src="/images/test3.webp" alt="Engineering Support" />
          </div>
        </div>
      </section>
    </div>
  );
}
