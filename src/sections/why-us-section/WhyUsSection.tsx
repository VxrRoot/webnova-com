import ContainerLayout from "@/src/layouts/ContainerLayout";
import {
  CircleDollarSign,
  BarChart,
  Cpu,
  Timer,
  ListChecks,
  TabletSmartphone,
} from "lucide-react";
import React from "react";

const WhyUsSection = () => {
  return (
    <section className="py-20">
      <ContainerLayout>
        <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 gap-4 text-black">
          <div className="row-span-1 flex flex-col col-span-1 px-4 py-8 bg-slate-300 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">
              Szybkie realizacje projektów
            </h2>
            <p className="text-lg font-semibold ">
              Nasze procesy pozwalają na natychmiastowe przekształcenie Twoich
              pomysłów w gotowe produkty, co oszczędza Twój czas i zasoby
            </p>
            <div className="flex-grow w-full md:hidden flex items-center py-8 justify-center ">
              <Timer className="w-1/3 h-auto " />
            </div>
          </div>
          <div className="lg:row-span-2 col-span-1 px-4 flex flex-col py-8 bg-slate-300 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">Optymalizacja kosztów</h2>
            <p className="text-lg font-semibold ">
              Dzięki efektywnym metodom pracy potrafimy znacząco zredukować
              koszty, nie rezygnując z wysokiej jakości usług.
            </p>
            <div className="flex-grow w-full flex items-center py-8 justify-center ">
              <CircleDollarSign className="w-1/3 h-auto " />
            </div>
          </div>
          <div className="row-span-1 px-4 py-8 bg-slate-300 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">
              Ścisła kontrola projektu
            </h2>
            <p className="text-lg font-semibold ">
              Dokładnie wdrażamy Twoje specyfikacje, co gwarantuje, że finalny
              produkt idealnie odpowiada Twoim oczekiwaniom.
            </p>
            <div className="flex-grow w-full md:hidden flex items-center py-8 justify-center ">
              <ListChecks className="w-1/3 h-auto " />
            </div>
          </div>
          <div className="row-span-2 flex flex-col col-span-1 px-4 py-8 bg-slate-300 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">Optymalizacja SEO</h2>
            <p className="text-lg font-semibold ">
              Większa widoczność w wyszukiwarkach to więcej odwiedzin i większe
              szanse na zdobycie nowych klientów.
            </p>
            <div className="flex-grow w-full flex items-center py-8 justify-center ">
              <BarChart className="w-1/3 h-auto" />
            </div>
          </div>
          <div className="row-span-2 flex flex-col col-span-1 px-4 py-8 bg-slate-300 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">
              Wiedza i aktualne technologie
            </h2>
            <p className="text-lg font-semibold ">
              Tworząc strony internetowe korzystamy z najnowszych narzędzi, aby
              Twoje rozwiązanie było zarówno nowoczesne, jak i trwałe.
            </p>
            <div className="flex-grow w-full flex items-center py-8 justify-center ">
              <Cpu className="w-1/3 h-auto" />
            </div>
          </div>
          <div className="row-span-2 col-span-1 px-4 py-8 bg-slate-300 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">Responsywne projekty</h2>
            <p className="text-lg font-semibold ">
              Nasze projekty są zoptymalizowane dla komputerów, tabletów i
              smartfonów. Zwiększ ruch na stronie, przyciągając użytkowników
              niezależnie od urządzenia.
            </p>
            <div className="flex-grow w-full md:hidden flex items-center py-8 justify-center ">
              <TabletSmartphone className="w-1/3 h-auto " />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default WhyUsSection;
