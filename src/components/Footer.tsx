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
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <span className="text-2xl">🦞</span>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
              >
                NapsClaw
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: "#737373" }}>
              Registro de domínios simples, rápido e confiável. Sua presença online começa aqui.
            </p>
            <a
              href="mailto:suporte@napsclaw.com"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "#737373" }}
            >
              <Mail className="w-4 h-4" />
              suporte@napsclaw.com
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="footer-heading">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: "rgba(115,115,115,0.5)" }}>
            © {new Date().getFullYear()} NapsClaw Tecnologia LTDA. CNPJ: 46.431.291/0001-73
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-xs" style={{ color: "rgba(115,115,115,0.5)" }}>
              <span className="status-dot" />
              Todos os sistemas operacionais
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
