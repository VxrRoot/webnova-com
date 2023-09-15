import "./globals.css";
import { Inter } from "@next/font/google";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pl">
            <head />
            <body
                // className={`bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black ${inter.className} text-white`}
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
