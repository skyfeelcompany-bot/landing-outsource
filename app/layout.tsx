import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://outsourcelegal.kz"),
  title: {
    default: "Аутсорсинг Юридических и Бухгалтерских Услуг | Outsource Legal",
    template: "%s | Outsource Legal",
  },
  description: "Комплексная правовая защита и оптимизация бухгалтерии на каждой стадии. Профессиональные юридические и бухгалтерские услуги для бизнеса и частных лиц в Казахстане.",
  keywords: ["юридические услуги", "бухгалтерские услуги", "аутсорсинг", "Казахстан", "открытие ТОО", "налоговая оптимизация", "взыскание задолженности", "юрист", "бухгалтер"],
  openGraph: {
    title: "Аутсорсинг Юридических и Бухгалтерских Услуг",
    description: "Комплексная правовая защита и оптимизация бухгалтерии на каждой стадии.",
    url: "/",
    siteName: "Outsource Legal",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Аутсорсинг Юридических и Бухгалтерских Услуг",
    description: "Комплексная правовая защита и оптимизация бухгалтерии на каждой стадии.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${inter.variable} min-h-screen scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-brand-bg text-brand-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Outsource Legal",
              "image": "https://outsourcelegal.kz/logo.png",
              "description": "Комплексная правовая защита и оптимизация бухгалтерии на каждой стадии.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KZ"
              },
              "telephone": "+77777777777",
              "email": "contact@outsourcelegal.kz",
              "url": "https://outsourcelegal.kz",
              "priceRange": "$$"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
