// @ts-nocheck
"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const opinions = [
  {
    id: 1,
    author: "Mikołaj Ulikowski",
    title: "Digital Marketing",
    text: "Chciałbym bardzo podziękować Dawidowi za zakodowanie mojej strony internetowej. Współpraca przebiegała gładko, Dawid jasno opisał co ode mnie potrzebuje oraz gdy strona była już gotowa przeszkolił mnie z jej obsługi w panelu administratora. Terminowość oraz profesjonalna komunikacja sprawia, że z miłą chęcią będę zlecał kolejne projekty. Polecam!!!",
  },
  {
    id: 2,
    author: "Kamil Błasik",
    title: "Harmonia Consult",
    text: "Świetna współpraca! Merytoryczna i profesjonalny kontakt, wszystko bez uwag i problemów. Na pewno będzie to współpraca na dłużej i przy kolejnych projektach! Otrzymałem świetnie konwertująca stronę, która na siebie zarabia",
  },
  {
    id: 3,
    author: "Rafał",
    title: "Rckart",
    text: "Jestem bardzo zadowolony ze współpracy! Komunikacja była bezproblemowa a odpowiedzi na pytania natychmiastowe. Po zakończeniu projektu zostałem przeszkolony z panelu administratora. Strona wygląda i działa świetnie a do tego od samego początku przynosi nowych klientów. Zdecydowanie polecam!",
  },
  {
    id: 4,
    author: "Mateusz",
    title: "PMJ",

    text: "Współpraca z tą agencją była strzałem w dziesiątkę! Strona jest responsywna, szybka i łatwa w nawigacji. Nasi klienci chwalą jej przejrzystość, a my zauważyliśmy znaczący wzrost zapytań online. Polecam każdemu, kto szuka profesjonalnej i skutecznej obecności w sieci!",
  },
  {
    id: 5,
    author: "Adrian",
    title: "ACDC",

    text: "Potrzebowaliśmy strony, która byłaby nie tylko atrakcyjna wizualnie, ale także zoptymalizowana pod kątem SEO. Otrzymałem nowoczesny, spersonalizowany design. Dodatkowo, wprowadzili mnie w tajniki optymalizacji treści, co znacząco poprawiło moją widoczność w wynikach wyszukiwania. Jestem zachwycony rezultatami i z pewnością będę polecać ich usługi!",
  },
  {
    id: 6,
    author: "Kacper",
    title: "Tattooflow",
    text: "Świetna robota! Nasza nowa strona wygląda profesjonalnie i działa bez zarzutu. Sprzedaż wzrosła o 30% w ciągu miesiąca od uruchomienia.",
  },
];

const OpinionSlider = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div>
        <Slider
          {...settings}
          className="[&_.slick-track]:flex [&_.slick-track]:gap-4 cursor-pointer"
        >
          {opinions.map(({ text, id, author, title }, idx) => {
            return (
              <div
                key={`${idx}-${id}`}
                className="py-7 px-10 bg-slate-300 rounded-2xl text-black"
              >
                <p className="text-base mb-8 font-light">{text}</p>
                <div className="flex gap-4">
                  <div className="flex flex-col ">
                    <span>{author}</span>
                    <span className="text-awGrey font-normal">{title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default OpinionSlider;
