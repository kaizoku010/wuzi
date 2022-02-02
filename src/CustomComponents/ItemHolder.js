import React from "react";
import "./ItemHolder.css";
import Test from "../images/dummy.jpg";

function ItemHolder() {
  return (
    <div>
      <div class="container">
        <img src={Test} alt="item-title" className="item-img" />
        <p class="bottom-left">$300</p>
          </div>
          <div className="details-holder">
              <h3>Product Title</h3>
              <h4>Designer</h4>
          </div>
    </div>
  );
}

export default ItemHolder;
