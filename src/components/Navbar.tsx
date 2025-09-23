"use client";
import { useEffect, useState, useRef } from "react";
import {
  FaChevronDown,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { BR, US } from "country-flag-icons/react/3x2";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuButtonRef.current?.contains(target)) return;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsLanguageDropdownOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(target)
      ) {
        setIsMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      // Calcula o topo da seção e remove qualquer offset para mostrar a seção sozinha
      const nav = document.querySelector("nav");
      const navHeight = nav ? (nav as HTMLElement).offsetHeight : 0;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileDropdownOpen(false);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const getCurrentFlag = () => {
    return language === "pt" ? (
      <BR
        title="Português (Brasil)"
        style={{ width: "20px", height: "14px" }}
      />
    ) : (
      <US
        title="English (United States)"
        style={{ width: "20px", height: "14px" }}
      />
    );
  };

  const sections = [
    { key: "hero", label: t.navbar.home },
    { key: "apresentacao", label: t.navbar.apresentacao },
    { key: "servico", label: t.navbar.servico },
    { key: "parceiros", label: t.navbar.parceiros || "Parceiros" },
    { key: "depoimentos", label: t.navbar.depoimentos || "Depoimentos" },
    { key: "contato", label: t.navbar.contato },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 py-2 px-4">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Esquerda: Hamburguer no mobile, logo e navegação no desktop */}
        <div className="flex items-center gap-2 flex-1">
          {/* Botão hamburger (Mobile) */}
          <div className="relative md:hidden">
            <button
              ref={menuButtonRef}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => setIsMobileDropdownOpen((open) => !open)}
              className="p-2 rounded-lg hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-all duration-300 relative z-50"
              aria-label="Abrir menu dropdown"
              aria-expanded={isMobileDropdownOpen}
              aria-controls="mobile-dropdown"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <AnimatePresence>
              {isMobileDropdownOpen && (
                <motion.div
                  id="mobile-dropdown"
                  ref={mobileDropdownRef}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-4 px-4 z-40 flex flex-col gap-2"
                  // background dinâmico removido junto com theme switcher
                >
                  {sections.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.key)}
                      className="w-full text-left text-base font-medium hover:text-blue-700 transition-colors duration-300 px-2 py-2 rounded"
                    >
                      {item.label}
                    </button>
                  ))}
                  {/* Ícones sociais só no mobile */}
                  <div className="flex items-center justify-center gap-4 mt-4 md:hidden">
                    <a
                      href="https://www.linkedin.com/company/giogas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-2 rounded-full transition-colors"
                    >
                      <FaLinkedin size={22} />
                    </a>
                    <a
                      href="https://www.instagram.com/giogasdistribuidora/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="p-2 rounded-full transition-colors"
                    >
                      <FaInstagram size={22} />
                    </a>
                    <a
                      href="https://wa.me/5521988794509"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="p-2 rounded-full transition-colors"
                    >
                      <FaWhatsapp size={22} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Logo removido para navbar minimalista */}
          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="text-base font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 px-2 py-1 rounded"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Navegação Desktop movida para a esquerda */}

        {/* Ícones + tema + idioma (direita) */}
        <div className="flex items-center space-x-2">
          {/* Ícones sociais só em telas md+ */}
          <a
            href="https://www.linkedin.com/company/giogas/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full transition-colors hidden md:inline-flex"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/giogasdistribuidora/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full transition-colors hidden md:inline-flex"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://wa.me/5521988794509"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 rounded-full transition-colors hidden md:inline-flex"
          >
            <FaWhatsapp size={20} />
          </a>

          {/* Seletor de idioma */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLanguageDropdownOpen((open) => !open)}
              className="flex items-center space-x-1 p-2 rounded-full transition-colors duration-300 cursor-pointer"
              aria-label="Change language"
              aria-expanded={isLanguageDropdownOpen}
            >
              {getCurrentFlag()}
              <FaChevronDown
                size={10}
                className={`transition-all duration-300 text-gray-500 ${
                  isLanguageDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isLanguageDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="language-dropdown absolute right-0 mt-1 rounded-xl shadow-lg py-2 min-w-[120px] z-40 bg-white"
                >
                  {[
                    { key: "pt", flag: BR, label: t.navbar.portuguese },
                    { key: "en", flag: US, label: t.navbar.english },
                  ].map((lang, index) => (
                    <motion.button
                      key={lang.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      onClick={() => handleLanguageChange(lang.key)}
                      className="w-full px-3 py-2 text-left flex items-center space-x-2 text-sm cursor-pointer"
                    >
                      <lang.flag style={{ width: "16px", height: "11px" }} />
                      <span>{lang.label}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ...existing code... */}
    </nav>
  );
}
