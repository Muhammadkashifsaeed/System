"use client";

import Image from "next/image";

interface SolutionImageProps {
  src: string;
  alt: string;
}

export default function SolutionImage({ src, alt }: SolutionImageProps) {
  return (
    <div className="w-full max-w-7xl xl:max-w-[1200px] mx-auto">
      <div className="group relative aspect-[4/3] w-full transition-all duration-500 hover:-translate-y-2">
        <Image
          src={src}
          alt={alt}
          fill
          quality={75}
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-contain scale-[1.30] transition-transform duration-700 group-hover:scale-[1.35]"
        />
      </div>
    </div>
  );
}
