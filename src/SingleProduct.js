import React from 'react'
import './SingleProduct.css'
import { useStateValue } from "./StateProvider"
import Ratings from "@material-ui/icons/Star"



function SingleProduct({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        alert("Added "+title+" to Shopping Cart")
        
    };


    
    const openProductPage = (id, title, image, price, rating) => {
        // window.open("/product" + {id})
        // console.log("product data:",id, title, image, price, rating)
        alert("Item availabe", title)
    }


    return (
        <div className="newProduct__holder__">

            <img onClick={openProductPage} className="newProduct__image__" src={image} />

            <div className="newProduct__infoAllHolder__">

                <h1 className="newProduct__productHeading__">PRODUCT INFO</h1>

                <div className="newProduct__productInfoHolder__">
                    <p className="newProduct__info__">{title}</p>
                </div>
               {         
                    Array(rating) 
                    .fill()
                            .map((_, i) => (
                                <Ratings className="newProduct__rating__"/>
                                ))
                    }    

                <div className="newProduct__buttonHolder__">

                    <button className="newProduct__addToCart__" onClick={addToCart}>ADD TO CART</button>
                    <h1 className="newProduct__price__">UGX {price}</h1>

                </div>

            </div>
            
            
        </div>
    )
}

export default SingleProduct
