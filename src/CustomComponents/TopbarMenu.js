import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./TopbarMenu.css";
import SearchIcon from "@material-ui/icons/Search";
import User from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import Logo from "../images/logo_black.png";
import { Input, InputAdornment } from "@material-ui/core";

function TopbarMenu() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  if (cart.length + 1) {
    console.log("hellllloooo world");
  }

  return (
    <div className="wuzi_header">
      {/* shipping notice */}

      {/* top element */}
      <div className="shipping_notice">
        <p>FREE STANDARD SHIPPING & RETURNS</p>
        <p>GIVE OUT-OF-USE GEAR NEW LIFE & GET REWARDED</p>
      </div>

      <div className="twf-visit">

<Link>also visit <span className="bold-text">The Wellbeing Foundation</span></Link>
        <Link>help</Link>
        <Link>exchange & returns</Link>
        <Link>order tracker</Link>
        <Link>Join wuzi club</Link>


      </div>

      {/* main menu */}
      <nav className="primary_menu">
        {/* left_widget logo */}
        <Link>
<img className="wuzi_logo" src={Logo} alt="wuzi logo" />
        </Link>

        {/* middle element */}
        <div className="middle_widget">
          {/* Shop */}
          <Link>
            
            <p className="wuzi_bold">SHEBANG</p>
          </Link>
          {/* shebang fashion */}
          <Link>
            <p className="wuzi_bold">SHOP</p>
          </Link>
          {/* Designs */}
          <Link>
            <p className="wuzi_bold">DESIGNERS</p>
          </Link>

          {/* About */}
          <Link>
            <p>ABOUT</p>
          </Link>
          {/* Reach Out */}
          <Link>
            <p>REACH OUT</p>
          </Link>
        </div>

        {/* right element */}
        <div className="right_widget">
          {/* search */}

          <Input
            type="text"
            className="search_widget"
            startAdornment={
              <InputAdornment position="right">
                <SearchIcon className="search_icon" />
              </InputAdornment>
            }
          />

          {/* Acount */}

          <Link to={!user && "/login"} className="header__link">
            <div onClick={handleAuth} className="header__options">
              <User className="user_account_ic" />
            </div>
          </Link>

          {/* Cart */}
          <Link className="wuzi-menu-link user_account_ic " to="/checkout">
            <div className="header__optionsBasket">
              <ShoppingCartIcon className="user_account_ic" />
              <span className="header__optionsLineTwo header__basketCount wuzi-item-count">
                {cart?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default TopbarMenu;
