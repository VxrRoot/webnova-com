import { FC } from "react";
import MikolajulikowskiImg from "public/images/mikolajulikowski.jpg";
import MediumImg from "public/images/medium.jpg";
import SectionHeadline from "@/app/components/headlines/SectionHeadline";
import SingleRealization from "./elements/SingleRealization";

const realizations = [
    {
        title: "mikolajulikowski.pl",
        description:
            "Strona stworzona dla Mikołaja. Celem strony jest zbieranie kontaktów do klientów. Strona została stworzona w oparciu o Next.js. Strona pomaga Mikołajowi zdobywać więcej klientów.",
        img: MikolajulikowskiImg,
        altText: "Mikolajulikowski.pl",
    },
    {
        title: "medium.com",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: MediumImg,
        altText: "medium.com",
    },
    {
        title: "facebook.com",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: MikolajulikowskiImg,
        altText: "Mikolajulikowski.pl",
    },
    {
        title: "facebook.com",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: MikolajulikowskiImg,
        altText: "Mikolajulikowski.pl",
    },
];

interface IRealizationsSection {}

const RealizationsSection: FC<IRealizationsSection> = () => {
    return (
        <div className="padding-x bg-backgroundDark">
            <section className="max-w-7xl w-full m-auto py-20 ">
                <SectionHeadline text="Sprawdź moje realizacje" />
                <div className="grid grid-cols-1 pt-9 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {realizations.map(
                        ({ altText, description, img, title }, idx) => (
                            <SingleRealization
                                altText={altText}
                                description={description}
                                img={img}
                                title={title}
                                key={idx}
                            />
                        )
                    )}
                </div>
            </section>
        </div>
    );
};

export default RealizationsSection;
