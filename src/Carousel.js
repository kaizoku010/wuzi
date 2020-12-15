import React, { useState } from 'react'
import './Carousel.css'
import Slider from 'react-slick'
// import SliderInfo from './ImageSlide__'
import yoga from "./images/fleece.jpg";
import fleece from "./images/fl.jpg";
import yk from "./images/hoodie.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import yao from "./images/yoga.jpg";


export default function Carousel() {
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        fade:false,
        arrows: false,
        slideToShow: 1,
        slideToScroll: 1

    }
    const styles = {
        backgroundImage: `url(${fleece})`,

    }
    
    return (
        <div className="carousel__holder">
        <Slider {...settings}>
            {/* // create slider holder */}
                <div className="class__">
                <h1 className="carousel__price">UGX 200,000</h1>

                    <div className="carousel__image" style={styles}/>
            
                </div>
         
         
         
         
         
                <div>
                <h1 className="carousel__price">UGX 100,000</h1>
                <img className="carousel__image" src={yoga}/>
            </div>
                <div>
                <h1 className="carousel__price">UGX 300,000</h1>
                <img className="carousel__image" src={yao}/>     
            </div>
                <div>
                <h1 className="carousel__price">UGX 100,000</h1>
                <img className="carousel__image" src={yk}/>
            </div>
            

        </Slider>
        </div>

    
    );

}
