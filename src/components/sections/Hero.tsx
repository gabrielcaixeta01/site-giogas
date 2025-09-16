"use client";

import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import BannerCarousel from "./BannerCarousel";

export default function Hero() {
  const { t } = useLanguage();
  // Função para scroll suave até a seção de contato
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      let yOffset = -120;
      if (id === "contato") yOffset = -200;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center justify-center text-center py-10 pt-32"
      style={{
        background:
          "linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg) 100%)",
      }}
    >
      <div className="w-full flex flex-col items-center gap-8">
        <BannerCarousel
          images={[
            { src: "/hero1.jpg", alt: "Trator azul em campo agrícola" },
            { src: "/hero2.jpg", alt: "Biodigestor de biogás" },
            { src: "/hero3.jpg", alt: "Equipamento agrícola para biogás" },
            { src: "/hero4.jpg", alt: "Equipe técnica em campo" },
          ]}
        />
        <div className="max-w-2xl mx-auto px-2">
          <h1 className="text-4xl md:text-5xl font-light mb-4 drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="text-base md:text-2xl mb-6 text-justify font-light">
            {t.hero.subtitle}
            <br />
            {t.hero.description}
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("contato")}
            className="inline-block px-8 py-3 rounded-full bg-blue-700 text-white font-medium text-lg shadow-lg hover:bg-blue-800 transition-colors"
          >
            {t.hero.button}
          </button>
        </div>
      </div>
    </section>
  );
}
