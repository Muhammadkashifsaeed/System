import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionImage from "@/components/SolutionImage";

export const metadata: Metadata = {
  title: "Electrical, Instrumentation, Controls (EI&C) & Fiber Optic | Integrity Specialists International",
  description: "ISI delivers end-to-end Electrical, Instrumentation, Controls, and Fiber Optic solutions from design review through energization and startup. Backed by 80 years of combined industry expertise for major projects.",
  keywords: ["EI&C", "electrical instrumentation controls", "fiber optic", "substation", "switchgear", "protective relays", "cable installation", "instrumentation", "power controls", "integrity specialists"],
  alternates: {
    canonical: "https://www.integritysolns.com/solutions/eic-fiber-optic",
  },
  openGraph: {
    title: "Electrical, Instrumentation, Controls (EI&C) & Fiber Optic | Integrity Specialists International",
    description: "ISI delivers end-to-end Electrical, Instrumentation, Controls, and Fiber Optic solutions from design review through energization and startup. Backed by 80 years of combined industry expertise for major projects.",
    url: "https://www.integritysolns.com/solutions/eic-fiber-optic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical, Instrumentation, Controls (EI&C) & Fiber Optic | Integrity Specialists International",
    description: "ISI delivers end-to-end Electrical, Instrumentation, Controls, and Fiber Optic solutions from design review through energization and startup. Backed by 80 years of combined industry expertise for major projects.",
  },
};

const substationPoints = [
  "Development of Operating and Maintenance Procedures",
  "Equipment Storage and Preservation Management",
  "Installation",
  "Transformer Inspection and Testing",
  "Switchgear Inspection, Maintenance, and Repair",
  "Protective Relay Inspection, Upgrades, and Testing",
  "HV Disconnects and Circuit Switchers Inspection and Re-Alignment",
  "Load Tap Changer Inspections and Maintenance",
  "SF6 Breaker Service Inspection and Repair",
  "Oil Circuit Breaker Inspection and Maintenance",
  "Transformer Oil Purification",
  "Unmanned Ariel Surveys (Drones)",
];

const powerControlsPoints = [
  "Development of Operating and Maintenance Procedures",
  "Equipment Storage and Preservation Management",
  "Grounding Installation, Testing, and Termination",
  "Cable Tray Installation",
  "Conduit Installation",
  "Low Voltage Wiring Installation, Testing and Termination",
  "Medium Voltage Cable Installation, Testing, and Termination",
  "High Voltage Wiring Installation, Testing, and Termination",
  "Switchgear Installation and Inspections",
  "Motor Control Center (MCC) Installation and Inspections",
  "Transformers Installation and Inspections",
  "Heat Tracing Installation and Testing",
  "Uninterruptible Power Supply (UPS) Installation & Testing",
  "Lighting and Lighting Protection Installation and Testing",
  "Control Panel, DCS & PLC Installation and Testing",
  "Fiber Optic Terminations",
  "Lockout / Tagout Program Management",
  "Labeling and Tagging",
  "Commissioning and Energization",
];

const instrumentPoints = [
  "Equipment Storage and Preservation Management",
  "Pre-Installation Checkout and Calibration",
  "Installation",
  "Tubing Flushing, Testing, and Installation",
  "Calibration",
  "Loop Check",
  "Loop Testing",
  "Analyzer Installation & Testing",
  "Labeling and Tagging",
  "Commissioning and Start-Up",
];

const engineeringSupportPoints = [
  "Technical Advisory During Design and Installation",
  "Design Installation Reviews and Recommendations",
  "Construction Plan Reviews and Recommendations",
  "Procurement and Factory Acceptance Testing Management",
  "Equipment Preservation, Packaging, Transportation Management",
  "As-Built of Drawings and Documentation Post Installation",
  "Input and Recommendations to RFP / RFQ",
];

const installationPreparationPoints = [
  "Site Assessment for Installation",
  "On-Reel Pre-installation Cable Testing",
  "Trenching",
  "Duct Bank and Underground Cabling Raceways Installation",
  "Underground / Above Ground Conduit Installation",
  "Cable Pulling",
  "Panel Installation and termination",
];

const installationTerminationPoints = [
  "Splice Closure Setup and Installation",
  "Mechanical and Fusion Fiber Optic Cable Splicing",
  "CATV Fiber Optic Node Splicing and Installation",
  "Direct Termination of Fiber Cable",
  "Patch Cords Installation and Testing",
  "Termination Panel Labeling and Port Assignment Verification",
  "Post Installation Cable Testing",
];

const operationMaintenancePoints = [
  "ISP Network Inspection and Troubleshooting",
  "OSP Network Inspection and Troubleshooting",
  "Cable Restoration and Maintenance",
  "Fault / Break Locating, Remediation, and Repair",
  "Quality Control and Testing, Commissioning and Energization",
];

export default function EICFiberOpticPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Electrical, Instrumentation, Controls (EI&C) & Fiber Optic"
        backgroundImage="/images/gas4.webp"
        overlayIntensity="dark"
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">ELECTRICAL, INSTRUMENTATION, CONTROLS (EI&C)</h2>
              <p className="mt-6 text-base leading-[1.8] text-black md:text-lg">
                Integrity Specialists International, Inc. (ISI) management has a combined 80 years of proven expertise providing Electrical, Instrumentation, Controls, and Fiber Optic solutions. Whether the project requirements are manpower solutions or completing the full process of design review, installation, energization, commissioning, and providing support through start-up and stable operations, ISI has the project covered with confidence.
              </p>
            </div>
            <SolutionImage src="/images/test4.webp" alt="Electrical, Instrumentation, Controls (EI&C)" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="glass-card p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">Substation Solutions</h3>
              <ul className="space-y-2 text-sm text-black">
                {substationPoints.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">Power, Controls & Communications Solutions</h3>
              <ul className="space-y-2 text-sm text-black">
                {powerControlsPoints.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">Instrument Installation & Technical Solutions</h3>
              <ul className="space-y-2 text-sm text-black">
                {instrumentPoints.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">FIBER OPTIC</h2>
            </div>
            <SolutionImage src="/images/involved.webp" alt="Fiber Optic" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-custom">
          <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">
            The fiber optic solutions that ISI provides include, but are not limited to the following:
          </h2>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="glass-card p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">Engineering Support Solutions</h3>
              <ul className="space-y-2 text-sm text-black">
                {engineeringSupportPoints.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">Installation Preparation Solutions</h3>
              <ul className="space-y-2 text-sm text-black">
                {installationPreparationPoints.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">Installation, Termination, and Testing Solutions</h3>
              <ul className="space-y-2 text-sm text-black">
                {installationTerminationPoints.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">Operation and Maintenance Solutions</h3>
              <ul className="space-y-2 text-sm text-black">
                {operationMaintenancePoints.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
