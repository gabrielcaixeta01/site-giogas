import React from "react";
import { Carousel } from "../Carousel";
import { useLanguage } from "../../contexts/LanguageContext";
import Image from "next/image";

interface Depoimento {
  nome: string;
  empresa: string;
  logo: string;
  mensagem: string;
}

const depoimentos: Depoimento[] = [
  {
    nome: "Luiz (Posto de Combustível)",
    empresa: "Santa Elisa",
    logo: "/images/logo-santaelisa.png",
    mensagem:
      "Com a Giogás, acabaram as filas de gás na nossa rede de postos. Nunca mais tivemos problemas de parada nos equipamentos. Recebemos soluções adequadas para nossa realidade e atendimento sempre ágil quando precisamos.",
  },
  {
    nome: "Seu Zé (Consórcio de Transporte Público)",
    empresa: "R.T. Goiânia",
    logo: "/images/logo-rtgoiania.png",
    mensagem:
      "No início do projeto piloto não tínhamos conhecimento. A Giogás esteve ao nosso lado, orientando em cada etapa. Graças a esse suporte, o projeto foi um sucesso e agora estamos expandindo, descarbonizando o transporte público da cidade de Goiânia.",
  },
  {
    nome: "Fernando (Logística e Transporte Pesado)",
    empresa: "Reiter",
    logo: "/images/logo-reiter.png",
    mensagem:
      "A Giogás dimensionou e montou toda a infraestrutura necessária para nossas garagens, garantindo que nossa frota de mais de 24 carretas operasse sem interrupções. Performance e abastecimento contínuo, sem falhas.",
  },
  {
    nome: "Rodrigo (Energia Sustentável)",
    empresa: "ZEG",
    logo: "/images/logo-zeg.png",
    mensagem:
      "A Giogás foi peça fundamental no desenvolvimento da nossa planta. Sempre com equipe à disposição, realizou o dimensionamento, o start e o comissionamento, garantindo total suporte ao nosso projeto.",
  },
  {
    nome: "Sequeto (Montadora de Veículos Pesados)",
    empresa: "Scania",
    logo: "/images/logo-scania.png",
    mensagem:
      "A Giogás participou ativamente da transição da frota a diesel para o GNV. Desenvolveu projetos sob medida, apresentou parceiros e fornecedores, auxiliou na homologação de equipamentos e esteve conosco em cada etapa.",
  },
  {
    nome: "(Equipamentos Gás - GNV/Biometano)",
    empresa: "Rimag",
    logo: "/images/logo-rimag.png",
    mensagem:
      "A Giogás fez a reforma completa dos nossos equipamentos, trazendo revitalização, manutenção e custo-benefício. Sempre preocupada em atender nossas necessidades com parceiros e soluções adequadas.",
  },
  {
    nome: "Fernando Meier (Energia e Combustíveis)",
    empresa: "Vibra",
    logo: "/images/logo-vibra.png",
    mensagem:
      "Agradecemos à Giogás pelo apoio no desenvolvimento da ZEG Vibra, na abertura de novos mercados no Mato Grosso e na condução de projetos junto a importantes stakeholders.",
  },
  {
    nome: "Rafael (Energia e Mobilidade Sustentável)",
    empresa: "Itaipu",
    logo: "/images/logo-itaipu.png",
    mensagem:
      "A Giogás montou toda a infraestrutura necessária para que pudéssemos rodar com ônibus a gás e a biometano na usina. Atendimento alinhado à demanda e fundamental para o sucesso do projeto.",
  },
];

const Depoimentos: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section
      id="depoimentos"
      className="
        relative
        bg-gradient-to-br from-blue-50 via-blue-100 py-32 to-blue-200
      "
    >
      {/* glow suave no fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 -left-16 h-64 w-64 rounded-full bg-blue-300/40 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-300/40 blur-[110px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-light tracking-tight text-blue-950">
          {t.depoimentos.title}
        </h2>

        <p className="mt-3 text-center text-base md:text-lg text-blue-900/80 max-w-2xl mx-auto">
          {t.depoimentos.subtitle}
        </p>

        {/* Carrossel de depoimentos */}
        <div className="mt-12">
          <Carousel visible={3}>
            {depoimentos.map((depo, idx) => (
              <article
                key={idx}
                className="
                  group h-[360px] md:h-[340px]
                  bg-white/90 backdrop-blur rounded-2xl shadow-lg ring-1 ring-blue-100
                  p-7 flex flex-col items-center text-center justify-between
                  transition-transform duration-150 hover:-translate-y-1 hover:shadow-xl
                "
              >
                <div className="flex flex-col items-center gap-2 mb-3">
                  <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-md mb-1">
                    <Image
                      src={depo.logo}
                      alt={depo.empresa}
                      width={44}
                      height={44}
                      className="object-contain max-h-10"
                    />
                  </div>
                  <div className="text-blue-900 font-semibold text-base leading-tight">
                    {depo.empresa}
                  </div>
                  <div className="text-blue-800/80 text-xs font-light">
                    {depo.nome}
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed italic text-sm">
                  “{depo.mensagem}”
                </p>
              </article>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
