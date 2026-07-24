"use client";

import Image from "next/image";
import Link from "next/link";

const industries = [
  { title: "Oil and Gas Facilities", image: "/images/gas1.webp" },
  { title: "Pipelines", image: "/images/gas2.webp" },
  { title: "Refineries", image: "/images/gas3.webp" },
  { title: "Power & Utilities", image: "/images/gas4.webp" },
  { title: "Petrochemical", image: "/images/gas5.webp" },
  { title: "Marine Construction", image: "/images/gas6.webp" },
  { title: "Hydrogen", image: "/images/gas7.webp" },
  { title: "Solar", image: "/images/gas8.webp" },
  { title: "Geothermal", image: "/images/gas9.webp" },
  { title: "Hydro-Electric", image: "/images/gas10.webp" },
  { title: "Automotive Manufacturing", image: "/images/gas11.webp" },
  { title: "Battery Manufacturing", image: "/images/gas12.webp" },
  { title: "Battery Recycling", image: "/images/gas13.webp" },
];

export default function PowerIndustries() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {industries.map((item) => (
        <Link
          key={item.title}
          href="/solutions"
          className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="text-sm font-semibold text-white md:text-base">
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
