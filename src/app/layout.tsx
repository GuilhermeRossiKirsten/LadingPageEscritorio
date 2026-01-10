import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "RKirsten Neto Advogados | Advocacia com Excelência",
  description:
    "Escritório de advocacia com mais de 25 anos de experiência. Atuamos em Direito Civil, Trabalhista, Previdenciário, Empresarial e mais.",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
