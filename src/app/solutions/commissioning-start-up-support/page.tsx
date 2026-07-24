import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionImage from "@/components/SolutionImage";

export const metadata: Metadata = {
  title: "Commissioning and Start-Up Support (CSU) | Integrity Specialists International",
  description: "ISI Commissioning and Start-Up Support covers CSU strategy, project controls, work scope development, energization, loop testing, mechanical checkouts, and site acceptance testing for safe, efficient project handover.",
  keywords: ["commissioning", "start-up support", "CSU", "energization", "loop testing", "mechanical checkouts", "site acceptance testing", "integrity specialists", "project handover", "FAT SAT"],
  alternates: {
    canonical: "https://www.integritysolns.com/solutions/commissioning-start-up-support",
  },
  openGraph: {
    title: "Commissioning and Start-Up Support (CSU) | Integrity Specialists International",
    description: "ISI Commissioning and Start-Up Support covers CSU strategy, project controls, work scope development, energization, loop testing, mechanical checkouts, and site acceptance testing for safe, efficient project handover.",
    url: "https://www.integritysolns.com/solutions/commissioning-start-up-support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commissioning and Start-Up Support (CSU) | Integrity Specialists International",
    description: "ISI Commissioning and Start-Up Support covers CSU strategy, project controls, work scope development, energization, loop testing, mechanical checkouts, and site acceptance testing for safe, efficient project handover.",
  },
};

const csuStrategicPoints = [
  "Development of CSU Execution Strategy",
  "Development of CSU Integrity Work Packages (IWP)",
  "Development of CSU Roles and Responsibilities per activities",
  "Development of Mechanical Completion Transfer of Custody Sequence",
  "Development of System Boundaries Demarcations – non-commissionable and commissionable",
];

const csuProjectControlsPoints = [
  "Development of Work Base Structure (WBS)",
  "Development of CSU scheduled activities",
  "Development of CSU resources estimate",
  "Development of CSU equipment, consumables, vendors estimate",
  "Development of CSU budget",
];

const csuPlanExecutionPoints = [
  "Structure Processes",
  "Planning for Start-Up Facilitator",
  "Control of Work Permitting Management and Coordination",
  "Engineering Design Technical Review and Recommendations",
  "Pre-Commissioning Activities Management",
  "Equipment and System Preservation Management and Execution",
  "Equipment Packaging, Storage, Transportation Management",
  "Project Custody Transfer Package Development (Project to Operations)",
  "CSU Process and Procedure Development and Management",
  "Lockout / Tagout (LOTO) Program Development and Management",
  "CSU Technicians (all Disciplines)",
  "Electrical Checkouts and Energization",
  "Site Acceptance Testing (SAT) Management",
  "System / Plant Start-Up Support Resources",
  "Completion Database",
];

export default function CommissioningStartupPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Commissioning and Start-Up Support (CSU)"
        backgroundImage="https://images.pexels.com/photos/15866139/pexels-photo-15866139.jpeg"
        overlayIntensity="dark"
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-black md:text-4xl">Commissioning and Start-Up Support (CSU)</h2>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-black md:text-2xl">CSU Strategic Management and Planning</h3>
                <ul className="mt-3 space-y-2 text-sm leading-[1.7] text-black md:text-base list-disc list-inside">
                  {csuStrategicPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-black md:text-2xl">CSU Project Controls</h3>
                <ul className="mt-3 space-y-2 text-sm leading-[1.7] text-black md:text-base list-disc list-inside">
                  {csuProjectControlsPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-black md:text-2xl">CSU Plan Development and Execution</h3>
                <ul className="mt-3 space-y-2 text-sm leading-[1.7] text-black md:text-base list-disc list-inside">
                  {csuPlanExecutionPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <SolutionImage src="https://images.pexels.com/photos/6754758/pexels-photo-6754758.jpeg" alt="Commissioning and Start-Up Support (CSU)" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
