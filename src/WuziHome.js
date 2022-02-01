import React, { useEffect } from "react";
import "./Wuzi_home.css";
import bolt from "./images/bolt.png";
import apparel from "./images/apparel.png";
import eqaual from "./images/equality.png";
import profits from "./images/profits.png";
import work from "./images/working.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import Arrow from "@material-ui/icons/ArrowForward";
import logo from "./images/logo.png";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import { useRef } from "react";
import Carousell from "./Carousel";
import ham from "./images/ham.png";
import WomenMenElement from "./WomenMenElements/WomenMenElement";
import ShopCollection from "./MobileView/ShopCollection";
import Menu from "./Menu";
import TopbarMenu from "./CustomComponents/TopbarMenu";

function WuziHome() {
  const [header_hm, setNavBar] = useState(false);
  const navRef = useRef();
  navRef.current = header_hm;

  useEffect(() => {
    const changeHeaderBackground = () => {
      if (navRef.current !== true) {
        setNavBar(true);
      }
    };

    window.addEventListener("scroll", changeHeaderBackground);
    return () => {
      document.removeEventListener("scroll", changeHeaderBackground);
    };
  }, []);

  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div>
      {/* header and image section below */}
      <div className="top__header">
        <nav className={header_hm ? "active" : "header_hm"}>
          {/* get the logo from shyaka */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <Link to="/">
            <img className="header__logo" src={logo} alt="wuzi_logo" />
          </Link>

          <Menu className="mobile_menu" />

          {/* searchbox */}
          <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
          </div>

          <div className="header__nav">
            {/* signin link */}
            <Link to="/login" className="header__link">
              <div className="header__options">
                <span className="header__optionsLineOne">
                  Hello, {user?.email}
                </span>
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
            {/* <img className="menu_ic wuzi_menu" src={ ham } /> */}
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

        <div className="home_discount__holder">
          {/* discount element */}
          <div className="home__discount">
            <p className="discountUp__text">UP</p>
            <p>TO</p>
          </div>
          
          <h2 className="discount__off">30% OFF</h2>
        </div>

        <h1 className="hero__title">ALL SEW BANTU</h1>
        <p className="hero__description__">
          Setting the top, right, bottom, and left unregister to register below.
        </p>
        <Link to="/shop">
          {/* //<Arrow className="arrow"/> */}
          <button className="hero__btn">CHECK IT OUT</button>
          {/* <button className="hero__btn2">contact us</button>   */}
        </Link>

      </div>

      {/* second element */}

      <div className="arrivals__holder">
        <h2>NEW ARRIVALS</h2>
        <p>The Best Online Sales This Week</p>
      </div>

      {/* //mobile element goes here..... */}
      <ShopCollection />

      <div className="hero__element">
        <Carousell />
        <div className="right__section">
          <div className="hero__elementRightContentHolder">
            <h3 className="headerRight__Section">EPIC SALES</h3>
            <h2 className="text__right__section">Fleece Sweaters</h2>
            <Link to={"/product/" + 3}>
              <button className="btn__">Get Items</button>
            </Link>
          </div>

          <div className="hero__elementRightContentHolder2">
            <h3 className="headerRight__Section">NEW YEAR'S SEASON</h3>
            <h2 className="text__right__section">JUMP START YOUR 2022</h2>
            <Link to={"/product/" + 6}>
              <button className="btn__">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* sex element */}
      <WomenMenElement />

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
  );
}

export default WuziHome;
