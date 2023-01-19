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
            <body className={`bg-background ${inter.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
