import React from 'react';
import Header from "../../Header";
import Footer from "../../Footer";
import SwiperImage from './SwiperImage';
import SwiperProdcuts from './SwiperProducts';


const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className='dashboard'>
                <SwiperImage />
                <div className="new-products">
                    <h2>Nowe Produkty</h2>
                    <SwiperProdcuts />
                </div>
                <div className="bg"></div>  
                <div className="popular-products">
                    <h2>Popularne Produkty</h2>
                    <SwiperProdcuts />    
                </div>
                <div className="discounted-products">
                    <h2>Przecenione Produkty</h2>
                    <SwiperProdcuts />    
                </div>     
                <div className="bg2"></div>                 
            </div>
            <Footer />
        </div> 
    )
}

export default Dashboard;