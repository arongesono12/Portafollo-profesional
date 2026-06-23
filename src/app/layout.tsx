import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter, Montserrat, Roboto } from "next/font/google";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/ThemeProvider";
import { metadata as siteMetadata } from "./metadata";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${roboto.variable} ${montserrat.variable} ${ibmPlexSans.variable} min-h-screen font-sans antialiased`}
      >
        <ThemeProvider>
          <a
            href="#inicio"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-black focus:text-inverse focus:outline-none"
          >
            Saltar al contenido
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
