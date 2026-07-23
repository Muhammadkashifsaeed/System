import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionImage from "@/components/SolutionImage";

export const metadata: Metadata = {
  title: "Operations & Maintenance Support (O&M) | Integrity Specialists International",
  description: "ISI O&M services maximize asset reliability through scheduled maintenance, troubleshooting, spare parts management, and continuous improvement programs that reduce lifecycle costs and improve uptime.",
  keywords: ["operations maintenance", "O&M", "asset reliability", "scheduled maintenance", "troubleshooting", "spare parts management", "integrity specialists", "lifecycle cost", "uptime"],
  alternates: {
    canonical: "https://www.integritysolns.com/solutions/operations-maintenance-support",
  },
  openGraph: {
    title: "Operations & Maintenance Support (O&M) | Integrity Specialists International",
    description: "ISI O&M services maximize asset reliability through scheduled maintenance, troubleshooting, spare parts management, and continuous improvement programs that reduce lifecycle costs and improve uptime.",
    url: "https://www.integritysolns.com/solutions/operations-maintenance-support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operations & Maintenance Support (O&M) | Integrity Specialists International",
    description: "ISI O&M services maximize asset reliability through scheduled maintenance, troubleshooting, spare parts management, and continuous improvement programs that reduce lifecycle costs and improve uptime.",
  },
};

const bulletPoints = [
  "System Operating and Maintenance Package Development",
  "Operator Training",
  "Vendor Coordination pre- and post-Start-Up",
  "Step by Step Introduction of Newly Installed System(s) / Equipment",
  "Operations and Maintenance Start-Up Support",
  "Asset Integrity Management Program Development and Management",
  "Performance Optimization Recommendations",
  "Unmanned Ariel Survey (Drone)",
  "Gas Transfer Capabilities (Pipeline to Pipeline or Storage)",
];

export default function OperationsMaintenancePage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Operations & Maintenance Support (O&M)"
        backgroundImage="/images/gas8.jpg"
        overlayIntensity="dark"
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">OPERATIONS AND MAINTENANCE SUPPORT (O&M)</h2>
              <ul className="mt-6 space-y-2 text-base leading-[1.8] text-black md:text-lg list-disc list-inside">
                {bulletPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <SolutionImage src="/images/test8.jpg" alt="Operations & Maintenance Support (O&M)" />
          </div>
        </div>
      </section>
    </div>
  );
}
