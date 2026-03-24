"use client";

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
    <section id="precos" className="py-24 sm:py-32 relative">
      {/* Background */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "500px",
          background: "radial-gradient(ellipse, rgba(34,197,94,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="section-label">Preços transparentes</p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">Escolha sua extensão</h2>
          <p className="section-subtitle text-base sm:text-lg">
            Sem taxas ocultas. O preço que você vê é o preço que você paga.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto items-start">
          {plans.map((plan) => (
            <div
              key={plan.extension}
              className={`relative flex flex-col ${plan.popular ? "card-popular" : "card-base"}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Star className="w-3 h-3" fill="currentColor" />
                  Mais popular
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                {/* Extension */}
                <div className="mb-2">
                  <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-heading), system-ui, sans-serif", color: "#ededed" }}
                  >
                    {plan.extension}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-medium" style={{ color: "#737373" }}>R$</span>
                    <span
                      className={`text-6xl font-bold tracking-tight ${plan.popular ? "gradient-text" : ""}`}
                      style={{ fontFamily: "var(--font-heading), system-ui, sans-serif", color: plan.popular ? undefined : "#ededed" }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm" style={{ color: "#737373" }}>{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3.5 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`check-circle mt-0.5 ${plan.popular ? "check-circle-accent" : "check-circle-muted"}`}>
                        <Check
                          className="w-3 h-3"
                          strokeWidth={3}
                          style={{ color: plan.popular ? "#22c55e" : "#737373" }}
                        />
                      </div>
                      <span className="text-sm leading-relaxed" style={{ color: "#737373" }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#hero"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular ? "btn-primary justify-center w-full" : "btn-secondary"
                  }`}
                >
                  Registrar {plan.extension}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-12 text-sm" style={{ color: "rgba(115,115,115,0.6)" }}>
          Todos os planos incluem renovação automática. Cancele a qualquer momento.
        </p>
      </div>
    </section>
  );
}
