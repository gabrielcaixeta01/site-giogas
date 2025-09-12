"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900"
    >
      {/* Blobs decorativos */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-blue-400/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[320px] h-[320px] rounded-full bg-yellow-300/30 blur-2xl" />
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 dark:text-blue-200 mb-6 drop-shadow-lg">
        GIOGÁS
      </h1>
      <p className="text-lg md:text-2xl text-gray-900 dark:text-gray-200 max-w-2xl mb-8">
        Energia que conecta o Rio de Janeiro.
        <br />
        Distribuição de gás com segurança, qualidade e agilidade para sua casa
        ou empresa.
      </p>
      <a
        href="#contato"
        className="inline-block px-8 py-3 rounded-full bg-blue-700 text-white font-semibold text-lg shadow-lg hover:bg-blue-800 transition-colors"
      >
        Solicite um orçamento
      </a>
    </section>
  );
}
