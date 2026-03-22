"use client";

import { motion } from "framer-motion";
import { Search, MousePointerClick, Rocket } from "lucide-react";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Simples e rápido
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Como funciona
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Em três passos simples, você garante seu domínio e marca presença na
            internet.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector line (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="relative bg-surface border border-border rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/5">
                {/* Number badge */}
                <div className="absolute -top-4 -right-2 font-[family-name:var(--font-heading)] text-6xl font-bold text-surface-light select-none group-hover:text-accent/10 transition-colors duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
