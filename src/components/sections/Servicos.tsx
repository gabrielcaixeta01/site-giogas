"use client";

import React from "react";
import { FiHome, FiBriefcase, FiShield, FiTruck } from "react-icons/fi";

const servicos = [
  {
    icon: <FiHome className="text-blue-600 text-3xl mb-2" />,
    titulo: "Gás Residencial",
    descricao:
      "Entrega rápida e segura de gás para residências em todo o Rio de Janeiro. Atendimento personalizado e suporte 24h.",
  },
  {
    icon: <FiBriefcase className="text-blue-600 text-3xl mb-2" />,
    titulo: "Gás Comercial",
    descricao:
      "Soluções em gás para comércios, restaurantes e condomínios. Contratos flexíveis e acompanhamento técnico especializado.",
  },
  {
    icon: <FiShield className="text-blue-600 text-3xl mb-2" />,
    titulo: "Segurança e Manutenção",
    descricao:
      "Serviços de inspeção, manutenção preventiva e instalação de sistemas de gás, garantindo máxima segurança para seu negócio ou residência.",
  },
  {
    icon: <FiTruck className="text-blue-600 text-3xl mb-2" />,
    titulo: "Logística e Distribuição",
    descricao:
      "Frota própria e logística eficiente para garantir o abastecimento contínuo de gás em toda a região metropolitana.",
  },
];

export default function Servicos() {
  return (
    <section id="servico" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-200 mb-6">
          Nossos Serviços
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          A GIOGÁS oferece soluções completas em distribuição de gás, segurança
          e suporte técnico para residências, comércios e indústrias no Rio de
          Janeiro.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicos.map((servico, idx) => (
            <div
              key={idx}
              className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl shadow-md p-8 flex flex-col items-center hover:scale-[1.03] transition-transform"
            >
              {servico.icon}
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-100 mb-2">
                {servico.titulo}
              </h3>
              <p className="text-gray-700 dark:text-gray-200 text-base">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
