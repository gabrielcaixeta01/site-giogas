import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

interface CarouselProps {
  children: React.ReactNode[];
  visible: number;
}

export const Carousel: React.FC<CarouselProps> = (props) => {
  const { children, visible } = props;

  // ...existing code...
  const [start, setStart] = React.useState(0);
  const total = children.length;
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Removido autoplay: navegação apenas manual

  // Navegação manual
  const goTo = (idx: number) => {
    setStart((idx + total) % total);
  };
  const next = () => goTo(start + 1);
  const prev = () => goTo(start - 1);

  // Touch/swipe handlers para mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 40) {
        if (diff > 0) next();
        else prev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Calcula os índices dos cards visíveis
  const getVisible = () => {
    const arr = [];
    for (let i = 0; i < visible; i++) {
      arr.push((start + i) % total);
    }
    return arr;
  };

  // Uma bolinha para cada card
  const numDots = total;
  // Bolinha ativa é o primeiro card visível
  const currentDot = start;

  // Animation variants for framer-motion
  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative w-full">
      {/* Setas navegação desktop */}
      <button
        className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 z-20 bg-blue-500/80 rounded-full p-2 shadow-md ring-1 ring-blue-200"
        onClick={prev}
        aria-label="Anterior"
        type="button"
        style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" }}
      >
        <FiChevronLeft size={28} />
      </button>
      <button
        className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 z-20 bg-blue-500/80 rounded-full p-2 shadow-md ring-1 ring-blue-200"
        onClick={next}
        aria-label="Próximo"
        type="button"
        style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" }}
      >
        <FiChevronRight size={28} />
      </button>
      <div className="relative w-full px-[88px]">
        <div
          className="flex h-full min-h-[1px] gap-6 justify-center"
          style={{ minHeight: 1 }}
          onTouchStart={isMobile ? onTouchStart : undefined}
          onTouchMove={isMobile ? onTouchMove : undefined}
          onTouchEnd={isMobile ? onTouchEnd : undefined}
        >
          <AnimatePresence initial={false}>
            {getVisible().map((idx) => (
              <motion.div
                key={idx}
                className="flex-1 min-w-0"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                style={{
                  flex: `0 0 ${100 / visible}%`,
                  maxWidth: `${100 / visible}%`,
                }}
              >
                {children[idx]}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      {/* Bolinhas de navegação */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: numDots }).map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full border border-blue-400 transition-all duration-200 ${
              i === currentDot
                ? "bg-blue-500 scale-110 shadow"
                : "bg-blue-200 hover:bg-blue-300"
            }`}
            onClick={() => goTo(i)}
            aria-label={`Ir para card ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};
