import React from "react";
import banner from "./images/converse.jpg";
import "./LandingPage.css";
import Product from "./NewProduct";

import Product1 from "./SingleProduct";
import k1 from "./images/hoodie.jpg";
import k2 from "./images/joggers.jpg";
import yoga from "./images/yoga.jpg";
import fleece from "./images/fleece.jpg";
import yk from "./images/winter.jpg";
import yao from "./images/fl.jpg";
import nike  from "./images/uptempo.jpg";
import jacket from "./images/jacket.jpg";
import max from "./images/jacket.jpg";
import strike from "./images/strike.jpg";
import  Breadcrumb  from "./BreadCrumb";




function LandingPage() {
  return (
    <div className="home">
      <img className="home__image"
         />
      <div className="product__title__div">

        <h1 className="product__title">Shop</h1>
      </div>


    
      <div >
      <Breadcrumb className="breadcrumb__" pagename="All Products"/>
        <h2 className="top__product__title">Featured Items </h2>

      </div>

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
        image={fleece}
       title="The Nike Yoga Fleece Cover Up made with soft thermal fabric for warm comfort. A relaxed, stretchy design lets you wear it as a V-neck or off the shoulder.">
     
        </Product1>
             
      </div>


      <div className="products__heading">
        <h3>All Items</h3>
        <button>Filter</button>
      </div>      
          

       {/* fist 4 products */}

      <div className="home__row2">
      <Product
          id="1218"
          key={7}
        price={110000}
        rating={5}
        image={yk}
       title="Beautifully made kitenge dress with nice fabric by Zzula Designs.">   
        </Product>
        <Product
             key={8}
        id="1219"
        price={265000}
        rating={5}
        image={yao}
       title="The Nike Standard Issue Pullover Hoodie is made to play in and wear all day.">   
        </Product>
        <Product
        id="1210"
        price={400000}
          rating={5}
          key={9}
        image={k2}
       title="Beautifully made kitenge dress with nice fabric by Zzula Designs.">   
        </Product>
        <Product
          id="12111"
          key={10}
        price={6000000}
        rating={5}
        image={k1}
       title="Beautifully made kitenge dress with nice fabric by Zzula Designs.">   
        </Product>
      </div>

             {/* Second 4 products */}

      <div className="home__row2">
      <Product
          id="1218"
          key={7}
        price={400000}
        rating={5}
        image={nike}
       title="Beautifully made kitenge dress with nice fabric by Zzula Designs.">   
        </Product>
        <Product
             key={8}
        id="1219"
        price={400000}
        rating={5}
        image={max}
       title="The Nike Standard Issue Pullover Hoodie is made to play in and wear all day.">   
        </Product>
        <Product
        id="1210"
        price={400000}
          rating={5}
          key={9}
        image={jacket}
       title="Beautifully made kitenge dress with nice fabric by Zzula Designs.">   
        </Product>
        <Product
          id="12111"
          key={10}
        price={400000}
        rating={5}
        image={strike}
       title="Beautifully made kitenge dress with nice fabric by Zzula Designs.">   
        </Product>
      </div>

    </div>
    
  );
}

export default LandingPage;
