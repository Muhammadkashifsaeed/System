"use client";

import SectionHeader from "@/components/SectionHeader";
import PowerIndustries from "@/components/PowerIndustries";

export default function IndustriesServed() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader
          title="Industries Served"
          subtitle="Delivering excellence across domestic and international industry sectors with proven expertise."
          showLink
          linkHref="/solutions"
          linkLabel="View All Solutions"
        />
        <div className="mt-8">
          <PowerIndustries />
        </div>
      </div>
    </section>
  );
}
