import React from 'react';
import earth_Illustration from '../../../assets/images/Earth Illustration.svg'
// import logo from '../../../assets/images/Gollaa Logo White.svg'

export default function Section4(){

    return(
        <div className="Section4">
            <div className="Section4-picture">
                <img className="Section4-picture-earth" src={earth_Illustration} alt="earth being built"/>

                <div className="Section4-picture-top">

                </div>

                <div className="Section4-picture-bottom">

                </div>
            </div>


            <div className="Section4-info">

                <div className="Section4-info-top">
                  
                </div>

                <div className="Section4-info-bottom">
                    <p className="Section4-info-bottom-Text1">
                    GOLLAA <br/> A CHANGE 
                    </p>

                    <p className="Section4-info-bottom-Text2" >We at Gollaa have decided to take up the 
                        responsibility of paving the way for a
                         better tomorrow- one that is sustainable and humane.</p>
                </div>
            </div>


        </div>
    );
}

