import React from 'react'
import "./CheckoutProduct.css"
import Star from "@material-ui/icons/Star"
import {useStateValue} from "./StateProvider"


function CheckoutPoduct({ id, image, title, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();
    
    
    const removeFromCart = () => {
        //remove from cart
        dispatch({
            type: "REMOVE_FROM_CART",
            id:id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct__image' src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>UGX </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">{       
                    Array(rating) 
                    .fill()
                            .map((_, i) => (
                                <Star className="rating__star"
                                />))
                }</div>
                {/* onClick={removeFromCart()} */}
                <button onClick={removeFromCart} >Remove from cart</button>
            </div>        
        </div>
    )


}

export default CheckoutPoduct
// onClick={removeFromCart}