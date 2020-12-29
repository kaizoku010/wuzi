import React from 'react'
import { Link } from 'react-router-dom';
import "./AboutPage.css";
import BreadCrumb from './BreadCrumb';
import banner from './images/koffee.jpg'
import banner2 from './images/twf.jpg'
import bolt from './images/bolt.png'

function AboutPage() {
    return (
        <div className="about__holder">
            {/* Header */}
            <div className="about__header">
             <h1 className="about__title">About</h1>
            </div>
            {/* breadCrumb */}
            <BreadCrumb pagename="About Wuzi"/>
            {/* body */}
            <div className="about__body">
                {/* first div */}
                <div className="first__row">
                    <h3>Wuzi</h3>
                    <h4 className="about__subHeading">Wuzi is a property of twf(the wellbeing foundation)</h4>
                    <p className="about__text">
                    By signing-in you agree to Wuzi's Conditions of Use & Sale.
                    Please see our Privacy Notice, Our Cookies Notice and our 
                    Interest-Based Ads Notice.
                    </p>
                    <img className="about__img" src={ banner }/>
                </div>
               
                {/* second div */}
                <div className="first__row">
                    <img className="about__img" src={banner2} />
                

                    <h3>About Twf</h3>
                    <h4 className="about__subHeading">The wellbeing foundation Uganda</h4>

                    <p className="about__text">
                    By signing-in you agree to Wuzi's Conditions of Use & Sale.
                    Please see our Privacy Notice, Our Cookies Notice and our 
                    Interest-Based Ads Notice.
                    </p>
                </div>
                               
            </div>
            {/* about content layout, shld be in body though...lol */}

            <div className="howItWorks">
               
                <h3 className="howItWorks__heading">HOW IT WORKS</h3>
                <h1 className="title__underline"></h1>
          
          
          
                <div className="how_it_works">
                <div className ="howItWorks__holder">
                    <img className="howItWorks__img" src={bolt} />
                    <h4 className="howItWorks__title">DELIVERY PLAN </h4>
                    <p className="howItWorks__discription">By signing-in you agree to Wuzi's Conditions of Use & Sale.
                    Please see our Privacy Notice,
                         Our Cookies Notice and our Interest-Based Ads Notice.</p>
                    </div>
                    


                <div className ="howItWorks__holder">
                    <img className="howItWorks__img" src={bolt} />
                    <h4 className="howItWorks__title">DELIVERY PLAN </h4>
                    <p className="howItWorks__discription">By signing-in you agree to Wuzi's Conditions of Use & Sale.
                    Please see our Privacy Notice,
                         Our Cookies Notice and our Interest-Based Ads Notice.</p>
                    </div>
                    


                <div className ="howItWorks__holder">
                    <img className="howItWorks__img" src={bolt} />
                    <h4 className="howItWorks__title">DELIVERY PLAN </h4>
                    <p className="howItWorks__discription">By signing-in you agree to Wuzi's Conditions of Use & Sale.
                    Please see our Privacy Notice,
                         Our Cookies Notice and our Interest-Based Ads Notice.</p>
                </div>
                </div>
        
                </div>
            
   
   
            {/* call to action here seebo */}
            <div className="cta__holder">
            <h3 className="cta__header">Wat Else ?</h3>
                <h1 className="cta__header1"></h1>
                


                <div className="call__to__action">
                    <div className="cta__heading">
                        <p>Learn More About The wellBeing foundation</p>
                    </div>

                    <div className="cta__button">
                        <Link to="wellbeingfoundation.org">
                        <button className="btn__visit">VISIT TWF</button>
                        </Link>

                        <Link to="./contact">
                            <button className="btn__callUs">CONTACT  US</button>
                            </Link>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default AboutPage
