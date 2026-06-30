"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TrendingUp, BadgePercent, HeartHandshake, Gem } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui";

const benefits: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Aumento de Vendas",
    text: "Produtos deslumbrantes e de alta demanda que atraem mais clientes para sua loja.",
    icon: TrendingUp,
  },
  {
    title: "Margem de Lucro Elevada",
    text: "Descontos no atacado garantem uma excelente margem de lucro em cada peça vendida.",
    icon: BadgePercent,
  },
  {
    title: "Fidelização de Clientes",
    text: "Ofereça aos seus clientes peças exclusivas e de alta qualidade, aumentando a satisfação e fidelidade.",
    icon: HeartHandshake,
  },
  {
    title: "Diferenciação no Mercado",
    text: "Destaque-se da concorrência com uma coleção de semijoias única e sofisticada.",
    icon: Gem,
  },
];

export function Benefits() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    active: true,
    breakpoints: {
      "(min-width: 1024px)": { active: false },
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
    <section className="relative mx-auto max-w-7xl px-6 pt-6 pb-20">
      <Reveal>
        <SectionHeading
          tag="Por que participar"
          title="Um evento gratuito para quem quer parar de vender no improviso."
          subtitle="O Plano Escala é um evento online e gratuito da Xingyu com Leo China, criado para revendedoras, lojistas e pessoas que querem vender semijoias de um jeito mais inteligente."
        />
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="min-w-0 flex-[0_0_85%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
              >
                <article className="h-full rounded-lg border border-border bg-surface/60 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/15 text-green-300">
                    <b.icon className="h-6 w-6" strokeWidth={1.3} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug tracking-tight text-green-50">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {b.text}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* dots (mobile only) */}
      <div className="mt-8 flex justify-center gap-2 lg:hidden">
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
    </section>
  );
}
