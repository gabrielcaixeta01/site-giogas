"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiClipboard,
  FiRepeat,
  FiUsers,
  FiTool,
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
  const servicosIcons = [
    <FiClipboard key="serv-0" className="text-2xl" />, // Venda e representação
    <FiRepeat key="serv-1" className="text-2xl" />, // Locação
    <FiUsers key="serv-2" className="text-2xl" />, // Consultoria
    <FiTool key="serv-3" className="text-2xl" />, // Montagem
    <FiBookOpen key="serv-4" className="text-2xl" />, // Treinamento
    <FiRefreshCw key="serv-5" className="text-2xl" />, // Revisão/manutenção
    <FiSearch key="serv-6" className="text-2xl" />, // Perícias
  ];
  return (
    <section
      id="servico"
      className="servicos w-full min-h-screen flex flex-col items-center justify-center text-center py-32 md:pb-40"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="max-w-5xl text-left"
      >
        <motion.h2
          variants={item}
          className="text-5xl md:text-6xl font-semibold mt-10 mb-5 text-white/90 text-center border-b border-gray-100/70 md:text-left md:pl-5 w-full"
        >
          Serviços
        </motion.h2>
        {/* Primeira linha: 4 cards */}
        <div className="w-full mb-2 sm:mb-6 flex flex-col md:flex-row md:justify-between gap-2">
          {t.servicos.servicos
            .slice(0, 4)
            .map((servico: string, idx: number) => (
              <motion.div
                key={idx}
                variants={item}
                className="flex flex-row items-center w-full bg-white/95 px-3 py-3 sm:px-5 sm:py-7 transition-shadow hover:shadow-lg rounded-2xl group text-sm sm:text-base md:min-w-[200px] md:max-w-xs lg:mx-2"
              >
                <div className="flex items-center justify-center h-13 w-13 sm:h-16 sm:w-16 rounded-full bg-blue-100 text-blue-600 mb-3">
                  {servicosIcons[idx]}
                </div>
                <div className="flex-1 w-full text-center font-light">
                  <h4
                    className="text-sm sm:text-base font-light mb-1"
                    style={{ color: "var(--color-fg)" }}
                  >
                    {servico}
                  </h4>
                </div>
              </motion.div>
            ))}
        </div>
        {/* Segunda linha: 3 cards centralizados */}
        <div className="w-full mb-12 flex flex-col lg:flex-row lg:justify-center gap-2">
          {t.servicos.servicos.slice(4).map((servico: string, idx: number) => (
            <motion.div
              key={idx + 4}
              variants={item}
              className="flex flex-row items-center w-full bg-white/95 px-3 py-3 sm:px-5 sm:py-7 transition-shadow hover:shadow-lg rounded-2xl group text-sm sm:text-base md:min-w-[200px] md:max-w-xs lg:mx-2"
            >
              <div className="flex items-center justify-center h-13 w-13 sm:h-16 sm:w-16 rounded-full bg-blue-100 text-blue-600 mb-3">
                {servicosIcons[idx + 4]}
              </div>
              <div className="flex-1 w-full text-center font-light">
                <h4
                  className="text-sm sm:text-base font-light mb-1"
                  style={{ color: "var(--color-fg)" }}
                >
                  {servico}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
    </section>
    
  );
}
