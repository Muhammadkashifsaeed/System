import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionImage from "@/components/SolutionImage";

export const metadata: Metadata = {
  title: "Marine Construction | Integrity Specialists International",
  description: "ISI Marine Construction supports offshore and coastal infrastructure projects with specialized diving, subsea installation, platform modifications, and safe on-schedule material handling for complex marine environments.",
  keywords: ["marine construction", "offshore construction", "subsea installation", "platform modifications", "diving support", "coastal infrastructure", "integrity specialists", "material handling", "marine engineering"],
  alternates: {
    canonical: "https://www.integritysolns.com/solutions/marine-construction",
  },
  openGraph: {
    title: "Marine Construction | Integrity Specialists International",
    description: "ISI Marine Construction supports offshore and coastal infrastructure projects with specialized diving, subsea installation, platform modifications, and safe on-schedule material handling for complex marine environments.",
    url: "https://www.integritysolns.com/solutions/marine-construction",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marine Construction | Integrity Specialists International",
    description: "ISI Marine Construction supports offshore and coastal infrastructure projects with specialized diving, subsea installation, platform modifications, and safe on-schedule material handling for complex marine environments.",
  },
};

const marineConstructionSupport = [
  "Engineering, Fabrication, Installation Planning and Execution",
  "Construction and Installation Specialists",
  "De-Commissioning Specialists",
  "Production Asset Mooring and Riser Specialists",
  "SCR (Steel Catenary Riser) Installation and Equipment Expertise",
  "Flexible Riser Installation and Equipment Expertise",
  "SURF (Subsea, Umbilical, Risers, and Flowlines) Operations",
  "Deck and Mooring Equipment, FPSO and FSO Upgrades and Conversions",
  "Offshore Oil / Gas Field Development",
  "Dry-Dock Electrical, Instrumentation & Controls, and Mechanical Expertise",
  "Dockside / Port Emergency Call-out Services (all Disciplines)",
];

const marineProjectSupport = [
  "Bidder Qualification and Contracting Evaluation",
  "Engineering Design Review for Best Application",
  "Detailed Inspections (vendor and field)",
  "Logistic and Equipment Transporting Management",
  "Constructability Review and Recommendations",
  "Equipment Installation Management",
  "Preservation Management",
  "Commissioning, Performance Optimization, and Troubleshooting",
];

const marineDecommissioningSupport = [
  "Planning and Managing all Marine Operations",
  "3D Scanning Services, Engineering",
  "NORM Removal and Tank Cleaning",
  "Flushing of Pipelines, Flowlines, Risers and Umbilicals",
  "Disconnect and Abandonment of Mooring Lines",
  "Station Keeping of FPSO",
  "Towing Operations",
  "Environmental Recycling of Removed Structures",
  "Temporary Equipment Provider",
];

export default function MarineConstructionPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Marine Construction"
        backgroundImage="/images/gas10.jpg"
        overlayIntensity="dark"
      />
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] md:text-3xl">MARINE CONSTRUCTION</h2>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-[#1F2937] md:text-xl">Marine Construction Support Solutions</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-gray-700 md:text-base list-disc list-inside">
                  {marineConstructionSupport.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-[#1F2937] md:text-xl">Marine Project Support Solutions</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-gray-700 md:text-base list-disc list-inside">
                  {marineProjectSupport.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-[#1F2937] md:text-xl">Marine De-Commissioning Support Solutions</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-gray-700 md:text-base list-disc list-inside">
                  {marineDecommissioningSupport.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <SolutionImage src="/images/test10.jpg" alt="Marine Construction" />
          </div>
        </div>
      </section>
    </div>
  );
}
