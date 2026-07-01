"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

const LEAD_ENDPOINT = "/api/lead";
const WHATSAPP_REDIRECT = "/whatsapp";

const profiles = ["Revendedor", "Varejista", "Atacadista"];

type Status = "idle" | "loading" | "error";

function formatPhone(value: string): string {
  let digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length > 2 && digits[2] !== "9") {
    digits = `${digits.slice(0, 2)}9${digits.slice(2)}`.slice(0, 11);
  }

  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function phoneDigits(value: string): string {
  return value.replace(/\D/g, "");
}

function isValidMobilePhone(value: string): boolean {
  const digits = phoneDigits(value);
  return digits.length === 11 && digits[2] === "9";
}

function getUtms() {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
    };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_content: params.get("utm_content") ?? "",
    utm_term: params.get("utm_term") ?? "",
  };
}

export function SignupForm({
  buttonLabel = "Participar do evento",
  botao = "Botão 1",
  grupo = "1",
}: {
  buttonLabel?: string;
  botao?: string;
  grupo?: string;
}) {
  const [profile, setProfile] = useState<string>(profiles[0]);
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    if (!isValidMobilePhone(numero)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    const payload = {
      nome,
      numero,
      botao,
      grupo,
      perfil: profile,
      ...getUtms(),
    };

    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const search = window.location.search;
      window.location.href = `${WHATSAPP_REDIRECT}${search}`;
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <h2 className="pr-10 font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
        Garanta sua vaga gratuita
      </h2>
      <p className="mt-1 text-sm text-muted">
        Preencha seus dados para receber o acesso ao evento.
      </p>
      <form className="mt-5 w-full sm:mt-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          autoComplete="name"
          className="h-12 w-full rounded-md border border-border bg-white px-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-600 focus:border-green-400/60"
        />
        <input
          type="tel"
          name="telefone"
          required
          value={numero}
          onChange={(e) => setNumero(formatPhone(e.target.value))}
          placeholder="(00) 00000-0000"
          autoComplete="tel"
          inputMode="numeric"
          maxLength={15}
          className="h-12 w-full rounded-md border border-border bg-white px-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-600 focus:border-green-400/60"
        />
      </div>

      <fieldset className="mt-5">
        <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Você é:
        </legend>
        <div className="mt-3 flex flex-col gap-2 sm:grid sm:grid-cols-3 sm:gap-2">
          {profiles.map((p) => {
            const active = profile === p;
            return (
              <label
                key={p}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-md border px-4 py-3 transition-all sm:justify-center sm:gap-2 sm:px-3 sm:py-2.5 ${
                  active
                    ? "border-green-400/70 bg-green-500/15 text-green-50"
                    : "border-border bg-white/5 text-muted hover:border-green-400/40"
                }`}
              >
                <input
                  type="radio"
                  name="perfil"
                  value={p}
                  checked={active}
                  onChange={() => setProfile(p)}
                  className="sr-only"
                />
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                    active
                      ? "border-green-400 bg-green-500 text-white"
                      : "border-green-400/25 bg-transparent"
                  }`}
                  aria-hidden
                >
                  {active ? (
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  ) : null}
                </span>
                <span className="text-sm font-semibold sm:text-xs">{p}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={status === "loading"}
        className="relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-md px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-[1.07] disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:translate-y-0 sm:px-8 sm:tracking-[0.12em]"
        style={{
          background: "linear-gradient(180deg, #2bd96e 0%, #08c24f 100%)",
          boxShadow:
            "0 12px 28px -8px rgba(8,194,79,0.6), inset 0 1px 0 rgba(255,255,255,0.32)",
        }}
      >
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent" />
        <span className="relative z-10 flex items-center gap-2">
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.3} aria-hidden />
              Enviando...
            </>
          ) : (
            buttonLabel
          )}
        </span>
      </button>

      {status === "error" ? (
        <p className="mt-3 text-center text-xs text-red-400">
          {phoneDigits(numero).length > 0 && !isValidMobilePhone(numero)
            ? "Informe um celular válido com DDD (ex: (11) 99999-9999)."
            : "Não foi possível enviar agora. Tente novamente em instantes."}
        </p>
      ) : null}

      <p className="mt-4 text-center text-xs text-white">
        Evento gratuito. Seus dados estão protegidos.
      </p>
    </form>
    </>
  );
}
