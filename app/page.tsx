import GradientBackgroundLayout from "@/src/layouts/GradientBackground";
import ContactSection from "@/src/sections/contact-section/ContactSection";
import HeroSection from "@/src/sections/hero-section/HeroSection";
import OpinionSection from "@/src/sections/opinion-section/OpinionSection";
import ServicesSection from "@/src/sections/services-section/ServicesSection";
import SectionHeadline from "./components/headlines/SectionHeadline";
import RealizationsSection from "@/src/sections/realizations-section/RealizationsSection";

export default function Home() {
    return (
        <main className="w-full pt-16 lg:pt-20">
            <HeroSection />
            <ServicesSection />
            <RealizationsSection />
            <OpinionSection />
            <div className="bg-black mx-auto">
                <GradientBackgroundLayout>
                    <div className="pt-16 min-h-screen items-center mx-auto max-w-7xl padding-x">
                        <SectionHeadline text="Skontaktuj się ze mną" />
                        <ContactSection />
                    </div>
                </GradientBackgroundLayout>
            </div>
        </main>
    );
}
