import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
    title: "Webnova - polityka prywatności",
    description:
        "Tworzymy dedykowane strony internetowe, które pomagają naszym klientom maksymalizować zyski oraz realizować cele w ich biznesach",
};

const page: FC = () => {
    const headLineStyle = "text-center font-bold mt-16 mb-4 text-lg";
    return (
        <main className="min-h-screen pt-32 max-w-7xl mx-auto px-8">
            <h1 className="text-center text-4xl font-bold">
                Polityka prywatności
            </h1>
            <section className="pb-16">
                <h2 className={headLineStyle}>§1 Wprowadzenie </h2>
                <p>
                    Webnova dba o ochronę prywatności użytkowników naszej
                    witryny internetowej. Niniejsza Polityka Prywatności
                    opisuje, jakie dane osobowe gromadzimy, w jaki sposób je
                    przetwarzamy i jakie prawa przysługują użytkownikom związane
                    z ich danymi.
                </p>
                <h2 className={headLineStyle}>
                    §2 Rodzaje Danych Gromadzonych{" "}
                </h2>
                <p>
                    Gromadzimy następujące rodzaje danych: Dane kontaktowe
                    (imię, nazwisko, adres e-mail, numer telefonu), które
                    użytkownik dobrowolnie podaje w formularzu kontaktowym. Dane
                    techniczne, takie jak adres IP, informacje o przeglądarce,
                    systemie operacyjnym, itp., zbierane automatycznie w celach
                    statystycznych.
                </p>
                <h2 className={headLineStyle}>
                    §3 Cel i Sposób Przetwarzania Danych
                </h2>
                <p>
                    Dane osobowe użytkowników są przetwarzane w celu udzielenia
                    odpowiedzi na ich zapytania oraz w celach statystycznych i
                    analizy działania strony.
                </p>
                <h2 className={headLineStyle}>
                    §4 Udostępnianie Danych Osobom Trzecim{" "}
                </h2>
                <p>
                    Nie udostępniamy danych osobowych osobom trzecim bez zgody
                    użytkownika, chyba że jest to wymagane przez prawo.
                </p>
                <h2 className={headLineStyle}>§5 Prawa Użytkowników</h2>
                <p>
                    Użytkownicy mają prawo dostępu do swoich danych, ich
                    poprawiania, usunięcia oraz sprzeciwu wobec przetwarzania
                    danych. Aby skorzystać z tych praw, prosimy o kontakt na
                    adres e-mail: [Adres e-mail kontaktowy].
                </p>

                <h2 className={headLineStyle}>§6 Ciasteczka (Cookies)</h2>
                <p>
                    Nasza strona internetowa może korzystać z plików cookie w
                    celu śledzenia zachowań użytkowników i usprawnienia
                    działania strony. Użytkownicy mogą zmienić ustawienia
                    przeglądarki w celu blokowania plików cookie.
                </p>
                <h2 className={headLineStyle}>
                    §7 Zmiany w Polityce Prywatności
                </h2>
                <p>
                    Polityka Prywatności może być okresowo aktualizowana.
                    Prosimy o regularne sprawdzanie jej treści.
                </p>
            </section>
        </main>
    );
};

export default page;
