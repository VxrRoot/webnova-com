import SectionHeadline from "@/src/components/headlines/SectionHeadline";
import SvgCMS from "@/src/components/icons/SvgCMS";
import SvgDesign from "@/src/components/icons/SvgDesign";
import SvgDevelop from "@/src/components/icons/SvgDevelop";
import SvgGoogle from "@/src/components/icons/SvgGoogle";
import SvgSeo from "@/src/components/icons/SvgSeo";
import SvgSupport from "@/src/components/icons/SvgSupport";
import SingleService from "./elements/SingleService";

const services = [
  {
    title: "Strony internetowe",
    description:
      "Projektujemy nowoczesne strony internetowe, funkcjonalne sklepy online i innowacyjne aplikacje mobilne. Nasze usługi obejmują kompleksowy proces od koncepcji, przez design, aż po wdrożenie i optymalizację. Zapewniamy atrakcyjny wygląd, intuicyjną nawigację i pełną responsywność, aby spełnić oczekiwania użytkowników i zwiększyć efektywność Twojego biznesu w internecie.",
    icon: <SvgDevelop />,
    altText: "Tworzenie stron internetowych",
    link: "/strony-internetowe",
  },
  {
    title: "UI / UX Design",
    description:
      "Tworzymy intuicyjne i atrakcyjne interfejsy użytkownika (UI), które zapewniają wyjątkowe doświadczenia użytkownika (UX). Nasze projekty łączą estetykę z funkcjonalnością, aby Twoja strona była nie tylko piękna, ale także łatwa w nawigacji i przyjazna dla użytkowników. Dbamy o każdy detal, aby zwiększyć zaangażowanie i satysfakcję odwiedzających.",
    icon: <SvgDesign />,
    altText: "Tworzenie stron internetowych",
    link: "/ui-ux-design",
  },
  {
    title: "Optymalizacja SEO",
    description:
      "Nasza usługa SEO to klucz do sukcesu online. Optymalizujemy witryny, by były widoczne w wynikach wyszukiwania, przyciągając organiczny ruch i potencjalnych klientów. Zwiększ widoczność i osiągnij wyższe pozycje w Google z naszą ekspertycją SEO.",
    icon: <SvgSeo />,
    altText: "Optymalizacja SEO",
    link: "/optymalizacja-seo",
  },
  {
    title: "Wspracie techniczne",
    description:
      "Nasza usługa wsparcia technicznego jest twoim niezawodnym partnerem w rozwiązywaniu problemów technicznych. Zapewniamy szybką pomoc, rozwiązywanie awarii i pytania techniczne, aby Twoja firma mogła działać płynnie.",
    icon: <SvgSupport />,
    altText: "Wsparcie Techniczne",
    link: "/wsparcie-techniczne",
  },
  {
    title: "Systemy zarządzania treścią",
    description:
      "Oferujemy kompleksowe zarządzanie treścią na stronie za pomocą systemów CMS, takich jak WordPress, Sanity, czy Strapi. Tworzymy bardzo prosty i intuicyjny system który pozwala edytować treści na Twojej stronie internetowej w bardzo łatwy i przyjemny sposób.",
    icon: <SvgCMS />,
    altText: "Zarządzanie treścią",
    link: "/zarzadzanie-trescia",
  },
  {
    title: "Google Ads",
    description:
      "Oferujemy kompleksowe zarządzanie kampaniami Google Ads, aby skutecznie zwiększyć widoczność Twojej firmy w internecie. Tworzymy, optymalizujemy i monitorujemy reklamy, zapewniając maksymalny zwrot z inwestycji i docierając do odpowiednich odbiorców w odpowiednim czasie.",
    icon: <SvgGoogle />,
    altText: "Reklamy Google",
    link: "/google-ad",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full max-w-7xl m-auto my-20 padding-x relative z-20 ">
      <SectionHeadline text="W czym możemy Ci pomóc" />
      <div className="grid grid-cols-1 flex-col md:grid-cols-2 lg:grid-cols-3 items-center gap-6 pt-10">
        {services.map((service, index) => (
          <SingleService
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            altText={service.altText}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
