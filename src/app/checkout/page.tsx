"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Globe,
  CreditCard,
  ShieldCheck,
  Loader2,
} from "lucide-react";

const priceMap: Record<string, number> = {
  ".com.br": 150,
  ".com": 120,
  ".net": 120,
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const domain = searchParams.get("domain") || "";
  const ext = searchParams.get("ext") || ".com.br";
  const price = priceMap[ext] || 150;

  const [form, setForm] = useState({
    name: "",
    email: "",
    document: "",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!form.email.trim() || !form.email.includes("@"))
      newErrors.email = "Email inválido";
    if (!form.document.trim() || form.document.replace(/\D/g, "").length < 11)
      newErrors.document = "CPF/CNPJ inválido";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10)
      newErrors.phone = "Telefone inválido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate payment link generation
    await new Promise((r) => setTimeout(r, 2000));

    // In production, this would call Asaas API to create a payment link
    // For now, redirect to a placeholder
    const asaasPlaceholder = `https://www.asaas.com/c/napsclaw-${domain.replace(
      /\./g,
      "-"
    )}`;
    window.open(asaasPlaceholder, "_blank");
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background grid-bg">
      {/* Header */}
      <div className="border-b border-border bg-surface/50 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl">🦞</span>
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold">
              NapsClaw
            </span>
          </a>
          <div className="w-16" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-2">
            Finalizar registro
          </h1>
          <p className="text-muted mb-10">
            Preencha seus dados para registrar o domínio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-5">
                <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-accent" />
                  Dados do registrante
                </h2>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className={`w-full bg-surface-light border ${
                      errors.name ? "border-red-500" : "border-border"
                    } rounded-lg px-4 py-3 text-foreground placeholder-muted outline-none focus:border-accent transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className={`w-full bg-surface-light border ${
                      errors.email ? "border-red-500" : "border-border"
                    } rounded-lg px-4 py-3 text-foreground placeholder-muted outline-none focus:border-accent transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* CPF/CNPJ */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    CPF ou CNPJ
                  </label>
                  <input
                    type="text"
                    name="document"
                    value={form.document}
                    onChange={handleChange}
                    placeholder="000.000.000-00"
                    className={`w-full bg-surface-light border ${
                      errors.document ? "border-red-500" : "border-border"
                    } rounded-lg px-4 py-3 text-foreground placeholder-muted outline-none focus:border-accent transition-colors`}
                  />
                  {errors.document && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.document}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className={`w-full bg-surface-light border ${
                      errors.phone ? "border-red-500" : "border-border"
                    } rounded-lg px-4 py-3 text-foreground placeholder-muted outline-none focus:border-accent transition-colors`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark disabled:opacity-60 text-background font-bold py-4 rounded-xl text-lg transition-all duration-200 glow-green"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Gerando link de pagamento...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Pagar R${price},00
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted">
                <ShieldCheck className="w-4 h-4" />
                Pagamento seguro processado via Asaas
              </div>
            </form>
          </motion.div>

          {/* Order summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 sticky top-24">
              <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-accent" />
                Resumo do pedido
              </h2>

              <div className="space-y-4">
                {/* Domain */}
                <div className="bg-surface-light rounded-xl p-4">
                  <p className="text-xs text-muted mb-1">Domínio</p>
                  <p className="font-mono text-foreground font-semibold text-lg">
                    {domain || "—"}
                  </p>
                </div>

                {/* Extension */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted">Extensão</span>
                  <span className="text-foreground font-medium">{ext}</span>
                </div>

                {/* Period */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted">Período</span>
                  <span className="text-foreground font-medium">1 ano</span>
                </div>

                {/* Separator */}
                <div className="border-t border-border" />

                {/* Includes */}
                <div className="space-y-2">
                  <p className="text-xs text-muted uppercase tracking-wider">
                    Incluso
                  </p>
                  {[
                    "DNS gerenciado",
                    "Certificado SSL",
                    "Painel de controle",
                    "Suporte técnico",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <span className="text-accent">✓</span>
                      {item}
                    </div>
                  ))}
                </div>

                {/* Separator */}
                <div className="border-t border-border" />

                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-semibold">Total</span>
                  <div className="text-right">
                    <span className="font-[family-name:var(--font-heading)] text-2xl font-bold gradient-text">
                      R${price},00
                    </span>
                    <p className="text-xs text-muted">/ano</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-accent animate-spin" />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
