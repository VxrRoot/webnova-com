import SectionHeadline from "@/app/components/headlines/SectionHeadline";
import React from "react";
import styles from "./ServicesSection.module.css";
import SingleService from "./elements/SingleService";
import SupportImg from "public/images/support.jpg";
import WbCreator from "public/images/wbcreator.jpg";
import WbCreate from "public/images/wbcreate.jpg";
import GradientBackgroundLayout from "@/src/layouts/GradientBackground";

const services = [
    {
        title: "Strony internetowe",
        description:
            "Wyobraź sobie, że Twoja firma jest jak książka – Twoja witryna internetowa jest jej okładką, a my jesteśmy mistrzami księgarskiego kunsztu, gotowi tworzyć dla Ciebie tę niezapomnianą okładkę. Nasza usługa tworzenia stron internetowych to magiczna kraina, gdzie kod i design splatają się w fascynującą opowieść o Twojej marce.",
        icon: WbCreator,
        altText: "Tworzenie stron internetowych",
    },
    {
        title: "Optymalizacja SEO",
        description:
            "Nasza usługa SEO to klucz do sukcesu online. Optymalizujemy witryny, by były widoczne w wynikach wyszukiwania, przyciągając organiczny ruch i potencjalnych klientów. Zwiększ widoczność i osiągnij wyższe pozycje w Google z naszą ekspertycją SEO.",
        icon: WbCreate,
        altText: "Optymalizacja SEO",
    },
    {
        title: "Wspracie techniczne",
        description:
            "Nasza usługa wsparcia technicznego jest twoim niezawodnym partnerem w rozwiązywaniu problemów technicznych. Zapewniamy szybką pomoc, rozwiązywanie awarii i pytania techniczne, aby Twoja firma mogła działać płynnie.",
        icon: SupportImg,
        altText: "Wsparcie Techniczne",
    },
];

const ServicesSection = () => {
    return (
        <GradientBackgroundLayout>
            <section className="w-full max-w-7xl m-auto my-20 padding-x">
                <SectionHeadline text="Nasze usługi" />
                <div className="grid grid-cols-1 flex-col md:grid-cols-2 lg:grid-cols-3 items-center gap-5 pt-10">
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
        </GradientBackgroundLayout>
    );
};

export default ServicesSection;
