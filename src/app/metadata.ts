import type { Metadata } from "next";

import { profile } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3006";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} | Perfil Profesional`,
  description: `${profile.tagline} Especialista en ${profile.specialty}.`,
  keywords: [
    profile.name,
    "perfil profesional",
    "portfolio profesional",
    "biografia profesional",
    "Next.js",
    "arquitectura web",
    "producto digital",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.tagline,
    url: siteUrl,
    siteName: `${profile.name} Perfil Profesional`,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${profile.name} perfil profesional`,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.tagline,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [
      {
        url: "/logo/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/logo/favicon.ico",
        sizes: "any",
      },
    ],
    apple: "/logo/apple-touch-icon.png",
  },
};
