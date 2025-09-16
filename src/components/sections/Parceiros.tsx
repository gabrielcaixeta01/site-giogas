import React from "react";
import Image from "next/image";

const parceiros = [
  {
    nome: "Parceiro 1",
    logo: "/images/parceiro1.jpg",
    site: "https://parceiro1.com",
  },
  {
    nome: "Parceiro 2",
    logo: "/images/parceiro2.jpg",
    site: "https://parceiro2.com",
  },
  {
    nome: "Parceiro 3",
    logo: "/images/parceiro3.jpg",
    site: "https://parceiro3.com",
  },
];

const Parceiros: React.FC = () => (
  <section id="parceiros" className="py-12 bg-gray-100 dark:bg-gray-900">
    <div className="max-w-5xl mx-auto text-center">
      <h2
        className="text-4xl md:text-5xl font-light mb-8"
        style={{ color: "var(--color-fg)" }}
      >
        Nossos Parceiros
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {parceiros.map((parceiro) => (
          <a
            key={parceiro.nome}
            href={parceiro.site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-44 bg-white/90 dark:bg-blue-900/40 rounded-2xl shadow-md p-8 hover:scale-[1.03] transition-transform"
          >
            <Image
              src={parceiro.logo}
              alt={parceiro.nome}
              width={120}
              height={80}
              className="object-contain mb-3 rounded"
            />
            <span className="text-lg font-light  mt-2">{parceiro.nome}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Parceiros;
