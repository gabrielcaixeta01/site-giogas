import { useEffect, useRef, useState } from "react";

/**
 * Hook para animar um número de zero até o valor final.
 * @param endValue Valor final (número ou string começando com '+')
 * @param duration Duração da animação em ms
 */
export function useCountUp(endValue: string | number, duration = 1200) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const start = 0;
    let end =
      typeof endValue === "string"
        ? parseInt(endValue.replace(/\D/g, ""))
        : endValue;
    if (isNaN(end)) end = 0;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      setValue(current);
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    }
    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [endValue, duration]);

  // Mantém o sinal de + se existir
  const prefix =
    typeof endValue === "string" && endValue.trim().startsWith("+") ? "+" : "";
  return prefix + value;
}
