"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Globe, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const extensions = [".com.br", ".com", ".net"];

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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div className="absolute inset-0 grid-bg" />
        {/* Radial gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px]" />
        {/* Secondary glow */}
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/[0.08] border border-accent/20 mb-10"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs sm:text-sm text-accent/90 font-medium tracking-wide">
            Domínios a partir de R$120/ano
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
        >
          Registre seu
          <br />
          <span className="gradient-text">domínio</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-lg mx-auto mb-14 leading-relaxed"
        >
          Seu endereço na internet começa aqui. DNS grátis, SSL incluso e
          suporte 24 horas.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="gradient-border p-[1px]">
            <div className="flex flex-col sm:flex-row bg-[#0f0f0f] rounded-[15px] overflow-hidden">
              <div className="flex-1 flex items-center">
                <Globe className="w-5 h-5 text-muted/60 ml-5 shrink-0" />
                <input
                  type="text"
                  placeholder="meudominio"
                  value={domain}
                  onChange={(e) => {
                    setDomain(e.target.value);
                    setResult(null);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="flex-1 bg-transparent text-foreground placeholder-muted/40 px-4 py-5 text-base sm:text-lg outline-none font-[family-name:var(--font-heading)]"
                />
              </div>
              <div className="flex items-center gap-2 px-3 pb-3 sm:pb-0 sm:pr-3">
                <select
                  value={extension}
                  onChange={(e) => {
                    setExtension(e.target.value);
                    setResult(null);
                  }}
                  className="bg-white/[0.05] text-foreground px-3 py-3 rounded-xl border border-white/[0.08] text-sm font-semibold outline-none cursor-pointer hover:border-accent/30 transition-colors font-[family-name:var(--font-heading)]"
                >
                  {extensions.map((ext) => (
                    <option key={ext} value={ext} className="bg-[#111] text-foreground">
                      {ext}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleSearch}
                  disabled={searching || !domain.trim()}
                  className="flex items-center gap-2 bg-accent hover:bg-accent-dark disabled:opacity-40 disabled:cursor-not-allowed text-background font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm whitespace-nowrap hover:shadow-[0_0_24px_rgba(34,197,94,0.4)]"
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
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl mx-auto"
            >
              {result.available ? (
                <div className="bg-accent/[0.08] border border-accent/25 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 bg-accent/15 rounded-full flex items-center justify-center">
                        <span className="text-xl">✅</span>
                      </div>
                      <div className="text-left">
                        <p className="text-accent font-semibold text-lg">
                          Disponível!
                        </p>
                        <p className="text-foreground/80 font-[family-name:var(--font-heading)] text-sm font-medium">
                          {result.fullDomain}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleRegister}
                      className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-background font-bold px-7 py-3.5 rounded-xl transition-all duration-200 glow-green text-sm"
                    >
                      Registrar agora
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-red-500/[0.08] border border-red-500/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3.5 justify-center">
                    <span className="text-xl">❌</span>
                    <div>
                      <p className="text-red-400 font-semibold">
                        Domínio indisponível
                      </p>
                      <p className="text-muted text-sm">
                        <span className="font-[family-name:var(--font-heading)] font-medium">{result.fullDomain}</span>{" "}
                        já está registrado.
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted/70 text-sm"
        >
          {[
            { emoji: "🔒", text: "SSL Grátis" },
            { emoji: "⚡", text: "DNS Rápido" },
            { emoji: "🛡️", text: "Proteção WHOIS" },
            { emoji: "💬", text: "Suporte 24h" },
          ].map((item) => (
            <span key={item.text} className="flex items-center gap-1.5">
              <span>{item.emoji}</span>
              <span>{item.text}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
