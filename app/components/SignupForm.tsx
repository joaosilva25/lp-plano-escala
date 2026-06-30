"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const LEAD_ENDPOINT = "/api/lead";

const profiles = ["Revendedor", "Varejista", "Atacadista"];

type Status = "idle" | "loading" | "success" | "error";

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
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-green-300">
          <CheckCircle2 className="h-8 w-8" strokeWidth={1.3} aria-hidden />
        </span>
        <h3 className="font-display text-lg font-semibold text-green-50">
          Inscrição confirmada!
        </h3>
        <p className="text-sm text-muted">
          Você vai receber o acesso e os avisos do evento pelo grupo oficial da
          Xingyu.
        </p>
      </div>
    );
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
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
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Seu telefone (WhatsApp)"
          autoComplete="tel"
          inputMode="tel"
          className="h-12 w-full rounded-md border border-border bg-white px-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-600 focus:border-green-400/60"
        />
      </div>

      <fieldset className="mt-5">
        <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Você é:
        </legend>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {profiles.map((p) => {
            const active = profile === p;
            return (
              <label
                key={p}
                className={`cursor-pointer rounded-md border px-2 py-2.5 text-center text-xs font-semibold transition-all ${
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
                {p}
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
          Não foi possível enviar agora. Tente novamente em instantes.
        </p>
      ) : null}

      <p className="mt-4 text-center text-xs text-white">
        Evento gratuito. Seus dados estão protegidos.
      </p>
    </form>
  );
}
