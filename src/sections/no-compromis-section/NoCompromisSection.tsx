import ContainerLayout from "@/src/layouts/ContainerLayout";
import { Award, BookOpen, Zap } from "lucide-react";
import React from "react";

const NoCompromisSection = () => {
  return (
    <section className="py-40" id="uslugi">
      <ContainerLayout>
        <h2 className="text-center xl:max-w-6xl mx-auto text-4xl lg:text-5xl 3xl:text-6xl font-semibold">
          Koniec z kompromisami podczas tworzenia strony internetowej.
        </h2>
        <h3 className="text-center text-xl lg:text-2xl text-gray max-w-7xl mx-auto mt-12">
          Przyszłość projektowania stron internetowych zaczyna się tutaj. Poznaj
          szybki, przejrzysty proces projektowania oraz wdrażania który naprawdę
          odpowiada na Twoje potrzeby.
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mt-32">
          <div className="flex flex-col items-center">
            <div className="animate-bounceSlow mb-10">
              <Award className="w-20 h-auto" />
            </div>
            <p className="text-xl text-center font-light">
              Nieograniczone poprawki, pełna satysfakcja. Tworzymy stronę
              dokładnie taką, która odpowiada na potrzeby Twoich klientów.
              Dopracujemy każdy detal, aż osiągniemy perfekcję.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="animate-bounceSlow mb-10">
              <Zap className="w-20 h-auto" />
            </div>
            <p className="text-xl text-center font-light">
              Błyskawiczne wdrożenie bez kompromisów w zakresie jakości.
              Pożegnaj się z miesiącami programowania. Pracujemy wydajnie,
              dzięki czemu możesz zacząć działać szybciej niż kiedykolwiek
              wcześniej.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="animate-bounceSlow mb-10">
              <BookOpen className="w-20 h-auto" />
            </div>
            <p className="text-xl text-center font-light">
              Przejrzyste ceny, bez dodatkowych kosztów i opłat. Chcemy ułatwić
              ci planowanie w ramach twojego budżetu i zmaksymalizować twoją
              inwestycję.
            </p>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default NoCompromisSection;
