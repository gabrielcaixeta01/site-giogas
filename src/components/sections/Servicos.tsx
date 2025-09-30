"use client";

import React from "react";
import { motion } from "framer-motion";
// ...existing code...
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
  // ...existing code...
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
        {/* Subtítulo Serviços */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-semibold mt-10 mb-4 text-blue-700"
        >
          Serviços
        </motion.h2>
        {/* Card de tópicos de serviços */}
        <div className="flex w-full justify-center mb-12">
          <motion.div
            variants={item}
            className="w-full max-w-2xl bg-white/95 rounded-2xl px-6 py-8 shadow-md text-left"
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {t.servicos.servicos.map((servico: string, idx: number) => (
                <li key={idx} className="text-base leading-snug">
                  {servico}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Produtos removidos - conteúdo agora está em Produtos.tsx */}
      </motion.div>
    </section>
  );
}
