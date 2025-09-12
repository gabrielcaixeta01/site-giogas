// src/app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../contexts/LanguageContext";


export const metadata = {
  title: "Gabriel Caixeta - Portfólio",
  description: "Portfólio de Gabriel Caixeta, desenvolvedor web full-stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
              <Navbar />
              <main>{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}