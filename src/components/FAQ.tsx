"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que é um domínio?",
    answer: "Um domínio é o endereço do seu site na internet, como napsclaw.com. É o nome que as pessoas digitam no navegador para encontrar você online. Ter um domínio próprio passa credibilidade e profissionalismo para o seu negócio.",
  },
  {
    question: "Qual a diferença entre .com.br, .com e .net?",
    answer: "O .com.br é o domínio nacional brasileiro, ideal para empresas que atuam no Brasil. O .com é internacional, perfeito para projetos globais. O .net também é internacional e muito usado por empresas de tecnologia. Todos funcionam da mesma forma técnica.",
  },
  {
    question: "Quanto tempo leva para o domínio ficar ativo?",
    answer: "Após a confirmação do pagamento, seu domínio fica ativo em poucos minutos. A propagação DNS completa pode levar até 24 horas, mas na maioria dos casos acontece em menos de 1 hora.",
  },
  {
    question: "Posso transferir meu domínio para a NapsClaw?",
    answer: "Sim! Oferecemos transferência de domínios de outros registradores. O processo é simples e nosso suporte acompanha cada etapa. Entre em contato pelo suporte@napsclaw.com para iniciar.",
  },
  {
    question: "O SSL está incluso mesmo?",
    answer: "Sim, todos os domínios registrados conosco incluem certificado SSL gratuito. Seu site terá o cadeado de segurança (HTTPS) automaticamente, sem custo adicional.",
  },
  {
    question: "Como funciona a renovação?",
    answer: "A renovação é automática. Você será notificado 30 dias antes do vencimento. Pode cancelar a renovação automática a qualquer momento pelo painel de controle.",
  },
  {
    question: "Preciso de conhecimento técnico?",
    answer: "Não! Nosso painel de controle é intuitivo e fácil de usar. E se precisar de ajuda, nosso suporte técnico está disponível 24h por dia para te auxiliar em qualquer configuração.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartão de crédito, boleto bancário e Pix. O pagamento é processado de forma segura pela plataforma Asaas.",
  },
];

function FAQItem({ faq, isOpen, onClick, index }: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <div className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full px-6 py-5 text-left"
      >
        <span className="flex items-center gap-4">
          <span
            className="text-xs font-bold tabular-nums"
            style={{ color: "rgba(115,115,115,0.4)", fontFamily: "var(--font-heading)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="font-semibold pr-4 text-sm sm:text-base"
            style={{ fontFamily: "var(--font-heading), system-ui, sans-serif", color: "#ededed" }}
          >
            {faq.question}
          </span>
        </span>
        <div
          className="shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronDown
            className="w-4 h-4"
            style={{ color: isOpen ? "#22c55e" : "rgba(115,115,115,0.5)" }}
          />
        </div>
      </button>
      {isOpen && (
        <div className="overflow-hidden">
          <p className="px-6 pb-5 pl-16 text-sm leading-relaxed" style={{ color: "#737373" }}>
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="container-sm" style={{ maxWidth: "768px" }}>
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label">Dúvidas?</p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">Perguntas frequentes</h2>
          <p className="section-subtitle text-base sm:text-lg">
            As respostas para as dúvidas mais comuns sobre registro de domínios.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: "#737373" }}>Ainda tem dúvidas?</p>
          <a
            href="mailto:suporte@napsclaw.com"
            className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
            style={{ color: "#22c55e" }}
          >
            Fale com nosso suporte →
          </a>
        </div>
      </div>
    </section>
  );
}
