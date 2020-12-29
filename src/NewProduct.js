import React from 'react'
import './NewProduct.css'
import fleece from "./images/fleece.jpg";
import { useStateValue } from "./StateProvider"
import CurrencyFormat from "react-currency-format";
import Cart from "@material-ui/icons/ShoppingCartSharp"
import Ratings from "@material-ui/icons/Star"
import { Link } from '@material-ui/core';



function NewProduct({ id, title, image, price, rating }) {
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
     //   window.open("/product/" + id)
       // console.log("product data:",id, title, image, price, rating)
        alert("Item here", id);
    }


    return (
        <div className="newProduct__holder">
   
            <img className="newProduct__image" src={image} onClick={openProductPage} />
        

            <div className="newProduct__infoAllHolder">

                <h1 className="newProduct__productHeading">PRODUCT INFO</h1>

                <div className="newProduct__productInfoHolder">
                    <p className="newProduct__info">{title}</p>
                </div>
               {         
                    Array(rating) 
                    .fill()
                            .map((_, i) => (
                                <Ratings className="newProduct__rating"/>
                                ))
                    }    

                <div className="newProduct__buttonHolder">

                    <h1 className="newProduct__price">
                        
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p> 
                <strong>{value}</strong>
                        </p>
                    </>
 
                )}
                 
                decimalScale={1}
                thousandSeparator={true}
                value={price}
                displayType={"text"}
                prefix={"UGX "}
            />
</h1>
                    <button className="newProduct__addToCart"  onClick={addToCart}><Cart className="cart_ic"/>ADD TO CART</button>
                </div>

            </div>
            
            
        </div>
    )
}

export default NewProduct
