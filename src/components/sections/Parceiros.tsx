"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";
import { useEffect, useMemo, useRef, useState } from "react";

// ====== Dados de parceiros ======
type Partner = { name: string; logo: string };

const basePartners: Partner[] = [
  { name: "Forza", logo: "/images/logo-forza.png" },
  { name: "Shell", logo: "/images/logo-shell.png" },
  { name: "Rimag", logo: "/images/logo-rimag.png" },
  { name: "Ipiranga", logo: "/images/logo-ipiranga.png" },
  { name: "Petrobrás", logo: "/images/logo-petrobras.png" },
  { name: "Cocal", logo: "/images/logo-cocal.png" },
  { name: "Louvada", logo: "/images/logo-louvada.png" },
  { name: "Zeg", logo: "/images/logo-zeg.png" },
  { name: "Grupo Urca", logo: "/images/logo-urca.png" },
  // adicione mais conforme precisar
];

// helpers para swipe
const SWIPE_CONFIDENCE = 4500;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export default function ParceirosCarousel() {
  const { t } = useLanguage();
  const title = t?.parceiros?.title ?? "Nossos Parceiros";
  const subtitle =
    t?.parceiros?.subtitle ??
    "Relações que ampliam alcance e qualidade — juntos entregamos mais.";
  const partners: Partner[] = useMemo(() => basePartners, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 prev, +1 next

  const AUTOPLAY_MS = 4000;
  const PAUSE_MS = 5500;
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const temporarilyPause = () => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    setIsPaused(true);
    pauseTimerRef.current = setTimeout(() => setIsPaused(false), PAUSE_MS);
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((i) => (i + 1) % partners.length);
    temporarilyPause();
  };
  const prev = () => {
    setDirection(-1);
    setCurrentIndex((i) => (i - 1 + partners.length) % partners.length);
    temporarilyPause();
  };
  const goTo = (i: number) => {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
    temporarilyPause();
  };

  useEffect(() => {
    if (!partners.length) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
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

  const current = partners[currentIndex] ?? { name: "", logo: "" };

  // variants com direção
  const variants = {
    enter: (dir: number) => ({
      x: dir >= 0 ? 40 : -40,
      opacity: 0.001,
      scale: 0.98,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      x: dir >= 0 ? -40 : 40,
      opacity: 0.001,
      scale: 0.98,
    }),
  } as const;

  return (
    <section
      id="parceiros"
      className="parceiros scroll-mt-24 h-screen flex flex-col items-center justify-center "
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-zinc-400">
            {t.parceiros.estrategicas}
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
          {/* Botões: só md+ */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="hidden md:block absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition"
            style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.18)" }}
            onMouseEnter={temporarilyPause}
          >
            <ChevronLeft />
          </button>

          <div className="flex-1" onMouseEnter={temporarilyPause}>
            {/* Card visível com swipe/drag */}
            <div className="min-h-[18rem] sm:min-h-[20rem] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 420, damping: 40 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.08}
                  onDragStart={temporarilyPause}
                  onDragEnd={(_, info) => {
                    const power = swipePower(info.offset.x, info.velocity.x);
                    if (power < -SWIPE_CONFIDENCE) next();
                    else if (power > SWIPE_CONFIDENCE) prev();
                  }}
                  className="w-full flex items-center justify-center"
                >
                  {/* Card maior, com menos padding */}
                  <div className="parceiros-card w-80 h-80 sm:w-96 sm:h-96 max-w-full p-3 sm:p-4 mx-auto flex flex-col justify-center rounded-2xl bg-white/5 backdrop-blur-sm">
                    {/* Wrapper da logo ocupa ~70% do card */}
                    <div className="relative w-full h-[70%] mx-auto">
                      <Image
                        src={current.logo}
                        alt={current.name || "Logo do parceiro"}
                        fill
                        sizes="(min-width: 640px) 20rem, 20rem"
                        className="object-contain drop-shadow"
                        priority
                      />
                    </div>

                    {/* Espaço opcional para respiro ou futura legenda */}
                    {/* <div className="h-[10%]" /> */}
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
            onMouseEnter={temporarilyPause}
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
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
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}