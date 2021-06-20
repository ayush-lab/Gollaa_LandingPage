import React from 'react';
import Plantation from '../../../assets/images/Plantation.svg'

export default function Section1Today(){

    return(
          <div className="Section2Today">

            <div className="Section2Today-info">
       
                <div className="Section2Today-info-heading">
                    <p className="Section2Today-info-heading-text">The richness of Indian terroirs</p>
                </div>
                <div className="Section2Today-info-para">

                    <p className="Section2Today-info-para-text1">The richness of Indian terroirs India is
                     referred to as a “Bio-rich” country in terms of the number of species it holds. Each 
                     one of these species has its unique flavour that adds to the richness of India’s 
                     terroirs. It has an abundance of endemic seeds, including more than 2000 indigenous 
                     varieties of rice etc. There is also the presence of a huge variety of terroirs or 
                     environmental factors that affect the characteristics of a crop.This implies that our country’s farming potential remains unutilized because farmers are forced to grow certain types of commercial crops that generate large profits for the intermediaries but put extreme pressure on the soil. Also, without access to a stable income source, farmers and local artisans are 
                    pressured to take up different jobs in urban areas and give up farming. </p>

                </div>
            </div>

            <div className="Section2Today-picture">
                <img className="Section2Today-picture-earth" src={Plantation} alt="earth being planted with plants"/>

                <div className="Section2Today-picture-top">

                </div>

                <div className="Section2Today-picture-bottom">

                </div>
            </div>


        </div>

    
    );
}

