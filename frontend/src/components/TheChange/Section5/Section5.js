import React from 'react';
import Recycle from '../../../assets/images/Recycle.svg'


export default function Section5Change(){


    return(
        <div className="Section5Change">

            <div className="Section5Change-picture">
                <img className="Section5Change-picture-earth" src={Recycle} alt="Recycle"/>
            </div>


            <div className="Section5Change-info">
       
                <div className="Section5Change-info-heading">
                    <p className="Section5Change-info-heading-text">How do we do it?</p>
                </div>
                <div className="Section5Change-info-para">

                    <p className="Section5Change-info-para-text1"> Gollaa’s technology allows consumers to keep
                     track of the origin, quality, and nature of the products that they are purchasing. No intermediary 
                     is present between the seller and the buyer, which allows for an efficient and reliable purchasing 
                     process. Through Gollaa’s technology, 
                    farmers can also anticipate the needs of the customers and earn better profits.</p>

                    <p className="Section5Change-info-para-text2">  We strive to provide a transparent shopping 
                    experience to our customers using the latest technology that allows tracking of the origin and
                     quality of the products. Gollaa Certified is an
                     emblem of trust and quality that will keep you and your loved ones safe!</p>

                   

                </div>
            </div>
        </div>
    );
}

