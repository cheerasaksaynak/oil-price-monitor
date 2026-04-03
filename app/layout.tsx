import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter, IBM_Plex_Sans_Thai } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-be-vietnam',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-ibm-plex-thai',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Fluid Authority - ราคาน้ำมันไทย",
  description: "Historical pricing data and market analytics for Thai fuel stations. Track Gasohol, Diesel, and E20 prices from PTT and Bangchak.",
  keywords: ["น้ำมัน", "ราคาน้ำมัน", "PTT", "Bangchak", "fuel price", "Thailand"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${beVietnamPro.variable} ${inter.variable} ${ibmPlexSansThai.variable} font-inter antialiased bg-surface text-on-surface`}
      >
        {children}
      </body>
    </html>
  );
}
