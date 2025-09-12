"use client";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { BR, US } from "country-flag-icons/react/3x2";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const [mounted, setMounted] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  // Close dropdown/menu when clicking outside (mas ignora clique no botão do menu)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Se clicou no próprio botão, não fecha aqui (deixa o onClick cuidar do toggle)
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
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMobileDropdownOpen(false); // Fecha o dropdown ao navegar
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

  // Adapte as seções do menu
  const sections = [
    { key: "hero", label: "Início" },
    { key: "apresentacao", label: "Apresentação" },
    { key: "servico", label: "Serviços" },
    { key: "contato", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-gray-200/20 dark:border-gray-700/20 py-2 px-4">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Botão hamburger (Mobile) */}
        <div className="relative md:hidden">
          <button
            ref={menuButtonRef}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setIsMobileDropdownOpen((open) => !open)}
            className="p-2 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-all duration-300 relative z-50"
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
          {/* Dropdown Mobile */}
          <AnimatePresence>
            {isMobileDropdownOpen && (
              <motion.div
                id="mobile-dropdown"
                ref={mobileDropdownRef}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-xl shadow-2xl py-4 px-4 z-40 flex flex-col gap-2"
                style={{
                  background:
                    resolvedTheme === "dark"
                      ? "rgba(17,24,39,0.95)"
                      : "rgba(255,255,255,0.95)",
                }}
              >
                {sections.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.key)}
                    className="w-full text-left text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 px-2 py-2 rounded"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://github.com/gabrielcaixeta01"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/gabriel-caixeta-romero"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-colors duration-300"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navegação Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {sections.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.key)}
              className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 px-2 py-1 rounded"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Ícones + tema + idioma (direita) */}
        <div className="flex items-center space-x-2">
          {/* Seletor de idioma */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLanguageDropdownOpen((open) => !open)}
              className={`flex items-center space-x-1 p-2 rounded-full transition-colors duration-300 cursor-pointer ${
                resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
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
                  className={`language-dropdown absolute right-0 mt-1 rounded-xl shadow-lg py-2 min-w-[120px] z-40 ${
                    resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
                  }`}
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
                      className="w-full px-3 py-2 text-left flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                    >
                      <lang.flag style={{ width: "16px", height: "11px" }} />
                      <span>{lang.label}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle theme"
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-colors duration-300"
            >
              {resolvedTheme === "dark" ? (
                <BsSun size={18} />
              ) : (
                <BsMoon size={18} />
              )}
            </button>
          )}
        </div>
      </div>

      {/* ...existing code... */}
    </nav>
  );
}
