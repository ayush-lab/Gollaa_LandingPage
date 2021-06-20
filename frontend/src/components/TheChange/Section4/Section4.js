import React from 'react';
import Sustainable_Future from '../../../assets/images/Sustainable_Future.svg'

export default function Section4Change(){

    return(
          <div className="Section4Change">

            <div className="Section4Change-info">
       
                <div className="Section4Change-info-heading">
                    <p className="Section4Change-info-heading-text">Making way for a sustainable future  </p>
                </div>
                <div className="Section4Change-info-para">

                    <p className="Section4Change-info-para-text1">In our attempt to make life as convenient as 
                    possible, we have let the environment take the backseat. The global demand for cheap products 
                    has forced farmers to grow more crops at lower prices or produce crops that are beneficial for 
                    the intermediaries. This has had dire consequences for the environment as well as the farmers. 
                    Not being able to make a sustainable livelihood, they are forced to give up farming and take up other professions in urban areas. </p>

                    <p className="Section4Change-info-para-text1"> Gollaa endeavors to mitigate this problem
                     by removing all middlemen involved and helping farmers reach consumers directly. This leads to a 
                     judicious usage of resources and the generation of 
                    lesser waste. All of this makes for a greener and cleaner supply chain.</p>


                </div>
            </div>

            <div className="Section4Change-picture">
                <img className="Section4Change-picture-earth" src={Sustainable_Future} alt="Sustainable_Future at Gollaa"/>
            </div>


        </div>

    
    );
}

