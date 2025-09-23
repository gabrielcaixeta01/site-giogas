"use client";

import React from "react";
import { FiHome, FiBriefcase, FiShield, FiTruck } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Servicos() {
  const { t } = useLanguage();
  // Bullets resumidos e refinados manualmente para cada serviço
  const servicos = [
    {
      icon: <FiHome className="text-2xl" />,
      titulo: t.servicos.residencial.title,
      bullets: t.servicos.residencial.description.split("\n"),
    },
    {
      icon: <FiBriefcase className="text-2xl" />,
      titulo: t.servicos.comercial.title,
      bullets: t.servicos.comercial.description.split("\n"),
    },
    {
      icon: <FiShield className="text-2xl" />,
      titulo: t.servicos.seguranca.title,
      bullets: t.servicos.seguranca.description.split("\n"),
    },
    {
      icon: <FiTruck className="text-2xl" />,
      titulo: t.servicos.logistica.title,
      bullets: t.servicos.logistica.description.split("\n"),
    },
  ];
  return (
    <section
      id="servico"
      className="servicos w-full min-h-screen flex flex-col items-center justify-center text-center pb-28 md:pb-40"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-light mb-3"
          style={{ color: "var(--color-fg)" }}
        >
          {t.servicos.title}
        </h2>
        <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-center text-gray-500">
          {t.servicos.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicos.map((servico, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-5 sm:p-8 flex flex-col items-center hover:scale-[1.03] transition-transform"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                {servico.icon}
              </div>
              <h3
                className="text-xl font-light mb-2"
                style={{ color: "var(--color-fg)" }}
              >
                {servico.titulo}
              </h3>
              <ul
                className="text-base text-left list-disc pl-5 space-y-1"
                style={{ color: "var(--color-fg)" }}
              >
                {servico.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="leading-snug">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
