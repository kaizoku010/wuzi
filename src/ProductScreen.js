import { Link } from '@material-ui/core'
import React from 'react'
import Product from './Product'
import "./ProductScreen.css"

function ProductScreen(product) {
 //   const { product } = this.props.product;
     return (
        <div>
        <div className="product__BacktoHome">
            <Link to="/">Back</Link>
            </div>
            <div className="details">   
                <div className="product__image" >
                    <img src={product.image}/>
                </div>
                <div className="product__details">
                    <ul>
                        <li>
                            <h4>{product.title}</h4>
                        </li>
                        <li>
                            stars
                        </li>
                        <li>{product.price}</li>
                        <li>{product.detials}</li>
                    </ul>
                </div>
                <div className="product__action">
                    <ul>
                        <li>{product.price}</li>
                        <li>Status</li>
                        <li>
                            Qty:
                             <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                             </select>
                        </li>
                        <li>
                            <button className="product__button">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;
