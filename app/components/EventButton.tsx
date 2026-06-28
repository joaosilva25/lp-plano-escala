"use client";

import type { ReactNode } from "react";
import { useModal } from "./ModalContext";

export function EventButton({
  children = "Quero participar do evento",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  const { open } = useModal();
  return (
    <button
      type="button"
      onClick={open}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-[1.07] sm:px-8 sm:text-sm sm:tracking-[0.12em] ${className}`}
      style={{
        background: "linear-gradient(180deg, #2bd96e 0%, #08c24f 100%)",
        boxShadow:
          "0 12px 28px -8px rgba(8,194,79,0.6), inset 0 1px 0 rgba(255,255,255,0.32)",
      }}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
