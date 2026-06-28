"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Clock, Zap, Package, TrendingDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "../Reveal";
import { EventButton, SectionHeading } from "../ui";

const costs: { label: string; icon: LucideIcon }[] = [
  { label: "Custa tempo.", icon: Clock },
  { label: "Custa energia.", icon: Zap },
  { label: "Custa estoque parado.", icon: Package },
  { label: "Custa oportunidade perdida.", icon: TrendingDown },
];

export function Cost() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    active: true,
    breakpoints: {
      "(min-width: 640px)": { active: false },
    },
  });
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setSelected(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden border-t border-border py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[70%] -translate-x-1/2 glow-beam" />
      <div className="relative mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionHeading
            tag="A conta do improviso"
            title="Continuar vendendo no improviso também tem um custo."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 overflow-hidden sm:overflow-visible" ref={emblaRef}>
            <div className="-ml-4 flex sm:ml-0 sm:grid sm:grid-cols-4 sm:gap-4">
              {costs.map((c) => (
                <div
                  key={c.label}
                  className="min-w-0 flex-[0_0_60%] pl-4 sm:flex-none sm:pl-0"
                >
                  <div className="flex h-full flex-col items-center gap-3 rounded-lg border border-border bg-surface/60 p-6 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/15 text-green-300">
                      <c.icon className="h-6 w-6" strokeWidth={1.3} aria-hidden />
                    </span>
                    <p className="text-sm font-semibold text-green-50/90">
                      {c.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex justify-center gap-2 sm:hidden">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para o slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selected
                  ? "w-6 bg-green-400"
                  : "w-2 bg-border hover:bg-green-400/50"
              }`}
            />
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-sm sm:text-base leading-relaxed text-muted">
            Se você quer vender semijoias com mais frequência, precisa parar de
            depender só de peça bonita, promoção de última hora ou sorte no
            WhatsApp. O Plano Escala é a sua oportunidade de aprender uma visão
            mais clara com Leo China, conhecer a nova seleção de peças mais
            vendidas da Xingyu e entender como usar a internet para vender com
            mais estratégia.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <EventButton>Quero minha vaga no Plano Escala</EventButton>
            <p className="text-center text-xs text-muted sm:text-sm">
              Evento gratuito. Acesso pelo grupo oficial da Xingyu.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
