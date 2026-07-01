"use client";

import { useEffect } from "react";

const WHATSAPP_URL = "https://chat.whatsapp.com/GgiaeKuxGMB5uSZakNWG2y";
const REDIRECT_DELAY_MS = 2500;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function WhatsAppRedirectPage() {
  useEffect(() => {
    window.fbq?.("track", "Lead");

    const timeoutId = window.setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="flex flex-col items-center gap-6">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-green-400/30 border-t-green-400"
          aria-hidden
        />
        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-foreground">
            Redirecionando para o WhatsApp...
          </h1>
          <p className="text-sm text-muted">
            Você será levado ao grupo em instantes.
          </p>
        </div>
      </div>
    </main>
  );
}
