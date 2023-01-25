import HeroSection from "@/src/sections/hero-section/HeroSection";
import PortfolioSection from "@/src/sections/portfolio-section/PortfolioSection";
import ServicesSection from "@/src/sections/services-section/ServicesSection";

export default function Home() {
    return (
        <main className="w-full pt-16 lg:pt-20">
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
        </main>
    );
}
