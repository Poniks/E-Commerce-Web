import React from 'react';
import Header from "../../Header";
import CarouselImage from './Carousel';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className='dashboard'>
                <CarouselImage />
            </div>
        </div> 
    )
}

export default Dashboard;