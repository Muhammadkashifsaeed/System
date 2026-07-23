import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionImage from "@/components/SolutionImage";

export const metadata: Metadata = {
  title: "Integration Management Support | Integrity Specialists International",
  description: "ISI Integration Management ensures smooth project delivery across stakeholders — procurement, installation, testing, and handing off to Commissioning with customer approval as the priority.",
  keywords: ["integration management", "project integration", "custody transfer", "stakeholder management", "commissioning support", "engineering services", "integrity specialists", "project delivery", "scope management"],
  alternates: {
    canonical: "https://www.integritysolns.com/solutions/integration-management-support",
  },
  openGraph: {
    title: "Integration Management Support | Integrity Specialists International",
    description: "ISI Integration Management ensures smooth project delivery across stakeholders — procurement, installation, testing, and handing off to Commissioning with customer approval as the priority.",
    url: "https://www.integritysolns.com/solutions/integration-management-support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integration Management Support | Integrity Specialists International",
    description: "ISI Integration Management ensures smooth project delivery across stakeholders — procurement, installation, testing, and handing off to Commissioning with customer approval as the priority.",
  },
};

export default function IntegrationSupportPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Integration Management Support"
        backgroundImage="/images/gas2.jpg"
        overlayIntensity="dark"
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937] md:text-4xl">INTEGRATION MANAGEMENT SUPPORT</h2>
              <div className="section-divider-left mt-6" />
              <p className="mt-6 text-base leading-[1.8] text-gray-700 md:text-lg">
                Our Integration Management methods provide recommendations in the early stages of the project assist with providing how the various stakeholders will procure, collaborate, prove functionality, install, integrate and test, and preserve to complete the project scope of work requirements for a flawless custody transfer to Commissioning.
              </p>
            </div>
            <SolutionImage src="/images/test2.jpg" alt="Integration Management Support" />
          </div>
        </div>
      </section>
    </div>
  );
}
