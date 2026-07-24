"use client";

import Image from "next/image";
import AllSolutionsGrid from "@/components/AllSolutionsGrid";

export default function SolutionsGrid() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative flex h-[360px] w-full items-center justify-center overflow-hidden sm:h-[380px] md:h-[420px]">
        <Image
          src="/images/gas3.webp"
          alt="Engineering and industrial solutions"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/40 to-dark/65" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex h-[360px] flex-col items-center justify-center text-center sm:h-[380px] md:h-[420px]">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              SOLUTIONS
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
              Engineering Excellence Across Every Industry
            </p>
          </div>
        </div>
      </section>

      {/* ALL SOLUTIONS */}
      <AllSolutionsGrid />
    </div>
  );
}
