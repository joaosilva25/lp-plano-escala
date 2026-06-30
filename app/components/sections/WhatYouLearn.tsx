"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui";

type LearnItem = { title: string; text: string };
type Day = {
  day: string;
  badge: string;
  title: string;
  intro: string;
  image: string;
  items: LearnItem[];
};

const days: Day[] = [
  {
    day: "01",
    badge: "Peça bonita não vende sozinha",
    title: "O erro que trava suas vendas de semijoias na internet",
    image: "/IMG1.png",
    intro:
      "No primeiro dia, vamos mostrar o erro que trava muitas revendedoras: comprar boas peças, postar no Instagram ou no WhatsApp e esperar que as vendas aconteçam sozinhas. Você vai entender por que algumas peças ficam paradas, por que algumas postagens não geram resposta e por que vender semijoias todos os dias exige mais do que ter produto bonito.",
    items: [
      {
        title: "Como parar de postar sem direção e começar a vender com intenção",
        text: "Você vai entender por que simplesmente mostrar a peça não é suficiente e como começar a divulgar de um jeito que desperta mais interesse nas clientes.",
      },
      {
        title: "Como identificar o que está travando suas vendas hoje",
        text: "Nem sempre o problema é o preço ou a peça. Muitas vezes, o que falta é clareza na forma de apresentar, ofertar e conduzir a venda.",
      },
      {
        title: "Por que nem toda peça bonita gira rápido",
        text: "Você vai aprender a olhar para semijoias com visão de revenda, pensando em uso, desejo, aceitação e potencial de saída.",
      },
    ],
  },
  {
    day: "02",
    badge: "Crie desejo e gere mais pedidos",
    title: "Como usar a internet para criar desejo e gerar mais pedidos",
    image: "/IMG2.png",
    intro:
      "No segundo dia, o foco será mostrar como transformar Instagram, WhatsApp e conteúdo simples em ferramentas reais de venda. Não é sobre virar influencer, aparecer o tempo todo ou fazer coisas difíceis. É sobre saber o que falar, como mostrar suas peças e como fazer a cliente enxergar valor antes de perguntar o preço.",
    items: [
      {
        title: "Como mostrar suas peças de um jeito que cria desejo das clientes",
        text: "Você vai entender como apresentar uma semijoia além do “olha que linda”, usando contexto, combinação, ocasião de uso e motivo de compra.",
      },
      {
        title: "Como montar uma oferta mais clara para vender mais fácil",
        text: "A cliente precisa entender o que você vende, por que aquela peça vale a pena e por que ela deveria comprar agora.",
      },
      {
        title: "Como transformar peças em argumentos de venda",
        text: "Você vai aprender a usar os detalhes da peça, o estilo, a proposta e a ocasião para tornar sua venda mais forte e menos dependente de desconto.",
      },
    ],
  },
  {
    day: "03",
    badge: "Plano Escala",
    title: "Como escolher peças com mais saída e vender semijoias todos os dias",
    image: "/IMG4.png",
    intro:
      "No terceiro dia, Leo China vai conectar tudo: produto, internet, rotina de venda e oportunidade comercial. Também será apresentada a nova seleção de peças mais vendidas da Xingyu, criada para ajudar revendedoras e lojistas a comprarem com mais segurança e escolherem modelos com maior potencial de saída.",
    items: [
      {
        title: "Como trabalhar com uma seleção mais inteligente de produtos",
        text: "A nova seleção de peças mais vendidas da Xingyu vai ajudar você a enxergar modelos com maior potencial de giro e montar compras com mais segurança.",
      },
      {
        title: "Como construir uma rotina simples para vender semijoias pela internet",
        text: "Vender todos os dias exige constância. Você vai entender como criar uma rotina prática para divulgar, aquecer, atender e vender sem depender só de sorte.",
      },
      {
        title: "Como unir produto, divulgação e estratégia para vender com mais frequência",
        text: "Você vai entender como sair do improviso e começar a trabalhar com uma lógica mais clara: escolher melhor, mostrar melhor e vender melhor.",
      },
    ],
  },
];

function DayCard({ day }: { day: Day }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface/80">
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden">
        <img
          src={day.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <img
            src="/logo.png"
            alt="Plano Escala"
            className="h-5 w-auto opacity-90"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-4 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-400">
          Dia {day.day} — {day.badge}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-white lg:text-xl">
          {day.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/75">{day.intro}</p>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
          O que você vai aprender:
        </p>
        <ul className="mt-4 flex flex-col gap-4">
          {day.items.map((item) => (
            <li key={item.title}>
              <h4 className="text-sm font-semibold leading-snug text-white">
                {item.title}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-white/60 sm:text-sm">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function WhatYouLearn() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    active: true,
    breakpoints: {
      "(min-width: 768px)": { active: false },
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
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            tag="3 dias de evento"
            title="O que você vai aprender no Plano Escala"
            subtitle="Neste evento, você não vai assistir apenas a uma apresentação de produtos. Você vai entender como pensar a venda de semijoias com mais estratégia."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 overflow-hidden md:overflow-visible" ref={emblaRef}>
            <div className="-ml-6 flex md:ml-0 md:grid md:grid-cols-3 md:gap-5 lg:gap-6">
              {days.map((d) => (
                <div
                  key={d.day}
                  className="min-w-0 flex-[0_0_88%] pl-6 md:flex-none md:pl-0"
                >
                  <DayCard day={d} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex justify-center gap-2 md:hidden">
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
