import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/common/navigation";
import Footer from "./components/common/footer";
import ComingSoon from "./components/common/coming-soon";
// import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

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
      path: '../../public/fonts/F37 Incise/F37InciseTrial-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/F37 Incise/F37InciseTrial-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/F37 Incise/F37InciseTrial-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/F37 Incise/F37InciseTrial-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/F37 Incise/F37InciseTrial-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-incise',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://decimetarkvadratni.com"),
  title: "Ulaganje u nekretnine već od 150€ - Decimetar kvadratni",
  description: "Umesto kupovine cele nekretnine, investirajte u deo kvadrata i ostvarite pasivan prihod i do 30% godišnje",
  openGraph: {
    title: "Ulaganje u nekretnine već od 150€ - Decimetar kvadratni",
    description: "Umesto kupovine cele nekretnine, investirajte u deo kvadrata i ostvarite pasivan prihod i do 30% godišnje",
    images: [{
      url: "/dm2-og-image.jpg",
      width: 1920,
      height: 1080,
      alt: "Decimetar kvadratni"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulaganje u nekretnine već od 150€ - Decimetar kvadratni",
    description: "Umesto kupovine cele nekretnine, investirajte u deo kvadrata i ostvarite pasivan prihod i do 30% godišnje",
    images: ["/dm2-og-image.jpg"]
  },
};

const isComingSoon = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(incise.variable);

  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-627RF9LN8S" strategy="afterInteractive" />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-627RF9LN8S');
        `}
      </Script>
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} ${incise.variable} antialiased`}
      >
        {
          !isComingSoon ? (
            <>
              <Navigation />
              {children}
              <Footer />
            </>
          ) : (
            <ComingSoon />
          )
        }
        <Toaster />
      </body>
      {/* <GoogleTagManager gtmId="G-627RF9LN8S" /> */}
    </html>
  );
}
