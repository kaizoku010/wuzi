import React from 'react'
import "./ContactPage.css";
import BreadCrumb from "./BreadCrumb";
import Location__ from '@material-ui/icons/LocationOnSharp';
import Phone__ from '@material-ui/icons/Phone';
import Mail__ from '@material-ui/icons/Mail';
import Phone__two from '@material-ui/icons/Phone';

function ContactPage() {
    return (
        <div className="contact__page" >

        <div className="contact__body">
            {/* <div className="top__div">
       <BreadCrumb pagename="Contact Us"/>
            </div> */}
            
                <div className="contact__holder">
                
                <div className="contact__left">
                    <div className="contact__heading">
                        <p><span>Still have</span></p>
                            <p className="contact__question"> a question?</p>
                    </div>
                    <div className="contact__info">
                        <div className="contactInfo__holder">
                            <div className="contactInfo__">
                                <Location__ className="contact__ic"/>
                                <h3>STATION</h3>
                                <p>Kisenyi plot 255</p>
                                <p>Uganda kampala</p>
                            </div>
                            <div className="contactinfo__">
                            <Phone__ className="contact__ic"/>

                            <h3>CONTACT</h3>
                                <p>0753971151</p>
                                <p>e5410y@gmail.com  </p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <div className="contactInfo__holder">
                            <div className="contactInfo__">
                            <Phone__two className="contact__ic"/>

                                <h3>TWF CONTACT</h3>
                                <p>Kisenyi plot 255</p>
                                <p>Uganda kampala</p>
                            </div>
                            <div className="contactInfo__ extras">
                            <Mail__ className="contact__ic"/>

                            <h3>SALES</h3>
                                <p>0753971151</p>
                                <p>A1223kh@gmail.com</p>
                            </div>
                        </div>
          
                    </div>
                </div>
                
                <div className="contact__right">
                    {/* <img className="contact__img" src={map}/> */}
            </div>
            
        </div>
            </div>
            </div>
    )
}

export default ContactPage
