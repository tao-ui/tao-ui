import { Inter as InterFont } from "next/font/google";
import type { Metadata, Viewport } from "next/types";
import type { PropsWithChildren } from "react";
import { Header } from "~/components/header";

import "~/styles/globals.css";

const interFont = InterFont({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  description: "Tao React.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    charSet: "utf-8",
    lang: "en",
  },
  title: "Tao React - UI Component Library",
  twitter: {
    card: "summary_large_image",
    title: "Tao React - UI component library",
    description: "Twitter.",
    images: [""],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  //   { media: "(prefers-color-scheme: dark)", color: "#44150b" },
  // ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${interFont.variable} font-sans`}>
      <head></head>
      <body className="bg-page">
        <Header />
        {children}
      </body>
    </html>
  );
}
