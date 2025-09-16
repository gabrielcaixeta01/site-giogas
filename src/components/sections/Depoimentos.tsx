import React from "react";
import Image from "next/image";

type Depoimento = {
  nome: string;
  mensagem: string;
  fotoUrl?: string;
};

const depoimentos: Depoimento[] = [
  {
    nome: "João Silva",
    mensagem: "Excelente serviço! Recomendo a todos.",
    fotoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    nome: "Maria Souza",
    mensagem: "Atendimento de qualidade e muita atenção aos detalhes.",
    fotoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nome: "Carlos Pereira",
    mensagem: "Fiquei muito satisfeito com o resultado final.",
    fotoUrl: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Depoimentos: React.FC = () => (
  <section id="depoimentos" className="py-12 bg-gray-100 dark:bg-gray-900">
    <div className="max-w-5xl mx-auto text-center">
      <h2
        className="text-4xl md:text-5xl font-light mb-8"
        style={{ color: "var(--color-fg)" }}
      >
        Depoimentos
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {depoimentos.map((depo, idx) => (
          <div
            key={idx}
            className="bg-white/90 dark:bg-blue-900/40 rounded-2xl shadow-md p-8 max-w-xs text-center flex flex-col items-center hover:scale-[1.03] transition-transform"
          >
            <Image
              src={depo.fotoUrl ?? "/default-avatar.png"}
              alt={depo.nome}
              width={64}
              height={64}
              className="rounded-full object-cover mb-4"
            />
            <p className="italic mb-3">&quot;{depo.mensagem}&quot;</p>
            <strong className="text-lg font-light">{depo.nome}</strong>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Depoimentos;
