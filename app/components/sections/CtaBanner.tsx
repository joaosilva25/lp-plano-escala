import { Reveal } from "../Reveal";
import { EventButton } from "../ui";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl">
            O Plano Escala foi criado para quem quer parar de depender apenas de
            indicação, promoção ou cliente antiga.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-muted">
            Comece a usar a internet como uma ferramenta real de venda. Durante o
            evento, você vai entender o que trava suas vendas, como criar mais
            desejo nas clientes e como aproveitar uma seleção de peças com alto
            potencial de revenda.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center gap-6">
            <EventButton>Quero participar do Plano Escala</EventButton>
            <p className="text-xs text-muted sm:text-sm">
              Evento gratuito. O acesso será enviado pelo grupo oficial da Xingyu.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
