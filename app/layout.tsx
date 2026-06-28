import type { Metadata } from "next";
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
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
