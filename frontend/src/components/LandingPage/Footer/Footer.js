import React from 'react';
import Gollaa_logo from '../../../assets/images/Gollaa_logo.svg';
import Phone from '../../../assets/images/phone.svg';
import Email from '../../../assets/images/email.svg';
import Time from '../../../assets/images/time.svg';
import {Link} from 'react-router-dom';

export default function Footer(){

    return(
        <div className="Footer">
            
            <div className="Footer-col1">
                <button>Download app</button>
            </div>


            <div className="Footer-col2">
              

               <div className="Footer-col2-details"> 

               <p className="Footer-col2-details-info">Contact Us</p>

                    <div className="Footer-col2-details-contact"> 
                        <img src={Phone} alt="contact"/>
                        <span>+(91) 9810 XXXX XX </span>
                    </div>

                    <div className="Footer-col2-details-contact"> 
                        <img src={Email} alt="email"/>
                        <span>info@gollaa.com</span>
                    </div>

                    <div className="Footer-col2-details-contact"> 
                       <img src={Time} alt="Time"/>
                       <span>MON-FRI, 10am-5pm</span>
                    </div>

                    <div className="Footer-col2-details-contact"> 
                        <img src={Time} alt="TIme"/>
                        <span>SAT, 10am-1pm</span>
                    </div>
                </div>
            </div>


            <div className="Footer-col3">
            
                <div className="Footer-col3-row1">
                   <p>Information</p>
                   <p><Link className="link" to="blog">Blog</Link></p>
                   <p><Link className="link" to="aboutus"> About Us</Link></p>
                   <p><Link className="link" to="stories"> Our Story</Link></p>

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