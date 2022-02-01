import React, { useState } from "react";
import "./Carousel.css";
import Slider from "react-slick";
// import SliderInfo from './ImageSlide__'
import yoga from "./images/fleece.jpg";
import fleece from "./images/fl.jpg";
import yk from "./images/hoodie.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import yao from "./images/yoga.jpg";
import { Link } from "@material-ui/core";

export default function Carousel() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const styles = {
    backgroundImage: `url(${fleece})`,
  };

 
  return (
    <div>

      <Slider {...settings}>
        <div>
        <h1 className="carousel__price">UGX 100,000</h1>
         <img className="carousel__image" src={yao} />
        </div>
        <div>
        <h1 className="carousel__price">UGX 100,000</h1>
         <img className="carousel__image" src={yoga} />
        </div>
        <div>
        <h1 className="carousel__price">UGX 100,000</h1>
         <img className="carousel__image" src={yk} />
        </div>
        <div>
        <h1 className="carousel__price">UGX 100,000</h1>
         <img className="carousel__image" src={yao} />
        </div>
        <div>
        <h1 className="carousel__price">UGX 100,000</h1>
         <img className="carousel__image" src={yk} />
        </div>
        <div>
        <h1 className="carousel__price">UGX 100,000</h1>
         <img className="carousel__image" src={yk} />
        </div>
        <div>
        <h1 className="carousel__price">UGX 100,000</h1>
         <img className="carousel__image" src={yk} />
        </div>
        <div>
        <h1 className="carousel__price">UGX 100,000</h1>
         <img className="carousel__image" src={yk} />
        </div>
        <div>
        <h1 className="carousel__price">UGX 100,000</h1>
         <img className="carousel__image" src={yk} />
        </div>
      </Slider>
    </div>
  );
}
