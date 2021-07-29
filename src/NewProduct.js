import React from 'react'
import './NewProduct.css'
import fleece from "./images/fleece.jpg";
import { useStateValue } from "./StateProvider"
import CurrencyFormat from "react-currency-format";
import Cart from "@material-ui/icons/ShoppingCartOutlined"
import Ratings from "@material-ui/icons/Star"
import { Link } from 'react-router-dom';



function NewProduct(props) {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        });
        alert("Added "+props.title+" to Shopping Cart")
        
    };


    // const openProductPage = (id, title, image, price, rating) => {
    //     //window.open("/product/" + id)
    //    // console.log("product data:",id, title, image, price, rating)
    //     alert("Item here", id);
    // }


    return (

        <div className="newProduct__holder">
            <Link to={"/product/" + props.id} key={props.id} >
            <img className="newProduct__image" src={props.image} alt={props.title} />
            </Link>
            <div className="newProduct__infoAllHolder">

                <h1 className="newProduct__productHeading">{props.title}</h1>

                <div className="newProduct__productInfoHolder">
                    <p className="newProduct__info">{props.desc}</p>
                </div>
               {         
                    Array(props.rating) 
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
                value={props.price}
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
