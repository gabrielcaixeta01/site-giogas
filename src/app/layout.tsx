// src/app/layout.tsx

import "./globals.css";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../contexts/LanguageContext";
import Footer from "@/components/Footer";

export const metadata = {
  title: "GIOGÁS",
  description: "Distribuidora de Gás no Rio de Janeiro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
