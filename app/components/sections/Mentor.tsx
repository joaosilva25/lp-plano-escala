import { Reveal } from "../Reveal";
import { EventButton, ImagePlaceholder, SectionHeading } from "../ui";

export function Mentor() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-green-500/10 blur-2xl" />
            <ImagePlaceholder
              label="Foto do Leo China"
              aspect="aspect-[4/5]"
              className="card-glow"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="text-center lg:text-left">
            <SectionHeading
              align="left"
              tag="Seu mentor"
              title="O maior especialista em semijoias do Brasil"
            />
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted">
              Leo China conhece o mercado de semijoias por dentro. Não falamos
              apenas de teoria, nem de frases bonitas sobre empreendedorismo.
              Falamos de produto, fábrica, importação, margem, venda,
              posicionamento e construção de negócio.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">
              Ao longo da sua trajetória, Leo acompanhou de perto o que faz uma
              revendedora vender mais e o que faz uma compra virar estoque
              parado. Neste evento, ele vai trazer uma visão prática para quem
              quer usar a internet com mais inteligência, escolher melhor as
              peças e vender semijoias com mais frequência.
            </p>
            <p className="mt-6 font-display text-base font-semibold text-gradient-green sm:text-lg">
              Não é uma aula para complicar. É uma conversa direta para quem vive
              a realidade da revenda e precisa de um caminho mais claro para
              crescer.
            </p>
            <div className="mt-9">
              <EventButton>Quero aprender com Leo China</EventButton>
            </div>
            <p className="mt-5 text-center text-xs text-muted sm:text-sm lg:text-left">
              A participação é gratuita, mas o acesso será enviado apenas para
              quem se cadastrar.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
