import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("http://athadionsaputra.my.id"),

  title: "Portfolio Atha Dion Saputra",
  description: "Portfolio Web Developer dan Mobile Developer dari Indonesia",

  keywords: [
    "Atha Dion Saputra",
    "Portfolio Atha Dion Saputra",
    "Atha DS",
    "Web Developer",
    "Mobile Developer",
    "Portfolio",
    "Frontend Developer",
  ],

  authors: [{ name: "Atha Dion Saputra" }],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Portfolio Atha Dion Saputra",
    description: "Website portfolio resmi Atha Dion Saputra",
    url: "/",
    siteName: "Portfolio Atha",
    images: [
      {
        url: "/images/foto_profil.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};
