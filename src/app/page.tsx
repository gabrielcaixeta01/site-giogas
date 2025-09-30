"use client";
import React from "react";
import Hero from "../components/sections/Hero";
import Apresentacao from "../components/sections/Apresentacao";
import Servicos from "../components/sections/Servicos";
import Parceiros from "../components/sections/Parceiros";
import Depoimentos from "../components/sections/Depoimentos";
import Contato from "../components/sections/Contato";
import Produtos from "../components/sections/Produtos";

export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans">
      <main className="flex flex-col">
        <Hero />
        <Apresentacao />
        <Servicos />
        <Produtos />
        <Parceiros />
        <Depoimentos />
        <Contato />
      </main>
    </div>
  );
}
