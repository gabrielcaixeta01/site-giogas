"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Traduções reais para o site da GIOGÁS
const translations = {
  pt: {
    navbar: {
      home: "Início",
      apresentacao: "Apresentação",
      servico: "Serviço",
      contato: "Contato",
      portuguese: "Português",
      english: "English",
    },
    hero: {
      title: "GIOGÁS",
      subtitle: "Energia que conecta o Rio de Janeiro.",
      description:
        "Distribuição de gás com segurança, qualidade e agilidade para sua casa ou empresa.",
      button: "Solicite um orçamento",
    },
    apresentacao: {
      title: "Bem-vindo à GIOGÁS",
      description:
        "A GIOGÁS é uma empresa especializada na distribuição de gás no Rio de Janeiro, comprometida com a segurança, qualidade e atendimento ágil para residências, comércios e indústrias. Conte com nossa experiência para garantir energia eficiente e confiável no seu dia a dia.",
    },
    servicos: {
      title: "Nossos Serviços",
      description:
        "A GIOGÁS oferece soluções completas em distribuição de gás, segurança e suporte técnico para residências, comércios e indústrias no Rio de Janeiro.",
      residencial: {
        title: "Gás Residencial",
        description:
          "Entrega rápida e segura de gás para residências em todo o Rio de Janeiro. Atendimento personalizado e suporte 24h.",
      },
      comercial: {
        title: "Gás Comercial",
        description:
          "Soluções em gás para comércios, restaurantes e condomínios. Contratos flexíveis e acompanhamento técnico especializado.",
      },
      seguranca: {
        title: "Segurança e Manutenção",
        description:
          "Serviços de inspeção, manutenção preventiva e instalação de sistemas de gás, garantindo máxima segurança para seu negócio ou residência.",
      },
      logistica: {
        title: "Logística e Distribuição",
        description:
          "Frota própria e logística eficiente para garantir o abastecimento contínuo de gás em toda a região metropolitana.",
      },
    },
    contato: {
      title: "Fale com a GIOGÁS",
      description:
        "Entre em contato com a GIOGÁS para dúvidas, pedidos ou suporte. Nossa equipe está pronta para atender você no Rio de Janeiro!",
      email: "E-mail:",
      telefone: "Telefone:",
      endereco: "Endereço:",
      copy: "Copiar",
      copied: "Copiado!",
    },
  },
  en: {
    navbar: {
      home: "Home",
      apresentacao: "About",
      servico: "Services",
      contato: "Contact",
      portuguese: "Português",
      english: "English",
    },
    hero: {
      title: "GIOGÁS",
      subtitle: "Energy that connects Rio de Janeiro.",
      description:
        "Gas distribution with safety, quality and agility for your home or business.",
      button: "Request a quote",
    },
    apresentacao: {
      title: "Welcome to GIOGÁS",
      description:
        "GIOGÁS is a company specialized in gas distribution in Rio de Janeiro, committed to safety, quality and fast service for homes, businesses and industries. Count on our experience to ensure efficient and reliable energy every day.",
    },
    servicos: {
      title: "Our Services",
      description:
        "GIOGÁS offers complete solutions in gas distribution, safety and technical support for homes, businesses and industries in Rio de Janeiro.",
      residencial: {
        title: "Residential Gas",
        description:
          "Fast and safe gas delivery for homes throughout Rio de Janeiro. Personalized service and 24h support.",
      },
      comercial: {
        title: "Commercial Gas",
        description:
          "Gas solutions for businesses, restaurants and condominiums. Flexible contracts and specialized technical support.",
      },
      seguranca: {
        title: "Safety and Maintenance",
        description:
          "Inspection, preventive maintenance and installation of gas systems, ensuring maximum safety for your business or home.",
      },
      logistica: {
        title: "Logistics and Distribution",
        description:
          "Own fleet and efficient logistics to ensure continuous gas supply throughout the metropolitan region.",
      },
    },
    contato: {
      title: "Contact GIOGÁS",
      description:
        "Contact GIOGÁS for questions, orders or support. Our team is ready to assist you in Rio de Janeiro!",
      email: "Email:",
      telefone: "Phone:",
      endereco: "Address:",
      copy: "Copy",
      copied: "Copied!",
    },
  },
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: typeof translations.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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