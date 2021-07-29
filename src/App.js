import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Footer from "./Footer";
import Header from "./Header";
import Shop from "./LandingPage";
import Login from "./Login";
import  Payment  from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import  ContactPage  from "./ContactPage";
import ProductScreen from "./ProductScreen";
import { useStateValue } from "./StateProvider";
import Wuzi_home from "./WuziHome";


const promise = loadStripe("pk_test_51HzK9kI42NMmSRyA4unYMwfpK2Lp8vjxFGP23sHYh1iCj7JJnihgKEdmnl6c4XtYxhk5BSXqD3orEgxW9dFowACh00kBg18n0r");

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is', authUser)
      if (authUser) {
        // user login
        dispatch({
          type: "SET_USER",
          user: authUser
      })
      } else {
                // user logout
        dispatch({
          type:
            "SET_USER",
          user: null
        })
          
        
    }
  })
}, [])


  return (
    <Router>
      <div className="app">
      
        <Switch>
          

          
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>

          <Route path="/product/:id"  component={ProductScreen}>
          </Route>
        
          <Route path="/shop">
          <Header />
            <Shop />                     
          </Route>
          
          <Route path="/payment">
            <Header />
            <Elements stripe={promise} >
            <Payment />
            </Elements>                       
          </Route>

          
          <Route path="/about">
          <Header />
            <AboutPage />                     
          </Route>

          <Route path="/contact">
          <Header />
            <ContactPage />                     
          </Route>
        
          <Route path="/login">
            <Login/>
          </Route>


          <Route path="/">
          <Wuzi_home/>
          </Route>



        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
