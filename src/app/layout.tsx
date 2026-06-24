import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://vistoriaimoveis.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Flávia Fonseca | Vistoria de Imóveis Profissional",
    template: "%s | Flávia Fonseca Vistorias",
  },

  description:
    "Vistoria de imóveis profissional com relatório detalhado, fotos, análise visual e atendimento especializado para entrada, saída, compra, venda, locação e entrega de chaves.",

  keywords: [
    "vistoria de imóveis",
    "vistoria imobiliária",
    "vistoria de entrada",
    "vistoria de saída",
    "laudo de vistoria",
    "relatório de vistoria",
    "vistoria com fotos",
    "vistoria para locação",
    "vistoria para compra",
    "vistoria para venda",
    "vistoria entrega de chaves",
    "vistoria residencial",
    "vistoria comercial",
    "vistoriador de imóveis",
    "Flávia Fonseca",
  ],

  authors: [{ name: "Flávia Fonseca" }],
  creator: "Flávia Fonseca",
  publisher: "Flávia Fonseca",

  applicationName: "Flávia Fonseca Vistorias",

  alternates: {
    canonical: siteUrl,
    languages: {
      "pt-BR": siteUrl,
    },
  },

  openGraph: {
    title: "Flávia Fonseca | Vistoria de Imóveis Profissional",
    description:
      "Agende sua vistoria de imóveis com relatório profissional, registro fotográfico e atendimento claro para locação, compra, venda e entrega de chaves.",
    url: siteUrl,
    siteName: "Flávia Fonseca Vistorias",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flávia Fonseca - Vistoria de Imóveis Profissional",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Flávia Fonseca | Vistoria de Imóveis Profissional",
    description:
      "Vistoria de imóveis com relatório detalhado, fotos e atendimento profissional.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "serviços imobiliários",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Flávia Fonseca Vistorias",
  description:
    "Serviço profissional de vistoria de imóveis com relatório detalhado, fotos e atendimento para locação, compra, venda e entrega de chaves.",
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/logo.png`,
  telephone: "+55 21 98108-0434",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "RJ",
    addressLocality: "Rio de Janeiro",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Rio de Janeiro",
    },
    {
      "@type": "Place",
      name: "Baixada Fluminense",
    },
    {
      "@type": "Place",
      name: "Niterói",
    },
  ],
  serviceType: [
    "Vistoria de entrada",
    "Vistoria de saída",
    "Vistoria para compra",
    "Vistoria comercial",
    "Laudo de vistoria de imóveis",
    "Relatório fotográfico de vistoria",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#F57C00" />
        <meta name="geo.region" content="BR-RJ" />
        <meta name="geo.placename" content="Rio de Janeiro" />
        <meta name="language" content="pt-BR" />
        <meta name="format-detection" content="telephone=no" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}