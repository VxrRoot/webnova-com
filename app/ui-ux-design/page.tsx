import CTASection from "@/src/sections/CTA-section/CTASection";
import { Metadata } from "next";
import React from "react";
import styles from "../../src/layouts/GradientBackground.module.css";

export const metadata: Metadata = {
    title: "UI/UX Design - Kreujemy Niezapomniane Doświadczenia",
    description:
        "Oferujemy profesjonalne usługi UI/UX design. Tworzymy intuicyjne i atrakcyjne interfejsy, które zapewniają doskonałe doświadczenia użytkowników. Zwiększ efektywność swojej strony lub aplikacji dzięki naszym ekspertom.",
    keywords:
        "UI design, UX design, projektowanie interfejsów, doświadczenie użytkownika, agencja UI/UX, profesjonalne projektowanie, optymalizacja UX",
    authors: [{ name: "Web-Nova", url: "https://web-nova.pl" }],
    robots: {
        follow: true,
        index: true,
    },
    openGraph: {
        title: "UI/UX Design - Kreujemy Niezapomniane Doświadczenia",
        description:
            "Oferujemy profesjonalne usługi UI/UX design. Tworzymy intuicyjne i atrakcyjne interfejsy, które zapewniają doskonałe doświadczenia użytkowników. Zwiększ efektywność swojej strony lub aplikacji dzięki naszym ekspertom.",
        type: "article",
        url: "https://www.web-nova.pl/ui-ux-design",
    },
    alternates: {
        canonical: `https://www.web-nova.pl/ui-ux-design`,
    },
};

const UIUXDesignPage = () => {
    return (
        <main className="min-h-screen">
            <div className="relative z-20">
                <div className="pt-32 pb-20 max-w-5xl mx-auto px-4 lg:px-8">
                    <h1 className="text-4xl font-bold">
                        UI/UX Design - Kreujemy Niezapomniane Doświadczenia
                    </h1>
                    <p className="mt-12">
                        W dzisiejszym cyfrowym świecie doskonałe doświadczenie
                        użytkownika (UX) i atrakcyjny interfejs użytkownika (UI)
                        są kluczowe dla sukcesu każdej strony internetowej i
                        aplikacji. Nasza agencja oferuje kompleksowe usługi
                        UI/UX design, które pomagają tworzyć intuicyjne i
                        wizualnie przyciągające produkty cyfrowe. Nasze projekty
                        nie tylko wyglądają świetnie, ale również działają
                        płynnie i są łatwe w obsłudze.
                    </p>
                    <h2 className="text-3xl font-bold my-10">
                        Nasze Usługi UI/UX Design
                    </h2>
                    <h3 className="text-2xl font-bold my-8">
                        1. Analiza i Badania Użytkowników
                    </h3>
                    <p>
                        Zrozumienie potrzeb i zachowań użytkowników jest
                        podstawą skutecznego projektowania UX. Przeprowadzamy
                        dogłębne analizy i badania użytkowników, aby tworzyć
                        projekty, które spełniają ich oczekiwania i potrzeby.
                    </p>
                    <h3 className="text-2xl font-bold my-8">
                        2. Tworzenie Prototypów i Makiet
                    </h3>
                    <p>
                        Wykorzystujemy nowoczesne narzędzia do tworzenia
                        interaktywnych prototypów i makiet. Pozwala to na
                        wczesne testowanie i udoskonalanie interfejsów, zanim
                        przejdziemy do finalnego etapu projektowania.
                    </p>
                    <h3 className="text-2xl font-bold my-8">
                        3. Projektowanie Interfejsów (UI)
                    </h3>
                    <p>
                        Nasi projektanci tworzą atrakcyjne i spójne wizualnie
                        interfejsy, które są zgodne z najnowszymi trendami i
                        najlepszymi praktykami w zakresie designu. Dbamy o każdy
                        detal, aby zapewnić estetyczny wygląd i intuicyjną
                        obsługę.
                    </p>
                    <h3 className="text-2xl font-bold my-8">
                        4. Optymalizacja Doświadczenia Użytkownika (UX)
                    </h3>
                    <p>
                        Nasze projekty UX koncentrują się na zapewnieniu
                        użytkownikom jak najlepszych doświadczeń. Optymalizujemy
                        każdy aspekt interakcji z produktem, aby użytkownicy
                        chętnie do niego wracali i polecali innym.
                    </p>
                    <h3 className="text-2xl font-bold my-8">
                        5. Testy Użyteczności
                    </h3>
                    <p>
                        Przeprowadzamy testy użyteczności, aby upewnić się, że
                        nasze projekty są intuicyjne i łatwe w użyciu. Feedback
                        od rzeczywistych użytkowników pozwala nam na
                        wprowadzenie ostatnich poprawek i udoskonaleń.
                    </p>
                    <h2 className="text-3xl font-bold my-10">
                        Dlaczego Warto Wybrać Nas?
                    </h2>
                    <ul className="list-disc pl-[2rem]">
                        <li>
                            Doświadczenie i Profesjonalizm: Nasz zespół składa
                            się z doświadczonych projektantów, którzy
                            realizowali projekty dla firm z różnych branż.
                        </li>
                        <li>
                            Indywidualne Podejście: Każdy projekt traktujemy
                            indywidualnie, dostosowując nasze rozwiązania do
                            specyficznych potrzeb i celów naszych klientów.
                        </li>
                        <li>
                            Najnowsze Technologie: Korzystamy z najnowszych
                            narzędzi i metod projektowania, aby zapewnić
                            najwyższą jakość naszych usług.
                        </li>
                        <li>
                            Zadowolenie Klientów: Satysfakcja naszych klientów
                            jest dla nas priorytetem. Z dumą możemy pochwalić
                            się wieloma pozytywnymi opiniami i referencjami.
                        </li>
                    </ul>
                    <p className="mt-12 text-xl">
                        Skontaktuj się z nami już dziś, aby omówić swoje
                        potrzeby i dowiedzieć się, jak możemy pomóc w stworzeniu
                        intuicyjnego i atrakcyjnego interfejsu użytkownika dla
                        Twojej strony lub aplikacji. Razem z nami zrealizujesz
                        projekt, który wyróżni się na rynku i zapewni doskonałe
                        doświadczenia użytkownikom.
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

export default UIUXDesignPage;
