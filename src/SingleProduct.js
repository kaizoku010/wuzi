import React from 'react'
import './SingleProduct.css'
import { useStateValue } from "./StateProvider"
import CurrencyFormat from "react-currency-format"
import Ratings from "@material-ui/icons/Star"
import { Link } from '@material-ui/core'



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
        <Link to={"/product/" + id}>
            <img  className="newProduct__image__" src={image} />
            </Link>
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
                  
                    <h1 className="newProduct__price__">
                        
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
                </div>

            </div>
            
            
        </div>
    )
}

export default SingleProduct
