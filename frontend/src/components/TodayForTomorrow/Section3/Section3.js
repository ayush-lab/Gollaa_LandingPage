import React from 'react';
import BigCheck from '../../../assets/images/BigCheck.svg'

export default function Section3Today(){

    return(
          <div className="Section3Today">

            <div className="Section3Today-picture">
                <img className="Section3Today-picture-earth" src={BigCheck} alt="Quality check"/>
            </div>


            <div className="Section3Today-info">
       
                <div className="Section3Today-info-heading">
                    <p className="Section3Today-info-heading-text">Gollaa’s vision of a sustainable world</p>
                </div>
                <div className="Section3Today-info-para">

                    <p className="Section3Today-info-para-text1"> We are 
                    working towards establishing an inclusive and sustainable system that allows interaction between 
                    farmers and end-consumers. By making technology accessible to local 
                    communities, we strive to remove all intermediaries from the process and thereby 
                    reduce the ecological footprint of every transaction. Since the farmers will be selling directly 
                    to the end-consumers locally, 
                    the circuit will be short, utilizing fewer resources and paving the way for a greener future.  </p>

                    <p className="Section3Today-info-para-text2">Gollaa is a platform that allows farmers and 
                    local businesses to market and sell their products at real prices. We strive to support and 
                    train local communities to help them leverage their position as local heroes. Other services that 
                    Golla provides include extending peer-to-peer support within communities and helping farmers 
                    diversify their income by allowing them to rent out farm spaces to the urban population. 
                    </p>

                    <p className="Section3Today-info-para-text3">Our vision statement “TODAY FOR TOMORROW” perfectly captures the 
                        motivation and inducement that we carry within our hearts to help local 
                        communities become resilient and gain a reputable position in society. 
                        By taking action today, 
                    we wish to restore the equilibrium between the environment and humanity.</p>

                </div>
            </div>

        </div>

    
    );
}

