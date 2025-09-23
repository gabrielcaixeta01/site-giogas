// src/app/layout.tsx

import "./globals.css";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../contexts/LanguageContext";

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
        </LanguageProvider>
      </body>
    </html>
  );
}
