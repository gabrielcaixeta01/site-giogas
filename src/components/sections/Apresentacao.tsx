import React from "react";

export default function Apresentacao() {
  return (
    <section
      id="apresentacao"
      className="w-screen min-h-screen flex flex-col items-center justify-center text-center"
    >
      <h1
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Bem-vindo à GIOGÁS
      </h1>
      <p style={{ fontSize: "1.25rem", maxWidth: 600, margin: "0 auto" }}>
        A <strong>GIOGÁS</strong> é uma empresa especializada na distribuição de
        gás no Rio de Janeiro, comprometida com a segurança, qualidade e
        atendimento ágil para residências, comércios e indústrias. Conte com
        nossa experiência para garantir energia eficiente e confiável no seu dia
        a dia.
      </p>
    </section>
  );
}
