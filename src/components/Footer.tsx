"use client";

import { Mail } from "lucide-react";

const footerLinks = {
  Empresa: [
    { label: "Sobre", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Política de Privacidade", href: "#" },
  ],
  Serviços: [
    { label: "Registro de Domínio", href: "#hero" },
    { label: "Transferência", href: "mailto:suporte@napsclaw.com" },
    { label: "DNS Gerenciado", href: "#recursos" },
  ],
  Suporte: [
    { label: "Central de Ajuda", href: "#faq" },
    { label: "Contato", href: "mailto:suporte@napsclaw.com" },
    { label: "Status do Serviço", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <span className="text-2xl">🦞</span>
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold">
                NapsClaw
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-6">
              Registro de domínios simples, rápido e confiável. Sua presença
              online começa aqui.
            </p>
            <a
              href="mailto:suporte@napsclaw.com"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              suporte@napsclaw.com
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-xs text-foreground/60 uppercase tracking-[0.15em] mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/50 text-center sm:text-left">
            © {new Date().getFullYear()} NapsClaw Tecnologia LTDA. CNPJ:
            46.431.291/0001-73
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-xs text-muted/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Todos os sistemas operacionais
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
