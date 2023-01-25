"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/swiper-bundle.min.css";
import "../PortfolioSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import MikolajulikowskiImg from "../../../assets/mikolajulikowski.jpg";
import MediumImg from "../../../assets/medium.jpg";
import React from "react";
import SingleRealization from "./SingleRealization";

const realizations = [
    {
        title: "mikolajulikowski.pl",
        description:
            "Strona stworzona dla Mikołaja. Celem strony jest zbieranie kontaktów do klientów. Strona została stworzona w oparciu o Next.js. Strona pomaga Mikołajowi zdobywać więcej klientów.",
        img: MikolajulikowskiImg,
        altText: "Mikolajulikowski.pl",
    },
    {
        title: "medium.com",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: MediumImg,
        altText: "medium.com",
    },
    {
        title: "facebook.com",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: MikolajulikowskiImg,
        altText: "Mikolajulikowski.pl",
    },
];

const RealizationsSlider = () => {
    return (
        <div className="flex realative pt-5">
            <Swiper
                navigation
                pagination={{ clickable: true }}
                effect="coverflow"
                modules={[Pagination, Autoplay]}
                loop={true}
                centeredSlides={true}
                slidesPerView="auto"
                speed={800}
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
                {realizations.map(
                    ({ altText, description, img, title }, index) => (
                        <SwiperSlide key={index}>
                            <SingleRealization
                                altText={altText}
                                description={description}
                                img={img}
                                title={title}
                            />
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
    );
};

export default RealizationsSlider;
