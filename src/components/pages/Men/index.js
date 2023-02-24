import React, { useState, useEffect  } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import FilterCategories from "../../FilterCategories";
import ReplaceValueOfObject from "../../helpers/ReplaceValueOfObject";

import productsData from '../productsData.json';
import categoriesData from '../categoriesData.json';

const Men = () => {
    const [sortedProducts, setSortedProducts] = useState(productsData);
    const [categories, setCategories] = useState(categoriesData);

    useEffect(() => {
        const filterStorage = JSON.parse(localStorage.getItem('filterArray'));

        if(filterStorage !== null){
            filterHandler(filterStorage[0], filterStorage[1], "filter");
        }
    }, [])

    const filterHandler = (e, id, action) => {
        let newArray;
        if(action === "filter"){
            newArray = productsData.filter(item => {
                if(item.type === e) {
                    return (
                        item
                    )
                } else {
                    return  '';
                }
            })

            localStorage.setItem('filterArray', JSON.stringify([e, id, newArray]));

            setCategories(ReplaceValueOfObject(categoriesData, id, 'active', true));
        } else if (action === "delete") {
            newArray = productsData;

            localStorage.removeItem('filterArray', JSON.stringify([e, id, newArray]));

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
                <h2>Men</h2>
                <div className='box'>
                    <div className='box__item'>
                        <ul>
                            {categories.map(item => (
                                <FilterCategories item={item.name} filterHandler={filterHandler} key={item.id} id={item.id} active={item.active}/>
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

export default Men;