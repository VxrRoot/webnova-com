import BriefImg from "public/images/brief.svg";
import codingImg from "public/images/coding.svg";
import designImg from "public/images/design.svg";
import scrumImg from "public/images/Scrum-board.svg";
import webStartImg from "public/images/web-start.svg";

export type workflowItem = { title: string; desc: string; img: any };

export const workflowSteps: workflowItem[] = [
    {
        title: "Skontaktuj się i wypełnij otrzymany brief",
        desc: "Jeśli jesteś gotowy, aby rozpocząć przygodę z projektowaniem swojej strony internetowej, pierwszym krokiem jest nawiązanie kontaktu z nami. Dzięki wypełnieniu briefu zapewnisz nam wszystkie niezbędne informacje, które pomogą zrozumieć Twoje potrzeby i oczekiwania względem przyszłej strony.",
        img: BriefImg,
    },
    {
        title: "Planowanie Projektu",
        desc: "Etap planowania projektu jest kluczowym momentem w procesie tworzenia strony internetowej. To tutaj określamy cele, zakres pracy, harmonogram oraz wszelkie wymagania techniczne i funkcjonalne, które będą kierować dalszymi działaniami. Naszym celem jest zapewnienie, że każdy aspekt projektu jest dokładnie przemyślany i zgodny z Twoimi oczekiwaniami oraz potrzebami biznesowymi.",
        img: scrumImg,
    },
    {
        title: "Projekt Graficzny",
        desc: "Jest to moment, w którym Twoja wizja zaczyna przybierać konkretną formę. Nasz zespół projektowy skupia się na tworzeniu spójnego i estetycznie przyciągającego designu, który nie tylko odpowiada na potrzeby Twojej marki, ale również zapewnia doskonałe doświadczenia dla użytkowników",
        img: designImg,
    },
    {
        title: "Rozwój i Testowanie",
        desc: "Etap rozwoju to czas, kiedy nasz zespół deweloperski wciela w życie zatwierdzony projekt graficzny, kodując i implementując wszystkie funkcjonalności strony. Równie w tym momencie zostanie udostępionny projekt live do którego będziemy mogli zaimplementować Twoje uwagi oraz poprawki. Każdy element strony jest dokładnie testowany pod kątem funkcjonalności, responsywności i optymalizacji pod wyszukiwarki internetowe, aby upewnić się, że strona jest gotowa na uruchomienie.",
        img: codingImg,
    },
    {
        title: "Uruchomienie Projektu",
        desc: "Uruchomienie strony to ekscytujący moment, kiedy Twoja strona staje się dostępna dla użytkowników na całym świecie. To jednak nie koniec naszej pracy. Upewniamy się, że wszystkie elementy są na swoim miejscu, testujemy działanie na różnych urządzeniach i przeglądarkach, oraz konfigurujemy ostatnie ustawienia serwera.",
        img: webStartImg,
    },
];
