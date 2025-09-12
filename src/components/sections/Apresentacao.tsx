import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Apresentacao() {
  const { t } = useLanguage();
  return (
    <section
      id="apresentacao"
      className="w-full min-h-screen flex flex-col items-center justify-center text-center"
    >
      <h1
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        {t.apresentacao.title}
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "justify",
        }}
      >
        {t.apresentacao.description}
      </p>
    </section>
  );
}
