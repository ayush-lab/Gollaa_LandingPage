import React from 'react';
import earth_Illustration from '../../../assets/images/Earth Illustration.svg'
import logo from '../../../assets/images/Gollaa Logo White.svg'

export default function Section1Change(){


    return(
        <div className="Section1Change">

            <div className="Section1Change-picture">
                <img className="Section1Change-picture-earth" src={earth_Illustration} alt="earth being built"/>
            </div>


            <div className="Section1Change-info">
       
                <div className="Section1Change-info-heading">
                    <p className="Section1Change-info-heading-text"><span>GOLLAA: A CHANGE</span></p>
                </div>
                <div className="Section1Change-info-para">

                    <p className="Section1Change-info-para-text1">Gollaa (Circle or 360°) is a symbol of wholeness and
                     totality. It represents a transformation that comes full circle, something that we strive to 
                     accomplish through our efforts. Gollaa is a platform that facilitates direct interaction between
                      consumers and sellers. This allows local businesses 
                    to make huge profits from the products they sell and consumers to get authentic organic products. </p>

                    <p className="Section1Change-info-para-text2"> Transforming people’s lives</p>

                    <p className="Section1Change-info-para-text3"> Through Gollaa, consumers can get authentic quality 
                    products at competitive prices sourced directly from the producers. Since no intermediaries are 
                    involved, the producers do not lose any profits and can quote accurate prices to the buyers. By making 
                    technology available to local businesses and farmers, we wish to bridge the gap between them and the 
                    customers. This helps producers anticipate the requirements of the consumers and deliver them 
                    successfully.</p>

                    

                </div>
            </div>
        </div>
    );
}

