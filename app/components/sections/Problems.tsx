"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Package,
  HelpCircle,
  Tag,
  MessageSquareDashed,
  Eye,
  Compass,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui";

const problems: { text: string; icon: LucideIcon }[] = [
  {
    text: "Você sente que tem peça parada.",
    icon: Package,
  },
  {
    text: "Você não sabe exatamente quais modelos comprar.",
    icon: HelpCircle,
  },
  {
    text: "Você depende demais de promoção para movimentar vendas.",
    icon: Tag,
  },
  {
    text: "Você posta, mas poucas pessoas chamam.",
    icon: MessageSquareDashed,
  },
  {
    text: "Você vê outras revendedoras vendendo e pensa: “o que eu estou fazendo errado?”",
    icon: Eye,
  },
  {
    text: "Você sabe que poderia vender mais, mas ainda não encontrou um caminho claro.",
    icon: Compass,
  },
];

export function Problems() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/40 py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            tag="O diagnóstico"
            title="Vender semijoias todos os dias não é só ter produto."
            subtitle="É saber o que comprar, como mostrar, como criar desejo, como fazer a cliente entender valor e como usar a internet para manter sua venda viva todos os dias."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-14">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="-ml-5 flex">
                {problems.map((p) => (
                  <div
                    key={p.text}
                    className="min-w-0 flex-[0_0_85%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    <article className="flex h-full flex-col items-center justify-center rounded-xl border border-border bg-surface/60 p-8 text-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-green-500/15 text-green-300">
                        <p.icon className="h-8 w-8" strokeWidth={1.3} aria-hidden />
                      </span>
                      <p className="mt-6 text-sm sm:text-base font-semibold leading-relaxed text-green-50/90">
                        {p.text}
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* arrows */}
            <button
              type="button"
              aria-label="Anterior"
              onClick={scrollPrev}
              disabled={!canPrev}
              className="absolute -left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-2/90 text-green-100 backdrop-blur transition-colors hover:border-green-400/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:flex"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.3} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              onClick={scrollNext}
              disabled={!canNext}
              className="absolute -right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-2/90 text-green-100 backdrop-blur transition-colors hover:border-green-400/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:flex"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.3} aria-hidden />
            </button>
          </div>
        </Reveal>

        {/* dots */}
        <div className="mt-8 flex justify-center gap-2">
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
      </div>
    </section>
  );
}
