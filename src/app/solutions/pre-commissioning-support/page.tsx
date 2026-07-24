import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionImage from "@/components/SolutionImage";

export const metadata: Metadata = {
  title: "Pre-Commissioning Support | Integrity Specialists International",
  description: "ISI Pre-Commissioning Support covers integrity testing, pipe flushing, system drying and inerting, leak detection, calibration, and first-fills to ensure systems are fully prepared for successful commissioning.",
  keywords: ["pre-commissioning", "integrity testing", "pipe flushing", "system drying", "inerting", "leak detection", "calibration", "commissioning support", "turnaround support", "engineering services"],
  alternates: {
    canonical: "https://www.integritysolns.com/solutions/pre-commissioning-support",
  },
  openGraph: {
    title: "Pre-Commissioning Support | Integrity Specialists International",
    description: "ISI Pre-Commissioning Support covers integrity testing, pipe flushing, system drying and inerting, leak detection, calibration, and first-fills to ensure systems are fully prepared for successful commissioning.",
    url: "https://www.integritysolns.com/solutions/pre-commissioning-support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre-Commissioning Support | Integrity Specialists International",
    description: "ISI Pre-Commissioning Support covers integrity testing, pipe flushing, system drying and inerting, leak detection, calibration, and first-fills to ensure systems are fully prepared for successful commissioning.",
  },
};

const bulletPoints = [
  "Pre-Commissioning Work Scope Package and Procedure Development",
  "Flange Management (torque / tensioning)",
  "Integrity Testing Planning and Execution (hydrostatic or pneumatic)",
  "Pipe / System Flushing and Cleaning",
  "System Drying (Nitrogen or Dry Air)",
  "System Inerting (Nitrogen Purging)",
  "System Leak Detection (Nitrogen/He or Dry Air)",
  "Millwright Services",
  "Equipment / Pipe Labeling and Tagging",
  "System Preparation for Commissioning",
  "Equipment First-Fills (lube-oil, diesel, chemicals)",
  "Electrical Checkouts and Testing",
  "Instrumentation Bench Calibration and Certification",
  "Instrument Installation and Loop Checks",
];

export default function PreCommissioningPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Pre-Commissioning Support"
        backgroundImage="/images/gas6.webp"
        overlayIntensity="dark"
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">PRE-COMMISSIONING SUPPORT</h2>
              <ul className="mt-6 space-y-2 text-base leading-[1.8] text-black md:text-lg list-disc list-inside">
                {bulletPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <SolutionImage src="/images/test6.webp" alt="Pre-Commissioning Support" />
          </div>
        </div>
      </section>
    </div>
  );
}
