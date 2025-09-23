import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

type Depoimento = {
  nome: string;
  mensagem: string;
};

const depoimentos: Depoimento[] = [
  { nome: "João Silva", mensagem: "Excelente serviço! Recomendo a todos. O atendimento foi rápido, eficiente e superou minhas expectativas. Com certeza voltarei a contratar!" },
  { nome: "Maria Souza", mensagem: "Atendimento de qualidade e muita atenção aos detalhes. A equipe foi muito prestativa e resolveu todas as minhas dúvidas. Fiquei muito satisfeita com o resultado final!" },
  { nome: "Carlos Pereira", mensagem: "Fiquei muito satisfeito com o resultado final. O serviço foi realizado dentro do prazo e com um padrão de qualidade excelente. Recomendo sem hesitar!" },
];

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Depoimentos: React.FC = () => (
  <motion.section
    id="depoimentos"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    variants={container}
    className="
      relative py-20
      bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200
    "
  >
    {/* glow suave no fundo */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-12 -left-16 h-64 w-64 rounded-full bg-blue-300/40 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-300/40 blur-[110px]" />
    </div>

    <div className="relative max-w-6xl mx-auto px-4">
      <motion.h2
        variants={item}
        className="text-center text-4xl md:text-5xl font-semibold tracking-tight text-blue-950"
      >
        Depoimentos
      </motion.h2>

      <motion.p
        variants={item}
        className="mt-3 text-center text-base md:text-lg text-blue-900/80 max-w-2xl mx-auto"
      >
        O que nossos clientes dizem sobre a experiência com nossos serviços
      </motion.p>

      {/* grid responsivo: 1 → 2 → 3 colunas */}
      <div
        className="
          mt-12 grid gap-6
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        "
      >
        {depoimentos.map((depo, idx) => (
          <motion.article
            key={idx}
            variants={item}
            className="
              group h-full
              bg-white/90 backdrop-blur
              rounded-2xl shadow-lg ring-1 ring-blue-100
              p-7 flex flex-col
              transition-transform duration-150
              hover:-translate-y-1 hover:shadow-xl
            "
          >
            {/* ícone/aspas em badge */}
            <div
              className="
                mb-5 inline-grid place-items-center
                h-12 w-12 rounded-full
                bg-blue-100 text-blue-700 ring-1 ring-blue-200
              "
            >
              <FaQuoteLeft />
            </div>

            {/* texto do depoimento */}
            <p className="text-slate-700 leading-relaxed italic">
              “{depo.mensagem}”
            </p>

            {/* nome */}
            <div className="mt-6 pt-4 border-t border-blue-100">
              <strong className="text-blue-900 font-medium">{depo.nome}</strong>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Depoimentos;