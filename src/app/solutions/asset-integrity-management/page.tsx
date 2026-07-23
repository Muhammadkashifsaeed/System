import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionImage from "@/components/SolutionImage";

export const metadata: Metadata = {
  title: "Asset Integrity Management | Integrity Specialists International",
  description: "ISI Asset Integrity Management safeguards critical assets through risk-based inspection, corrosion management, reliability-centered maintenance, and life-extension studies for long-term performance and regulatory compliance.",
  keywords: ["asset integrity", "risk-based inspection", "corrosion management", "reliability-centered maintenance", "life extension", "integrity management", "integrity specialists", "regulatory compliance", "asset protection"],
  alternates: {
    canonical: "https://www.integritysolns.com/solutions/asset-integrity-management",
  },
  openGraph: {
    title: "Asset Integrity Management | Integrity Specialists International",
    description: "ISI Asset Integrity Management safeguards critical assets through risk-based inspection, corrosion management, reliability-centered maintenance, and life-extension studies for long-term performance and regulatory compliance.",
    url: "https://www.integritysolns.com/solutions/asset-integrity-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asset Integrity Management | Integrity Specialists International",
    description: "ISI Asset Integrity Management safeguards critical assets through risk-based inspection, corrosion management, reliability-centered maintenance, and life-extension studies for long-term performance and regulatory compliance.",
  },
};

const bulletPoints = [
  "Development of Planning, Implementing, Assurance / Verification, Action Program",
  "Development of Processes and Procedures",
  "Development of Equipment Packages",
  "Facility Verification Walkdowns / Documentation and Drawings Redlining",
  "Documentation and Drawings As-Built",
  "3D Scanning",
  "Unmanned Ariel Surveys (Drones)",
];

export default function AssetIntegrityPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Asset Integrity Management"
        backgroundImage="/images/gas9.jpg"
        overlayIntensity="dark"
      />
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937] md:text-4xl">ASSET INTEGRITY MANAGEMENT</h2>
              <div className="section-divider-left mt-6" />
              <ul className="mt-6 space-y-3 text-base leading-[1.8] text-gray-700 md:text-lg">
                {bulletPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <SolutionImage src="/images/test9.jpg" alt="Asset Integrity Management" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
