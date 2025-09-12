"use client";

import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 text-center bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 dark:text-blue-200 mb-6 drop-shadow-lg">
        {t.hero.title}
      </h1>
      <p className="text-lg md:text-2xl text-gray-900 dark:text-gray-200 max-w-2xl mb-8 text-justify">
        {t.hero.subtitle}
        <br />
        {t.hero.description}
      </p>
      <a
        href="#contato"
        className="inline-block px-8 py-3 rounded-full bg-blue-700 text-white font-semibold text-lg shadow-lg hover:bg-blue-800 transition-colors"
      >
        {t.hero.button}
      </a>
    </section>
  );
}
