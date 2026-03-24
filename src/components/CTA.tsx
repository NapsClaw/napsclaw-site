"use client";

import { ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateIn>
          {/* Decorative line */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto mb-10" />

          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Pronto para garantir
            <br />
            <span className="gradient-text">seu domínio</span>?
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-md mx-auto mb-12 leading-relaxed">
            Não deixe outra pessoa registrar o domínio que você quer. Pesquise
            agora e garanta seu espaço na internet.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-dark text-background font-bold px-8 py-4 rounded-xl text-base sm:text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Pesquisar domínio
            <ArrowRight className="w-5 h-5" />
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
