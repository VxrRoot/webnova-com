import { FC } from "react";
import MikolajulikowskiImg from "public/images/mikolajulikowski.jpg";
import TattooflowImg from "public/images/tattooflow.png";
import SectionHeadline from "@/src/components/headlines/SectionHeadline";
import HarmoniaImg from "public/images/harmoniaconsult.jpg";
import SingleRealization from "./elements/SingleRealization";

const realizations = [
    {
        title: "mikolajulikowski.pl",
        description:
            "Strona stworzona dla Mikołaja. Celem strony jest zbieranie kontaktów do klientów. Strona została stworzona w oparciu o Next.js. Strona pomaga Mikołajowi zdobywać więcej klientów.",
        img: MikolajulikowskiImg,
        altText: "mikolajulikowski.pl",
        link: "https://www.mikolajulikowski.pl/",
    },
    {
        title: "tattooflow.pl",
        description:
            "Strona internetowa stworzona dla agencji marketingowej tworzącej usługi dla studiów tatuaży. Dzięki naszej współpracy właściciele agencji mogą przedstawić swoją ofertę w internecie oraz zbierają kontakty do potencjalnych klientów",
        img: TattooflowImg,
        altText: "tattooflow.com",
        link: "https://tattooflow.pl/",
    },
    {
        title: "harmoniaconsult.pl",
        description:
            "Strona harmoniaconsult.pl to klucz do zbierania kontaktów i dzielenia się wiedzą przez blog. Intuicyjna, z łatwym dostępem do formularza, buduje zaufanie, podkreślając profesjonalizm",
        img: HarmoniaImg,
        altText: "harmoniaconsult.pl",
        link: "https://www.harmoniaconsult.pl/",
    },
];

interface IRealizationsSection {}

const RealizationsSection: FC<IRealizationsSection> = () => {
    return (
        <div className="padding-x bg-backgroundDark">
            <section className="max-w-7xl w-full m-auto py-20 ">
                <SectionHeadline text="Sprawdź nasze realizacje" />
                <div className="grid grid-cols-1 pt-9 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
