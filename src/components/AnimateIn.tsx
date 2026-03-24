"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

/**
 * Wrapper that guarantees content visibility.
 * Uses IntersectionObserver to trigger CSS class, and framer-motion whileInView as enhancement.
 * If framer fails for any reason, CSS fallback kicks in after 2 seconds.
 */

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function AnimateIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
  duration = 0.6,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // CSS-based fallback with IntersectionObserver
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: force visible after 3s no matter what
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    observer.observe(el);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`${className} ${isVisible ? "section-visible" : ""}`}
      style={{
        // Start invisible via inline style, CSS class overrides if framer fails
        willChange: "opacity, transform",
      }}
    >
      {children}
    </motion.div>
  );
}
