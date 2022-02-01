import React from "react";
import WuziButton from "../images/new-btn.png";
import "./HeroSection.css";
import Firebrand from "../images/firebrand-dixon-muneza.png";

function HeroSection() {
  return (
    <div className="hero-holder">
      <div className="hero-holder-content">
        <img className="firebrand" src={Firebrand} />
        <h2 className="hero-heading">Welcome To Wuzi Africa</h2>
        <p className="hero-sub-heading">
        Say hello to our incredible out-fits from outstanding designers that featured on the Shebang fashion show.
        </p>
        {/* <img className="hero__btn black_btn">EXPLORE MORE/</img>> */}
              <img className="hero__btn_" src={ WuziButton}/>
          </div>
    </div>
  );
}

export default HeroSection;
