import { FC } from "react";

import { Poppins } from "next/font/google";
import ButtonCTA from "./ButtonCTA";

const poppins = Poppins({ weight: ["500"], subsets: ["devanagari"] });

const HeroSection: FC = () => {
    return (
        <section className="py-36 lg:py-40 padding-x min-h-[52rem] relative ">
            <div className="max-w-7xl w-full flex flex-col mx-auto lg:flex-row gap-10 z-20 relative">
                <section className="flex flex-col w-full items-left gap-4 ">
                    <h1
                        className={`font-bold leading-tight lg:mb-6  text-4xl lg:text-7xl text-left  ${poppins.className}`}
                    >
                        Tworzymy wyjątkowe <br />
                        strony internetowe <br />
                    </h1>
                    <h2 className="my-4 text-left max-w-3xl mb-6 lg:text-xl">
                        Z nami osiągniesz sukces online dzięki nowoczesnym
                        rozwiązaniom technologicznym i kreatywnemu podejściu do
                        projektowania. Nasze strony internetowe są estetyczne,
                        responsywne i zoptymalizowane pod SEO, zapewniając
                        wyjątkowe doświadczenie użytkownika, łatwość zarządzania
                        treścią i maksymalną widoczność w sieci.
                    </h2>
                    <div className="lg:m-auto lg:mx-0">
                        <ButtonCTA text="Skontaktuj się z nami" />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default HeroSection;
