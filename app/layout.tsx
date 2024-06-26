import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import CookieBanner from "@/src/components/cookies/CookieBanner";
import GoogleAnalytics from "@/src/components/GA/GoogleAnalitics";
import { Suspense } from "react";
// const CookieBanner = dynamic(
//     () => import("../src/components/cookies/CookieBanner"),
//     { ssr: false }
// );

// const GoogleAnalytics = dynamic(
//     () => import("../src/components/GA/GoogleAnalitics"),
//     {
//         ssr: false,
//     }
// );

const sans = DM_Sans({ subsets: ["latin"] });

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
                <GoogleAnalytics
                    GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID!}
                />
            </Suspense>
            <body className={`relative ${sans.className}`}>
                {/* <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div> */}
                <Header />
                <main className="z-20 relative">
                    {children}
                    <div className="z-10 bg-black/40 w-full h-full absolute left-0 top-0" />
                </main>
                <Suspense>
                    <CookieBanner />
                </Suspense>
                <Footer />
            </body>
        </html>
    );
}
