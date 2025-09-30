"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiBox, FiSettings, FiTool, FiTruck, FiPackage } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Produtos() {
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
  const produtosIcons = [
    <FiBox key="prod-0" className="text-2xl" />, // Boosters
    <FiSettings key="prod-1" className="text-2xl" />, // Compressores
    <FiTool key="prod-2" className="text-2xl" />, // Equipamentos
    <FiTruck key="prod-3" className="text-2xl" />, // Kits veículos pesados
    <FiPackage key="prod-4" className="text-2xl" />, // Peças/acessórios
  ];
  return (
    <section
      id="produtos"
      className="produtos w-full min-h-screen flex flex-col items-center justify-center text-center py-32 md:pb-40"
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
          className="text-3xl md:text-4xl font-semibold mb-4 text-blue-700"
        >
          Produtos
        </motion.h2>
        <div className="flex flex-col w-full gap-5 mb-12">
          {t.servicos.produtos.map(
            (produto: { title: string; desc: string }, idx: number) => (
              <motion.div
                key={idx}
                variants={item}
                className="flex flex-col sm:flex-row items-center sm:items-start w-full bg-white/95 px-5 py-6 sm:py-7 transition-shadow hover:shadow-lg rounded-2xl group"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-3 sm:mb-0 sm:mr-6">
                  {produtosIcons[idx]}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4
                    className="text-lg font-semibold mb-1"
                    style={{ color: "var(--color-fg)" }}
                  >
                    {produto.title}
                  </h4>
                  <p className="text-base text-gray-600">{produto.desc}</p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
