// @ts-nocheck
"use client";
import ContainerLayout from "@/src/layouts/ContainerLayout";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import HarmoniaImg from "public/images/harmoniaconsult.webp";
import MikolajulikowskiImg from "public/images/mikolajulikowski.webp";
import RckartImg from "public/images/rckart-case.webp";
import TattooflowImg from "public/images/tattooflow.webp";
import { FC } from "react";
import Slider from "react-slick";

const realizations = [
    {
        title: "mikolajulikowski.pl",
        description:
            "Strona internetowa stworzona dla Mikołaja została zaprojektowana z myślą o efektywnym zbieraniu kontaktów do potencjalnych klientów. Głównym celem tego projektu jest wsparcie Mikołaja w rozszerzaniu jego bazy klientów oraz zwiększanie jego zasięgu. Strona została zbudowana przy użyciu nowoczesnej technologii Next.js, co zapewnia jej wyjątkową szybkość i wydajność. Dzięki zoptymalizowanej architekturze i responsywnemu designowi, użytkownicy mogą łatwo nawigować i szybko odnaleźć interesujące ich informacje, co sprzyja generowaniu nowych leadów. Funkcjonalność strony, połączona z jej estetycznym wyglądem, nie tylko pomaga Mikołajowi zdobywać więcej klientów, ale również wzmacnia jego profesjonalny wizerunek w oczach odwiedzających",
        img: MikolajulikowskiImg,
        altText: "mikolajulikowski.pl",
        link: "https://www.mikolajulikowski.pl/",
        stack: ["NextJS", "TailwindCSS"],
    },
    {
        title: "tattooflow.pl",
        description:
            "Strona internetowa stworzona dla agencji marketingowej specjalizującej się w usługach dla studiów tatuażu stanowi kluczowe narzędzie wspierające rozwój ich biznesu. Dzięki naszej współpracy, właściciele agencji mogą profesjonalnie zaprezentować swoją ofertę online, zwiększając swoją widoczność. Strona jest zaprojektowana tak, aby przyciągać i konwertować potencjalnych klientów, ułatwiając zbieranie kontaktów. Intuicyjny interfejs zapewnia łatwą nawigację i buduje zaufanie, podkreślając profesjonalizm agencji. Zoptymalizowana pod kątem SEO, strona pomaga w pozycjonowaniu wysoko w wynikach wyszukiwania, co przyciąga więcej odwiedzających i wspiera sukces klientów agencji",
        img: TattooflowImg,
        altText: "tattooflow.com",
        link: "https://tattooflow.pl/",
        stack: ["NextJS", "TailwindCSS"],
    },
    {
        title: "harmoniaconsult.pl",
        description:
            "Strona internetowa harmoniaconsult.pl została starannie zaprojektowana, aby skutecznie wspierać zbieranie kontaktów oraz dzielenie się wiedzą za pośrednictwem bogatego bloga. Intuicyjny interfejs użytkownika zapewnia łatwą nawigację, umożliwiając odwiedzającym szybkie odnalezienie potrzebnych informacji i natychmiastowy dostęp do formularza kontaktowego. Ta funkcjonalność nie tylko buduje zaufanie, ale również podkreśla profesjonalizm firmy, ukazując ją jako wiarygodnego partnera biznesowego. Strona stanowi kompleksowe narzędzie wspierające rozwój relacji z klientami oraz promowanie eksperckiej wiedzy w branży",
        img: HarmoniaImg,
        altText: "harmoniaconsult.pl",
        link: "https://www.harmoniaconsult.pl/",
        stack: ["NextJS", "TailwindCSS"],
    },
    {
        title: "rckart.pl",
        description:
            "Strona internetowa RcKart została stworzona z myślą o profesjonalnym zaprezentowaniu oferty firmy oraz umożliwieniu łatwego kontaktu dla klientów zainteresowanych usługami. W procesie tworzenia wykorzystaliśmy nowoczesne technologie, takie jak NextJS, który zapewnia doskonałą optymalizację szybkości ładowania strony, oraz SanityCMS, który umożliwia intuicyjną i bezproblemową edycję treści.",
        altText: "rckart.pl",
        img: RckartImg,
        link: "https://www.rckart.pl",
        stack: ["NextJS", "TailwindCSS"],
    },
];

const RealizationsSection: FC = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        appendDots: (dots: any) => (
            <div className="!m-0 !p-0 ">
                <ul className="slick-dots  !flex justify-center  [&>li]:!block">
                    {dots}
                </ul>
            </div>
        ),
        dotsClass: "slick-dots w-full slick-thumb",
        responsive: [
            {
                breakpoint: 560,
                settings: {
                    arrows: false,
                },
            },
        ],
    };
    return (
        <section className="py-20">
            <ContainerLayout>
                <div className="max-w-5xl mx-auto  md:px-10">
                    <Slider {...settings} className="md:px-4 ">
                        {realizations.map((item) => (
                            <div className="rounded-2xl relative group overflow-hidden h-full">
                                <Image
                                    alt={item.altText}
                                    src={item.img}
                                    className=" group-hover:brightness-50 transition scale-[1.02] group-hover:scale-105"
                                />
                                <div className="opacity-0 flex flex-col justify-end gap-8 p-4 md:p-10 w-full h-full absolute top-0 left-0 bg-black/50 group-hover:opacity-100">
                                    <a
                                        className="text-2xl flex gap-2 "
                                        target="_blank"
                                        href={item.link}
                                    >
                                        {item.title} <ExternalLink />
                                    </a>
                                    <p className="text-base max-sm:hidden">
                                        {item.description}
                                    </p>
                                    <div className="flex gap-4">
                                        {item.stack.map((item) => (
                                            <div className="bg-slate-300/70 py-2 px-4 text-xs rounded-2xl">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </ContainerLayout>
        </section>
    );
};

export default RealizationsSection;
