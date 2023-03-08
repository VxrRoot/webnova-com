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
        author: "Mikołaj Ulikowski",
        opinion:
            "Chciałbym bardzo podziękować Dawidowi za zakodowanie mojej strony internetowej. Współpraca przebiegała gładko, Dawid jasno opisał co ode mnie potrzebuje oraz gdy strona była już gotowa przeszkolił mnie z jej obsługi w panelu administratora. Terminowość oraz profesjonalna komunikacja sprawia, że z miłą chęcią będę zlecał kolejne projekty Dawidowi. Polecam!!!",
    },
    {
        author: "Mikołaj Ulikowski",
        opinion:
            "Chciałbym bardzo podziękować Dawidowi za zakodowanie mojej strony internetowej. Współpraca przebiegała gładko, Dawid jasno opisał co ode mnie potrzebuje oraz gdy strona była już gotowa przeszkolił mnie z jej obsługi w panelu administratora. Terminowość oraz profesjonalna komunikacja sprawia, że z miłą chęcią będę zlecał kolejne projekty Dawidowi. Polecam!!!",
    },
    {
        author: "Mikołaj Ulikowski",
        opinion:
            "Chciałbym bardzo podziękować Dawidowi za zakodowanie mojej strony internetowej. Współpraca przebiegała gładko, Dawid jasno opisał co ode mnie potrzebuje oraz gdy strona była już gotowa przeszkolił mnie z jej obsługi w panelu administratora. Terminowość oraz profesjonalna komunikacja sprawia, że z miłą chęcią będę zlecał kolejne projekty Dawidowi. Polecam!!!",
    },
];

const OpinionSlider = () => {
    return (
        <div className="flex relative pt-5 ">
            <Swiper
                navigation
                pagination={{ clickable: true }}
                effect="coverflow"
                modules={[Pagination, Autoplay, EffectCoverflow]}
                loop={true}
                centeredSlides={true}
                slidesPerView="auto"
                speed={800}
                coverflowEffect={{
                    rotate: 0,
                    slideShadows: true,
                    depth: 150,
                    scale: 0.95,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1.1,
                    },
                    720: {
                        slidesPerView: 1.5,
                    },
                    1024: {
                        slidesPerView: 2,
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
                    <SwiperSlide key={index}>
                        <SingleOpinion author={author} opinion={opinion} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OpinionSlider;
