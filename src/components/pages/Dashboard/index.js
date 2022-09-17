import React from 'react';
import Header from "../../Header";
import CarouselImage from './Carousel';
import shoes from "../../../images/buty1.jpg";

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className='dashboard'>
                <CarouselImage />
                <div className="new-products">
                    <h2>Nowe Produkty</h2>
                    <div className="products">
                        <div className="product">
                            <a href="/">
                                <img src={shoes} alt="shoes" />
                                <div className="description">
                                    <h3>Białe najkacze</h3>
                                    <div className="product-price">
                                        <span className="price">120zł</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="product">
                            <a href="/">
                                <img src={shoes} alt="shoes" />
                                <div className="description">
                                    <h3>Białe najkacze</h3>
                                    <div className="product-price">
                                        <span className="price">120zł</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="product">
                            <a href="/">
                                <img src={shoes} alt="shoes" />
                                <div className="description">
                                    <h3>Białe najkacze</h3>
                                    <div className="product-price">
                                        <span className="price">120zł</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="product">
                            <a href="/">
                                <img src={shoes} alt="shoes" />
                                <div className="description">
                                    <h3>Białe najkacze</h3>
                                    <div className="product-price">
                                        <span className="price">120zł</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Dashboard;