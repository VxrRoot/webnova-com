import { FC } from "react";
import MikolajulikowskiImg from "public/images/mikolajulikowski.jpg";
import RckartImg from "public/images/rckart-case.webp";
import TattooflowImg from "public/images/tattooflow.png";
import SectionHeadline from "@/src/components/headlines/SectionHeadline";
import HarmoniaImg from "public/images/harmoniaconsult.jpg";
import SingleRealization from "./elements/SingleRealization";

const realizations = [
    {
        title: "mikolajulikowski.pl",
        description:
            "Strona internetowa stworzona dla Mikołaja została zaprojektowana z myślą o efektywnym zbieraniu kontaktów do potencjalnych klientów. Głównym celem tego projektu jest wsparcie Mikołaja w rozszerzaniu jego bazy klientów oraz zwiększanie jego zasięgu. Strona została zbudowana przy użyciu nowoczesnej technologii Next.js, co zapewnia jej wyjątkową szybkość i wydajność. Dzięki zoptymalizowanej architekturze i responsywnemu designowi, użytkownicy mogą łatwo nawigować i szybko odnaleźć interesujące ich informacje, co sprzyja generowaniu nowych leadów. Funkcjonalność strony, połączona z jej estetycznym wyglądem, nie tylko pomaga Mikołajowi zdobywać więcej klientów, ale również wzmacnia jego profesjonalny wizerunek w oczach odwiedzających",
        img: MikolajulikowskiImg,
        altText: "mikolajulikowski.pl",
        link: "https://www.mikolajulikowski.pl/",
    },
    {
        title: "tattooflow.pl",
        description:
            "Strona internetowa stworzona dla agencji marketingowej specjalizującej się w usługach dla studiów tatuażu stanowi kluczowe narzędzie wspierające rozwój ich biznesu. Dzięki naszej współpracy, właściciele agencji mogą profesjonalnie zaprezentować swoją ofertę online, zwiększając swoją widoczność. Strona jest zaprojektowana tak, aby przyciągać i konwertować potencjalnych klientów, ułatwiając zbieranie kontaktów. Intuicyjny interfejs zapewnia łatwą nawigację i buduje zaufanie, podkreślając profesjonalizm agencji. Zoptymalizowana pod kątem SEO, strona pomaga w pozycjonowaniu wysoko w wynikach wyszukiwania, co przyciąga więcej odwiedzających i wspiera sukces klientów agencji",
        img: TattooflowImg,
        altText: "tattooflow.com",
        link: "https://tattooflow.pl/",
    },
    {
        title: "harmoniaconsult.pl",
        description:
            "Strona internetowa harmoniaconsult.pl została starannie zaprojektowana, aby skutecznie wspierać zbieranie kontaktów oraz dzielenie się wiedzą za pośrednictwem bogatego bloga. Intuicyjny interfejs użytkownika zapewnia łatwą nawigację, umożliwiając odwiedzającym szybkie odnalezienie potrzebnych informacji i natychmiastowy dostęp do formularza kontaktowego. Ta funkcjonalność nie tylko buduje zaufanie, ale również podkreśla profesjonalizm firmy, ukazując ją jako wiarygodnego partnera biznesowego. Strona stanowi kompleksowe narzędzie wspierające rozwój relacji z klientami oraz promowanie eksperckiej wiedzy w branży",
        img: HarmoniaImg,
        altText: "harmoniaconsult.pl",
        link: "https://www.harmoniaconsult.pl/",
    },
    {
        title: "rckart.pl",
        description:
            "Strona internetowa RcKart została stworzona z myślą o profesjonalnym zaprezentowaniu oferty firmy oraz umożliwieniu łatwego kontaktu dla klientów zainteresowanych usługami. W procesie tworzenia wykorzystaliśmy nowoczesne technologie, takie jak NextJS, który zapewnia doskonałą optymalizację szybkości ładowania strony, oraz SanityCMS, który umożliwia intuicyjną i bezproblemową edycję treści.",
        altText: "rckart.pl",
        img: RckartImg,
        link: "https://www.rckart.pl",
    },
];

interface IRealizationsSection {}

const RealizationsSection: FC<IRealizationsSection> = () => {
    return (
        <div className="padding-x  relative z-20">
            <section className="max-w-7xl w-full m-auto py-20 ">
                <SectionHeadline text="Sprawdź nasze realizacje" />
                <div className="grid grid-cols-1 pt-9 gap-8">
                    {realizations.map(
                        ({ altText, description, img, title, link }, idx) => (
                            <SingleRealization
                                altText={altText}
                                description={description}
                                img={img}
                                title={title}
                                key={idx}
                                link={link}
                            />
                        )
                    )}
                </div>
            </section>
        </div>
    );
};

export default RealizationsSection;
