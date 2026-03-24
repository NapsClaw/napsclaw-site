"use client";

import {
  Globe,
  ShieldCheck,
  Headphones,
  LayoutDashboard,
  Zap,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "DNS Grátis",
    description: "Gerencie seus registros DNS com nosso painel intuitivo. Propagação rápida e confiável.",
  },
  {
    icon: ShieldCheck,
    title: "Certificado SSL",
    description: "SSL incluso em todos os domínios. Seu site protegido com HTTPS desde o primeiro dia.",
  },
  {
    icon: Headphones,
    title: "Suporte 24h",
    description: "Equipe técnica disponível 24 horas por dia, 7 dias por semana, via chat e email.",
  },
  {
    icon: LayoutDashboard,
    title: "Painel de Controle",
    description: "Gerencie seus domínios, DNS e configurações em um painel moderno e fácil de usar.",
  },
  {
    icon: Zap,
    title: "Ativação Imediata",
    description: "Seu domínio fica ativo em minutos após a confirmação do pagamento.",
  },
  {
    icon: Lock,
    title: "Proteção WHOIS",
    description: "Seus dados pessoais protegidos. Privacidade garantida no registro do domínio.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="py-24 sm:py-32 relative grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="section-label">Tudo incluso</p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            Recursos que fazem <span className="gradient-text">a diferença</span>
          </h2>
          <p className="section-subtitle text-base sm:text-lg">
            Cada domínio registrado vem com um pacote completo de recursos sem custo adicional.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="card-base group relative p-7 h-full">
              <div className="relative">
                <div className="icon-box mb-5">
                  <feature.icon className="w-5 h-5" style={{ color: "#22c55e" }} />
                </div>
                <h3
                  className="text-lg font-bold mb-2.5"
                  style={{ fontFamily: "var(--font-heading), system-ui, sans-serif", letterSpacing: "-0.02em" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
