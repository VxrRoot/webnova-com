import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
    title: "Webnova - regulamin",
    description:
        "Tworzymy dedykowane strony internetowe, które pomagają naszym klientom maksymalizować zyski oraz realizować cele w ich biznesach",
};

const page: FC = () => {
    const headLineStyle = "text-center font-bold mt-16 mb-4 text-lg";
    return (
        <main className="min-h-screen pt-32 max-w-7xl mx-auto px-8">
            <h1 className="text-center text-4xl font-bold">Regulamin</h1>
            <section className="pb-16">
                <h2 className={headLineStyle}>
                    §1 Warunki Korzystania z Strony
                </h2>
                <p>
                    Korzystając z naszej strony internetowej, użytkownik
                    akceptuje niniejszy regulamin.
                </p>
                <h2 className={headLineStyle}>§2 Zawartość Strony</h2>
                <p>
                    Zawartość strony, w tym teksty, grafiki, zdjęcia i inne
                    materiały, są chronione prawami autorskimi i należą do
                    Agencji [Nazwa Twojej Agencji].
                </p>
                <h2 className={headLineStyle}>§3 Formularz Kontaktowy</h2>
                <p>
                    Użytkownik, korzystając z formularza kontaktowego, zgadza
                    się na przetwarzanie swoich danych osobowych w celu
                    odpowiedzi na jego zapytanie.
                </p>
                <h2 className={headLineStyle}>§4 Odpowiedzialność</h2>
                <p>
                    Agencja [Nazwa Twojej Agencji] nie ponosi odpowiedzialności
                    za ewentualne szkody wynikłe z korzystania z naszej strony
                    internetowej.
                </p>
                <h2 className={headLineStyle}>§5 Zmiany w Regulaminie</h2>
                <p>
                    Regulamin może być okresowo aktualizowany. Użytkownicy
                    zobowiązani są do zapoznawania się z jego treścią.
                </p>
            </section>
        </main>
    );
};

export default page;
