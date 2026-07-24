"use client";

import Image from "next/image";
import Link from "next/link";

const industries = [
  { title: "Oil and Gas Facilities", image: "https://images.pexels.com/photos/31336007/pexels-photo-31336007.jpeg" },
  { title: "Pipelines", image: "https://images.pexels.com/photos/36825977/pexels-photo-36825977.jpeg" },
  { title: "Refineries", image: "https://images.pexels.com/photos/15970027/pexels-photo-15970027.jpeg" },
  { title: "Power & Utilities", image: "https://images.pexels.com/photos/30762645/pexels-photo-30762645.jpeg" },
  { title: "Petrochemical", image: "https://images.pexels.com/photos/6767962/pexels-photo-6767962.jpeg" },
  { title: "Marine Construction", image: "https://images.pexels.com/photos/9806591/pexels-photo-9806591.jpeg" },
  { title: "Hydrogen", image: "https://images.pexels.com/photos/12015250/pexels-photo-12015250.jpeg" },
  { title: "Solar", image: "https://images.pexels.com/photos/35105443/pexels-photo-35105443.jpeg" },
  { title: "Geothermal", image: "https://images.pexels.com/photos/464390/pexels-photo-464390.jpeg" },
  { title: "Hydro-Electric", image: "https://images.pexels.com/photos/6415974/pexels-photo-6415974.jpeg" },
  { title: "Automotive Manufacturing", image: "https://images.pexels.com/photos/5982898/pexels-photo-5982898.jpeg" },
  { title: "Battery Manufacturing", image: "https://images.pexels.com/photos/36594160/pexels-photo-36594160.jpeg" },
  { title: "Battery Recycling", image: "https://images.pexels.com/photos/35520673/pexels-photo-35520673.jpeg" },
];

export default function PowerIndustries() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {industries.map((item) => (
        <Link
          key={item.title}
          href="/solutions"
          className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20"
        >
          <div className="relative h-32 w-full overflow-hidden sm:h-36">
            <Image
              src={item.image}
              alt={item.title}
              fill
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
            <h3 className="text-xs font-semibold text-white sm:text-sm md:text-base">
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
