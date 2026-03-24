"use client";

import { useState, useRef } from "react";
import { Search, ArrowRight, Globe, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const extensions = [".com.br", ".com", ".net"];

const takenDomains = [
  "google.com", "google.com.br", "facebook.com", "amazon.com.br",
  "uol.com.br", "globo.com", "mercadolivre.com.br", "napsclaw.com.br",
];

export default function HeroSection() {
  const [domain, setDomain] = useState("");
  const [extension, setExtension] = useState(".com.br");
  const [result, setResult] = useState<null | { available: boolean; fullDomain: string }>(null);
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
      router.push(`/checkout?domain=${encodeURIComponent(result.fullDomain)}&ext=${encodeURIComponent(extension)}`);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none grid-bg" />
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, left: "50%", transform: "translateX(-50%)",
          width: "1000px", height: "600px",
          background: "radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="badge-accent mb-10 mx-auto w-fit">
          <Sparkles className="w-3.5 h-3.5" style={{ color: "#22c55e" }} />
          <span className="text-xs sm:text-sm font-medium tracking-wide" style={{ color: "rgba(34,197,94,0.9)" }}>
            Domínios a partir de R$120/ano
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          style={{ fontFamily: "var(--font-heading), system-ui, sans-serif", lineHeight: 0.95 }}
        >
          Registre seu<br />
          <span className="gradient-text">domínio</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl max-w-lg mx-auto mb-14 leading-relaxed" style={{ color: "#737373" }}>
          Seu endereço na internet começa aqui. DNS grátis, SSL incluso e suporte 24 horas.
        </p>

        {/* Search Box */}
        <div className="relative max-w-2xl mx-auto">
          <div className="gradient-border p-px">
            <div className="flex flex-col sm:flex-row rounded-[15px] overflow-hidden" style={{ background: "#0f0f0f" }}>
              <div className="flex-1 flex items-center">
                <Globe className="w-5 h-5 ml-5 shrink-0" style={{ color: "rgba(115,115,115,0.6)" }} />
                <input
                  type="text"
                  placeholder="meudominio"
                  value={domain}
                  onChange={(e) => { setDomain(e.target.value); setResult(null); }}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="input-search"
                  style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
                />
              </div>
              <div className="flex items-center gap-2 px-3 pb-3 sm:pb-0 sm:pr-3">
                <select
                  value={extension}
                  onChange={(e) => { setExtension(e.target.value); setResult(null); }}
                  className="select-dark text-sm"
                  style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
                >
                  {extensions.map((ext) => (
                    <option key={ext} value={ext}>{ext}</option>
                  ))}
                </select>
                <button
                  onClick={handleSearch}
                  disabled={searching || !domain.trim()}
                  className="btn-primary text-sm whitespace-nowrap"
                >
                  {searching ? (
                    <div className="w-5 h-5 border-2 rounded-full animate-spin" style={{ borderColor: "rgba(10,10,10,0.3)", borderTopColor: "#0a0a0a" }} />
                  ) : (
                    <Search className="w-4 h-4" />
                  )}
                  Pesquisar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Result */}
        <div ref={resultRef}>
          {result && (
            <div className="mt-8 max-w-2xl mx-auto">
              {result.available ? (
                <div className="result-available">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(34,197,94,0.15)" }}
                      >
                        <span className="text-xl">✅</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-lg" style={{ color: "#22c55e" }}>Disponível!</p>
                        <p className="text-sm font-medium" style={{ color: "rgba(237,237,237,0.8)", fontFamily: "var(--font-heading)" }}>
                          {result.fullDomain}
                        </p>
                      </div>
                    </div>
                    <button onClick={handleRegister} className="btn-primary glow-green text-sm">
                      Registrar agora <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="result-taken">
                  <div className="flex items-center gap-3.5 justify-center">
                    <span className="text-xl">❌</span>
                    <div>
                      <p className="font-semibold" style={{ color: "#f87171" }}>Domínio indisponível</p>
                      <p className="text-sm" style={{ color: "#737373" }}>
                        <span style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}>{result.fullDomain}</span> já está registrado.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Trust badges */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm" style={{ color: "rgba(115,115,115,0.7)" }}>
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
        </div>
      </div>
    </section>
  );
}
