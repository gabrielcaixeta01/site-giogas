import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

type Depoimento = {
  nome: string;
  mensagem: string;
};

const depoimentos: Depoimento[] = [
  {
    nome: "João Silva",
    mensagem:
      "Excelente serviço! Recomendo a todos. O atendimento foi rápido, eficiente e superou minhas expectativas. Com certeza voltarei a contratar!",
  },
  {
    nome: "Maria Souza",
    mensagem:
      "Atendimento de qualidade e muita atenção aos detalhes. A equipe foi muito prestativa e resolveu todas as minhas dúvidas. Fiquei muito satisfeita com o resultado final!",
  },
  {
    nome: "Carlos Pereira",
    mensagem:
      "Fiquei muito satisfeito com o resultado final. O serviço foi realizado dentro do prazo e com um padrão de qualidade excelente. Recomendo sem hesitar!",
  },
  {
    nome: "Ana Paula",
    mensagem:
      "Profissionais extremamente competentes e educados. Desde o primeiro contato até a finalização do serviço, tudo ocorreu perfeitamente. Parabéns pelo trabalho!",
  },
  {
    nome: "Roberto Lima",
    mensagem:
      "Superou minhas expectativas! O suporte foi ágil e eficiente, e o serviço ficou impecável. Indico para todos que buscam qualidade e confiança.",
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
      <p
        className="text-lg md:text-xl font-normal"
        style={{ maxWidth: 520, margin: "0 auto" }}
      >
        O que nossos clientes estão falando sobre a experiência com nossos
        serviços
      </p>
      <div className="flex flex-wrap justify-center mt-8 gap-8">
        {depoimentos.map((depo, idx) => (
          <div
            key={idx}
            className="bg-white/90 dark:bg-blue-900/40 rounded-2xl shadow-md p-8 max-w-xs text-center flex flex-col items-center hover:scale-[1.03] transition-transform"
          >
            <span className="mb-4 text-blue-700 dark:text-blue-300">
              <FaQuoteLeft size={40} />
            </span>
            <p className="italic mb-3">&quot;{depo.mensagem}&quot;</p>
            <strong className="text-lg font-light">{depo.nome}</strong>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Depoimentos;
