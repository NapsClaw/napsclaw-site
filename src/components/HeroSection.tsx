"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Globe, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const extensions = [".com.br", ".com", ".net"];

// Mock: some "taken" domains for realism
const takenDomains = [
  "google.com",
  "google.com.br",
  "facebook.com",
  "amazon.com.br",
  "uol.com.br",
  "globo.com",
  "mercadolivre.com.br",
  "napsclaw.com.br",
];

export default function HeroSection() {
  const [domain, setDomain] = useState("");
  const [extension, setExtension] = useState(".com.br");
  const [result, setResult] = useState<null | {
    available: boolean;
    fullDomain: string;
  }>(null);
  const [searching, setSearching] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleSearch = async () => {
    if (!domain.trim()) return;

    setSearching(true);
    setResult(null);

    // Simulate API delay
    await new Promise((r) => setTimeout(r, 1200 + Math.random() * 800));

    const cleanDomain = domain.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
    const fullDomain = `${cleanDomain}${extension}`;
    const available = !takenDomains.includes(fullDomain);

    setResult({ available, fullDomain });
    setSearching(false);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleRegister = () => {
    if (result?.available) {
      router.push(
        `/checkout?domain=${encodeURIComponent(result.fullDomain)}&ext=${encodeURIComponent(extension)}`
      );
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 grid-bg overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-accent font-medium">
            Domínios a partir de R$120/ano
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Registre seu{" "}
          <span className="gradient-text">domínio</span>
          <br />
          <span className="text-muted">com a NapsClaw</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12"
        >
          Seu endereço na internet começa aqui. DNS grátis, SSL incluso e
          suporte 24 horas. Simples assim.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="gradient-border p-1">
            <div className="flex flex-col sm:flex-row bg-surface rounded-[14px] overflow-hidden">
              <div className="flex-1 flex items-center">
                <Globe className="w-5 h-5 text-muted ml-4 shrink-0" />
                <input
                  type="text"
                  placeholder="Digite o domínio desejado..."
                  value={domain}
                  onChange={(e) => {
                    setDomain(e.target.value);
                    setResult(null);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="flex-1 bg-transparent text-foreground placeholder-muted px-4 py-4 text-base sm:text-lg outline-none"
                />
              </div>
              <div className="flex items-center gap-2 px-3 pb-3 sm:pb-0">
                <select
                  value={extension}
                  onChange={(e) => {
                    setExtension(e.target.value);
                    setResult(null);
                  }}
                  className="bg-surface-light text-foreground px-3 py-2.5 rounded-lg border border-border text-sm font-medium outline-none cursor-pointer hover:border-accent/50 transition-colors"
                >
                  {extensions.map((ext) => (
                    <option key={ext} value={ext}>
                      {ext}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleSearch}
                  disabled={searching || !domain.trim()}
                  className="flex items-center gap-2 bg-accent hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed text-background font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 text-sm whitespace-nowrap"
                >
                  {searching ? (
                    <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  ) : (
                    <Search className="w-4 h-4" />
                  )}
                  Pesquisar
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Result */}
        <div ref={resultRef}>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-8 max-w-2xl mx-auto"
            >
              {result.available ? (
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 glow-green-subtle">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-xl">✅</span>
                      </div>
                      <div className="text-left">
                        <p className="text-accent font-semibold text-lg">
                          Domínio disponível!
                        </p>
                        <p className="text-foreground font-mono text-sm">
                          {result.fullDomain}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleRegister}
                      className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-background font-bold px-6 py-3 rounded-lg transition-all duration-200 glow-green"
                    >
                      Registrar agora
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-xl">❌</span>
                    <div>
                      <p className="text-red-400 font-semibold text-lg">
                        Domínio indisponível
                      </p>
                      <p className="text-muted text-sm">
                        <span className="font-mono">{result.fullDomain}</span>{" "}
                        já está registrado. Tente outro nome.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted text-sm"
        >
          {[
            "🔒 SSL Grátis",
            "⚡ DNS Rápido",
            "🛡️ Proteção WHOIS",
            "💬 Suporte 24h",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
