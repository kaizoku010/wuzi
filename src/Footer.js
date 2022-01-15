import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__div">
      <footer className="footer ">
        <div className="footer__holder">
          <h1 className="footer__holderItem">About Wuzi </h1>

          <p className="footer__about">
            By signing-in you agree to Wuzi's Conditions of Use & Sale. Please
            see our Privacy Notice, Our Cookies Notice and our Interest-Based
            Ads Notice.
          </p>
        </div>
        <div className="footer__holder">
          <Link to="/">
            <p className="footer__holderItem">Shop with us </p>
          </Link>
          <Link to="/">
            <p className="footer__holderItem">Orders & products </p>
          </Link>
          <Link to="/">
            <p className="footer__holderItem">FAQs </p>
          </Link>
        </div>
        <div className="footer__holder">
          <Link to="/">
            <p className="footer__holderItem">Whats else ? </p>
          </Link>
          <Link to="/">
            <p className="footer__holderItem">Shipping & Returns </p>
          </Link>
          <Link to="/">
            <p className="footer__holderItem">Contact Us </p>
          </Link>
        </div>
        <div className="footer__holder ">
          <div className="footer___"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
