import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from "../../../images/kret.jpg";
import image2 from "../../../images/patol3.jpg";
import image3 from "../../../images/scynkk.jpg";

const SwiperImage = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="imageSlider"
        >
            <SwiperSlide><img src={image1} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={image2} alt="2" /></SwiperSlide>
            <SwiperSlide><img src={image3} alt="3" /></SwiperSlide> 
        </Swiper>
    )
}

export default SwiperImage;