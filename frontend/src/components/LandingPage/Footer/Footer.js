import React from 'react';
import Gollaa_logo from '../../../assets/images/Gollaa_logo.svg';
import Contact from '../../../assets/images/contact.png';
export default function Footer(){

    return(
        <div className="Footer">
            
            <div className="Footer-col1">
                <div className="Footer-col1-row1">

                </div>

                <div className="Footer-col1-row2">

                </div>
            </div>


            <div className="Footer-col2">
                <p className="Footer-col2-info">Contact us</p>

               <div className="Footer-col2-details"> 
                    <div className="Footer-col2-details-contact"> 
                        <img src={Contact} alt="contact"/>
                        <span>+(91) 9810 XXXX XX </span>
                    </div>

                    <div className="Footer-col2-details-contact"> 
                        <img src={Contact} alt="contact"/>
                        <span>+(91) 9810 XXXX XX </span>
                    </div>

                    <div className="Footer-col2-details-contact"> 
                        <img src={Contact} alt="contact"/>
                        <span>+(91) 9810 XXXX XX </span>
                    </div>

                    <div className="Footer-col2-details-contact"> 
                        <img src={Contact} alt="contact"/>
                        <span>+(91) 9810 XXXX XX </span>
                    </div>
                </div>
            </div>


            <div className="Footer-col3">
                <div className="Footer-col3-row1">
                    <p>Information</p>
                    <p>Blog</p>
                </div>
                <div className="Footer-col3-row2">
                    <div className="Footer-col3-row2-col1">
                        <p>About Us</p>
                        <p>Our Story</p>
                    </div>

                    <div className="Footer-col3-row2-col2">
                        
                    </div>

                </div>

            </div>

            <div className="Footer-col4">
                <div className="Footer-col4-logo">
                   <img src={Gollaa_logo} alt="Gollaa Logo"/>
                </div>
            </div>


        </div>
    )
}