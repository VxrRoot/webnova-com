import { FC } from "react";
import Image from "next/image";
import PersonImg from "public/images/hero-img.png";
import Button from "@/app/components/buttons/animated-button/AnimatedButton";
import style from "./HeroSection.module.css";

const HeroSection: FC = () => {
  return (
    <section className="my-20 lg:my-28 padding-x">
      <div className="max-w-7xl w-full flex flex-col mx-auto md:flex-row gap-10 ">
        <section className="flex flex-col w-full max-w-lg lg:max-w-2xl gap-4">
          <h1
            className={`font-bold leading-tight lg:leading-tight text-4xl lg:text-5xl  `}
          >
            Nowoczesne strony <br />
            internetowe, <br />
            które pomogą zrealizować Ci zamierzone cele
          </h1>
          <h2 className="my-4">
            Stworzymy dla Ciebie nowoczesną i profesjonalną stronę internetową
            która pozwoli Ci wyrazić swoją markę i dotrzeć do swoich klientów.
            Moje projekty są dopracowane w każdym detalu i dostosowane do Twoich
            potrzeb. Skontaktuj się ze mną już dziś, aby dowiedzieć się, jak
            mogę pomóc Ci wzmocnić Twoją pozycję w internecie i osiągnąć sukces
            online!
          </h2>
          <div className="m-auto md:mx-0">
            <Button value="Skontaktuj się ze mną" />
          </div>
        </section>
        <section className="flex w-full h-full justify-center items-center">
          <div className="w-full max-w-[350px] flex items-center relative">
            <Image
              src={PersonImg}
              alt="Dawid Slowik zdjecie"
              priority={true}
              className="z-10 rounded-t-lg shadow-lg shadow-detailsRed/30 w-full h-full"
            />
            <div
              className={`${style.frame}  bg-white from- via-detailsRed to-background bg-[length:400%_400%] p-0.5 transition bg-gradient-to-r shadow-lg focus:outline-none focus:ring w-full h-full absolute bottom-[-3%] right-[-3%] rotate-180`}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
