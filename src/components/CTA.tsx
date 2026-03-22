"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Pronto para garantir{" "}
            <span className="gradient-text">seu domínio</span>?
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10">
            Não deixe outra pessoa registrar o domínio que você quer. Pesquise
            agora e garanta seu espaço na internet.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-background font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 glow-green"
          >
            Pesquisar domínio
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
