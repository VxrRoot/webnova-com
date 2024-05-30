import GradientBackgroundLayout from "@/src/layouts/GradientBackground";
import ContactSection from "@/src/sections/contact-section/ContactSection";
import HeroSection from "@/src/sections/hero-section/HeroSection";
import OpinionSection from "@/src/sections/opinion-section/OpinionSection";
import RealizationsSection from "@/src/sections/realizations-section/RealizationsSection";
import ServicesSection from "@/src/sections/services-section/ServicesSection";
import Workflow from "@/src/sections/workflow-section/Workflow";
import { Metadata } from "next";
import SectionHeadline from "../src/components/headlines/SectionHeadline";
import styles from "../src/layouts/GradientBackground.module.css";

export const metadata: Metadata = {
    title: "Webnova - stron oraz aplikacje internetowe dostosowane do Twoich potrzeb",
    description:
        "Tworzymy dedykowane strony internetowe, które pomagają naszym klientom maksymalizować zyski oraz realizować cele w ich biznesach",
    alternates: {
        canonical: `https://www.web-nova.pl/`,
    },
};

export default function Home() {
    return (
        <main className="w-full">
            <HeroSection />
            <ServicesSection />
            <RealizationsSection />
            <OpinionSection />
            <Workflow />
            <div className=" mx-auto relative z-20">
                <GradientBackgroundLayout>
                    <div
                        id="contact_section"
                        className="pt-16  min-h-screen items-center mx-auto max-w-7xl padding-x"
                    >
                        <SectionHeadline text="Skontaktuj się z nami" />
                        <ContactSection />
                    </div>
                </GradientBackgroundLayout>
            </div>
            <div
                className={`${styles.gradient} z-0 absolute top-36 left-1/3 lg:left-1/2`}
            />
            <div
                className={`${styles.gradient} z-0 absolute top-[900px] left-1/5 lg:left-[100px]`}
            />
            <div
                className={`${styles.gradient} z-0 absolute top-[2000px] lg:top-[1500px] -right-1/3 lg:right-[100px]`}
            />
            <div
                className={`${styles.gradient} z-0 absolute top-[3000px] lg:top-[3000px] -right-1/3 lg:right-[100px]`}
            />
            <div
                className={`${styles.gradient} z-0 absolute top-[2700px] lg:top-[2300px] -left-1/3 lg:left-[100px]`}
            />
            <div
                className={`${styles.gradient} lg:none z-0 absolute top-[5000px] lg:top-[3000px] -right-1/3 lg:right-[100px]`}
            />
            <div
                className={`${styles.gradient} lg:none z-0 absolute top-[5700px] lg:top-[2300px] -left-1/3 lg:left-[100px]`}
            />
            <div
                className={`${styles.gradient} lg:none z-0 absolute top-[5700px] lg:top-[3600px] -left-2/3 lg:left-[300px]`}
            />
            <div
                className={`${styles.gradient} lg:none z-0 absolute top-[7900px] lg:top-[3600px] -left-1/4 lg:left-[300px]`}
            />
        </main>
    );
}
