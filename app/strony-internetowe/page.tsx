import CTASection from "@/src/sections/CTA-section/CTASection";
import { Metadata } from "next";
import React from "react";
import styles from "../../src/layouts/GradientBackground.module.css";

export const metadata: Metadata = {
    title: "Tworzenie Stron Internetowych - Profesjonalne Rozwiązania dla Twojego Biznesu",
    description:
        "Nasza agencja oferuje nowoczesne, responsywne i funkcjonalne strony internetowe. Skorzystaj z najnowszych technologii jak Next.js, Webflow, Astro, Strapi i Sanity. Zoptymalizowane pod kątem SEO, przyciągające nowych klientów",
    keywords:
        "tworzenie stron internetowych, agencja internetowa, Next.js, Webflow, Astro, Strapi, Sanity, projektowanie stron, strony internetowe, SEO",
    authors: [{ name: "Web-Nova", url: "https://web-nova.pl" }],
    robots: {
        follow: true,
        index: true,
    },
    openGraph: {
        title: "Tworzenie Stron Internetowych - Profesjonalne Rozwiązania dla Twojego Biznesu",
        description:
            "Nasza agencja oferuje nowoczesne, responsywne i funkcjonalne strony internetowe. Skorzystaj z najnowszych technologii jak Next.js, Webflow, Astro, Strapi i Sanity. Zoptymalizowane pod kątem SEO, przyciągające nowych klientów",
        type: "article",
        url: "https://www.web-nova.pl/strony-internetowe",
    },
    alternates: {
        canonical: `https://www.web-nova.pl/strony-internetowe`,
    },
};

