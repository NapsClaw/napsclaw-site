"use client";

import { motion } from "framer-motion";
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
    <section id="recursos" className="py-24 sm:py-32 relative">
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
            Tudo incluso
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Recursos que fazem{" "}
            <span className="gradient-text">a diferença</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Cada domínio registrado vem com um pacote completo de recursos sem
            custo adicional.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-surface border border-border rounded-2xl p-8 hover:border-accent/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
