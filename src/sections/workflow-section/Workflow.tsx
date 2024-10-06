import ContainerLayout from "@/src/layouts/ContainerLayout";
import Image from "next/image";
import designImg from "../../../public/design-img.webp";
import websiteImg from "../../../public/website-img.webp";
import seoImg from "../../../public/seo-img.webp";

const Workflow = () => {
  return (
    <section className="py-40">
      <ContainerLayout>
        <h2 className="text-center xl:max-w-6xl mx-auto text-4xl lg:text-5xl 3xl:text-6xl font-semibold">
          Sprawdź jak uwolnić pełny potencjał Twojej firmy
        </h2>
        <div className="my-32 flex flex-col lg:flex-row gap-20">
          <div className="flex-1 flex flex-col justify-center order-2 lg:order-1">
            <span>Pełna strategia</span>
            <h3 className="lg:text-5xl text-3xl mb-10 font-semibold">
              Pojektowanie i branding{" "}
            </h3>
            <p className="text-lg">
              Rozwiązania szyte na miarę, z naciskiem na cele biznesowe.
              Niezależnie od tego, czy chodzi o generowanie leadów, zwiększanie
              konwersji czy sprzedaży. Dostarczamy projekty, które faktycznie
              działają.
            </p>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <Image alt="" src={designImg} className="rounded-xl" />
          </div>
        </div>

        <div className="my-32 flex-col lg:flex-row flex gap-20">
          <div className="flex-1">
            <Image alt="" src={websiteImg} className="rounded-xl" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <span>Pełna optymalizacja</span>
            <h3 className="lg:text-5xl text-3xl mb-10 font-semibold">
              Strony oraz sklepy internetowe
            </h3>
            <p className="text-lg">
              Szybkie i skuteczne strony oraz sklepy internetowe wykonane z
              pomocą najnowszych technologii takich jak Webflow, Shopify,
              NextJS. Oprócz wdrożenia projektu zapewniamy, że Twoja witryna
              spełnia wszystkie kryteria wydajności i szybkości oraz zwiększa
              konwersje.
            </p>
          </div>
        </div>

        <div className="my-32 flex flex-col lg:flex-row gap-20">
          <div className="flex-1 flex flex-col justify-center order-2 lg:order-1">
            <span>Pełna wydajność</span>
            <h3 className="lg:text-5xl text-3xl mb-10 font-semibold">
              Usługi SEO
            </h3>
            <p className="text-lg">
              Techniczne SEO, on-page SEO i off-page SEO, aby pomóc Twojej
              witrynie wyróżnić się na tle konkurencji po uruchomieniu.
              Wdrażając najnowsze strategie SEO i treści, zapewniamy wysoką
              pozycję w wynikach wyszukiwania.
            </p>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <Image alt="" src={seoImg} className="rounded-xl" />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Workflow;
