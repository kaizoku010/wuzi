import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import Product from "./NewProduct";
import Product1 from "./SingleProduct";
import data_ from "./dataPoint/AllShopProducts";
import yoga from "./images/yoga.jpg";
import Breadcrumb from "./BreadCrumb";
import { Link } from "react-router-dom";
import  axios from "axios";


function LandingPage() {

  const [products, setProduct] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const {data} = await axios.get("/api/products/")
      setProduct(data);
      console.log("axios data:", data);
    }

    getData();

    return () => {
      //
    }
  }, [])


  return (
    <div className="home">
      <img className="home__image"
         />
      <div className="product__title__div">

        <h1 className="product__title">Shop</h1>
      </div>


    
      <div >
        <Breadcrumb className="breadcrumb__" pagename="All Products" />
                {/* //featured items */}

        <h2 className="top__product__title">Featured Items </h2>

      </div>
        {/* //featured items */}
      {/* fist 2 products */}
      <div className="home__row">
        <Product1
          key={1}
        id="1212"
        price={390000}
        rating={5}
        image={yoga}
       title="A Nike Yoga Tank with a longer length and a little bit of stretch for extra coverage when you bend, stretch and balance. Dri-FIT technology wicks sweat to keep you dry.">
     
        </Product1>
        <Product1
          id="1213"
          key={2}
        price={250000}
        rating={5}
        image={yoga}
       title="The Nike Yoga Fleece Cover Up made with soft thermal fabric for warm comfort. A relaxed, stretchy design lets you wear it as a V-neck or off the shoulder.">
     
        </Product1>
             
      </div>


      <div className="products__heading">
        <h3>All Items</h3>
        <button>Filter</button>
      </div>      
          

       {/* fist 4 products */}

      <div className="home__row2">


        <ul className="product__list">
          {""}
          {data_.products.map((product) => (
            <li key={product._id}  className="product__list__"  >
              <Product
          id={product._id}
         price={product.price}
         rating={product.rating}
                  image={product.image}
                  closeUpOne={product.closeUpOne}
                  closeUpTwo={product.closeUpTwo}
         desc={product.description}
         title={product.title_}>   
          
        </Product>

            </li>
          ))}
      </ul>


      </div>
  </div>
    
  );
}

export default LandingPage;