const WebDevelopmentPage = () => {
    return (
        <main className="min-h-screen">
            <div className="z-20 relative">
                <div className="pt-32 pb-20 max-w-5xl mx-auto px-4 lg:px-8 ">
                    <h1 className=" text-4xl font-bold">
                        Strony oraz sklepy internetowe - Profesjonalne
                        Rozwiązania dla Twojego Biznesu
                    </h1>
                    <p className="mt-12">
                        W dzisiejszych czasach posiadanie profesjonalnej strony
                        internetowej to klucz do sukcesu każdej firmy. Nasza
                        agencja internetowa specjalizuje się w tworzeniu
                        nowoczesnych, responsywnych i funkcjonalnych stron
                        internetowych, które pomagają wyróżnić się na tle
                        konkurencji i przyciągnąć nowych klientów. Korzystając z
                        najnowszych technologii, takich jak Next.js, Webflow,
                        Astro, Strapi i Sanity, gwarantujemy najwyższą jakość
                        oraz wydajność naszych rozwiązań.
                    </p>
                    <h2 className="text-3xl font-bold my-10">Co Oferujemy?</h2>
                    <h3 className="text-2xl font-bold my-8">
                        1. Tworzenie Stron Internetowych z Next.js
                    </h3>
                    <p>
                        Next.js to nowoczesny framework dla React, który
                        umożliwia tworzenie szybkich i skalowalnych aplikacji
                        webowych. Dzięki niemu Twoja strona będzie nie tylko
                        szybka, ale także zoptymalizowana pod kątem SEO, co
                        zwiększy jej widoczność w wyszukiwarkach internetowych.
                    </p>
                    <h3 className="text-2xl font-bold my-8">
                        2. Design i Development z Webflow
                    </h3>
                    <p>
                        Webflow to narzędzie, które pozwala na tworzenie
                        wizualnie oszałamiających stron bez kompromisów w
                        kwestii funkcjonalności. Nasz zespół projektantów i
                        deweloperów zapewni, że Twoja strona będzie estetyczna,
                        intuicyjna i zgodna z najnowszymi trendami w web
                        designie.
                    </p>
                    <h3 className="text-2xl font-bold my-8">
                        3. Nowoczesne Strony z Astro
                    </h3>
                    <p>
                        Astro to innowacyjna technologia, która umożliwia
                        tworzenie ultraszybkich stron statycznych. Dzięki Astro,
                        Twoja strona będzie się ładować błyskawicznie, co
                        przekłada się na lepsze doświadczenie użytkownika i
                        wyższe pozycje w wynikach wyszukiwania Google.
                    </p>
                    <h3 className="text-2xl font-bold my-8">
                        4. Dynamiczne Zarządzanie Treścią z Strapi
                    </h3>
                    <p>
                        Strapi to headless CMS, który pozwala na łatwe
                        zarządzanie treścią Twojej strony. Dzięki niemu możesz
                        na bieżąco aktualizować informacje na swojej stronie,
                        bez konieczności angażowania deweloperów, co oszczędza
                        czas i pieniądze.
                    </p>
                    <h3 className="text-2xl font-bold my-8">
                        5. Elastyczne Rozwiązania CMS z Sanity
                    </h3>
                    <p>
                        Sanity to kolejne zaawansowane narzędzie do zarządzania
                        treścią, które oferuje pełną elastyczność i możliwość
                        dostosowania do indywidualnych potrzeb Twojego biznesu.
                        Dzięki Sanity możesz tworzyć dynamiczne strony, które
                        łatwo dopasujesz do zmieniających się wymagań rynku.
                    </p>
                    <h2 className="text-3xl font-bold my-10">
                        Nasz Proces Tworzenia Stron oraz Sklepów
                    </h2>
                    <ul className="list-disc pl-[2rem]">
                        <li>
                            Analiza i Konsultacja: Rozpoczynamy od dogłębnej
                            analizy Twoich potrzeb i celów biznesowych, aby
                            stworzyć strategię dopasowaną do Twoich oczekiwań.
                        </li>
                        <li>
                            Projektowanie: Nasi doświadczeni projektanci tworzą
                            unikalne, atrakcyjne i funkcjonalne makiety stron,
                            które przyciągają uwagę użytkowników.
                        </li>
                        <li>
                            Development: Korzystając z najnowszych technologii,
                            nasi deweloperzy przekształcają projekty w
                            działające strony internetowe, które są szybkie,
                            responsywne i zoptymalizowane pod kątem SEO.
                        </li>
                        <li>
                            Testowanie: Przeprowadzamy dokładne testy, aby
                            upewnić się, że Twoja strona działa bez zarzutu na
                            wszystkich urządzeniach i przeglądarkach.
                        </li>
                        <li>
                            Wdrożenie i Wsparcie: Po wdrożeniu strony, oferujemy
                            wsparcie techniczne i doradztwo, aby zapewnić jej
                            nieprzerwane działanie i dalszy rozwój.
                        </li>
                    </ul>
                    <h2 className="text-3xl font-bold my-10">Dlaczego my?</h2>
                    <ul className="list-disc pl-[2rem]">
                        <li>
                            Doświadczenie i Profesjonalizm: Posiadamy
                            wieloletnie doświadczenie w branży i zrealizowaliśmy
                            setki projektów dla klientów z różnych sektorów.
                        </li>
                        <li>
                            Indywidualne Podejście: Każdy projekt traktujemy
                            indywidualnie, dostosowując rozwiązania do
                            specyficznych potrzeb i celów naszych klientów.
                        </li>
                        <li>
                            Najlepsze Technologie: Korzystamy z najnowszych i
                            sprawdzonych technologii, aby zapewnić najwyższą
                            jakość usług.
                        </li>
                        <li>
                            Zadowolenie Klientów: Satysfakcja naszych klientów
                            jest dla nas priorytetem. Z dumą możemy pochwalić
                            się wieloma pozytywnymi opiniami i referencjami.
                        </li>
                    </ul>
                    <p className="mt-12 text-xl">
                        Skontaktuj się z nami już dziś, aby omówić swoje
                        potrzeby i dowiedzieć się, jak możemy pomóc w rozwoju
                        Twojego biznesu online. Razem stworzymy stronę
                        internetową, która stanie się nie tylko wizytówką Twojej
                        firmy, ale także skutecznym narzędziem marketingowym.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto pb-10 px-4">
                    <CTASection />
                </div>
            </div>
            <div
                className={`${styles.gradient} z-0 absolute top-[20px] right-1/5 lg:right-[100px]`}
            />
        </main>
    );
};

export default WebDevelopmentPage;
