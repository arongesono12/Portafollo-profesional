import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import type { ReactNode } from "react";

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
    <html lang="es" className="scroll-smooth">
      <body className={`${roboto.variable} min-h-screen font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
