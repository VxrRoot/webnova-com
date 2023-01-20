import { FC } from "react";
import Image from "next/image";
import PersonImg from "../assets/dawid-hr.png";
import Button from "@/app/components/buttons/animated-button/AnimatedButton";

const HeroSection: FC = () => {
    return (
        <section className="my-28 padding-x">
            <div className="max-w-7xl w-full flex flex-col mx-auto md:flex-row gap-10 ">
                <section className="flex flex-col w-full gap-4">
                    <h1
                        className={`font-bold text-4xl lg:text-5xl leading-snug max-w-lg`}
                    >
                        Cześć, <br />
                        Jestem Dawid. <br />
                        Stworzę dla Ciebie stronę internetową której
                        potrzebujesz
                    </h1>
                    <div className="m-auto md:mx-0">
                        <Button value="Skontaktuj się ze mną" />
                    </div>
                </section>
                <section className="flex w-full h-full justify-center  items-center">
                    <div className="w-full max-w-[350px] flex items-center ">
                        <Image
                            src={PersonImg}
                            alt="Dawid Slowik zdjecie"
                            layout="responsive"
                            priority={true}
                            className="z-10 rounded-t-lg shadow-lg shadow-detailsRed/30"
                        />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default HeroSection;
