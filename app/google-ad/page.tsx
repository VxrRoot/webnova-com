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
            Reklama w Google Ads - Zwiększ Widoczność Swojej Firmy
          </h1>
          <p className="mt-12">
            W dzisiejszym cyfrowym świecie reklama w Google Ads jest kluczowa
            dla sukcesu każdej firmy. Nasza agencja oferuje kompleksowe usługi w
            zakresie Google Ads, które pomagają zwiększyć widoczność Twojej
            firmy, przyciągnąć więcej ruchu i poprawić wyniki sprzedaży.
          </p>
          <h2 className="text-3xl font-bold my-10">Nasze Usługi Google Ads</h2>
          <section>
            <h3 className="text-2xl font-bold my-8">Audyt Kampanii</h3>
            <p>
              Przeprowadzamy szczegółowy audyt Twoich kampanii Google Ads, aby
              zidentyfikować obszary wymagające poprawy. Analizujemy wszystkie
              aspekty, takie jak struktura kampanii, słowa kluczowe, treści
              reklam i wiele innych.
            </p>
          </section>
          <section>
            <h3 className="text-2xl font-bold my-8">Tworzenie Kampanii</h3>
            <p>
              Tworzymy efektywne kampanie reklamowe, które są dostosowane do
              Twojej branży i celów biznesowych. Skupiamy się na optymalizacji
              treści reklam, wyborze odpowiednich słów kluczowych oraz
              ustawieniach kampanii.
            </p>
          </section>
          <section>
            <h3 className="text-2xl font-bold my-8">Zarządzanie Kampaniami</h3>
            <p>
              Zarządzamy Twoimi kampaniami Google Ads, monitorując ich wydajność
              i wprowadzając niezbędne optymalizacje. Skupiamy się na
              maksymalizacji zwrotu z inwestycji (ROI) oraz efektywności
              kampanii.
            </p>
          </section>
          <section>
            <h3 className="text-2xl font-bold my-8">Remarketing</h3>
            <p>
              Wykorzystujemy remarketing, aby docierać do osób, które już
              odwiedziły Twoją stronę. Tworzymy skuteczne kampanie
              remarketingowe, które zwiększają szanse na konwersje.
            </p>
          </section>
          <section>
            <h3 className="text-2xl font-bold my-8">Analiza i Raportowanie</h3>
            <p>
              Przeprowadzamy dokładne analizy wyników kampanii i dostarczamy
              szczegółowe raporty. Dzięki temu masz pełną kontrolę nad
              wydajnością swoich kampanii Google Ads.
            </p>
          </section>
          <h2 className="text-3xl font-bold my-10">
            Co Daje Reklama w Google Ads?
          </h2>
          <p>
            Reklama w Google Ads przynosi wiele korzyści dla Twojej firmy. Oto
            najważniejsze z nich:
          </p>
          <ul className="list-disc pl-[2rem]">
            <li>
              <strong>Zwiększona Widoczność:</strong> Twoje reklamy pojawiają
              się na szczycie wyników wyszukiwania, co zwiększa widoczność
              Twojej firmy.
            </li>
            <li>
              <strong>Większy Ruch:</strong> Reklamy przyciągają większy ruch na
              Twoją stronę, co może prowadzić do zwiększenia liczby konwersji i
              sprzedaży.
            </li>
            <li>
              <strong>Precyzyjne Targetowanie:</strong> Kampanie Google Ads
              pozwalają na precyzyjne targetowanie odbiorców na podstawie
              lokalizacji, zainteresowań i zachowań.
            </li>
            <li>
              <strong>Kontrola Kosztów:</strong> Płacisz tylko za kliknięcia, co
              pozwala na kontrolowanie budżetu reklamowego.
            </li>
            <li>
              <strong>Natychmiastowe Wyniki:</strong> Kampanie Google Ads mogą
              przynieść natychmiastowe rezultaty w postaci zwiększonego ruchu i
              konwersji.
            </li>
            <li>
              <strong>Elastyczność:</strong> Możliwość łatwej modyfikacji i
              optymalizacji kampanii w trakcie jej trwania.
            </li>
          </ul>
          <p className="mt-12 text-xl">
            Skontaktuj się z nami już dziś, aby dowiedzieć się, jak możemy pomóc
            w zwiększeniu widoczności Twojej firmy dzięki reklamie w Google Ads.
            Razem osiągniemy sukces w marketingu internetowym i przyciągniemy
            więcej klientów do Twojej firmy.
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
