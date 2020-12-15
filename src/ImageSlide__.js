import React from 'react'
import './ImageSlide.css'
import fleece from "./images/fleece.jpg";
import yao from "./images/yao.jpg";
import yoga from "./images/yoga.jpg";
import fleece from "./images/fleece.jpg";
import yk from "./images/yk.png";


export default function ImageSlide__({product__image, price}) {


    const styles = {
        backgroundImage: `url(${product__image})`,

    }
    
    return (
        <div className="carousel__image carousel__image__" style={styles}>
            <h1 className="carousel__price">{price}</h1>
            
        </div>
    )
}