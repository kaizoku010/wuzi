import React from 'react'
import './Product.css'
import fleece from "./images/fleece.jpg";
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider"
import Ratings from "@material-ui/icons/Star"
import NewProduct from "./NewProduct"



function Product({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();
  //  const [{ id, title, image, price, rating }] = useStateValue();
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
    //    window.open("/product/" + id)
        console.log("Old product data:", id)
     //   history.push("/product",`${ id, title, image, price, rating}`
       // )
    }



    return (
        <div className="newProduct__holder_">

<Link to={"/product/" + id}>    
            <img className="newProduct__image_" />
            </Link>      
            <div className="newProduct__infoAllHolder_">

                <h1 className="newProduct__productHeading_">PRODUCT INFO</h1>

                <div className="newProduct__productInfoHolder_">
                    <p className="newProduct__info_">{title}</p>
                </div>
               {         
                    Array(rating) 
                    .fill()
                            .map((_, i) => (
                                <Ratings className="newProduct__rating_"/>
                                ))
                    }    

                <div className="newProduct__buttonHolder_">
                <button className="newProduct__addToCart_"  onClick={addToCart}>ADD TO CART</button>

                    <h1 className="newProduct__price_">
                        
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p> 
                            Subtotal({cart?.length} items):
                <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift"> 
                            <input type="checkbox"/>This order contains a gift
                        </small>
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

export default Product
