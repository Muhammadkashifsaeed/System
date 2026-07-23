"use client";

import Image from "next/image";
import Link from "next/link";

interface Solution {
  title: string;
  image: string;
  href: string;
  description: string;
}

const solutions: Solution[] = [
  {
    title: "Project Planning",
    image: "/images/test1.jpg",
    href: "/solutions/project-planning",
    description: "Optimize budget, schedule, and risk with proven planning and execution methods.",
  },
  {
    title: "Integration Support",
    image: "/images/test2.jpg",
    href: "/solutions/integration-management-support",
    description: "Seamless stakeholder collaboration and flawless custody transfer to Commissioning.",
  },
  {
    title: "Engineering Support",
    image: "/images/test3.jpg",
    href: "/solutions/engineering-support",
    description: "Professional licensing, specifications, drawings review, and technical advisory.",
  },
  {
    title: "Electrical, Instrumentation, Controls (EI&C) & Fiber Optic",
    image: "/images/test4.jpg",
    href: "/solutions/eic-fiber-optic",
    description: "End-to-end electrical, instrumentation, controls, and fiber optic solutions.",
  },
  {
    title: "Construction / Decommissioning Support",
    image: "/images/test5.jpg",
    href: "/solutions/construction-decommissioning-support",
    description: "Construction planning, vendor management, field inspections, and as-built documentation.",
  },
  {
    title: "Pre-Commissioning Support",
    image: "/images/test6.jpg",
    href: "/solutions/pre-commissioning-support",
    description: "Integrity testing, pipe flushing, drying, inerting, and system preparation.",
  },
  {
    title: "Commissioning & Start-Up Support (CSU)",
    image: "/images/test7.jpg",
    href: "/solutions/commissioning-start-up-support",
    description: "CSU strategy, energization, loop testing, mechanical checkouts, and site acceptance.",
  },
  {
    title: "Operations & Maintenance Support (O&M)",
    image: "/images/test8.jpg",
    href: "/solutions/operations-maintenance-support",
    description: "Maximize asset reliability through maintenance, troubleshooting, and optimization.",
  },
  {
    title: "Asset Integrity Management",
    image: "/images/test9.jpg",
    href: "/solutions/asset-integrity-management",
    description: "Risk-based inspection, corrosion management, and life-extension studies.",
  },
  {
    title: "Marine Construction",
    image: "/images/test10.jpg",
    href: "/solutions/marine-construction",
    description: "Offshore and coastal infrastructure with diving, subsea installation, and platform support.",
  },
  {
    title: "Turnarounds Support (TAR)",
    image: "/images/test11.jpg",
    href: "/solutions/turnarounds-support",
    description: "Planning, scaffolding, mechanical work, inspection, and trade labor for TAR events.",
  },
  {
    title: "Staffing / Resources",
    image: "/images/test12.jpg",
    href: "/solutions/staffing-resources-support",
    description: "Qualified professionals across engineering, construction, commissioning, and operations.",
  },
];

export default function AllSolutionsGrid() {
  return (
    <section className="bg-[#F8FAFC] section-padding">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">All Solutions</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-[#475569]">
            Comprehensive engineering and industrial solutions tailored to your needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((item, idx) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={idx < 4}
                  quality={idx < 4 ? 100 : 75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-base font-semibold uppercase tracking-wider text-[#0F172A] md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
                >
                  Read More
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
