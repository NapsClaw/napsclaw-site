"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

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
    <footer className="relative border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <a href="/" className="flex items-center gap-2 mb-4">
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
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                suporte@napsclaw.com
              </a>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-sm text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted text-center sm:text-left">
            © {new Date().getFullYear()} NapsClaw Tecnologia LTDA. CNPJ:
            46.431.291/0001-73. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-xs text-muted">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Todos os sistemas operacionais
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
