import { CalendarDays, Gift, Users } from "lucide-react";
import { Reveal } from "../Reveal";
import { EventButton, TrustItem } from "../ui";

export function Hero() {
  return (
    <section className="relative flex h-[95vh] flex-col overflow-hidden">

      {/* SESSÃO 1 — announcement bar (marquee) */}
      <div className="relative z-20 overflow-hidden border-b border-white/10 bg-black/40 py-4" style={{ backdropFilter: "blur(10px)" }}>
        <div className="marquee-track flex w-max">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0" aria-hidden={group === 1}>
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="flex items-center">
                  <span className="px-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[11px]">
                    Exclusivo para revendedores, atacadistas e lojistas de
                    semijoias
                  </span>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/HeroIMG.png')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-background/70" />

      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] glow-beam" />

      {/* SESSÃO 2 — hero */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-10">
        <Reveal>
          <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src="/Logo.png"
              alt="Plano Escala"
              className="mb-8 h-14 w-auto sm:h-16"
            />
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl xl:text-[3.4rem]">
              Aprenda a Vender Semijoias{" "}
              <span className="text-gradient-green glow-text">TODOS OS DIAS</span>{" "}
              usando a internet.
            </h1>
            <p className="mt-6 text-base font-semibold text-green-50/90 sm:text-xl">
              Semijoia bonita não vende sozinha. Você precisa de um plano para
              vender no automático até quando você dorme.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              Participe do Plano Escala, um evento gratuito com Leo China, o
              maior especialista em semijoias do Brasil. Entenda como usar a
              internet para divulgar melhor, criar desejo, escolher peças com
              mais potencial de saída e vender semijoias com mais frequência.
            </p>
            <div className="mt-9">
              <EventButton>Participar do evento</EventButton>
            </div>
          </div>
        </Reveal>
      </div>

      {/* trust bar */}
      <div className="relative border-t border-white/10 bg-black/20" style={{ backdropFilter: "blur(10px)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-green-50/90 sm:flex-row sm:gap-10">
          <TrustItem icon={Gift} label="100% Gratuito" />
          <span className="hidden h-4 w-px bg-border sm:block" />
          <TrustItem icon={CalendarDays} label="Ao vivo dia 16/07" />
          <span className="hidden h-4 w-px bg-border sm:block" />
          <TrustItem icon={Users} label="Grupo VIP no WhatsApp" />
        </div>
      </div>
    </section>
  );
}
