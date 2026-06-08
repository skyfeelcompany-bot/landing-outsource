import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL 
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}` 
  : process.env.NEXT_PUBLIC_VERCEL_URL 
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` 
    : "https://landing-outsource.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Аутсорсинг Юридических и Бухгалтерских Услуг | VERNO-GROUP",
    template: "%s | VERNO-GROUP",
  },
  description: "Комплексная правовая защита и оптимизация бухгалтерии на каждой стадии. Профессиональные юридические и бухгалтерские услуги для бизнеса и частных лиц в Казахстане.",
  keywords: ["юридические услуги", "бухгалтерские услуги", "аутсорсинг", "Казахстан", "открытие ТОО", "налоговая оптимизация", "взыскание задолженности", "юрист", "бухгалтер"],
  openGraph: {
    title: "Аутсорсинг Юридических и Бухгалтерских Услуг",
    description: "Комплексная правовая защита и оптимизация бухгалтерии на каждой стадии.",
    url: "/",
    siteName: "VERNO-GROUP",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'VERNO-GROUP Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Аутсорсинг Юридических и Бухгалтерских Услуг",
    description: "Комплексная правовая защита и оптимизация бухгалтерии на каждой стадии.",
    images: ['/twitter-image.png'],
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const ymId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${inter.variable} min-h-screen scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-brand-bg text-brand-text">
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "VERNO-GROUP",
              "image": `${siteUrl}/images/logo.png`,
              "description": "Комплексная правовая защита и оптимизация бухгалтерии на каждой стадии.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KZ"
              },
              "telephone": "+77080048192",
              "email": "info@verno-group.kz",
              "url": siteUrl,
              "priceRange": "$$"
            })
          }}
        />

        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Yandex Metrika */}
        {ymId && (
          <Script id="yandex-metrika" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(${ymId}, "init", {
                   clickmap:true,
                   trackLinks:true,
                   accurateTrackBounce:true,
                   webvisor:true,
                   ecommerce:"dataLayer"
              });
            `}
          </Script>
        )}

        {children}
      </body>
    </html>
  );
}

