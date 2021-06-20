import React from 'react';
import win_win from '../../../assets/images/win-win.svg'

export default function Section2Change(){

    return(
          <div className="Section2Change">

            <div className="Section2Change-info">
       
                <div className="Section2Change-info-heading">
                    <p className="Section2Change-info-heading-text">Win-win for everyone </p>
                </div>
                <div className="Section2Change-info-para">

                    <p className="Section2Change-info-para-text1">Our efforts are not only 
                    focused on improving the lives of the rural producers but also on addressing the needs of the 
                    urban population. We make high-quality products available 
                    at affordable prices making for a transparent and reliable shopping experience. </p>

                    <p className="Section2Change-info-para-text1">Gollaa ensures that farmers are able to sell 
                    what they grow easily by aiding communication between both parties involved. Through preordering,
                     we help consumers get the products they need and remove the uncertainty 
                    that farmers face about selling their produce at optimal prices.</p>

                    <p className="Section2Change-info-para-text1">Along with reinstating the local economy, 
                    we also help farmers diversify their income sources by encouraging farm stays. This also provides an 
                    opportunity for the urban population to enjoy nature’s serenity and beauty. </p>

                </div>
            </div>

            <div className="Section2Change-picture">
                <img className="Section2Change-picture-earth" src={win_win} alt="mutual profits win win situations"/>
            </div>


        </div>

    
    );
}

