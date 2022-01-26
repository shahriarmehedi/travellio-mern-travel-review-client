import React from 'react';
import Header from "../../Header/Header"

import { Swiper, SwiperSlide } from "swiper/react";


import slide1 from "../../../images/1.png";
import slide2 from "../../../images/2.png";
import slide3 from "../../../images/3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./SwiperStyle.css";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);




const Carousel = () => {
    return (
        <>
            <Header></Header>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 3000,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <img className='w-full h-[300px] lg:h-[800px] object-cover' src={slide1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[300px] lg:h-[800px] object-cover' src={slide2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[300px] lg:h-[800px] object-cover' src={slide3} alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Carousel;