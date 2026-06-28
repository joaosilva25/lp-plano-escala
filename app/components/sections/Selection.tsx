"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Reveal } from "../Reveal";
import { EventButton, ImagePlaceholder, SectionHeading } from "../ui";

const rowTop = [
  "Colar",
  "Brincos",
  "Anel",
  "Pulseira",
  "Conjunto",
  "Pingente",
  "Tornozeleira",
  "Choker",
];

const rowBottom = [
  "Aliança",
  "Bracelete",
  "Gargantilha",
  "Berloque",
  "Piercing",
  "Corrente",
  "Pulseira VIP",
  "Brinco Argola",
];

function CarouselRow({
  items,
  direction,
}: {
  items: string[];
  direction: "forward" | "backward";
}) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start", containScroll: false },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        direction,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="-ml-4 flex">
        {items.map((label) => (
          <div
            key={label}
            className="min-w-0 flex-[0_0_45%] pl-4 sm:flex-[0_0_30%] lg:flex-[0_0_20%]"
          >
            <ImagePlaceholder
              label={label}
              aspect="aspect-square"
              className="card-glow"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Selection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/40 py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[60%] -translate-x-1/2 glow-beam" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            tag="Nova seleção Xingyu"
            title="Além do conteúdo, você também vai conhecer a nova seleção de peças mais vendidas da Xingyu"
            subtitle="Uma curadoria pensada para ajudar quem quer comprar com mais segurança, montar um estoque mais estratégico e trabalhar com produtos que já têm maior apelo de revenda."
          />
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="mt-14 flex flex-col gap-4">
          <CarouselRow items={rowTop} direction="forward" />
          <CarouselRow items={rowBottom} direction="backward" />
        </div>
      </Reveal>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal delay={160}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <EventButton>Quero participar do evento</EventButton>
            <p className="text-center text-xs text-muted sm:text-sm">
              Entre no grupo oficial para receber o acesso e os avisos do evento.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
