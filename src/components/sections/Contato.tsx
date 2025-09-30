"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Contato() {
  const { t } = useLanguage();
  const email = "giuseppe@giogas.com.br";
  const emailComercial = "comercial@giogas.com.br";
  const telefone = "+55 21 98879-4509";

  return (
    <section
      id="contato"
      className="
        relative scroll-mt-5 w-full min-h-screen 
        flex items-center justify-center 
        py-1 pt-32 pb-32
        bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900
        text-slate-100
      "
    >
      {/* glow decorativo suave */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-16 -left-24 h-80 w-80 rounded-full bg-blue-600 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500 blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="relative w-full max-w-3xl px-4"
      >
        <motion.div
          variants={item}
          className="
            contact-card p-8 md:p-10
            bg-white/90 text-slate-900
            rounded-2xl shadow-xl
            ring-1 ring-slate-200
          "
        >
          <motion.h2
            variants={item}
            className="contact-title text-4xl md:text-5xl font-light tracking-tight mb-3"
          >
            {t.contato.title}
          </motion.h2>

          <motion.p
            variants={item}
            className="contact-desc text-base md:text-lg leading-relaxed mb-8 text-justify text-slate-600"
          >
            {t.contato.description}
          </motion.p>

          <motion.div
            variants={item}
            className="contact-links-grid flex flex-col gap-5 mt-6"
          >
            {/* Email institucional */}
            <a
              href={`mailto:${email}`}
              className="
                contact-link flex items-center gap-3 group
                rounded-xl border border-slate-200/80 px-4 py-3
                hover:border-blue-200 hover:bg-blue-50/60 transition
              "
            >
              <span
                className="
                  contact-icon grid place-items-center text-xl
                  h-10 w-10 rounded-full
                  bg-blue-100 text-blue-700 border border-blue-200
                  group-hover:bg-blue-200 group-hover:text-blue-800
                  transition
                "
              >
                <FiMail />
              </span>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="contact-label text-xs uppercase tracking-wide text-slate-500">
                  {t.contato.email}
                </span>
                <span className="contact-value text-sm font-medium truncate text-blue-700 group-hover:underline">
                  {email}
                </span>
              </div>
            </a>

            {/* Email comercial */}
            <a
              href={`mailto:${emailComercial}`}
              className="
                contact-link flex items-center gap-3 group
                rounded-xl border border-slate-200/80 px-4 py-3
                hover:border-blue-200 hover:bg-blue-50/60 transition
              "
            >
              <span
                className="
                  contact-icon grid place-items-center text-xl
                  h-10 w-10 rounded-full
                  bg-blue-100 text-blue-700 border border-blue-200
                  group-hover:bg-blue-200 group-hover:text-blue-800
                  transition
                "
              >
                <FiMail />
              </span>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="contact-label text-xs uppercase tracking-wide text-slate-500">
                  Comercial
                </span>
                <span className="contact-value text-sm font-medium truncate text-blue-700 group-hover:underline">
                  {emailComercial}
                </span>
              </div>
            </a>

            {/* Telefone */}
            <a
              href={`tel:${telefone.replace(/\s|\+/g, "")}`}
              className="
                contact-link flex items-center gap-3 group
                rounded-xl border border-slate-200/80 px-4 py-3
                hover:border-blue-200 hover:bg-blue-50/60 transition
              "
            >
              <span
                className="
                  contact-icon grid place-items-center text-xl
                  h-10 w-10 rounded-full
                  bg-blue-100 text-blue-700 border border-blue-200
                  group-hover:bg-blue-200 group-hover:text-blue-800
                  transition
                "
              >
                <FiPhone />
              </span>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="contact-label text-xs uppercase tracking-wide text-slate-500">
                  {t.contato.telefone}
                </span>
                <span className="contact-value text-sm font-medium truncate text-blue-700">
                  {telefone}
                </span>
              </div>
            </a>
          </motion.div>
        </motion.div>
        {/* Botão WhatsApp abaixo do card */}
        <div className="w-full mt-4">
          <a
            href="https://wa.me/5521988794509?text=Ol%C3%A1%2C%20vi%20os%20servi%C3%A7os%20no%20site%20da%20GIOG%C3%81S%20e%20gostaria%20de%20saber%20mais%20detalhes."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-full"
          >
            <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-white hover:bg-green-50 text-green-700 font-light text-lg shadow-lg transition-all duration-150 border border-green-200 hover:border-green-400">
              <span className="contact-icon grid place-items-center text-xl h-10 w-10 rounded-full bg-green-100 text-green-700 border border-green-200 group-hover:bg-green-200 group-hover:text-green-800 transition">
                <FaWhatsapp size={24} />
              </span>
              {t.contato.whatsapp}
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
