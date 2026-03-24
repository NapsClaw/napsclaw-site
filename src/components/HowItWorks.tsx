"use client";

import { Search, MousePointerClick, Rocket } from "lucide-react";
import AnimateIn from "./AnimateIn";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Pesquise",
    description:
      "Digite o nome que deseja e verifique a disponibilidade do domínio em segundos.",
  },
  {
    icon: MousePointerClick,
    number: "02",
    title: "Escolha",
    description:
      "Selecione a extensão ideal para o seu negócio: .com.br, .com ou .net.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Registre",
    description:
      "Finalize o registro com pagamento seguro e seu domínio fica ativo em minutos.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn className="text-center mb-16 sm:mb-20">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Simples e rápido
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Como funciona
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Em três passos simples, você garante seu domínio e marca presença na
            internet.
          </p>
        </AnimateIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 0.12}>
              <div className="relative group h-full">
                {/* Connector line (hidden on mobile) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-14 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/[0.06] to-transparent" />
                )}

                <div className="relative bg-surface/60 border border-white/[0.06] rounded-2xl p-8 h-full hover:border-accent/20 transition-all duration-500 group-hover:bg-surface/80">
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-1 font-[family-name:var(--font-heading)] text-7xl font-bold text-white/[0.03] select-none group-hover:text-accent/[0.06] transition-colors duration-500">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-accent/[0.08] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/[0.12] transition-all duration-300 border border-accent/[0.08]">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
