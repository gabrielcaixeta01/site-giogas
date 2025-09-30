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
  Truck,
  ShieldCheck,
  BadgeCheck,
  Timer,
  Wrench,
  MapPin,
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
            <Image
              src="/logo-redonda.png"
              alt="Logo Giogas redonda"
              width={96}
              height={96}
              className="mx-auto mb-6 rounded-full shadow-lg"
              priority
            />
            <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold tracking-[-0.025em] text-white [text-shadow:0_6px_24px_rgba(0,0,0,.18)]">
              {t.apresentacao.title}
            </h2>
            <p className="mt-5 text-[clamp(1rem,2vw,1.125rem)] leading-[1.75] text-white/90 text-justify">
              {t.apresentacao.description}
            </p>
          </div>
          {/* MVV vertical */}
          <div className="flex-1 flex flex-col gap-6 justify-center">
            {[
              {
                title: t.apresentacao.mvv?.mission?.title ?? "Missão",
                desc:
                  t.apresentacao.mvv?.mission?.desc ??
                  "Fornecer gás com segurança e agilidade.",
                Icon: ShieldCheck,
              },
              {
                title: t.apresentacao.mvv?.vision?.title ?? "Visão",
                desc:
                  t.apresentacao.mvv?.vision?.desc ??
                  "Ser referência em distribuição no RJ.",
                Icon: MapPin,
              },
              {
                title: t.apresentacao.mvv?.values?.title ?? "Valores",
                desc:
                  t.apresentacao.mvv?.values?.desc ??
                  "Confiança, qualidade e responsabilidade.",
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Timer,
                title:
                  t.apresentacao.diferenciais?.agilidade?.title ??
                  "Atendimento ágil",
                desc:
                  t.apresentacao.diferenciais?.agilidade?.desc ??
                  "Orçamento e retorno rápidos.",
              },
              {
                Icon: Truck,
                title:
                  t.apresentacao.diferenciais?.entrega?.title ??
                  "Entrega programada",
                desc:
                  t.apresentacao.diferenciais?.entrega?.desc ??
                  "Logística confiável no RJ.",
              },
              {
                Icon: Wrench,
                title:
                  t.apresentacao.diferenciais?.especializada?.title ??
                  "Equipe especializada",
                desc:
                  t.apresentacao.diferenciais?.especializada?.desc ??
                  "Profissionais experientes e capacitados.",
              },
              {
                Icon: ShieldCheck,
                title:
                  t.apresentacao.diferenciais?.seguranca?.title ??
                  "Segurança garantida",
                desc:
                  t.apresentacao.diferenciais?.seguranca?.desc ??
                  "Boas práticas e conformidade técnica.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/6 border border-white/10 p-5 backdrop-blur-md shadow-md flex flex-col gap-2 transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.03]"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Icon className="h-6 w-6 text-white" aria-hidden />
                  <h4 className="text-white/90 font-medium text-base">
                    {title}
                  </h4>
                </div>
                <p className="text-white/75 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Métricas */}
        <div className="mt-4 rounded-xl p-[2px] bg-gradient-to-br from-blue-500 via-blue-800 to-purple-700 shadow-2xl">
          <div className="flex flex-col sm:flex-row overflow-hidden bg-white/5 divide-y sm:divide-y-0 sm:divide-x divide-white/20 rounded-xl">
            {[
              {
                value: t.apresentacao.metrics?.clientes?.value ?? "+500",
                label:
                  t.apresentacao.metrics?.clientes?.label ??
                  "Clientes atendidos",
              },
              {
                value: t.apresentacao.metrics?.anos?.value ?? "+10",
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
