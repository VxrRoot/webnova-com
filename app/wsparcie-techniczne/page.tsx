import CTASection from "@/src/sections/CTA-section/CTASection";
import { Metadata } from "next";
import styles from "../../src/layouts/GradientBackground.module.css";
import React from "react";

export const metadata: Metadata = {
    title: "Wsparcie Techniczne - Kompleksowa Pomoc dla Twojej Strony",
    description:
        "Oferujemy kompleksowe wsparcie techniczne dla stron internetowych i aplikacji. Skorzystaj z naszej pomocy technicznej i zapewnij swojej stronie nieprzerwane działanie i bezpieczeństwo.",
    keywords:
        "wsparcie techniczne, pomoc techniczna, zarządzanie stroną, bezpieczeństwo strony, optymalizacja stron, aktualizacje, monitoring stron, agencja wsparcia technicznego",
    authors: [{ name: "Web-Nova", url: "https://web-nova.pl" }],
    robots: {
        follow: true,
        index: true,
    },
    openGraph: {
        title: "Wsparcie Techniczne - Kompleksowa Pomoc dla Twojej Strony",
        description:
            "Oferujemy kompleksowe wsparcie techniczne dla stron internetowych i aplikacji. Skorzystaj z naszej pomocy technicznej i zapewnij swojej stronie nieprzerwane działanie i bezpieczeństwo.",
        type: "article",
        url: "https://www.web-nova.pl/wsparcie-techniczne",
    },
    alternates: {
        canonical: `https://www.web-nova.pl/wsparcie-techniczne`,
    },
};

const TechSupportPage = () => {
    return (
        <main className="min-h-screen">
            <div className="relative z-20">
                <div className="pt-32 pb-20 max-w-5xl mx-auto px-4 lg:px-8">
                    <h1 className="text-4xl font-bold">
                        Wsparcie Techniczne - Kompleksowa Pomoc dla Twojej
                        Strony
                    </h1>
                    <p className="mt-12">
                        W dzisiejszym dynamicznym świecie, zapewnienie płynnego
                        działania i bezpieczeństwa Twojej strony internetowej
                        jest kluczowe dla sukcesu Twojego biznesu. Nasza agencja
                        oferuje kompleksowe wsparcie techniczne, które
                        gwarantuje, że Twoja strona będzie działać bez zakłóceń,
                        a wszelkie problemy zostaną szybko i efektywnie
                        rozwiązane.
                    </p>
                    <h2 className="text-3xl font-bold my-10">
                        Nasze Usługi Wsparcia Technicznego
                    </h2>
                    <p>
                        Oferujemy szeroki zakres usług wsparcia technicznego,
                        które są dostosowane do indywidualnych potrzeb Twojej
                        firmy. Nasze rozwiązania obejmują:
                    </p>
                    <section>
                        <h3 className="text-2xl font-bold my-8">
                            1. Monitoring Strony
                        </h3>
                        <p>
                            Regularnie monitorujemy Twoją stronę, aby upewnić
                            się, że działa ona płynnie i bez zakłóceń. Wykrywamy
                            i rozwiązujemy problemy zanim wpłyną one na
                            użytkowników.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-2xl font-bold my-8">
                            2. Aktualizacje i Utrzymanie
                        </h3>
                        <p>
                            Dbamy o to, aby Twoja strona była zawsze aktualna i
                            bezpieczna. Regularnie przeprowadzamy aktualizacje
                            systemu, wtyczek oraz innych komponentów.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-2xl font-bold my-8">
                            3. Rozwiązywanie Problemów
                        </h3>
                        <p>
                            Szybko i skutecznie rozwiązujemy wszelkie problemy
                            techniczne, które mogą wystąpić na Twojej stronie.
                            Nasz zespół jest dostępny, aby pomóc Ci w każdej
                            sytuacji.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-2xl font-bold my-8">
                            4. Optymalizacja Wydajności
                        </h3>
                        <p>
                            Optymalizujemy wydajność Twojej strony, aby zapewnić
                            szybkie ładowanie i płynne działanie. Dzięki temu
                            użytkownicy będą zadowoleni, a Twoja strona będzie
                            lepiej oceniana przez wyszukiwarki.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-2xl font-bold my-8">
                            5. Kopie Zapasowe i Odzyskiwanie Danych
                        </h3>
                        <p>
                            Regularnie tworzymy kopie zapasowe Twojej strony,
                            aby zapewnić bezpieczeństwo danych. W razie potrzeby
                            możemy szybko przywrócić Twoją stronę do pełnej
                            funkcjonalności.
                        </p>
                    </section>
                    <h2 className="text-3xl font-bold my-10">
                        Dlaczego Wsparcie Techniczne jest Ważne?
                    </h2>
                    <p>
                        Wsparcie techniczne to nie tylko szybkie reagowanie na
                        problemy, ale przede wszystkim proaktywne działania,
                        które zapobiegają ich występowaniu. Dzięki naszemu
                        wsparciu technicznemu możesz skupić się na rozwijaniu
                        swojego biznesu, a my zajmiemy się resztą.
                    </p>
                    <ul className="list-disc pl-[2rem]">
                        <li>
                            <strong>Nieprzerwane Działanie:</strong> Zapewniamy,
                            że Twoja strona działa bez zakłóceń, co jest
                            kluczowe dla utrzymania zadowolenia użytkowników i
                            klientów.
                        </li>
                        <li>
                            <strong>Bezpieczeństwo:</strong> Regularne
                            aktualizacje i monitorowanie pomagają w ochronie
                            Twojej strony przed zagrożeniami i atakami.
                        </li>
                        <li>
                            <strong>Szybkie Reakcje:</strong> Nasz zespół jest
                            zawsze gotowy do szybkiego działania w razie
                            jakichkolwiek problemów.
                        </li>
                        <li>
                            <strong>Optymalizacja:</strong> Dzięki naszym
                            usługom Twoja strona będzie działać szybciej i
                            bardziej efektywnie, co przekłada się na lepsze
                            doświadczenia użytkowników.
                        </li>
                        <li>
                            <strong>Oszczędność Czasu:</strong> Powierzając nam
                            wsparcie techniczne, oszczędzasz czas i zasoby,
                            które możesz przeznaczyć na rozwijanie swojego
                            biznesu.
                        </li>
                    </ul>
                    <p className="mt-12 text-xl">
                        Skontaktuj się z nami już dziś, aby dowiedzieć się, jak
                        nasze usługi wsparcia technicznego mogą pomóc w
                        utrzymaniu i rozwoju Twojej strony internetowej. Razem
                        zapewnimy jej nieprzerwane i bezpieczne działanie.
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

export default TechSupportPage;
