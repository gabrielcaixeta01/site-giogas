"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiShield, FiTruck } from "react-icons/fi";
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
  // Bullets resumidos e refinados manualmente para cada serviço
  const servicos = [
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
        <motion.p
          variants={item}
          className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-center text-gray-500"
        >
          {t.servicos.description}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {servicos.map((servico, idx) => (
            <motion.div
              key={idx}
              variants={item}
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
