import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { Link, useHistory } from "react-router-dom";

function SubTotal() {
  const history = useHistory();
  const [{ cart }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({cart?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={1}
        thousandSeparator={true}
        value={getCartTotal(cart)}
        displayType={"text"}
        prefix={"$"}
      />

      <button
        onClick={(e) => history.push("/payment")}
        className="subtotal__button"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default SubTotal;
