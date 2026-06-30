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
  alternates: {
    canonical: "/",
  },
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
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/apple-icon-180x180.png', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/ms-icon-144x144.png',
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
              "telephone": "+77002676081",
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

