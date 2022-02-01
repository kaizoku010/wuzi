import React, { useEffect, useState } from "react";
import CheckoutPoduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getCartTotal } from "./reducer";
import { Link, useHistory } from "react-router-dom";
import axios from "./axios";
import FlutterWave from "./FlutterWave.js";

function Payment() {
  const [{ cart, user }] = useStateValue();
  const history = useHistory();

  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState('');
  const stringClientSecret = clientSecret.toString();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //convert to subunites
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  console.log("The client secret is " + stringClientSecret);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    //stripe work....
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(stringClientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replaceState("/orders");
      });
  };

  const handleChange = (e) => {
    //listen to card changes
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        {/* delivery address */}
        <h1>
          Checkout(
          <Link to="/checkout">{cart?.length}Items</Link>)
        </h1>
        {/* review Items  */}
        {/* paymeny method */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          {/* delivery address */}
          <div className="payment__address">
            <p>{user?.email}</p>
            <div>
              <p>Entebbe Road</p>
              <p>Bwebajja</p>
              <p>Arkright Estate, plot 56</p>
            </div>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items & Delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutPoduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* payment plato goes here */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>
                      Order Total({cart?.length} items):
                      <strong>{value}</strong>
                    </h3>
                  )}
                  decimalScale={1}
                  thousandSeparator={true}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  prefix={"UGX "}
                />

                <button>
                  {processing || disabled || succeeded}
                  <span>
                    {processing ? <p>processing payment</p> : "Buy Now"}
                  </span>
                </button>
              </div>
              {/* errors */}
              {error && <div>{error}</div>}
            </form>
<FlutterWave/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
