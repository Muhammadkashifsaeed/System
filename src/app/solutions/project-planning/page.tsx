import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SolutionImage from "@/components/SolutionImage";

export const metadata: Metadata = {
  title: "Project Planning | Integrity Specialists International",
  description: "ISI delivers expert project planning services that optimize budget, schedule, and risk for client assets. Our planning experts ensure ROI from pre-FEED through execution.",
  keywords: ["project planning", "FEED planning", "busdvget optimization", "risk mitigation", "engineering services", "integrity specialists", "pipeline planning", "asset management", "schedule management"],
  alternates: {
    canonical: "https://www.integritysolns.com/solutions/project-planning",
  },
  openGraph: {
    title: "Project Planning | Integrity Specialists International",
    description: "ISI delivers expert project planning services that optimize budget, schedule, and risk for client assets. Our planning experts ensure ROI from pre-FEED through execution.",
    url: "https://www.integritysolns.com/solutions/project-planning",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Planning | Integrity Specialists International",
    description: "ISI delivers expert project planning services that optimize budget, schedule, and risk for client assets. Our planning experts ensure ROI from pre-FEED through execution.",
  },
};

export default function ProjectPlanningPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Project Planning"
        backgroundImage="/images/gas1.jpg"
        overlayIntensity="dark"
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-black md:text-4xl">
                PROJECT PLANNING
              </h2>
              <p className="mt-6 text-base leading-[1.8] text-black md:text-lg">
                Our Planning for Custody Transfer (PCT) methods are specifically engineered with the project end in mind to assist and provide value to optimize the budget, schedule, mitigate risk, and most importantly the overall performance of the asset for Owner / Operator acceptance. This includes the upmost safe functionality of the asset. With our diversified managers, engineers, technical advisors, and subject matter experts involved during early pre-FEED or FEED stages of a project, we provide the right value-added required to mitigate unforeseen impacts and a quicker Return on Investment (ROI) with our proven planning, execution, and closeout methods.
              </p>
            </div>
            <SolutionImage src="/images/involved.png" alt="Project Planning" />
          </div>
        </div>
      </section>
    </div>
  );
}
