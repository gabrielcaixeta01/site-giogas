"use client";

import React from "react";
import { FiHome, FiBriefcase, FiShield, FiTruck } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Servicos() {
  const { t } = useLanguage();
  const servicos = [
    {
      icon: <FiHome className="text-blue-700 text-3xl mb-2" />,
      titulo: t.servicos.residencial.title,
      descricao: t.servicos.residencial.description,
    },
    {
      icon: <FiBriefcase className="text-blue-700 text-3xl mb-2" />,
      titulo: t.servicos.comercial.title,
      descricao: t.servicos.comercial.description,
    },
    {
      icon: <FiShield className="text-blue-700 text-3xl mb-2" />,
      titulo: t.servicos.seguranca.title,
      descricao: t.servicos.seguranca.description,
    },
    {
      icon: <FiTruck className="text-blue-700 text-3xl mb-2" />,
      titulo: t.servicos.logistica.title,
      descricao: t.servicos.logistica.description,
    },
  ];
  return (
    <section id="servico" className="py-20 bg-blue-50 dark:bg-blue-950">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-200 mb-6">
          {t.servicos.title}
        </h2>
        <p className="text-lg text-gray-900 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          {t.servicos.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicos.map((servico, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-blue-900/40 rounded-2xl shadow-md p-8 flex flex-col items-center hover:scale-[1.03] transition-transform"
            >
              {servico.icon}
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                {servico.titulo}
              </h3>
              <p className="text-gray-900 dark:text-gray-200 text-base">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
