import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import image1 from "../../../images/kret.jpg";
import image2 from "../../../images/patol3.jpg";
import image3 from "../../../images/scynkk.jpg";

const CarouselImage = () => {
    return (
        <Carousel className='test'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselImage;