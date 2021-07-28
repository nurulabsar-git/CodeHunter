import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import logo from '../../images/et.png';
// dbUSER: eShopStore , PASSWORD: eShopStoreB@ngladesh1209 
const homeData=[
    {
       name: 'Food', 
       image: logo,
       price: 160,
       
    },
    {
        name: 'Food', 
        image: logo,
        price: 160,
    },


]
const HomePage = () => {

const slides = [
        { title: 'First item', description: 'Lorem ipsum', logo: logo},
        { title: 'Second item', description: 'Lorem ipsum', logo: logo}
      ];
    return (
        <Slider>
            {slides.map((slide, index) => <div key={index}>
                <h2>{slide.title}</h2>
                <div>{slide.description}</div>
                <img src={slide.logo} alt="" />
            </div>)}
       </Slider>
    );
};

export default HomePage;