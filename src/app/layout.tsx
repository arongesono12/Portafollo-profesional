import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/ThemeProvider";
import { metadata as siteMetadata } from "./metadata";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <body className={`${roboto.variable} min-h-screen font-sans antialiased`}>
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
