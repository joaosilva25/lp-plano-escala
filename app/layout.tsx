import type { Metadata } from "next";
import Script from "next/script";
import { Sora } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "./components/ModalContext";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Plano Escala — Aprenda a vender semijoias todos os dias usando a internet",
  description:
    "Evento gratuito da Xingyu com Leo China, o maior especialista em semijoias do Brasil. Aprenda a usar a internet para criar desejo, escolher peças com mais saída e vender semijoias com mais frequência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '171392974957474');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=171392974957474&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
