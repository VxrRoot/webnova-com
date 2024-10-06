import HeroSection from "@/src/sections/hero-section/HeroSection";
import OpinionSection from "@/src/sections/opinion-section/OpinionSection";
import RealizationsSection from "@/src/sections/realizations-section/RealizationsSection";
import Workflow from "@/src/sections/workflow-section/Workflow";
import { Metadata } from "next";
import CTASection from "../sections/CTA-section/CTASection";
import LogosSection from "../sections/logos-section/LogosSection";
import NoCompromisSection from "../sections/no-compromis-section/NoCompromisSection";
import ParallaxRealizationsSection from "../sections/parallax-realizations-section/ParallaxRealizationsSection";
import ProcessSection from "../sections/process-section/ProcessSection";
import ResultsSection from "../sections/results-section/ResultsSection";
import WhyUsSection from "../sections/why-us-section/WhyUsSection";

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
    <main className="">
      <HeroSection />
      <LogosSection />
      <ParallaxRealizationsSection />
      <NoCompromisSection />
      <ResultsSection />
      <WhyUsSection />
      <Workflow />
      <ProcessSection />
      <RealizationsSection />
      <OpinionSection />
      <CTASection />
    </main>
  );
}
