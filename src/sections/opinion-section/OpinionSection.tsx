import OpinionSlider from "@/src/components/opinion-slider/OpinionSlider";
import ContainerLayout from "@/src/layouts/ContainerLayout";
import React from "react";

const OpinionSection = () => {
  return (
    <section className="py-40">
      <ContainerLayout>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row">
            <h2 className="flex-1 mb-10 lg:mb-0 text-4xl lg:text-5xl font-semibold">
              Co mówią o nas klienci
            </h2>
            <p className="flex-1 text-awGray text-base lg:text-xl font-light tracking-wide max-w-[38rem] ">
              Sprawdź opinie osób, które zrealizowały z projekty. Nasi klienci
              dzielą się swoimi doświadczeniami, sukcesami i tym, jak WebNova
              pomogła im osiągnąć biznesowe cele. Przeczytaj opinie naszych
              klientów i sam dołącz do grona zadowolonych uczestników!
            </p>
          </div>
          <div className="mt-16">
            <OpinionSlider />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OpinionSection;
