import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionImage from "@/components/SolutionImage";

export const metadata: Metadata = {
  title: "Construction / Decommissioning Support | Integrity Specialists International",
  description: "ISI Construction and Decommissioning Support delivers construction planning, vendor management, field inspections, decommissioning execution, and as-built documentation for safe and efficient project delivery.",
  keywords: ["construction support", "decommissioning", "construction management", "vendor management", "field inspections", "engineering support", "integrity specialists", "as-built", "project delivery"],
  alternates: {
    canonical: "https://www.integritysolns.com/solutions/construction-decommissioning-support",
  },
  openGraph: {
    title: "Construction / Decommissioning Support | Integrity Specialists International",
    description: "ISI Construction and Decommissioning Support delivers construction planning, vendor management, field inspections, decommissioning execution, and as-built documentation for safe and efficient project delivery.",
    url: "https://www.integritysolns.com/solutions/construction-decommissioning-support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction / Decommissioning Support | Integrity Specialists International",
    description: "ISI Construction and Decommissioning Support delivers construction planning, vendor management, field inspections, decommissioning execution, and as-built documentation for safe and efficient project delivery.",
  },
};

const bulletPoints = [
  "Electrical Contractor in Various States",
  "Development of Mechanical Completion Documentation Packages",
  "Equipment Storage and Preservation Management",
  "Schedule and Budget Development and Optimization Recommendations",
  "Lockout / Tagout Program Management",
  "Inspectors",
  "Safe Work Package Development",
  "Vendor Management",
  "Material Management",
  "Engineering Design Review for Best Application",
  "Planning and Execution FEED through Stable Operations",
  "Construction and Installation Subject Matter Experts",
  "Constructability Review and Recommendations",
  "Installation and Livening Procedure Development",
  "Bidder Qualification and Contracting Evaluation",
  "Detailed Inspections (vendor and field)",
  "Documentation and Drawing Field As-Built Walkdowns",
  "Equipment Logistic Management",
  "Equipment Installation Management",
  "Preservation Management",
  "Commissioning and Start-Up Planning",
  "De-Commissioning Planning and Execution",
];

export default function ConstructionDecommissioningPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Construction / Decommissioning Support"
        backgroundImage="/images/gas5.webp"
        overlayIntensity="dark"
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-black md:text-4xl">Construction / Decommissioning Support</h2>
              <ul className="mt-6 space-y-2 text-base leading-[1.8] text-black md:text-lg list-disc list-inside">
                {bulletPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <SolutionImage src="/images/test5.webp" alt="Construction / Decommissioning Support" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
