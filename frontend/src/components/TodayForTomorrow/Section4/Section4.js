import React from 'react';
import BalancedSystem from '../../../assets/images/Balance.svg'

export default function Section4Today(){

    return(
          <div className="Section4Today">

            <div className="Section4Today-info">
       
                <div className="Section4Today-info-heading">
                    <p className="Section4Today-info-heading-text">A well-balanced system </p>
                </div>
                <div className="Section4Today-info-para">

                    <p className="Section4Today-info-para-text1">Golla comes as a win-win situation for both farmers as
                     well as consumers. It allows farmers to list pre-orders that help people know what they are going 
                     to grow. This not only removes the uncertainty of whether the people are going to buy their produce 
                     but also provides farmers an opportunity to list the price that they deem acceptable.
                     The system equally benefits consumers who can get authentic quality products at competitive prices. </p>

                </div>
            </div>

            <div className="Section4Today-picture">
                <img className="Section4Today-picture-earth" src={BalancedSystem} alt="BalancedSystem"/>
            </div>


        </div>

    
    );
}

