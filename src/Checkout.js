import React from 'react'
import { useHistory } from 'react-router-dom';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Banner from "./images/wuzi__ad.jpg"
import { useStateValue } from './StateProvider';
import SubTotal from './SubTotal';

function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={Banner} alt="dfdfdfd" />
                
                <h3 className="user_checkour_header">Your shopping cart, {user?.email}</h3>
                <div className="checkout__title">
                
                    {cart.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                      />
                ))}
                    
                    {/* CheckoutPoduct */}
                    {/* CheckoutPoduct */}
                    {/* CheckoutPoduct */}
                    {/* CheckoutPoduct */}
                </div>
            </div>
            
            <div className="checkout__right">
            <SubTotal />
            </div>


        </div>
    )
}

export default Checkout;
