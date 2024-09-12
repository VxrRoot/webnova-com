import HeroSection from "@/src/sections/hero-section/HeroSection";
import OpinionSection from "@/src/sections/opinion-section/OpinionSection";
import RealizationsSection from "@/src/sections/realizations-section/RealizationsSection";
import ServicesSection from "@/src/sections/services-section/ServicesSection";
import Workflow from "@/src/sections/workflow-section/Workflow";
import { Metadata } from "next";
import LogosSection from "../sections/logos-section/LogosSection";
import NoCompromisSection from "../sections/no-compromis-section/NoCompromisSection";
import ParallaxRealizationsSection from "../sections/parallax-realizations-section/ParallaxRealizationsSection";
import ResultsSection from "../sections/results-section/ResultsSection";

export const metadata: Metadata = {
  title:
    "Webnova - stron oraz aplikacje internetowe dostosowane do Twoich potrzeb",
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
      <LogosSection />
      <ParallaxRealizationsSection />
      <NoCompromisSection />
      <ResultsSection />
      <ServicesSection />
      <RealizationsSection />
      <OpinionSection />
      <Workflow />
    </main>
  );
}
