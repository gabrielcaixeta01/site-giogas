"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";
import { useEffect, useMemo, useRef, useState } from "react";

// ====== Dados de parceiros ======
type Partner = { name: string; logo: string };

const basePartners: Partner[] = [
  { name: "BRB", logo: "/images/brb.jpg" },
  { name: "Shell", logo: "/images/shell.jpg" },
  { name: "Prefeitura do Rio", logo: "/images/prefeitura_rio.jpg" },
  // adicione mais conforme precisar
];

export default function ParceirosCarousel() {
  // Ref para swipe touch
  const touchStartX = useRef<number | null>(null);
  const { t } = useLanguage();
  const title = t?.parceiros?.title ?? "Nossos Parceiros";
  const subtitle =
    t?.parceiros?.subtitle ??
    "Relações que ampliam alcance e qualidade — juntos entregamos mais.";
  const partners: Partner[] = useMemo(() => basePartners, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const AUTOPLAY_MS = 4000;
  const PAUSE_MS = 5500;
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!partners.length) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % partners.length);
      }, AUTOPLAY_MS);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, partners.length]);

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const temporarilyPause = () => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    setIsPaused(true);
    pauseTimerRef.current = setTimeout(() => setIsPaused(false), PAUSE_MS);
  };

  const next = () => {
    setCurrentIndex((i) => (i + 1) % partners.length);
    temporarilyPause();
  };
  const prev = () => {
    setCurrentIndex((i) => (i - 1 + partners.length) % partners.length);
    temporarilyPause();
  };
  const goTo = (i: number) => {
    setCurrentIndex(i);
    temporarilyPause();
  };

  const current = partners[currentIndex] ?? { name: "", logo: "" };

  return (
    <section id="parceiros" className="parceiros scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-zinc-400">
            Parcerias estratégicas
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-light tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        {/* Carousel */}
        <div className="relative max-w-2xl mx-auto flex items-center">
          {/* Botões */}
          {/* Botões: só aparecem em md+ */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="hidden md:block absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition"
            style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.18)" }}
          >
            <ChevronLeft />
          </button>
          <div className="flex-1">
            {/* Card visível */}
            <div
              className="min-h-[18rem] sm:min-h-[20rem] flex items-center justify-center"
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                const startX = touchStartX.current;
                const endX = e.changedTouches[0].clientX;
                if (typeof startX === "number") {
                  const diff = endX - startX;
                  if (diff > 40) prev();
                  else if (diff < -40) next();
                }
                touchStartX.current = null;
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 240 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -240 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="h-full flex items-center justify-center"
                >
                  <div className="parceiros-card w-72 h-72 sm:w-80 sm:h-80 max-w-full p-4 sm:p-6 mx-auto flex flex-col justify-center rounded-2xl">
                    {/* Logo */}
                    <div className="flex justify-center">
                      <div className="h-16 sm:h-20 w-auto">
                        <Image
                          src={current.logo}
                          alt={current.name}
                          width={280}
                          height={80}
                          className="h-16 sm:h-20 w-auto object-contain"
                        />
                      </div>
                    </div>
                    {/* Nome */}
                    <h3 className="text-center mt-4 sm:mt-5 text-lg sm:text-xl font-medium">
                      {current.name}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {partners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Ir para parceiro ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === currentIndex
                      ? "bg-white"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            onClick={next}
            aria-label="Próximo"
            className="hidden md:block absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition"
            style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.18)" }}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ===== Ícones chevron simples ===== */
function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
