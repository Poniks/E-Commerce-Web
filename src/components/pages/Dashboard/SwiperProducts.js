import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import shoes from "../../../images/buty1.jpg";
import shoes2 from "../../../images/buty2.jpg";

const products = [
    {name: "Białe Najkacze", image: shoes, price: "120zł"},
    {name: "Czarne Adidosy", image: shoes2, price: "250zł"},
    {name: "Białe Pumy", image: shoes, price: "99zł"},
    {name: "Czarne Konfersy", image: shoes2, price: "333zł"},
    {name: "Czarne Konfersy", image: shoes2, price: "333zł"},
    {name: "Białe Najkacze", image: shoes, price: "120zł"},
]

const SwiperProdcuts = () => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={80}
            slidesPerView={4}
            navigation
            className='productSlider'
        >
            {products.map(item => {
                return (
                    <SwiperSlide className="product">
                        <a href="/">
                            <img src={item.image} alt="shoes" />
                            <div className="description">
                                <h3>{item.name}</h3>
                                <div className="product-price">
                                    <span className="price">{item.price}</span>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                )
            })}                
        </Swiper>
    )
}

export default SwiperProdcuts;