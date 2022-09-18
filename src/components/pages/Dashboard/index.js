import React from 'react';
import Header from "../../Header";
import CarouselImage from './Carousel';
import shoes from "../../../images/buty1.jpg";
import shoes2 from "../../../images/buty2.jpg";

const products = [
    {name: "Białe Najkacze", image: shoes, price: "120zł"},
    {name: "Czarne Adidosy", image: shoes2, price: "250zł"},
    {name: "Białe Pumy", image: shoes, price: "99zł"},
    {name: "Czarne Konfersy", image: shoes2, price: "333zł"},
]

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className='dashboard'>
                <CarouselImage />
                <div className="new-products">
                    <h2>Nowe Produkty</h2>
                    <div className="products">
                        {products.map(item => {
                            return (
                            <div className="product">
                                <a href="/">
                                    <img src={item.image} alt="shoes" />
                                    <div className="description">
                                        <h3>{item.name}</h3>
                                        <div className="product-price">
                                            <span className="price">{item.price}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Dashboard;