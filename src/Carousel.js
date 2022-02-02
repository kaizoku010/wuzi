import React, { useState } from "react";
import "./Carousel.css";
import Slider from "react-slick";
import fleece from "./images/dummy.jpg";
import yk from "./images/dummy.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import yao from "./images/dummy.jpg";
import { Link } from "@material-ui/core";
import ItemHolder from "./CustomComponents/ItemHolder";

export default function Carousel() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 400,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const styles = {
    backgroundImage: `url(${fleece})`,
  };

  return (
    <div className="wuzi_slider_slide">
      <ItemHolder />
      <Slider className="wuzi_slider" {...settings}>
      
        

      </Slider>
    </div>
  );
}
