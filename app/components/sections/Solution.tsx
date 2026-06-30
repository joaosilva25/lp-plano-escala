import { Reveal } from "../Reveal";
import { EventButton, SectionHeading } from "../ui";

const cards = [
  {
    n: "01",
    image: "/IMG1.png",
    title: "A cliente precisa perceber desejo.",
    text: "Precisa entender por que aquela peça combina com ela. Precisa ver possibilidade de uso. Precisa sentir confiança. E você precisa saber escolher produtos que tenham mais chance de girar.",
  },
  {
    n: "02",
    image: "/IMG2.png",
    title: "É isso que muda o jogo.",
    text: "Quando você une boas peças, uma oferta clara e uma forma simples de divulgar todos os dias, a venda deixa de ser um acontecimento isolado e começa a virar processo.",
  },
  {
    n: "03",
    image: "/IMG4.png",
    title: "O Plano Escala foi criado para mostrar esse caminho:",
    text: "como sair do improviso e começar a vender semijoias com mais consciência, mais estratégia e mais constância usando a internet.",
  },
];

export function Solution() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6">
      <Reveal>
        <SectionHeading
          tag="A virada"
          title={
            <>
              Esses problemas{" "}
              <span>acabaram!</span>
            </>
          }
          subtitle="A internet pode ser uma vitrine poderosa para vender semijoias, mas só postar foto de produto não é suficiente."
        />
      </Reveal>

      <div className="mt-16 space-y-8 sm:space-y-12">
        {cards.map((card, i) => {
          const imageRight = i % 2 === 0;
          return (
            <Reveal key={card.n} delay={(i % 2) * 120}>
              <article className="relative rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
                <span
                  className={`absolute -top-4 flex h-9 w-9 items-center justify-center rounded-md font-display text-sm font-semibold text-white ${
                    imageRight ? "left-6" : "right-6"
                  }`}
                  style={{
                    background:
                      "linear-gradient(160deg, #2bd96e 0%, #04a142 100%)",
                    boxShadow: "0 10px 22px -10px rgba(8,194,79,0.7)",
                  }}
                >
                  {card.n}
                </span>

                <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2">
                  <div className={imageRight ? "lg:order-2" : "lg:order-1"}>
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-lg ring-soft">
                      <img
                        src={card.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={imageRight ? "lg:order-1" : "lg:order-2"}>
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-green-50 sm:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">
                      {card.text}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={160}>
        <div className="mt-12 flex justify-center">
          <EventButton>Quero participar do evento</EventButton>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
