import React from "react";
import Image from "next/image";

type Parceiro = { nome: string; logo: string };

const parceiros: Parceiro[] = [
  { nome: "Parceiro 1", logo: "/images/parceiro1.jpg" },
  { nome: "Parceiro 2", logo: "/images/parceiro2.jpg" },
  { nome: "Parceiro 3", logo: "/images/parceiro3.jpg" },
  { nome: "Parceiro 4", logo: "/images/parceiro4.jpg" },
  { nome: "Parceiro 5", logo: "/images/parceiro5.jpg" },
  // ...
];

const Parceiros: React.FC = () => (
  <section
    id="parceiros"
    className="relative py-16 md:py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900"
  >
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center">
        <span className="inline-block text-xs tracking-[0.2em] uppercase text-blue-600 dark:text-cyan-300">
          Parcerias estratégicas
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Nossos Parceiros
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Relações que ampliam alcance e qualidade — juntos entregamos mais.
        </p>
      </div>

      <div className="mt-10 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center">
        {parceiros.map((p) => (
          <div
            key={p.nome}
            className="
              h-20 md:h-24
              rounded-xl
              bg-slate-50 dark:bg-slate-800/50
              shadow-sm flex items-center justify-center
              transition-transform hover:scale-[1.02]
            "
          >
            <Image
              src={p.logo}
              alt={p.nome}
              width={160}
              height={80}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Parceiros;