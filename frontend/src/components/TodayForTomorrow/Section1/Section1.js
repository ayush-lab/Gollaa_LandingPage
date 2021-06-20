import React from 'react';
import earth from '../../../assets/images/Today for tomorrow Illustration.svg'

export default function Section1Today(){

    return(
          <div className="Section1Today">

            <div className="Section1Today-picture">
                <img className="Section1Today-picture-earth" src={earth} alt="earth with factories and trees"/>

                <div className="Section1Today-picture-top">

                </div>

                <div className="Section1Today-picture-bottom">

                </div>
            </div>


            <div className="Section1Today-info">
       
                <div className="Section1Today-info-heading">
                    <p className="Section1Today-info-heading-text">TODAY FOR TOMORROW</p>
                </div>
                <div className="Section1Today-info-para">

                    <p className="Section1Today-info-para-text1">While globalization has made the lives of 
                    consumers easier by making products available from any part of the world at the most 
                    effective prices, it has also put undue pressure on the environment and threatened the 
                    existence of local communities. In our desire to lead more comfortable lives, we have 
                    put the well-being of our environment at stake. This poses an imminent threat to our 
                    ecological system, which needs to be addressed. </p>

                    <p className="Section1Today-info-para-text2">Not only this, intermediaries who conduct
                     these global operations end up taking a significant portion of the profits made from such sales, and the original producers are left with nothing. Farmers and local businesses are left to fend for 
                    themselves and pressured to produce more products at suboptimal prices.</p>

                </div>
            </div>

        </div>

    
    );
}

