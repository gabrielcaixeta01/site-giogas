"use client";
import React from "react";
import Hero from "../components/sections/Hero";
import Apresentacao from "../components/sections/Apresentacao";
import Servicos from "../components/sections/Servicos";
import Parceiros from "../components/sections/Parceiros";
import Depoimentos from "../components/sections/Depoimentos";
import Contato from "../components/sections/Contato";

export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans">
      <main className="pt-32 flex flex-col gap-32 sm:gap-24">
        <Hero />
        <Apresentacao />
        <Servicos />
        <Parceiros />
        <Depoimentos />
        <Contato />
      </main>
    </div>
  );
}
