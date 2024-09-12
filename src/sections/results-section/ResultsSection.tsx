import ContainerLayout from "@/src/layouts/ContainerLayout";
import { Check } from "lucide-react";
import React from "react";

const ResultsSection = () => {
  return (
    <section className="py-40 bg-slate-300 text-black">
      <ContainerLayout>
        <div>
          <h2 className="text-center xl:max-w-4xl mx-auto text-3xl lg:text-5xl 3xl:text-6xl font-semibold">
            Dzięki nam osiągniesz podobne wyniki
          </h2>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-zinc-900 text-white border  rounded-2xl p-10 h-[40rem] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300">
                  <Check className="text-black" />
                </div>
                <span className="lg:text-8xl text-5xl font-semibold">
                  + 23%
                </span>
                <p className="text-xl">Średni wzrost konwersji</p>
              </div>
              <div className="mt-auto text-xl">
                <p>
                  W ciągu pierwszych trzech miesięcy nasi klienci doświadczyli
                  średniego wzrostu współczynnika konwersji o 23%.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 text-white border  rounded-2xl p-10 h-[40rem] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300">
                  <Check className="text-black" />
                </div>

                <span className="lg:text-8xl text-5xl font-semibold">2x</span>
                <p className="text-xl">Średni wzrost ruchu w witrynie</p>
              </div>
              <div className="mt-auto text-xl">
                <p>
                  Dzięki zoptymalizowanym strategiom nasi klienci podwoili ruch
                  na swojej stronie internetowej w ciągu pierwszych trzech
                  miesięcy.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 text-white border  rounded-2xl p-10 h-[40rem] flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300">
                  <Check className="text-black" />
                </div>

                <span className="lg:text-8xl text-5xl font-semibold">95%</span>
                <p className="text-xl">Średni wynik SEO</p>
              </div>
              <div className="mt-auto text-xl">
                <p>
                  Nasi klienci osiągają średnio 95% lub więcej najlepszych
                  wyników SEO na swoich stronach internetowych.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ResultsSection;
