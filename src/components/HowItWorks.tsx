"use client";

import { Search, MousePointerClick, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Pesquise",
    description: "Digite o nome que deseja e verifique a disponibilidade do domínio em segundos.",
  },
  {
    icon: MousePointerClick,
    number: "02",
    title: "Escolha",
    description: "Selecione a extensão ideal para o seu negócio: .com.br, .com ou .net.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Registre",
    description: "Finalize o registro com pagamento seguro e seu domínio fica ativo em minutos.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="section-label">Simples e rápido</p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">Como funciona</h2>
          <p className="section-subtitle text-base sm:text-lg">
            Em três passos simples, você garante seu domínio e marca presença na internet.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-sm lg:max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group h-full">
              {i < steps.length - 1 && (
                <div className="connector-line hidden lg:block" />
              )}
              <div className="card-base relative p-8 h-full">
                <div className="number-ghost">{step.number}</div>
                <div className="icon-box-lg mb-6">
                  <step.icon className="w-6 h-6" style={{ color: "#22c55e" }} />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-heading), system-ui, sans-serif", letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
