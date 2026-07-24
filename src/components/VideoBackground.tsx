"use client";

import { useState } from "react";

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

  if (hasError) {
    return (
      <div className={`absolute inset-0 bg-dark ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
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
      >
        <source src={src} type="video/mp4" />
      </video>
      {children}
    </div>
  );
}
