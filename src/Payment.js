import React, { useState } from 'react'
import CheckoutPoduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider'
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getCartTotal } from './reducer';



function Payment() {
    const [{ cart, user }] = useStateValue();

    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = e => {
        //stripe work....

        
    } 

    const handleChange = e => {
        //listen to card changes
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");

        
    }

    return (
        <div className="payment">
            <div className='payment__container'>
                {/* delivery address */}
                {/* review Items  */}
                {/* paymeny method */}

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{ user?.email}</p>
                        <div>
                            <p>Entebbe Road</p>
                            <p>Bwebajja</p>
                            <p>Arkright Estate, plot 56</p>
                        </div>
                    </div>
                </div>

                
                <div className="payment__section">
                <div className="payment__title">
                        <h3>Review Items & Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {cart.map(item => (
                            <CheckoutPoduct id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}/>   
                        ))}
                    </div>
                </div>


                
                <div className="payment__section">
                <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>        
                    <div className="payment__details">
                        {/* payment plato goes here */}

                        <form onSubmit={handleSubmit}>

                            
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">

                            
                                
                                <CurrencyFormat
                                renderText={(value) => (
    
                        <h3> 
                            Order Total({cart?.length} items):
                <strong>{value}</strong>
                        </h3>
 
                )}
                 
                decimalScale={1}
                thousandSeparator={true}
                value={getCartTotal(cart)}
                displayType={"text"}
                                prefix={"UGX "}
                                />




                                <button>
                                    disabled={processing || disabled || succeeded}
                                    <span>{processing ? <p>processing payment</p> :
                                    "Buy Now"}</span>
                                </button>

                            </div>
                        </form>
                        
                    </div>
                </div>


            </div>
            
        </div>
    )
}


export default Payment
