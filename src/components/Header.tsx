"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Preços", href: "#precos" },
  { label: "Recursos", href: "#recursos" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10, 10, 10, 0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-2.5 group">
            <span className="text-2xl">🦞</span>
            <span
              className="text-xl sm:text-2xl font-bold transition-colors duration-300"
              style={{ fontFamily: "var(--font-heading), system-ui, sans-serif", color: "#ededed" }}
            >
              NapsClaw
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm px-4 py-2 rounded-lg transition-colors duration-200"
                style={{ color: "#737373" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ededed")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#737373")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#hero"
              className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200"
              style={{ background: "#22c55e", color: "#0a0a0a" }}
            >
              Registrar domínio
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            style={{ color: "#ededed" }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden overflow-hidden"
          style={{
            background: "rgba(17, 17, 17, 0.95)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-lg transition-colors"
                style={{ color: "#737373" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#hero"
              onClick={() => setMobileOpen(false)}
              className="mt-3 px-5 py-3 text-sm font-semibold rounded-lg text-center"
              style={{ background: "#22c55e", color: "#0a0a0a" }}
            >
              Registrar domínio
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
