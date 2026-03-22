"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que é um domínio?",
    answer:
      "Um domínio é o endereço do seu site na internet, como napsclaw.com. É o nome que as pessoas digitam no navegador para encontrar você online. Ter um domínio próprio passa credibilidade e profissionalismo para o seu negócio.",
  },
  {
    question: "Qual a diferença entre .com.br, .com e .net?",
    answer:
      "O .com.br é o domínio nacional brasileiro, ideal para empresas que atuam no Brasil. O .com é internacional, perfeito para projetos globais. O .net também é internacional e muito usado por empresas de tecnologia. Todos funcionam da mesma forma técnica.",
  },
  {
    question: "Quanto tempo leva para o domínio ficar ativo?",
    answer:
      "Após a confirmação do pagamento, seu domínio fica ativo em poucos minutos. A propagação DNS completa pode levar até 24 horas, mas na maioria dos casos acontece em menos de 1 hora.",
  },
  {
    question: "Posso transferir meu domínio para a NapsClaw?",
    answer:
      "Sim! Oferecemos transferência de domínios de outros registradores. O processo é simples e nosso suporte acompanha cada etapa. Entre em contato pelo suporte@napsclaw.com para iniciar.",
  },
  {
    question: "O SSL está incluso mesmo?",
    answer:
      "Sim, todos os domínios registrados conosco incluem certificado SSL gratuito. Seu site terá o cadeado de segurança (HTTPS) automaticamente, sem custo adicional.",
  },
  {
    question: "Como funciona a renovação?",
    answer:
      "A renovação é automática. Você será notificado 30 dias antes do vencimento. Pode cancelar a renovação automática a qualquer momento pelo painel de controle.",
  },
  {
    question: "Preciso de conhecimento técnico?",
    answer:
      "Não! Nosso painel de controle é intuitivo e fácil de usar. E se precisar de ajuda, nosso suporte técnico está disponível 24h por dia para te auxiliar em qualquer configuração.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartão de crédito, boleto bancário e Pix. O pagamento é processado de forma segura pela plataforma Asaas.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden transition-colors duration-200 hover:border-accent/20">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full px-6 py-5 text-left"
      >
        <span className="font-[family-name:var(--font-heading)] font-semibold text-foreground pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors ${
              isOpen ? "text-accent" : "text-muted"
            }`}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-muted leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 relative grid-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Dúvidas?
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Perguntas frequentes
          </h2>
          <p className="text-muted text-lg">
            As respostas para as dúvidas mais comuns sobre registro de domínios.
          </p>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted mb-4">Ainda tem dúvidas?</p>
          <a
            href="mailto:suporte@napsclaw.com"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold transition-colors"
          >
            Fale com nosso suporte →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
