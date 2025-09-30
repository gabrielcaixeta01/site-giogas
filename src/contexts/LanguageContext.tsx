"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Traduções reais para o site da GIOGÁS
const translations = {
  pt: {
    navbar: {
      home: "Início",
      apresentacao: "Apresentação",
      servico: "Serviços",
      depoimentos: "Depoimentos",
      parceiros: "Parceiros",
      contato: "Contato",
      portuguese: "Português",
      english: "English",
    },
    hero: {
      title: "GIOGÁS",
      subtitle: "Energia que conecta o Rio de Janeiro.",
      description:
        "Distribuição de gás com segurança, qualidade e agilidade para sua empresa.",
      button: "Solicite um orçamento",
    },
    apresentacao: {
      title: "Bem-vindo à GIOGÁS",
      description:
        "A GIOGÁS é uma empresa especializada na distribuição de gás no Rio de Janeiro, comprometida com a segurança, qualidade e atendimento ágil para comércios e indústrias. Conte com nossa experiência para garantir energia eficiente e confiável no seu dia a dia.",
      mvv: {
        mission: {
          title: "Missão",
          desc: "Fornecer gás com segurança e agilidade.",
        },
        vision: {
          title: "Visão",
          desc: "Ser referência em distribuição no RJ.",
        },
        values: {
          title: "Valores",
          desc: "Confiança, qualidade e responsabilidade.",
        },
      },
      diferenciais: {
        title: "Diferenciais",
        agilidade: {
          title: "Atendimento ágil",
          desc: "Orçamento e retorno rápidos.",
        },
        entrega: {
          title: "Entrega programada",
          desc: "Logística confiável no RJ.",
        },
        especializada: {
          title: "Equipe especializada",
          desc: "Profissionais experientes e capacitados.",
        },
        seguranca: {
          title: "Segurança garantida",
          desc: "Boas práticas e conformidade técnica.",
        },
      },
      metrics: {
        clientes: { value: "+500", label: "Clientes atendidos" },
        anos: { value: "+10", label: "Anos de experiência" },
        cobertura: { value: "RJ", label: "Cobertura regional" },
      },
      cta: { label: "Conheça nossos serviços" },
    },
    servicos: {
      title: "Nossos Serviços",
      description:
        "A GIOGÁS oferece soluções completas em distribuição de gás, segurança e suporte técnico para comércios e indústrias no Rio de Janeiro.",

      comercial: {
        title: "Gás Comercial",
        description:
          "Soluções para comércios, restaurantes e condomínios\nContratos flexíveis\nAcompanhamento técnico especializado",
      },
      seguranca: {
        title: "Segurança e Manutenção",
        description:
          "Inspeção e manutenção preventiva\nInstalação de sistemas de gás\nMáxima segurança garantida",
      },
      logistica: {
        title: "Logística e Distribuição",
        description:
          "Frota própria e logística eficiente\nAbastecimento contínuo\nCobertura em toda a região metropolitana",
      },
    },
    contato: {
      title: "Entre em contato",
      description:
        "Fale com nossa equipe para dúvidas, pedidos ou suporte no Rio de Janeiro.",
      email: "E-mail:",
      telefone: "Telefone:",
      endereco: "Endereço:",
      whatsapp: "Fale no WhatsApp",
      copy: "Copiar",
      copied: "Copiado!",
    },
    parceiros: {
      title: "Nossos Parceiros",
      subtitle:
        "Relações que ampliam alcance e qualidade — juntos entregamos mais.",
      estrategicas: "Parcerias estratégicas",
    },
    depoimentos: {
      title: "Depoimentos",
      subtitle:
        "O que nossos clientes dizem sobre a experiência com nossos serviços",
    },
  },
  en: {
    navbar: {
      home: "Home",
      apresentacao: "About",
      servico: "Services",
      depoimentos: "Testimonials",
      parceiros: "Partners",
      contato: "Contact",
      portuguese: "Português",
      english: "English",
    },
    hero: {
      title: "GIOGÁS",
      subtitle: "Energy that connects Rio de Janeiro.",
      description:
        "Gas distribution with safety, quality and agility for your business.",
      button: "Request a quote",
    },
    apresentacao: {
      title: "Welcome to GIOGÁS",
      description:
        "GIOGÁS is a company specialized in gas distribution in Rio de Janeiro...",
      mvv: {
        mission: {
          title: "Mission",
          desc: "Provide gas with safety and agility.",
        },
        vision: {
          title: "Vision",
          desc: "Be a reference in distribution in RJ.",
        },
        values: { title: "Values", desc: "Trust, quality and responsibility." },
      },
      diferenciais: {
        title: "Differentials",
        agilidade: {
          title: "Agile service",
          desc: "Quick quotes and response.",
        },
        entrega: {
          title: "Scheduled delivery",
          desc: "Reliable logistics in RJ.",
        },
        especializada: {
          title: "Specialized team",
          desc: "Experienced and qualified professionals.",
        },
        seguranca: {
          title: "Guaranteed safety",
          desc: "Best practices and technical compliance.",
        },
      },
      metrics: {
        clientes: { value: "+500", label: "Clients served" },
        anos: { value: "+10", label: "Years of experience" },
      },
      cta: { label: "See our services" },
    },
    servicos: {
      title: "Our Services",
      description:
        "GIOGÁS offers complete solutions in gas distribution, safety and technical support for businesses and industries in Rio de Janeiro.",
      comercial: {
        title: "Commercial Gas",
        description:
          "Solutions for businesses, restaurants and condos\nFlexible contracts\nSpecialized technical support",
      },
      seguranca: {
        title: "Safety and Maintenance",
        description:
          "Inspection and preventive maintenance\nGas system installation\nMaximum safety guaranteed",
      },
      logistica: {
        title: "Logistics and Distribution",
        description:
          "Own fleet and efficient logistics\nContinuous supply\nCoverage throughout the metro area",
      },
    },
    contato: {
      title: "Contact us",
      description:
        "Talk to our team for questions, orders or support in Rio de Janeiro.",
      email: "Email:",
      telefone: "Phone:",
      endereco: "Address:",
      whatsapp: "Talk on WhatsApp",
      copy: "Copy",
      copied: "Copied!",
    },
    parceiros: {
      title: "Our Partners",
      subtitle:
        "Relationships that expand reach and quality — together we deliver more.",
      estrategicas: "Strategic partnerships",
    },
    depoimentos: {
      title: "Testimonials",
      subtitle: "What our clients say about their experience with our services",
    },
  },
};

type ApresentacaoType = {
  title: string;
  description: string;
  mvv: {
    mission: { title: string; desc: string };
    vision: { title: string; desc: string };
    values: { title: string; desc: string };
  };
  diferenciais: {
    title: string;
    agilidade: { title: string; desc: string };
    entrega: { title: string; desc: string };
    especializada: { title: string; desc: string };
    seguranca: { title: string; desc: string };
  };
  metrics: {
    clientes: { value: string; label: string };
    anos: { value: string; label: string };
  };
  cta: { label: string };
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Omit<typeof translations.pt, "apresentacao"> & {
    apresentacao: ApresentacaoType;
  };
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("pt");
  const t = translations[language as keyof typeof translations];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
