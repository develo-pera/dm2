import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "dm2 - Decimetar kvadratni",
  description: "Decimetar kvadratni je investiranje u nekretnine dostupno svima. Kroz usitnjavanje, tj. frakcionisanje ukupne površine nekretnine na decimetre kvadratne, umesto cele nekretnine, možete kupiti samo deo, tj. jedan ili više decimetara kvadratnih.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(incise.variable);
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} ${incise.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
