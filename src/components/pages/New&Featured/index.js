import React, { useState } from 'react';
import Header from "../../Header";
import Footer from "../../Footer";

import shoes from "../../../images/buty1.jpg";
import shoes2 from "../../../images/buty2.jpg";

const products = [
    {name: "Białe Najkacze", image: shoes, price: "120zł", type: "obuwie"},
    {name: "Czarny T-shirt", image: shoes2, price: "250zł", type: "bluzki"},
    {name: "Biały Pasek", image: shoes, price: "99zł", type: "akcesoria"},
    {name: "Czarne Spodnie", image: shoes2, price: "333zł", type: "spodnie"},
    {name: "Czarna Kurtka", image: shoes2, price: "333zł", type: "kurtki"},
    {name: "Białe Majty", image: shoes, price: "120zł", type: "bielizna"},
]

const NewAndFeatured = () => {
    const [sortedProducts, setSortedProducts] = useState([
        {name: "Białe Najkacze", image: shoes, price: "120zł", type: "obuwie"},
        {name: "Czarny T-shirt", image: shoes2, price: "250zł", type: "bluzki"},
        {name: "Biały Pasek", image: shoes, price: "99zł", type: "akcesoria"},
        {name: "Czarne Spodnie", image: shoes2, price: "333zł", type: "spodnie"},
        {name: "Czarna Kurtka", image: shoes2, price: "333zł", type: "kurtki"},
        {name: "Białe Majty", image: shoes, price: "120zł", type: "bielizna"},
    ]);


    const test = (e) => {
        const newArray = products.filter(item => {
            if(item.type === e.target.attributes[0].textContent) {
                return (
                    item
                )
            } else {
                return  '';
            }
        })

        setSortedProducts([
            ...newArray,
        ])
    }

    return (
        <div>
            <Header />
            <div className='dashboard'>
                <h2>New & Featured</h2>
                <div className='box'>
                    <div className='box__item'>
                        <ul>
                            <li onClick={test} value="obuwie">Obuwie</li>
                            <li onClick={test} value="spodnie">Spodnie</li>
                            <li onClick={test} value="bluzki">Bluzki</li>
                            <li onClick={test} value="kurtki">Kurtki</li>
                            <li onClick={test} value="bielizna">Bielizna</li>
                            <li onClick={test} value="akcesoria">Akcesoria</li>
                        </ul>
                    </div>
                    <div className='box__item'>
                        <div className='sort'></div>
                        <div className='products'>
                            {sortedProducts.map(item => {
                                return (
                                    <a href="/">
                                        <img src={item.image} alt="shoes" />
                                        <div className="description">
                                            <h3>{item.name}</h3>
                                            <div className="product-price">
                                                <span className="price">{item.price}</span>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NewAndFeatured;