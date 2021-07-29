import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { auth } from "./firebase";
import "./Header.css";
import logo from "./images/logo.png";
import hum from "./images/menu.png";
import { useStateValue } from "./StateProvider";


function Header() {

  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      
    }
  }

  // useEffect(() => {
  //   cart.length 
  //   return () => {
  //     cleanup
  //   }
  // }, [cart])


 
  if (cart.length + 1) {
    console.log('hellllloooo');
    
  }
  return (
    <nav className="header">
      {/* get the logo from shyaka */}
      <meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      
      <Link>
        <img className="menu_ic" src={ hum }/>
      </Link>
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
        <Link to={!user && '/login'} className="header__link" >
          <div onClick={handleAuth} className="header__options">
            <span className="header__optionsLineOne">Hello, {user?.email}</span>
            <span className="header__optionsLineTwo">{user? "SignOut" : "SignIn"}</span>
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
            <ShoppingCartIcon className="cart__anime" />
            <span className="header__optionsLineTwo header__basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
