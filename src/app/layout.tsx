import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flávia Fonseca | Vistoria de Imóveis Profissional",
  description:
    "Vistoria de imóveis com relatório detalhado, registro fotográfico e atendimento profissional para locação, compra, venda e entrega de chaves.",
  keywords: [
    "vistoria de imóveis",
    "vistoria de entrada",
    "vistoria de saída",
    "laudo de vistoria",
    "Flávia Fonseca",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}