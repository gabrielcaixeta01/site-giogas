"use client";

<div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />;

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      let yOffset = -120;
      if (id === "contato") yOffset = 0;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="hero relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden py-10"
    >
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/bg-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* pattern discreto sobre a hero */}
      <div className="absolute inset-0 bg-[url('/patterns/diagonal.svg')] opacity-[0.06] pointer-events-none z-0" />
      {/* halo claro atrás do logo/título */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
      </div>
      {/* blobs decorativos */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/3 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-24 left-1/4 w-32 h-32 bg-cyan-300/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-blue-200/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-cyan-200/20 rounded-full blur-2xl pointer-events-none" />
      {/* ...outros elementos decorativos podem ser adicionados aqui... */}
      <div className="w-full flex flex-col items-center gap-10 md:gap-14 relative z-10">
        {/* Título animado GIOGAS, maior e no topo */}
        {/* Título GIOGAS no topo da hero, como primeiro elemento visível */}
        <div className="w-full flex justify-center pt-10 z-20">
          <h1
            className="text-[clamp(4rem,12vw,10rem)] font-bold flex gap-2 md:gap-4 items-center select-none"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {["G", "I", "O"].map((letra, i) => (
              <motion.span
                key={letra}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.25, ease: "easeOut" }}
                className="text-white"
              >
                {letra}
              </motion.span>
            ))}
            {["G", "A", "S"].map((letra, i) => (
              <motion.span
                key={letra}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: (i + 3) * 0.25,
                  ease: "easeOut",
                }}
                className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent"
              >
                {letra}
              </motion.span>
            ))}
          </h1>
        </div>
        <div className="max-w-2xl mx-auto px-2 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl mb-7 text-center font-light text-white/80"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-lg font-normal text-white/60 mb-2 block text-center"
          >
            {t.hero.description}
          </motion.span>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            type="button"
            onClick={() => scrollToSection("contato")}
            className="mt-8 inline-flex items-center px-6 py-3 rounded-full font-semibold bg-white text-[#175fae] shadow-lg hover:shadow-blue-500/40 hover:bg-[#e6f0fa] transition"
          >
            {t.hero.button}
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              delay: 1,
            }}
            className="flex justify-center mt-10"
            aria-label="Scroll down"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
      {/* gradiente de transição suave para a próxima seção */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[#175fae]" />
    </section>
  );
}
