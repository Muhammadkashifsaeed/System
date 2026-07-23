"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

export default function ImageCarousel({
  images,
}: ImageCarouselProps) {
  return (
    <div className="w-full max-w-[550px] mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        speed={700}
        className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
        style={{ aspectRatio: "3/4" }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={idx === 0}
                quality={100}
                sizes="550px"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
