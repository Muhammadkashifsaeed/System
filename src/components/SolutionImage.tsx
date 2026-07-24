"use client";

import Image from "next/image";

interface SolutionImageProps {
  src: string;
  alt: string;
}

export default function SolutionImage({ src, alt }: SolutionImageProps) {
  return (
    <div className="w-full max-w-2xl xl:max-w-[800px] mx-auto">
      <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          quality={75}
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
