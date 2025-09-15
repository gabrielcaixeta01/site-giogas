"use client";

import { motion } from "framer-motion";
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
      className="relative scroll-mt-5 w-full min-h-screen flex items-center justify-center py-1 pt-32 pb-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full max-w-3xl"
      >
        <motion.div variants={item} className="contact-card p-8 md:p-10">
          <motion.h2
            variants={item}
            className="contact-title text-4xl md:text-5xl font-light tracking-tight mb-4"
          >
            {t.contato.title}
          </motion.h2>

          <motion.p
            variants={item}
            className="contact-desc text-base md:text-lg leading-relaxed mb-8 text-justify"
          >
            {t.contato.description}
          </motion.p>

          <motion.div
            variants={item}
            className="contact-links-grid flex flex-col gap-6 mt-8"
          >
            <div className="contact-link flex items-center gap-3">
              <FiMail className="contact-icon text-xl flex-shrink-0" />
              <div className="flex flex-col min-w-0 flex-1">
                <span className="contact-label text-sm">{t.contato.email}</span>
                <span className="contact-value text-sm font-medium">
                  {email}
                </span>
              </div>
            </div>
            <div className="contact-link flex items-center gap-3">
              <FiMail className="contact-icon text-xl flex-shrink-0" />
              <div className="flex flex-col min-w-0 flex-1">
                <span className="contact-label text-sm">Comercial:</span>
                <span className="contact-value text-sm font-medium">
                  {emailComercial}
                </span>
              </div>
            </div>

            <div className="contact-link flex items-center gap-3">
              <FiPhone className="contact-icon text-xl flex-shrink-0" />
              <div className="flex flex-col min-w-0 flex-1">
                <span className="contact-label text-sm truncate">
                  {t.contato.telefone}
                </span>
                <span className="contact-value text-sm font-medium truncate">
                  {telefone}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
