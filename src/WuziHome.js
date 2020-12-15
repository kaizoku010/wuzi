import React, { useEffect } from 'react'
import "./Wuzi_home.css";
import fleece from "./images/fleece.jpg";
import bolt from "./images/bolt.png";
import apparel from "./images/apparel.png";
import eqaual from "./images/equality.png";
import profits from "./images/profits.png";
import work from "./images/working.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";

import logo from "./images/logo.png";
import { useStateValue } from './StateProvider';
import { useState } from 'react';
import { useRef } from 'react';
import Carousell from './Carousel';

function WuziHome() {
  const [header_, setNavBar] = useState(false);
  const navRef = useRef()
  navRef.current = header_
  useEffect(() => {
    const changeHeaderBackground = () => {
      if (navRef.current !== true) {
        setNavBar(true);
      } 

    }

    window.addEventListener("scroll", changeHeaderBackground);
    return () => {
      document.removeEventListener('scroll', changeHeaderBackground)
    }
  }, [])

 
  const [{ cart, user }, dispatch] = useStateValue();
 
  return (
        <div>
        {/* header and image section below */}
            <div>
            <nav className={header_?'active':'header_'}>
      {/* get the logo from shyaka */}
      <meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width"
/>
      <Link to="/">
        <img className="header__logo" src={logo} alt="wuzi_logo" />
      </Link>
      {/* searchbox */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* signin link */}
        <Link to='/login' className="header__link" >
          <div className="header__options">
            <span className="header__optionsLineOne">Hello, {user?.email}</span>
            <span className="header__optionsLineTwo">SignIn</span>
          </div>
        </Link>

        {/* Retuns link */}

        <Link className="header__link" to="/shop">
          <div className="header__options">
            <span className="header__optionsLineOne">View</span>
            <span className="header__optionsLineTwo">Shop</span>
          </div>
        </Link>

        {/* About link */}

        <Link className="header__link" to="/about">
          <div className="header__options">
            <span className="header__optionsLineOne">About</span>
            <span className="header__optionsLineTwo">wuzi</span>
          </div>
        </Link>
{/* contact us */}
        <Link className="header__link" to="/contact">
        <div className="header__options">
            <span className="header__optionsLineOne">Contact</span>
            <span className="header__optionsLineTwo">Us</span>
          </div>
        </Link>

        {/* cart link */}
        <Link className="header__link" to="/checkout">
          <div className="header__optionsBasket">
            <ShoppingCartIcon />
            <span className="header__optionsLineTwo header__basketCount">
            {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
        </div>

        <div className="home__">

        {/* <h1 className="hero__title">Properties Of Relativity</h1> */}
        
        <div className="home_discount__holder">
          <div className="home__discount">
            <p className="discountUp__text">UP</p>
            <p>TO</p>
          </div>
          <h2 className="discount__off">30% OFF</h2>
        </div>
    
        <h1 className="hero__title">ALL ZUULA DRESSES</h1> 
    <p className="hero__description__">Setting the top, right, bottom, and left unregister to register below.</p>
          <Link to="/shop">
          <button className="hero__btn">SHOP NOW</button>
          </Link>
        </div>

        {/* second element */}

        <div className="arrivals__holder">
          <h2>NEW ARRIVALS</h2>
          <p>The Best Online Sales This Week</p>
        </div>
      <div className="hero__element">
        
        <Carousell/>
        <div className="right__section">
          <div className="hero__elementRightContentHolder">
            <h3 className="headerRight__Section">
              BIG SALE
            </h3>
            <h2 className="text__right__section">
            Fleece Sweaters
            </h2>
            <Link to="/Shop">
            <button className="btn__">Get Items</button>
            </Link>
          </div>
    
          <div className="hero__elementRightContentHolder2">
            
          <h3 className="headerRight__Section">
            X-MAS SEASON
            </h3>
            <h2 className="text__right__section">
            START YOUR HOLIDAY SOON
            </h2>
          <Link to="/Shop">
            <button className="btn__">Shop Now</button>
            </Link>
          </div>

          </div>
        


        

        </div>
        
  
        <div className="hero__motivation">
          <div className="hm__holder">
            <img className="hm__img" src={apparel} />
            <p className="hm__text">Apperal that changes the world</p>
          </div>
          <div className="hm__holder">
            <img className="hm__img" src={work} />
            <p className="hm__text">Apperal that changes the world</p>
          </div>
          <div className="hm__holder">
            <img className="hm__img" src={eqaual} />
            <p className="hm__text">Apperal that changes the world</p>
            
          </div>
          <div className="hm__holder">
            <img className="hm__img" src={profits} />
            <p className="hm__text">Apperal that changes the world</p>
            
          </div>

          
          <div className="hm__holder">
            <img className="hm__img" src={bolt} />
            <p className="hm__text">Apperal that changes the world</p>
            
          </div>
</div>
        
                     
        </div>
    )
}

export default WuziHome;
