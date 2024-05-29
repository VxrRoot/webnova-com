import CTASection from "@/src/sections/CTA-section/CTASection";
import { Metadata } from "next";
import styles from "../../src/layouts/GradientBackground.module.css";

export const metadata: Metadata = {
    title: "Google Ads - Skuteczna Reklama w Internecie",
    description:
        "Oferujemy kompleksowe usługi zarządzania kampaniami Google Ads. Zwiększ swoją widoczność online i przyciągnij więcej klientów dzięki naszym skutecznym strategiom reklamowym.",
    keywords:
        "Google Ads, reklama internetowa, kampanie reklamowe, marketing internetowy, reklama PPC, agencja Google Ads, zarządzanie kampaniami",
    authors: [{ name: "Web-Nova", url: "https://web-nova.pl" }],
    robots: {
        follow: true,
        index: true,
    },
    openGraph: {
        title: "Google Ads - Skuteczna Reklama w Internecie",
        description:
            "Oferujemy kompleksowe usługi zarządzania kampaniami Google Ads. Zwiększ swoją widoczność online i przyciągnij więcej klientów dzięki naszym skutecznym strategiom reklamowym.",
        type: "article",
        url: "https://www.web-nova.pl/google-ads",
    },
    alternates: {
        canonical: `https://www.web-nova.pl/google-ads`,
    },
};

const GoogleAdsPage = () => {
    return (
        <main className="min-h-screen">
            <div className="relative z-20">
                <div className="pt-32 pb-20 max-w-5xl mx-auto px-4 lg:px-8">
                    <h1 className="text-4xl font-bold">
                        Optymalizacja SEO - Zwiększ Widoczność Swojej Strony
                    </h1>
                    <p className="mt-12">
                        W dzisiejszym cyfrowym świecie widoczność w
                        wyszukiwarkach internetowych jest kluczowa dla sukcesu
                        każdej firmy. Nasza agencja oferuje kompleksowe usługi
                        optymalizacji SEO, które pomagają zwiększyć widoczność
                        Twojej strony, przyciągnąć więcej ruchu i poprawić
                        wyniki w wyszukiwarkach takich jak Google.
                    </p>
                    <h2 className="text-3xl font-bold my-10">
                        Nasze Usługi SEO
                    </h2>
                    <section>
                        <h3 className="text-2xl font-bold my-8">Audyt SEO</h3>
                        <p>
                            Przeprowadzamy szczegółowy audyt SEO Twojej strony,
                            aby zidentyfikować obszary wymagające poprawy.
                            Analizujemy wszystkie aspekty, takie jak struktura
                            strony, słowa kluczowe, treść, linki wewnętrzne i
                            zewnętrzne oraz wiele innych.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-2xl font-bold my-8">
                            Optymalizacja Strony
                        </h3>
                        <p>
                            Optymalizujemy zawartość Twojej strony, aby była
                            bardziej przyjazna dla wyszukiwarek. Skupiamy się na
                            optymalizacji meta tagów, nagłówków, treści, obrazów
                            oraz szybkości ładowania strony.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-2xl font-bold my-8">
                            Link Building
                        </h3>
                        <p>
                            Budujemy silny profil linków zewnętrznych, aby
                            zwiększyć autorytet Twojej strony. Skupiamy się na
                            pozyskiwaniu wartościowych i relewantnych linków,
                            które poprawiają pozycję w wynikach wyszukiwania.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-2xl font-bold my-8">
                            Badanie Słów Kluczowych
                        </h3>
                        <p>
                            Przeprowadzamy dokładne badania słów kluczowych, aby
                            znaleźć najbardziej efektywne frazy dla Twojej
                            branży. Dzięki temu Twoja strona będzie docierać do
                            odpowiedniej grupy odbiorców.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-2xl font-bold my-8">
                            Content Marketing
                        </h3>
                        <p>
                            Tworzymy wartościowe treści, które przyciągają i
                            angażują użytkowników. Nasze treści są
                            zoptymalizowane pod kątem SEO, co pomaga w
                            zwiększeniu widoczności Twojej strony w
                            wyszukiwarkach.
                        </p>
                    </section>
                    <h2 className="text-3xl font-bold my-10">
                        Co Daje Optymalizacja SEO?
                    </h2>
                    <p>
                        Optymalizacja SEO to proces, który przynosi wiele
                        korzyści dla Twojej strony internetowej i Twojego
                        biznesu. Oto najważniejsze z nich:
                    </p>
                    <ul className="list-disc pl-[2rem]">
                        <li>
                            <strong>Zwiększona Widoczność:</strong> Dzięki
                            wysokim pozycjom w wynikach wyszukiwania, Twoja
                            strona będzie bardziej widoczna dla potencjalnych
                            klientów, co zwiększa szanse na pozyskanie nowych
                            odwiedzających.
                        </li>
                        <li>
                            <strong>Większy Ruch:</strong> Optymalizacja SEO
                            pomaga przyciągnąć większy ruch na Twoją stronę, co
                            może prowadzić do zwiększenia liczby konwersji i
                            sprzedaży.
                        </li>
                        <li>
                            <strong>Lepsze Doświadczenie Użytkownika:</strong>{" "}
                            Poprawa struktury i treści strony, a także szybkości
                            jej ładowania, sprawia, że użytkownicy chętniej
                            spędzają na niej czas i wracają.
                        </li>
                        <li>
                            <strong>Budowanie Zaufania i Wiarygodności:</strong>{" "}
                            Strony, które pojawiają się wysoko w wynikach
                            wyszukiwania, są postrzegane jako bardziej
                            wiarygodne i godne zaufania.
                        </li>
                        <li>
                            <strong>
                                Lepsze Dopasowanie do Potrzeb Klientów:
                            </strong>{" "}
                            Dzięki dokładnym badaniom słów kluczowych, Twoja
                            strona będzie lepiej odpowiadać na zapytania i
                            potrzeby użytkowników.
                        </li>
                        <li>
                            <strong>Długoterminowe Wyniki:</strong> Inwestycja w
                            SEO przynosi korzyści przez długi czas, ponieważ
                            poprawa widoczności i autorytetu strony jest trwała
                            i stabilna.
                        </li>
                    </ul>
                    <p className="mt-12 text-xl">
                        Skontaktuj się z nami już dziś, aby dowiedzieć się, jak
                        możemy pomóc w zwiększeniu widoczności Twojej strony w
                        wyszukiwarkach. Razem osiągniemy sukces w marketingu
                        internetowym i przyciągniemy więcej klientów do Twojej
                        firmy.
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

export default GoogleAdsPage;
