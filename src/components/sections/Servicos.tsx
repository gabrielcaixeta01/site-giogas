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
      bullets: [
        "Entrega rápida e segura",
        "Atendimento personalizado",
        "Suporte 24h para residências",
      ],
    },
    {
      icon: <FiBriefcase className="text-2xl" />,
      titulo: t.servicos.comercial.title,
      bullets: [
        "Soluções para comércios e restaurantes",
        "Contratos flexíveis",
        "Acompanhamento técnico especializado",
      ],
    },
    {
      icon: <FiShield className="text-2xl" />,
      titulo: t.servicos.seguranca.title,
      bullets: [
        "Inspeção e manutenção preventiva",
        "Instalação de sistemas de gás",
        "Máxima segurança garantida",
      ],
    },
    {
      icon: <FiTruck className="text-2xl" />,
      titulo: t.servicos.logistica.title,
      bullets: [
        "Frota própria e logística eficiente",
        "Abastecimento contínuo",
        "Cobertura em toda a região metropolitana",
      ],
    },
  ];
  return (
    <section
      id="servico"
      className="servicos w-full min-h-screen flex flex-col items-center justify-center text-center pt-32 pb-32"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-light mb-6"
          style={{ color: "var(--color-fg)" }}
        >
          {t.servicos.title}
        </h2>
        <p
          className="text-lg mb-12 max-w-2xl mx-auto text-justify"
          style={{ color: "var(--color-fg)" }}
        >
          {t.servicos.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicos.map((servico, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-blue-900/40 rounded-2xl shadow-md p-8 flex flex-col items-center hover:scale-[1.03] transition-transform"
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
