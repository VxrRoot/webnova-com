"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/swiper-bundle.min.css";
import "../OpinionSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";
import React from "react";
import SingleOpinion from "./SingleOpinion";

const opinions = [
    {
        author: "Mikołaj Ulikowski",
        opinion: `,,Chciałbym bardzo podziękować Dawidowi za zakodowanie mojej strony internetowej. Współpraca przebiegała gładko, Dawid jasno opisał co ode mnie potrzebuje oraz gdy strona była już gotowa przeszkolił mnie z jej obsługi w panelu administratora. Terminowość oraz profesjonalna komunikacja sprawia, że z miłą chęcią będę zlecał kolejne projekty Dawidowi. Polecam!!!"`,
    },
    {
        author: "Kamil Błasik",
        opinion:
            "Świetna współpraca! Merytoryczna i profesjonalny kontakt, wszystko bez uwag i problemów. Na pewno będzie to współpraca na dłużej i przy kolejnych projektach! Otrzymałem świetnie konwertująca stronę, która na siebie zarabia",
    },
    {
        author: "HarmoniaConsult",
        opinion:
            "Jesteśmy zachwyceni współpracą z WebNova przy tworzeniu naszej strony internetowej. Ich profesjonalizm, kreatywność i zrozumienie naszych potrzeb przekroczyły oczekiwania. Gorąco polecamy ich usługi wszystkim firmom.",
    },
    {
        author: "Mikołaj Ulikowski",
        opinion:
            "Chciałbym bardzo podziękować Dawidowi za zakodowanie mojej strony internetowej. Współpraca przebiegała gładko, Dawid jasno opisał co ode mnie potrzebuje oraz gdy strona była już gotowa przeszkolił mnie z jej obsługi w panelu administratora. Terminowość oraz profesjonalna komunikacja sprawia, że z miłą chęcią będę zlecał kolejne projekty Dawidowi. Polecam!!!",
    },
    {
        author: "Kamil Błasik",
        opinion:
            "Świetna współpraca! Merytoryczna i profesjonalny kontakt, wszystko bez uwag i problemów. Na pewno będzie to współpraca na dłużej i przy kolejnych projektach! Otrzymałem świetnie konwertująca stronę, która na siebie zarabia",
    },
];

const OpinionSlider = () => {
    return (
        <div className="flex relative pt-5 ">
            <Swiper
                navigation
                pagination={{ clickable: true }}
                effect="coverflow"
                modules={[Pagination, Autoplay]}
                loop={true}
                centeredSlides={true}
                slidesPerView="auto"
                speed={800}
                autoHeight={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    720: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                spaceBetween={30}
                autoplay={{
                    delay: 5000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {opinions.map(({ author, opinion }, index) => (
                    <SwiperSlide className="h-auto self-stretch" key={index}>
                        <SingleOpinion author={author} opinion={opinion} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OpinionSlider;
