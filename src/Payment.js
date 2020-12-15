import React, { useRef } from 'react'
import CheckoutPoduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider'


function Payment() {
    const [{ cart, user }] = useStateValue();
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
                    </div>
                </div>


            </div>
            
        </div>
    )
}


export default Payment
