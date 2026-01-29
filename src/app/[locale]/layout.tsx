import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const incise = localFont({
  src: [
    {
      path: '../../../public/fonts/F37 Incise/F37InciseTrial-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/F37 Incise/F37InciseTrial-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/F37 Incise/F37InciseTrial-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/F37 Incise/F37InciseTrial-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/F37 Incise/F37InciseTrial-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-incise',
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: "https://decimetarkvadratni.com",
    alternates: {
      canonical: "/",
      languages: {
        "sr": "/",
        "en": "/en"
      }
    },
    title: t('default.title'),
    description: t('default.description'),
    openGraph: {
      title: t('default.openGraph.title'),
      description: t('default.openGraph.description'),
      images: [
        {
          url: t('default.openGraph.imageUrl'),
          alt: t('default.openGraph.imageAlt'),
          width: 1920,
          height: 1080,
        }
      ],
    },
    twitter: {
      card: t('default.twitter.card'),
      title: t('default.twitter.title'),
      description: t('default.twitter.description'),
      images: [
        {
          url: t('default.twitter.imageUrl'),
          alt: t('default.twitter.imageAlt'),
          width: 1920,
          height: 1080,
        }
      ],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-627RF9LN8S" strategy="afterInteractive" />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-627RF9LN8S');
        `}
      </Script>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1424797298782624');
          fbq('track', 'PageView');
      `}
      </Script>
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} ${incise.variable} antialiased`}
      >
        <NextIntlClientProvider>
          {children}
          <Toaster />
          <noscript><img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1424797298782624&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          /></noscript>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
