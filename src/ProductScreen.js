import { Link } from '@material-ui/core'
import React from 'react'
import "./ProductScreen.css"
import CurrencyFormat from "react-currency-format"
import Ratings from "@material-ui/icons/Star"
import data from "./dataPoint/AllShopProducts";
import Header from './Header';
import { useStateValue } from './StateProvider';




function ProductScreen(props) {
const  product  = data.products.find((x) => x._id === props.match.params.id)
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: product._id,
                title: product.title_,
                image: product.image,
                price: product.price,
                rating: product.rating,
               
            },
        });
    }
    console.log("product here is:", product.title_);
    
    return (
        <div className="ps__holder">
            <Header/>
        <div className="product__BacktoHome">
            </div>
            <div className="details">   
                <div >
                    <img className="product__image" src={product.image}/>
                </div>

         <div className="desc__holder">       
                <div >
                    <h4 className="singleproduct__title" >{ product.title_}</h4>
                </div>
                <div >
                        <p className="product__desc">{product.description}</p>
                   
                
                        <p><strong>STATUS:</strong>{product.status}</p>
                        <p><strong>CATEGORY:</strong>{ product.category}</p>
                        <p><strong>BY:</strong>{product.brand}</p>
                        {         
                    Array(product.rating) 
                    .fill()
                            .map((_, i) => (
                                <Ratings className="newProduct__rating"/>
                                ))
                    }  
                        
                </div>
                <img className="productCloseUp__One" src={product.closeUpOne}/>
                    <img className="productCloseUp__two" src={product.closeUpTwo}/>
                
                </div>

                <div className="singleProduct__priceHolder">
                <div className="singleProduct__price">
                        <CurrencyFormat
                decimalScale={1}
                thousandSeparator={true}
                value={product.price}
                displayType={"text"}
                prefix={"UGX "}
            />
                </div>
                <div className="singleProduct__cart" >
                    <button onClick={addToCart} className="singleProduct__cartBtn">Add to Cart</button>
                </div>
                </div>
                </div>
        </div>
    )
}

export default ProductScreen;
