import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionImage from "@/components/SolutionImage";

export const metadata: Metadata = {
  title: "Turnarounds Support (TAR) | Integrity Specialists International",
  description: "ISI Turnaround Support provides planning, scaffolding, mechanical work, inspection, and trade labor to complete TAR events safely within critical scheduling windows with disciplined execution and strict controls.",
  keywords: ["turnaround support", "TAR", "shutdown planning", "scaffolding", "mechanical work", "inspection", "trade labor", "integrity specialists", "plant turnaround", "maintenance shutdown"],
  alternates: {
    canonical: "https://www.integritysolns.com/solutions/turnarounds-support",
  },
  openGraph: {
    title: "Turnarounds Support (TAR) | Integrity Specialists International",
    description: "ISI Turnaround Support provides planning, scaffolding, mechanical work, inspection, and trade labor to complete TAR events safely within critical scheduling windows with disciplined execution and strict controls.",
    url: "https://www.integritysolns.com/solutions/turnarounds-support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnarounds Support (TAR) | Integrity Specialists International",
    description: "ISI Turnaround Support provides planning, scaffolding, mechanical work, inspection, and trade labor to complete TAR events safely within critical scheduling windows with disciplined execution and strict controls.",
  },
};

const resourceSupportSolutions = [
  "Project Management Resources",
  "Engineering Design Review and Recommendations",
  "Budget Estimating",
  "Schedule Development",
  "Safe Work Procedure Development and Management",
  "Scope of Work Package Development",
  "Document Control",
  "Control of Work Permitting Management and Coordination",
  "Lockout / Tagout Management and Coordination",
];

const technicalSupportSolutions = [
  "Electrical Installation and Testing Contractor",
  "Instrumentation and Controls Expertise",
  "Mechanical Expertise",
  "Millwright",
  "Flange Management (torquing or tensioning)",
  "Integrity Testing Management (hydrostatic or pneumatic)",
  "Nitrogen Services Management (de-gassing, drying, inerting)",
  "Pipe / Pipeline Cleaning / Clearing Services",
  "QA/QC Inspectors",
  "Catalyst Removal / Installation",
  "Commissioning and Start-Up Support",
  "Operations and Maintenance Support",
  "Rigging Equipment Inspection Management",
];

const temporaryEquipmentSupportSolutions = [
  "Power Generation Equipment",
  "Power Distribution Equipment",
  "Torquing / Tensioning Equipment (calibrated)",
  "Integrity Testing Equipment (calibrated)",
  "Pumping Equipment",
  "Rigging Equipment (certified)",
];

export default function TurnaroundsPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Turnarounds Support (TAR)"
        backgroundImage="/images/gas11.jpg"
        overlayIntensity="dark"
      />
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] md:text-3xl">TURNAROUNDS SUPPORT (TAR)</h2>
              <div className="section-divider-left mt-4" />

              <div className="mt-6">
                <h3 className="text-lg font-bold text-[#1F2937] md:text-xl">Resource Support Solutions</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-gray-700 md:text-base list-disc list-inside">
                  {resourceSupportSolutions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-[#1F2937] md:text-xl">Technical Support Solutions</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-gray-700 md:text-base list-disc list-inside">
                  {technicalSupportSolutions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-[#1F2937] md:text-xl">Temporary Equipment Support Solutions</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-gray-700 md:text-base list-disc list-inside">
                  {temporaryEquipmentSupportSolutions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <SolutionImage src="/images/test11.jpg" alt="Turnarounds Support (TAR)" />
          </div>
        </div>
      </section>
    </div>
  );
}
