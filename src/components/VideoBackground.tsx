"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function VideoBackground({
  src,
  poster,
  className = "",
  children,
}: VideoBackgroundProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className={`absolute inset-0 bg-dark ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      {poster && !isLoaded && (
        <div className="absolute inset-0 bg-dark">
          <Image
            src={poster}
            alt=""
            fill
            quality={100}
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
        </div>
      )}
      <video
        key={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        className="h-full w-full object-cover"
        onError={() => setHasError(true)}
        onLoadedData={() => setIsLoaded(true)}
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
      {children}
    </div>
  );
}
