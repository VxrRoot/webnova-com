import "./globals.css";
import { Inter } from "@next/font/google";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicons/favicon.ico",
  },
  keywords: [
    "Tworzenie stron internetowych",
    "strony internetowe",
    "webflow",
    "nextjs",
    "react",
    "Strony internetowe na zamówienie",
    "Projektowanie stron internetowych",
    "Strony internetowe Webflow",
    "Webflow development",
    "Strony internetowe dla biznesu",
    "Strony internetowe dla małych firm",
    "Responsywne strony internetowe",
    "SEO i optymalizacja stron",
    "Landing page na Webflow",
    "Szybkie strony internetowe",
    "Portfolio stron internetowych",
    "Strony internetowe dla restauracji",
    "Strony internetowe dla agencji reklamowych",
  ],
  openGraph: {
    locale: "pl_PL",
    url: "https://www.web-nova.pl/",
    title: "Skuteczne strony internetowe",
    description:
      "Tworzymy dedykowane strony internetowe, które pomagają naszym klientom maksymalizować zyski oraz realizować cele w ich biznesach",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head />
      <body
        className={`bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black ${inter.className}`}
      >
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
