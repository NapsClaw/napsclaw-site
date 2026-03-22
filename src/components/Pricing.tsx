"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";

const plans = [
  {
    extension: ".com",
    price: "120",
    period: "/ano",
    popular: false,
    features: [
      "Registro internacional",
      "DNS grátis",
      "Certificado SSL",
      "Painel de controle",
      "Suporte via email",
    ],
  },
  {
    extension: ".com.br",
    price: "150",
    period: "/ano",
    popular: true,
    features: [
      "Registro nacional (Registro.br)",
      "DNS grátis",
      "Certificado SSL",
      "Painel de controle",
      "Suporte prioritário 24h",
      "Proteção WHOIS",
    ],
  },
  {
    extension: ".net",
    price: "120",
    period: "/ano",
    popular: false,
    features: [
      "Registro internacional",
      "DNS grátis",
      "Certificado SSL",
      "Painel de controle",
      "Suporte via email",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="py-24 sm:py-32 relative grid-bg">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Preços transparentes
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Escolha sua extensão
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Sem taxas ocultas. O preço que você vê é o preço que você paga.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.extension}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-surface border-2 border-accent/40 scale-[1.02] md:scale-105 glow-green-subtle"
                  : "bg-surface border border-border hover:border-accent/20"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 bg-accent text-background text-xs font-bold rounded-full">
                  <Star className="w-3 h-3" />
                  Mais popular
                </div>
              )}

              {/* Extension */}
              <div className="mb-6">
                <span className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground">
                  {plan.extension}
                </span>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted">R$</span>
                  <span className="font-[family-name:var(--font-heading)] text-5xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-muted text-sm">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#hero"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? "bg-accent text-background hover:bg-accent-dark glow-green"
                    : "bg-surface-light border border-border text-foreground hover:border-accent/30 hover:text-accent"
                }`}
              >
                Registrar {plan.extension}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-muted text-sm mt-12"
        >
          Todos os planos incluem renovação automática. Cancele a qualquer
          momento.
        </motion.p>
      </div>
    </section>
  );
}
