import React from "react";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Apresentacao() {
  const { t } = useLanguage();
  return (
    <section id="apresentacao" className="apresentacao py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 p-8 md:p-10 text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,.35)]">
          <Image
            src="/logo-redonda.png"
            alt="Logo Giogas redonda"
            width={96}
            height={96}
            className="mx-auto mb-6 rounded-full shadow-lg"
            priority
          />
          <h2 className="text-[clamp(2.4rem,5.5vw,3.6rem)] font-light tracking-[-0.025em] text-white [text-shadow:0_6px_24px_rgba(0,0,0,.18)]">
            {t.apresentacao.title}
          </h2>
          <p className="mt-5 text-[clamp(1rem,2vw,1.125rem)] leading-[1.75] text-white/90 text-justify">
            {t.apresentacao.description}
          </p>
        </div>
      </div>
    </section>
  );
}
