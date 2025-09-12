"use client";
import React from "react";
import Hero from "../components/sections/Hero/Hero";
import Apresentacao from "../components/sections/Apresentacao/Apresentacao";
import Servicos from "../components/sections/Servicos/Servicos";
import Contato from "../components/sections/Contato/Contato";

export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans">
      <Hero />
      <main className="container mx-auto px-4 sm:px-6 pt-32 flex flex-col gap-32 sm:gap-24">
        <Hero />
        <Apresentacao />
        <Servicos />
        <Contato />
      </main>
    </div>
  );
}