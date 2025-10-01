"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Traduções reais para o site da GIOGÁS
const translations = {
  pt: {
    navbar: {
      home: "Início",
      apresentacao: "Apresentação",
      servico: "Serviços",
      produtos: "Produtos",
      depoimentos: "Depoimentos",
      parceiros: "Parceiros",
      contato: "Contato",
      portuguese: "Português",
      english: "English",
    },
    hero: {
      title: "GIOGÁS",
      subtitle: "Energia que conecta o Brasil.",
      description: "Soluções em gás com segurança, qualidade e agilidade para sua empresa.",
      button: "Solicite um orçamento",
    },
    apresentacao: {
      title: "Bem-vindo à GIOGÁS",
      description: `
        A Giogás tem mais de 30 anos de experiência em sistemas de Gás Natural Comprimido (GNC), Gás Natural Liquefeito (GNL) e Biometano. Com sede no Rio de Janeiro, atua em todo o Brasil oferecendo equipamentos, instalação, manutenção e projetos de infraestrutura.  

        Nosso compromisso é fornecer soluções seguras, eficientes e personalizadas, com o melhor custo-benefício.  

        Atendemos diferentes setores com energia limpa: postos de combustíveis, frotistas de ônibus e caminhões, indústrias, agro (usinas, frigoríficos e confinamentos) e aterros sanitários.  
        `,
      mvv: {
        mission: {
          title: "Missão",
          desc: "Oferecer soluções completas e seguras em gás natural e biometano, com foco em eficiência, sustentabilidade e confiabilidade.",
        },
        vision: {
          title: "Visão",
          desc: "Ser referência nacional em equipamentos, serviços e projetos de gás natural e biometano, reconhecida pela inovação, ética e compromisso em superar expectativas.",
        },
        values: {
          title: "Valores",
          desc: "Atuar com transparência, ética e foco no cliente, oferecendo soluções sob medida e construindo relações de confiança.",
        },
      },
      diferenciais: {
        title: "Diferenciais",
        seguranca: {
          title: "Segurança",
          desc: "Atuamos com rigor técnico e responsabilidade, garantindo a integridade de pessoas, processos e operações.",
        },
        inovacao: {
          title: "Inovação e tecnologia",
          desc: "Buscamos constantemente o que há de mais moderno para entregar eficiência, confiabilidade e resultados de alto desempenho.",
        },
        sustentabilidade: {
          title: "Sustentabilidade",
          desc: "Promovemos o uso de energias limpas e renováveis, contribuindo para um futuro mais responsável.",
        },
        excelencia: {
          title: "Excelência operacional",
          desc: "Nossa equipe altamente qualificada garante qualidade em cada etapa, do projeto à manutenção.",
        },
        parcerias: {
          title: "Parcerias duradouras",
          desc: "Cultivamos relacionamentos sólidos, construídos com confiança, respeito e entrega consistente de valor.",
        },
      },
      metrics: {
        clientes: { value: "+500", label: "Clientes atendidos" },
        anos: { value: "+30", label: "Anos de experiência" },
        cobertura: { value: "RJ", label: "Cobertura regional" },
      },
      cta: { label: "Conheça nossos serviços" },
    },
    servicos: {
      title: "Produtos & Serviços",
      produtosTitle: "Tecnologia que impulsiona eficiência",
      produtos: [
        {
          title: "Boosters tropicalizados",
          desc: "Fabricação própria, feitos para o clima e as condições do Brasil.",
        },
        {
          title: "Compressores e sistemas de compressão",
          desc: "Robustez e confiabilidade para qualquer operação.",
        },
        {
          title: "Equipamentos para postos e indústrias",
          desc: "Infraestrutura completa de abastecimento.",
        },
        {
          title: "Kits e sistemas para veículos pesados",
          desc: "Ônibus e caminhões mais econômicos e sustentáveis.",
        },
        {
          title: "Peças e acessórios originais",
          desc: "Reposição segura e com garantia.",
        },
      ],
      servicosTitle: "Do projeto à operação",
      servicos: [
        "Venda e representação de equipamentos",
        "Locação flexível de equipamentos",
        "Consultoria e projetos de engenharia",
        "Montagem de bases e instalações",
        "Treinamento e capacitação de equipes",
        "Revisão, manutenção e reforma de equipamentos",
        "Perícias e avaliações técnicas",
      ],
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
      produtos: "Products",
      depoimentos: "Testimonials",
      parceiros: "Partners",
      contato: "Contact",
      portuguese: "Português",
      english: "English",
    },
    hero: {
      title: "GIOGÁS",
      subtitle: "Energy that connects Brazil.",
      description: "Gas solutions with safety, quality, and agility for your company.",
      button: "Request a quote",
    },
    apresentacao: {
      title: "Welcome to GIOGÁS",
      description: `
        Giogás has over 30 years of experience in Compressed Natural Gas (CNG), Liquefied Natural Gas (LNG), and Biomethane systems. Based in Rio de Janeiro, we operate nationwide, providing equipment, installation, maintenance, and infrastructure projects.  

        Our mission is to deliver safe, efficient, and customized solutions with the best cost-benefit ratio.  

        We serve a wide range of sectors with clean energy: fuel stations, bus and truck fleets, industries, agribusiness (sugar mills, slaughterhouses, and feedlots), and landfills.  
        `,
      mvv: {
        mission: {
          title: "Mission",
          desc: "Provide complete and safe solutions in natural gas and biomethane, with a focus on efficiency, sustainability, and reliability.",
        },
        vision: {
          title: "Vision",
          desc: "Be a national benchmark in natural gas and biomethane equipment, services, and projects, recognized for innovation, ethics, and commitment to exceeding expectations.",
        },
        values: {
          title: "Values",
          desc: "Act with transparency, ethics, and customer focus, delivering tailored solutions and building trust-based relationships.",
        },
      },
      diferenciais: {
        title: "Differentials",
        seguranca: {
          title: "Safety",
          desc: "We operate with technical rigor and responsibility, ensuring the integrity of people, processes, and operations.",
        },
        inovacao: {
          title: "Innovation & technology",
          desc: "We constantly seek the latest advancements to deliver efficiency, reliability, and high-performance results.",
        },
        sustentabilidade: {
          title: "Sustainability",
          desc: "We promote the use of clean and renewable energy, contributing to a more responsible future.",
        },
        excelencia: {
          title: "Operational excellence",
          desc: "Our highly qualified team ensures quality at every stage, from project to maintenance.",
        },
        parcerias: {
          title: "Long-term partnerships",
          desc: "We cultivate solid relationships built on trust, respect, and consistent value delivery.",
        },
      },
      metrics: {
        clientes: { value: "+500", label: "Clients served" },
        anos: { value: "+30", label: "Years of experience" },
      },
      cta: { label: "See our services" },
    },
    servicos: {
      title: "Products & Services",
      produtosTitle: "Technology that drives efficiency",
      produtos: [
        {
          title: "Tropicalized boosters",
          desc: "In-house manufacturing, made for Brazil's climate and conditions.",
        },
        {
          title: "Compressors and compression systems",
          desc: "Robustness and reliability for any operation.",
        },
        {
          title: "Equipment for stations and industries",
          desc: "Complete refueling infrastructure.",
        },
        {
          title: "Kits and systems for heavy vehicles",
          desc: "Buses and trucks that are more economical and sustainable.",
        },
        {
          title: "Original parts and accessories",
          desc: "Safe replacement with warranty.",
        },
      ],
      servicosTitle: "From project to operation",
      servicos: [
        "Equipment sales and representation",
        "Flexible equipment rental",
        "Consulting and engineering projects",
        "Base assembly and installations",
        "Team training and qualification",
        "Equipment overhaul, maintenance and refurbishment",
        "Technical inspections and evaluations",
      ],
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
    seguranca: { title: string; desc: string };
    inovacao: { title: string; desc: string };
    sustentabilidade: { title: string; desc: string };
    excelencia: { title: string; desc: string };
    parcerias: { title: string; desc: string };
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
