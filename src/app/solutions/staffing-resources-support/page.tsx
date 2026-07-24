import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionImage from "@/components/SolutionImage";

export const metadata: Metadata = {
  title: "Staffing / Resources | Integrity Specialists International",
  description: "ISI Staffing and Resources supply qualified professionals across engineering, construction, commissioning, and operations. We provide the right talent at the right time with strict compliance and rigorous onboarding.",
  keywords: ["staffing", "resources", "engineering staffing", "construction staffing", "commissioning staffing", "operations staffing", "talent acquisition", "integrity specialists", "project staffing", "workforce solutions"],
  alternates: {
    canonical: "https://www.integritysolns.com/solutions/staffing-resources-support",
  },
  openGraph: {
    title: "Staffing / Resources | Integrity Specialists International",
    description: "ISI Staffing and Resources supply qualified professionals across engineering, construction, commissioning, and operations. We provide the right talent at the right time with strict compliance and rigorous onboarding.",
    url: "https://www.integritysolns.com/solutions/staffing-resources-support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Staffing / Resources | Integrity Specialists International",
    description: "ISI Staffing and Resources supply qualified professionals across engineering, construction, commissioning, and operations. We provide the right talent at the right time with strict compliance and rigorous onboarding.",
  },
};

const engineeringDisciplines = [
  "Client Engineering Representation",
  "Specifications Development Disciplines",
  "Construction Subject Matter Experts / Technical Advisors",
  "Project Controls (Budget and Schedule)",
  "Document Control",
];

const constructionDisciplines = [
  "Construction Managers",
  "Construction Engineers",
  "QA/QC Managers",
  "QA/QC Inspectors",
  "Electrical Superintendents",
  "Electrical Foremen",
  "Electrical Journeymen",
  "Electrical Technicians",
  "Electrical Assistance",
  "I&C Superintendents",
  "I&C Foremen",
  "I&C Assistance",
  "Tubing Benders / Installers",
  "Mechanical Superintendents",
  "Millwright",
  "Piping Superintendents",
];

const commissioningStartupDisciplines = [
  "Commissioning Managers",
  "Commissioning Leads",
  "Commissioning Technicians",
  "Programmers",
];

const operationsMaintenanceDisciplines = [
  "Operating Personnel",
  "Maintenance Personnel",
];

export default function StaffingResourcesPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Staffing / Resources"
        backgroundImage="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg"
        overlayIntensity="dark"
      />
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-black md:text-3xl">STAFFING / RESOURCES</h2>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-black md:text-xl">Engineering (all Disciplines)</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-black md:text-base list-disc list-inside">
                  {engineeringDisciplines.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-black md:text-xl">Construction (all Disciplines)</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-black md:text-base list-disc list-inside">
                  {constructionDisciplines.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-black md:text-xl">Commissioning and Start-Up (all Disciplines)</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-black md:text-base list-disc list-inside">
                  {commissioningStartupDisciplines.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-black md:text-xl">Operations and Maintenance (all Disciplines)</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-black md:text-base list-disc list-inside">
                  {operationsMaintenanceDisciplines.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <SolutionImage src="https://images.pexels.com/photos/34670929/pexels-photo-34670929.jpeg" alt="Staffing / Resources" />
          </div>
        </div>
      </section>
    </div>
  );
}
