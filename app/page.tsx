import GradientBackgroundLayout from "@/src/layouts/GradientBackground";
import ContactSection from "@/src/sections/contact-section/ContactSection";
import HeroSection from "@/src/sections/hero-section/HeroSection";
import OpinionSection from "@/src/sections/opinion-section/OpinionSection";
import RealizationsSection from "@/src/sections/realizations-section/RealizationsSection";
import ServicesSection from "@/src/sections/services-section/ServicesSection";
import SectionHeadline from "../src/components/headlines/SectionHeadline";
import { Metadata } from "next";
import Workflow from "@/src/sections/workflow-section/Workflow";

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
        <main className="w-full relative lg:pt-20">
            <HeroSection />
            <ServicesSection />
            <RealizationsSection />
            <OpinionSection />
            <Workflow />
            <div className="bg-black mx-auto">
                <GradientBackgroundLayout>
                    <div
                        id="contact_section"
                        className="pt-16 min-h-screen items-center mx-auto max-w-7xl padding-x"
                    >
                        <SectionHeadline text="Skontaktuj się z nami" />
                        <ContactSection />
                    </div>
                </GradientBackgroundLayout>
            </div>
        </main>
    );
}
