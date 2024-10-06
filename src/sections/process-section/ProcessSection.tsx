import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/accordion/Accortion";
import ContainerLayout from "@/src/layouts/ContainerLayout";
import ProcessIcon from "@/src/components/icons/ProcessIcon";

const ProcessSection = () => {
  return (
    <section className="py-20 bg-slate-300" id="faq">
      <ContainerLayout>
        <div className="bg-zinc-900 rounded-3xl p-10 flex flex-col md:flex-row">
          <div className="basis-1/3 flex justify-center flex-col">
            <h3 className="text-4xl mb-10 font-semibold">
              Sprawdź jak wygląda proces współpracy
            </h3>
            <div className="flex lg:justify-start justify-center w-full ">
              <ProcessIcon />
            </div>
          </div>
          <div className="flex-1 max-lg:mt-12">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">
                  1. Konsultacja Wstępna
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Naszym celem w etapie konsultacji wstępnej jest zrozumienie
                  Twoich potrzeb i oczekiwań związanych z projektem.
                  Zorganizujemy spotkanie online lub osobiście, aby omówić cel
                  projektu, grupę docelową oraz Twoje preferencje dotyczące
                  stylu i funkcji. Na koniec tego etapu opracujemy wstępny brief
                  projektu, który posłuży jako fundament dla dalszych działań i
                  planowania kolejnych kroków.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">
                  2. Analiza i Planowanie
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Opracowanie strategii działania obejmuje analizę konkurencji,
                  badanie rynku oraz przygotowanie harmonogramu realizacji, co
                  prowadzi do stworzenia szczegółowego planu projektu
                  zawierającego zakres pracy, terminy i budżet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">
                  3. Projektowanie
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Stworzenie atrakcyjnej wizualnie strony wymaga opracowania
                  wizualnej identyfikacji, kolorystyki, typografii i elementów
                  graficznych, co prowadzi do prezentacji finalnego projektu
                  graficznego do akceptacji.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl">
                  4. Rozwój i Implementacja
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Techniczne zrealizowanie projektu obejmuje stworzenie
                  strony/sklepu w oparciu o zatwierdzony design oraz integrację
                  niezbędnych narzędzi (np. systemu płatności, zarządzania
                  treścią), co skutkuje stworzeniem funkcjonującej strony/sklepu
                  gotowej do testów.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl">
                  5. Testowanie
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Upewnienie się, że wszystko działa poprawnie, wymaga
                  przeprowadzenia testów funkcjonalnych, użyteczności i
                  wydajności, co prowadzi do stworzenia raportu z testów i
                  wprowadzenia ewentualnych poprawek.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-xl">
                  6. Uruchomienie
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Wprowadzenie strony/sklepu do użytku obejmuje publikację
                  strony w sieci, konfigurację ustawień SEO oraz monitorowanie
                  działania po uruchomieniu, co skutkuje udostępnieniem
                  strony/sklepu użytkownikom.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ProcessSection;
