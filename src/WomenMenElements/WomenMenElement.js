import React from 'react'
import "./WomenMenElement.css"
import carol from "./images/hoodie.jpg"
import man from "./images/winter.jpg"

function WomenMenElement() {
    return (
        <div className='productInfo__holder'>
            <div className="product__sales">
                <h3 className="product___title">The Wellbeing foundation Uganda</h3>
                <p className="product__subtitle">We believe human connection can be the tool for change in one’s life by being the bridge
                for a permanent shift in the mindset.</p>
            </div>
            <button className="product__btn">Visit Us</button>

        </div>
    )
}

export default WomenMenElement
