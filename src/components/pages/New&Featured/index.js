import React, { useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Categories from "./Categories";
import ReplaceValueOfObject from "../../helpers/ReplaceValueOfObject";

import productsData from './productsData.json';
import categoriesData from './categoriesData.json';

const NewAndFeatured = () => {
    const [sortedProducts, setSortedProducts] = useState(productsData);
    const [categories, setCategories] = useState(categoriesData);

    const filterHandler = (e, id, type) => {
        let newArray;

        if(type === "filter"){
            newArray = productsData.filter(item => {
                if(item.type === e) {
                    return (
                        item
                    )
                } else {
                    return  '';
                }
            })
            
            setCategories(ReplaceValueOfObject(categoriesData, id, 'active', true));
        } else if (type === "delete") {
            newArray = productsData;

            setCategories(ReplaceValueOfObject(categoriesData, id, 'active', false));
        }
        
        setSortedProducts([
            ...newArray,
        ]);   
    }
    
    return (
        <div>
            <Header />
            <div className='dashboard'>
                <h2>New & Featured</h2>
                <div className='box'>
                    <div className='box__item'>
                        <ul>
                            {categories.map(item => (
                                <Categories item={item.name} filterHandler={filterHandler} key={item.id} id={item.id} active={item.active}/>
                            ))}
                        </ul>
                    </div>
                    <div className='box__item'>
                        <div className='sort'></div>
                        <div className='products'>
                            {sortedProducts.map(item => {
                                return (
                                    <a href="/" key={item.name}>
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