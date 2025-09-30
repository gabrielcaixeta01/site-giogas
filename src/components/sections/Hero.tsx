"use client";

<div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />;

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

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
      className="hero relative min-h-screen flex flex-col justify-between items-center text-center overflow-hidden pt-6 pb-10"
    >
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 w-full h-full z-0">
        {!videoLoaded && !videoError && (
          <Image
            src="/load-image.png"
            alt="Carregando..."
            fill
            className="w-full h-full object-cover"
            style={{ objectFit: "cover" }}
            priority
          />
        )}
        {!videoError && (
          <video
            className="w-full h-full object-cover"
            src="/bg-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            style={{ display: videoLoaded ? "block" : "none" }}
          />
        )}
      </div>

      <div className="w-full flex flex-col gap-10 md:gap-14 relative z-10">
        {/* Topo: título e subtítulo */}
        <div className="w-full flex flex-col items-center z-20 mb-24 md:mb-0 pt-16">
          <h1
            className="text-[clamp(4rem,12vw,10rem)] font-bold flex gap-1 md:gap-2 select-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {["G", "I", "O"].map((letra, i) => (
              <motion.span
                key={letra}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.25, ease: "easeOut" }}
                className="text-white"
              >
                {letra}
              </motion.span>
            ))}
            {["G", "Á", "S"].map((letra, i) => (
              <motion.span
                key={letra}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (i + 3) * 0.25,
                  ease: "easeOut",
                }}
                className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient"
              >
                {letra}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl font-semilight text-gray-800"
          >
            Energia que conecta o Rio de Janeiro.
          </motion.p>
        </div>
        {/* Meio: descrição centralizada */}
        <div className="flex flex-col items-center justify-center flex-1">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-lg font-normal text-gray-500/90 block text-center max-w-xl mx-auto"
          >
            Distribuição de gás com segurança, qualidade e agilidade para sua
            empresa.
          </motion.span>
        </div>
        {/* Base: botão e ícone de scroll */}
        <div className="w-full flex flex-col items-center py-40 mt-20 left-0 z-30 pb-8">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            type="button"
            onClick={() => scrollToSection("contato")}
            className="inline-flex items-center px-6 py-3 rounded-full font-semibold bg-white text-[#175fae] shadow-lg hover:shadow-blue-500/40 hover:bg-[#e6f0fa] transition"
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
