import { CalendarDays, Gift, Users } from "lucide-react";
import { Reveal } from "../Reveal";
import { EventButton, TrustItem } from "../ui";

export function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden lg:min-h-[95vh]">
      {/* background — desktop */}
      <div
        className="pointer-events-none absolute inset-0 hidden bg-cover bg-top bg-no-repeat lg:block"
        style={{ backgroundImage: "url('/HERO - DESK.png')" }}
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-background/50 lg:block" />

      {/* background + overlay — mobile */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full min-h-[88vh] lg:hidden">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/HERO - MOBI.png')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-black via-black/92 to-transparent" />
      </div>

      {/* conteúdo — mobile: sobre o overlay inferior; desktop: centralizado */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-16 pt-[34vh] min-h-[88vh] lg:min-h-0 lg:justify-center lg:py-10 lg:pt-10 lg:pb-10">
        <Reveal>
          <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src="/logo.png"
              alt="Plano Escala"
              className="mb-8 h-11 w-auto sm:h-14 lg:h-11"
            />
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl xl:text-[3.4rem]">
              Aprenda a Vender Semijoias{" "}
              <span className="text-gradient-green glow-text">TODOS OS DIAS</span>{" "}
              usando a internet
            </h1>
            <p className="mt-6 text-base font-semibold text-white/90 sm:text-xl">
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
      <div
        className="relative z-10 border-t border-white/5 bg-black lg:bg-black/20"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-5 text-sm font-medium uppercase tracking-[0.18em] text-green-50/90 sm:flex-row sm:gap-10">
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
