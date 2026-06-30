import { Reveal } from "../Reveal";
import { EventButton, SectionTag } from "../ui";

export function Mentor() {
  return (
    <section className="relative overflow-hidden bg-surface/25 py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          <Reveal>
            <div className="mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:mx-0 lg:max-w-none">
              <img
                src="/Mentor.png"
                alt="Leo China, mentor do Plano Escala"
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:max-w-none lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <SectionTag>Seu mentor</SectionTag>
              </div>

              <h2 className="mt-5 text-balance font-display text-2xl font-extrabold leading-[1.15] tracking-tight text-green-50 sm:text-3xl xl:text-4xl">
                O maior especialista em semijoias do Brasil
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                <p>
                  Leo China conhece o mercado de semijoias por dentro. Não falamos
                  apenas de teoria, nem de frases bonitas sobre empreendedorismo.
                  Falamos de produto, fábrica, importação, margem, venda,
                  posicionamento e construção de negócio.
                </p>
                <p>
                  Ao longo da sua trajetória, Leo acompanhou de perto o que faz
                  uma revendedora vender mais e o que faz uma compra virar
                  estoque parado. Neste evento, ele vai trazer uma visão prática
                  para quem quer usar a internet com mais inteligência, escolher
                  melhor as peças e vender semijoias com mais frequência.
                </p>
              </div>

              <blockquote className="mt-6 rounded-xl border border-green-400/20 bg-green-500/5 px-5 py-4 text-sm font-semibold leading-relaxed text-green-50 sm:text-base">
                Não é uma aula para complicar. É uma conversa direta para quem
                vive a realidade da revenda e precisa de um caminho mais claro
                para crescer.
              </blockquote>

              <div className="mt-8 flex flex-col items-center gap-6 lg:items-start">
                <EventButton>Quero aprender com Leo China</EventButton>
                <p className="text-xs text-muted sm:text-sm">
                  A participação é gratuita, mas o acesso será enviado apenas
                  para quem se cadastrar.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
