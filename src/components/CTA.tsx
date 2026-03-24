"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: "600px", height: "300px",
          background: "radial-gradient(ellipse, rgba(34,197,94,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative text-center" style={{ maxWidth: "896px", margin: "0 auto", padding: "0 16px" }}>
        {/* Decorative line */}
        <div
          className="w-16 h-px mx-auto mb-10"
          style={{ background: "linear-gradient(to right, transparent, rgba(34,197,94,0.4), transparent)" }}
        />

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "var(--font-heading), system-ui, sans-serif", letterSpacing: "-0.02em" }}
        >
          Pronto para garantir<br />
          <span className="gradient-text">seu domínio</span>?
        </h2>
        <p className="text-base sm:text-lg max-w-md mx-auto mb-12 leading-relaxed" style={{ color: "#737373" }}>
          Não deixe outra pessoa registrar o domínio que você quer. Pesquise agora e garanta seu espaço na internet.
        </p>
        <a
          href="#hero"
          className="btn-primary text-base sm:text-lg px-8 py-4"
        >
          Pesquisar domínio
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
