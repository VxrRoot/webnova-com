import CookieBanner from "@/src/components/cookies/CookieBanner";
import GoogleAnalytics from "@/src/components/GA/GoogleAnalitics";
import { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Suspense } from "react";
import Footer from "../components/footer/Footer";

import Header from "../components/header/Header";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicons/favicon.ico",
  },
  verification: {
    google: "",
  },
  keywords: [
    "Web nowa",
    "Nowa web",
    "Nova web",
    "Web nova",
    "web nova strony internetowe",
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
  robots: {
    index: true,
    follow: true,
  },
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
      <Suspense>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID!} />
      </Suspense>
      <body className={`${montserrat.className}`}>
        <Header />
        <main className="z-20 relative bg-zinc-900">{children}</main>
        <Suspense>
          <CookieBanner />
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
