"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/swiper-bundle.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";

import React from "react";

SwiperCore.use([Pagination, EffectCoverflow, Swiper]);

const realizations = [
    {
        title: "mikolajulikowski.pl",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
        title: "site2.pl",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
        title: "site3.pl",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
];

const RealizationsSlider = () => {
    return (
        <div className="flex realative">
            <Swiper
                navigation
                pagination={{ clickable: true }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                }}
                centeredSlides={true}
                style={{ height: "500px" }}
                slidesPerView={2}
                spaceBetween={30}
                className="mySwiper w-full h-full"
            >
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-1.jpg)",
                    }}
                    className="w-52 h-full"
                >
                    Slide 1
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-2.jpg)",
                    }}
                    className="w-52 h-full"
                >
                    Slide 2
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-3.jpg)",
                    }}
                    className="w-52 "
                >
                    Slide 3
                </SwiperSlide>

                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-1.jpg)",
                    }}
                    className="w-52 h-full"
                >
                    Slide 4
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-2.jpg)",
                    }}
                    className="w-52 h-full"
                >
                    Slide 5
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-3.jpg)",
                    }}
                    className="w-52 h-full"
                >
                    Slide 6
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default RealizationsSlider;
