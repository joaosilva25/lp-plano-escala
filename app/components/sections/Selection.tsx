"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Reveal } from "../Reveal";
import { EventButton, SectionHeading } from "../ui";

const carouselImages = [
  "/carousel1.jpg",
  "/carousel2.jpg",
  "/carousel3.jpg",
  "/carousel4.jpg",
  "/carousel5.webp",
  "/carousel6.jpg",
  "/carousel7.webp",
  "/carousel8.webp",
];

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

function SelectionCard({ image }: { image: string }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg ring-soft">
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function CarouselRow({
  items,
  direction,
  imageOffset = 0,
}: {
  items: string[];
  direction: "forward" | "backward";
  imageOffset?: number;
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
      <div className="-ml-3 flex sm:-ml-4">
        {items.map((label, i) => (
          <div
            key={label}
            className="min-w-0 flex-[0_0_58%] pl-3 sm:flex-[0_0_30%] sm:pl-4 lg:flex-[0_0_20%]"
          >
            <SelectionCard
              image={
                carouselImages[(imageOffset + i) % carouselImages.length]
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Selection() {
  return (
    <section className="relative overflow-hidden bg-surface/40 py-24">
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
        <div className="mt-14 flex flex-col gap-5 sm:gap-4">
          <CarouselRow items={rowTop} direction="forward" imageOffset={0} />
          <CarouselRow items={rowBottom} direction="backward" imageOffset={2} />
        </div>
      </Reveal>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal delay={160}>
          <div className="mt-12 flex flex-col items-center gap-6">
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
