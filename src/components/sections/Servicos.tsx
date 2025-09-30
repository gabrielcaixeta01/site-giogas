"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiBox,
  FiSettings,
  FiTool,
  FiTruck,
  FiPackage,
  FiUsers,
  FiClipboard,
  FiBookOpen,
  FiRefreshCw,
  FiSearch,
} from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Servicos() {
  const { t } = useLanguage();
  const container = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.08 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };
  // Ícones coerentes para produtos
  const produtosIcons = [
    <FiBox key="prod-0" className="text-2xl" />, // Boosters
    <FiSettings key="prod-1" className="text-2xl" />, // Compressores
    <FiTool key="prod-2" className="text-2xl" />, // Equipamentos
    <FiTruck key="prod-3" className="text-2xl" />, // Kits veículos pesados
    <FiPackage key="prod-4" className="text-2xl" />, // Peças/acessórios
  ];
  return (
    <section
      id="servico"
      className="servicos w-full min-h-screen flex flex-col items-center justify-center text-center py-32 md:pb-40"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={container}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-light mb-3"
          style={{ color: "var(--color-fg)" }}
        >
          {t.servicos.title}
        </motion.h2>

        {/* Produtos */}
        <motion.h3
          variants={item}
          className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-blue-700"
        >
          {t.servicos.produtosTitle}
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mb-12">
          {t.servicos.produtos.map(
            (produto: { title: string; desc: string }, idx: number) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white rounded-2xl shadow-md p-5 sm:p-8 flex flex-col items-center hover:scale-[1.03] transition-transform"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  {produtosIcons[idx]}
                </div>
                <h4
                  className="text-lg font-medium mb-1"
                  style={{ color: "var(--color-fg)" }}
                >
                  {produto.title}
                </h4>
                <p className="text-base text-gray-600">{produto.desc}</p>
              </motion.div>
            )
          )}
        </div>

        {/* Serviços */}
        <motion.h3
          variants={item}
          className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-blue-700"
        >
          {t.servicos.servicosTitle}
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {t.servicos.servicos.map((servico: string, idx: number) => {
            // Ícones diferentes para cada serviço (opcional, pode repetir se quiser)
            const icons = [
              <FiClipboard key="serv-0" className="text-2xl" />, // Venda
              <FiPackage key="serv-1" className="text-2xl" />, // Locação
              <FiUsers key="serv-2" className="text-2xl" />, // Consultoria
              <FiTool key="serv-3" className="text-2xl" />, // Montagem
              <FiBookOpen key="serv-4" className="text-2xl" />, // Treinamento
              <FiRefreshCw key="serv-5" className="text-2xl" />, // Revisão/manutenção
              <FiSearch key="serv-6" className="text-2xl" />, // Perícias
            ];
            return (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white rounded-2xl shadow-md p-5 sm:p-8 flex flex-col items-center hover:scale-[1.03] transition-transform"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  {icons[idx]}
                </div>
                <h4
                  className="text-lg font-medium mb-1"
                  style={{ color: "var(--color-fg)" }}
                >
                  {servico}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
