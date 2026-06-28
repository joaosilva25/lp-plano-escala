import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui";
import { Check } from "lucide-react";

type LearnItem = { title: string; text: string };
type Day = {
  day: string;
  badge: string;
  title: string;
  intro: string;
  items: LearnItem[];
};

const days: Day[] = [
  {
    day: "01",
    badge: "Peça bonita não vende sozinha",
    title: "O erro que trava suas vendas de semijoias na internet",
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

export function WhatYouLearn() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[60%] -translate-x-1/2 glow-beam" />
      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            tag="3 dias de evento"
            title="O que você vai aprender no Plano Escala"
            subtitle="Neste evento, você não vai assistir apenas a uma apresentação de produtos. Você vai entender como pensar a venda de semijoias com mais estratégia."
          />
        </Reveal>

        <div className="mt-16 space-y-10">
          {days.map((d, i) => (
            <Reveal key={d.day} delay={(i % 2) * 120}>
              <article className="overflow-hidden rounded-xl border border-border bg-surface/60 card-glow">
                <div className="flex flex-col gap-4 border-b border-border bg-green-500/5 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
                  <span className="flex h-16 w-16 flex-none items-center justify-center rounded-lg bg-green-500/15 font-display text-2xl font-extrabold text-gradient-green">
                    {d.day}
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
                      Dia {d.day} — {d.badge}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold leading-snug tracking-tight text-green-50 sm:text-2xl">
                      {d.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-sm sm:text-base leading-relaxed text-muted">
                    {d.intro}
                  </p>

                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
                    O que você vai aprender:
                  </p>
                  <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {d.items.map((item) => (
                      <li
                        key={item.title}
                        className="rounded-lg border border-border bg-surface-2/60 p-5"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500/20 text-green-300">
                          <Check className="h-4 w-4" strokeWidth={1.3} aria-hidden />
                        </span>
                        <h4 className="mt-4 font-display text-sm font-semibold leading-snug text-green-50">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
