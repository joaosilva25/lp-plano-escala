import { Play } from "lucide-react";
import { Reveal } from "../Reveal";
import { EventButton } from "../ui";

export function Video() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[60%] -translate-x-1/2 glow-beam" />
      <div className="relative mx-auto max-w-4xl px-6">
        {/* SESSÃO 3 */}
        <Reveal>
          <p className="mx-auto max-w-3xl text-balance text-center font-display text-xl font-semibold leading-snug tracking-tight text-green-50 sm:text-3xl">
            Chega de depender só de indicação, promoção ou sorte.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm sm:text-base leading-relaxed text-muted">
            Neste evento, você vai aprender uma forma mais inteligente de
            trabalhar com semijoias e ainda conhecer a nova seleção de peças mais
            vendidas da Xingyu.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
            Assista o vídeo abaixo
          </p>
          <div className="group relative mt-6 aspect-video w-full overflow-hidden rounded-xl border border-border bg-surface-2/80 card-glow">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(120,255,175,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(120,255,175,0.07) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-green-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-green-400/20 blur-3xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-green-400/40 bg-green-500/20 text-green-100 transition-transform duration-300 group-hover:scale-105">
                <Play className="ml-1 h-9 w-9 fill-current" strokeWidth={0} aria-hidden />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Vídeo do evento
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-12 flex justify-center">
            <EventButton>Quero participar do Plano Escala</EventButton>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
