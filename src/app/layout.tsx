import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NapsClaw 🦞 — Registro de Domínios",
  description:
    "Registre seu domínio .com.br, .com ou .net com a NapsClaw. DNS grátis, SSL incluso, suporte 24h. A partir de R$120/ano.",
  keywords: [
    "registro de domínio",
    "domínio .com.br",
    "domínio .com",
    "domínio .net",
    "registrar domínio",
    "NapsClaw",
  ],
  openGraph: {
    title: "NapsClaw 🦞 — Registro de Domínios",
    description:
      "Registre seu domínio .com.br, .com ou .net. DNS grátis, SSL incluso, suporte 24h.",
    url: "https://napsclaw.com",
    siteName: "NapsClaw",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
