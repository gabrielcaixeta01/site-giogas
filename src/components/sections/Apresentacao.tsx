import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Apresentacao() {
  const { t } = useLanguage();
  return (
    <section
      id="apresentacao"
      className="w-full min-h-screen flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-5xl md:text-6xl font-light mb-6">
        {t.apresentacao.title}
      </h1>
      <p className="text-lg max-w-xl mx-auto text-justify">
        {t.apresentacao.description}
      </p>
    </section>
  );
}
