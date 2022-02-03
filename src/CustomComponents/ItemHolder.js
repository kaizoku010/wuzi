import React from "react";
import "./ItemHolder.css";
import Test from "../images/dummy.jpg";

function ItemHolder(props) {
  return (
    <div>
      <div class="container">
        <img src={props.img} alt="item-title" description="BANTU" className="item-img" />
        <p class="bottom-left">$300</p>
          </div>
          <div className="details-holder">
              <h3 className="text-left" >Product Title</h3>
              <h4 className="text-left">Designer</h4>
          </div>
    </div>
  );
}

export default ItemHolder;
