import { FC } from "react";
import Image from "next/image";
import PersonImg from "public/images/hero-img.png";
import style from "./HeroSection.module.css";
import ButtonCTA from "./ButtonCTA";
import AnimatedBackground from "@/app/components/background/AnimatedBackground";

const HeroSection: FC = () => {
    return (
        <section className="py-36 lg:py-28 padding-x overflow-hidden relative">
            <div className="max-w-7xl w-full flex flex-col mx-auto lg:flex-row gap-10 ">
                <section className="flex flex-col w-full z-10 lg:max-w-2xl gap-4 ">
                    <h1
                        className={`font-bold leading-tight max-w-lg lg:m-0 m-auto lg:max-w-none lg:leading-tight text-4xl lg:text-5xl text-center lg:text-left`}
                    >
                        Nowoczesne strony <br />
                        internetowe, <br />
                        które pomogą zrealizować Ci zamierzone cele
                    </h1>
                    <h2 className="my-4 text-center lg:text-left max-w-lg lg:m-0 m-auto lg:max-w-none">
                        Stworzymy dla Ciebie nowoczesną i profesjonalną stronę
                        internetową która pozwoli Ci wyrazić swoją markę i
                        dotrzeć do swoich klientów. Nasze projekty są
                        dopracowane w każdym detalu i dostosowane do Twoich
                        potrzeb. Jesteśmy ekspertami w dziedzinie projektowania
                        i rozwijania witryn internetowych, które przyciągają
                        uwagę, generują ruch i zwiększają konwersje. Zaufało nam
                        już wielu klientów, dlaczego nie miałbyś dołączyć do
                        nich?
                    </h2>
                    <div className="m-auto lg:mx-0">
                        <ButtonCTA />
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
            <AnimatedBackground />
        </section>
    );
};

export default HeroSection;
