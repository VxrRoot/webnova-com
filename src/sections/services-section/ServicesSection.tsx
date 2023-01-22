import SectionHeadline from "@/app/components/headlines/SectionHeadline";
import React from "react";
import styles from "./ServicesSection.module.css";
import SingleService from "./elements/SingleService";
import SupportImg from "../../assets/support.jpg";
import WbCreator from "../../assets/wbcreator.jpg";
import WbCreate from "../../assets/wbcreate.jpg";

const services = [
    {
        title: "Strony internetowe",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        icon: WbCreator,
        altText: "Tworzenie stron internetowych",
    },
    {
        title: "Optymalizacja SEO",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        icon: WbCreate,
        altText: "Optymalizacja SEO",
    },
    {
        title: "Wspracie techniczne",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        icon: SupportImg,
        altText: "Wsparcie Techniczne",
    },
];

const ServicesSection = () => {
    return (
        <section
            className={`min-w-full h-full relative flex items-center justify-center overflow-hidden`}
        >
            <div className={styles.gradient} />
            <div className="z-10 bg-black/50 w-full h-full">
                <section className="w-full max-w-7xl m-auto my-20 padding-x">
                    <SectionHeadline text="Co mogę dla Ciebie zrobić?" />
                    <div className="flex flex-col md:flex-row items-center gap-5 pt-10">
                        {services.map((service, index) => (
                            <SingleService
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                altText={service.altText}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ServicesSection;
