"use client";

import {
  Globe,
  ShieldCheck,
  Headphones,
  LayoutDashboard,
  Zap,
  Lock,
} from "lucide-react";
import AnimateIn from "./AnimateIn";

const features = [
  {
    icon: Globe,
    title: "DNS Grátis",
    description:
      "Gerencie seus registros DNS com nosso painel intuitivo. Propagação rápida e confiável.",
  },
  {
    icon: ShieldCheck,
    title: "Certificado SSL",
    description:
      "SSL incluso em todos os domínios. Seu site protegido com HTTPS desde o primeiro dia.",
  },
  {
    icon: Headphones,
    title: "Suporte 24h",
    description:
      "Equipe técnica disponível 24 horas por dia, 7 dias por semana, via chat e email.",
  },
  {
    icon: LayoutDashboard,
    title: "Painel de Controle",
    description:
      "Gerencie seus domínios, DNS e configurações em um painel moderno e fácil de usar.",
  },
  {
    icon: Zap,
    title: "Ativação Imediata",
    description:
      "Seu domínio fica ativo em minutos após a confirmação do pagamento.",
  },
  {
    icon: Lock,
    title: "Proteção WHOIS",
    description:
      "Seus dados pessoais protegidos. Privacidade garantida no registro do domínio.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="py-24 sm:py-32 relative grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn className="text-center mb-16 sm:mb-20">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Tudo incluso
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Recursos que fazem{" "}
            <span className="gradient-text">a diferença</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Cada domínio registrado vem com um pacote completo de recursos sem
            custo adicional.
          </p>
        </AnimateIn>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 0.07}>
              <div className="group relative bg-surface/40 border border-white/[0.06] rounded-2xl p-7 hover:border-accent/15 transition-all duration-500 h-full">
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/[0.08] rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/[0.12] transition-all duration-300 border border-accent/[0.06]">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2.5 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
