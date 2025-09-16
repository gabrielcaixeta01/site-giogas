// Componente de Banner responsivo com carrossel de imagens para o Hero
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface BannerCarouselProps {
  images: { src: string; alt: string }[];
  interval?: number;
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({
  images,
  interval = 4000,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
  <div className="relative w-full max-w-4xl mx-auto aspect-square sm:aspect-[16/6] rounded-xl overflow-hidden shadow-lg">
      {images.map((img, idx) => (
        <Image
          key={img.src + "-" + idx + "-" + current}
          src={img.src}
          alt={img.alt}
          fill
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          draggable={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 900px"
          quality={90}
          priority={idx === 0}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border border-white/70 bg-white/70 ${
              idx === current ? "scale-125 bg-blue-700 border-blue-700" : ""
            }`}
            aria-label={`Ir para imagem ${idx + 1}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
