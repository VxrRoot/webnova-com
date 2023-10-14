import { FC } from "react";
import MikolajulikowskiImg from "public/images/mikolajulikowski.jpg";
import TattooflowImg from "public/images/tattooflow.png";
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
    link: "https://www.mikolajulikowski.pl/",
  },
  {
    title: "tattooflow.pl",
    description:
      "Strona internetowa stworzona dla agencji marketingowej tworzącej usługi dla studiów tatuaży. Dzięki naszej współpracy właściciele agencji mogą przedstawić swoją ofertę w internecie oraz zbierają kontakty do potencjalnych klientów",
    img: TattooflowImg,
    altText: "medium.com",
    link: "https://tattooflow.pl/",
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
