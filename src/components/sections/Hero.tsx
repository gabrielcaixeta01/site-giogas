"use client";

import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col items-center justify-center text-center py-20"
      style={{
        background:
          "linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg) 100%)",
      }}
    >
      <h1 className="text-5xl md:text-6xl font-light mb-6 drop-shadow-lg">
        {t.hero.title}
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl mb-8 text-justify font-light">
        {t.hero.subtitle}
        <br />
        {t.hero.description}
      </p>
      <a
        href="#contato"
        className="inline-block px-8 py-3 rounded-full bg-blue-700 text-white font-medium text-lg shadow-lg hover:bg-blue-800 transition-colors"
      >
        {t.hero.button}
      </a>
    </section>
  );
}
