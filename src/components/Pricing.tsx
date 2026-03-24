"use client";

import { Check, Star, ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

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
    <section id="precos" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn className="text-center mb-16 sm:mb-20">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Preços transparentes
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Escolha sua extensão
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Sem taxas ocultas. O preço que você vê é o preço que você paga.
          </p>
        </AnimateIn>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <AnimateIn key={plan.extension} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl transition-all duration-500 h-full flex flex-col ${
                  plan.popular
                    ? "bg-gradient-to-b from-accent/[0.12] to-surface border-2 border-accent/30 md:scale-105 md:-my-4 shadow-[0_0_40px_rgba(34,197,94,0.1)]"
                    : "bg-surface/60 border border-white/[0.06] hover:border-white/[0.1]"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-accent text-background text-xs font-bold rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                    <Star className="w-3 h-3" fill="currentColor" />
                    Mais popular
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  {/* Extension */}
                  <div className="mb-2">
                    <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
                      {plan.extension}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-muted font-medium">R$</span>
                      <span
                        className={`font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight ${
                          plan.popular ? "gradient-text" : "text-foreground"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-muted text-sm">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3.5 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.popular
                              ? "bg-accent/20"
                              : "bg-white/[0.06]"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              plan.popular ? "text-accent" : "text-muted"
                            }`}
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-sm text-muted leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#hero"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      plan.popular
                        ? "bg-accent text-background hover:bg-accent-dark hover:shadow-[0_0_24px_rgba(34,197,94,0.4)]"
                        : "bg-white/[0.05] border border-white/[0.08] text-foreground hover:bg-white/[0.08] hover:border-white/[0.12]"
                    }`}
                  >
                    Registrar {plan.extension}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom note */}
        <AnimateIn delay={0.4} className="text-center mt-12">
          <p className="text-muted/60 text-sm">
            Todos os planos incluem renovação automática. Cancele a qualquer
            momento.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
