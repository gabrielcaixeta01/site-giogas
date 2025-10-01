import React from "react";
import Image from "next/image";

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (section) {
    const y = section.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
import { useLanguage } from "../../contexts/LanguageContext";
import {
  ShieldCheck,
  Lightbulb,
  Leaf,
  Award,
  Handshake,
  MapPin,
  BadgeCheck,
} from "lucide-react";

import { useCountUpOnView } from "./useCountUpOnView";
import { useInView } from "react-intersection-observer";

function MetricCard({
  value,
  label,
  className = "",
}: {
  value: string | number;
  label: string;
  className?: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const animated = useCountUpOnView(value, 1200, inView);
  return (
    <div
      ref={ref}
      className={`p-6 text-center bg-transparent h-full 
        rounded-t-xl sm:rounded-t-none sm:rounded-l-xl
        rounded-b-xl sm:rounded-b-none sm:rounded-r-xl
        ${className}`}
    >
      <div className="text-[clamp(1.8rem,4vw,2.4rem)] font-semibold text-white">
        {animated}
      </div>
      <div className="mt-1 text-white/90">{label}</div>
    </div>
  );
}

export default function Apresentacao() {
  const { t } = useLanguage();

  return (
    <section id="apresentacao" className="apresentacao py-32">
      <div className="mx-auto max-w-6xl px-4">
        {/* Intro + MVV lado a lado em telas grandes */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
          {/* Card introdutório */}
          <div className="flex-1 max-w-3xl rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 p-8 md:p-10 text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,.35)]">
            <div className="flex items-center gap-5 justify-left mb-4">
              <h2 className="text-[clamp(1.05rem,2.2vw,1.5rem)] sm:text-[clamp(1.3rem,3vw,2rem)] font-semibold tracking-[-0.025em] text-white [text-shadow:0_6px_24px_rgba(0,0,0,.18)] m-0">
                {t.apresentacao.title}
              </h2>

              <Image
                src="/logo-redonda.png"
                alt="Logo Giogas redonda"
                width={64}
                height={64}
                className="rounded-full shadow-lg"
                priority
              />
            </div>
            {(t.apresentacao.description || "")
              .split(/\n\n+/)
              .filter(Boolean)
              .map((par, idx) => (
                <p
                  key={idx}
                  className="text-[clamp(0.92rem,1.3vw,1.02rem)] leading-[1.7] text-white/90 text-justify mb-4 last:mb-0"
                >
                  {par.trim()}
                </p>
              ))}
          </div>
          {/* MVV vertical */}
          <div className="flex-1 flex flex-col gap-6 justify-center text-justify md:text-left">
            {[
              {
                title: t.apresentacao.mvv?.mission?.title ?? "Missão",
                desc:
                  t.apresentacao.mvv?.mission?.desc ??
                  "Fornecer soluções completas e seguras em sistemas de gás natural e biometano, aliando tecnologia, qualidade e experiência para garantir a eficiência operacional de nossos clientes, sempre com foco na sustentabilidade e na confiabilidade.",
                Icon: ShieldCheck,
              },
              {
                title: t.apresentacao.mvv?.vision?.title ?? "Visão",
                desc:
                  t.apresentacao.mvv?.vision?.desc ??
                  "Ser referência nacional no fornecimento de equipamentos, serviços e projetos de gás natural e biometano, reconhecida pela inovação, pela ética e pelo compromisso em superar as expectativas dos clientes em todos os segmentos em que atuamos.",
                Icon: MapPin,
              },
              {
                title: t.apresentacao.mvv?.values?.title ?? "Valores",
                desc:
                  t.apresentacao.mvv?.values?.desc ??
                  "Compromisso com o cliente: escutamos, entendemos e oferecemos soluções sob medida, priorizando transparência e ética em todas as relações.",
                Icon: BadgeCheck,
              },
            ].map(({ title, desc, Icon }, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/8 border border-white/10 p-6 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Icon className="h-5 w-5 text-white" aria-hidden />
                  </span>
                  <h3 className="text-white/95 text-lg font-medium">{title}</h3>
                </div>
                <p className="mt-3 text-white/80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Espaço */}
        <div className="h-14" />

        {/* Diferenciais */}
        <div>
          <h3 className="text-white/95 text-3xl font-semibold tracking-tight mb-4 border-b border-white/30 pb-2">
            {t.apresentacao.diferenciais?.title ?? "Diferenciais"}
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                Icon: ShieldCheck,
                title:
                  t.apresentacao.diferenciais?.seguranca?.title ?? "Segurança",
                desc:
                  t.apresentacao.diferenciais?.seguranca?.desc ??
                  "Atuamos com rigor técnico e responsabilidade, garantindo a integridade de pessoas, processos e operações.",
              },
              {
                Icon: Lightbulb,
                title:
                  t.apresentacao.diferenciais?.inovacao?.title ??
                  "Inovação e tecnologia",
                desc:
                  t.apresentacao.diferenciais?.inovacao?.desc ??
                  "Buscamos constantemente o que há de mais moderno para entregar eficiência, confiabilidade e resultados de alto desempenho.",
              },
              {
                Icon: Leaf,
                title:
                  t.apresentacao.diferenciais?.sustentabilidade?.title ??
                  "Sustentabilidade",
                desc:
                  t.apresentacao.diferenciais?.sustentabilidade?.desc ??
                  "Promovemos o uso de energias limpas e renováveis, contribuindo para um futuro mais responsável.",
              },
              {
                Icon: Award,
                title:
                  t.apresentacao.diferenciais?.excelencia?.title ??
                  "Excelência operacional",
                desc:
                  t.apresentacao.diferenciais?.excelencia?.desc ??
                  "Nossa equipe altamente qualificada garante qualidade em cada etapa, do projeto à manutenção.",
              },
              {
                Icon: Handshake,
                title:
                  t.apresentacao.diferenciais?.parcerias?.title ??
                  "Parcerias duradouras",
                desc:
                  t.apresentacao.diferenciais?.parcerias?.desc ??
                  "Cultivamos relacionamentos sólidos, construídos com confiança, respeito e entrega consistente de valor.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/6 border border-white/10 p-5 backdrop-blur-md shadow-md flex flex-col gap-2 items-center text-center transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.03]"
              >
                <div className="flex flex-col items-center gap-2 mb-1">
                  <Icon className="h-7 w-7 text-white mb-1" aria-hidden />
                  <h4 className="text-white/90 font-medium text-base">
                    {title}
                  </h4>
                </div>
                <p className="text-white/75 text-sm text-justify sm:text-center leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Métricas */}
        <div className="mt-4 rounded-xl p-[2px] bg-gradient-to-br border border-white/70 from-blue-500 via-indigo-700 to-purple-600 shadow-2xl">
          <div className="flex flex-col sm:flex-row overflow-hidden bg-white/5 divide-y sm:divide-y-0 sm:divide-x divide-white/70 rounded-xl">
            {[
              {
                value: t.apresentacao.metrics?.clientes?.value ?? "+500",
                label:
                  t.apresentacao.metrics?.clientes?.label ??
                  "Clientes atendidos",
              },
              {
                value: t.apresentacao.metrics?.anos?.value ?? "+30",
                label:
                  t.apresentacao.metrics?.anos?.label ?? "Anos de experiência",
              },
            ].map(({ value, label }, i) => (
              <div className="flex-1" key={i}>
                <MetricCard value={value} label={label} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA secundário */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection("servico")}
            className="inline-flex items-center justify-center rounded-full bg-white hover:bg-blue-600 text-blue-600 transition not-[]:ease-in-out duration-300 hover:text-white px-6 py-3 font-medium shadow-lg"
            aria-label={t.apresentacao.cta?.label ?? "Conheça nossos serviços"}
          >
            {t.apresentacao.cta?.label ?? "Conheça nossos serviços"}
          </button>
        </div>
      </div>
    </section>
  );
}
